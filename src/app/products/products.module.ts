import { NgModule } from '@angular/core';
import { ProductsComponent } from './components/products/products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductDetaliComponent } from './components/product-detali/product-detali.component';
import { ProductComponent } from './components/product/product.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        ProductsComponent,
        ProductDetaliComponent,
        ProductComponent,
    ],
    imports: [
        CommonModule,
        ProductsRoutingModule,
        SharedModule,
        
    ]
})

export class ProductModule {

}