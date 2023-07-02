import { useEffect, useState } from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';


// Import Swiper styles
import 'swiper/swiper-bundle.min.css';

const Slide = () => {
    const [skills, setSkills] = useState({})
    useEffect(() => {
        fetch("skill.json")
            .then(res => res.json())
            .then(skills => setSkills(skills))
    }, [])

    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width >= 1024) {
                setSlidesPerView(3);
            }
            else if ((width >= 768)) {
                setSlidesPerView(2);
            } else {
                setSlidesPerView(1);
            }
        };
        handleResize(); // call the function once on mount
        window.addEventListener('resize', handleResize); // listen for resize events

        return () => window.removeEventListener('resize', handleResize); // remove the event listener on unmount
    }, []);

    // call the function once on mount
    const styles = {
        path: {
            stroke: '#ffd60a' // Green color
        },
        trail: {
            stroke: '#d6d6d6' // Grey color
        },
        text: {
            fill: '#ffffff', // White color
            fontSize: '1.5rem',
            fontWeight: "700",
        }
    };
    return (
        <div className='my-6'>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                spaceBetween={50}
                slidesPerView={slidesPerView}
                navigation={false}
                autoplay={{ delay: 3000 }}
                // pagination={{ clickable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {Array.isArray(skills) &&
                    skills.map(skill => (
                        <SwiperSlide key={skill.id}>
                            <div className='text-center relative w-3/4 lg:w-full mx-auto'>
                                <CircularProgressbar
                                    styles={styles}
                                    value={skill.percentage}
                                    text={`${skill.percentage}%`} />
                                <p className='text-xl lg:text-2xl text-white font-bold'>{skill.name}</p>
                                <p className='text-xl lg:text-2xl text-bandYellow font-bold'>{skill.proficiency}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Slide;