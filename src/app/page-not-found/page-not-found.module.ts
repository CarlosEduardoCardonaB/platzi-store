import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from "./components/page-not-found.component";
import { routerPageNotFound } from "./page-not-found.routing.module";
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations: [
        PageNotFoundComponent
    ],
    imports: [
        CommonModule,
        routerPageNotFound,
        SharedModule
    ]

})
export class pageNotFoundModule{}