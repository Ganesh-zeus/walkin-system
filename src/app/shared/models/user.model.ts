import { IJobRole } from './job-role.model';

export interface IPersonalDetails {
  first_name: string;
  last_name: string;
  user_email: string;
  phone_number: number[];
  portfolio_url?: string;
  preferred_job_roles: IJobRole[];
  referral_name?: string;
}

export interface IEducationalQualification {
  aggregate_percentage: number;
  year_of_passing: number;
  qualification: string;
  stream: string;
  college: string;
  other_college?: string;
  college_location: string;
}

export interface IProfessionalQualification {
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

export interface IUser {
  // personal
  first_name: string;
  last_name: string;
  user_email: string;
  phone_number: number[];
  portfolio_url?: string;
  preferred_job_roles: IJobRole[];
  referral_name?: string;

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
