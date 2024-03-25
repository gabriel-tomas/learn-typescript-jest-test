import Product from './product';

const createSut = (name: string, price: number): Product =>
  new Product(name, price);

describe('Product', () => {
  afterEach(() => jest.clearAllMocks());

  it('should have property name', () => {
    const sutArg0 = 'Produto';
    const sut = createSut(sutArg0, 23.54);
    expect(sut).toHaveProperty('name', sutArg0);
  });

  it('should have property price', () => {
    const sutArg1 = 23.33;
    const sut = createSut('Produto', sutArg1);
    expect(sut).toHaveProperty('price', sutArg1);
  });
});
