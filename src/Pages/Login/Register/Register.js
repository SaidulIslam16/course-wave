import React, { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa6';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/UserContext';
import { toast } from 'react-hot-toast';

const Register = () => {
    const { signUp, updateUserInfo, githubSignin, googleSignin } = useContext(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const displayName = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password, displayName, photoURL);

        signUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateUserInfo(displayName, photoURL);
                toast.success('Registation successful');
                form.reset();
            })
            .catch(e => {
                console.error(e);
                toast.error(e.message)
            })
    }

    // google signin

    const handleGoogleSignin = () => {
        googleSignin()
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Signin Successful');
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(error.message);
            })

    }

    // Github Signin

    const handleGithubSignin = () => {
        githubSignin()
            .then(result => {
                toast.success('Signin Successful');
                navigate(from, { replace: true })
            })
            .catch(error => {
                toast.error(error.message);
            })
    }

    return (
        <div className=' flex justify-center'>
            <div className='w-96 p-5 border-2 rounded'>
                <h1 className='text-4xl'>Sign up</h1>
                <form onSubmit={handleSubmit} className='my-6'>
                    <label className="block ">
                        <span className=" block text-sm font-medium text-slate-700">
                            Your Name
                        </span>
                        <input type="text" name="name" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="Enter name" />
                    </label>
                    <label className="block my-7">
                        <span className=" block text-sm font-medium text-slate-700">
                            Photo URL
                        </span>
                        <input type="text" name="photoURL" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="enter photoURL" />
                    </label>
                    <label className="block my-7 ">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Email
                        </span>
                        <input type="email" name="email" required className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                    </label>
                    <label className="block my-7">
                        <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                            Password
                        </span>
                        <input type="password" name="password" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="password" />
                    </label>

                    <button type="submit" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">Sign up</button>

                </form>
                <div className='flex justify-between items-center mt-3'>
                    <p >Already have an Account? <Link to='/login' className='font-bold hover:text-purple-900 underline'>Sign in</Link></p>
                </div>
                <p className='text-center text-gray-500 my-5'>----or----</p>
                <div className=' flex gap-5'>
                    <button onClick={handleGoogleSignin} className="flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-800 hover:bg-blue-900 focus:shadow-outline focus:outline-none w-full"> <FaGoogle /><span className='ml-2'>Google</span></button>

                    <button onClick={handleGithubSignin} className="flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-slate-900 hover:bg-slate-950 focus:shadow-outline focus:outline-none w-full"><FaGithub /> <span className='ml-2'>Github</span></button>
                </div>
            </div>
        </div>
    );
};

export default Register;