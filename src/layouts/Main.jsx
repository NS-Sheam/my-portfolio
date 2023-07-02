import { createContext, useEffect, useLayoutEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import ParticlesDesign from '../components/ParticlesDesign';
export const ThemeContext = createContext(null);
import AOS from 'aos';
import 'aos/dist/aos.css';
const Main = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });
    
    const [theme, setTheme] = useState("light")
    useEffect(() => {
        AOS.init();
      }, [theme]);
    const themeInfo = { theme, setTheme };
    return (
        <ThemeContext.Provider value={themeInfo}>
            <div data-theme={theme}>
                <ParticlesDesign />
                <Outlet />
                <Footer />
            </div>
        </ThemeContext.Provider>
    );
};

export default Main;