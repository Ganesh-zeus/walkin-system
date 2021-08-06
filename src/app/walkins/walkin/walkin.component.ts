import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Description, JobRole, TimeSlot, Walkin } from '../walkin.model';

@Component({
  selector: 'app-walkin',
  templateUrl: './walkin.component.html',
  styleUrls: ['./walkin.component.css'],
})
export class WalkinComponent implements OnInit {
  walkinId: string = '';
  role_description: Description[] = [
    new Description('Gross Compensation Package', 'Rs.5,00,000l per annum'),
    new Description(
      'Role Description',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa distinctio facilis assumenda impedit, quia doloremque nam illum cupiditate magnam dolorem!'
    ),
    new Description(
      'Requirements',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa distinctio facilis assumenda impedit, quia doloremque nam illum cupiditate magnam dolorem!'
    ),
  ];

  prerequisites: Description[] = [
    new Description(
      'General Instructions',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa distinctio facilis assumenda impedit, quia doloremque nam illum cupiditate magnam dolorem!'
    ),
    new Description(
      'Instructions for the Exam',
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa distinctio facilis assumenda impedit, quia doloremque nam illum cupiditate magnam dolorem!'
    ),
  ];

  jobRoleList: JobRole[] = [
    new JobRole(
      '../../../assets/icons/computer.svg',
      true,
      'Instructional Designer',
      this.role_description
    ),
    new JobRole(
      '../../../assets/icons/computer.svg',
      false,
      'Software Engineer',
      this.role_description
    ),
    new JobRole(
      '../../../assets/icons/computer.svg',
      true,
      'Software Quality Engineer',
      this.role_description
    ),
  ];

  time_slots: TimeSlot[] = [
    new TimeSlot('9:00 AM', '11:00 AM'),
    new TimeSlot('1:00PM', '3:00PM'),
  ];

  walkin: Walkin = new Walkin(
    '1',
    'Walkin For Designer Job Role',
    '03-Jul-2021 to 04-Jul-2021',
    'Mumbai',
    this.jobRoleList,
    [],
    this.prerequisites,
    this.time_slots,
    this.jobRoleList
  );

  prerequisitesOpen:boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params['walkinId']);
      this.walkinId = params['walkinId'];
    });
  }
}
