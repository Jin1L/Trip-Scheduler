import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { auth } from "./firebase";

//required if you want to keep logged in after user exits the browser or closes tab
setPersistence(auth, browserLocalPersistence);

//* Log in
export const LogIn = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password);
};

//* Sign up
export const SignUp = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

// * Sign out
export const SignOut = async () => {
  await signOut(auth);
};
