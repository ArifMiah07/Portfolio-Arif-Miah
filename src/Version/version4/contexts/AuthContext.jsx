import { createContext } from "react";
import PropTypes from 'prop-types';


export const AuthContext = createContext();


export default function AuthContextProvider({children}){
    return(
        <AuthContext.Provider>{children}</AuthContext.Provider>
    )
}


AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}