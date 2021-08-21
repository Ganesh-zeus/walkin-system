import { IDescription } from './description.model';

export interface IJobRole {
  id: number;
  title: string;
  imageUrl?: string;
  selected?: boolean;
}

export interface IJobRoleDetails {
  id: number;
  title: string;
  imageUrl?: string;
  jobRoleDetails: IDescription[];
}
