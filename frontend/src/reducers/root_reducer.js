
import { combineReducers } from 'redux';
import session from './session_api_reducers';
import errors from './errors_reducer';
import modal from './modal_reducer';

const RootReducer = combineReducers({
  session,
  errors,
  modal
});

export default RootReducer;