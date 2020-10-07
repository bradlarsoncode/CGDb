import {connect} from 'react-redux';
import { requestQuestions, requestByProgress } from '../../actions/question_actions'
import QuestionShow from './question_show';


const mSTP = state => ({
    questions: state.question.data
});

const mDTP = dispatch => ({
    requestQuestions: () => dispatch(requestQuestions()),
    requestByProgress: (progress) => dispatch(requestByProgress(progress))

});

export default connect(mSTP, mDTP)(QuestionShow)