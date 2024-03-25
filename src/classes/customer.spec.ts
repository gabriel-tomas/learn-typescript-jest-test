import { IndividualCustomer, CompanyCustomer } from './customer';

const createIndividualCustomerSut = (
  firstName: string,
  lastName: string,
  cpf: string,
): IndividualCustomer => {
  return new IndividualCustomer(firstName, lastName, cpf);
};

const createCompanyCustomerSut = (
  name: string,
  alias: string,
  cnpj: string,
): CompanyCustomer => {
  return new CompanyCustomer(name, alias, cnpj);
};

describe('IndividualCustomer', () => {
  it('should have properties: firstName, lastName and cpf', () => {
    const sutArgs = ['Gabriel', 'Tomás', '000.000.000-00'];
    const sut = createIndividualCustomerSut(sutArgs[0], sutArgs[1], sutArgs[2]);
    expect(sut).toHaveProperty('firstName', sutArgs[0]);
    expect(sut).toHaveProperty('lastName', sutArgs[1]);
    expect(sut).toHaveProperty('cpf', sutArgs[2]);
  });

  it('method: getName should return "{firstName} {lastName}"', () => {
    const sutArgs = ['Gabriel', 'Tomás', '000.000.000-00'];
    const sut = createIndividualCustomerSut(sutArgs[0], sutArgs[1], sutArgs[2]);
    expect(sut.getName()).toBe(`${sutArgs[0]} ${sutArgs[1]}`);
  });

  it('method: getIDN should return cpf', () => {
    const sutArgs = ['Gabriel', 'Tomás', '000.000.000-00'];
    const sut = createIndividualCustomerSut(sutArgs[0], sutArgs[1], sutArgs[2]);
    expect(sut.getIDN()).toBe(sutArgs[2]);
  });
});

describe('CompanyCustomer', () => {
  it('should have properties: name, alias and cnpj', () => {
    const sutArgs = ['Udemy Inc', 'Udemy', 'XX. XXX. XXX/0001-XX'];
    const sut = createCompanyCustomerSut(sutArgs[0], sutArgs[1], sutArgs[2]);
    expect(sut).toHaveProperty('name', sutArgs[0]);
    expect(sut).toHaveProperty('alias', sutArgs[1]);
    expect(sut).toHaveProperty('cnpj', sutArgs[2]);
  });

  it('method: getName should return name', () => {
    const sutArgs = ['Udemy Inc', 'Udemy', 'XX. XXX. XXX/0001-XX'];
    const sut = createCompanyCustomerSut(sutArgs[0], sutArgs[1], sutArgs[2]);
    expect(sut.getName()).toBe(sutArgs[0]);
  });

  it('method: getIDN should return cnpj', () => {
    const sutArgs = ['Udemy Inc', 'Udemy', 'XX. XXX. XXX/0001-XX'];
    const sut = createCompanyCustomerSut(sutArgs[0], sutArgs[1], sutArgs[2]);
    expect(sut.getIDN()).toBe(sutArgs[2]);
  });
});
