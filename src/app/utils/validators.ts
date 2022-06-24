import { AbstractControl } from "@angular/forms";

export class MyValidators {

    static isPriceValid(control: AbstractControl) {
        const value = control.value;
        console.log(value);
        if (value > 10000) {
            return {price_invalid: true} //Esta validación esta implementada en el HTML en /admin/components/form-create/form-create.component.html
        }
        else {
            return null;
        }        
    }

}