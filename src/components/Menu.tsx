import React from 'react'
import { NavLink } from 'react-router-dom'

type Props = {}

const Menu = (props: Props) => {

  return (
    <ul className="navbar-nav me-auto mb-2 mb-lg-0 flex float-right content-center">
      <li className="nav-item">
        <NavLink className="nav-link px-4 " aria-current="page" to="/">Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link px-4 " to="/product">Product</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link px-4 " to="/turtorial">Tutorial</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link px-4 " to="/contact">Contact</NavLink>
      </li>
    </ul>
  )
}

export default Menu