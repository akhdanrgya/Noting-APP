import { auth } from './firebaseConfig'; // Pastikan path ini sesuai
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

// Sign up dengan email dan password
export const signUp = async (email: string, password: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    console.error("Error signing up:", error.message);
    throw new Error(error.message);
  }
};

// Sign in dengan email dan password
export const signIn = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error: any) {
    console.error("Error signing in:", error.message);
    throw new Error(error.message);
  }
};

// Sign out
export const logOut = async () => {
  try {
    await signOut(auth);
    console.log('User signed out');
  } catch (error: any) {
    console.error("Error signing out:", error.message);
    throw new Error(error.message);
  }
};

// Listen to auth state changes (user login status)
export const onAuthChanged = (callback: (user: any) => void) => {
  return onAuthStateChanged(auth, (user) => {
    callback(user);
  });
};
