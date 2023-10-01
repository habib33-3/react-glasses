/* eslint-disable react/prop-types */
import { createContext } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import auth from "./../config/firebaseConfig";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const authentication = {
    googleLogin,
    createUser,
    signIn,
  };

  return (
    <div>
      <AuthContext.Provider value={authentication}>
        {children}
      </AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
