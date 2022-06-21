import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductsService } from 'src/app/core/services/products/products.service';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.scss']
})
export class FormCreateComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private productServices: ProductsService,
    private router: Router
  ) { 
    this.buildForm();
  }

  ngOnInit(): void {
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['',[Validators.required]],
      title: ['',[Validators.required]],
      price: ['',[Validators.required]],
      Image: '',
      description: ['',[Validators.required]]
    });
  }

  saveProduct(event: Event){
    event.preventDefault();//Este comando se usa para prevenir que el envio del formulario recargue la página
    //console.log(this.form.value);
    if(this.form.valid)
    {
      const product = this.form.value;
      this.productServices.createProduct(product)
      .subscribe((newProduct) => {
        console.log(newProduct)});
        this.router.navigate(['./admin/listTable']);
    }
    

  }

}
