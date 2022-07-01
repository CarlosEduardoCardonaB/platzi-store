import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-loggin',
  templateUrl: './loggin.component.html',
  styleUrls: ['./loggin.component.scss']
})
export class LogginComponent implements OnInit {

  formLoggin!: FormGroup;
  hide = true;
  errorloggin = "";
  //email = new FormControl('', [Validators.required, Validators.email]);


  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private auth: AuthService
  ) {

    this.buildForm();

   }

  ngOnInit(): void {
  }

  private buildForm(){ //Todas estas validaciones se ven en el html como .hasError()
    this.formLoggin = this.formBuilder.group({
      emailInput: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  

  logginValidator(event: Event){
    event.preventDefault();//Este comando se usa para prevenir que el envio del formulario recargue la página
    //console.log(this.form.value);
    var email = this.formLoggin.value.emailInput;
    var pass = this.formLoggin.value.password;
    if(this.formLoggin.valid)
    {

      this.auth.login(email, pass).then(() => {
        this.router.navigate(['/admin'])
      })
      .catch(() => {
        this.errorloggin = 'Credenciales incorrectas';
      });
      // const loggin = this.formLoggin.value;
      // console.log(loggin)};      
      // if(this.formLoggin.value.emailInput === "caeca425@gmail.com" && this.formLoggin.value.password === "1234")
      // {
      //   this.errorloggin = '';
      //   this.router.navigate(['./home']);
      // }
      // else{
      //   this.errorloggin = 'Credenciales incorrectas';
      // }     
    }
  }
}