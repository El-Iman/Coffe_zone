import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { EverydayspecComponent } from './components/everydayspec/everydayspec.component';
import { LunchComponent } from './components/lunch/lunch.component';
import { MenueComponent } from './components/menue/menue.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { BlogComponent } from './components/blog/blog.component';


const routes: Routes = [
  {path:"",component:HomeComponent,children:[
    {path:"",component:CoffeeComponent},
    // {path:"coffee",component:CoffeeComponent},
    {path:"everyDay",component:EverydayspecComponent},
    {path:"lunch",component:LunchComponent}
  ]},
  {path:"about",component:AboutComponent},
  {path:"menu",component:MenueComponent,children:[
    {path:"",component:CoffeeComponent},
    {path:"everyDay",component:EverydayspecComponent},
    {path:"lunch",component:LunchComponent},
    {path:"drinks",component:DrinksComponent}
  ]},
  {path:"reservation",component:ReservationComponent},
  {path:"contact us",component:ContactComponent},
  {path:"gallery",component:GalleryComponent},
  {path:"blog",component:BlogComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
