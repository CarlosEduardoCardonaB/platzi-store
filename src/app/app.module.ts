import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //Esta libreria me ayuda con los pipe a usar
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
//import { ExponentialPipe } from './exponential.pipe'; //Este después de la modularización es llevado al shared.module.ts
//import { HighligthDirective } from './highligth.directive'; //Este después de la modularización es llevado al shared.module.ts
//import { HomeComponent } from './home/home.component';//Este componente se migra hacia el /home/ después de implementar el lazy loading
//import { ProductsComponent } from './products/products.component'; //igual a los de arriba
//import { ContactComponent } from './contact/contact.component';
//import { DemoComponent } from './demo/demo.component';
//import { HeaderComponent } from './header/header.component';//Este después de la modularización es llevado al shared.module.ts
//import { FooterComponent } from './footer/footer.component';//Este después de la modularización es llevado al shared.module.ts
//import { BannerComponent } from './banner/banner.component'; //Este componente se migra hacia el home/components/banner después de implementar el lazy loading
//import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
//import { ProductDetaliComponent } from './product-detali/product-detali.component';
import { LayoutComponent } from './layout/layout.component';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent,
    //ProductComponent,
    CartComponent,
    //ExponentialPipe, //Este después de la modularización es llevado al shared.module.ts
    //HighligthDirective, //Este después de la modularización es llevado al shared.module.ts
    //HomeComponent, //Este componente se migra hacia el /home después de implementar el lazy loading
    //ProductsComponent, //igual a los de arriba
    //ContactComponent,
    //DemoComponent,
    //HeaderComponent, //Este después de la modularización es llevado al shared.module.ts
    //FooterComponent, //Este después de la modularización es llevado al shared.module.ts
    //BannerComponent, //Este componente se migra hacia el home/components/banner después de implementar el lazy loading
    //PageNotFoundComponent,
    //ProductDetaliComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
