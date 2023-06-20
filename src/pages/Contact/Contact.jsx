import { Link } from "react-router-dom";
import Header from "../shared/Header/Header";
import { AiFillGoogleCircle } from 'react-icons/ai';

const Contact = () => {
    return (
        <>
            <div className="bg-bandSecondary">
                <Header />
            </div>
            <div className="hero min-h-screen bg-base-200 w-full">
                <div className="hero-content flex-col lg:flex-row-reverse lg:w-2/3">
                    <div className="text-center lg:text-left">
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 max-w-sm shadow-2xl bg-base-100 w-full">
                        <div className="card-body w-full">
                            <h1 className="text-center text-3xl lg:text-5xl font-bold">Contact me!</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <textarea placeholder="email body" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                            <div className="form-control mt-6">
                                <button className="btn bg-bandSecondary text-white hover:bg-bandPrimary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;