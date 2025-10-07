import AuthContextProvider from "./AuthContext";

import PropTypes from "prop-types";
import { ThemeContextProvider } from "./ThemeContext";

export default function RootContextProvider({ children }) {
  return (
    <AuthContextProvider>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </AuthContextProvider>
  );
}

RootContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
