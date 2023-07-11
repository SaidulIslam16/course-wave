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

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/courses/category/02')
            },
            {
                path: '/courses',
                element: <CoursesLayout></CoursesLayout>,
                children: [
                    {
                        path: '/courses',
                        element: <Subjects></Subjects>,
                        loader: () => fetch('http://localhost:5000/courses')
                    },
                    {
                        path: '/courses/category/:id',
                        element: <Courses></Courses>,
                        loader: ({ params }) => fetch(`http://localhost:5000/courses/category/${params.id}`)
                    }
                ]
            },

            {
                path: '/courses/:id',
                element: <CourseDetails></CourseDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: '/checkout',
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
                path: '*',
                element: <NotFound></NotFound>
            }

        ]
    }
])