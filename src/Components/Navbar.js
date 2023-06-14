import React from "react";
import { NavLink } from "react-router-dom";
import '../Styles/Navbar.css'

function Navbar() {
  return(
      <div className="navbar">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/teams'>Teams</NavLink>
        <NavLink to='/drivers'>Drivers</NavLink>
        <NavLink to='/tracks'>Tracks</NavLink>
      </div>
    );
};


export default Navbar;