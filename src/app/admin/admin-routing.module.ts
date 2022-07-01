import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { FormCreateComponent } from './components/form-create/form-create.component';
import { NavComponent } from './components/nav/nav.component';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductsLisComponent } from './components/products-lis/products-lis.component';
import { ProductsTableComponent } from './components/products-table/products-table.component';

const routes: Routes = [
  
  {
    path: '',
    component: NavComponent,
    children: [
      {
        path: '',
        component: DashBoardComponent
      },
      {
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: 'listTable',
        component: ProductsTableComponent
      },      
      {
        path: 'prodList',
        component: ProductsLisComponent
      },
      {
        path: 'listTable/create',
        component: FormCreateComponent
      },
      {
        path: 'listTable/edit/:id',
        component: EditProductComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
