describe('TESTANDO ALGO 1', () => {
  it('should return one', () => {
    const number = 1;
    expect(number).toBe(1);
  });
  it('descrição do teste (IT) 2', () => {
    const number = 2;
    expect(number).toBe(2);
  });
});

describe('TESTANDO OUTRA COISA 2', () => {
  test('descrição do teste (TEST)', () => {
    const string = 'olá';
    expect(string).toBe('olá');
  });
});
