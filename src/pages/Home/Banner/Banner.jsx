import React, { useEffect, useState } from 'react';
import animationData from "../../../../public/banner-animation.json"
import Typical from 'react-typical';
import "./Banner.css"
import myImg from "../../../assets/images/my-img.png"

const Banner = () => {
    // const [showImage, setShowImage] = useState(true);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setShowImage((prevState) => !prevState);
    //         // setShowImage(!showImage);
    //     }, 5000); // change the visibility every 8 seconds

    //     return () => clearInterval(intervalId);
    // }, []); // run this effect only once on mount

    return (
        <>
            {/* for dextop  */}
            <section className='min-h-screen hidden my-container px-6 lg:flex justify-around items-center'>
                <div
                    data-aos="fade-right"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500"
                    className='w-1/2'
                >
                    <h2 className='text-xl font-semibold tracking-widest text-[#d207d9] border-2 border-[#d207d9] rounded-md px-4 py-2 mb-2 w-3/4'>Welcome to my portfolio</h2>
                    <h2 className='text-5xl font-light text-bandFont'>HI! I am <span className='font-semibold mb-2 text-white'>Nazmus Sakib</span></h2>
                    <div className='w-full'>
                        <p className='text-white text-4xl'>I am a</p>
                        <p className='ms-6 text-5xl font-bold font-gradient underline banner-text-underline'>
                            <Typical
                                steps={['Mern Stack developer', 5000,
                                    'React Developer', 5000,
                                    'Frontend Developer', 5000,]}
                                loop={Infinity}
                                wrapper="h2"
                            />
                        </p>
                    </div>
                </div>
                <div className=''>
                            <div
                                className='banner-img bg-bandPrimary border-4 rounded-bl-full rounded-br-full rounded-tl-full overflow-hidden'
                            >
                                <img className=''
                                    src={myImg} alt="" />
                            </div> 
                </div>
            </section>
            {/* For Mobile  */}
            <section className='my-container px-4 lg:hidden py-16'>
                <div className='mb-8'>
                    <h2 className='text-xs font-semibold tracking-widest text-[#d207d9] border-2 border-[#d207d9] rounded-md px-4 py-2 mb-2 w-3/4'>Welcome to my portfolio</h2>
                    <h2 className='text-xl font-light text-bandFont'>HI! I am <span className='font-semibold mb-2 text-white'>Nazmus Sakib</span></h2>
                    <div className='w-full'>
                        <p className='font-light text-xl mb-2 text-white'>I am a</p>
                        <p className='ms-6 text-3xl font-bold font-gradient underline banner-text-underline'>
                            <Typical
                                steps={['Mern Stack Web developer', 5000,
                                    'Frontend Developer', 5000,
                                    'React Developer', 5000]}
                                loop={Infinity}
                                wrapper="p"
                            />
                        </p>
                    </div>
                </div>
                <div className='mx-auto'>
                        <div
                            className='banner-img bg-bandPrimary border-4 rounded-bl-full rounded-br-full rounded-tl-full overflow-hidden w-3/4 mx-auto'
                        >
                            <img className=''
                                src={myImg} alt="" />
                        </div>
                </div>
            </section>
        </>
    );
};

export default Banner;