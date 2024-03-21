import {
  CustomerOrder,
  IndividualCustomerProtocol,
  CompanyCustomerProtocol,
} from './contracts/customerProtocol';

export class IndividualCustomer
  implements IndividualCustomerProtocol, CustomerOrder
{
  constructor(
    public firstName: string,
    public lastName: string,
    public cpf: string,
  ) {}

  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getIDN(): string {
    return this.cpf;
  }
}

export class CompanyCustomer implements CompanyCustomerProtocol, CustomerOrder {
  constructor(
    public name: string,
    public alias: string,
    public cnpj: string,
  ) {}

  getName(): string {
    return this.name;
  }

  getIDN(): string {
    return this.cnpj;
  }
}
