import { Component, OnInit } from '@angular/core';
import { MenuCupService } from 'src/app/services/menu-cup.service';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css']
})
export class LunchComponent implements OnInit {

  menu_coffee
  constructor( private menu:MenuCupService) {
  this.menu_coffee=this.menu.menu_cup
   }

  ngOnInit() {
  }

}
