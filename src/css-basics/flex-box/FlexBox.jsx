import React from "react";
import "./flexBox.css";

const FlexBox = () => {
  return (
    <div className="main-container">
      <div className="header">
        <div>logo</div>
        <nav>
          <li>Home</li>
          <li>About</li>
          <li>Profile</li>
        </nav>
      </div>
      <div className="head">FLex Box</div>
      <div className="avatar-container">
        <div className="avatar av-1">Avatar1</div>
        <div className="avatar av-2">Avatar2</div>
        <div className="avatar av-3">Avatar3</div>
      </div>
    </div>
  );
};

export default FlexBox;
