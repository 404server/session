import React, { createContext, useState, useContext } from 'react';


const Theme = createContext();

export const useTheme = () => useContext(Theme);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState({
        backgroundColor: 'rgb(165,221,218)',
        borderColor: 'rgb(106,14,148)',
        boxShadowColor: 'rgb(138,94,214)',
    });

    return (
        <Theme.Provider value={{ theme, setTheme }}>
            {children}
        </Theme.Provider>
    );
};