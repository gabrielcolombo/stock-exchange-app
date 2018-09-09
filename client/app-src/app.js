import { NegotiationController } from './controllers/NegotiationController.js';
import { Negotiation } from './domain/index.js';

// const negotiation = new Negotiation(new Date(), 1, 200);
const headers = new Headers();
const method = 'POST';
const body = JSON.stringify({ date: '01/02/2016', amount: 1, value: 200});

headers.set('Content-Type', 'application/json');

const config = { method, headers, body };

fetch('/negotiations', config)
  .then(() => console.log('Data sent successfully.'));