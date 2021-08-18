import { IDescription } from "./description.model";
import { IJobRole, IJobRoleDetails } from "./job-role.model";

export interface ITimeSlot {
  id: number;
  startTime: string;
  endTime: string;
}

export interface IOpportunity {
  id:number;
  opportunity:string
}

export interface IWalkin {
  id: number;
  title: string;
  startDate:string;
  lastDate:string;
  city: string;
  opportunities: IOpportunity[];
  jobRoles: IJobRole[];
}

export interface IWalkinDetails {
  id: number;
  title: string;
  startDate:string;
  lastDate:string;
  city: string;
  opportunities: IOpportunity[];
  jobRoles: IJobRoleDetails[]; 
  prerequisites: IDescription[];
  timeSlots: ITimeSlot[];
  preferredJobRoles: IJobRole[];
  venue:string
}
