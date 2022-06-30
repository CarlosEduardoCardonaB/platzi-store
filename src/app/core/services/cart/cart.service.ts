import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

import { Product } from 'src/app/product.module';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productos: Product[] = [];
  private cart = new BehaviorSubject<Product[]>([]);

  cart$ = this.cart.asObservable();

  constructor() { }

  addCart(product: Product){
    this.productos = [...this.productos, product]; //esto es para generar una nueva referencia al arreglo y se evita hacer mutabilidad (no hacer push a un array)
    this.cart.next(this.productos); //En este proyecto este nos retorna todo lo que haya en el array del carrito.
    //En este caso este lo vamos a llamar desde products/components/product/product.component.ts
  }

  removeCart(id: string){
    const prodIndex = this.productos.findIndex(
      (product) => product.id === id
      );

      if(prodIndex > -1){
        const products = [...this.productos];
        products.splice(prodIndex, 1);
        this.productos = products;

        this.cart.next(this.productos);
      }else{
        console.warn('product not found');
      }
  }

  deleteProduct(id: string){
    this.productos = this.productos.filter((p) => p.id !== id);
      this.cart.next(this.productos);
  }


}
