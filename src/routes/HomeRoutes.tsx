import React from "react";
import { Switch } from "react-router-dom";
import Home from "pages/Home";
import AuthenticatedGuard from "guards/AuthenticatedGuard";

type Props = {
  isAuthenticated: boolean | undefined;
};

const HomeRoutes = ({ isAuthenticated }: Props) => {
  return (
    <Switch>
      <AuthenticatedGuard
        isAuthenticated={isAuthenticated}
        exact
        path="/home"
        component={Home}
      />
      <AuthenticatedGuard
        isAuthenticated={isAuthenticated}
        exact
        path="/"
        component={Home}
      />
    </Switch>
  );
};

export default HomeRoutes;
