import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import AppComponent from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { IconsService } from './services/icons.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [IconsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
