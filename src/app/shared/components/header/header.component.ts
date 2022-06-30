import { Component, OnInit } from '@angular/core';

//para el uso de pipe
import { map, Observable } from 'rxjs';

import { CartService } from 'src/app/core/services/cart/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  //Esta declaración es para usar sin pipe
  //total = 0;

  //esta declaración es para usar con pipe. Se declara la variable "total$" de tipo observable 
  total$!: Observable<number>;

  constructor(
    private cartService: CartService
  ) { 
    //Con este método funciona pero se puede mejorar con pipe y usando el import {map} 
  //   this.cartService.cart$.subscribe(prodcuts =>{
  //     console.log(prodcuts);
  //     this.total = prodcuts.length;
  // });

  //asi se hace con pipe y sin subscripción, esta subscripción se hace en el HTML con la linea ""
  this.total$ = this.cartService.cart$.pipe(
    map(products => products.length)
  );
  }

  ngOnInit(): void {
  }

}
