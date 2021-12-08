import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: 'AIzaSyDfH0k8RBC9KPOe4FgycOETSnGCQg7ZoQI',
  authDomain: 'clothing-store-8c710.firebaseapp.com',
  projectId: 'clothing-store-8c710',
  storageBucket: 'clothing-store-8c710.appspot.com',
  messagingSenderId: '115232341958',
  appId: '1:115232341958:web:4296aeaadd2da625fb7cc7',
  measurementId: 'G-C5PVTRFVE8'
};
firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
