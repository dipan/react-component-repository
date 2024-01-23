import React, { useState } from "react";
import {
  FaHome,
  FaLink,
  FaEnvelope,
  FaAngleDoubleRight,
  FaAngleDoubleLeft,
} from "react-icons/fa";
import "./LeftSideNavbarV1.css";

const LeftSideNavbarV1 = () => {
  const [isCollapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    console.log(isCollapsed);
    setCollapsed(!isCollapsed);
    console.log(isCollapsed);
  };

  return (
    <div className={`side-nav-bar ${isCollapsed ? "collapsed" : ""}`}>
      <div className="top-section">
        <div className="logo">Logo</div>
        {!isCollapsed && <div className="title">Your Title</div>}
      </div>
      <div className="center-section">
        <div className="nav-item">
          <FaHome />
          {!isCollapsed && <span>Link 1</span>}
        </div>
        <div className="nav-item">
          <FaLink />
          {!isCollapsed && <span>Link 2</span>}
        </div>
        <div className="nav-item">
          <FaLink />
          {!isCollapsed && <span>Link 3</span>}
        </div>
      </div>
      <div className="bottom-section">
        {!isCollapsed && (
          <div className="contact">
            <FaEnvelope />
            <span>Email</span>
          </div>
        )}
      </div>
      <div className={`collapse-button `} onClick={toggleCollapse}>
        {isCollapsed ? <FaAngleDoubleRight /> : <FaAngleDoubleLeft />}
      </div>
    </div>
  );
};

export default LeftSideNavbarV1;
