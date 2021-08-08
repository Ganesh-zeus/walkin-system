import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WalkinsRoutingModule } from './walkins-routing.module';

// components
import { routedComponents } from './walkins-routing.module';
import { WalkinCardComponent } from './walkin-card/walkin-card.component';


@NgModule({
  declarations: [
    routedComponents,
    WalkinCardComponent
  ],
  imports: [CommonModule,WalkinsRoutingModule,FormsModule],
})

export class WalkinsModule {}
