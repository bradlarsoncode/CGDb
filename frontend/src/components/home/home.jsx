import React from "react";
import "./home.scss";
import QuestionShow from "../question_show/question_show_container";
import InterruptText from "../interrupt_text/interrupt_text_container";

export default class Home extends React.Component {
  render() {
    if (this.props.currentUser.sanity < -12) {
      this.props.resetSanity(this.props.currentUser.email);
      return (
        <div className="gameover">
          <audio autoPlay loop
            src="https://webfilms-films.s3.amazonaws.com/sounds/laugh.wav">
          </audio>
          <p>
            {" "}
            The CGDb are unable to help you today. Please remain still until
            a nurse can administer your medications. You know what happens if
            you try to move… See you tomorrow.{" "}
          </p>
          <p>- Drs. Chris, Gio, Dennis and Brad</p>
        </div>
      );
    } else {
      return (
        <div className="home-container" id="home-container">
          <InterruptText className="fade-out"/>
          <QuestionShow />
        </div>
      );
    }
  }
}
