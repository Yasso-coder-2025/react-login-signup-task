import { createBrowserRouter } from "react-router";
import SignUp from "../components/Section/SignUp";
import Login from "../components/Section/Login";


const routes = createBrowserRouter([
    {
        path: "/SignUp",
        element: <SignUp/>
    },
    {
        path: "/",
        element: <Login/>
    }





])

export default routes;