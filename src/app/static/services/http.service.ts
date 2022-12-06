import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private _http: HttpClient,
  ) { }

  /**
   * Wrapper for the HttpClient get request
   *
   * @param addr    backend address
   * @param options options
   * @returns       reponse
   */
  public get<T>(addr: string, options?: object): Observable<T> {
    return this._http.get<T>(addr, options);
  }

  /**
   * Delete a record
   *
   * @param addr    delete address
   * @param options delete options
   * @returns       response
   */
  public delete<T>(addr: string, options?: object): Observable<T> {
    return this._http.delete<T>(addr, options);
  }

  /**
   * Post a request
   *
   * @param addr    address
   * @param options options
   * @returns       response
   */
  public post<T>(addr: string, options?: object): Observable<T> {
    return this._http.post<T>(addr, options);
  }

}
