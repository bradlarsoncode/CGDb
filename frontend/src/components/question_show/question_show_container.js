import {connect} from 'react-redux';
import { requestQuestions, requestByProgress } from '../../actions/question_actions'
import QuestionShow from './question_show';
import {updateSanity} from '../../util/user_api_util'
import {receiveCurrentUser, updateProgress} from '../../actions/session_actions'


const mSTP = state => ({
    questions: state.question.data,
    currentUser: state.session.user,
    progress: state.session.progress
});

const mDTP = dispatch => ({
    requestQuestions: () => dispatch(requestQuestions()),
    requestByProgress: (progress) => dispatch(requestByProgress(progress)),
    updateSanity: (id, sanity) => updateSanity(id, sanity),
    receiveCurrentUser: user => dispatch(receiveCurrentUser(user)),
    updateProgress: () => dispatch(updateProgress())
});

export default connect(mSTP, mDTP)(QuestionShow)