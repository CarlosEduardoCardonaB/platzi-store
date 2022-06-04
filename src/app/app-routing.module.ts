import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetaliComponent } from './product-detali/product-detali.component';
import { LayoutComponent } from './layout/layout.component'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '', //Con esta directriz aseguramos que si no hay una url específica entonces nos lleva al home por defecto
        redirectTo: '/home',
        pathMatch: 'full' //Este indica que la url está completamente ingresada pero sin una ruta específica
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'products',
        component: ProductsComponent
      },
      {
        path: 'products/:id',
        component: ProductDetaliComponent
      },
      {
        path: 'contact',
        component: ContactComponent
      },
      {
        path: 'demo',
        component: DemoComponent
      },
    ]
  },

  //TODAS ESTAS RUTAS DE AQUI ABAJO SE INTRODUCEN EN EL CHILD DEL LAYOUT PARA QUE PUEDAN HEREDAR EL HEADER Y FOOTER PARA TODOS LOS HTML
  // {
  //   path: '', //Con esta directriz aseguramos que si no hay una url específica entonces nos lleva al home por defecto
  //   redirectTo: 'home',
  //   pathMatch: 'full' //Este indica que la url está completamente ingresada pero sin una ruta específica
  // },
  // {
  //   path: 'home',
  //   component: HomeComponent
  // },
  // {
  //   path: 'products',
  //   component: ProductsComponent
  // },
  // {
  //   path: 'products/:id',
  //   component: ProductDetaliComponent
  // },
  // {
  //   path: 'contact',
  //   component: ContactComponent
  // },
  // {
  //   path: 'demo',
  //   component: DemoComponent
  // },
  {
    path: '**',
    component: PageNotFoundComponent    
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
