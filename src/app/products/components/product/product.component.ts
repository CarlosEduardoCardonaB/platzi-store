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
//import { Product } from "../product.module";
import { Product } from "src/app/product.module";
import { CartService } from "src/app/core/services/cart/cart.service";

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
    constructor(
        private cartService: CartService
    ){
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

    @Input() product!: Product; //hay otro componente enviandole datos dinamicamente a este componente. O sea que recibe otra propiedad desde otro componenete
    //en el ngIf se itera esta variable y no toca entrar a cada propiedad. Recibir datos de un componente padre a hijo
    @Output() productClicked: EventEmitter<any> = new EventEmitter(); //Para enviar datos a un compnente padre de hijo

    today = new Date();

    addCart(){
        //console.log("Producto añadido al carrito");
        //this.productClicked.emit(this.product.id);
        this.cartService.addCart(this.product);
    }

}