import { createContext } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth";
import { app } from "../../../Firebase/firebase.config";

// create auth context
export const AuthContext = createContext();


// create auth context provider
export default function AuthContextProvider({ children }) {
  // sign up new user with firebase
  const auth = getAuth(app);

  const signupUserWithEmailAndPassword = async (email, password, name) => {
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
      })


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

  return (
    <AuthContext.Provider value={{ signupUserWithEmailAndPassword }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
