import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailComponent } from './product-detail.component';
import { ProductService } from 'src/app/services/product.service';
import { Observable, of } from 'rxjs';
import { IProduct } from 'src/app/interfaces/iproduct';

class MockProductService {
  getData(id:number):Observable<IProduct>{
    return of({
      id : 1,
      name : "al",
      year: 21,
      price: 21,
      imageUrl: "asfmas",
      added:"dflsdf",
      description:"afa",
      productCategory:[]
    })
  };
}

describe('ProductDetailComponent', () => {
  let component: ProductDetailComponent;
  let fixture: ComponentFixture<ProductDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ProductDetailComponent
      ],
      providers: [
        {provide: ProductService, useClass: MockProductService} 
      ]})
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("should get correct product",async(() => {
      fixture.detectChanges();
      component.ngOnInit();
      fixture.whenStable().then(() => {
        
        expect(component.product.id).toEqual(1);
      });
    }) 
  );
  
  it(`should have as addedProduct false`, () => {
    const fixture = TestBed.createComponent(ProductDetailComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.addedProduct).toEqual(false);
  });

  it(`should have addedProduct as true after toggleAddedProduct have run`, () => {
    const fixture = TestBed.createComponent(ProductDetailComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.addedProduct).toEqual(false);

    app.toggleAddedProduct();

    expect(app.addedProduct).toEqual(true);
  });
});
