import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ContactComponent } from "./components/contact.component";
import { contactRoutingModule } from "./contact-routing.module";
import { SharedModule } from "../shared/shared.module";

@NgModule({
    declarations: [
        ContactComponent
    ],
    imports: [
        SharedModule,
        CommonModule,
        contactRoutingModule
    ]

})
export class contactModule{}