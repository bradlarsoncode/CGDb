
import React from "react";
import questionPart from "./questionsParts";
import "./question_show.scss";
export default class QuestionShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gpv: {},
      errors: null,
    };
    this.ref = React.createRef();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    let c = 0;
    const chx = document.querySelectorAll("[class^=rad]");
    for (let i = 0; i < chx.length; i++) {
      if (chx[i].checked) {
        c += 1;
      }
    }
    if (c === this.props.questions.length) {
      this.setState({ errors: "" });
      const ns = Object.values(this.state.gpv).reduce((a, b) => a + b);
      this.props.updateSanity(this.props.currentUser.email, ns).then((user) => {
        this.props.receiveCurrentUser(user.data);
        this.props.updateProgress();
      });
    } else {
      this.setState({ errors: "Please answer all questions" });
    }
  }

  componentDidMount() {
    if (this.props.progress) {
      this.props.requestByProgress(this.props.progress);
    } else {
      this.props.resetProgress();
      this.props.requestByProgress(this.props.progress);
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.progress !== prevProps.progress) {
      this.props.requestByProgress(this.props.progress);
    }
  }

  handleResponse() {
    return (e) => {
      let newEntry = { [e.target.name]: parseInt(e.target.value) };
      let ngpv = {
        ...this.state.gpv,
        ...newEntry,
      };
      this.setState({ gpv: ngpv });
    };
  }

  render() {
    let message;
    let ui = <></>;
    switch (this.props.progress) {
      case 0:
        ui = (
          <audio
            autoPlay loop  //added autoPlay loop -Dennis
            ref={(input) => {
              this.reff = input;
            }}
            src="https://webfilms-films.s3.amazonaws.com/sounds/background.wav"
            ></audio>
            );
            message =
            "Thank you for your interest in our program. Please begin with the following initial questions:";
            break;
            default:
              break;
            }
    if (this.props.questions)
      switch (this.props.questions[0].ui_bank) {
        case 4:
          ui = (
            <audio
              autoPlay loop  //added autoPlay loop -Dennis
              ref={(input) => {
                this.reff = input;
              }}
              src={this.props.questions[0].responses[0]}
            ></audio>
          );
          break;
        case 3:
          ui = (
            <audio
              autoPlay loop  //added autoPlay loop -Dennis
              ref={(input) => {
                this.reff = input;
              }}
              src={this.props.questions[0].responses[0]}
            ></audio>
          );
          break;
          // TODO added by dennis
        // case 5:
        //   ui = (
        //     {this.props.question.responses.image.map((image, i) => {
        //         return (
        //         <li key={i} ><img className="uibank5-images" src={image} /></li>
        //         )
        //       })
        //     }
        //   )
        // break;
        case 7:
          ui = (
            <img className="response-gif"
              ref={(input) => {
                this.reff = input;
              }}
              src={this.props.questions[0].responses[0]}
             />
           );
           break;
          //
        
        default:
          break;
      }
    return (
      <div className="question-part">

        {questionPart[this.props.progress]}

        <div className="q-form q-form-container">
          {questionPart[this.props.progress]}
          <h3>{message}</h3>
          {ui}
          {this.props.questions ? (
            this.props.questions.map((question, i) => {
              return (
                <li key={i}>
                  <p>{question.prompt}</p>
                  {question.responses.map((r, i2) => {
                    // debugger;

                    return (
                      <label key={i2}>
                        <input
                          onClick={this.handleResponse()}
                          type="radio"
                          value={r.pv}
                          className={`radAnswer-${i}`}
                          name={`radAnswer-${i}`}
                        />
                        {r.text}
                        {/* added by dennis */}
                        <img className="response-image" src={r.image} /> 
                        <br />
                      </label>
                    );
                  })}
                </li>
              );
            })
          ) : (
            <></>
          )}
          <p>{this.state.errors}</p>

          <button onClick={this.handleSubmit}>Submit</button>

        </div>
      </div>
    );
  }
}
