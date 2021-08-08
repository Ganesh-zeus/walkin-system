import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateAccountRoutingModule, routedComponents } from './create-account-routing.module';
import { AccountHeaderComponent } from './account-header/account-header.component';
import { AccountMainComponent } from './account-main/account-main.component';
import { AccountMainStatusComponent } from './account-main/account-main-status/account-main-status.component';
import { AccountMainContentComponent } from './account-main/account-main-content/account-main-content.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    routedComponents,
    AccountHeaderComponent,
    AccountMainComponent,
    AccountMainStatusComponent,
    AccountMainContentComponent,
  ],
  imports: [CommonModule, CreateAccountRoutingModule,FormsModule],
})

export class CreateAccountModule {}
