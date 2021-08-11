import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterTechnologiesPipe } from './filter-technologies.pipe';
import { FilterJobsPipe } from './filter-jobs.pipe';

@NgModule({
  declarations: [FilterTechnologiesPipe, FilterJobsPipe],
  imports: [CommonModule],
  exports: [FilterTechnologiesPipe,FilterJobsPipe],
})
export class PipesModule {}
