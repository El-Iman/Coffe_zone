import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
   var inputs =document.querySelectorAll(".form-control");
   let input = Array.from(inputs);

   input.forEach(element => {
     element.addEventListener("click",function(){
       element.classList.add("active")
       setTimeout(()=>{
         element.classList.remove("active")
       },1000)
     })
   });


}

}
