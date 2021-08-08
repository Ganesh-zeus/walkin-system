import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// components
import { WalkinsComponent } from './walkins.component';
import { WalkinListComponent } from './walkin-list/walkin-list.component';
import { WalkinComponent } from './walkin/walkin.component';

const routes: Routes = [
  {
    path: '',
    component: WalkinsComponent,
    children: [
      { path: ':walkinId', component: WalkinComponent },
      { path: '', component: WalkinListComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalkinsRoutingModule {}

export const routedComponents = [
    WalkinsComponent,
    WalkinListComponent,
    WalkinComponent
];