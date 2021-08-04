import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rememberChecked = true;
  user_email:string = "";
  user_password:string = "Password";
  password_show:boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  validate(){
    if(this.user_email!=="" && this.user_password!==""){
      this.router.navigateByUrl("create-account");  
    }
  }

}
