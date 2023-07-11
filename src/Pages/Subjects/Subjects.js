import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { CourseCard } from '../../sharedcomponents/CourseCard/CourseCard';

const Subjects = () => {
    const subjects = useLoaderData();
    console.log(subjects);
    return (
        <div className="grid gap-10 md:grid-cols-2 sm:max-w-sm sm:mx-auto lg:max-w-full">
            {
                subjects.map(subject => <CourseCard key={subject.id} course={subject}></CourseCard>)
            }
        </div>
    );
};

export default Subjects;