import React from 'react'
import { NavLink } from 'react-router-dom'
import { ProductType } from '../types/product'

type ProductProps = {
  data: ProductType[]
}

const Product = (props: ProductProps) => {

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
              <div className="relative group">
                <div className="flex justify-center items-center opacity-0 bg-gradient-to-t from-gray-800 via-gray-800 to-opacity-30 group-hover:opacity-50 absolute top-0 left-0 h-full w-full"></div>
                <NavLink to = "/"><img src={item.image} /></NavLink>
              </div>
              <p className="font-normal dark:text-black text-xl leading-5 text-stone-900 md:mt-6 mt-4">{item.name}</p>
              <p className="font-semibold dark:text-black text-xl leading-5 text-stone-900 mt-4">{item.price}</p>
            </div>
          })}
        </div>
      </div>
    </div>

  )
}

export default Product