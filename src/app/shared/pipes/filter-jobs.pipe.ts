import { Pipe, PipeTransform } from '@angular/core';
import { IJobRole } from '../models/job-role.model';

@Pipe({
  name: 'filterJobs'
})
export class FilterJobsPipe implements PipeTransform {

  transform(technologies: IJobRole[], property: string): IJobRole[] {
    if (!technologies || !property) {
      return technologies;
    }

    return technologies.filter((technology:IJobRole) => {technology[property as keyof IJobRole] === true});
  }

}
