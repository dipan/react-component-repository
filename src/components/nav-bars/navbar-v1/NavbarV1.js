import React from "react";
import "./NavbarV1.css";

const NavbarV1 = () => {
  return (
    <div className="navbar-v1-container">
      <div className="left-section">
        <div className="logo">Logo</div>
        <div className="title">Your Title</div>
      </div>
      <div className="center-section">
        <nav>
          <div className="nav-item">
            <a href="#home">Home</a>
            <div className="dropdown">
              <a href="#link1">Link 1</a>
              <a href="#link2">Link 2</a>
            </div>
          </div>
          <div className="nav-item">
            <a href="#about">About</a>
            <div className="dropdown">
              <a href="#about-link1">About Link 1</a>
              <a href="#about-link2">About Link 2</a>
              <a href="#about-link3">About Link 3</a>
            </div>
          </div>
          <div className="nav-item">
            <a href="#contact">Contact</a>
            <div className="dropdown">
              <a href="#email">Email</a>
              <a href="#phone">Phone</a>
              <a href="#whatsapp">WhatsApp</a>
            </div>
          </div>
        </nav>
      </div>
      <div className="right-section">
        <button>Login</button>
        <button>Register</button>
      </div>
    </div>
  );
};

export default NavbarV1;
