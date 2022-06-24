import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ProductsService } from 'src/app/core/services/products/products.service';
import { MyValidators } from '../../../utils/validators';

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

  private buildForm(){ //Todas estas validaciones se ven en el html como .hasError()
    this.form = this.formBuilder.group({
      id: ['',[Validators.required]],
      title: ['',[Validators.required]],
      price: ['',[Validators.required, MyValidators.isPriceValid]], //La valdidación de MyValidators.isPriceValid está en utils/validators.ts y en el html esta en .hasError('price-invalid')
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

  get priceField(){
    return this.form.get('price');
  }

}
