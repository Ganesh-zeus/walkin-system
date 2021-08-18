import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ICollege } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class CollegeService {
  // api_url: string = 'http://localhost:3000';
  api_url: string = 'http://localhost:50920/api';

  constructor(private httpClient: HttpClient) {}

  getColleges(): Observable<ICollege[]> {
    let API_URL = `${this.api_url}/colleges`;
    return this.httpClient
      .get<ICollege[]>(API_URL)
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
