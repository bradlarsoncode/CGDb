import {RECEIVE_QUESTION, REMOVE_QUESTION} from '../actions/question_actions'

export default (state = [], action) => {
    Object.freeze(state)
    switch (action.type) {
        case RECEIVE_QUESTION:
            return action.question;
        case REMOVE_QUESTION:
            return [];

    
        default:
            return state;
    }
}