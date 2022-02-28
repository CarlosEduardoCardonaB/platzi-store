import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from './../products.service';

@Component({
  selector: 'app-product-detali',
  templateUrl: './product-detali.component.html',
  styleUrls: ['./product-detali.component.scss']
})
export class ProductDetaliComponent implements OnInit {

  constructor( 
    private route: ActivatedRoute,
    private productsService: ProductsService
    ) { 
    
  }

  ngOnInit(){
    this.route.params.subscribe((params: Params) => {
      
      const id = params['id'];
      console.log(id);

      const product_id = this.productsService.getProduct(id);
      console.log(product_id);

      
    });
  }

}
