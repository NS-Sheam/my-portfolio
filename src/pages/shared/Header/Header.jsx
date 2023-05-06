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
            <section className='hidden my-container mx-auto flex justify-around items-center py-4'>
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
                        <button className='text-[#d207d9] border-4 border-[#d207d9] py-2 px-3 hover:border-bandFont hover:text-bandFont'>
                            Contact me
                        </button>
                    </ActiveLink>
                </div>
            </section>

            {/* For Mobile  */}
            <section className='my-container-sm py-4 flex justify-between items-start'>
                <h3 className='text-bandFont text-2xl font-extrabold'>NS-Sheam</h3>
                <div className='flex flex-col justify-center items-center'>
                    <div>
                        <FontAwesomeIcon onClick={() => setIsMenuOpen(false)} className={`text-2xl text-bandFont font-extrabold ${setIsMenuOpen && "hidden"}`} icon={faBars} />
                        <FontAwesomeIcon onClick={() => setIsMenuOpen(true)} className={`text-2xl text-bandFont font-extrabold ${!setIsMenuOpen && "hidden"}`} icon={faXmark} />
                    </div>
                    <div className={`sm-menu-item relative -left-80`}>
                        <ul className='header-list text-bandFont mb-2 text-xl flex flex-col items-center'>
                            <li className='my-2'>
                                <ActiveLink to="/">Home</ ActiveLink>
                            </li>
                            <li className='my-2'>
                                <ActiveLink to="/">About</ActiveLink>
                            </li>
                            <li className='mt-2'>
                                <ActiveLink to="/">Contact</ActiveLink>
                            </li>

                        </ul>
                    </div>
                </div>
                <ActiveLink className="my-2">
                    <button className='text-[#d207d9] border-2 border-[#d207d9] py-2 px-2 hover:border-bandFont hover:text-bandFont text-xl'>
                        Contact me
                    </button>
                </ActiveLink>
            </section>
        </>
    );
};

export default Header;