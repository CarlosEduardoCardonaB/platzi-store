import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  emailField!: FormControl;
  constructor() {
    this.emailField = new FormControl('', [
      //Con estas validaciones se toman decisiones en el HTML con {{ emailField.valid}} {{emailField.invalid}}
      Validators.required,
      Validators.email,
      // Validators.minLength(4), 
      // Validators.maxLength(10)      
    ]);
    //De esta manera se escucha un cambio dinámicamente en un FORMCONTROL. Solo es para ver por consola lo que se escribe
    this.emailField.valueChanges
    .subscribe(value => {console.log(value)});
   }

  ngOnInit(): void {
  }

  sendMail(){
    if(this.emailField.valid)
    {
      console.log("Estamos almacenando el correo: ", this.emailField.value, " para ser contactado por nuestra área")
    }
  }

}
