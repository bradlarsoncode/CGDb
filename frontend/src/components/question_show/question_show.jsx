import React from 'react';

export default class QuestionShow extends React.Component {

    componentWillMount () {
        // this.props.requestQuestions()
        
        this.props.requestByProgress(0)
    }

    handleResponse () {
        return e => {
            e.preventDefault()
            console.log(e.target.value) 
        }

    }
    render () {
        let currentQuestion = 0
        let message;
        switch (currentQuestion) {
            case 0:
                
                message = 'Please begin with the following initial questions:';
        
            default:
                break;
        }
        return (
            
        <div>
        <h3>{message}</h3>
        { this.props.questions ?  (this.props.questions.map((question, i) => {
            return (
                <div>
                    <p>{question.prompt}</p>
                    {question.responses.map((r) => {
                        return (
                            <label>

                            <input
                            type='radio'
                            value={r.pv}
                            name={`radAnswer-${i}`}
                            ></input>
                            {r.text}
                            <br/>
                            </label>
                        )
                    })}
                </div>
            )
        }) ) : <></>
    
    
        }
        </div>
        
        )
    }
}