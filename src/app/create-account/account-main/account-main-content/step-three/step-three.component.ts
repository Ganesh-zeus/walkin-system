import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Personal,JobRole } from '../User.model';

@Component({
  selector: 'app-step-three',
  templateUrl: './step-three.component.html',
  styleUrls: ['./step-three.component.css']
})

export class StepThreeComponent implements OnInit {

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

  educationalOpen:boolean = true;
  professionalOpen:boolean = true;

  technologies:any[] = [
    {selected:true,title:"JavaScript"},
    {selected:false,title:"Angular JS"},
    {selected:false,title:"React JS"},
    {selected:false,title:"Node JS"}
  ]

  edu:any = {qualificationOpen:false,streamOpen:false,collegeOpen:false}


  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  previous(){
    this.router.navigate(['../','qualification'],{relativeTo:this.route});
  }
}
