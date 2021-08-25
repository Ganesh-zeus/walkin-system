import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// model imports
import {
  ICollege,
  IEducationalQualifications,
  IExperiencedQualifications,
  IFresherQualifications,
  IPersonalDetails,
  IQualification,
  IStream,
  IUser,
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
    this.fresherQualifications.appearedTestBefore = false;
    this.experiencedQualifications.appearedTestBefore = false;
    this.experiencedQualifications.currentlyUnderNoticePeriod = false;

    // get preferred job roles
    this.jobRoleService.getJobRoles().subscribe((_jobRoles) => {
      this.personalDetails.preferredJobRoles = _jobRoles;
    });

    // get qualifications
    this.qualificationService
      .getQualifications()
      .subscribe((_qualifications) => {
        this.qualifications = _qualifications;

        this.educationalQualifications.qualification =
          this.qualifications[0];
      });

    // get streams
    this.streamService.getStreams().subscribe((_streams) => {
      this.streams = _streams;

      this.educationalQualifications.stream = this.streams[0];
    });

    // get colleges
    this.collegeService.getColleges().subscribe((_colleges) => {
      this.colleges = _colleges;

      this.educationalQualifications.college = this.colleges[0];
    });

    // get technologies
    this.technologyService.getTechnologies().subscribe((_technologies) => {
      this.fresherQualifications.familiarTechnologies = _technologies;
    });

    this.technologyService.getTechnologies().subscribe((_technologies) => {
      this.experiencedQualifications.familiarTechnologies = _technologies;
    });

    this.technologyService.getTechnologies().subscribe((_technologies) => {
      this.experiencedQualifications.expertiseTechnologies = _technologies;
    });
  }

  addUser(user: any): Observable<any> {
    let API_URL = `${this.api_url}/users`;
    return this.httpClient
      .post<any>(API_URL, user)
      .pipe(catchError(this.errorHandler));
  }

  createUser() {
    let user = {} as IUser;

    user.personalDetails = this.personalDetails;
    user.educationalQualifications = this.educationalQualifications;
    user.applicantType = this.applicant_type;

    user.personalDetails.preferredJobRoles = this.filterSelectedItems(
      this.personalDetails.preferredJobRoles
    );

    user.personalDetails.profileImagePath = "path/to/profile-image";
    user.personalDetails.resumePath = "path/to/resume";

    if (this.applicant_type == 'Fresher') {
      user.fresherQualifications = this.fresherQualifications;
      user.experiencedQualifications = null;

      user.fresherQualifications.familiarTechnologies =
        this.filterSelectedItems(
          user.fresherQualifications.familiarTechnologies
        );
    } else {
      user.fresherQualifications = null;
      user.experiencedQualifications = this.experiencedQualifications;

      user.experiencedQualifications.familiarTechnologies =
        this.filterSelectedItems(
          user.experiencedQualifications.familiarTechnologies
        );

      user.experiencedQualifications.expertiseTechnologies =
        this.filterSelectedItems(
          user.experiencedQualifications.expertiseTechnologies
        );
    }

    console.log('user created => \n', user);
    this.addUser(user);
  }

  filterSelectedItems(list: any[]) {
    let filteredList = list.filter((item) => item.selected === true);

    return filteredList.map((item) => {
      delete item.selected;
      return item;
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
