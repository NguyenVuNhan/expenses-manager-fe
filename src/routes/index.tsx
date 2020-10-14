import React from "react";
import { useStore } from "../hooks";
import { BrowserRouter, Redirect } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import HomeRoutes from "routes/HomeRoutes";
import authStore from "store/auth.store";

const Routes = () => {
  const auth = useStore<AuthStoreType>(authStore);

  return (
    <BrowserRouter>
      <AuthRoutes />
      <HomeRoutes isAuthenticated={auth?.isAuthenticated} />
      {auth && !auth.isAuthenticated ? (
        <Redirect to="/login" />
      ) : (
        <Redirect to="/" />
      )}
    </BrowserRouter>
  );
};

export default Routes;
