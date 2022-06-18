import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
//Estos de abajo se llevan para el material.module.ts
// import { MatInputModule } from '@angular/material/input';
// import { MatButtonModule } from '@angular/material/button';
// import { MatSelectModule } from '@angular/material/select';
// import { MatRadioModule } from '@angular/material/radio';
// import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';

import { ProductsTableComponent } from './components/products-table/products-table.component';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { ProductsLisComponent } from './components/products-lis/products-lis.component';



@NgModule({
  declarations: [ProductFormComponent, NavComponent, ProductsTableComponent, DashBoardComponent, ProductsLisComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    // MatInputModule,
    // MatButtonModule,
    // MatSelectModule,
    // MatRadioModule,
    // MatCardModule,
    ReactiveFormsModule,
    MaterialModule,
    LayoutModule       
  ]
})
export class AdminModule { }
