import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import HeaderBanner from '../pages/Home/HeaderBanner/HeaderBanner';

const Main = () => {
    return (
        <>
            <HeaderBanner />
            <Outlet />
            <Footer />
        </>
    );
};

export default Main;