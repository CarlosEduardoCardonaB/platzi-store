import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  formCreateUser!: FormGroup;
  hide = true;
  mensajeFinalizacion = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(){
    this.formCreateUser = this.formBuilder.group({
      nameInput: ['',[Validators.required]],
      emailInput: ['', [Validators.required, Validators.email]],
      password: ['',[Validators.required]],
      password2: ['',[Validators.required]]
    });    
  }

  userValidator(event: Event){
    event.preventDefault();

    if(this.formCreateUser.valid 
      && this.formCreateUser.value.nameInput.length > 3 
      && this.formCreateUser.value.password === this.formCreateUser.value.password2
      )
    {
      this.mensajeFinalizacion = "Usuario registrado con éxito";
    }
    else if (this.formCreateUser.value.password != this.formCreateUser.value.password2){
      this.mensajeFinalizacion = "El password y la confiramción del pasword no coinciden";
    }
    else{
      this.mensajeFinalizacion = "Error con el registro, su nombre debe superar los 3 caracteres"; 
    }

  }


}
