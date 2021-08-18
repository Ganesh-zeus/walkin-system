import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from 'src/app/core/services/user.service';
import { IJobRole } from 'src/app/shared/models/job-role.model';
import { IPersonalDetails } from 'src/app/shared/models/user.model';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css'],
})
export class StepOneComponent implements OnInit {
  personal: IPersonalDetails;
  preferredJobRoles: IJobRole[];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.personal = this.userService.personalDetails;
    this.preferredJobRoles = this.userService.personalDetails.preferredJobRoles;
  }

  toggleJobRoleSelected(idx: number) {
    this.preferredJobRoles[idx].selected =
      !this.preferredJobRoles[idx].selected;

    this.userService.personalDetails.preferredJobRoles = this.preferredJobRoles;

    this.cdr.detectChanges();
  }

  navigateTo(isFormValid: boolean | null, path: string) {
    this.userService.stepOneIsValid = false;

    if (isFormValid) {
      this.userService.stepOneIsValid = true;
      this.router.navigate(['../', path], { relativeTo: this.route });
    }
  }
}
