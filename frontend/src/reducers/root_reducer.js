
import { combineReducers } from 'redux';
import session from './sessions_reducer';
import errors from './errors_reducer';

const RootReducer = combineReducers({
  session,
  errors
});

export default RootReducer;