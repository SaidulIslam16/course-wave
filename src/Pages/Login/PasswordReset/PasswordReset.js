import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/UserContext';
import { toast } from 'react-hot-toast';

const PasswordReset = () => {
    const { passwordReset } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        console.log(email);
        passwordReset(email)
            .then(() => {
                toast.success('Link sent to your email, Please check')
            })
            .catch(error => {
                toast.error(error.message)
            })
    }

    return (

        <div>
            <div className=' flex justify-center'>
                <div className='w-96 p-5 border-2 rounded'>
                    <h1 className='text-4xl'>Reset Password</h1>
                    <form onSubmit={handleSubmit} className='my-6'>
                        <label className="block my-7 ">
                            <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                                Email
                            </span>
                            <input type="email" name="email" required className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                        </label>

                        <button type="submit" className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none">Reset Password</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default PasswordReset;