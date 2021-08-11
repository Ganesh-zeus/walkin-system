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
    this.userService.stepOneIsValid = false;

    if (isFormValid) {
      this.userService.stepOneIsValid = true;
      this.router.navigate(['../', path], { relativeTo: this.route });
    }
  }
}
