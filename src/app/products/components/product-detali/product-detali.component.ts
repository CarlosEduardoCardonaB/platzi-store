import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
//import { ProductsService } from './../core/services/products/products.service';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/product.module'; 

@Component({
  selector: 'app-product-detali',
  templateUrl: './product-detali.component.html',
  styleUrls: ['./product-detali.component.scss']
})
export class ProductDetaliComponent implements OnInit {

  //Declaración de la variable global para poder mostrarla en el "product-detali.component.html"
  productDetail!: Product; 

  constructor( 
    private route: ActivatedRoute,
    private productsService: ProductsService
    ) { 
    
  }

  ngOnInit(){
    //Estas líneas se utilizaban cuando estaban los datos quemados en el products.service.ts
    this.route.params.subscribe((params: Params) => {  
      console.log(params);    
      const id = params['id'];
      this.fetchProduct(id);

      //this.productDetail = this.productsService.getProduct(id)!;      
      //console.log(this.productDetail);    
    });  
    
  }

  fetchProduct(id: string){
    this.productsService.getProduct(id).subscribe(productDetailWs => this.productDetail = productDetailWs);
  };

}
