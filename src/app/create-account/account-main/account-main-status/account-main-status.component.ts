import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-account-main-status',
  templateUrl: './account-main-status.component.html',
  styleUrls: ['./account-main-status.component.css']
})
export class AccountMainStatusComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  goTo(step:string){
    this.router.navigate([step],{relativeTo:this.route});
  }

}
