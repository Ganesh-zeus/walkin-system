import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// routing modules
import { AppRoutingModule } from './app-routing.module';
import { routingComponents } from './app-routing.module';

// components
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';

// create-account components
import { AccountHeaderComponent } from './create-account/account-header/account-header.component';
import { AccountMainComponent } from './create-account/account-main/account-main.component';
import { AccountMainStatusComponent } from './create-account/account-main/account-main-status/account-main-status.component';
import { AccountMainContentComponent } from './create-account/account-main/account-main-content/account-main-content.component';

// walkin dashboard components
import { WalkinsComponent } from './walkins/walkins.component';
import { WalkinComponent } from './walkins/walkin/walkin.component';
import { WalkinCardComponent } from './walkins/walkin-card/walkin-card.component';
import { WalkinListComponent } from './walkins/walkin-list/walkin-list.component';

import { CoreModule } from './core/core.module';

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
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
