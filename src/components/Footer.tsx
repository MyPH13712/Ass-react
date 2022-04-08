import React from 'react'
import { NavLink } from "react-router-dom";

type Props = {}

const Footer = () => {
    return (
        <div className="bg-gray-100 py-3 px-4">
            <div tabIndex={0} aria-label="footer" className="focus:outline-none mx-auto container flex flex-col items-center justify-center">
                <h1 className="flex text-1xl font-bold antialiased"><i>Piece3D</i></h1>
                <div className="text-black flex flex-col md:items-center f-f-l pt-3">
                    <div className="my-3 text-base text-color f-f-l">
                        <ul className="md:flex items-center">
                            <li className="md:mr-6 cursor-pointer pt-4 lg:py-0"><NavLink to="#" className=" focus:outline-none dark:text-black no-underline hover:text-gray-500">About </NavLink></li>
                            <li className="md:mr-6 cursor-pointer pt-4 lg:py-0"><NavLink to="#" className="focus:outline-none dark:text-black no-underline hover:text-gray-500">Features </NavLink></li>
                            <li className="md:mr-6 cursor-pointer pt-4 lg:py-0"><NavLink to="#" className="focus:outline-none text-black  no-underline hover:text-gray-500">Help </NavLink></li>
                            <li className="cursor-pointer pt-4 lg:py-0"><NavLink to="#" className="focus:outline-none dark:text-black no-underline hover:text-gray-500">Privacy Policy </NavLink></li>
                        </ul>
                    </div>
                    <div className="text-sm text-color mb-10 f-f-l">
                        <p tabIndex={0} className="dark:text-black focus:outline-none">© 2020 Prodify. All rights reserved</p>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Footer