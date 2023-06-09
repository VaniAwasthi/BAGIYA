import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";
import "./Footer.css";
import logo from "./Image/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaHome,
  FaMobile,
  FaEnvelope,
} from "react-icons/fa";

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
          <div className="FooterContent">
            <h3> More About Company</h3>
            <p>
              We are a team of horticultural experts, logistical masterminds,
              design geniuses, and lots of dedicated worker bees trying our best
              to earn the smile you wear on seeing the healthy, happy plants you
              receive
            </p>
          </div>
        </div>
        <div className="secondsectiom">
          <h3>Keep Connected</h3>

          <div className="IconContainer">
            <div className="Icons">
              <div className="Icon-Items">
                <FaFacebook />
              </div>
              <div className="Icon-Items">
                <FaInstagram />
              </div>
              <div className="Icon-Items">
                <FaTwitter />
              </div>
              <div className="Icon-Items">
                <FaLinkedin />
              </div>
            </div>
            <div className="Icons">
              <div className="Icon-Item">
                <p>Facebook</p>
              </div>
              <div className="Icon-Item">
                <p>Instagram</p>
              </div>
              <div className="Icon-Item">
                <p>Twitter</p>
              </div>
              <div className="Icon-Item">
                <p>Linkedin</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="ThirdSection">
          <h3>Contact</h3>
          <div className="Address">
            <FaHome />
            <div className="companyDetail">
              <p>Bagiya</p>
              <p>is simply dummy text of the printing and </p>
            </div>
          </div>
          <div className="contact">
            <FaMobile />
            <p>8906737891</p>
          </div>
          <div className="contact">
            <FaEnvelope />
            <p>xyz@gmailcom</p>
          </div>
        </div> */}
        <div className="secondsectiom">
          <h3>Keep Connected</h3>

          <div className="IconContainer">
            <div className="Icons">
              <div className="ThirdsecIcon">
                <FaHome />
              </div>
              <div className="ThirdsecIcon">
                <FaMobile />
              </div>
              <div className="ThirdsecIcon">
                <FaEnvelope />
              </div>
            </div>
            <div className="Icons">
              <div className="Icon-content">
                <p>
                  BAGIYA
                  <br />
                  gurgaon 220110
                </p>
              </div>
              <div className="Icon-content">
                <p>8976542310</p>
              </div>
              <div className="Icon-content">
                <p>xyz@gmailcom</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="CopyrightSection">
        <div>{`Copyright © BAGIYA  ${year}`}</div>
        <div>
          <p>Privacy Policy | Terms and Conditions | FAQ </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
