import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { signup } from '../api/auth';

type FormValues = {
    name: string,
    email: string,
    password: string
};
const Signup = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormValues> = (data) => {
        signup(data);
        navigate("/signin");
    }
    return (
        <div className="max-w-5xl mx-auto">
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-md w-full space-y-8">
                    <div>
                        <h3 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Signup
                        </h3>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Your name</label>
                                <input type="text" {...register('name', { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {errors.name && errors.name.type === "required" && <span className="text-red-600">Không được để trống</span>}
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                <input type="email" {...register('email', { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" />
                                {errors.email && errors.email.type === "required" && <span className="text-red-600">Không được để trống</span>}
                            </div>
                            <div className="mb-6">
                                <label className="block mb-2 text-sm font-medium text-gray-900 ">Your password</label>
                                <input type="password" {...register('password', { required: true })} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                                {errors.password && errors.password.type === "required" && <span className="text-red-600">Không được để trống</span>}
                            </div>

                            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Signup