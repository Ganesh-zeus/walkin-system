import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { StepOneComponent } from './create-account/account-main/account-main-content/step-one/step-one.component';
import { StepTwoComponent } from './create-account/account-main/account-main-content/step-two/step-two.component';
import { StepThreeComponent } from './create-account/account-main/account-main-content/step-three/step-three.component';
import { WalkinsComponent } from './walkins/walkins.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'create-account', redirectTo: '/create-account/personal', pathMatch: 'full' },
  { 
    path: 'create-account', 
    component: CreateAccountComponent,
    children:[
      {path:'personal',component:StepOneComponent},
      {path:'qualification',component:StepTwoComponent},
      {path:'review',component:StepThreeComponent}
    ]
  },
  {path:'walkins',component:WalkinsComponent},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
export const routingComponents = [
  LoginComponent,
  CreateAccountComponent,
  StepOneComponent,
  StepTwoComponent,
  StepThreeComponent,
  WalkinsComponent,
  PageNotFoundComponent
]
