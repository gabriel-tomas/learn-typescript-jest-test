export abstract class Discount {
  protected abstract readonly discount: number;
  applyDiscount(price: number): number {
    return price - price * this.discount;
  }
}
