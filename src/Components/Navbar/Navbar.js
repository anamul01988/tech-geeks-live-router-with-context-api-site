import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../Assets/Image/logo.png";
import "./Navbar.css";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  console.log(location)
  const { pathname } = useLocation();

  return (
    <nav
      style={
        pathname.includes("blog") ? { display: "none" } : { display: "flex" }
      }
    >
      <div className='logo-container'>
        <img src={Logo} alt='' />
      </div>
      <div className='link-container'>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/'
        >
          Home
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/videos'
        >
          Videos
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "active-link" : "link")}
          to='/login'
        >
          Login
        </NavLink>
      </div>
    </nav>


  //   <nav>
  //   <div className='logo-container'>
  //     <img src={Logo} alt='' />
  //   </div>
  //   <div className='link-container'>
  //     <NavLink className='link' to='/'>
  //       Home
  //     </NavLink>
  //     <NavLink
  //       className='link'
  //       to='/videos'
  //     >
  //       Videos
  //     </NavLink>
  //     <NavLink
  //       className='link'
  //       to='/login'
  //     >
  //       Login
  //     </NavLink>
  //   </div>
  // </nav>

  );
};

export default Navbar;
