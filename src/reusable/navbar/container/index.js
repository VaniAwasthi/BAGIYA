import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import "../components/Nav.css";
import logo from "../../../Image/logo.png";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link to="/Pages/HomePage/homepage" className="site-title">
        <img src={logo} alt="Bagiya" />
        BAGIYA
      </Link>
      <ul>
        <CustomLink to="/Pages/HomePage/homepage">HOME</CustomLink>
        <CustomLink to="/Pages/AboutUs">ABOUTUS</CustomLink>
        <CustomLink to="/Pages/Products">PRODUCTS</CustomLink>
        <CustomLink to="/Pages/Contact">CONTACTUS</CustomLink>
      </ul>
      <ul>
        <CustomLink to="/Pages/Cart">
          <FaShoppingCart />
        </CustomLink>
        <CustomLink to="/">
          <FaUser />
        </CustomLink>
      </ul>
    </nav>
  );
};
function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
}
export default Navbar;
