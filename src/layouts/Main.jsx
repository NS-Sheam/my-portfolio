import { useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import ParticlesDesign from '../components/ParticlesDesign';

const Main = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <>
            <ParticlesDesign />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;