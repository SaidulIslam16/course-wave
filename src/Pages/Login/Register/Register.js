import React from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className=' flex justify-center'>
            <div className='w-96 p-5 border rounded'>
                <h1 className='text-4xl'>Sign up</h1>
                <form className='my-6'>
                    <label className="block ">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Email
                        </span>
                        <input type="email" name="email" required className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                    </label>
                    <label className="block my-7">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Password
                        </span>
                        <input type="password" name="password" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                    </label>

                    <button type="submit" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">Sign in</button>

                </form>
                <div className='flex justify-between items-center mt-3'>
                    <p >Already have an Account? <Link to='/login' className='font-bold hover:text-purple-900 underline'>Sign in</Link></p>
                </div>
                <p className='text-center text-gray-500 my-5'>----or----</p>
                <div className=' flex gap-5'>
                    <button className="flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-800 hover:bg-blue-900 focus:shadow-outline focus:outline-none w-full"> <FaGoogle /><span className='ml-2'>Google</span></button>
                    <button className="flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-slate-900 hover:bg-slate-950 focus:shadow-outline focus:outline-none w-full"><FaGithub /> <span className='ml-2'>Github</span></button>
                </div>
            </div>
        </div>
    );
};

export default Register;