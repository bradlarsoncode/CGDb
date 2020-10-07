import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import { openModal } from "../../actions/modal_actions";
import Navbar from "./navbar";
import { setAlert } from "../../reducers/alerts_reducers";

const mapStateToProps = (state) => ({
  loggedIn: state.session.isAuthenticated,
  currUser: state.session.user,
});

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
  openModal: (modal) => dispatch(openModal(modal)),
  alertLogout: () =>
    dispatch(setAlert(true, "success", "You have successfully logged out!")),
  alertLogin: (name) =>
    dispatch(
      setAlert(true, "success", `You have successfully logged in ${name}!`)
    ),
});

export default connect(mapStateToProps, mDTP)(Navbar);
