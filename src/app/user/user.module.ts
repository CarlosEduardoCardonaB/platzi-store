import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UserComponent } from './components/create-user/user.component';

import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';
import { userRoutingMdule } from './user-routing.module';


@NgModule({
    declarations: [
        UserComponent,
    ],
    imports: [
        CommonModule,
        userRoutingMdule,
        MaterialModule,
        ReactiveFormsModule,
        SharedModule
    ]
})
export class userMoudule{}