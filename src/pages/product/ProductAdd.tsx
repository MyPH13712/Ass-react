import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import { listCate } from "../../api/category";
import { ProductType } from "../../types/product";
import { CategoryType } from "../../types/category";
import axios from "axios";

type ProductAddProps = {
    onAdd: (product: ProductType) => void
}
type FormValues = {
    name: string,
    price: number,
    image: string,
    category: string
};

const ProductAdd = (props: ProductAddProps) => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
    const navigate = useNavigate();

    const [cate, setCate] = useState();
    useEffect(() => {
        const getCate = async () => {
            const { data } = await listCate();
            setCate(data);
        }
        getCate()
    }, [])

    const [image, setImage] = useState("")
    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        const CLOUDINARY_PRESET = "jkbdphzy";
        const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/ecommercer2021/image/upload";
        if (image) {
            const formData = new FormData();
            formData.append('file', image);
            formData.append('upload_preset', CLOUDINARY_PRESET);
            const img = await axios.post(CLOUDINARY_API_URL, formData, {
                headers: {
                    "Content-Type": "application/form-data"
                },
            });
            data.image = img.data.url;
        }
        props.onAdd(data);
        navigate('/admin/products');
        window.location.reload()

        console.log(data);


    }


    return (
        <div className="min-h-full">
            <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">
                        Thêm mới sản phẩm
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
                                            <label className="block text-sm font-medium text-gray-700">Danh muc</label>
                                            <select {...register('category')} className="mt-1 focus:ring-indigo-500 px-2 py-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 ">
                                                <option> Chon danh muc </option>
                                                {cate && cate.map((item) => {
                                                    return <option value={item._id}>{item.name}</option>
                                                })}
                                            </select>
                                        </div>
                                        <div className="mt-4">
                                            <label className="block text-sm font-medium text-gray-700">Tên sản phẩm</label>
                                            <input type="text" {...register('name', { required: true, minLength: 5 })} className="my-2 focus:ring-indigo-500  px-2 py-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300" />
                                            {errors.name && errors.name.type === "required" && <span className="text-red-600">Không được để trống</span>}
                                            {errors.name && errors.name.type === "minLength" && <span className="text-red-600">Ít nhất 5 ký tự</span>}
                                        </div>
                                        <div className="mt-4">
                                            <label className="block text-sm font-medium text-gray-700">Ảnh</label>
                                            <input type="file" onChange={(e) => { setImage(e.target.files[0]) }} className="my-2 focus:ring-indigo-500  px-2 py-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300" />
                                        </div>
                                        <div className="mt-4">
                                            <label className="block text-sm font-medium text-gray-700">Giá</label>
                                            <input type="number" {...register('price', { required: true})} className="my-2 focus:ring-indigo-500 px-2 py-2 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 " />
                                            {errors.price && errors.price.type === "required" && <span className="text-red-600">Không được để trống</span>}
                                        </div>
                                    </div>
                                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
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

export default ProductAdd