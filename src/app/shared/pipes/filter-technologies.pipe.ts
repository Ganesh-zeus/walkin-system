import { Pipe, PipeTransform } from '@angular/core';
import { ITechnologies } from '../models/technologies.model';

@Pipe({
  name: 'filterTechnologies',
})
export class FilterTechnologiesPipe implements PipeTransform {
  transform(technologies: ITechnologies[], property: string): ITechnologies[] {
    if (!technologies || !property) {
      return technologies;
    }

    return technologies.filter((technology:ITechnologies) => {technology[property as keyof ITechnologies] === true});
  }
}
