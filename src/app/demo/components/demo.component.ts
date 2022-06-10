import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'platzi-store';

  items = ['Eduardo', 'Juanita', 'Sixtina', 'Mirry'];

  power = 10;

  objeto = {};

  

  addNombre(){
    this.items.push('nuevo item');
  }

  borrarNombre(index: number){
    this.items.splice(index, 1);
  }

}
