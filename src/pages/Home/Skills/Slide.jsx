import React, { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

const Slide = () => {
    const [skills, setSkills] = useState({})
    useEffect(() => {
        fetch("skill.json")
            .then(res => res.json())
            .then(skills => setSkills(skills))
    }, [])
    const styles = {
        path: {
            stroke: '#77037B' // Green color
        },
        trail: {
            stroke: '#d6d6d6' // Grey color
        },
        text: {
            fill: '#ffffff', // White color
            fontSize: '16px',
            fontWeight: "700",
        }
    };
    return (
        <div className='my-6'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation={true}
                // pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {   Array.isArray(skills) &&
                    skills.map(skill => (
                        <SwiperSlide key={skill.id}>
                            <div className='text-center'>
                                <CircularProgressbar
                                    styles={styles}
                                    value={skill.percentage}
                                    text={`${skill.percentage}%`} />
                                <p className='text-xs lg:text-2xl text-bandFont font-bold'>{skill.name}</p>
                                <p className='text-xs lg:text-2xl text-bandFont font-bold'>{skill.proficiency}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Slide;