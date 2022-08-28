import React from "react";
import './FaceRecognition.css'

const FaceRecognition = (props) => {
  return (
    <div className="imgContainer">
      <img className="imgContainer__img" alt="" src={props.imageURL} />
    </div>
  )
}

export default FaceRecognition;