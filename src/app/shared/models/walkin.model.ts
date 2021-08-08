export interface IDescription {
  id: number;
  title: string;
  description: string;
}

export interface IJobRole {
  id: number;
  job_title: string;
  image_url: string;
  descriptions: IDescription[];
  selected?: boolean;
}

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
  job_roles: IJobRole[]; 
  prerequisites: IDescription[];
  time_slots: ITimeSlot[];
  preffered_job_roles: IJobRole[];
  venue:string
}
