import React from 'react';
import { CourseCard } from '../../sharedcomponents/CourseCard/CourseCard';
import { useLoaderData } from 'react-router-dom';

const Courses = () => {
    const courses = useLoaderData();
    console.log(courses);
    return (
        <div className="grid gap-10 md:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {
                courses.map(course => <CourseCard key={course.id} course={course}></CourseCard>)
            }
        </div>
    );
};

export default Courses;