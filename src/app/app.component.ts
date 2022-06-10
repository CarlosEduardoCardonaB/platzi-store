import { Component } from '@angular/core';
import {Product} from './product.module';


@Component({
  selector: 'app-root',
  //templateUrl: './app.component.html',   //Esta manera es llamando a un archivo, pero como ese archivo solo va a tener una linea lo podemos hacer de la siguiente manera:
  template: '<router-outlet></router-outlet>', //De esta manera reemplazamos la línea de arriba escribiendo directamente el HTML de una sola línea. 
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
}
