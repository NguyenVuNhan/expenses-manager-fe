import { History, LocationState } from "history";
import { authStore } from "store";

export const loginService = (data: LoginFormType): void => {
  authStore.setLoading();
  // TODO: Add authentication
  // console.log(data);

  authStore.setAuthenticated();
};

export const registerService = (
  data: LoginFormType,
  history: History<LocationState>
): void => {
  authStore.setLoading();
  // TODO: Add register
  // console.log(data);

  authStore.setAuthenticated();
  history.push("/login");
};

export const resetPasswordService = (
  data: { email: string },
  history: History<LocationState>
): void => {
  //TODO: handler reset password
  // console.log(data);

  history.push("/login");
};

export const logoutService = (history: History<LocationState>): void => {
  // TODO: add Logout
  // console.log("logged out");

  authStore.setUnAuthenticate();
  history.push("/login");
};
