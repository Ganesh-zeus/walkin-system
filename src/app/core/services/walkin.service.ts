import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IWalkin } from 'src/app/shared/models/walkin.model';

@Injectable({
  providedIn: 'root',
})
export class WalkinService {
  api_url: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getWalkinById(id: number): Observable<IWalkin> {
    let API_URL = `${this.api_url}/walkins/${id}`;
    return this.httpClient
      .get<IWalkin>(API_URL)
      .pipe(
        tap((walkin) => {
          for (let job_role of walkin.preffered_job_roles) {
            job_role.selected = false;
          }

          console.log(walkin.time_slots);
          
        })
      )
      .pipe(catchError(this.errorHandler));
  }

  getAllWalkins(): Observable<IWalkin[]> {
    let API_URL = `${this.api_url}/walkins`;
    return this.httpClient
      .get<IWalkin[]>(API_URL)
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
