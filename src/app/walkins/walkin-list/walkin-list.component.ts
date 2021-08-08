import { Component, OnInit } from '@angular/core';

import { WalkinService } from 'src/app/core/services/walkin.service';
import { IWalkin } from 'src/app/shared/models/walkin.model';

@Component({
  selector: 'app-walkin-list',
  templateUrl: './walkin-list.component.html',
  styleUrls: ['./walkin-list.component.css'],
})

export class WalkinListComponent implements OnInit {
  walkinList: IWalkin[];

  constructor(private walkinService: WalkinService) {}

  ngOnInit(): void {
    this.walkinService.getAllWalkins().subscribe((_walkinList) => {
      this.walkinList = _walkinList;
      console.log(_walkinList);
    });
  }
}
