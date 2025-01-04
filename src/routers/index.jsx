import { createBrowserRouter } from "react-router";
import Home from "../pages/index"
import About from "../pages/about";


export const router = createBrowserRouter([
    {
        path: `/`,
        element: <Home />,
    },

    {
        path: "/about",
        element: <About />
    },
]) 

