import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth/auth.service';

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
    private router: Router,
    private authService: AuthService
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(){
    this.formCreateUser = this.formBuilder.group({
      nameInput: ['',[Validators.required]],
      emailInput: ['', [Validators.required, Validators.email, Validators.minLength(11)]],
      password: ['',[Validators.required]],
      password2: ['',[Validators.required]]
    });    
  }

  userValidator(event: Event){
    event.preventDefault();
    var pass = this.formCreateUser.value.password;
    var pass2 = this.formCreateUser.value.password2;
    var email = this.formCreateUser.value.emailInput;
    var name = this.formCreateUser.value.nameInput;


    if(this.formCreateUser.valid 
      && name.length > 3
      && pass.length >= 6
      && pass === pass2
      )
    {
      console.log(email, pass)
      this.authService.createUser(email, pass)
        .then(() => {
          this.mensajeFinalizacion = "Usuario registrado con éxito";
          setTimeout(() => {
                this.router.navigate(['/loggin']);
            }, 2000);
    });
      
    }else if (pass != pass2){
      this.mensajeFinalizacion = "El password y la confiramción del pasword no coinciden";
    }else if (pass.length < 6){
      this.mensajeFinalizacion = "El password debe ser mínimo de 6 caracteres";
    }
    else{
      this.mensajeFinalizacion = "Error con el registro, su nombre debe superar los 3 caracteres"; 
    }

  }


}
