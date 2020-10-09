import React from "react";
import "./rain.scss";

const Rain = (props) => {
  let hrElement;
  let counter = 50;
  let homeContainer = document.getElementById("home-container");
  for (let i = 0; i < counter; i++) {
    hrElement = document.createElement("HR");
    if (i === counter - 1) {
      hrElement.className = "thunder";
    } else {
      hrElement.style.left =
        Math.floor(Math.random() * window.innerWidth) + "px";
      hrElement.style.animationDuration = 0.2 + Math.random() * 0.3 + "s";
      hrElement.style.animationDelay = Math.random() * 5 + "s";
    }
    if (homeContainer) homeContainer.appendChild(hrElement);
  }

  return null;
};

export default Rain;
