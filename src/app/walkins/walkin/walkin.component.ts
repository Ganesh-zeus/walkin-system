import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WalkinService } from 'src/app/core/services/walkin.service';
import { IJobRole } from 'src/app/shared/models/job-role.model';
import { ITimeSlot, IWalkinDetails } from 'src/app/shared/models/walkin.model';

@Component({
  selector: 'app-walkin',
  templateUrl: './walkin.component.html',
  styleUrls: ['./walkin-card.css', './walkin.component.css'],
})
export class WalkinComponent implements OnInit {
  walkinId: number;

  constructor(
    private route: ActivatedRoute,
    private walkinService: WalkinService
  ) {}

  walkin: IWalkinDetails;
  time_slot_selected: ITimeSlot;

  toggleJobRoleSelected(idx: number) {
    this.walkin.preferredJobRoles[idx].selected =
      !this.walkin.preferredJobRoles[idx].selected;
  }

  toggleTimeSlotSelected(idx: number) {
    this.time_slot_selected = this.walkin.timeSlots[idx];

    this.walkinService.time_slot_selected = this.time_slot_selected;
  }

  formIsValid(): boolean {
    let atleastOneRoleSelected: boolean = false;

    for (let jobRole of this.walkin.preferredJobRoles) {
      if (jobRole.selected === true) {
        atleastOneRoleSelected = true;
      }
    }

    return atleastOneRoleSelected;
  }

  walkinApply(){
    console.log(this.walkin);
    console.log(this.walkinService.time_slot_selected);
    
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.walkinId = params['walkinId'];
    });

    this.walkinService.getWalkinById(this.walkinId).subscribe((_walkin) => {
      this.walkin = _walkin;
      this.time_slot_selected = this.walkin.timeSlots[0];
    });
  }
}
