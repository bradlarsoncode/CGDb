import React from "react";
import "./background-video.scss";
import videoLink from "../../assets/landing-background.webm";

const BackgroundVideo = () => {
  return (
    <video autoPlay="autoplay" loop="loop" muted className="background-video">
      <source src={videoLink} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default BackgroundVideo;
