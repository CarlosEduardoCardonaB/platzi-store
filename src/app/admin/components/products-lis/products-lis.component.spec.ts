import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsLisComponent } from './products-lis.component';

describe('ProductsLisComponent', () => {
  let component: ProductsLisComponent;
  let fixture: ComponentFixture<ProductsLisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsLisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsLisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
