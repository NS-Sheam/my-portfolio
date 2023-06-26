
import { Link } from "react-router-dom";

const ProjectModal = ({ projectData }) => {
    const {  projectName, technology, description, liveSite, image } = projectData;
    
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
                                <Link to={liveSite}>
                                    <button className="btn text-white bg-bandPrimary hover:text-bandPrimary hover:bg-white transform duration-300 px-10 py-2 rounded-full font-bold my-3">Live Site</button>
                                </Link>
                            </div>
                        </div>
                        {/* if there is a button, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 bg-white hover:bg-warning border-none">✕</button>
                    </div>
                </form>
            </dialog>

            {/* Put this part before </body> tag */}
            {/* <input type="checkbox" id="my-modal-5" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box w-full max-w-5xl lg:h-[calc(100vh)] flex items-center bg-bandSecondary p-4 lg:p-6">
                    <div className="flex flex-col md:flex-row items-center justify-center gap-6 lg:gap-10 m-10">
                        <div className="md:w-1/2 rounded-lg">
                            <img className="rounded-lg" src={image} alt="" />
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
                            <Link to={liveSite}>
                                <button className="btn text-white bg-bandPrimary hover:text-bandPrimary hover:bg-white transform duration-300 px-10 py-2 rounded-full font-bold my-3">Live Site</button>
                            </Link>
                        </div>
                    </div>
                    <div className="modal-action">
                        <label htmlFor="my-modal-5" className="btn btn-sm btn-circle absolute right-2 top-2 bg-orange-primary hover:bg-orange-secondary border-none">✕</label>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default ProjectModal;