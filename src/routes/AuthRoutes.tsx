import React from "react";
import { Route, Switch } from "react-router-dom";

import Login from "pages/Authentication/Login";
import Register from "pages/Authentication/Register";
import ForgotPassword from "pages/Authentication/ForgotPassword";

const AuthRoutes = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/forgot-password" component={ForgotPassword} />
    </Switch>
  );
};

export default AuthRoutes;
