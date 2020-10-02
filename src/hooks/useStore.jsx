import { useState, useLayoutEffect } from "react";

const useStore = (store) => {
  const [state, setState] = useState();

  useLayoutEffect(() => {
    const subs = store.subscribe(setState);
    store.init();
    return () => {
      subs.unsubscribe();
    };
  }, [store]);

  return state;
};

export default useStore;
