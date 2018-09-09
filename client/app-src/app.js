import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import 'jquery/dist/jquery';

import 'bootstrap/js/modal';
import '../css/menucss.css';

import { NegotiationController } from './controllers/NegotiationController';

const	controller	=	new	NegotiationController();

const headers = new Headers();
const method = 'POST';
const body = JSON.stringify({ date: '01/02/2016', amount: 1, value: 200});

headers.set('Content-Type', 'application/json');

const config = { method, headers, body };

fetch('http://localhost:3000/negotiations', config)
  .then(() => console.log('Data sent successfully.'));

