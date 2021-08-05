import { Component, OnInit } from '@angular/core';
import { Description, JobRole, TimeSlot, Walkin } from '../walkin.model';

@Component({
  selector: 'app-walkin-list',
  templateUrl: './walkin-list.component.html',
  styleUrls: ['./walkin-list.component.css']
})

export class WalkinListComponent implements OnInit {

  role_description:Description[] = [
    new Description("Gross Compensation Package","Rs.5,00,000l per annum"),
    new Description("Role Description","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa distinctio facilis assumenda impedit, quia doloremque nam illum cupiditate magnam dolorem!"),
    new Description("Requirements","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa distinctio facilis assumenda impedit, quia doloremque nam illum cupiditate magnam dolorem!")
  ] 

  prerequisites:Description[] = [
    new Description("General Instructions","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa distinctio facilis assumenda impedit, quia doloremque nam illum cupiditate magnam dolorem!"),
    new Description("Instructions for the Exam","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa distinctio facilis assumenda impedit, quia doloremque nam illum cupiditate magnam dolorem!")
  ]

  jobRoleList:JobRole[] = [
    new JobRole("../../../assets/icons/computer.svg",true,"Instructional Designer",this.role_description),
    new JobRole("../../../assets/icons/computer.svg",false,"Software Engineer",this.role_description),
    new JobRole("../../../assets/icons/computer.svg",true,"Software Quality Engineer",this.role_description)
  ]

  time_slots:TimeSlot[] = [
    new TimeSlot("9:00 AM","11:00 AM"),
    new TimeSlot("1:00PM","3:00PM")
  ]

  walkinList:Walkin[] = [
    new Walkin("1","Walkin For Designer Job Role","03-Jul-2021 to 04-Jul-2021","Mumbai",
      this.jobRoleList,[],this.prerequisites,this.time_slots,this.jobRoleList
    ),
    new Walkin("2","Walkin For Multiple Job Roles","03-Jul-2021 to 04-Jul-2021","Mumbai",
      this.jobRoleList,["Internship opportunity for MCA studentsInternship opportunity for MCA students"],this.prerequisites,this.time_slots,this.jobRoleList
    ),
    new Walkin("3","Walkin For Design and Development Job Role","03-Jul-2021 to 04-Jul-2021","Mumbai",
      this.jobRoleList,[],this.prerequisites,this.time_slots,this.jobRoleList
    )
  ];
  constructor() { }

  ngOnInit(): void {

  }

}
