import { IJobRole } from './job-role.model';
import { ITechnologies } from './technologies.model';

export interface ICollege {
  id:number,
  collegeName:string
}

export interface IStream {
  id:number,
  streamName:string
}

export interface IQualification {
  id:number,
  qualificationName:string
}

export interface IPersonalDetails {
  first_name: string;
  last_name: string;
  user_email: string;
  phone_number: number[];
  portfolio_url?: string;
  preferred_job_roles: IJobRole[];
  referrer_name?: string;
  job_updates:boolean;
}

export interface IEducationalQualifications {
  aggregate_percentage: number;
  year_of_passing: number;
  qualification: string;
  stream: string;
  college: string;
  other_college?: string;
  college_location: string;
}

export interface IFresherQualifications {
  familiar_technologies: ITechnologies[];
  other_familiar_technologies?: string;

  role_appeared_before?: string;
}

export interface IExperiencedQualifications {
  years_of_experience: number;
  current_ctc?: number;
  expected_ctc?: number;
  expertise_technologies: ITechnologies[];
  other_expertise_technologies?: string;
  currently_under_notice_period: boolean;
  notice_period_end: string;
  notice_period_months?: number;

  familiar_technologies: ITechnologies[];
  other_familiar_technologies?: string;

  role_appeared_before?: string;
}

export interface IProfessionalQualifications {
  applicant_type: string;

  years_of_experience?: number;
  current_ctc?: number;
  expected_ctc?: number;
  expertise_technologies?: ITechnologies[];
  other_expertise_technologies?: string;
  currently_under_notice_period?: boolean;
  notice_period_end?: string;
  notice_period_months?: number;
  role_appeared_before?: IJobRole;

  familiar_technologies: ITechnologies[];
  other_familiar_technologies?: string;

  appeared_test_before: boolean;
}

export interface IUser {
  // personal
  first_name: string;
  last_name: string;
  user_email: string;
  user_password:string;
  phone_number: number[];
  portfolio_url?: string;
  preferred_job_roles: IJobRole[];
  referral_name?: string;
  job_updates:boolean;

  // educational
  aggregate_percentage: number;
  year_of_passing: number;
  qualification: string;
  stream: string;
  college: string;
  other_college?: string;
  college_location: string;

  // professional
  applicant_type: string;
  years_of_experience?: number;
  current_ctc?: number;
  expected_ctc?: number;
  expertise_technologies?: string[];
  other_expertise_technologies?: string;
  currently_under_notice_period?: boolean;
  notice_period_end?: string;
  notice_period_months?: number;

  familiar_technologies?: string[];
  other_familiar_technologies?: string;
  appeared_test_before: boolean;
  role_appeared_before?: IJobRole;
}
