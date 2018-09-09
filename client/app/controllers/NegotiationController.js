System.register(['../domain/index.js', '../ui/index.js', '../util/index.js'], function (_export, _context) {
  "use strict";

  var Negotiation, NegotiationService, Negotiations, NegotiationsView, Message, MessageView, InvalidDateException, DateConverter, getNegotiationDao, Bind;
  return {
    setters: [function (_domainIndexJs) {
      Negotiation = _domainIndexJs.Negotiation;
      NegotiationService = _domainIndexJs.NegotiationService;
      Negotiations = _domainIndexJs.Negotiations;
    }, function (_uiIndexJs) {
      NegotiationsView = _uiIndexJs.NegotiationsView;
      Message = _uiIndexJs.Message;
      MessageView = _uiIndexJs.MessageView;
      InvalidDateException = _uiIndexJs.InvalidDateException;
      DateConverter = _uiIndexJs.DateConverter;
    }, function (_utilIndexJs) {
      getNegotiationDao = _utilIndexJs.getNegotiationDao;
      Bind = _utilIndexJs.Bind;
    }],
    execute: function () {
      class NegotiationController {
        constructor() {
          const $ = document.querySelector.bind(document);
          const self = this;

          this._dateInput = $('#date');
          this._amountInput = $('#amount');
          this._valueInput = $('#value');

          this._message = new Bind(new Message(), new MessageView('#message-view'), 'text');

          this._negotiations = new Bind(new Negotiations(), new NegotiationsView('#negotiations'), 'add', 'clear');

          this._service = new NegotiationService();

          this._init();
        }

        _init() {
          getNegotiationDao().then(dao => dao.list()).then(negotiations => negotiations.forEach(negotiation => this._negotiations.add(negotiation))).catch(err => this._message.text = err);
        }

        add(event) {
          try {
            event.preventDefault();

            const negotiation = this._createNegotiation();

            getNegotiationDao().then(dao => dao.add(negotiation)).then(() => {
              this._negotiations.add(negotiation);
              this._message.text = 'Negotiation added successfully!';

              this._clearForm();
            }).catch(err => this._message.text = err);
          } catch (err) {
            console.log(err);
            console.log(err.stack);

            this._message.text = err instanceof InvalidDateException ? err.message : 'We\'ve found an unexpected error. Please contact customer support.';
          }
        }

        _createNegotiation() {
          return new Negotiation(DateConverter.toDate(this._dateInput.value), parseInt(this._amountInput.value), parseFloat(this._valueInput.value));
        }

        importNegotiations() {
          this._service.getPeriodNegotiations().then(negotiations => {
            negotiations.filter(negotiation => !this._negotiations.toArray().some(existingNegotiation => negotiation.equals(existingNegotiation))).forEach(negotiation => this._negotiations.add(negotiation));
            this._message.text = 'Negotiations imported successfully!';
          }).catch(err => {
            this._message.text = err;
          });
        }

        _clearForm() {
          this._dateInput.value = '';
          this._amountInput.value = 1;
          this._valueInput.value = 0.0;

          this._dateInput.focus();
        }

        clear() {
          getNegotiationDao().then(dao => dao.clear()).then(() => {
            this._negotiations.clear();

            this._message.text = 'Negotiations cleared sucessfully!';
          }).catch(err => this._message.text = err);
        }
      }

      _export('NegotiationController', NegotiationController);
    }
  };
});
//# sourceMappingURL=NegotiationController.js.map