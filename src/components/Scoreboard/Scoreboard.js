import React from "react";

const Scoreboard = props => (
  <div className="col s6 l6 offset-l3 offset-l3">
    <div className="card blue-grey darken-1">
      <div className="card-content white-text">
        <span className="card-title center-align">Scoreboard</span>
        <p>High Score: {props.highScore}</p>
        <p>Score: {props.score}</p>
      </div>
    </div>
  </div>
);

export default Scoreboard;