import { createBrowserRouter } from "react-router";
import SignUp from "../components/Pages/SignUp";
import Login from "../components/Pages/Login";
import AppLayout from "../components/Layout/AppLayout";
import Home from "../components/Pages/Home";
import Books from "../components/Pages/Books";
import AboutUs from "../components/Pages/AboutUs";
import ForgetPassword from "../components/Pages/ForgetPassword";
import ResetPassword from "../components/Pages/ResetPassword";
// import PasswordChangedSucceful from "../common/PasswordChangedSucceful";

const routes = createBrowserRouter([
  // just did it to make sure the pupup works
  // {
  //       path: "test",
  //       element: <PasswordChangedSucceful/>
  //     },
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
      {
        path: "/ForgetPassword",
        element: <ForgetPassword />,
      },
      {
        path: "/ResetPassword",
        element: <ResetPassword />,
      },

    ],
  },
]);

export default routes;
