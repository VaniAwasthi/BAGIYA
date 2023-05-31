import React from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FaUser , FaShoppingCart } from "react-icons/fa"
import "./Nav.css"


const Navbar= () =>{
  return (
    <nav className="nav">
      <Link to="/Page/Home" className="site-title">
        Crazy For Cactus
      </Link>
  <ul>
  <CustomLink to="/Pages/Home">Home</CustomLink>
  <CustomLink to="/Pages/AboutUs">AboutUs</CustomLink>
  <CustomLink to="/Pages/Products">Products</CustomLink>
  <CustomLink to="/Pages/Contact">ContactUs</CustomLink>
  </ul>
  <ul>
 <CustomLink to="/Pages/Cart"><FaShoppingCart/></CustomLink>
 <CustomLink to="/Pages/Home"><FaUser/></CustomLink>
  </ul>
  </nav>
  );
}
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
export default Navbar;



    


