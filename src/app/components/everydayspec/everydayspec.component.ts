import { Component, OnInit } from '@angular/core';
import { MenuCupService } from 'src/app/services/menu-cup.service';

@Component({
  selector: 'app-everydayspec',
  templateUrl: './everydayspec.component.html',
  styleUrls: ['./everydayspec.component.css']
})
export class EverydayspecComponent implements OnInit {

  menu_coffee
  constructor( private menu:MenuCupService) {
  this.menu_coffee=this.menu.menu_cup
   }

  ngOnInit() {
  }

}
