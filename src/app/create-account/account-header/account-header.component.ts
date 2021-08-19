import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-account-header',
  templateUrl: './account-header.component.html',
  styleUrls: ['./account-header.component.css']
})
export class AccountHeaderComponent implements OnInit {

  currentUrl:string;
  constructor(private router:Router,private userService:UserService) { }

  ngOnInit(): void {
    this.currentUrl = this.router.url;

    this.router.events.subscribe((event) => {
      if(event instanceof NavigationEnd){
        this.currentUrl = event.url;
      }
    })
  }

  isFormCompleted():boolean{
    return this.currentUrl === '/create-account/review';
  }

  createUser(){
    this.userService.createUser();
  }

  goBack(){
    this.router.navigate(['login']);
  }

}
