import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home";
import CoursesLayout from "../../layouts/CoursesLayout";
import Courses from "../../Pages/Courses/Courses";
import Subjects from "../../Pages/Subjects/Subjects";
import { CourseDetails } from "../../sharedcomponents/CourseDetails/CourseDetails";
import { Faq } from "../../Pages/Faqs/Faqs";
import { Blog } from "../../Pages/Blog/Blog";
import NotFound from "../../Pages/NotFound/NotFound";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Checkout from "../../Pages/Checkout/Checkout";
import PasswordReset from "../../Pages/Login/PasswordReset/PasswordReset";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://course-wave-server.vercel.app/courses/category/02')
            },
            {
                path: '/courses',
                element: <CoursesLayout></CoursesLayout>,
                children: [
                    {
                        path: '/courses',
                        element: <Subjects></Subjects>,
                        loader: () => fetch('https://course-wave-server.vercel.app/courses')
                    },
                    {
                        path: '/courses/category/:id',
                        element: <Courses></Courses>,
                        loader: ({ params }) => fetch(`https://course-wave-server.vercel.app/courses/category/${params.id}`)
                    }
                ]
            },

            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`https://course-wave-server.vercel.app/courses/${params.id}`)
            },
            {
                path: 'checkout/:id',
                element: <PrivateRoutes><Checkout></Checkout></PrivateRoutes>

            },
            {
                path: '/faqs',
                element: <Faq></Faq>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/resetpassword',
                element: <PasswordReset></PasswordReset>
            },
            {
                path: '*',
                element: <NotFound></NotFound>
            }

        ]
    }
])