import {
  Injectable
} from '@angular/core';
import {
  IDataService
} from '../interfaces/idataservice';
import {
  HttpClient
} from '@angular/common/http';
import {
  Observable
} from 'rxjs';
import {
  IProduct
} from '../interfaces/iproduct';
import {
  IOrder
} from '../interfaces/iorder';
import {
  IOrderItem
} from '../interfaces/iorderitem';
import { IOrderSum } from '../interfaces/iordersum';

@Injectable({
  providedIn: 'root'
})
export class ProductService implements IDataService {

  constructor(private http: HttpClient) {}

  public static url = "https://medieinstitutet-wie-products.azurewebsites.net/api/products";

  public static postUrl = "https://medieinstitutet-wie-products.azurewebsites.net/api/orders";

  getDataList(): Observable < IProduct[] > {
    return this.http.get < IProduct[] > (ProductService.url);
  }

  getData(id: number): Observable < IProduct > {
    return this.http.get < IProduct > (ProductService.url + "/" + id);
  }

  createOrder(orderRow: IOrderItem[], totalPrice: number, paymentMethod: string, companyId: number,
      createdBy: string, created: string, status: number):
    Observable < IOrder > {
      const body: IOrder = {
        id: 0,
        companyId,
        paymentMethod,
        totalPrice,
        orderRow,
        createdBy,
        created,
        status
      };
      console.log('POST' + JSON.stringify(body));
      return this.http.post < IOrder > (ProductService.postUrl, body);
    }

    getAllOrders(): Observable<IOrderSum[]> {
      return this.http.get<IOrderSum[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders?companyId=7');
    }
  
    deleteOrder(id: number): Observable<IOrderSum[]> {
      console.log('deleting order ' + id);
      return this.http.delete<IOrderSum[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders/' + id);
    }

}
