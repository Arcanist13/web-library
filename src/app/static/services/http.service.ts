import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

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
    return this._http.get<T>(addr, options).pipe(catchError(this.handleError));
  }

  /**
   * Delete a record
   *
   * @param addr    delete address
   * @param options delete options
   * @returns       response
   */
  public delete<T>(addr: string, options?: object): Observable<T> {
    return this._http.delete<T>(addr, options).pipe(catchError(this.handleError));
  }

  /**
   * Post a request
   *
   * @param addr    address
   * @param options options
   * @returns       response
   */
  public post<T>(addr: string, options?: object): Observable<T> {
    return this._http.post<T>(addr, options).pipe(catchError(this.handleError));
  }

  /**
   * Handle HTTP request errors
   *
   * @param error HTTP error message
   * @returns     empty observable error
   */
  private handleError(error: HttpErrorResponse): Observable<never> {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('ERROR (spell.service): Client Error ', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `ERROR (spell.service): HTTP Error ${error.status}, ` +
        `Message: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError('Request failed.');
  }
}
