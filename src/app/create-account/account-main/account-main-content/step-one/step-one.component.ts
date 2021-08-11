import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from 'src/app/core/services/user.service';
import { IPersonalDetails } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css'],
})
export class StepOneComponent implements OnInit {
  // job_roles: IJobRole[] = [
  //   { id: 1, selected: true, job_title: 'Instructional Designer' },
  //   { id: 2, selected: false, job_title: 'Software Engineer' },
  //   { id: 3, selected: true, job_title: 'Software Quality Engineer' },
  // ];

  // job_roles: IJobRole[] = [];

  personal: IPersonalDetails = {} as any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.personal = this.userService.personalDetails;
  }

  navigateTo(isFormValid: boolean | null, path: string) {
    if (isFormValid) {
      console.log(this.userService.personalDetails);
      this.router.navigate(['../', path], { relativeTo: this.route });
    }
  }
}
