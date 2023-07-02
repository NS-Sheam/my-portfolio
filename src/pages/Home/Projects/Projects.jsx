import { useContext, useEffect, useState } from 'react';
import 'react-tabs/style/react-tabs.css';
import TabItem from './TabItem';
import ProjectModal from '../../../components/ProjectModal';
import { ThemeContext } from '../../../layouts/Main';
import SectionTitle from '../../../components/SectionTitle';


const Projects = () => {
    const [reactProjects, setReactProjects] = useState([]);
    const [jsProjects, setJsProjects] = useState([]);
    const [htmlCssProjects, setHtmlCssProjects] = useState([]);
    const [singleProject, setSingleProject] = useState([]);
    const {theme} = useContext(ThemeContext);
    useEffect(() => {
        fetch("projectData.json")
            .then(res => res.json())
            .then(projects => {
                // console.log(projects);
                // Filter projects made with React
                const reactProject = projects.filter(project => project.madeWith.includes('React'));
                setReactProjects(reactProject)
                // Filter projects made with JavaScript
                const javascriptProject = projects.filter(project => project.madeWith.includes('JavaScript'));
                setJsProjects(javascriptProject)
                // Filter projects made with HTML/CSS
                const htmlCssProject = projects.filter(project => project.madeWith.includes('HTML') && project.madeWith.includes('CSS'));
                setHtmlCssProjects(htmlCssProject);
            })
    }, [])
    return (
        <>
        <div
            className='bg-gradient-to-tr from-bandPrimary to-bandSecondary inner-container min-h-screen p-4 lg:p-6'>
            <div
                className={`w-full lg:w-4/5 mx-auto text-center p-4 lg:p-8 lg:my-8 ${theme == "light" ? "bg-white" : "bg-bandTernary"} rounded-2xl shadow-2xl`}>
                    <SectionTitle
                    heading="Projects"
                    paragraph="Browse through my portfolio to explore a diverse range of projects that demonstrate my skills in web development. From interactive React applications to functional JavaScript projects and visually appealing HTML/CSS interfaces, you will find a showcase of my expertise in various web technologies."
                    />
                <div className="">
                    <TabItem
                        reactProjects={reactProjects}
                        jsProjects={jsProjects}
                        htmlCssProjects={htmlCssProjects}
                        setSingleProject={setSingleProject}
                    />
                </div>
            </div>
        </div>
        <ProjectModal
        projectData={singleProject} 
        />
        </>
    );
};

export default Projects;