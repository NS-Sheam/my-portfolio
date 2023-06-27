import { useState } from 'react';
import SingleProject from './SingleProject';

const SingleTabItem = ({ projects, setSingleProject }) => {
    const [fold, setFold] = useState(true);

    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 items-end mx-auto my-5 lg:my-8 gap-5">
            {
                fold ?
                    projects?.slice(0, 5).map(project => <SingleProject
                        key={project.id}
                        project={project} 
                        setSingleProject={setSingleProject}
                        />) :
                    projects?.map(project => <SingleProject
                        key={project.id}
                        project={project} 
                        setSingleProject={setSingleProject}
                        />)
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