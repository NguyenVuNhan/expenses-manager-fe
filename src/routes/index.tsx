import React from "react";
import { useStore } from "../hooks";
import { BrowserRouter, Redirect } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import authStore from "../store/auth.store";

const Routes = () => {
  const isAuthenticated = useStore(authStore);

  return (
    <BrowserRouter>
      <AuthRoutes />
      {!isAuthenticated && <Redirect to="/login" />}
    </BrowserRouter>
  );
};

export default Routes;
