import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetaliComponent } from './components/product-detali/product-detali.component'; 
import { ProductsComponent } from './components/products/products.component';


const routes: Routes = [
    {
        path: '',
        component: ProductsComponent
      },
      {
          path: ':id',
          component: ProductDetaliComponent
      }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class ProductsRoutingModule {}