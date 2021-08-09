import { IDescription } from './description.model';

export interface IJobRole {
  id: number;
  job_title: string;
  image_url: string;
  descriptions: IDescription[];
  selected?: boolean;
}
