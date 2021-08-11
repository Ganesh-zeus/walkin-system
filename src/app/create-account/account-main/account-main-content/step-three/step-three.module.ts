import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterJobsPipe } from 'src/app/shared/pipes/filter-jobs.pipe';


@NgModule({
  declarations: [
    FilterJobsPipe
  ],
  imports: [CommonModule],
  providers:[FilterJobsPipe]
})

export class CreateAccountModule {}
