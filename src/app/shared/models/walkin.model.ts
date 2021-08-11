import { IDescription } from "./description.model";
import { IJobRole, IJobRoleDetails } from "./job-role.model";

export interface ITimeSlot {
  id: number;
  start_time: string;
  end_time: string;
}

export interface IWalkin {
  id: number;
  title: string;
  dates: string[];
  location: string;
  opportunities: string[];
  job_roles: IJobRoleDetails[]; 
  prerequisites: IDescription[];
  time_slots: ITimeSlot[];
  preffered_job_roles: IJobRole[];
  venue:string
}
