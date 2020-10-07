import React from "react";
import "./dark-page.scss";

const DarkPage = () => {
  window.addEventListener("DOMContentLoaded", () => {
    const spotlight = document.querySelector(".spotlight");

    let spotlightSize = "transparent 50px, rgba(0, 0, 0, 1) 50px)";

    window.addEventListener("mousemove", (e) => updateSpotlight(e));

    function updateSpotlight(e) {
      spotlight.style.backgroundImage = `radial-gradient(circle at ${
        (e.pageX / window.innerWidth) * 100
      }% ${(e.pageY / window.innerHeight) * 100}%, ${spotlightSize}`;
    }
  });
  return (
    <div className="test-container">
      <div className="spotlight"></div>
    </div>
  );
};

export default DarkPage;
