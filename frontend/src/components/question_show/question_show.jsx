import React from "react";
import "./question_show.scss";

export default class QuestionShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gpv: {},
      ready: false,
    };
  }

  handleSubmit(e) {
    e.preventDefault();
  }
  componentWillMount() {
    this.props.requestByProgress(0);
  }

  handleResponse() {
    return (e) => {
      let newEntry = { [e.target.name]: parseInt(e.target.value) };
      let ngpv = {
        ...this.state.gpv,
        ...newEntry,
      };

      this.setState({ gpv: ngpv });
      console.log(Object.values(ngpv).reduce((a, b) => a + b));
    };
  }
  render() {
    let currentQuestion = 0;
    let message;
    switch (currentQuestion) {
      case 0:
        message =
          "Thank you for your interest in our program. Please begin with the following initial questions:";

      default:
        break;
    }
    return (
      <div className="q-form">
        <h3>{message}</h3>
        {this.props.questions ? (
          this.props.questions.map((question, i) => {
            return (
              <li>
                <p>{question.prompt}</p>
                {question.responses.map((r) => {
                  return (
                    <label>
                      <input
                        onClick={this.handleResponse()}
                        type="radio"
                        value={r.pv}
                        className={`radAnswer-${i}`}
                        name={`radAnswer-${i}`}
                      ></input>
                      {r.text}
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
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}
