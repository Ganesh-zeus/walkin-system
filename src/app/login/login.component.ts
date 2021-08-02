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
  user_email:string = "";
  user_password:string = "";

  constructor(private authService:AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  validate(){
    if(this.user_email!=="" && this.user_password!==""){
      this.authService.setLogInStatus(true);
      this.router.navigateByUrl("create-account");  
    }
  }

}
