import React from "react";
import "./CharacterCard.css"

const CharacterCard = props => (
  <div className="col s4 m3">
    <div className="card hoverable" onClick={props.handleIncrement}>
      <div className="card-image">
        <img src={props.src} clicked={props.clickStatus}/>
      </div>
    </div>
  </div>
);

export default CharacterCard;