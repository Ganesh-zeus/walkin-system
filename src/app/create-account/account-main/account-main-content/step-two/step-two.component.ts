import { Component,ChangeDetectorRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from 'src/app/core/services/user.service';
import { ITechnologies } from 'src/app/shared/models/technologies.model';

import {
  ICollege,
  IEducationalQualifications,
  IExperiencedQualifications,
  IFresherQualifications,
  IProfessionalQualifications,
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
  educationalQualifications: IEducationalQualifications = {} as any;
  experiencedQualifications: IExperiencedQualifications = {} as any;
  fresherQualifications: IFresherQualifications = {} as any;
  professionalQualifications: IProfessionalQualifications = {} as any;

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

  // technologies: ITechnologies[] = [
  //   { id: 1, title: 'JavaScript', selected: true },
  //   { id: 2, title: 'Angular JS', selected: false },
  //   { id: 3, title: 'React JS', selected: false },
  //   { id: 4, title: 'Node JS', selected: false },
  // ];

  fresher_familiar_technologies: ITechnologies[];
  experienced_familiar_technologies: ITechnologies[];
  experienced_expertise_technologies: ITechnologies[];

  qualifications: IQualification[];
  streams: IStream[];
  colleges: ICollege[];

  // for radio elements
  applicant_type: string;
  appeared_test_before: [boolean,boolean];
  currently_under_notice_period: boolean;

  APPLICANT_TYPE = ['Fresher', 'Experienced'];
  TECHNOLOGY_TYPE = ['F_Familiar','E_Familiar','E_Expertise'];
 
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    // get form objects from user service
    this.educationalQualifications = this.userService.educationalQualifications;
    this.professionalQualifications =
      this.userService.professionalQualifications;
    this.experiencedQualifications = this.userService.experiencedQualifications;
    this.fresherQualifications = this.userService.fresherQualifications;

    // get educational select options from user service
    this.qualifications = this.userService.qualifications;
    this.streams = this.userService.streams;
    this.colleges = this.userService.colleges;

    this.applicant_type = this.userService.applicant_type;
    this.appeared_test_before = this.userService.appeared_test_before;
    this.currently_under_notice_period = this.userService.currently_under_notice_period;

    // this.currently_under_notice_period = this.userService
    //   .experiencedQualifications.currently_under_notice_period
    //   ? this.userService.experiencedQualifications.currently_under_notice_period
    //   : false;

    this.fresher_familiar_technologies =
      this.userService.fresher_familiar_technologies;

    this.experienced_familiar_technologies =
      this.userService.experienced_familiar_technologies;

    this.experienced_expertise_technologies =
      this.userService.experienced_expertise_technologies;

    // initialize based on value stored in userService
    // this.educationalQualifications.qualification = this.userService
    //   .educationalQualifications.qualification
    //   ? this.userService.educationalQualifications.qualification
    //   : this.qualifications[0].qualification_name;

    // this.educationalQualifications.stream = this.userService
    //   .educationalQualifications.stream
    //   ? this.userService.educationalQualifications.stream
    //   : this.streams[0].stream_name;

    // this.educationalQualifications.college = this.userService
    //   .educationalQualifications.college
    //   ? this.userService.educationalQualifications.college
    //   : this.colleges[0].college_name;
  }

  toggleApplicantType() {
    if (this.applicant_type === this.APPLICANT_TYPE[0]) {
      this.applicant_type = this.APPLICANT_TYPE[1];
    } else {
      this.applicant_type = this.APPLICANT_TYPE[0];
    }
    this.userService.applicant_type = this.applicant_type;
  }

  toggleTechnologySelected(technologyType:string,idx:number){
    if(technologyType === this.TECHNOLOGY_TYPE[0]){
      this.fresher_familiar_technologies[idx].selected = !this.fresher_familiar_technologies[idx].selected;
      this.userService.fresher_familiar_technologies = this.fresher_familiar_technologies;
    }

    if(technologyType === this.TECHNOLOGY_TYPE[1]){
      this.experienced_familiar_technologies[idx].selected = !this.experienced_familiar_technologies[idx].selected;
      this.userService.experienced_familiar_technologies = this.experienced_familiar_technologies;
    }

    if(technologyType === this.TECHNOLOGY_TYPE[2]){
      this.experienced_expertise_technologies[idx].selected = !this.experienced_expertise_technologies[idx].selected;
      this.userService.experienced_expertise_technologies = this.experienced_expertise_technologies;
    }

    this.cdr.detectChanges();
  }

  toggleAppearedStatus(applicantType:string){
    if(applicantType === this.APPLICANT_TYPE[0]){
      this.appeared_test_before[0] = !this.appeared_test_before[0];
    }else{
      this.appeared_test_before[1] = !this.appeared_test_before[1];
    }
    
    this.userService.appeared_test_before = this.appeared_test_before;
    this.cdr.detectChanges();
  }

  toggleNoticePeriodStatus(){
    this.currently_under_notice_period = !this.currently_under_notice_period;
    this.userService.currently_under_notice_period = this.currently_under_notice_period;
    this.cdr.detectChanges();
  }


  navigateTo(path: string) {
    this.userService.applicant_type = this.applicant_type;

    console.log(this.userService.educationalQualifications);

    console.log(this.userService.fresher_familiar_technologies);
    console.log(this.userService.experienced_familiar_technologies);
    console.log(this.userService.experienced_expertise_technologies);
    
    console.log(this.userService.experiencedQualifications);

    this.router.navigate(['../', path], { relativeTo: this.route });
  }
}
