import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
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
        path: 'create',
        component: ProductFormComponent
      },
      {
        path: 'listTable',
        component: ProductsTableComponent
      },
      {
        path: 'dashBoard',
        component: DashBoardComponent
      },
      {
        path: 'prodList',
        component: ProductsLisComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
