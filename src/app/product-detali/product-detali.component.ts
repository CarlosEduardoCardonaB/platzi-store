import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from './../products.service';
import { Product } from './../product.module';

@Component({
  selector: 'app-product-detali',
  templateUrl: './product-detali.component.html',
  styleUrls: ['./product-detali.component.scss']
})
export class ProductDetaliComponent implements OnInit {

  product!: Product; 

  constructor( 
    private route: ActivatedRoute,
    private productsService: ProductsService
    ) { 
    
  }

  ngOnInit(){
    this.route.params.subscribe((params: Params) => {      
      const id = params['id'];
      this.product = this.productsService.getProduct(id)!;      
    });
  }

}
