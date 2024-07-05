import { addDoc, collection } from 'firebase/firestore';

import { db } from './firebase';

export const addNewPost = async (post) => {
  try {
    const docRef = await addDoc(collection(db, 'posts'), post);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
