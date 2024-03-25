/* eslint-disable @typescript-eslint/no-unused-vars */
import { MessagingProtocol } from '../services/contracts/messagingProtocol';
import { PersistencyProtocol } from '../services/contracts/persistencyProtocol';
import ItemCart from './contracts/ItemCart';
import { CartProtocol } from './contracts/cartProtocol';
import { CustomerOrder } from './contracts/customerProtocol';
import { Order } from './order';

class Cart implements CartProtocol {
  private readonly _items: ItemCart[] = [];

  get items(): readonly ItemCart[] {
    return this._items;
  }
  addItems(...items: ItemCart[]): void {}
  removeItem(index: number): void {}
  total(): number {
    return 0;
  }
  totalWithDiscount(): number {
    return 0;
  }
  isEmpty(): boolean {
    return false;
  }
  clear(): void {}
}

class MessagingMock implements MessagingProtocol {
  sendMessage(): void {}
}

class PersistencyMock implements PersistencyProtocol {
  saveOrder(): void {}
}

class CustomerMock implements CustomerOrder {
  getName(): string {
    return '';
  }
  getIDN(): string {
    return '';
  }
}

const createSut = () => {
  const cartMock = new Cart();
  const messagingMock = new MessagingMock();
  const persistencyMock = new PersistencyMock();
  const customerMock = new CustomerMock();
  const sut = new Order(cartMock, messagingMock, persistencyMock, customerMock);
  return {
    sut,
    cartMock,
    messagingMock,
    persistencyMock,
    customerMock,
  };
};

describe('Order', () => {
  describe('property: orderStatus', () => {
    it('should have open orderStatus in the start', () => {
      const { sut } = createSut();
      expect(sut.orderStatus).toBe('open');
    });
    it('should close if checkout', () => {
      const { sut, cartMock } = createSut();
      jest.spyOn(cartMock, 'isEmpty').mockReturnValue(false);
      sut.checkout();
      expect(sut.orderStatus).toBe('closed');
    });
  });

  describe('method: checkout', () => {
    it('should not checkout if cart is empty', () => {
      const { sut, cartMock } = createSut();
      const cartMockSpy = jest.spyOn(cartMock, 'isEmpty').mockReturnValue(true);
      sut.checkout();
      expect(cartMockSpy).toHaveBeenCalledTimes(1);
      expect(sut.orderStatus).toBe('open');
    });
    it('should checkout if cart is not empty', () => {
      const { sut, cartMock } = createSut();
      const cartMockSpy = jest
        .spyOn(cartMock, 'isEmpty')
        .mockReturnValue(false);
      sut.checkout();
      expect(cartMockSpy).toHaveBeenCalledTimes(1);
      expect(sut.orderStatus).toBe('closed');
    });
    it('should send an message to customer', () => {
      const { sut, messagingMock } = createSut();
      const messagingMockSpy = jest.spyOn(messagingMock, 'sendMessage');
      sut.checkout();
      expect(messagingMockSpy).toHaveBeenCalledTimes(1);
    });
    it('should save order when checkout', () => {
      const { sut, persistencyMock } = createSut();
      const persistencyMockSpy = jest.spyOn(persistencyMock, 'saveOrder');
      sut.checkout();
      expect(persistencyMockSpy).toHaveBeenCalledTimes(1);
    });
    it('should clear cart when checkout', () => {
      const { sut, cartMock } = createSut();
      const cartMockSpy = jest.spyOn(cartMock, 'clear');
      sut.checkout();
      expect(cartMockSpy).toHaveBeenCalledTimes(1);
    });
  });
});
