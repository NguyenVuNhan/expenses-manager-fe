import React, { lazy } from "react";
import { Route, Switch } from "react-router-dom";

const Login = lazy(() => import("../pages/Login"));

const AuthRoutes = () => {
  return (
    <Switch>
      <Route path="/login" component={Login} />
    </Switch>
  );
};

export default AuthRoutes;
