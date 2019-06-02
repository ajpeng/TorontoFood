import { HttpClient } from 'selenium-webdriver/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AlertModule, BsDropdownModule, CarouselModule, CollapseModule } from 'ngx-bootstrap';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar/navbar.component';
import { MainContentComponent } from './main/main-content/main-content.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './main/components/home/home.component';
import { RandomRestaurantComponent } from './main/components/random/random.component';
import { NotFoundComponent } from './main/components/not-found/not-found.component';
import { VegetarianFoodComponent } from './main/components/cuisine/vegetarian-food/vegetarian-food.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainContentComponent,
    HomeComponent,
    RandomRestaurantComponent,
    NotFoundComponent,
    VegetarianFoodComponent
  ],
  imports: [
    BrowserModule,
    // ngx-bootstrap
    AlertModule.forRoot(),
    BsDropdownModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
