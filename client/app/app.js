System.register(['./controllers/NegotiationController.js'], function (_export, _context) {
  "use strict";

  var NegotiationController;
  return {
    setters: [function (_controllersNegotiationControllerJs) {
      NegotiationController = _controllersNegotiationControllerJs.NegotiationController;
    }],
    execute: function () {

      const controller = new NegotiationController();
      const $ = document.querySelector.bind(document);

      $('.form').addEventListener('submit', controller.add.bind(controller));

      $('#btn-remove').addEventListener('click', controller.clear.bind(controller));

      $('#btn-import').addEventListener('click', controller.importNegotiations.bind(controller));
    }
  };
});
//# sourceMappingURL=app.js.map