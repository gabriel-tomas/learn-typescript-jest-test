import ItemCart from './contracts/ItemCart';
import { CartProtocol } from './contracts/cartProtocol';
import { Discount } from './contracts/discount';

export class Cart implements CartProtocol {
  private readonly _items: ItemCart[] = [];

  constructor(private readonly discount: Discount) {}

  get items(): readonly ItemCart[] {
    return this._items;
  }

  addItems(...items: ItemCart[]): void {
    items.forEach((item) => this._items.push(item));
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  total(): number {
    return Number(
      this._items.reduce((acc, item) => acc + item.price, 0).toFixed(2),
    );
  }

  totalWithDiscount(): number {
    return this.discount.applyDiscount(this.total());
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  clear(): void {
    this._items.length = 0;
  }
}
