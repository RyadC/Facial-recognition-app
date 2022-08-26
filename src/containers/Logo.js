import React from "react";
import logoImg from '../assets/images/retro_computer.png';
import './Logo.css';

const Logo = () => {
  return (
    <img className="logo__img" src={logoImg} alt="A retro computer" />
  )
};

export default Logo;