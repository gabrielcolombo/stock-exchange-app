System.register(['./controllers/NegotiationController.js', './domain/index.js'], function (_export, _context) {
  "use strict";

  var NegotiationController, Negotiation;
  return {
    setters: [function (_controllersNegotiationControllerJs) {
      NegotiationController = _controllersNegotiationControllerJs.NegotiationController;
    }, function (_domainIndexJs) {
      Negotiation = _domainIndexJs.Negotiation;
    }],
    execute: function () {

      // const negotiation = new Negotiation(new Date(), 1, 200);
      const headers = new Headers();
      const method = 'POST';
      const body = JSON.stringify({ date: '01/02/2016', amount: 1, value: 200 });

      headers.set('Content-Type', 'application/json');

      const config = { method, headers, body };

      fetch('/negotiations', config).then(() => console.log('Data sent successfully.'));
    }
  };
});
//# sourceMappingURL=app.js.map