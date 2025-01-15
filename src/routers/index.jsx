import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";

import Blog from "../pages/blogs/index"
import Post from "../pages/blogs/_id"
import Home from "../pages/Index"
import About from "../pages/About";




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
                path: "/blog/:id",
                element: <Post />,
            },

            {
                path: "/about",
                element: <About />,
            },
        ],
    },

]) 

