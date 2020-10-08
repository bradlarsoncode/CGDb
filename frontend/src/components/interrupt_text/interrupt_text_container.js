import InterruptText from './interrupt_text';
import { connect } from 'react-redux';

const mSTP = state => ({
    currentUser: state.session.user,
    progress: state.session.progress
});

export default connect(mSTP)(InterruptText)