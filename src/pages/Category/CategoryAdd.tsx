import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { listCate } from "../../api/category";
import { CategoryType } from "../../types/category";
import axios from "axios";

type CategoryAddProps = {
    onAddCate: (category: CategoryType) => void
}
type FormValues = {
    name: string,
};

const CategoryAdd = (props: CategoryAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const navigate = useNavigate();

    const onSubmit: SubmitHandler<FormValues> = async (data) => {

        props.onAddCate(data);
        navigate('/admin/products');
        window.location.reload()
    }


    return (
        <div className="min-h-full">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Thêm mới danh mục
                    </h1>
                </div>
            </header>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="md:grid md:grid-cols-3 md:gap-6">
                        <div className="mt-5 md:mt-0 md:col-span-2">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="shadow sm:rounded-md sm:overflow-hidden">
                                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                                        
                                        <div className="mt-1">
                                            <label className="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
                                            <input type="text" {...register('name', { required: true, minLength: 5 })} className="mt-1 focus:ring-indigo-500  px-2 py-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300" />
                                            {errors.name && errors.name.type === "required" && <span>Required</span>}
                                            {errors.name && errors.name.type === "minLength" && <span>Min length</span>}
                                        </div>
                                        <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Save</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>

    )
}

export default CategoryAdd