import React from "react";
import "./landing-page.scss";

class MainPage extends React.Component {
  render() {
    return (
      <div className="landing-container ">
        {/* <h2 className="modal-header">Log In or Sign Up To Start</h2> */}
        <p>
          Founded in 1992 at Bram College, the goal of our database is to track
          the decline of mental health through a series of questions targeting
          the sanity of the participant.
        </p>
        <p>
          A shining beacon in the field of mental health testing, The CDGb
          program has been cited in over 217 journal articles (237 - including
          films).
        </p>
        <p>
          Thanks to the miracles of modern cognitive research, our database is
          able to accurately forecast the probability of a subject's resolve in
          fighting off psychotic disorders/behavior
        </p>
        <p>Note: This site is designed for adults, aged 18 or older.</p>
      </div>
    );
  }
}

export default MainPage;
