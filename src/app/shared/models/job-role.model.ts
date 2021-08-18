import { IDescription } from './description.model';

export interface IJobRole {
  id: number;
  jobTitle: string;
  jobImageUrl?: string;
  selected?: boolean;
}

export interface IJobRoleDetails {
  id: number;
  jobTitle: string;
  jobImageUrl?: string;
  descriptions: IDescription[];
}
