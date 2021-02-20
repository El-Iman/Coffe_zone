import { Component, OnInit } from '@angular/core';
import { MenuCupService } from 'src/app/services/menu-cup.service';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {

  menu_coffee
  constructor( private menu:MenuCupService) {
  this.menu_coffee=this.menu.menu_cup
   }

  ngOnInit() {
  }

}
