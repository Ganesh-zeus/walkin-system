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

export interface IPrerequisites {
  id:number;
  title:string,
  prerequisite:string
}

export interface IWalkin {
  id: number;
  title: string;
  startDate:string;
  endDate:string;
  city: string;
  opportunities: IOpportunity[];
  jobRoles: IJobRole[];
  venue:string
}

export interface IWalkinDetails {
  id: number;
  title: string;
  startDate:string;
  endDate:string;
  city: string;
  opportunities: IOpportunity[];
  jobRoles: IJobRoleDetails[]; 
  prerequisites: IPrerequisites[];
  timeSlots: ITimeSlot[];
  preferredJobRoles: IJobRole[];
  venue:string
}
