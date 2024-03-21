import OrderStatus from './contracts/OrderStatus';
import { OrderProtocol } from './contracts/orderProtocol';
import { CartProtocol } from './contracts/cartProtocol';
import { CustomerOrder } from './contracts/customerProtocol';
import { MessagingProtocol } from '../services/contracts/messagingProtocol';
import { PersistencyProtocol } from '../services/contracts/persistencyProtocol';

export class Order implements OrderProtocol {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: CartProtocol,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.error('Cart is empty');
      return;
    }

    this._orderStatus = 'closed';
    this.messaging.sendMessage('Pedido finalizado');
    this.persistency.saveOrder();
    this.cart.clear();
    console.log('cliente: ' + this.customer.getName());
    console.log(this.customer.getIDN());
  }
}
