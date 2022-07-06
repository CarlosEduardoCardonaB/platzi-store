import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize, Observable } from 'rxjs';

import { ProductsService } from 'src/app/core/services/products/products.service';
import { MyValidators } from '../../../utils/validators';
import { takeLast } from 'rxjs';

@Component({
  selector: 'app-form-create',
  templateUrl: './form-create.component.html',
  styleUrls: ['./form-create.component.scss']
})
export class FormCreateComponent implements OnInit {

  form!: FormGroup;
  image$!: Observable<any>;

  constructor(
    private formBuilder: FormBuilder,
    private productServices: ProductsService,
    private router: Router,
    private angularFireStorage: AngularFireStorage
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
      image: [''],
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
        this.router.navigate(['./admin/listTable']);
        //console.log(newProduct)
      });
        
    }
  }

  get priceField(){
    return this.form.get('price');
  }

  upLoadFile(event: Event){
    const target = event.target as HTMLInputElement;
    const file: File = (target.files as FileList)[0];
    const name = file.name;//'image.jpg';
    const fileRef = this.angularFireStorage.ref(name);
    const task = this.angularFireStorage.upload(name, file);

    task.snapshotChanges() //con este observamos cuando finaliza la subida de la imagen
      .pipe( 
        finalize(() => {
          this.image$ = fileRef.getDownloadURL();
          this.image$.subscribe(url =>{
            this.form.get('image')?.setValue(url);
          })
        }) //Procesamos con un pipe que es un observable, asi me notifica cuando finaliza la subida de la imagen
      ).subscribe();
    //console.log(file);
  }

}
