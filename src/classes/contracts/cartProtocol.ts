import ItemCart from './ItemCart';

export interface CartProtocol {
  items: readonly ItemCart[];

  addItems(...items: ItemCart[]): void;
  removeItem(index: number): void;
  total(): number;
  totalWithDiscount(): number;
  isEmpty(): boolean;
  clear(): void;
}
