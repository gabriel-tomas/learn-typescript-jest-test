import OrderStatus from './OrderStatus';

export interface OrderProtocol {
  orderStatus: OrderStatus;

  checkout(): void;
}
