import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlertModule, BsDropdownModule, CarouselModule, CollapseModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { MainContentComponent } from './main/main-content/main-content.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './main/components/home/home.component'
import { RandomRestaurantComponent } from './main/components/random/random.component'
import { NotFoundComponent } from './main/components/not-found/not-found.component'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainContentComponent,
    HomeComponent,
    RandomRestaurantComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    // ngx-bootstrap
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
