import React from "react";
import logoImg from '../../assets/images/monitor-illustration_2.png';
import Tilt from 'react-parallax-tilt';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo__container">
      <Tilt style={{width: 'min-content'}}>
        <img className="logo__img" src={logoImg} alt="A computer" />
      </Tilt>
    </div>
  )
};

export default Logo;