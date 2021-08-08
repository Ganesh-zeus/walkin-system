import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { CreateAccountComponent } from './create-account.component';
import { StepOneComponent } from './account-main/account-main-content/step-one/step-one.component';
import { StepTwoComponent } from './account-main/account-main-content/step-two/step-two.component';
import { StepThreeComponent } from './account-main/account-main-content/step-three/step-three.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/create-account/personal',
    pathMatch: 'full',
  },
  {
    path: '',
    component: CreateAccountComponent,
    children: [
      { path: 'personal', component: StepOneComponent },
      { path: 'qualification', component: StepTwoComponent },
      { path: 'review', component: StepThreeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateAccountRoutingModule {}

export const routedComponents = [
  CreateAccountComponent,
  StepOneComponent,
  StepTwoComponent,
  StepThreeComponent,
];
