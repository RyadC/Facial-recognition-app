import React from "react";
import './SignIn.css';

const SignIn = (props) => {

  return (
    <main className="main">
      <form className="form">
        <fieldset className="fieldset">
          <legend className="legend">Sign In</legend>
          <div className="email-container">
            <label className="email-container__label">Email</label>
            <input className="email-container__input" type={'email'} required />
          </div>
          <div className="password-container">
            <label className="password-container__label">Password</label>
            <input className="password-container__input" type={'password'} required />
          </div>
        </fieldset>

        <div className="submit-container">
          <input 
          className="submit-container__input" 
          type={'submit'} 
          value={'Sign In'}
          onClick={() => props.onRouteChange('home')} 
          />
        </div>
        
        <div className="register-container">
          <a className="register-container__link" href="#register" onClick={() => props.onRouteChange('register')}>Register</a>
        </div>

      </form>
    </main>
  )
}



export default SignIn;