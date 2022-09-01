import React, { Fragment } from "react";
import './Navigation.css';

const Navigation = (props) => {

  // Navigation handler
  let navigationDisplay = null;
  switch (props.isSignedIn) {
    case true:
      navigationDisplay = <nav className="nav">
          <p className="nav__link" onClick={() => props.onRouteChange('signin')}>
            Sign out
          </p>
        </nav>
    break;

    case false:
      navigationDisplay = <nav className="nav">
          <p className="nav__link" onClick={() => props.onRouteChange('signin')}>
            Sign in
          </p>
          <p className="nav__link" onClick={() => props.onRouteChange('register')}>
            Register
          </p>
        </nav>
    break;
  
      default:
        navigationDisplay = <nav className="nav">
          <p className="nav__link" onClick={() => props.onRouteChange('home')}>
            Sign in
          </p>
          <p className="nav__link" onClick={() => props.onRouteChange('home')}>
            Register
          </p>
        </nav>
      break;
  }

  return (
    <Fragment>
      {navigationDisplay}
    </Fragment>
  )
};

export default Navigation;