import React from 'react';
import { Outlet } from 'react-router-dom';
import { Nav } from '../sharedcomponents/Nav/Nav';
import { Footer } from '../sharedcomponents/Footer/Footer';
const Main = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;