import { RouterModule, Routes, Router } from '@angular/router';
import { NgModule } from '@angular/core';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'random', component: RandomRestaurantComponent },
  { path: 'cuisine/:cuisineType', component: CuisineComponent },
  { path: 'cuisine', component: GeneralCuisineComponent },
  { path: "**", component: NotFoundComponent }

]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
