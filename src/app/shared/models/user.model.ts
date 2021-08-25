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
  phoneNumber: string;
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
  qualification: IQualification;
  stream: IStream;
  college: ICollege;
  otherCollegeName?: string;
  collegeLocation: string;
}

export interface IFresherQualifications {

  familiarTechnologies: ITechnologies[];
  otherFamiliarTechnologies?: string;

  appearedTestBefore: boolean;
  roleAppearedBefore?: string;
}

export interface IExperiencedQualifications {

  yearsOfExperience: number;
  currentCtc?: number;
  expectedCtc?: number;
  expertiseTechnologies: ITechnologies[];
  otherExpertiseTechnologies?: string;
  currentlyUnderNoticePeriod: boolean;
  noticePeriodEnd: string;
  noticePeriodInMonths?: number;

  familiarTechnologies: ITechnologies[];
  otherFamiliarTechnologies?: string;

  appearedTestBefore: boolean;
  roleAppearedBefore?: string;
}

export interface IUser {
  personalDetails:IPersonalDetails,
  educationalQualifications:IEducationalQualifications,
  applicantType:string,
  fresherQualifications:IFresherQualifications|null,
  experiencedQualifications?:IExperiencedQualifications|null;
}