import { app, db } from '../firebase';
import { query, getDocs, collection, where, addDoc } from 'firebase/firestore';

import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  Auth,
} from 'firebase/auth';

export const auth: Auth = getAuth(app);

const googleProvider = new GoogleAuthProvider();

export async function signInWithGoogle() {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    const user = result.user;
    const queryDb = query(
      collection(db, 'users'),
      where('uid', '==', user.uid)
    );
    const docs = await getDocs(queryDb);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, 'users'), {
        uid: user.uid,
        name: user.displayName,
        authProvider: 'google',
        email: user.email,
      });
    }
  } catch (error) {
    console.log(error);
  }
}

export async function logout() {
  try {
    await signOut(auth);
  } catch (err) {
    throw err;
  }
}
