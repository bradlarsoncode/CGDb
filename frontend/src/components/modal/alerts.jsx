import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { setAlert } from "../../reducers/alerts_reducers";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const CustomAlert = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const alertOpen = useSelector((state) => state.alert.alertOpen);
  const alertType = useSelector((state) => state.alert.alertType);
  const alertMessage = useSelector((state) => state.alert.alertMessage);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(setAlert(false, alertType, alertMessage));
  };

  return (
    <div className={classes.root}>
      <Snackbar open={alertOpen} autoHideDuration={3000} onClose={handleClose}>
        <Alert
          elevation={6}
          variant="filled"
          onClose={handleClose}
          color={alertType}
        >
          {alertMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default CustomAlert;
