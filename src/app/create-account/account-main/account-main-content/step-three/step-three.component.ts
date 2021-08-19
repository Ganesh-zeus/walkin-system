import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';
import { IJobRole } from 'src/app/shared/models/job-role.model';
import { ITechnologies } from 'src/app/shared/models/technologies.model';

import {
  IEducationalQualifications,
  IExperiencedQualifications,
  IFresherQualifications,
  IPersonalDetails,
} from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-one.css', './step-two.css', './step-three.component.css'],
})
export class StepThreeComponent implements OnInit {
  educationalOpen: boolean = true;
  professionalOpen: boolean = true;

  applicant_type: string;
  appeared_test_before: [boolean, boolean] = [false, false];
  currently_under_notice_period: boolean;

  personalDetails: IPersonalDetails;
  educationalDetails: IEducationalQualifications;
  fresherDetails: IFresherQualifications;
  experiencedDetails: IExperiencedQualifications;

  preferredJobRoles: IJobRole[] = [];

  fresher_familiar_technologies: ITechnologies[];
  experienced_familiar_technologies: ITechnologies[];
  experienced_expertise_technologies: ITechnologies[];

  APPLICANT_TYPE = ['Fresher', 'Experienced'];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.personalDetails = this.userService.personalDetails;
    this.educationalDetails = this.userService.educationalQualifications;
    this.fresherDetails = this.userService.fresherQualifications;
    this.experiencedDetails = this.userService.experiencedQualifications;

    this.fresher_familiar_technologies = this.filterTechnologies(
      this.userService.fresherQualifications.familiarTechnologies
    );

    this.experienced_familiar_technologies = this.filterTechnologies(
      this.userService.experiencedQualifications.familiarTechnologies
    );

    this.experienced_expertise_technologies = this.filterTechnologies(
      this.userService.experiencedQualifications.expertiseTechnologies
    );

    this.preferredJobRoles = this.personalDetails.preferredJobRoles;

    this.preferredJobRoles = this.preferredJobRoles.filter(
      (jobRole) => jobRole.selected === true
    );

    this.applicant_type = this.userService.applicant_type;

    this.appeared_test_before[0] =
      this.userService.fresherQualifications.appearedTestBefore;
    this.appeared_test_before[1] =
      this.userService.experiencedQualifications.appearedTestBefore;

    this.currently_under_notice_period =
      this.userService.experiencedQualifications.currentlyUnderNoticePeriod;
  }

  filterTechnologies(technologies: ITechnologies[]) {
    return technologies.filter((technology) => technology.selected === true);
  }

  navigateTo(path: string) {
    this.router.navigate(['../', path], { relativeTo: this.route });
  }
}
