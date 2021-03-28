import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./containers/layout";
import Login from "./components/Login-SignUp/Login";
import Signup from "./components/Login-SignUp/Signup";
const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Redirect to={"/login"} />
      </Switch>
    </Layout>
  );
};
export default Routes;
