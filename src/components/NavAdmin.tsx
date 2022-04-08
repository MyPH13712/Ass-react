import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const NavAdmin = () => {
    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 ">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <NavLink to="/">
                            <img className="h-8 w-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow" />
                            </NavLink>
                        </div>
                        <div className="hidden md:block">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <NavLink to="/admin/dashboard" className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium no-underline" aria-current="page">Thống kê</NavLink>
                                <NavLink to="/admin/products" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline">Sản phẩm</NavLink>
                                <NavLink to="/admin/category" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium no-underline">Danh mục</NavLink>
                                  
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-4 flex items-center md:ml-6">
                            <div className="ml-3 relative group">
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default NavAdmin