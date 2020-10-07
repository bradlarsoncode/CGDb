import React from 'react';
import './home.scss';
import QuestionShow from '../question_show/question_show_container'

export default class Home extends React.Component {

    render () {

        return (
            <div className='home-container'>
                <QuestionShow />
            </div>
        )
    }
}