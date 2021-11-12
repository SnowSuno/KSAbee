import React from "react";
import "./style.css"
import logo from "./../../img/logo.png"

function Header() {
  return (
  <div className="header">
    <img src={logo} alt="logo img" className="header__img" />
    <div className="header__text">
      <span>KSA</span>
      <span>Bee</span><br/>
      <span>KSA LOL랭킹 사이트</span>
    </div>
  </div>
  );
}

export default Header;