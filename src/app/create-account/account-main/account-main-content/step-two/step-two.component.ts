import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-step-two',
  templateUrl: './step-two.component.html',
  styleUrls: ['./step-two.component.css']
})
export class StepTwoComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  previous(){
    this.router.navigate(['../','personal'],{relativeTo:this.route});
  }
  next(){
    this.router.navigate(['../','review'],{relativeTo:this.route});
  }

}
