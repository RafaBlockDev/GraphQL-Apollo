import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LaunchListComponent } from './launch-list/launch-list.component';
import { LauchListComponent } from './lauch-list/lauch-list.component';
import { LauchDetailsComponent } from './lauch-details/lauch-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LaunchListComponent,
    LauchListComponent,
    LauchDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
