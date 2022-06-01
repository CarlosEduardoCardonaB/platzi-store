import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighligth]'
})
export class HighligthDirective {
//este archivo de directivas se crea con el comando "ng g d highlight" y se agrega automaticamente en el app.module
  constructor(
    element: ElementRef
  ) { 
    //este me cambia el comportamiento del dom. Se hace como inyección de dependencias y se da estilo a determinadas clases en el home con el elemento nativo
    element.nativeElement.style.backgroundColor = 'blue';
  }

}
