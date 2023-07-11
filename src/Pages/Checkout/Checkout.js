import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/UserContext';
import { Link } from 'react-router-dom';

const Checkout = () => {
    const { user } = useContext(AuthContext);

    const { displayName, email } = user;
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className='w-96 border mx-auto p-5'>
                <h1 className='text-2xl mb-7 font-semibold'>Continue Checkout</h1>
                <label className="block ">
                    <span className=" block text-sm font-medium text-slate-700">
                        Your Name
                    </span>
                    <input type="text" name="name" value={displayName} className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder={'enter your name'} />
                </label>
                <label className="block my-7 ">
                    <span className=" block text-sm font-medium text-slate-700">
                        Email
                    </span>
                    <input type="email" name="email" value={email} disabled className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter name" />
                </label>
                <label className="block ">
                    <span className=" block text-sm font-medium text-slate-700">
                        Address
                    </span>
                    <input type="text" name="name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="123 street address" />
                </label>
                <div className='mt-8'>
                    <h3 className='text-lg'>Card Info</h3>
                    <div className='flex gap-4'>
                        <label className="block mt-3">
                            <span className=" block text-sm font-medium text-slate-700">
                                Card Number
                            </span>
                            <input type="text" name="cardnumber" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block  rounded-md sm:text-sm focus:ring-1" placeholder="4596 6935 6936 7896" />
                        </label>
                        <label className="block mt-3">
                            <span className=" block text-sm font-medium text-slate-700">
                                CSV
                            </span>
                            <input type="text" name="csv" className="mt-1 px-3 w-24 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500  rounded-md sm:text-sm focus:ring-1" placeholder="123" />
                        </label>
                    </div>
                    <label className="block mt-3">
                        <span className=" block text-sm font-medium text-slate-700">
                            Expiry date
                        </span>
                        <input type="date" placeholder='11/7/2023' />
                    </label>
                </div>
                <div className='mt-8'>
                    <button type="submit" className=" w-full inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">Checkout</button>
                </div>
            </div>
        </div>
    );
};

export default Checkout;