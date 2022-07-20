import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from 'src/app/core/services/products/products.service';
import { MyValidators } from '../../../utils/validators';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit{
  form!: FormGroup;
  id!: string;

  constructor(
    private formBuilder: FormBuilder,
    private productServices: ProductsService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activeRoute.params.subscribe((params: Params) => {
      this.id = params['id'];
      this.productServices.getProduct(this.id)
        .subscribe(product => {
          this.form.patchValue(product); //Se llena el formulario con el objeto producto.
          //Otra forma de llenar la data es asi como se muestra de la siguiente manera:
          // this.form.patchValue({
          //   id: product.id,
          //   title: product.title,
          //   price: product.price,
          //   description: product.description
          // })


        })
    });
  }

  private buildForm(){ //Todas estas validaciones se ven en el html como .hasError()
    this.form = this.formBuilder.group({
      title: ['',[Validators.required]],
      price: ['',[Validators.required, MyValidators.isPriceValid]], //La valdidación de MyValidators.isPriceValid está en utils/validators.ts y en el html esta en .hasError('price-invalid')
      Image: '',
      description: ['',[Validators.required]]
    });
  }

  editProduct(event: Event){
    event.preventDefault();//Este comando se usa para prevenir que el envio del formulario recargue la página
    //console.log(this.form.value);
    if(this.form.valid)
    {
      const product = this.form.value;
      this.productServices.updateProduct(this.id, product)
      .subscribe((newProduct) => {
        console.log(newProduct);
        this.router.navigate(['./admin/listTable']);
      });
        //this.router.navigate(['./admin/listTable']);
        //
      //   setTimeout(() => {
      //     this.router.navigate(['./admin/listTable']);
      // }, 1000);
      //
    }
  }

  get priceField(){
    return this.form.get('price');
  }


}
