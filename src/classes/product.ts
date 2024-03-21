import ItemCart from './contracts/ItemCart';

export default class Product implements ItemCart {
  constructor(
    public name: string,
    public price: number,
  ) {}
}
