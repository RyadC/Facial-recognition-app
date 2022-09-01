import React from "react";
import './Navigation.css';

const Navigation = (props) => {
  return (
    <nav className="nav">
      <p 
      className="nav__link" 
      onClick={() => props.onRouteChange('signin')}
      >
        Sign out
      </p>
    </nav>
  )
};

export default Navigation;