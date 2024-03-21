import { PersistencyProtocol } from './contracts/persistencyProtocol';

export class Persistency implements PersistencyProtocol {
  saveOrder(): void {
    console.log('Pedido salvo com sucesso');
  }
}
