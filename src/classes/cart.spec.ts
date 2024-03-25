import { Cart } from './cart';
import { Discount } from './contracts/discount';

describe('Cart', () => {
  it('should be an empty cart when no products are added', () => {
    class DiscountMock extends Discount {
      protected readonly discount = 0;
    }

    const cart = new Cart(new DiscountMock());
    expect(cart.isEmpty()).toBe(true);
  });
});
