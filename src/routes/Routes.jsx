import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import About from "../pages/About/About";
import Errorpage from "../pages/Errorpage/Errorpage";

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
            }
        ]
    },
]);