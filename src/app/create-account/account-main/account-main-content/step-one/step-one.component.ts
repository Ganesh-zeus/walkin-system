import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Personal,JobRole } from '../User.model';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.css']
})
export class StepOneComponent implements OnInit {

  job_roles:JobRole[] = [
    new JobRole(true,"Instructional Designer"),
    new JobRole(false,"Software Engineer"),
    new JobRole(true,"Software Quality Engineer"),
  ]

  personal:Personal = new Personal(
    "John","Watson","Johnwatson@example.com",
    ["91","9876543210"],"www.myportfolio.in",
    this.job_roles,"",false
  );

  constructor(private router:Router,private route:ActivatedRoute) { 
  }

  ngOnInit(): void {
  }

  next(){
    this.router.navigate(['../','qualification'],{relativeTo:this.route});
  }
}
