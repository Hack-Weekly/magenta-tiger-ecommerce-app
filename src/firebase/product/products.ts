import { Product } from '@/types/Product.types';
import { collection, addDoc, updateDoc } from 'firebase/firestore';

import { auth } from '../auth/auth';

import { db } from '../auth/auth';

export const createProduct = async (product: Product) => {
  try {
    const docRef = await addDoc(collection(db, 'products'), {
      product,
    });
    await updateDoc(docRef, { docID: docRef.id, product });
  } catch (err) {
    throw 'Oops, it looks like something went wrong while creating product.';
  }
};
