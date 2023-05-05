import React from 'react';
import animationData from "../../../../public/banner-animation.json"
import Lottie from 'react-lottie';
import Typical from 'react-typical';

const Banner = () => {
    return (
        <section className='my-container flex justify-around items-center'>
            <div>

                <h2 className='text-bandFont'>Welcome to my portfolio</h2>
                <h2 className='text-bandFont'>I am MD. Nazmus Sakib Sheam</h2>
                <h1 className='text-bandFont'>I am a
                    <span>
                        <Typical
                            steps={['Web developer', 2000,
                                'UI/UX Designer', 2000,
                                'React Developer', 2000]}
                            loop={Infinity}
                            wrapper="p"
                        />
                    </span>
                </h1>
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