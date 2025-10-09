import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../../../Firebase/firebase.config";

// create auth context
export const AuthContext = createContext();

// create auth context provider
export default function AuthContextProvider({ children }) {
  // firebase auth
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // sign up with email and password
  const handleSignupUserWithEmailAndPassword = async (
    email,
    password,
    name
  ) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // update user name
      await updateProfile(user, {
        displayName: name,
      });

      console.log("User Signed up Successfully! ", user);
      return user;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const customError = {
        code: errorCode,
        message: errorMessage,
        err: error,
      };
      console.log(customError);
    }
  };
  // sign in existing user with email and password
  const handleLoginWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User signed in successfully! ", user);
      return user;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      const customError = {
        code: errorCode,
        message: errorMessage,
        err: error,
      };
      console.log(customError);
    }
  };

  // sign out
  const handleLogoutUser = async () => {
    await signOut(auth);
  };
  // observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser || null);
      setLoading(false);
      console.log("Auth state changed:", currentUser);
    });

    // cleanup
    return () => unsubscribe();
  }, [auth]);

  const values = {
    handleSignupUserWithEmailAndPassword,
    handleLoginWithEmailAndPassword,
    user,
    loading,
    handleLogoutUser,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
