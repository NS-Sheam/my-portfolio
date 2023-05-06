import React from 'react';
import animationData from "../../../../public/banner-animation.json"
import Lottie from 'react-lottie';
import Typical from 'react-typical';
import "./Banner.css"
import myImg from "../../../assets/images/my-img.png"

const Banner = () => {
    return (
        <>
            {/* for dextop  */}
            <section className=' h-screen hidden my-container lg:flex justify-around items-center'>
                <div>
                    <h2 className='text-xl font-semibold tracking-widest text-[#d207d9] border-2 border-[#d207d9] rounded-md px-4 py-2 mb-2 w-3/4'>Welcome to my portfolio</h2>
                    <h2 className='text-3xl font-light text-bandFont'>I am <span className='font-semibold mb-2'>MD. Nazmus Sakib Sheam</span></h2>
                    <div>
                        <p className='text-bandFont font-light text-3xl mb-2'>I am a</p>
                        <p className='ms-6 text-5xl font-bold font-gradient underline banner-text-underline'>
                            <Typical
                                steps={['Web developer', 3000,
                                    'UI/UX Designer', 3000,
                                    'React Developer', 3000]}
                                loop={Infinity}
                                wrapper="p"
                            />
                        </p>
                    </div>
                </div>
                <div>
                    <Lottie
                        options={{
                            animationData: animationData,
                        }}
                        width={400}
                        height={400}
                    />
                </div>
            </section>
            {/* For Mobile  */}
            <section className='my-container-sm lg:hidden py-4'>
                <div>
                    <h2 className='text-xs font-semibold tracking-widest text-[#d207d9] border-2 border-[#d207d9] rounded-md px-4 py-2 mb-2 w-3/4'>Welcome to my portfolio</h2>
                    <h2 className='text-xl font-light text-bandFont'>I am <span className='font-semibold mb-2'>MD. Nazmus Sakib Sheam</span></h2>
                    <div>
                        <p className='text-bandFont font-light text-xl mb-2'>I am a</p>
                        <p className='ms-6 text-3xl font-bold font-gradient underline banner-text-underline'>
                            <Typical
                                steps={['Web developer', 3000,
                                    'UI/UX Designer', 3000,
                                    'React Developer', 3000]}
                                loop={Infinity}
                                wrapper="p"
                            />
                        </p>
                    </div>
                </div>
                <div className='flex justify-center items-center'>
                    <div 
                    data-aos="fade-right"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500"
                    >
                        <div className=''>
                        <Lottie
                        className="object-cover"
                            options={{
                                animationData: animationData,
                            }}
                            width={100}
                            height={100}
                        />
                        </div>
                    </div>
                    <div
                    className='w-2/3'
                        data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500"
                    >
                        <img className='object-cover' src={myImg} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;