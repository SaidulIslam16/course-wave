import { createBrowserRouter } from "react-router-dom";
import Main from "../../layouts/Main";
import Home from "../../Pages/Home/Home";
import CoursesLayout from "../../layouts/CoursesLayout";
import Courses from "../../Pages/Courses/Courses";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                loader: () => fetch('http://localhost:5000/categories'),
                element: <CoursesLayout></CoursesLayout>,
                children: [
                    {
                        path: '/courses',
                        element: <Courses></Courses>
                    }
                ]
            },
            {
                path: '*',
                element: <h1 className="text-center text-red-700 font-bold text-3xl">Page Not found!!</h1>
            }
        ]
    }
])