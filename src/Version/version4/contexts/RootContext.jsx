import AuthContextProvider from "./AuthContext";

import PropTypes from 'prop-types';


export default function RootContextProvider({children}){
    return(
        <AuthContextProvider>
            {children}
        </AuthContextProvider>
    )
}


RootContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}