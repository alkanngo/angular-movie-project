import {
  TestBed
} from '@angular/core/testing';
import {
  HttpClientTestingModule, HttpTestingController
} from "@angular/common/http/testing"

import {
  ProductService
} from './product.service';
import {
  HttpClient
} from '@angular/common/http';
import { IProduct } from '../interfaces/iproduct';

describe('ProductService', () => {
  let httpClientMock: HttpClient;
  let httpControlerMock: HttpTestingController;
  let service : ProductService;


  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [HttpClientTestingModule]

      }),
      httpClientMock = TestBed.get(HttpClient)
      httpControlerMock = TestBed.get(HttpTestingController)
      service = TestBed.get(ProductService)
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("should handle an empty list", () => {
    service.getDataList().subscribe( data => {
      expect(data).toEqual([], "expected response to be an empty list");
    }
      ,fail);

      const request = httpControlerMock.expectOne(ProductService.url);

      const product: IProduct = {
        id : 1,
        name : "al",
        year: 21,
        price: 21,
        imageUrl: "asfmas",
        added:"dflsdf",
        description:"afa",
        productCategory:[]
      };

      request.flush([]);
  })

  it("should handle a list", () => {
    service.getDataList().subscribe( data => {
      expect(data.length).toEqual(4, "expected response to be a list");
    }
      ,fail);

      const request = httpControlerMock.expectOne(ProductService.url);

      const product: IProduct = {
        id : 1,
        name : "al",
        year: 21,
        price: 21,
        imageUrl: "asfmas",
        added:"dflsdf",
        description:"afa",
        productCategory:[]
      };

      request.flush([product, product, product, product]);
  })

  it("should handle getting a product", () => {
    const product: IProduct = {
      id : 1,
      name : "al",
      year: 21,
      price: 21,
      imageUrl: "asfmas",
      added:"dflsdf",
      description:"afa",
      productCategory:[]
    };

    const id = 1;
    service.getData(id).subscribe( data => {
      expect(data).toEqual(product, "expected response to be a list");
    }
      ,fail);

      const request = httpControlerMock.expectOne(ProductService.url + "/" + id);


      request.flush(product);
  })


});
