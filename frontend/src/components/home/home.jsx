import React from "react";
import "./home.scss";
import QuestionShow from "../question_show/question_show_container";
import InterruptText from "../interrupt_text/interrupt_text_container";

export default class Home extends React.Component {
  componentDidMount() {
    let vid;
    if (document.getElementById("background-video"))
      vid = document.getElementById("background-video");
    function setPlaySpeed() {
      vid.playbackRate = 0.7;
    }
    if (vid) setPlaySpeed();
  }

  render() {
    if (this.props.currentUser.sanity < -12) {
      this.props.resetSanity(this.props.currentUser.email);
      return (
        <div className="gameover">
          <audio
            autoPlay
            loop
            src="https://webfilms-films.s3.amazonaws.com/sounds/laugh.wav"
          ></audio>
          <p>
            {" "}
            The CGDb are unable to help you today. Please remain still until a
            nurse can administer your medications. You know what happens if you
            try to move… See you tomorrow.{" "}
          </p>
          <p>- Drs. Chris, Gio, Dennis and Brad</p>
        </div>
      );
      
    } else if (this.props.currentUser.progress > 4) {
      setTimeout(() => { this.props.updateSanity(this.props.currentUser.email, -20)
        .then(resp => (this.props.receiveCurrentUser(resp.data))) }, 11000);
        return (
          <div className="gunshot">
            <video autoPlay src="https://webfilms-films.s3.amazonaws.com/end+screen.mp4" type="video/mp4"></video>
          </div>
        )
    }
    else {
      return (
        <div className="home-container" id="home-container">
          <InterruptText className="fade-out" />
          <QuestionShow />
        </div>
      );
    }
  }
}
