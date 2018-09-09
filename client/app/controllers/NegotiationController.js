System.register(['../domain/index.js', '../ui/index.js', '../util/index.js'], function (_export, _context) {
  "use strict";

  var Negotiation, NegotiationService, Negotiations, NegotiationsView, Message, MessageView, InvalidDateException, DateConverter, getNegotiationDao, Bind, getExceptionMessage;

  function _asyncToGenerator(fn) {
    return function () {
      var gen = fn.apply(this, arguments);
      return new Promise(function (resolve, reject) {
        function step(key, arg) {
          try {
            var info = gen[key](arg);
            var value = info.value;
          } catch (error) {
            reject(error);
            return;
          }

          if (info.done) {
            resolve(value);
          } else {
            return Promise.resolve(value).then(function (value) {
              step("next", value);
            }, function (err) {
              step("throw", err);
            });
          }
        }

        return step("next");
      });
    };
  }

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
      getExceptionMessage = _utilIndexJs.getExceptionMessage;
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
          var _this = this;

          return _asyncToGenerator(function* () {
            try {
              const dao = yield getNegotiationDao();
              const negotiations = yield dao.list();

              negotiations.forEach(function (negotiation) {
                return _this._negotiations.add(negotiation);
              });
            } catch (err) {
              _this._message.text = getExceptionMessage(err);
            }
          })();
        }

        add(event) {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            try {
              event.preventDefault();

              const negotiation = _this2._createNegotiation();
              const dao = yield dao.add(negotiation);

              _this2._negotiations.add(negotiation);
              _this2._message.text = 'Negotiation added successfully!';

              _this2._clearForm();
            } catch (err) {
              _this2._message.text = getExceptionMessage(err);
            }
          })();
        }

        _createNegotiation() {
          return new Negotiation(DateConverter.toDate(this._dateInput.value), parseInt(this._amountInput.value), parseFloat(this._valueInput.value));
        }

        importNegotiations() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            try {
              const negotiations = yield _this3._service.getPeriodNegotiations();

              negotiations.filter(function (negotiation) {
                return !_this3._negotiations.toArray().some(function (existingNegotiation) {
                  return negotiation.equals(existingNegotiation);
                });
              }).forEach(function (negotiation) {
                return _this3._negotiations.add(negotiation);
              });

              _this3._message.text = 'Negotiations imported successfully!';
            } catch (err) {
              _this3._message.text = getExceptionMessage(err);
            }
          })();
        }

        _clearForm() {
          this._dateInput.value = '';
          this._amountInput.value = 1;
          this._valueInput.value = 0.0;

          this._dateInput.focus();
        }

        clear() {
          var _this4 = this;

          return _asyncToGenerator(function* () {
            try {
              const dao = yield getNegotiationDao();
              yield dao.clear();

              _this4._negotiations.clear();
              _this4._message.text = 'Negotiations cleared sucessfully!';
            } catch (err) {
              _this4._message.text = getExceptionMessage(err);
            }
          })();
        }
      }

      _export('NegotiationController', NegotiationController);
    }
  };
});
//# sourceMappingURL=NegotiationController.js.map