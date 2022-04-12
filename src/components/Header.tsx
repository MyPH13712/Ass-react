import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Menu from "./Menu";

const Header = () => {
  const a = JSON.parse(localStorage.getItem('user') as string)
  const navigate = useNavigate()
  const handleClick = (event: React.MouseEvent<HTMLElement>, text: string) => {
    localStorage.removeItem('user');
    navigate('/');
    window.location.reload()
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-gray-100 my-auto">
      <div className="container-fluid">
        <NavLink className="navbar-brand items-center" to="/">
          <h1 className="flex text-1xl font-bold antialiased"><i>Piece3D</i></h1>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
         <Menu />
          {a == null ? (
            <div className="hidden sm:flex flex-row space-x-4">
              <NavLink to="/signup" className="no-underline"><button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-gray-600 bg-white border border-amber-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700  duration-150 justify-center items-center">Signup</button></NavLink>
              <NavLink to="/signin" className="no-underline"><button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-zinc-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700  duration-150 justify-center items-center hover:text-amber-400">Signin</button></NavLink>
            </div>
          ) : (
            <div className="hidden sm:flex flex-row space-x-4">
              <NavLink to="/admin" className="no-underline"><button className="rounded-md flex space-x-2 w-60 h-10 font-normal text-sm leading-3 text-white bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-gray-200 hover:bg-neutral-800 duration-150 justify-center items-center hover:text-amber-400">{a.user.email}</button></NavLink>
              <button className="rounded-md flex space-x-2 w-24 h-10 font-normal text-sm leading-3 text-white bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:bg-gray-200 hover:bg-neutral-800 duration-150 justify-center items-center hover:text-amber-400" onClick={(e) => handleClick(e, "clicked")}>Signout</button>
            </div>
          )}
        </div>
      </div>

    </nav>
  );
};

export default Header;