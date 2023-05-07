import Slide from './Slide';




const Skills = () => {
    return (
        <section className='bg-gradient-to-tr from-bandPrimary to-bandSecondary my-container h-screen p-4 lg:p-6'>
            <div className='w-3/4 mx-auto text-center p-6 lg:p-8 -mt-10 lg:-mt-20 bg-[#2c0d57] rounded-2xl'>
                <h1 className='text-white text-xl lg:text-2xl font-bold mb-4'>Skills</h1>
                <p className='text-bandFont text-xs lg:text-xl mb-4 w-3/4 mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum magni ab cupiditate delectus minus porro ad necessitatibus quam ullam perferendis </p>
                <div className="skills">
                    <Slide />
                </div>
            </div>
        </section>
    );
};

export default Skills;