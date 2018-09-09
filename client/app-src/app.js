import { NegotiationController } from './controllers/NegotiationController.js';

const controller = new NegotiationController();
const	$	=	document.querySelector.bind(document);

$('.form')
  .addEventListener('submit', controller.add.bind(controller));

$('#btn-remove')
  .addEventListener('click', controller.clear.bind(controller));

$('#btn-import')
  .addEventListener('click', controller.importNegotiations.bind(controller));