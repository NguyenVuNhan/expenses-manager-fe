import { Subject } from "rxjs";
import { login, logout } from "../apis/auth.api";

const subject = new Subject();

type AuthState = {
  isAuthenticated: boolean;
};

const initialState = {
  isAuthenticated: false,
};

let state = initialState;

const authStore = {
  init: () => subject.next(state),
  subscribe: (setState: (state: any) => void) => subject.subscribe(setState),
  login: (data: LoginTypes) => {
    const loggedIn: boolean = login(data);
    if (!loggedIn) return;
    subject.next({
      ...state,
      isAuthenticated: true,
    });
  },
  logout: () => {
    const loggedOut: boolean = logout();
    if (!loggedOut) return;
    subject.next({
      ...state,
      isAuthenticated: false,
    });
  },
};

export default authStore;
