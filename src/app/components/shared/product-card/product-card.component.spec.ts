import { ShortenProductNamePipe } from 'src/app/pipes/shorten-product-name.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCardComponent } from './product-card.component';

describe('ProductCardComponent', () => {
  let component: ProductCardComponent;
  let fixture: ComponentFixture<ProductCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        ProductCardComponent,
        ShortenProductNamePipe
      ],
    })
    .compileComponents();
  });

  afterEach(() => {
    fixture.destroy();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductCardComponent);
    component = fixture.componentInstance;
    component.product = {
      "id": 2,
      "name": "Apple Watch",
      "image": "http://localhost:8000/media/products/2022/06/14/apple-watch.jpg",
      "price": 900.00,
      "categoryId": 1,
      "category": "gadget"
    }
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have right product name', () => {
    expect(component.product.name)
      .toEqual("Apple Watch")
  })
});
