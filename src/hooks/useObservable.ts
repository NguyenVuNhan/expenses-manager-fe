import { useState, useEffect } from "react";
import { Observable } from "rxjs";

const useObservable = (observable: Observable<any>) => {
  const [state, setState] = useState();

  useEffect(() => {
    const sub = observable.subscribe(setState);
    return () => sub.unsubscribe();
  }, [observable]);

  return state;
};

export default useObservable;
