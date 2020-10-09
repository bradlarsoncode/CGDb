import {connect} from 'react-redux';
import Home from './home';
import { resetSanity, updateSanity } from '../../util/user_api_util'
import { receiveCurrentUser } from '../../actions/session_actions';

const mSTP = state => ({
    currentUser: state.session.user,
    progress: state.session.progress
});

const mDTP = dispatch => ({
    resetSanity: (id) => resetSanity(id),
    updateSanity: (id, sanity) => updateSanity(id, sanity),
    receiveCurrentUser: (user) => dispatch(receiveCurrentUser(user))
})


export default connect(mSTP, mDTP)(Home)