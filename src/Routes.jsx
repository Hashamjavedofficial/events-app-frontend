import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import Layout from "./containers/layout";
import Login from "./components/Login-SignUp/Login";
import Signup from "./components/Login-SignUp/Signup";
import Events from "./containers/Events";
import SelectedEvent from "./containers/SelectedEvent";

const Routes = (props) => {
  const { auth } = useSelector((state) => state);
  let routes;
  if (auth.token) {
    routes = (
      <Fragment>
        <Route exact path="/event/:id" component={SelectedEvent} />
        <Route exact path="/" component={Events} />
        <Redirect to={"/"} />
      </Fragment>
    );
  } else {
    routes = (
      <Fragment>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Redirect to={"/login"} />
      </Fragment>
    );
  }
  return (
    <Layout>
      <Switch>{routes}</Switch>
    </Layout>
  );
};
export default Routes;
