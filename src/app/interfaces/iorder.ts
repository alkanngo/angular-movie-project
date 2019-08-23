import { IOrderItem } from './iorderitem';

export interface IOrder{
    id: Number;
    companyId : Number;
    created: String;
    createdBy: String;
    paymentMethod: String;
    totalPrice: Number;
    status: Number;
    orderRow: IOrderItem[];

}