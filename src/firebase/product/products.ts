import { Product } from '@/types/Product.types';
import {
  collection,
  addDoc,
  updateDoc,
  query,
  where,
  getDocs,
  doc,
} from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';

import { auth } from '../auth/auth';
import { db, storage } from '../firebase';

const user = auth.currentUser;

export const createProduct = async (product: Product, images: File[]) => {
  if (user) {
    try {
      const productsRef = collection(db, 'products');
      const docRef = await addDoc(collection(db, 'products'), {
        product,
      });

      await updateDoc(docRef, { docID: docRef.id, product });

      const q = query(productsRef, where('product.id', '==', product.id));

      for (let i = 0; i < images.length; i++) {
        const file = images[i];
        const fileRef = ref(
          storage,
          `productImages/${user.uid}/${product.id}_${i}`
        );
        await uploadBytes(fileRef, file);
        const downloadURL = await getDownloadURL(fileRef);
        const snapshot = await getDocs(q);

        snapshot.forEach((product) => {
          const productId = product.id;
          const data = product.data().product;

          updateDoc(doc(db, 'products', productId), {
            product: {
              ...data,
              images: [
                ...(data.images || []), // add previous images if any
                downloadURL,
              ],
            },
          });
        });
      }
    } catch (err) {
      throw err;
    }
  }
};
