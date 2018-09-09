import { ConnectionFactory } from './ConnectionFactory.js';
import { NegotiationDao } from '../domain/negotiation/NegotiationDao.js';

export async function getNegotiationDao() {
  const connection = await ConnectionFactory.getConnection();

  return new NegotiationDao(connection);
}