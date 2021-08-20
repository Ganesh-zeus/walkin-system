import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rememberChecked = true;
  userEmail:string;
  userPassword:string = "Password";
  passwordShow:boolean = false;

  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
    this.userEmail = this.authService.userEmail;
    this.userPassword = this.authService.userPassword;
  }

  login(){
    this.authService.userEmail = this.userEmail;
    this.userEmail = "";
    this.userPassword = "";
    
    // write validation logic below
    // this.authService.validate();

    this.router.navigateByUrl("walkins");
  }

}
