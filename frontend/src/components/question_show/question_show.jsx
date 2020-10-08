
import React from 'react';
import './question_show.scss'
export default class QuestionShow extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            gpv: {},
            errors: null
        }
        this.ref = React.createRef(); 
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit (e) {
       e.preventDefault()
        let c = 0;
       const chx = document.querySelectorAll("[class^=rad]");
       for (let i=0; i<chx.length; i++) {
        if (chx[i].checked) {
           c += 1
         } 
       }
       if (c === this.props.questions.length) {
           this.setState({errors: ''})
           const ns =  Object.values(this.state.gpv).reduce((a,b) => a + b)
           this.props.updateSanity(this.props.currentUser.email, ns)
               .then(user => {
                   this.props.receiveCurrentUser(user.data);
                   this.props.updateProgress()
                });
           
           
        } else {
            this.setState({errors: 'Please answer all questions'})
        }

    }
    componentDidMount () {
        if (this.props.progress) {

            this.props.requestByProgress(this.props.progress)
        } else {
            this.props.resetProgress()
            this.props.requestByProgress(this.props.progress)

        }
    }
    
    componentDidUpdate (prevProps) {
        if (this.props.progress !== prevProps.progress) {
            this.props.requestByProgress(this.props.progress)
        }
    }

    handleResponse () {
        return e => {

            let newEntry = {[e.target.name]: parseInt(e.target.value)}
            let ngpv = {
                ...this.state.gpv,
                ...newEntry
            }
            this.setState({gpv: ngpv})
           
            
        }

    }
    render () {
        let message;
        switch (this.props.progress) {
            case 0:
                message = 'Thank you for your interest in our program. Please begin with the following initial questions:';
                break;
            default:
                break;
        }
        let ui = (<></>);
        if (this.props.questions)
        switch (this.props.questions[0].ui_bank) {
            case 4:
                ui = (
                    <audio controls
                    ref={(input) => {this.reff = input}}
                    src={this.props.questions[0].responses[0]}></audio>
                )
                break;
        
            default:
                break;
        }

        return (
            
        <div className='q-form'>
        <h3>{message}</h3>
        {ui}
        { this.props.questions ?  (this.props.questions.map((question, i) => {
            return (
                <li>
                    <p>{question.prompt}</p>
                    {question.responses.map((r) => {
                        return (
                            <label>
                            <input
                            onClick={this.handleResponse()}
                            type='radio'
                            value={r.pv}
                            className={`radAnswer-${i}`}
                            name={`radAnswer-${i}`}
                            ></input>
                            {r.text}
                            <br/>
                            </label>
                        )
                    })}
                </li>
            )
        }) ) : <></>
        }
        <p>
            {this.state.errors}
        </p>
        <button onClick={this.handleSubmit}>Submit</button>
        </div>
        
        )
    }
}
