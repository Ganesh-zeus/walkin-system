import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { IQualification } from 'src/app/shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class QualificationService {
  api_url:string = "http://localhost:3000";
  constructor(private httpClient:HttpClient) { }

  getQualifications(): Observable<IQualification[]> {
    let API_URL = `${this.api_url}/qualifications`;
    return this.httpClient
      .get<IQualification[]>(API_URL)
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
