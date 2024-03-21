import { Discount } from './contracts/discount';

export class TenPercentDiscount extends Discount {
  protected readonly discount = 0.1;
}

export class FiftyPercentDiscount extends Discount {
  protected readonly discount = 0.5;
}
