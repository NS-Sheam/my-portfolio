import Header from "../shared/Header/Header";
import emailjs from '@emailjs/browser';
import img from "../../assets/images/contact-image/contact_us.png"
import "./Contact.css"
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const form = useRef();
    // console.log(object);
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(`${import.meta.env.VITE_SERVICE_ID}`, `${import.meta.env.VITE_TAMPLATE_ID}`, form.current, `${import.meta.env.VITE_PUBLIC_KEY}`)
            .then((result) => {
                console.log(result.text);
                toast.success("Your email sent successfully", {
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })
            }, (error) => {
                // console.log(error.text);
                toast.success(error.text, {
                    position: "top-right",
                    autoClose: 2500,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark"
                })
            });
    };
    return (
        <>
            <div className="bg-bandSecondary">
                <Header />
            </div>
            <div className="hero min-h-screen bg-bandPrimary w-full lg:py-6">
                <div className="hero-content flex-col lg:flex-row justify-between gap-16 lg:w-4/5">
                    <div className="bg-transparent w-full lg:w-1/2">
                        <form ref={form} onSubmit={sendEmail} className="space-y-4 lg:space-y-6">
                            <h1 className="text-center text-3xl lg:text-5xl font-bold text-white">Contact me!</h1>
                            <p className="text-white text-center lg:text-left">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <div className="form-control">
                                <input type="text" placeholder="name" name="from_name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="email" name="from_email" className="input input-bordered" />
                            </div>
                            <textarea placeholder="email body" name="message" className="p-3 text-base textarea textarea-bordered textarea-lg w-full" ></textarea>
                            <div className="form-control mt-6">
                                <button className="btn bg-bandSecondary text-white hover:bg-opacity-5">Send</button>
                            </div>
                        </form>
                    </div>
                    <div className="contact-img text-center lg:text-left w-full lg:w-1/2">
                        <img src={img} alt="" />
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
};

export default Contact;