
import "./Banner.css"
import myImg from "../../../assets/images/my-img.png"
import Typed from 'react-typed';
import { AiOutlineCloudDownload } from 'react-icons/ai';

const Banner = () => {
    // const [showImage, setShowImage] = useState(true);

    // useEffect(() => {
    //     const intervalId = setInterval(() => {
    //         setShowImage((prevState) => !prevState);
    //         // setShowImage(!showImage);
    //     }, 5000); // change the visibility every 8 seconds

    //     return () => clearInterval(intervalId);
    // }, []); // run this effect only once on mount
    const handleDownloadResume = () => {
        window.open("https://drive.google.com/u/0/uc?id=1XhOOmSn6iqDiaA-DNsgsBg3HS7YFNtfa&export=download");
    };

    return (
        <>
            {/* for dextop  */}
            <section className='min-h-screen hidden my-container px-6 lg:flex justify-around items-center'>
                <div
                    data-aos="fade-right"
                    data-aos-anchor="#example-anchor"
                    data-aos-offset="500"
                    data-aos-duration="500"
                    className='w-1/2'
                >
                    <h2 className='text-xl font-semibold tracking-widest text-[#d207d9] border-2 border-[#d207d9] rounded-md px-4 py-2 mb-2 w-3/4'>Welcome to my portfolio</h2>
                    <h2 className='text-5xl font-light text-bandFont'>HI! I am <span className='font-semibold mb-2 text-white'>Nazmus Sakib</span></h2>
                    <div className='w-full'>
                        <p className='text-white text-4xl'>I am a</p>
                        <p className='ms-6 text-5xl font-bold font-gradient underline banner-text-underline'>
                            <Typed
                                strings={[
                                    'Mern Stack developer',
                                    'React Developer',
                                    'Frontend Developer']}
                                typeSpeed={60}
                                backSpeed={60}
                                smartBackspace
                                shuffle={false}
                                backDelay={3000}
                                fadeOut={false}
                                fadeOutDelay={100}
                                loop
                                cursorChar="_"
                            />
                        </p>
                    </div>
                    <div className="my-8">
                        <button onClick={handleDownloadResume} className="text-white uppercase font-bold flex items-center gap-2 bg-gradient-to-r from-blue-400 hover:to-blue-400 via-purple-500 to-pink-500 hover:from-pink-500 py-2 px-3 rounded-full">Download Resume <AiOutlineCloudDownload /></button>
                    </div>
                </div>
                <div className=''>
                    <div
                        className='banner-img bg-bandSecondary border-4 rounded-bl-full rounded-br-full rounded-tl-full overflow-hidden'
                    >
                        <img className=''
                            src={myImg} alt="" />
                    </div>
                </div>
            </section>
            {/* For Mobile  */}
            <section className='my-container px-4 lg:hidden py-16'>
                <div className='mb-8'>
                    <h2 className='text-xs font-semibold tracking-widest text-[#d207d9] border-2 border-[#d207d9] rounded-md px-4 py-2 mb-2 w-3/4'>Welcome to my portfolio</h2>
                    <h2 className='text-xl font-light text-bandFont'>HI! I am <span className='font-semibold mb-2 text-white'>Nazmus Sakib</span></h2>
                    <div className='w-full'>
                        <p className='font-light text-xl mb-2 text-white'>I am a</p>
                        <p className='ms-6 text-2xl font-bold font-gradient underline banner-text-underline'>
                            <Typed
                                strings={[
                                    'MERN Stack Developer',
                                    'React Developer',
                                    'Frontend Developer']}
                                typeSpeed={60}
                                backSpeed={60}
                                smartBackspace
                                shuffle={false}
                                backDelay={3000}
                                fadeOut={false}
                                fadeOutDelay={100}
                                loop
                                cursorChar="_"
                            />
                        </p>
                    </div>
                    <div className="my-8">
                        <button onClick={handleDownloadResume} className="text-white uppercase font-bold flex items-center gap-2 bg-gradient-to-r from-blue-400 hover:to-blue-400 via-purple-500 to-pink-500 hover:from-pink-500 py-2 px-3 rounded-full">Download Resume <AiOutlineCloudDownload /></button>
                    </div>
                </div>
                <div className='mx-auto'>
                    <div
                        className='banner-img bg-bandSecondary border-4 rounded-bl-full rounded-br-full rounded-tl-full overflow-hidden w-3/4 mx-auto'
                    >
                        <img className=''
                            src={myImg} alt="" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Banner;