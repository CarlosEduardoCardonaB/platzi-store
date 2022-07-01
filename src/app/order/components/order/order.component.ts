import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/product.module';
import { CartService } from 'src/app/core/services/cart/cart.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  products$!: Observable<Product[]>;

  constructor(
    private cartService: CartService
  ) { 
    this.products$ = this.cartService.cart$;
    }  

  ngOnInit(): void {
  }

  removeProd(id: string){

    this.cartService.removeCart(id);

  }

}
