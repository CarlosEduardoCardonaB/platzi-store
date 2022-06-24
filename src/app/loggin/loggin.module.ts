import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { LogginComponent } from './components/loggin.component';

import { MaterialModule } from '../material/material.module';
import { logginRoutingMdule } from './loggin-routing.module';


@NgModule({
    declarations: [
        LogginComponent,
    ],
    imports: [
        CommonModule,
        logginRoutingMdule,
        MaterialModule,
        ReactiveFormsModule
    ]
})
export class logginMoudule{}