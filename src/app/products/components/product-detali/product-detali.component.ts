import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
//import { ProductsService } from './../core/services/products/products.service';
import { ProductsService } from 'src/app/core/services/products/products.service';
import { Product } from 'src/app/product.module'; 

@Component({
  selector: 'app-product-detali',
  templateUrl: './product-detali.component.html',
  styleUrls: ['./product-detali.component.scss']
})
export class ProductDetaliComponent implements OnInit {

  //Declaración de la variable global para poder mostrarla en el "product-detali.component.html"
  productDetail!: Product; 

  constructor( 
    private route: ActivatedRoute, //Este se usa para obtener el id de un producto
    private productsService: ProductsService
    ) { 
    
  }

  ngOnInit(){
    //Estas líneas se utilizaban cuando estaban los datos quemados en el products.service.ts
    this.route.params.subscribe((params: Params) => {  
      console.log(params);    
      const id = params['id'];
      this.fetchProduct(id);

      //this.productDetail = this.productsService.getProduct(id)!;      
      //console.log(this.productDetail);    
    });  
    
  }

  fetchProduct(id: string){
    this.productsService.getProduct(id).subscribe(productDetailWs => this.productDetail = productDetailWs);
  };

  createProduct(){
    const prodNew: Product = {
      id: "93780",
      title: "Alambrito para amarrar el pan",
      price: 23400,
      description: "Amarra la bolsita para que no se dañe el pan",
      image: "https://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/cual-es-el-significado-de-lo-alambres-del-pan-colores.jpg"
    };
      this.productsService.createProduct(prodNew)
      .subscribe(productN =>{console.log(productN)});
  }

  updateProduct(){
    const updateProd: Partial<Product> = {
      description: "Amarra la bolsita para que no se dañe el pan y permanezca fresco",      
    };
      this.productsService.updateProduct("93780", updateProd)
      .subscribe(productUpdate =>{console.log(productUpdate)});
  }

  deleteProduct(){
    this.productsService.delteProduct("93780").subscribe(rta => console.log(rta));
  }

}
