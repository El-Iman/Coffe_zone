import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuCupService {

  menu_cup = [
    {
      "src": "assets/images/cup1.png",
      "decs": "Lorem ipsum dolor sit amet consectetur adipiscing",
      "name": "Single Cup Brew",
      "price":"10"
    },
    {
      "src": "assets/images/cup2.png",
      "decs": "Lorem ipsum dolor sit amet consectetur adipiscing",
      "name": "Black Eyed Andy",
      "price":"10"
    }, {
      "src": "assets/images/cup3.png",
      "decs": "Lorem ipsum dolor sit amet consectetur adipiscing",
      "price":"10",
      "name": "Cuban Shot",
    }, {
      "src": "assets/images/cup4.png",
      "decs": "Lorem ipsum dolor sit amet consectetur adipiscing",
      "name": "Black Eyed Andy",
      "price":"10"

    }, {
      "src": "assets/images/cup5.png",
      "decs": "Lorem ipsum dolor sit amet consectetur adipiscing",
      "name": "Cuban Shot",
      "price":"10"

    }, {
      "src": "assets/images/cup6.png",
      "decs": "Lorem ipsum dolor sit amet consectetur adipiscing",
      "name": "Caffé Americano",
      "price":"10"

    },
    {
      "src": "assets/images/cup4.png",
      "decs": "Lorem ipsum dolor sit amet consectetur adipiscing",
      "name": "Caramel Macchiato",
      "price":"10"

    },
    {
      "src": "assets/images/cup2.png",
      "decs": "Lorem ipsum dolor sit amet consectetur adipiscing",
      "name": "Café Latte",
      "price":"10"

    },
    ,
    {
      "src": "assets/images/cup5.png",
      "decs": "Lorem ipsum dolor sit amet consectetur adipiscing",
      "name": "Standard black coffee",
      "price":"10"

    },
  ]
  constructor() { }
}
