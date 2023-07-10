import React from 'react';
import LeftSideNavigation from '../sharedcomponents/LeftSideNavigation/LeftSideNavigation';
import { Outlet, useLoaderData } from 'react-router-dom';

const CoursesLayout = () => {
    const categories = useLoaderData();
    console.log(categories);
    return (
        <div>
            {
                categories.map(category => <LeftSideNavigation key={category.id} category={category}></LeftSideNavigation>)
            }
            <Outlet></Outlet>
        </div>
    );
};

export default CoursesLayout;