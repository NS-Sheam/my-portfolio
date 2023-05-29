import { Link } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


const Projects = () => {
    return (
        <div
            className='bg-gradient-to-tr from-bandPrimary to-bandSecondary my-container min-h-screen p-4 lg:p-6'>
            <div
                data-aos="fade-up"
                data-aos-anchor="#example-anchor"
                data-aos-offset="500"
                data-aos-duration="1000"
                className='w-4/5 mx-auto text-center p-4 lg:p-8 lg:my-8 bg-[#2c0d57] rounded-2xl'>
                <h1 className='text-white text-xl lg:text-2xl font-bold mb-4'>Projects</h1>
                <p className='text-bandFont text-xs lg:text-xl mb-4 w-3/4 mx-auto'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum magni ab cupiditate delectus minus porro ad necessitatibus quam ullam perferendis </p>
                <div className="">
                    <Tabs className="w-4/5 mx-auto">
                        <TabList className="border-none outline-none flex justify-center items-center">
                            <Tab><p className='text-xs lg:text-xl font-bold bg-gradient-to-r bg-[#77037B] to-[#210062] px-2 lg:px-6 py-2 rounded-full text-white'>ReactJS</p></Tab>
                            <Tab><p className='text-xs lg:text-xl font-bold bg-gradient-to-r bg-[#77037B] to-[#210062] px-2 lg:px-6 py-2 rounded-full text-white'>Javascript</p></Tab>
                            <Tab><p className='text-xs lg:text-xl font-bold bg-gradient-to-r bg-[#77037B] to-[#210062] px-2 lg:px-6 py-2 rounded-full text-white'>HTMl & CSS</p></Tab>
                        </TabList>
                        <TabPanel className="mx-auto lg:my-8">
                            <div className="grid lg:grid-cols-3 justify-center items-center my-5 gap-5 mx-auto">
                                <div className='relative w-40 rounded-lg'>
                                    <div className='flex flex-col gap-2 text-white bg-black bg-opacity-75 absolute -top-12 hover:top-0 h-full w-full right-0 rounded-md opacity-0 hover:opacity-100 overflow-hidden transform duration-200 p-2'>
                                        <h3 className='text-2xl font-bold'>Heroverse</h3>
                                        <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque magnam suscipit veritatis quam dolor quibusdam, molestias</p>
                                    </div>
                                    <img className='h-56 w-full rounded-lg' src="https://i.ibb.co/nMD9LmV/screencapture-toy-marketplace-f77ed-web-app-2023-05-29-11-53-56.png" alt="" />
                                </div>
                                <Link to="https://chef-recipe-hunting-client.web.app/">
                                    <div className='relative w-40 rounded-lg'>
                                        <div className='flex flex-col gap-2 text-white bg-black bg-opacity-75 absolute -top-12 hover:top-0 h-full w-full right-0 rounded-md opacity-0 hover:opacity-100 overflow-hidden transform duration-200 p-2'>
                                            <h3 className='text-2xl font-bold'>Chefs Universe</h3>
                                            <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque magnam suscipit </p>
                                        </div>
                                        <img className='h-56 w-full rounded-lg' src="https://i.ibb.co/7yxg748/screencapture-chef-recipe-hunting-client-web-app-2023-05-29-11-51-42.png" alt="" />
                                    </div>
                                </Link>
                                <Link to="https://getjobs-ph.netlify.app/">
                                    <div className='relative w-40 rounded-lg'>
                                        <div className='flex flex-col gap-2 text-white bg-black bg-opacity-75 absolute -top-12 hover:top-0 h-full w-full right-0 rounded-md opacity-0 hover:opacity-100 overflow-hidden transform duration-200 p-2'>
                                            <h3 className='text-2xl font-bold'>Heroverse</h3>
                                            <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque magnam suscipit veritatis quam dolor quibusdam, molestias</p>
                                        </div>
                                        <img className='h-56 w-full rounded-lg' src="https://i.ibb.co/wcwY4VX/screencapture-getjobs-ph-netlify-app-2023-05-29-13-11-39.png" alt="" />
                                    </div>
                                </Link>
                            </div>
                        </TabPanel>
                        <TabPanel className="mx-auto lg:my-8">
                            <div className="grid lg:grid-cols-3 justify-center items-center my-5 gap-5 mx-auto">
                                <Link to="https://getjobs-ph.netlify.app/">
                                    <div className='relative w-40 rounded-lg'>
                                        <div className='flex flex-col gap-2 text-white bg-black bg-opacity-75 absolute -top-12 hover:top-0 h-full w-full right-0 rounded-md opacity-0 hover:opacity-100 overflow-hidden transform duration-200 p-2'>
                                            <h3 className='text-2xl font-bold'>Heroverse</h3>
                                            <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque magnam suscipit veritatis quam dolor quibusdam, molestias</p>
                                        </div>
                                        <img className='h-56 w-full rounded-lg' src="https://i.ibb.co/wcwY4VX/screencapture-getjobs-ph-netlify-app-2023-05-29-13-11-39.png" alt="" />
                                    </div>
                                </Link>
                                <Link to="https://toy-marketplace-f77ed.web.app/">
                                    <div className='relative w-40 rounded-lg'>
                                        <div className='flex flex-col gap-2 text-white bg-black bg-opacity-75 absolute -top-12 hover:top-0 h-full w-full right-0 rounded-md opacity-0 hover:opacity-100 overflow-hidden transform duration-200 p-2'>
                                            <h3 className='text-2xl font-bold'>Heroverse</h3>
                                            <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque magnam suscipit veritatis quam dolor quibusdam, molestias</p>
                                        </div>
                                        <img className='h-56 w-full rounded-lg' src="https://i.ibb.co/nMD9LmV/screencapture-toy-marketplace-f77ed-web-app-2023-05-29-11-53-56.png" alt="" />
                                    </div>
                                </Link>
                                <Link to="https://chef-recipe-hunting-client.web.app/">
                                    <div className='relative w-40 rounded-lg'>
                                        <div className='flex flex-col gap-2 text-white bg-black bg-opacity-75 absolute -top-12 hover:top-0 h-full w-full right-0 rounded-md opacity-0 hover:opacity-100 overflow-hidden transform duration-200 p-2'>
                                            <h3 className='text-2xl font-bold'>Chefs Universe</h3>
                                            <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque magnam suscipit </p>
                                        </div>
                                        <img className='h-56 w-full rounded-lg' src="https://i.ibb.co/7yxg748/screencapture-chef-recipe-hunting-client-web-app-2023-05-29-11-51-42.png" alt="" />
                                    </div>
                                </Link>
                            </div>
                        </TabPanel>
                        <TabPanel className="mx-auto lg:my-8">
                            <div className="grid lg:grid-cols-3 justify-center items-center my-5 gap-5 mx-auto">
                                <Link to="https://toy-marketplace-f77ed.web.app/">
                                    <div className='relative w-40 rounded-lg'>
                                        <div className='flex flex-col gap-2 text-white bg-black bg-opacity-75 absolute -top-12 hover:top-0 h-full w-full right-0 rounded-md opacity-0 hover:opacity-100 overflow-hidden transform duration-200 p-2'>
                                            <h3 className='text-2xl font-bold'>Heroverse</h3>
                                            <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque magnam suscipit veritatis quam dolor quibusdam, molestias</p>
                                        </div>
                                        <img className='h-56 w-full rounded-lg' src="https://i.ibb.co/nMD9LmV/screencapture-toy-marketplace-f77ed-web-app-2023-05-29-11-53-56.png" alt="" />
                                    </div>
                                </Link>
                                <Link to="https://chef-recipe-hunting-client.web.app/">
                                    <div className='relative w-40 rounded-lg'>
                                        <div className='flex flex-col gap-2 text-white bg-black bg-opacity-75 absolute -top-12 hover:top-0 h-full w-full right-0 rounded-md opacity-0 hover:opacity-100 overflow-hidden transform duration-200 p-2'>
                                            <h3 className='text-2xl font-bold'>Chefs Universe</h3>
                                            <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque magnam suscipit </p>
                                        </div>
                                        <img className='h-56 w-full rounded-lg' src="https://i.ibb.co/7yxg748/screencapture-chef-recipe-hunting-client-web-app-2023-05-29-11-51-42.png" alt="" />
                                    </div>
                                </Link>
                                <Link to="https://getjobs-ph.netlify.app/">
                                    <Link to="https://toy-marketplace-f77ed.web.app/">
                                        <div className='relative w-40 rounded-lg'>
                                            <div className='flex flex-col gap-2 text-white bg-black bg-opacity-75 absolute -top-12 hover:top-0 h-full w-full right-0 rounded-md opacity-0 hover:opacity-100 overflow-hidden transform duration-200 p-2'>
                                                <h3 className='text-2xl font-bold'>Heroverse</h3>
                                                <p className='text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto eaque magnam suscipit veritatis quam dolor quibusdam, molestias</p>
                                            </div>
                                            <img className='h-56 w-full rounded-lg' src="https://i.ibb.co/nMD9LmV/screencapture-toy-marketplace-f77ed-web-app-2023-05-29-11-53-56.png" alt="" />
                                        </div>
                                    </Link>
                                </Link>
                            </div>
                        </TabPanel>
                    </Tabs>
                </div>
            </div>

        </div>
    );
};

export default Projects;