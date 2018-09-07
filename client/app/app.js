const controller = new NegotiationController();

document
  .querySelector('.form')
  .addEventListener('submit', controller.add.bind(controller));

  document
  .querySelector('#btn-remove')
  .addEventListener('click', controller.clear.bind(controller));