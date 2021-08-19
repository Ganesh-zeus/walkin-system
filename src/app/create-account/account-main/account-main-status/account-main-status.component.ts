import { Component, OnInit } from '@angular/core';
import {  ActivatedRoute, NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-account-main-status',
  templateUrl: './account-main-status.component.html',
  styleUrls: ['./account-main-status.component.css']
})
export class AccountMainStatusComponent implements OnInit {

  currentUrl:string;
  completionStatus:[boolean,boolean,boolean];

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.currentUrl = this.router.url;
    this.setCompletionStatus();
    
    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this.currentUrl = event.url;
        this.setCompletionStatus();
      }
    })
  }

  setCompletionStatus(){
    if(this.currentUrl === '/create-account/personal'){
      this.completionStatus = [true,false,false];
    }

    if(this.currentUrl === '/create-account/qualification'){
      this.completionStatus = [true,true,false];
    }

    if(this.currentUrl === '/create-account/review'){
      this.completionStatus = [true,true,true];
    }
  }

  goTo(step:string){
    this.router.navigate([step],{relativeTo:this.route});
  }

}
