import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IStream } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class StreamService {
  api_url: string = 'http://localhost:3000';
  constructor(private httpClient: HttpClient) {}

  getStreams(): Observable<IStream[]> {
    let API_URL = `${this.api_url}/streams`;
    return this.httpClient
      .get<IStream[]>(API_URL)
      .pipe(catchError(this.errorHandler));
  }

  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
