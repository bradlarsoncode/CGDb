import {connect} from 'react-redux';
import { requestQuestions, requestByProgress } from '../../actions/question_actions'
import HarvardQuestionShow from './harvard_question_show';
import {updateSanity} from '../../util/user_api_util'
import {requestCurrentUser } from '../../actions/session_actions'


const mSTP = state => {
    
    let question = state.question.data ? state.question.data[0] : null;
    return({
    question,
    currentUser: state.session.user,
})};

const mDTP = dispatch => ({
    requestQuestions: () => dispatch(requestQuestions()),
    requestByProgress: (progress) => dispatch(requestByProgress(progress)),
    updateSanity: (id, sanity) => updateSanity(id, sanity),
    requestCurrentUser: () => dispatch(requestCurrentUser()),
    
});

export default connect(mSTP, mDTP)(HarvardQuestionShow)