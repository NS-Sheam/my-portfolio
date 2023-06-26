import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Errorpage from "../pages/Errorpage/Errorpage";
import Contact from "../pages/Contact/Contact";
import ProjectsPage from "../pages/ProjectsPage/ProjectsPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        errorElement: <Errorpage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "about",
                element: <About />
            },
            {
                path: "contact",
                element: <Contact />
            },
            {
                path: "projects",
                element: <ProjectsPage />
            }
        ]
    },

]);