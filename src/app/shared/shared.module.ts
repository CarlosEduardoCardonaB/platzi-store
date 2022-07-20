import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { ExponentialPipe } from './pipes/exponential/exponential.pipe'; 
import { HighligthDirective } from './directives/highligth/highligth.directive';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CartComponent } from './components/cart/cart.component';

import { MaterialModule } from '../material/material.module';
import { ProdCountPipe } from './pipes/prodCount/prod-count.pipe';
import { ReversePipePipe } from './pipes/reverse/reverse-pipe.pipe';



@NgModule({
  declarations: [
    ExponentialPipe,
    HighligthDirective,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ProdCountPipe,
    ReversePipePipe,

    
  ],
  exports: [
    ExponentialPipe,
    HighligthDirective,
    HeaderComponent,
    FooterComponent,
    CartComponent,
    ProdCountPipe,
    ReversePipePipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
