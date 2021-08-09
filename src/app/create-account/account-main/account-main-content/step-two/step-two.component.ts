import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})

export class StepTwoComponent implements OnInit {

  technologies:any[] = [
    {selected:true,title:"JavaScript"},
    {selected:false,title:"Angular JS"},
    {selected:false,title:"React JS"},
    {selected:false,title:"Node JS"}
  ]

  applicant_type:string = 'fresher';
  appeared_test_before:boolean = false;
  currently_under_notice_period:boolean = false;

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  navigateTo(path:string){
    this.router.navigate(['../',path],{relativeTo:this.route});
  }
}
