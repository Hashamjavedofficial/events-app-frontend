import React from "react";
import { Backdrop, makeStyles } from "@material-ui/core";

import "./spinner.css";

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 100,
    color: "#fff",
  },
}));

const Spinner = (props) => {
  const classes = useStyles();
  return (
    <Backdrop className={classes.backdrop} open={props.open}>
      <div className="spinner"></div>
    </Backdrop>
  );
};

export default Spinner;
