import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingMdule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent,        
    ],
    imports:[
        HomeRoutingMdule,
        CommonModule,
        SharedModule,
    ]
})

export class HomeModule {

}