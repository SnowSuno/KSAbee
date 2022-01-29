import React from "react";
import "./style.scss"
import logo from "./../../img/logo.png"

function Header() {
  return (
  <div className="Header">
    <img src={logo} alt="logo img" />
    <div className="text">
      <div>
        <span>KSA</span>
        <span>Bee</span>
      </div>
      <div>KSA LOL랭킹 사이트</div>
    </div>
  </div>
  );
}

export default Header;
