import React, { useState, Fragment } from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Divider from "@material-ui/core/Divider";
import { Formik, Field } from "formik";
import { useSelector, useDispatch } from "react-redux";

import * as Actions from "../../store/AllActions";
import { useLoginStyle } from "./Login.Styles";
import Spinner from "../Shared/Spinner";
import Logo from "../../logo.svg";
import loginImage from "../../assets/sport.jpg";

const Signup = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  // const auth = useContext(AuthContext);
  const classes = useLoginStyle();
  const loginClasses = useLoginStyle();
  const [open, setOpen] = useState(false);

  const submitHandler = (values, options) => {
    dispatch(Actions.authLogin(values, true));
  };
  return (
    <Fragment>
      <Spinner open={open} />
      <div className={classes.main}>
        <Grid container item className={classes.imageContainer}>
          <img
            src={loginImage}
            alt="Side Image"
            className={classes.sideImage}
          />
        </Grid>
        <Card container className={classes.cardWrapper}>
          <div>
            <Grid container className={classes.logo} justify="center">
              <Grid item>
                <img
                  src={Logo}
                  alt="Dededo Mayor Office"
                  className={classes.image}
                />
              </Grid>
            </Grid>
            <Grid container className={classes.formContainer} justify="center">
              <Grid item md={10} xs={10} justify="center">
                <br />
                <br />
              </Grid>
              <Grid item xs={10} md={10}>
                <Formik
                  initialValues={{
                    name: "",
                    code: "",
                    email: "",
                    password: "",
                  }}
                  onSubmit={(values, options) => submitHandler(values, options)}
                >
                  {({ values, handleSubmit, touched, errors }) => (
                    <form onSubmit={handleSubmit} autoComplete="Off">
                      <Grid container spacing={2} direction="column">
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            label="Name"
                            name="name"
                            type="text"
                            required
                            variant="outlined"
                            className="w-full"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            label="Email"
                            name="email"
                            type="email"
                            required
                            variant="outlined"
                            className="w-full"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            label="Password"
                            type="password"
                            name="password"
                            required
                            variant="outlined"
                            className="w-full"
                          />
                        </Grid>
                        <Grid item xs={12}>
                          <Field
                            as={TextField}
                            label="Sign Up Code"
                            type="text"
                            name="code"
                            required
                            variant="outlined"
                            className="w-full"
                          />
                        </Grid>
                        <Grid item>
                          <Grid container justify="space-between" spacing={2}>
                            <Grid item md={12} xs={12}>
                              <Button
                                type="Submit"
                                variant="contained"
                                color="primary"
                                className="w-full"
                              >
                                Sign Up
                              </Button>
                            </Grid>
                          </Grid>
                        </Grid>
                      </Grid>
                    </form>
                  )}
                </Formik>
              </Grid>
            </Grid>
          </div>
        </Card>
      </div>
    </Fragment>
  );
};

export default Signup;
