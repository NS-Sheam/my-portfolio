import Slide from './Slide';




const Skills = () => {
    return (
        <section className='bg-gradient-to-tr from-bandPrimary to-bandSecondary my-container lg:min-h-screen p-4 lg:p-6'>
            <div
                data-aos="fade-up"
                data-aos-anchor-placement="top-bottom"
                data-aos-duration="1000"
                className='w-4/5 mx-auto text-center p-4 lg:p-8 -mt-16 lg:-mt-20 bg-[#2c0d57] rounded-2xl'>
                <h1 className='text-white text-xl lg:text-2xl font-bold mb-4'>Skills</h1>
                <p className='text-bandFont text-xs lg:text-xl mb-4 w-3/4 mx-auto'>Check out my extensive list of skills to get a comprehensive understanding of my expertise and capabilities. From front-end development to back-end programming, UI/UX design, database management, and more, my skills cover a wide range of areas in web development. Explore the skills section to see how my technical proficiencies align with your project requirements and discover the value I can bring to your team. </p>
                <div className="skills">
                    <Slide />
                </div>
            </div>
        </section>
    );
};

export default Skills;
