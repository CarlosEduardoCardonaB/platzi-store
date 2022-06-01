import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponential'
})
export class ExponentialPipe implements PipeTransform {

  //Estos PIPE basícamete lo que hacen es transformar los datos, por eso tenemos el siguiente metodo de transform
  //metodo creado por defecto cuando usamos el comando "ng g p exponential --module app" y se agrega automáticamente al app.module
  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: number): unknown {
    return Math.pow(value, 2);
  }

}
