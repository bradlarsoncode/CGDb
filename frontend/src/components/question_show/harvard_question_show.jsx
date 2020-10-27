import React from 'react';
import "./question_show.scss";


export default class HarvardQuestionShow extends React.Component {

  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
      this.props.requestCurrentUser();
      this.props.requestByProgress(this.props.currentUser.progress);
    
  }
  componentDidUpdate(prevProps) {
    if (this.props.currentUser.progress !== prevProps.currentUser.progress) {
      this.props.requestByProgress(this.props.currentUser.progress);
    }
  }
  
  handleSubmit(e) {
    e.preventDefault();
  
    const ns = Math.floor(Math.random() * 4 + -2)

    this.props.updateSanity(this.props.currentUser.email, ns).then((user) => {
      this.props.requestCurrentUser()
      });
  }


  render () {
    if (this.props.question === null) return null;
      return (
      <div className='q-form-container q-form'>
          <p>{this.props.question.prompt}</p>
          <img
            className="harvard-picture"
            src={this.props.question.image}
          />
          <div className='yes-no'>

          <button onClick={this.handleSubmit}>Good</button>
          <button onClick={this.handleSubmit}>Bad</button>
          </div>
      </div>)
  }
}