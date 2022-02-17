import { Component, Input, Output, EventEmitter } from "@angular/core";
import { Product } from "../product.module";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html'
})
export class ProductComponent {
    
    //Este metodo de aqui abajo funciona sin el import de Input. O sea asingando valores quemados.
    // product: Product = {
    //     id: '1',
    //     image: 'assets/images/camiseta.png',
    //     title: 'Camiseta',
    //     price: 8000,
    //     description: 'Camiseta tipo Polo'
    // }
    constructor(){
        this.product = Input();
    }

    @Input() product: Product;
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    addCart(){
        console.log("Producto añadido al carrito");
        this.productClicked.emit(this.product.id);
    }

}