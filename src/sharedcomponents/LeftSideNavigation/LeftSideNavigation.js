import React from 'react';
import { Link } from 'react-router-dom';

const LeftSideNavigation = ({ category }) => {

    const { name, id } = category;
    return (
        <div>
            <Link to={`/category/:${id}`}>{name}</Link>
        </div>
    );
};

export default LeftSideNavigation;