import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';

// model imports
import {
  ICollege,
  IEducationalQualifications,
  IExperiencedQualifications,
  IFresherQualifications,
  IPersonalDetails,
  IQualification,
  IStream,
} from 'src/app/shared/models/user.model';

// service imports
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

  stepOneIsValid: boolean;
  stepTwoIsValid: boolean;

  // User form details
  personalDetails: IPersonalDetails = {} as any;
  educationalQualifications: IEducationalQualifications = {} as any;
  experiencedQualifications: IExperiencedQualifications = {} as any;
  fresherQualifications: IFresherQualifications = {} as any;

  // educational select options
  qualifications: IQualification[] = [];
  streams: IStream[] = [];
  colleges: ICollege[] = [];

  applicant_type: string = 'Fresher'; // 0:fresher, 1:experienced

  constructor(
    private httpClient: HttpClient,
    private jobRoleService: JobRoleService,
    private qualificationService: QualificationService,
    private streamService: StreamService,
    private collegeService: CollegeService,
    private technologyService: TechnologyService
  ) {
    // necessary initializations
    this.fresherQualifications.appeared_test_before = false;
    this.experiencedQualifications.appeared_test_before = false;
    this.experiencedQualifications.currently_under_notice_period = false;

    // get preferred job roles
    this.jobRoleService.getJobRoles().subscribe((_jobRoles) => {
      this.personalDetails.preferredJobRoles = _jobRoles;
    });

    // get qualifications
    this.qualificationService
      .getQualifications()
      .subscribe((_qualifications) => {
        this.qualifications = _qualifications;

        this.educationalQualifications.qualificationName =
          this.qualifications[0].qualificationName;
      });

    // get streams
    this.streamService.getStreams().subscribe((_streams) => {
      this.streams = _streams;

      this.educationalQualifications.streamName = this.streams[0].streamName;
    });

    // get colleges
    this.collegeService.getColleges().subscribe((_colleges) => {
      this.colleges = _colleges;

      this.educationalQualifications.collegeName = this.colleges[0].collegeName;
    });

    // get technologies
    this.technologyService.getTechnologies().subscribe((_technologies) => {
      this.fresherQualifications.familiar_technologies = _technologies;
    });

    this.technologyService.getTechnologies().subscribe((_technologies) => {
      this.experiencedQualifications.familiar_technologies = _technologies;
    });

    this.technologyService.getTechnologies().subscribe((_technologies) => {
      this.experiencedQualifications.expertise_technologies = _technologies;
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
