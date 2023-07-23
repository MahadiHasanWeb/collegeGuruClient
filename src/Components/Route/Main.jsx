import { createBrowserRouter, } from "react-router-dom";
import Layout from "../Layout/Layout";
import Error from "../Error/Error";
import Login from "../AuthenticationPart/Login";
import Colleges from "../RoutesComponents/Colleges/Colleges";
import Home from "../RoutesComponents/Home/Home";
import Admission from "../RoutesComponents/Admission/Admission";
import MyCollege from "../RoutesComponents/MyCollege/MyCollege";
import CollegeDetails from "../RoutesComponents/Colleges/CollegeDetails";
import SignUp from "../AuthenticationPart/SignUp";
import AdmissionRoute from "../RoutesComponents/Admission/AdmissionRoute";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: 'Colleges',
                element: <Colleges></Colleges>
            },
            {
                path: 'Admission',
                element: <Admission></Admission>
            },
            {
                path: 'MyCollege',
                element: <MyCollege></MyCollege>
            },
            {
                path: '/Colleges/college/:id',
                element: <CollegeDetails></CollegeDetails>,
                loader: ({ params }) => fetch(`https://server-side-three-psi.vercel.app/Colleges/college/${params.id}`)
            },
            {
                path: '/Admission/college/:id',
                element: <AdmissionRoute></AdmissionRoute>,
                loader: ({ params }) => fetch(`http://localhost:5173/Admission/college/${params.id}`)
            },
           
        ]
    },
]);