import { useState } from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import "./Header.css";
import { } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const handleDownloadResume = () => {
        window.open("https://drive.google.com/u/0/uc?id=1XhOOmSn6iqDiaA-DNsgsBg3HS7YFNtfa&export=download");
    };
    return (
        <>
            {/* For dextop */}
            <section className='hidden lg:flex justify-around items-center inner-container py-4'>
                <div>
                    <h3 className='text-white font-bold'>NS-Sheam</h3>
                </div>
                <div>
                    <ul className='header-list flex text-bandFont'>
                        <li>
                            <ActiveLink to="/">Home</ ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to="/projects">Projects</ ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to="/about">About</ActiveLink>
                        </li>
                        <li onClick={handleDownloadResume}>
                            <ActiveLink >Resume</ActiveLink>
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
                <h3 className='text-white text-xl font-bold'>NS-Sheam</h3>
                <div className='flex flex-col justify-center items-end'>
                    <div>
                        {
                            isMenuOpen ?
                                <FontAwesomeIcon onClick={() => setIsMenuOpen(!isMenuOpen)} className={'text-2xl text-bandFont font-extrabold'} icon={faXmark} /> :
                                <FontAwesomeIcon onClick={() => setIsMenuOpen(!isMenuOpen)} className={'text-2xl text-bandFont font-extrabold'} icon={faBars} />

                        }
                    </div>
                    <div className={`sm-menu-item absolute transform duration-500 backdrop-blur-sm rounded-md border p-2 m-2 border-white z-30 ${isMenuOpen ? "top-10" : "-top-80"}`}>
                        <ul className='header-list text-bandFont mb-2 text-xl flex flex-col items-center gap-2'>
                            <li className=''>
                                <ActiveLink to="/">Home</ ActiveLink>
                            </li>
                            <hr className='w-full'/>
                            <li className=''>
                                <ActiveLink to="/Projects">Projects</ ActiveLink>
                            </li>
                            <hr className='w-full'/>
                            <li className=''>
                                <ActiveLink to="/about">About</ActiveLink>
                            </li>
                            <hr className='w-full'/>
                            <li onClick={handleDownloadResume} className=''>
                                <ActiveLink>resume</ActiveLink>
                            </li>
                            <hr className='w-full'/>
                            <li className=''>
                                <ActiveLink to="/contact">Contact</ActiveLink>
                            </li>
                            <hr className='w-full'/>

                            <ActiveLink to="/contact" className="">
                                <button className='font-semibold text-[#d207d9] border-2 border-[#d207d9] py-2 px-2 hover:border-bandFont hover:text-bandFont text-xl'>
                                    Contact me
                                </button>
                            </ActiveLink>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;