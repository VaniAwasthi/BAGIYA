import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Footer.css";
import logo from "./Image/logo.png";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="Container">
        <div className="fistSection">
          <div className="logo">
            <Link to="/Pages/Home">
              <img src={logo} />
            </Link>
            <Link to="/Pages/Home" className="site-title">
              <h4>BAGIYA</h4>
            </Link>
          </div>
        </div>
        <div className="secondsectiom"></div>
        <div className="ThirdSection"></div>
        <div className="fourth section"></div>
      </div>
      {/* {`Copyright © BAGIYA  ${year}`} */}
    </footer>
  );
};
export default Footer;
