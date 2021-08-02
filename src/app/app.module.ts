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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    PageNotFoundComponent,
    CreateAccountComponent,
    AccountHeaderComponent,
    AccountMainComponent,
    AccountMainStatusComponent,
    AccountMainContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
