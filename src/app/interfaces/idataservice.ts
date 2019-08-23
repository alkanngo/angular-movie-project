import {
  Observable
} from 'rxjs';
import {
  IProduct
} from './iproduct';
import {
  IOrder
} from './iorder';
import {
  IOrderItem
} from './iorderitem';

export interface IDataService {
  getDataList(): Observable < IProduct[] >
    getData(id: number): Observable < IProduct >

    createOrder(orderRows: IOrderItem[], totalPrice: number, paymentMethod: string, companyId: number, createdBy: string, created: string, status: number):Observable < IOrder > ;

}
