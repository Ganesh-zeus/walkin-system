import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

import {
  IEducationalQualifications,
  IPersonalDetails,
} from 'src/app/shared/models/user.model';
import { Personal, JobRole } from '../User.model';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-one.css', './step-two.css', './step-three.component.css'],
})
export class StepThreeComponent implements OnInit {
  job_roles: JobRole[] = [
    new JobRole(true, 'Instructional Designer'),
    new JobRole(false, 'Software Engineer'),
    new JobRole(true, 'Software Quality Engineer'),
  ];

  personal: Personal = new Personal(
    'John',
    'Watson',
    'Johnwatson@example.com',
    ['91', '9876543210'],
    'www.myportfolio.in',
    this.job_roles,
    '',
    false
  );

  educationalOpen: boolean = true;
  professionalOpen: boolean = true;

  technologies: any[] = [
    { selected: true, title: 'JavaScript' },
    { selected: false, title: 'Angular JS' },
    { selected: false, title: 'React JS' },
    { selected: false, title: 'Node JS' },
  ];

  applicant_type: string;
  appeared_test_before: boolean = false;
  currently_under_notice_period: boolean = false;

  personalDetails: IPersonalDetails;
  educationalDetails: IEducationalQualifications;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
  ) {}

  ngOnInit(): void {
    this.personalDetails = this.userService.personalDetails;
    this.educationalDetails = this.userService.educationalQualifications;

    this.applicant_type = this.userService.applicant_type;
  }

  navigateTo(path: string) {
    this.router.navigate(['../', path], { relativeTo: this.route });
  }
}
