
import React from 'react';
export default class QuestionShow extends React.Component {

    constructor (props) {
        super(props)
        this.state = {
            gpv: {},
            errors: null
        }
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
           this.setState({errors: 'uploading responses'})
           const ns =  Object.values(this.state.gpv).reduce((a,b) => a + b)
           this.props.updateSanity(this.props.currentUser.email, ns)
               .then(user => this.props.receiveCurrentUser(user.data))
           
           
        } else {
            this.setState({errors: 'Please answer all questions'})
        }

    }
    componentWillMount () {

        this.props.requestByProgress(0)
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
        let currentQuestion = 0
        let message;
        switch (currentQuestion) {
            case 0:
                message = 'Thank you for your interest in our program. Please begin with the following initial questions:';
                break;
            default:
                break;
        }
        return (
            
        <div className='q-form'>
        <h3>{message}</h3>
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
