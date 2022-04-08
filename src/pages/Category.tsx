import React from 'react'
import { CategoryType } from '../types/category'

type CategoryProps = {
    data: CategoryType[]
}

const Category = (props: CategoryProps) => {
    return (
        <div className="max-w-5xl mx-auto">
            <div className="py-6 lg:px-20 md:px-6 px-4">
                <p className="font-normal text-lg leading-3 text-stone-900 dark:text-black"> Sản phẩm</p>
                <hr className="w-full bg-gray-700 my-6" />
                <div className="flex justify-between items-center">

                </div>
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-y-12 lg:gap-x-8 sm:gap-y-10 sm:gap-x-6 gap-y-6 lg:mt-12 mt-10">
                    {props.data && props.data.map((item, index) => {
                        return <div className="relative" key={index} >
                            <p className="font-normal dark:text-black text-xl leading-5 text-stone-900 md:mt-6 mt-4">{item.name}</p>
                        </div>
                    })}
                </div>
            </div>
        </div>

    )
}

export default Category