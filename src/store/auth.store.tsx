import { Subject } from "rxjs";

const initialState: AuthStoreType = {
  // isAuthenticated: false,
  isAuthenticated: true,
  isLoading: false,
};

let state = initialState;

const subject = new Subject();

const authStore = {
  state,
  init: () => subject.next(state),
  subscribe: (setState: (state: any) => void) => subject.subscribe(setState),
  setLoading: () => {
    state = { ...state, isLoading: true };
    return subject.next(state);
  },
  setUnAuthenticate: () => {
    state = { ...state, isAuthenticated: false };
    return subject.next(state);
  },
  setAuthenticated: () => {
    state = { isAuthenticated: true, isLoading: false };
    return subject.next(state);
  },
};

export default authStore;
