import { useContext, useEffect, useLayoutEffect, useState } from "react";
import SingleProject from "../Home/Projects/SingleProject";
import Header from "../shared/Header/Header";
import ProjectModal from "../../components/ProjectModal";
import { ThemeContext } from "../../layouts/Main";

const ProjectsPage = () => {
    const [projects, setProjects] = useState([]);
    const [singleProject, setSingleProject] = useState([]);
    const { theme } = useContext(ThemeContext);
    useEffect(() => {
        fetch("projectData.json")
            .then(res => res.json())
            .then(projects => {
                setProjects(projects)
            })
    }, [])
    useLayoutEffect(() => {
        window.scrollTo(0, 0);
    });
    return (
        <>
            <div className="bg-bandSecondary">
                <Header />
            </div>
            <div
                data-aos="zoom-in"
                data-aos-anchor="#example-anchor"
                data-aos-duration="1000"
            >
                <h1 className="py-4 md:py-8 text-center text-3xl lg:text-6xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text italic">My Projects</h1>
                <p className={`${theme == "light" ? "text-bandSecondary" : "text-white"} text-xs lg:text-xl text-center w-3/4 mx-auto pb-4 md:pb-6 lg:pb-8`}>Browse through my portfolio to explore a diverse range of projects that demonstrate my skills in web development. From interactive React applications to functional JavaScript projects and visually appealing HTML/CSS interfaces, you will find a showcase of my expertise in various web technologies.</p>
            </div>
            <div className="inner-container">
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-end mx-auto my-5 gap-5">
                    {
                        projects?.map(project => <SingleProject
                            key={project.id}
                            project={project}
                            setSingleProject={setSingleProject}
                        />)
                    }
                </div>

            </div>
            <ProjectModal
                projectData={singleProject}
            />
        </>
    );
};

export default ProjectsPage;