import { Link } from "react-router-dom";
import Header from "../shared/Header/Header";
import { useContext, useLayoutEffect } from "react";
import { ThemeContext } from "../../layouts/Main";

const About = () => {
    const { theme } = useContext(ThemeContext);
    const handleDownloadResume = () => {
        window.open("https://drive.google.com/u/0/uc?id=1XhOOmSn6iqDiaA-DNsgsBg3HS7YFNtfa&export=download");
    };
    const handleDownloadCv = () => {
        window.open("https://drive.google.com/u/0/uc?id=1R7LXM_2AP6UaZMsIprypvUJhMB0MYUyS&export=download");
    };
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <>
            <div className="bg-bandSecondary">
                <Header />
            </div>
            <h1 className="pt-5 md:pt-8 text-center text-3xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text italic">About me!</h1>
            <div className="inner-container py-5 md:py-8 space-y-4 flex flex-col md:flex-row items-center justify-between">
                <div 
                 data-aos="fade-right"
                 data-aos-anchor="#example-anchor"
                 data-aos-duration="1000"
                className={`md:text-xl ${theme == "light" ? "text-bandSecondary" : "text-white"} space-y-3 w-full md:w-1/2 text-center md:text-left`}>
                    <p>Name: <span className="font-bold text-green-500">MD. Nazmus Sakib Sheam</span></p>
                    <p>Age: <span className="font-bold">23 Years</span></p>
                    <p>Position: <span className="font-bold">MERN Stack Developer</span></p>
                    <p>Phone: <span className="font-bold">+880 1875 828625</span></p>
                    <p>Email: <Link to="https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwRrczpmTQKXrTlKQBjkcbbcgzPHsLcgxwGNDRlXksLJrNndxkkZcNNNXtZkwzmLJZdLcxM" className="font-bold text-green-500">123sheamfeni@gmail.com</Link></p>
                    <p>Address: <span className="font-bold">Dhaka, Bangladesh</span></p>
                    <p>Nationality: <span className="font-bold">Bangladeshi</span></p>
                    <p>Language: <span className="font-bold">Bengali, English, Hindi</span></p>
                    <p>LinkedIn: <Link to="https://linkedin.com/in/nazmus-sakib-sheam" className="font-bold text-green-500">Nazmus Sakib</Link></p>
                    <p>Github: <Link to="https://github.com/nS-Sheam/" className="font-bold text-green-500">NS-Sheam</Link></p>

                    <button onClick={handleDownloadResume} className="mx-auto w-56 block py-2 px-5 rounded-full text-white bg-bandPrimary hover:bg-bandSecondary font-bold">Download Resume</button>
                    <button onClick={handleDownloadCv} className="mx-auto w-56 block py-2 px-5 rounded-full text-white bg-bandPrimary hover:bg-bandSecondary font-bold">Download CV</button>

                </div>
                <div
                data-aos="fade-left"
                data-aos-anchor="#example-anchor"
                data-aos-duration="1000"
                className="bg-bandSecondary text-white p-6 rounded-lg w-full md:w-1/2 text-center">
                    <p className="text-xl md:text-3xl font-bold text-bandFont">Hello! I am </p>
                    <p className="text-xl md:text-3xl"><span className="font-bold text-green-500">MD. Nazmus Sakib Sheam</span></p>
                    <p className="text-justify">I am a <span className="font-bold text-green-500">MERN Stack Developer</span>. As a MERN stack developer, I have a good understanding of HTML, CSS, and JavaScript, and I have successfully worked on over 30 projects. With my expertise in these core technologies, I specialize in building dynamic and responsive web applications.

                        In my portfolio, I have developed a diverse range of projects, including e-commerce websites, social media platforms, content management systems, and more. Each project has provided me with valuable experience in implementing different features, integrating APIs, and optimizing performance.

                        Throughout these projects, I have demonstrated my ability to effectively collaborate with clients, designers, and other team members to bring their visions to life. I am skilled at translating requirements into functional and visually appealing web applications, while adhering to best practices and ensuring code quality.

                        My experience spans the entire development lifecycle, from initial planning and design to deployment and maintenance. I am proficient in version control using Git, which enables me to work efficiently in a team environment and ensure smooth collaboration.

                        I am constantly expanding my knowledge and staying up to date with the latest advancements in the MERN stack and web development industry. This allows me to incorporate the most relevant and cutting-edge techniques into my projects, ensuring they are modern, performant, and user-friendly.

                        Overall, my experience of working on 30+ projects as a MERN stack developer has provided me with a strong foundation in HTML, CSS, and JavaScript, as well as a deep understanding of the MERN stack. I am committed to delivering high-quality web applications that meet client requirements and provide an exceptional user experience.</p>
                </div>
            </div>
        </>
    );
};

export default About;