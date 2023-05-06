import React from 'react';
import Header from '../../shared/Header/Header';
import Banner from '../Banner/Banner';
import "./HeaderBanner.css";

const HeaderBanner = () => {
    return (
        <div className='w-screen mx-auto header-banner'>
            <Header />
            <Banner />
        </div>
    );
};

export default HeaderBanner;