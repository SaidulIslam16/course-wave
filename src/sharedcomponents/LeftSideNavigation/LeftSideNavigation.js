import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNavigation = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://course-wave-server.vercel.app/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h1 className='text-2xl rounded font-bold bg-violet-800 p-5 mr-6 text-white'>Select Subject</h1>
            {
                categories.map(subject =>
                    <p className='hover:text-violet-800 text-lg my-5'><Link to={`/courses/category/${subject.id}`} key={subject.id}>{subject.name}</Link></p>
                )
            }
        </div>
    );
};

export default LeftSideNavigation;