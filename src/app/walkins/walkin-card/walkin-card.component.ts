import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IWalkin } from 'src/app/shared/models/walkin.model';

@Component({
  selector: 'app-walkin-card',
  templateUrl: './walkin-card.component.html',
  styleUrls: ['./walkin-card.component.css'],
})
export class WalkinCardComponent implements OnInit {
  @Input() walkin: IWalkin;

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {}

  navigateTo(id: number) {
    this.router.navigate([id], { relativeTo: this.route });
  }
}
