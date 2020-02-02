import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { InventoryServiceService } from '../inventory-service.service';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  // @Output() prices=new EventEmitter();
  Price1="";
  Price2="";
  constructor(public obj1:InventoryServiceService) {

   }
   myfunc2()
   {
    this.obj1.price1=parseInt(this.Price1);
    this.obj1.price2=parseInt(this.Price2);
   }

  ngOnInit() {
  }

}
