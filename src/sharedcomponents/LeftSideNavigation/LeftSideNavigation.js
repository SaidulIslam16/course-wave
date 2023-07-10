import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LeftSideNavigation = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    return (
        <div>
            <h1>Subjects: {categories.length}</h1>
            {
                categories.map(subject =>
                    <p><Link to={`/courses/category/${subject.id}`} key={subject.id}>{subject.name}</Link></p>
                )
            }
        </div>
    );
};

export default LeftSideNavigation;