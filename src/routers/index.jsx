import { createBrowserRouter } from "react-router";
import Home from "../pages/index"


export const router = createBrowserRouter([
    {
        path: `/`,
        element: <Home />,
    },
]) 

