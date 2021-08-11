import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { IJobRole } from 'src/app/shared/models/job-role.model';
import { ITechnologies } from 'src/app/shared/models/technologies.model';
import {
  ICollege,
  IEducationalQualifications,
  IExperiencedQualifications,
  IFresherQualifications,
  IPersonalDetails,
  IProfessionalQualifications,
  IQualification,
  IStream,
} from 'src/app/shared/models/user.model';
import { CollegeService } from './college.service';
import { JobRoleService } from './job-role.service';
import { QualificationService } from './qualification.service';
import { StreamService } from './stream.service';
import { TechnologyService } from './technology.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  api_url: string = 'http://localhost:3000';

  // User form details
  personalDetails: IPersonalDetails = {} as any;
  educationalQualifications: IEducationalQualifications = {} as any;
  experiencedQualifications: IExperiencedQualifications = {} as any;
  fresherQualifications: IFresherQualifications = {} as any;
  professionalQualifications: IProfessionalQualifications = {} as any;

  // educational select options
  qualifications: IQualification[] = [];
  streams: IStream[] = [];
  colleges: ICollege[] = [];

  // technologies
  fresher_familiar_technologies: ITechnologies[];
  experienced_familiar_technologies: ITechnologies[];
  experienced_expertise_technologies: ITechnologies[];

  applicant_type:string = 'fresher';

  constructor(
    private httpClient: HttpClient,
    private jobRoleService: JobRoleService,
    private qualificationService: QualificationService,
    private streamService: StreamService,
    private collegeService: CollegeService,
    private technologyService: TechnologyService
  ) {
    // necessary initialization
    this.personalDetails.phone_number = new Array(2);
    this.fresherQualifications.familiar_technologies = [];
    this.experiencedQualifications.familiar_technologies = [];
    this.experiencedQualifications.expertise_technologies = [];

    // get preferred job roles
    this.jobRoleService.getJobRoles().subscribe((_jobRoles) => {
      this.personalDetails.preferred_job_roles = _jobRoles;
    });

    // get qualifications
    this.qualificationService
      .getQualifications()
      .subscribe((_qualifications) => {
        this.qualifications = _qualifications;

        this.educationalQualifications.qualification = this
          .educationalQualifications.qualification
          ? this.educationalQualifications.qualification
          : this.qualifications[0].qualification_name;
      });

    // get streams
    this.streamService.getStreams().subscribe((_streams) => {
      this.streams = _streams;

      this.educationalQualifications.stream = this.educationalQualifications
        .stream
        ? this.educationalQualifications.stream
        : this.streams[0].stream_name;
    });

    // get colleges
    this.collegeService.getColleges().subscribe((_colleges) => {
      this.colleges = _colleges;

      this.educationalQualifications.college = this.educationalQualifications
        .college
        ? this.educationalQualifications.college
        : this.colleges[0].college_name;
    });

    // get technologies
    this.technologyService.getTechnologies().subscribe((_technologies) => {
      this.fresher_familiar_technologies = _technologies;
    });

    this.technologyService.getTechnologies().subscribe((_technologies) => {
      this.experienced_familiar_technologies = _technologies;
    });

    this.technologyService.getTechnologies().subscribe((_technologies) => {
      this.experienced_expertise_technologies = _technologies;
    });
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
