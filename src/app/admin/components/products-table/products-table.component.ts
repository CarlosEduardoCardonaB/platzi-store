import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { ProductsTableDataSource, ProductsTableItem } from './products-table-datasource';
import { Product } from 'src/app/product.module';

import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.scss']
})
export class ProductsTableComponent implements AfterViewInit 
{


  // @ViewChild(MatPaginator) paginator!: MatPaginator;
  // @ViewChild(MatSort) sort!: MatSort;
  // @ViewChild(MatTable) table!: MatTable<ProductsTableItem>;
  // dataSource: ProductsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  //displayedColumns: string[] = ['id', 'name'];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions'];
  productsLt!: Product [];
  
  constructor( private productService: ProductsService ) {
    //this.dataSource = new ProductsTableDataSource();    
  }

  // ngOnInit(): void {
  //   this.fetchProducts();
  // }

  ngAfterViewInit(): void {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
    // this.table.dataSource = this.dataSource;
    this.fetchProducts();
  }

  fetchProducts() {
    this.productService.getAllProducts()
    .subscribe(products => {this.productsLt = products;})
  }

  deleteProduct(id: string){
    this.productService.delteProduct(id).subscribe(rta => {console.log(rta);
    if(rta){
      //this.fetchProducts();
      const index = this.productsLt.findIndex(product => product.id === id);
      this.productsLt.splice(index,1);
      this.productsLt = [...this.productsLt] 
    }
  });    
  }


}
