"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  updateProfile,
  signOut,
  User,
} from "firebase/auth";
import { firebaseAuth } from "@/auth/firebase.config";

const provider = new GoogleAuthProvider();

import { UserCredential } from "firebase/auth";

type AuthContextType = {
  createUser: (
    displayName: string,
    email: string,
    password: string
  ) => Promise<void>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  createUserWithGoogle: () => Promise<UserCredential>;
  signOutUser: () => Promise<void>;
  isLoggedIn: boolean;
  user: User | null;
};

const firebaseAuthContext = createContext<AuthContextType>({
  createUser: () => Promise.reject(), // Provide default implementations or proper handling here
  signIn: () => Promise.reject(),
  createUserWithGoogle: () => Promise.reject(),
  signOutUser: () => Promise.reject(),
  isLoggedIn: false,
  user: null,
});

export const useFirebaseAuth = () => useContext(firebaseAuthContext);

export const FirebaseAuthProvider = (props: any) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        //@ts-ignore
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const createUser = async (
    email: string,
    paswd: string,
    displayName: string
  ) => {
    const userCredential = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      paswd
    );
    await updateProfile(userCredential.user, {
      displayName: displayName,
    });
    setUser(userCredential.user);
  };

  const signIn = (email: string, paswd: string) => {
    return signInWithEmailAndPassword(firebaseAuth, email, paswd);
  };

  const createUserWithGoogle = () => {
    return signInWithPopup(firebaseAuth, provider);
  };

  const signOutUser = () => {
    return signOut(firebaseAuth);
  };

  const isLoggedIn = user ? true : false;

  return (
    <firebaseAuthContext.Provider
      value={{
        createUser,
        signIn,
        createUserWithGoogle,
        signOutUser,
        isLoggedIn,
        user,
      }}
    >
      {props.children}
    </firebaseAuthContext.Provider>
  );
};
