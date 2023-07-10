import React from 'react';
import './CoursesLayout.css'
import LeftSideNavigation from '../sharedcomponents/LeftSideNavigation/LeftSideNavigation';
import { Outlet, } from 'react-router-dom';

const CoursesLayout = () => {
    return (
        <div className="courses px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <LeftSideNavigation></LeftSideNavigation>
            <Outlet></Outlet>
        </div>
    );
};

export default CoursesLayout;