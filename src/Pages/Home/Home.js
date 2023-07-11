import React from 'react';
import { Header } from '../../sharedcomponents/Header/Header';
import { PopularCourses } from '../../sharedcomponents/PopularCourses/PopularCourses';
import { useLoaderData } from 'react-router-dom';
import { Statistic } from '../../sharedcomponents/Statistic/Statistic';

const Home = () => {
    const popularCourses = useLoaderData();
    return (
        <div>
            <Header></Header>
            <PopularCourses popularCourses={popularCourses}></PopularCourses>
            <Statistic></Statistic>
        </div>
    );
};

export default Home;