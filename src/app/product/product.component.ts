import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { InventoryServiceService } from '../inventory-service.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  // @Output() products = new EventEmitter();

  Product1 = "";
  Product2 = "";

  constructor(public obj:InventoryServiceService) {}

  myfunc1()
  {
    this.obj.product1=this.Product1;
    this.obj.product2=this.Product2;   
  }

  ngOnInit() {
  }

}
