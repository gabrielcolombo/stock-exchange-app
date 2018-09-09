import { ConnectionFactory } from './ConnectionFactory';
import { NegotiationDao } from '../domain/negotiation/NegotiationDao';

export async function getNegotiationDao() {
  const connection = await ConnectionFactory.getConnection();

  return new NegotiationDao(connection);
}