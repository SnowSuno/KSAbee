import React from 'react';
import './Header.css';

const Header = () => {
  return (
  <div className="header">
    <img className="bee_img" src="/img/sadBee.jpg" alt="bee-logo"/>
	  <p className="logo_text">KSA</p>
    <p className="logo_text">bee</p>
	</div>
  );
};

export default Header;