import React, { useEffect, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { read } from '../../api/product';
import { ProductType } from '../../types/product'

const ProductDetail = () => {
    const {id} = useParams()
    const [products, setProducts] = useState<ProductType[]>([]);
    useEffect(() => {
        const getProduct = async () => {
            const { data } = await read(id);
            setProducts(data)
        }
        getProduct();
    }, []);

    return (
        <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
            <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
                <NavLink to="">
                    <img className="w-full" src={products.image} />
                </NavLink>
            </div>

                 <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6" >
                    <div className="border-b border-gray-200 pb-6">
                        {/* <p className="text-sm leading-none text-gray-900 dark:text-gray-600 "></p> */}
                        <h1 className="lg:text-2xl text-xl font-semibold lg:leading-6 leading-7 text-gray-900 dark:text-gray-600 mt-2">{products.name}</h1>
                    </div>
                    <div>
                        <p className="font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 dark:text-gray-600">{products.price} đ</p>
                        {/* <p className="text-base leading-4 mt-7 text-gray-900 dark:text-gray-600"><span className="font-semibold">Desc:</span> {item.desc}</p> */}
                    </div>
                    <div className="lg:mt-11 mt-10">
                        <div className="flex flex-row justify-between">
                            <p className="font-medium text-base leading-4 text-gray-600 ">Chọn số lượng</p>
                            <div className="flex">
                                <input type="number"  placeholder="1" className="form-input mt-1 block w-2/6 pl-2 outline-none py-1 rounded-sm" />
                            </div>
                        </div>
                    </div>
                    <hr className="bg-gray-200 w-full my-2" />
                    <button id="btnAddToCart" className="dark:text-gray-400 dark:text-gray-900 hover:text-teal-500 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 text-base flex items-center justify-center leading-none  bg-gray-500 w-full py-4 hover:bg-gray-700 focus:outline-none">
                        Add to cart
                    </button>
                    <div>
                    </div>
                </div>
        
        </div>

    )
}

export default ProductDetail