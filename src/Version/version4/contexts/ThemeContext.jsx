import { createContext, useEffect, useState } from "react"
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export function ThemeContextProvider({children}){
    const [theme, setTheme] = useState('light');

    useEffect(()=> {
        document.documentElement.className = theme;
    }, [theme])

    const toggleTheme = ()=> {
        setTheme(prev => (prev === 'light' ?  'dark': 'light'));
    }

    return(
        <ThemeContext.Provider value={{theme, toggleTheme}} >{children}</ThemeContext.Provider>
    )
}

ThemeContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
}