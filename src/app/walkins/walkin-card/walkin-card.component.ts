import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-walkin-card',
  templateUrl: './walkin-card.component.html',
  styleUrls: ['./walkin-card.component.css'],
})
export class WalkinCardComponent implements OnInit {
  constructor(private router:Router,private route:ActivatedRoute) {}

  ngOnInit(): void {}

  navigateTo(id:string){
    this.router.navigate([id],{relativeTo:this.route});
  }
}
