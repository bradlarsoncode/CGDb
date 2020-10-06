export const SET_ALERT = "SET_ALERT";

const initialState = {
  alertOpen: false,
  alertType: "success",
  alertMessage: "",
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      const { alertOpen, alertMessage, alertType } = action;
      return {
        ...state,
        alertOpen,
        alertType,
        alertMessage,
      };
    default:
      return state;
  }
};

export const setAlert = (
  alertOpen,
  alertType = "success",
  alertMessage = ""
) => ({
  type: SET_ALERT,
  alertOpen,
  alertType,
  alertMessage,
});
