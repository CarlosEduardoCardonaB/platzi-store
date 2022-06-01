import { 
    Component, 
    Input, 
    Output, 
    EventEmitter, 
    OnChanges, 
    OnInit, 
    SimpleChanges, 
    DoCheck, 
    OnDestroy 
} from "@angular/core";
import { Product } from "../product.module";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})

//Declaración con OnChanges y sin DoCheck
//export class ProductComponent implements OnInit, OnChanges {

//Declaración con DoCheck y sin OnChanges para que no choquen  
export class ProductComponent implements OnInit, DoCheck, OnDestroy {
    
    //Este metodo de aqui abajo funciona sin el import de Input. O sea asingando valores quemados.
    // product: Product = {
    //     id: '1',
    //     image: 'assets/images/camiseta.png',
    //     title: 'Camiseta',
    //     price: 8000,
    //     description: 'Camiseta tipo Polo'
    // }
    constructor(){
        //this.product = Input();
        console.log('constructor');
    }

    // ngOnChanges(changes: SimpleChanges){
    //     console.log('ngOnChanges');
    //     console.log(changes);
    // }

    
    ngOnInit(){
        console.log('ngOnInit');
    }

    ngDoCheck(){
        console.log('ngDoCheck');
    }

    ngOnDestroy(){
        console.log('onDestroy');
    }

    @Input() product!: Product; //Aqui cargo los productos desde otro componente. Desde app/products/products.component.ts
    @Output() productClicked: EventEmitter<any> = new EventEmitter();

    today = new Date();

    addCart(){
        console.log("Producto añadido al carrito");
        this.productClicked.emit(this.product.id);
    }

}