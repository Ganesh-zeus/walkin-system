import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { WalkinService } from 'src/app/core/services/walkin.service';
import { IWalkinDetails } from 'src/app/shared/models/walkin.model';

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
  time_slot_selected: number;

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params['walkinId']);
      this.walkinId = params['walkinId'];
    });

    this.walkinService.getWalkinById(this.walkinId).subscribe((walkinData) => {
      this.walkin = walkinData;
      this.time_slot_selected = this.walkin.timeSlots[0].id;
    });
  }
}
