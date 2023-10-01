/* eslint-disable react/prop-types */
import { createContext } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "./../config/firebaseConfig";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };


  

  const authentication = {
    googleLogin,
    user,
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
