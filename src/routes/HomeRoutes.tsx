import React from "react";
import { Switch } from "react-router-dom";
import Home from "pages/Home";
import AuthenticatedGuard from "guards/AuthenticatedGuard";
import Test from "pages/Test";

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
      {/* <AuthenticatedGuard
        isAuthenticated={isAuthenticated}
        exact
        path="/"
        component={Test}
      /> */}
    </Switch>
  );
};

export default HomeRoutes;
