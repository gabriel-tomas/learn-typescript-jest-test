import { Cart } from './cart';
import { Discount } from './contracts/discount';
import ItemCart from './contracts/ItemCart';

const createSut = () => {
  const discountMock = createDiscountMock();
  const sut = new Cart(discountMock);
  return { sut, discountMock };
};

const createDiscountMock = () => {
  class DiscountMock extends Discount {
    protected readonly discount = 0;
  }
  return new DiscountMock();
};

const createItemCartMock = (name: string, price: number) => {
  class Product implements ItemCart {
    constructor(
      public name: string,
      public price: number,
    ) {}
  }

  return new Product(name, price);
};

const createSutWithProducts = () => {
  const { sut, discountMock } = createSut();
  sut.addItems(createItemCartMock('Camiseta', 52.23));
  sut.addItems(createItemCartMock('Calça', 52.23));
  return { sut, discountMock };
};

describe('Cart', () => {
  it('should be an empty cart when no products are added', () => {
    const { sut } = createSut();
    expect(sut.isEmpty()).toBe(true);
  });

  describe('method: addItems', () => {
    it('should add items to the cart', () => {
      const { sut } = createSutWithProducts();
      expect(sut.items.length).toBe(2);
    });
  });

  describe('method: removeItem', () => {
    it('should remove items that are added to cart (2 products added)', () => {
      const { sut } = createSutWithProducts();
      sut.removeItem(1);
      expect(sut.items.length).toBe(1);
      expect(sut.isEmpty()).toBe(false);
      sut.removeItem(0);
      expect(sut.items.length).toBe(0);
      expect(sut.isEmpty()).toBe(true);
    });
  });

  describe('method: total', () => {
    it('should return cart items total price with two items of 52.23 added', () => {
      const { sut } = createSutWithProducts();
      expect(sut.total()).toBeCloseTo(104.46);
    });
  });

  describe('method: totalWithDiscount', () => {
    it('should return cart items total price with two items of 52.23 added with 0% discount', () => {
      const { sut } = createSutWithProducts();
      expect(sut.total()).toBeCloseTo(104.46);
    });
    it('should call discount.applyDiscount once when totalWithDiscount is called', () => {
      const { sut, discountMock } = createSutWithProducts();
      const discountMockSpy = jest.spyOn(discountMock, 'applyDiscount');
      sut.totalWithDiscount();
      expect(discountMockSpy).toHaveBeenCalledTimes(1);
    });
    it('should call discount.applyDiscount with total price when totalWithDiscount is called', () => {
      const { sut, discountMock } = createSutWithProducts();
      const discountMockSpy = jest.spyOn(discountMock, 'applyDiscount');
      sut.totalWithDiscount();
      expect(discountMockSpy).toHaveBeenCalledWith(sut.total());
    });
  });

  describe('method: clear', () => {
    it('should clear all products that are added (2 products added)', () => {
      const { sut } = createSutWithProducts();
      expect(sut.items.length).toBe(2);
      expect(sut.isEmpty()).toBe(false);
      sut.clear();
      expect(sut.items.length).toBe(0);
      expect(sut.isEmpty()).toBe(true);
    });
  });
});
