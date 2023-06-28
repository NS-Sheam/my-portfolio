
import { Link } from "react-router-dom";
import { RxOpenInNewWindow } from 'react-icons/rx';
import { AiFillGithub } from 'react-icons/ai';
import { FiLink } from 'react-icons/fi';

const ProjectModal = ({ projectData }) => {
    const { projectName, technology, description, liveSite, image, clientSite, serverSite } = projectData;
    console.log(liveSite);
    return (
        <div>
            {/* The button to open modal */}

            <dialog id="my_modal_4" className="modal">
                <form method="dialog" className="modal-box w-11/12 max-w-5xl bg-bandSecondary">
                    <div className="modal-action">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10 w-full">
                            <div className="md:w-1/2 rounded-lg">
                                <img className="rounded-lg w-full" src={image} alt="" />
                            </div>
                            <div className="md:w-1/2 space-y-2">
                                <h1 className="text-xl lg:text-3xl text-warning font-bold text-center">{projectName}</h1>
                                <h3 className="text-base lg:text-xxl font-bold text-warning">Description: </h3>
                                <ul className="text-white text-sm lg:text-base list-disc">
                                    {
                                        description?.map((d, i) => <li key={i}>
                                            {d}
                                        </li>)
                                    }
                                </ul>
                                <h3 className="text-xl lg:text-2xl font-bold text-warning">Technologies: </h3>
                                <ul className="text-white text-base list-disc">
                                    {
                                        technology?.map((tec, i) => <li key={i}>
                                            {tec}
                                        </li>)
                                    }
                                </ul>
                                <div className="flex items-center gap-3 h-8">
                                    <Link className="transform transition-all duration-200 text-white hover:text-4xl text-2xl" to={liveSite}>
                                        <RxOpenInNewWindow />
                                    </Link>
                                    <Link className="transform transition-all duration-200 text-white hover:text-4xl text-2xl" to={clientSite}>
                                        <AiFillGithub />
                                    </Link>
                                    {
                                        serverSite && <Link className="transform transition-all duration-200 text-white hover:text-4xl text-2xl" to={serverSite}>
                                            <FiLink />
                                        </Link>
                                    }
                                </div>
                            </div>
                        </div>
                        {/* if there is a button, it will close the modal */}
                        <button className="btn text-black btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-white hover:bg-warning border-none">✕</button>
                    </div>
                </form>
            </dialog>
        </div>
    );
};

export default ProjectModal;