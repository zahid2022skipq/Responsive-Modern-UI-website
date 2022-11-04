import React from "react";
import "./navbar.css";

const logo = "../../assets/assets/logo.png";

const Navbar = () => {
  return (
    <div className="gpt3__navbar">
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links-logo">
          <img src={logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
