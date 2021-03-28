import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./containers/layout";
import Login from "./components/Login-SignUp/Login";
import Signup from "./components/Login-SignUp/Signup";
import Events from "./containers/Events";
import SelectedEvent from "./containers/SelectedEvent";

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/events" component={Events} />
        <Route path="/event/:id" component={SelectedEvent} />
        <Redirect to={"/login"} />
      </Switch>
    </Layout>
  );
};
export default Routes;
