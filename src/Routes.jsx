import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Layout from "./containers/layout";
import Login from "./components/Login-SignUp/Login";

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <Route path="/login" component={Login} />
        <Redirect to={"/login"} />
      </Switch>
    </Layout>
  );
};
export default Routes;
