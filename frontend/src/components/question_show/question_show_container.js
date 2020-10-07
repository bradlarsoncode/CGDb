import {connect} from 'react-redux';
import { requestQuestions, requestByProgress } from '../../actions/question_actions'
import QuestionShow from './question_show';

import {updateSanity} from '../../util/user_api_util'
const mSTP = state => ({
    questions: state.question.data,
    currentUser: state.session.user
});

const mDTP = dispatch => ({
    requestQuestions: () => dispatch(requestQuestions()),
    requestByProgress: (progress) => dispatch(requestByProgress(progress)),
    updateSanity: (id, sanity) => updateSanity(id, sanity)
});

export default connect(mSTP, mDTP)(QuestionShow)