import { Discount } from './contracts/discount';

import {
  TenPercentDiscount,
  FiftyPercentDiscount,
  NoDiscount,
} from './discounts';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => jest.clearAllMocks());

  describe('TenPercentDiscount', () => {
    it('should apply 10% discount', () => {
      const sut = createSut(TenPercentDiscount);
      expect(sut.applyDiscount(23)).toBe(23 - 23 * 0.1);
    });
  });

  describe('FiftyPercentDiscount', () => {
    it('should apply 50% discount', () => {
      const sut = createSut(FiftyPercentDiscount);
      expect(sut.applyDiscount(23)).toBe(23 - 23 * 0.5);
    });
  });

  describe('NoDiscount', () => {
    it('should apply 0% discount', () => {
      const sut = createSut(NoDiscount);
      expect(sut.applyDiscount(23)).toBe(23 - 23 * 0);
    });
  });
});
