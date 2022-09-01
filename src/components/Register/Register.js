import React from "react";
import './Register.css';

const Register = (props) => {
  return (
    <main className="main">
    <form className="form">
      <fieldset className="fieldset">
        <legend className="legend">Register</legend>
        <div className="name-container">
          <label className="name-container__label">Name</label>
          <input className="name-container__input" type={'text'} required />
        </div>
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
        value={'Register'}
        onClick={() => props.onRouteChange('home')} 
        />
      </div>
    </form>
  </main>
  )
}

export default Register;