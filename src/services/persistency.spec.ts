import { Persistency } from './persistency';

describe('Persistency', () => {
  afterEach(() => jest.clearAllMocks());

  it('class should have saveOrder', () => {
    const sut = new Persistency();
    expect(sut).toHaveProperty('saveOrder');
  });
  describe('Persistency - method: saveOrder', () => {
    it('must return undefined', () => {
      const sut = new Persistency();
      const saveOrder = sut.saveOrder();
      expect(saveOrder).toBeUndefined();
    });
    it('must call console.log once', () => {
      const sut = new Persistency();
      const consoleSpy = jest.spyOn(console, 'log');
      sut.saveOrder();
      expect(consoleSpy).toHaveBeenCalledTimes(1);
    });
    it('must call console.log once with "Pedido salvo com sucesso"', () => {
      const sut = new Persistency();
      const consoleSpy = jest.spyOn(console, 'log');
      sut.saveOrder();
      expect(consoleSpy).toHaveBeenCalledWith('Pedido salvo com sucesso');
    });
  });
});
