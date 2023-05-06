import React, { useState } from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import "./Header.css";
import { } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <>
            {/* For dextop */}
            <section className='hidden lg:flex justify-around items-center my-container mx-auto py-4'>
                <div>
                    <h3 className='text-bandFont'>NS-Sheam</h3>
                </div>
                <div>
                    <ul className='header-list flex text-bandFont'>
                        <li>
                            <ActiveLink to="/">Home</ ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to="/">About</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink to="/">Contact</ActiveLink>
                        </li>

                    </ul>
                </div>
                <div>
                    <ActiveLink>
                        <button className='font-semibold text-[#d207d9] border-2 border-[#d207d9] py-2 px-3 hover:border-bandFont hover:text-bandFont'>
                            Contact me
                        </button>
                    </ActiveLink>
                </div>
            </section>

            {/* For Mobile  */}
            <section className='lg:hidden my-container-sm py-4 flex justify-between items-start'>
                <h3 className='text-bandFont text-xl font-bold'>NS-Sheam</h3>
                <div className='flex flex-col justify-center items-end'>
                    <div>
                        {
                            isMenuOpen ?
                                <FontAwesomeIcon onClick={() => setIsMenuOpen(!isMenuOpen)} className={'text-2xl text-bandFont font-extrabold'} icon={faXmark} /> :
                                <FontAwesomeIcon onClick={() => setIsMenuOpen(!isMenuOpen)} className={'text-2xl text-bandFont font-extrabold'} icon={faBars} />

                        }
                    </div>
                    <div className={`sm-menu-item absolute transform duration-500 backdrop-blur-sm rounded-md border p-2 m-2 border-white ${isMenuOpen ? "top-10" : "-top-80"}`}>
                        <ul className='header-list text-bandFont mb-2 text-xl flex flex-col items-center gap-2'>
                            <li className=''>
                                <ActiveLink to="/">Home</ ActiveLink>
                            </li>
                            <hr className='w-full'/>
                            <li className=''>
                                <ActiveLink to="/">About</ActiveLink>
                            </li>
                            <hr className='w-full'/>
                            <li className=''>
                                <ActiveLink to="/">Contact</ActiveLink>
                            </li>
                            <hr className='w-full'/>

                            <ActiveLink className="">
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