import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from './../core/services/products/products.service';
import { Product } from './../product.module';

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
    this.route.params.subscribe((params: Params) => {  
      console.log(params);    
      const id = params['id'];
      this.productDetail = this.productsService.getProduct(id)!;
      console.log(this.productDetail);    
    });
  }

}
