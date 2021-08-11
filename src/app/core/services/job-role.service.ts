import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IJobRole, IJobRoleDetails } from 'src/app/shared/models/job-role.model';
import { catchError,map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class JobRoleService {
  api_url:string = "http://localhost:3000";

  constructor(private httpClient:HttpClient) { }

  getJobRolesWithDetails(): Observable<IJobRoleDetails[]> {
    let API_URL = `${this.api_url}/job_roles`;
    return this.httpClient
      .get<IJobRoleDetails[]>(API_URL)
      .pipe(catchError(this.errorHandler))
  }

  getJobRoles(): Observable<IJobRole[]> {
    let API_URL = `${this.api_url}/job_roles`;
    return this.httpClient
      .get<IJobRoleDetails[]>(API_URL)
      .pipe(map(_jobRoleDetails => {
        let jobRoles:IJobRole[] = [];

        for(let _jobRole of _jobRoleDetails){
          jobRoles.push({
            id:_jobRole.id,
            job_title:_jobRole.job_title,
            selected:false
          })
        }
        
        return jobRoles
      }))
      .pipe(catchError(this.errorHandler))
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
