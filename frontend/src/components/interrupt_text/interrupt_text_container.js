import InterruptText from './interrupt_text';
import { connect } from 'react-redux';

const mSTP = state => ({
    currentUser: state.session.user,
});

export default connect(mSTP)(InterruptText)