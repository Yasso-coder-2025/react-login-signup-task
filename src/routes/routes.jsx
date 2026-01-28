import { createBrowserRouter } from "react-router";
import SignUp from "../components/Pages/SignUp";
import Login from "../components/Pages/Login";
import AppLayout from "../components/Layout/AppLayout";
import Home from "../components/Pages/Home";
import Books from "../components/Pages/Books";
import AboutUs from "../components/Pages/AboutUs";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/SignUp",
        element: <SignUp />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "Books",
        element: <Books />,
      },
      {
        path: "AboutUs",
        element: <AboutUs />,
      },
    ],
  },
]);

export default routes;
