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

export const createProduct = async (product: Product, image: File) => {
  if (user) {
    try {
      const productsRef = collection(db, 'products');
      const docRef = await addDoc(collection(db, 'products'), {
        product,
      });

      await updateDoc(docRef, { docID: docRef.id, product });

      const q = query(productsRef, where('product.id', '==', product.id));

      const fileRef = ref(storage, `productImages/${user.uid}/${product.id}`);
      await uploadBytes(fileRef, image);

      const downloadURL = await getDownloadURL(fileRef);

      const snapshot = await getDocs(q);

      snapshot.forEach((product) => {
        const productId = product.id;
        const data = product.data().product;

        updateDoc(doc(db, 'products', productId), {
          product: {
            ...data,
            image: downloadURL,
          },
        });
      });
    } catch (err) {
      throw err;
    }
  }
};
