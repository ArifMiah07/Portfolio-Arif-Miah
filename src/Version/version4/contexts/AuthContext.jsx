import { createContext } from "react";
import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  // sign up new user with firebase
  const auth = getAuth();

  const signupUserWithEmailAndPassword = async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
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
