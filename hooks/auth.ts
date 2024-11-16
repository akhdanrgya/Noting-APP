import { auth } from './firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, User } from 'firebase/auth';

export const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      console.error("Email is already in use.");
    }
    throw new Error(`Sign Up Error: ${error.message}`);
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    if (error.code === 'auth/user-not-found') {
      console.error("User not found.");
    }
    throw new Error(`Sign In Error: ${error.message}`);
  }
};

export const logOut = async () => {
  try {
    if (!auth.currentUser) {
      console.log('No user is logged in');
      return;
    }
    await signOut(auth);
    console.log('User signed out');
  } catch (error: any) {
    throw new Error(`Sign Out Error: ${error.message}`);
  }
};

export const onAuthChanged = (callback: (user: User | null) => void) => {
  return onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};
