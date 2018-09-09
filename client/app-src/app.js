import { NegotiationController } from './controllers/NegotiationController.js';
import { debounce } from './util/index.js';

const controller = new NegotiationController();
const	$	=	document.querySelector.bind(document);

$('.form')
  .addEventListener('submit', controller.add.bind(controller));

$('#btn-remove')
  .addEventListener('click', controller.clear.bind(controller));

$('#btn-import')
  .addEventListener('click', debounce(() => {
    console.log('Debounced');
    controller.importNegotiations();
  }, 1000));