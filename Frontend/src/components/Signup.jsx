import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [gender, setGender] = useState('');
    const [success,setSuccess] = useState(false)
    const navigate = useNavigate();
    const baseUrl = import.meta.env.VITE_BACKEND_URL

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`${baseUrl}/Signup`, { name, email, password, address, gender })
            .then(result => {
                console.log(result);
                setSuccess(true); 
                setTimeout(() => {
                    navigate('/Login');
                }, 3000);

            })
            .catch(err => console.log(err));
    };

    return (
        <div className='flex justify-center items-center min-h-screen p-4 bg-gradient-to-r from-indigo-500'>
            <div className='bg-white p-6 sm:p-20 rounded-lg shadow-2xl shadow-black w-full max-w-lg sm:max-w-xl  sm:hover:translate-x-20 transition duration-300 ease-in-out'>
                <h2 className='text-center text-xl sm:text-2xl font-bold mb-4'>Signup</h2>

                {success && (
                    <div role="alert" className="alert alert-success text-green-700 border border-green-500 p-2 rounded-md my-2">
                        <span>Signup successful! Redirecting to login...</span>
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className='mb-2'>
                        <label htmlFor="name" className='block text-sm font-medium'>Name</label>
                        <input
                            type="text"
                            placeholder='Enter Name'
                            autoComplete='off'
                            name='name'
                            id='name'
                            required
                            className='w-full border p-2 rounded-md text-sm '
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="email" className='block text-sm font-medium'>Email</label>
                        <input
                            type="email"
                            placeholder='Enter Email'
                            autoComplete='off'
                            name='email'
                            id='email'
                            required
                            className='w-full border p-2 rounded-md text-sm'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="password" className='block text-sm font-medium'>Password</label>
                        <input
                            type="password"
                            placeholder='Enter Password'
                            name='password'
                            id='password'
                            required
                            className='w-full border p-2 rounded-md text-sm'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <div className='mb-2'>
                        <label htmlFor="address" className='block text-sm font-medium'>Address</label>
                        <input
                            type="text"
                            placeholder='Enter Address'
                            name='address'
                            id='address'
                            required
                            className='w-full border p-2 rounded-md text-sm'
                            onChange={(e) => setAddress(e.target.value)}
                        />
                    </div>

                    <div className='mb-2'>
                        <label className='block text-sm font-medium'>Gender</label>
                        <div className='flex gap-4 mt-1'>
                            <label className='text-sm'>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    required
                                    onChange={(e) => setGender(e.target.value)}
                                /> Male
                            </label>
                            <label className='text-sm'>
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    required
                                    onChange={(e) => setGender(e.target.value)}
                                /> Female
                            </label>
                        </div>
                    </div>

                    <button
                        type='submit'
                        className=' bg-gradient-to-r from-indigo-500 to-purple-100 
                       hover:from-purple-100 hover:to-indigo-500  text-black w-full p-2 rounded-md text-sm  '>
                        Register

                    </button>
                </form>

                <p className='text-center mt-3 text-sm'>
                    Already have an account? <Link to={"/Login"} className='text-emerald-600 hover:underline'>Login</Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;

