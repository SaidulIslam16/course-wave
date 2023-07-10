import React from 'react';
import { Link } from 'react-router-dom';

export const Header = () => {
    return (
        <div className="bg-deep-purple-accent-700">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                    <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto">
                                Ride the Wave of Knowledge with <span className='underline'>CourseWave</span>
                            </h2>
                            <p className="text-base text-indigo-100 md:text-lg">
                                Dive into a Vast Ocean of Courses: Discover Your Perfect Wave of Education with CourseWave, the Ultimate Destination for Lifelong Learning!
                            </p>
                        </div>
                        <div>
                            <Link to='/courses' className="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none">
                                View Courses
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};