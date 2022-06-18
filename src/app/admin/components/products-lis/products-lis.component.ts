import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.module';
import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products-lis',
  templateUrl: './products-lis.component.html',
  styleUrls: ['./products-lis.component.scss']
})
export class ProductsLisComponent implements OnInit {

  productsLt!: Product [];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  

  constructor( private productService: ProductsService) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getAllProducts()
    .subscribe(products => {this.productsLt = products;})
  }

}
