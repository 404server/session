import React from 'react';
import HomeScreen from "./pages/HomeScreen";
import {ThemeProvider} from "./components/Theme";


const App = () => {
    return (
        <div>
            <ThemeProvider>
                <HomeScreen/>
            </ThemeProvider>
        </div>
    );
};

export default App;