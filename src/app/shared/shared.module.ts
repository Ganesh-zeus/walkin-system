import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesModule } from './pipes/pipes.module';
import { FilterJobsPipe } from './pipes/filter-jobs.pipe';
import { FilterTechnologiesPipe } from './pipes/filter-technologies.pipe';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PipesModule
  ],
  exports:[FilterJobsPipe,FilterTechnologiesPipe]
})
export class SharedModule { }
