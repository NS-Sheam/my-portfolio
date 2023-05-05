import React from 'react';
import ActiveLink from '../ActiveLink/ActiveLink';
import "./Header.css";

const Header = () => {
    return (
        <>
            {/* For dextop */}
            <section className='my-container mx-auto flex justify-around items-center py-4'>
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
                        <button className='text-bandFont'>
                            Contact me
                        </button>
                    </ActiveLink>
                </div>
            </section>
        </>
    );
};

export default Header;