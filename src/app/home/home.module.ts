import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './components/home/home.component';
import { HomeRoutingMdule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';


@NgModule({
    declarations: [
        BannerComponent,
        HomeComponent        
    ],
    imports:[
        HomeRoutingMdule,
        CommonModule,
        SharedModule,
        MaterialModule,
        ]
})

export class HomeModule {   


}