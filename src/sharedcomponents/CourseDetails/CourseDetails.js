import React from 'react';
import { FaArrowRight, FaComments, FaStar, FaStarHalfStroke } from "react-icons/fa6";
import { useLoaderData } from 'react-router-dom';

export const CourseDetails = () => {
    const course = useLoaderData();
    const { image, name, topics_cover, price, rating, reviews, details, category } = course;
    return (
        <div class="px-4 py-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-12">

            <img
                src={image}
                className="object-cover w-full h-96 rounded"
                alt=""
            />
            <div className="py-5">
                <p className="mb-4 text-gray-700">
                    Category: {category}
                </p>
                <p className="text-2xl font-bold leading-7 mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700">{name}</p>

                <div className='my-4'>
                    <p className=' text-lg mb-3'>{topics_cover[0].title}</p>

                    {
                        topics_cover[1]?.topics?.map(topic => <ul className='bg-slate-100 ps-4 py-2'><li> - {topic}</li></ul>)
                    }

                </div>
                <p className="mb-4 text-gray-700">
                    {details}
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
                <button className='bg-violet-800 text-xl py-3 px-6 text-white font-semibold mt-5 flex items-center rounded hover:bg-violet-900'>Get Premium Access <span className='ml-4'><FaArrowRight /></span></button>
            </div>
        </div>


    );
};