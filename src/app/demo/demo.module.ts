import { NgModule } from "@angular/core";
//import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DemoComponent } from "./components/demo.component";
import { SharedModule } from "../shared/shared.module";
import { demoRoutingModule } from "./demo-routign.module";
import { CoreModule } from "../core/core.module";


@NgModule({
    declarations: [
        DemoComponent        
    ],
    imports: [
        SharedModule,
        //CommonModule,
        BrowserModule,
        FormsModule,
        demoRoutingModule,
        CoreModule
    ]
})
export class demoComponentModule{}