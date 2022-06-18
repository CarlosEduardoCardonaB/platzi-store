export const environment = {
  production: true,
  urlApi: "https://platzi-store-stag.herokuapp.com/", //Esta URL debe apuntar al servicio de pruebas, en este caso esta no sirve
  //Para el ambiente de pruebas se tiene que crear este archivo y luego ir al archivo angular.json
  //copiar el objeto dentro de configuration "production" pegarlo debajo y cambiar el nombre a "stag" de este objeto. En este 
  //Ejemplo quedó en la línea 63
  //Y luego copiar el objeto "production"dentro del objeto serve del mismo angular.json y cambiar el nombre del objeto a "stag"
  //Para compilar el ambiente stag lo hacemos con el siguiente comando: ng serve -c=stag
};
