import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SingleTabItem = ({ projects }) => {
    const [fold, setFold] = useState(true);
    return (
        <div className="grid lg:grid-cols-3 items-end mx-auto my-5 gap-5">
            {
                fold ?
                    projects?.slice(0, 5).map(project => <Link
                        key={project.id}
                        to={project.liveSite}>
                        <div
                        data-aos="zoom-in"
                        data-aos-offset="50"
                        data-aos-duration="500"
                        className='relative rounded-lg shadow-2xl'>
                            <div className='flex flex-col gap-2 text-white bg-black bg-opacity-75 absolute -top-12 hover:top-0 h-full w-full right-0 rounded-md opacity-0 hover:opacity-100 overflow-hidden transform duration-200 p-2'>
                                <h3 className='text-xl font-bold leading-3'>{project.projectName}</h3>
                                <p className='text-left leading-3'>Technology</p>
                                {
                                    project.technology.map((tech, i) => <p className='text-left leading-3 text-xs'>
                                        {i+1} {tech}
                                    </p>)
                                }
                                <p className=' font-bold my-2 text-center'>{project.description}</p>
                            </div>
                            <img className='rounded-lg w-full' src={project.image} alt="" />
                        </div>
                    </Link>) :
                    projects?.map(project => <Link
                        key={project.id}
                        to={project.liveSite}>
                        <div 
                        data-aos="zoom-in"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500"
                        className='relative rounded-lg'>
                            <div className='flex flex-col gap-2 text-white bg-black bg-opacity-75 absolute -top-12 hover:top-0 h-full w-full right-0 rounded-md opacity-0 hover:opacity-100 overflow-hidden transform duration-200 p-2'>
                                <h3 className='text-2xl font-bold'>{project.projectName}</h3>
                                <p className='text-left'>{project.description}</p>
                            </div>
                            <img className='rounded-lg w-full' src={project.image} alt="" />
                        </div>
                    </Link>)
            }
            {
                fold &&
               <div className='w-full h-full flex justify-center items-center'>
                 <button onClick={() => setFold(!fold)} className=' font-semibold text-[#d207d9] border-2 h-14 w-36 border-[#d207d9] py-2 px-2 hover:border-bandFont hover:text-bandFont text-xl'>
                    Show More
                </button>
               </div>
            }
        </div>
    );
};

export default SingleTabItem;