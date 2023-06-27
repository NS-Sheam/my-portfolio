import { useContext, useEffect, useState } from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import "./Header.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { AiOutlineHome, AiOutlineMail, AiOutlineProject } from 'react-icons/ai';
import { SiAboutdotme } from 'react-icons/si';
import { motion } from "framer-motion";
import { ThemeContext } from '../../../layouts/Main';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const [isHeaderFixed, setIsHeaderFixed] = useState(false);

    const { theme, setTheme } = useContext(ThemeContext);

    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn)
        theme == "light" ? setTheme("dark") : setTheme("light")
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.pageYOffset;
            console.log(scrollPosition);

            if (scrollPosition > 0) {
                setIsHeaderFixed(true);
            } else {
                setIsHeaderFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const floatingMenu = <div
        className={`${isHeaderFixed && "fixed bottom-2 md:bottom-auto md:left-2 w-full md:w-auto md:top-1/3 bg-bandPrimary rounded-full z-10"}`}>
        <ul className={`header-list flex gap-6 ${isHeaderFixed && "flex-row md:flex-col gap-6 p-3 text-2xl items-center justify-center"} text-bandFont`}>
            <li>
                <ActiveLink to="/">{isHeaderFixed && <AiOutlineHome />}</ ActiveLink>
            </li>
            <li>
                <ActiveLink to="/projects">{isHeaderFixed && <AiOutlineProject />}</ ActiveLink>
            </li>
            <li>
                <ActiveLink to="/about">{isHeaderFixed && <SiAboutdotme />}</ActiveLink>
            </li>
            <li>
                <ActiveLink to="/contact">{isHeaderFixed && <AiOutlineMail />}</ActiveLink>
            </li>

        </ul>
    </div>
    const spring = {
        type: "spring",
        stiffness: 700,
        damping: 30
    };
    return (
        <>
            {/* For dextop */}
            <section className='hidden lg:flex justify-around items-center inner-container py-4'>
                <div className='flex justify-center items-center gap-2'>
                    <h3 className='text-white font-bold'>NS-Sheam</h3>
                    <div className="switch dark-switch" data-isOn={isOn} onClick={toggleSwitch}>
                        <motion.div className={theme == "light" ? "dark-handle" : "light-handle"} layout transition={spring} />
                    </div>
                </div>
                <div className={`${isHeaderFixed && "hidden"}`}>
                    <ul className='header-list flex gap-6 text-bandFont'>
                        <li>
                            <ActiveLink to="/">Home</ ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to="/projects">Projects</ ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to="/about">About</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to="/contact">Contact</ActiveLink>
                        </li>

                    </ul>
                </div>
                <div>
                    <ActiveLink to="/contact">
                        <button className='font-semibold text-[#d207d9] border-2 border-[#d207d9] py-2 px-3 hover:border-bandFont hover:text-bandFont'>
                            Hire me
                        </button>
                    </ActiveLink>
                </div>
            </section>

            {/* For Mobile  */}
            <section className='lg:hidden my-container px-4 py-4 flex justify-between items-start'>
                <div className='flex justify-center items-center gap-2'>
                <h3 className='text-white text-xl font-bold'>NS-Sheam</h3>
                <div className="switch dark-switch" data-isOn={isOn} onClick={toggleSwitch}>
                    <motion.div className={theme == "light" ? "dark-handle" : "light-handle"} layout transition={spring} />
                </div>
                </div>
                <div className='flex flex-col justify-center items-end'>
                    <div>
                        {
                            isMenuOpen ?
                                <FontAwesomeIcon onClick={() => setIsMenuOpen(!isMenuOpen)} className={'text-2xl text-bandFont font-extrabold'} icon={faXmark} /> :
                                <FontAwesomeIcon onClick={() => setIsMenuOpen(!isMenuOpen)} className={'text-2xl text-bandFont font-extrabold'} icon={faBars} />

                        }
                    </div>
                    <div className={`sm-menu-item absolute transform duration-500 ${theme == "light" ? " bg-black bg-opacity-60" : "backdrop-blur-sm"} rounded-md border p-2 m-2 border-white z-30 ${isMenuOpen ? "top-10" : "-top-80"}`}>
                        <ul className={`header-list text-bandFont mb-2 text-xl flex flex-col items-center gap-2`}>
                            <li className=''>
                                <ActiveLink to="/">Home</ ActiveLink>
                            </li>
                            <hr className='w-full' />
                            <li className=''>
                                <ActiveLink to="/Projects">Projects</ ActiveLink>
                            </li>
                            <hr className='w-full' />
                            <li className=''>
                                <ActiveLink to="/about">About</ActiveLink>
                            </li>
                            <hr className='w-full' />
                            <li className=''>
                                <ActiveLink to="/contact">Contact</ActiveLink>
                            </li>
                            <hr className='w-full' />

                            <ActiveLink to="/contact" className="">
                                <button className='font-semibold text-[#d207d9] border-2 border-[#d207d9] py-2 px-2 hover:border-bandFont hover:text-bandFont text-xl'>
                                    Contact me
                                </button>
                            </ActiveLink>
                        </ul>
                    </div>
                </div>
            </section>
            {floatingMenu}
        </>
    );
};

export default Header;