import {connect} from 'react-redux';
import Home from './home';

const mSTP = state => ({
    currentUser: state.session.user
});

// const mDTP;


export default connect(mSTP, null)(Home)