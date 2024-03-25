import { Messaging } from './messaging';

const createSut = () => new Messaging();

describe('Messaging', () => {
  afterEach(() => jest.clearAllMocks());

  it('class should have sendMessage', () => {
    const sut = createSut();
    expect(sut).toHaveProperty('sendMessage');
  });

  describe('method: sendMessage', () => {
    it('must return undefined', () => {
      const sut = createSut();
      const sendMessage = sut.sendMessage('oi');
      expect(sendMessage).toBeUndefined();
    });
    it('must call console.log once', () => {
      const sut = createSut();
      const consoleSpy = jest.spyOn(console, 'log');
      sut.sendMessage('olá');
      expect(consoleSpy).toHaveBeenCalledTimes(1);
    });
    it('must call console.log once with "Mensagem enviada:", msg', () => {
      const sut = createSut();
      const consoleSpy = jest.spyOn(console, 'log');
      const sendMessageArg0 = 'mundo';
      sut.sendMessage(sendMessageArg0);
      expect(consoleSpy).toHaveBeenCalledWith(
        'Mensagem enviada:',
        sendMessageArg0,
      );
    });
  });
});
