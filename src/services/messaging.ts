import { MessagingProtocol } from './contracts/messagingProtocol';

export class Messaging implements MessagingProtocol {
  sendMessage(message: string): void {
    console.log('Mensagem enviada:', message);
  }
}
