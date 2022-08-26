import React from "react";
import './Rank.css';

const Rank = () => {
  return (
    <div className="rankContainer">
      <p className="rankContainer__text">
        <span className="rankContainer__name">Ryad</span>, your current rank is...
      </p>
      <p className="rankContainer__score">#5</p>
    </div>
  )
};

export default Rank;