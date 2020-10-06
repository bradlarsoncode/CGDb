import { combineReducers } from "redux";
import session from "./session_api_reducers";
import errors from "./errors_reducer";
import modal from "./modal_reducer";
import alert from "./alerts_reducers";

const RootReducer = combineReducers({
  session,
  errors,
  modal,
  alert,
});

export default RootReducer;
