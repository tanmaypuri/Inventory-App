import { Component } from '@angular/core';
import { InventoryServiceService } from './inventory-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Inventory';
  pr1=""
  pr2=""
  pri1 :number
  pri2 :number
  pritotal:number
  constructor(public obj2:InventoryServiceService)
  {
     
  }
  display()
  {
    this.pr1=this.obj2.product1;
    this.pr2=this.obj2.product2;
    this.pri1=this.obj2.price1;
    this.pri2=this.obj2.price2;
    this.pritotal=this.pri1+this.pri2; 
  }
}
