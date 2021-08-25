import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
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
  @ViewChild('personalForm') personalForm?: any;

  personal: IPersonalDetails;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public userService: UserService,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.personal = this.userService.personalDetails;
  }

  toggleJobRoleSelected(idx: number) {
    this.personal.preferredJobRoles[idx].selected =
      !this.personal.preferredJobRoles[idx].selected;

    this.cdr.detectChanges();
  }

  isPersonalFormValid(): boolean {
    let atleastOneRoleSelected: boolean = false;

    for (let jobRole of this.personal.preferredJobRoles) {
      if (jobRole.selected === true) {
        atleastOneRoleSelected = true;
      }
    }
    return this.personalForm?.value && atleastOneRoleSelected;
  }

  navigateTo(path: string) {
    this.router.navigate(['../', path], { relativeTo: this.route });
  }
}
