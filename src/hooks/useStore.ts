import { useState, useLayoutEffect } from "react";

const useStore = <T = undefined>(store: StoreType): T | undefined => {
  const [state, setState] = useState<T>();

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
