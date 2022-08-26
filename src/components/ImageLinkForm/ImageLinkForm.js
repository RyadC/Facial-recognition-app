import React from "react";
import './ImageLinkForm.css';

const ImageLinkForm = () => {
  return (
    <div className="searchImg__container">
      <h2 className="searchImg__title">Choose an image to capt the face</h2>
      <div className="searchImg__inputContainer">
        <input className="searchImg__inputContainer__input" type={'text'} />
        <button className="searchImg__inputContainer__btn">Capt it!</button>
      </div>
    </div>
  )
};

export default ImageLinkForm;