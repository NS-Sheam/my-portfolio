import { useLayoutEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';

const Main = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
      });
    return (
        <>
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;