import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './core/services/auth.service';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { AccountHeaderComponent } from './create-account/account-header/account-header.component';
import { AccountMainComponent } from './create-account/account-main/account-main.component';
import { AccountMainStatusComponent } from './create-account/account-main/account-main-status/account-main-status.component';
import { AccountMainContentComponent } from './create-account/account-main/account-main-content/account-main-content.component';
import { StepOneComponent } from './create-account/account-main/account-main-content/step-one/step-one.component';
import { StepTwoComponent } from './create-account/account-main/account-main-content/step-two/step-two.component';
import { StepThreeComponent } from './create-account/account-main/account-main-content/step-three/step-three.component';
import { routingComponents } from './app-routing.module';
import { WalkinsComponent } from './walkins/walkins.component';
import { WalkinComponent } from './walkins/walkin/walkin.component';
import { WalkinCardComponent } from './walkins/walkin-card/walkin-card.component';
import { WalkinListComponent } from './walkins/walkin-list/walkin-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    AccountHeaderComponent,
    AccountMainComponent,
    AccountMainStatusComponent,
    AccountMainContentComponent,
    WalkinsComponent,
    WalkinComponent,
    WalkinCardComponent,
    WalkinListComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
