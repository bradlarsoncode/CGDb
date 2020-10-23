
import { connect } from 'react-redux';
import ProfileShow from './profile_show';
import { receiveCurrentUser } from '../../actions/session_actions'

const mSTP = state => ({
    currentUser: state.session.user,
});

export default connect(mSTP, null)(ProfileShow)