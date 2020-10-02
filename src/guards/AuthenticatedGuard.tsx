import React, { ComponentType } from "react";
import {
  Route,
  RouteProps,
  Redirect,
  RouteComponentProps,
} from "react-router-dom";

interface AuthenticatedGuardProps extends RouteProps {
  isAuthenticated: boolean;
  component: ComponentType<RouteComponentProps>;
}

const AuthenticatedGuard = ({
  isAuthenticated,
  component: Component,
  ...rest
}: AuthenticatedGuardProps) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return <Component {...props} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
};

export default AuthenticatedGuard;
