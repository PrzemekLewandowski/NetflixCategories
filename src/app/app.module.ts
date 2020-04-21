import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {FilterPipe} from './utils/filter.pipe';
import {TagCloudModule} from 'angular-tag-cloud-module';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    TagCloudModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
