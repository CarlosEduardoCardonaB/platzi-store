import { Component, OnInit } from '@angular/core';
//import { Product } from '../product.module';
import { Product } from '../../../product.module';
import { ProductsService } from 'src/app/core/services/products/products.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(
    private productsService: ProductsService
  ) {}

  productsList!: Product[]; //Modelo del producto se encuentra creado en product.module.ts

  ngOnInit(): void {
    //Esta lista de productos la traíamos cuando los datos estaban quemados en products.service.ts. Se elimina cuando se hace peticion al ws en la funcion fetchProducts
    //this.productsList = this.productsService.getAllProducts();
    //console.log(this.productsList)
    this.fetchProducts();
  }

  fetchProducts()
  {
    this.productsService.getAllProducts().subscribe(products => this.productsList = products)
  }


  

  //Esta lista de productos se trae desde "src/app/core/services/products/products.service"
  // products: Product[] = [
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

  clickProduct(id: number){
    console.log('product');
    console.log(id);
  }


}
