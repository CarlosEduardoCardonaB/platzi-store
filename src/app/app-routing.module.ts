import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
//import { HomeComponent } from './home/home.component'; //este se borra por que la ruta queda en la carpeta home/home-routing.module.ts
//import { ProductsComponent } from './products/products.component';
//import { ContactComponent } from './contact/contact.component';
//import { DemoComponent } from './demo/demo.component';
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { ProductDetaliComponent } from './product-detali/product-detali.component';
import { LayoutComponent } from './layout/layout.component'

import { AdminGuard } from './admin.guard'; //guardian para validar ingreso a rutas dependiendo del rol por ej

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
        // component: HomeComponent // asi se cargaba el componente sin lazy loading
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule) //Ahora asi se carga el componente luego de modularizar con lazy loading

      },
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductModule)
        //component: ProductsComponent
      },
      // {
      //   path: 'products/:id',
      //   component: ProductDetaliComponent
      // },
      {
        path: 'contact',
        loadChildren: () => import('./contact/contact.module').then(m => m.contactModule)
        //component: ContactComponent
      },
      {
        path: 'demo',
        canActivate: [AdminGuard], //Este es el guardían en admin.guards.ts
        loadChildren: () => import('./demo/demo.module').then(m => m.DemoModule)
        // loadChildren: () => import('./demo/demo.module').then(m => m.demoComponentModule)
        //component: DemoComponent
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
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '**',
    loadChildren: () => import('./page-not-found/page-not-found.module').then(m => m.pageNotFoundModule)
    //component: PageNotFoundComponent    
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
