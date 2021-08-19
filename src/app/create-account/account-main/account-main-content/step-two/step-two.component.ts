import { Component, ChangeDetectorRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from 'src/app/core/services/user.service';
import { ITechnologies } from 'src/app/shared/models/technologies.model';

import {
  ICollege,
  IEducationalQualifications,
  IExperiencedQualifications,
  IFresherQualifications,
  IQualification,
  IStream,
} from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css'],
})
export class StepTwoComponent implements OnInit {
  // educational and professional form ref
  @ViewChild('educationalForm') educationalForm?: any;
  @ViewChild('exeperiencedForm') exeperiencedForm?: any;
  @ViewChild('fresherForm') fresherForm?: any;

  // educational and professional form objects
  educationalQualifications: IEducationalQualifications;
  fresherQualifications: IFresherQualifications;
  experiencedQualifications: IExperiencedQualifications;

  // educational and professional isValid methods
  educationalFormIsValid(): boolean {
    return this.educationalForm.valid;
  }

  exeperiencedFormIsValid(): boolean {
    return this.exeperiencedForm.valid;
  }

  fresherFormIsValid(): boolean {
    return this.fresherForm.valid;
  }

  fresher_familiar_technologies: ITechnologies[];
  experienced_familiar_technologies: ITechnologies[];
  experienced_expertise_technologies: ITechnologies[];

  qualifications: IQualification[];
  streams: IStream[];
  colleges: ICollege[];

  // for radio elements
  applicant_type: string;
  appeared_test_before: [boolean, boolean] = [false, false];
  currently_under_notice_period: boolean;

  APPLICANT_TYPE = ['Fresher', 'Experienced'];
  TECHNOLOGY_TYPE = ['F_Familiar', 'E_Familiar', 'E_Expertise'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {

    // get form objects from user service
    this.educationalQualifications = this.userService.educationalQualifications;
    this.fresherQualifications = this.userService.fresherQualifications;
    this.experiencedQualifications = this.userService.experiencedQualifications;

    // get educational select options from user service
    this.qualifications = this.userService.qualifications;
    this.streams = this.userService.streams;
    this.colleges = this.userService.colleges;

    this.applicant_type = this.userService.applicant_type;

    this.appeared_test_before[0] =
      this.userService.fresherQualifications.appearedTestBefore;
    this.appeared_test_before[1] =
      this.userService.experiencedQualifications.appearedTestBefore;

    this.currently_under_notice_period =
      this.userService.experiencedQualifications.currentlyUnderNoticePeriod;

    this.fresher_familiar_technologies =
      this.fresherQualifications.familiarTechnologies;

    this.experienced_familiar_technologies =
      this.experiencedQualifications.familiarTechnologies;

    this.experienced_expertise_technologies =
      this.experiencedQualifications.expertiseTechnologies;
  }

  toggleApplicantType() {
    if (this.applicant_type === this.APPLICANT_TYPE[0]) {
      this.applicant_type = this.APPLICANT_TYPE[1];
    } else {
      this.applicant_type = this.APPLICANT_TYPE[0];
    }
    this.userService.applicant_type = this.applicant_type;
  }

  toggleTechnologySelected(technologyType: string, idx: number) {
    if (technologyType === this.TECHNOLOGY_TYPE[0]) {
      this.fresher_familiar_technologies[idx].selected =
        !this.fresher_familiar_technologies[idx].selected;

      this.userService.fresherQualifications.familiarTechnologies =
        this.fresher_familiar_technologies;
    }

    if (technologyType === this.TECHNOLOGY_TYPE[1]) {
      this.experienced_familiar_technologies[idx].selected =
        !this.experienced_familiar_technologies[idx].selected;

      this.userService.experiencedQualifications.familiarTechnologies =
        this.experienced_familiar_technologies;
    }

    if (technologyType === this.TECHNOLOGY_TYPE[2]) {
      this.experienced_expertise_technologies[idx].selected =
        !this.experienced_expertise_technologies[idx].selected;

      this.userService.experiencedQualifications.expertiseTechnologies =
        this.experienced_expertise_technologies;
    }

    this.cdr.detectChanges();
  }

  toggleAppearedStatus(applicantType: string) {
    if (applicantType === this.APPLICANT_TYPE[0]) {
      this.appeared_test_before[0] = !this.appeared_test_before[0];
      this.userService.fresherQualifications.appearedTestBefore =
        this.appeared_test_before[0];
      
      if(!this.appeared_test_before[0]){
        this.fresherQualifications.roleAppearedBefore = "";
      }
    } else {
      this.appeared_test_before[1] = !this.appeared_test_before[1];
      this.userService.experiencedQualifications.appearedTestBefore =
        this.appeared_test_before[1];

        if(!this.appeared_test_before[1]){
          this.experiencedQualifications.roleAppearedBefore = "";
        }
    }
    this.cdr.detectChanges();
  }

  toggleNoticePeriodStatus() {
    this.currently_under_notice_period = !this.currently_under_notice_period;
    
    this.userService.experiencedQualifications.currentlyUnderNoticePeriod =
      this.currently_under_notice_period;
    this.cdr.detectChanges();
  }

  navigateTo(path: string) {
    console.log(this.userService.educationalQualifications);
    console.log(this.userService.experiencedQualifications);
    console.log(this.userService.fresherQualifications);
    
    this.router.navigate(['../', path], { relativeTo: this.route });
  }
}
