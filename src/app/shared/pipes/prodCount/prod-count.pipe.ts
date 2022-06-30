import { Pipe, PipeTransform } from '@angular/core';
import { Product, groupedProduct } from 'src/app/product.module';

type ProductGroupType = groupedProduct;
type AttributeOptions = 'id' | 'title' | 'price' | 'description';

@Pipe({
  name: 'prodCount'
})
export class ProdCountPipe implements PipeTransform {

  transform(value: Product[], attr: AttributeOptions): ProductGroupType[] {    
    
    const products: groupedProduct[] = value.reduce(
      (list: groupedProduct[], product) => 
      { 
        const productListIndex: number = list.findIndex((p) => p[attr] === product[attr]);

        if(productListIndex > -1){
          list[productListIndex].count +=1;
        }
        else {
          list.push({...product, count: 1});
        }
        return list;
      },
  []
  );

  return products;
      
  }

}
