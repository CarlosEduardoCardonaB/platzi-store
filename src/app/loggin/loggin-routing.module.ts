import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogginComponent } from './components/loggin.component';

const routes: Routes = [
    {
        path: '',
        component: LogginComponent
      }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports:[
        RouterModule
    ]
})

export class logginRoutingMdule {

}