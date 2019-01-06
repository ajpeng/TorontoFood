import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlertModule, BsDropdownModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AlertModule,
    BsDropdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
