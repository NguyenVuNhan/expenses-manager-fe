import axios from "axios";
import { map } from "rxjs/operators";
import { defer, Observable } from "rxjs";

const get = <T>(url: string, queryParams?: object): Observable<T | void> => {
  return defer(() => axios.get<T>(url, { params: queryParams })).pipe(
    map((result) => result.data)
  );
};

const post = <T>(
  url: string,
  body: object,
  queryParams?: object
): Observable<T | void> => {
  return defer(() => axios.post<T>(url, body, { params: queryParams })).pipe(
    map((result) => result.data)
  );
};

const put = <T>(
  url: string,
  body: object,
  queryParams?: object
): Observable<T | void> => {
  return defer(() => axios.put<T>(url, body, { params: queryParams })).pipe(
    map((result) => result.data)
  );
};

const patch = <T>(
  url: string,
  body: object,
  queryParams?: object
): Observable<T | void> => {
  return defer(() => axios.patch<T>(url, body, { params: queryParams })).pipe(
    map((result) => result.data)
  );
};

const deleteR = <T>(url: string, id: number): Observable<T | void> => {
  return defer(() => axios.delete(`${url}/${id}`)).pipe(
    map((result) => result.data)
  );
};

export default { get, post, put, patch, delete: deleteR };
