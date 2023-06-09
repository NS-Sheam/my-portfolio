
import HeaderBanner from '../HeaderBanner/HeaderBanner';
import Skills from '../Skills/Skills';
import Projects from '../Projects/Projects';
import { useLayoutEffect } from 'react';
import Quotes from '../Quotes/Quotes';

const Home = () => {
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <>
            <HeaderBanner />
            <Skills />
            <Projects />
            <Quotes />
        </>
    );
};

export default Home;