import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; //En este punto llamamos solo el HttpClient por que el HttpClientModule ya lo importamos en app.module.ts

import {Product} from './../../../product.module'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   
  //Esta lista de productos queda deprecada cuando se implementa el consumo al servicio en la url https://platzi-store.herokuapp.com/products/
  //Modelo del producto se encuentra creado en product.module.ts
  //  products: Product[] = [
  //   {
  //     id: '1',
  //     image: 'assets/images/camiseta.png',
  //     title: 'Camiseta',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '2',
  //     image: 'assets/images/hoodie.png',
  //     title: 'Hoodie',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '3',
  //     image: 'assets/images/mug.png',
  //     title: 'Mug',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '4',
  //     image: 'assets/images/pin.png',
  //     title: 'Pin',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '5',
  //     image: 'assets/images/stickers1.png',
  //     title: 'Stickers',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  //   {
  //     id: '6',
  //     image: 'assets/images/stickers2.png',
  //     title: 'Stickers',
  //     price: 80000,
  //     description: 'bla bla bla bla bla'
  //   },
  // ];
  constructor(
    private http: HttpClient
  ){}

  getAllProducts(){
    return this.http.get<Product[]>(environment.urlApi);
    //Esta petición era para retornar el objeto de productos antes de la implementación del servicio https...
    //return this.products;
  } 

  getProduct(id: string){
    return this.http.get<Product>(`${environment.urlApi}${id}`)
    //return this.products.find(item => id === item.id);
  }

}
