import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='text-center flex items-center justify-center h-96'>
            <div>
                <h1 className='font-bold inline-block text-6xl bg-red-600 p-6 text-white rounded'>404: Page Not Found</h1>
                <p className='mt-7'>Get Back to <Link className='font-bold text-violet-600' to='/'>Home</Link></p>
            </div>
        </div>
    );
};

export default NotFound;