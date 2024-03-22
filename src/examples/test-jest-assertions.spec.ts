describe('Primitive values', () => {
  it('shoud test jest assertions', () => {
    const number = 10;

    expect(number).toBe(10);
    expect(number).toEqual(10);
    expect(number).toBeGreaterThan(5);
  });

  it('should split tests', () => {
    const number = 20;

    expect(number).toHaveProperty('toString');
  });
});

describe('Objects', () => {
  it('shoud test jest assertions with objects', () => {
    const person = { name: 'gabriel', age: 19 };
    const person2 = { ...person };

    expect(person).toEqual(person2);
    expect(person).toHaveProperty('name', 'gabriel');
    expect(person2.age).toBe(19);
  });
});
