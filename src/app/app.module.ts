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

import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, CoreModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
