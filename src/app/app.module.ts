import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule, BsDropdownModule, CarouselModule, CollapseModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { MainContentComponent } from './main/main-content/main-content.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainContentComponent
  ],
  imports: [
    BrowserModule,
    // ngx-bootstrap
    AlertModule,
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
