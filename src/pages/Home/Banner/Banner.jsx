import React from 'react';
import animationData from "../../../../public/banner-animation.json"
import Lottie from 'react-lottie';
import Typical from 'react-typical';
import "./Banner.css"

const Banner = () => {
    return (
        <section className='hidden my-container flex justify-around items-center'>
            <div>
                <h2 className='text-xl text-[#d207d9] border-4 border-[#d207d9] rounded-md px-4 py-2 mb-2 w-3/4'>Welcome to my portfolio</h2>
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
    );
};

export default Banner;