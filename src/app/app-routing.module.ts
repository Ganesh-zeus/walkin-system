import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// components
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';

// lazy loading components except login and page404
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },

  { path: 'create-account', loadChildren: () => import("./create-account/create-account.module").then(m => m.CreateAccountModule) },
  { path: 'walkins', loadChildren: () => import("./walkins/walkins.module").then(m => m.WalkinsModule) },

  { path: '**', component: PageNotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

export const routingComponents = [
  LoginComponent,
  PageNotFoundComponent
];
