
import { RECEIVE_CURRENT_USER, RECEIVE_USER_LOGOUT, UPDATE_PROGRESS, RESET_PROGRESS } from '../actions/session_actions';

const initialState = {
isAuthenticated: false,
user: {},
progress: 0
};


export default function(state = initialState, action) {
switch (action.type) {
case RECEIVE_CURRENT_USER:
 return {
   ...state,
   isAuthenticated: !!action.currentUser,
   user: action.currentUser
 };
case RECEIVE_USER_LOGOUT:
 return {
   isAuthenticated: false,
   user: undefined,
   progress: 0
 };
case UPDATE_PROGRESS:
  return Object.assign({}, state, {progress: state.progress+1})
  
case RESET_PROGRESS:
  return Object.assign({}, state, {progress: 0})

default:
 return state;
}
}