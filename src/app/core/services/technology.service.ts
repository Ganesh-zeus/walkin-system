import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ITechnologies } from 'src/app/shared/models/technologies.model';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  api_url: string = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  getTechnologies(): Observable<ITechnologies[]> {
    let API_URL = `${this.api_url}/technologies`;
    return this.httpClient
      .get<ITechnologies[]>(API_URL)
      .pipe(map(_technologies => {
        let technologies:ITechnologies[] = _technologies;
        for(let technology of technologies){
          technology.selected = false;
        }
        return technologies;
      }))
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
