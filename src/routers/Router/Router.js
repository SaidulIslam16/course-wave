import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home";
import CoursesLayout from "../../layouts/CoursesLayout";
import Courses from "../../Pages/Courses/Courses";
import Subjects from "../../Pages/Subjects/Subjects";
import { CourseDetails } from "../../sharedcomponents/CourseDetails/CourseDetails";

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
                path: '*',
                element: <h1 className="text-center text-red-700 font-bold text-3xl">Page Not found!!</h1>
            }
        ]
    }
])