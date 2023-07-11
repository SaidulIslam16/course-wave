import React from 'react';
import { FaComments, FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router-dom';

export const CourseCard = ({ course }) => {
    console.log(course);
    const { image, name, price, rating, reviews, short_description, id } = course;
    return (
        <div className="overflow-hidden  transition-shadow duration-300 bg-white rounded">
            <Link to={`/courses/${id}`}>
                <img
                    src={image}
                    className="object-cover w-full h-64 rounded"
                    alt=""
                />
            </Link>
            <div className="py-5">
                <Link
                    to={`/courses/${id}`}
                    className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                    <p className="text-2xl font-bold leading-7">{name}</p>
                </Link>
                <p className="mb-4 text-gray-700">
                    {short_description}
                </p>
                <p className='text-xl font-bold'>
                    Price: ${price}
                </p>
                <div className='mt-4 flex'>
                    <p className='flex items-center mr-6'>
                        <div className='flex items-center mr-2 text-orange-400'><FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfStroke /></div>
                        {rating}
                    </p>
                    <p className='flex items-center text-gray-500'>
                        <span className='mr-2'><FaComments></FaComments></span>
                        {reviews}
                    </p>
                </div>
            </div>
        </div>


    );
};