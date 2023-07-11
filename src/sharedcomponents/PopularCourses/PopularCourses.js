import React from 'react';
import { CourseCard } from '../CourseCard/CourseCard';

export const PopularCourses = ({ popularCourses }) => {
    console.log(popularCourses);
    return (
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <p className="mb-2 text-xs font-semibold tracking-wide text-gray-600 uppercase sm:text-center">
                Most Popular Courses
            </p>
            <div className=" mb-5 md:mx-auto sm:text-center ">
                <div className="mb-4">
                    <h2 className="inline-block max-w-lg font-sans text-3xl font-semibold leading-none tracking-tight text-black transition-colors duration-200 hover:text-deep-purple-accent-700 sm:text-4xl">
                        Excelerate your Kowledge with our Popular Courses.
                    </h2>
                </div>
                <div className='grid gap-5 grid-cols-1 mt-10 lg:grid-cols-4 text-left'>
                    {
                        popularCourses.map(popular => <CourseCard
                            key={popular.id}
                            course={popular}
                        ></CourseCard>)
                    }
                </div>
            </div>
        </div>
    );
};