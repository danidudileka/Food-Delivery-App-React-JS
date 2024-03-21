import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="logo" />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit ratione fugiat vitae quisquam dolores sint id, nisi veniam repellendus. Tempore, expedita. At praesentium deserunt minima! Porro iste beatae maxime voluptatem?</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="facebook" />
                <img src={assets.twitter_icon} alt="twitter" />
                <img src={assets.linkedin_icon} alt="linkedin" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+1-123-456-7890</li>
                <li>contact@tomato.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Tomato.com
      </p>
    </footer>
  );
};

export default Footer;
