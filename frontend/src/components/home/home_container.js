import {connect} from 'react-redux';
import Home from './home';
import { resetSanity } from '../../util/user_api_util'

const mSTP = state => ({
    currentUser: state.session.user
});

const mDTP = dispatch => ({
    resetSanity: (id) => resetSanity(id)
})


export default connect(mSTP, mDTP)(Home)