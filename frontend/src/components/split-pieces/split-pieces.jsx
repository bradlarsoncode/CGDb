import React from "react";
import "./split-pieces.scss";

const SplitPieces = ({email, updateSanity, receiveCurrentUser}) => {
  return (
    <div className="split-pieces-container">
      <h1>Make the Lady Pretty Again</h1>
      <a
        className="frame"
        onClick={() => updateSanity(email, 0).then(res => receiveCurrentUser(res.data))}
      >
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
        <div className="slice"></div>
      </a>
    </div>
  );
};




export default SplitPieces;
