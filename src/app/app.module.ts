import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product.component';
import { CartComponent } from './cart/cart.component';
import { ExponentialPipe } from './exponential.pipe';
import { HighligthDirective } from './highligth.directive';
//import { HomeComponent } from './home/home.component';//Este componente se migra hacia el /home/ después de implementar el lazy loading
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';
import { DemoComponent } from './demo/demo.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//import { BannerComponent } from './banner/banner.component'; //Este componente se migra hacia el home/components/banner después de implementar el lazy loading
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProductDetaliComponent } from './product-detali/product-detali.component';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    ExponentialPipe,
    HighligthDirective,
    //HomeComponent, //Este componente se migra hacia el /home después de implementar el lazy loading
    ProductsComponent,
    ContactComponent,
    DemoComponent,
    HeaderComponent,
    FooterComponent,
    //BannerComponent, //Este componente se migra hacia el home/components/banner después de implementar el lazy loading
    PageNotFoundComponent,
    ProductDetaliComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
