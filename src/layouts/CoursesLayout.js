import React from 'react';
import LeftSideNavigation from '../sharedcomponents/LeftSideNavigation/LeftSideNavigation';
import { Outlet } from 'react-router-dom';

const CoursesLayout = () => {
    return (
        <div>
            <LeftSideNavigation></LeftSideNavigation>
            <Outlet></Outlet>
        </div>
    );
};

export default CoursesLayout;