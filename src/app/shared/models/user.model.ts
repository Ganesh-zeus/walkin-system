import { IJobRole } from './job-role.model';
import { ITechnologies } from './technologies.model';

export interface ICollege {
  id: number;
  collegeName: string;
}

export interface IStream {
  id: number;
  streamName: string;
}

export interface IQualification {
  id: number;
  qualificationName: string;
}

export interface IPersonalDetails {
  firstName: string;
  lastName: string;
  userEmail: string;
  userPassword?: string;
  countryCode: number;
  phoneNumber: number;
  portfolioUrl?: string;
  resumePath?: string;
  profileImagePath?: string;
  preferredJobRoles: IJobRole[];
  referrerName?: string;
  jobUpdates: boolean;
}

export interface IEducationalQualifications {
  aggregatePercentage: number;
  yearOfPassing: number;
  qualificationName: string;
  streamName: string;
  collegeName: string;
  otherCollegeName?: string;
  collegeLocation: string;
}

export interface IFresherQualifications {
  familiar_technologies: ITechnologies[];
  other_familiar_technologies?: string;

  appeared_test_before: boolean;
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

  appeared_test_before: boolean;
  role_appeared_before?: string;
}

export interface IUser {
  // personal
  first_name: string;
  last_name: string;
  user_email: string;
  user_password: string;
  phone_number: number[];
  portfolio_url?: string;
  preferred_job_roles: IJobRole[];
  referral_name?: string;
  job_updates: boolean;

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
