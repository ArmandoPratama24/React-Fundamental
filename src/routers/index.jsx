import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Blog from "../pages/Blogs";
import Home from "../pages/index"
import About from "../pages/about";



export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },

            {
                path: "/blog",
                element: <Blog />,
                },

            {
            path: "/about",
            element: <About />,
            },
        ],
    },

]) 

