import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { MenueComponent } from './components/menue/menue.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { CoffeeComponent } from './components/coffee/coffee.component';
import { EverydayspecComponent } from './components/everydayspec/everydayspec.component';
import { LunchComponent } from './components/lunch/lunch.component';
import { DrinksComponent } from './components/drinks/drinks.component';
import { ReservationComponent } from './components/reservation/reservation.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { BlogComponent } from './components/blog/blog.component';
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HomeComponent,
    AboutComponent,
    MenueComponent,
    CoffeeComponent,
    EverydayspecComponent,
    LunchComponent,
    DrinksComponent,
    ReservationComponent,
    ContactComponent,
    GalleryComponent,
    BlogComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
