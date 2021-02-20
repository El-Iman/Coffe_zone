import { Component, OnInit } from '@angular/core';
import { MenuCupService } from 'src/app/services/menu-cup.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {
menu_coffee
  constructor( private menu:MenuCupService) {
  this.menu_coffee=this.menu.menu_cup
   }

  ngOnInit() {
  }

}
