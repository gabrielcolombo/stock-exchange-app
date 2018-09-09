System.register(['../domain/index.js', '../ui/index.js', '../util/index.js'], function (_export, _context) {
  "use strict";

  var Negotiation, NegotiationService, Negotiations, NegotiationsView, Message, MessageView, InvalidDateException, DateConverter, getNegotiationDao, Bind, getExceptionMessage, debounce, controller, bindEvent;
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
      debounce = _utilIndexJs.debounce;
      controller = _utilIndexJs.controller;
      bindEvent = _utilIndexJs.bindEvent;
    }],
    execute: function () {
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

      function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
        var desc = {};
        Object['ke' + 'ys'](descriptor).forEach(function (key) {
          desc[key] = descriptor[key];
        });
        desc.enumerable = !!desc.enumerable;
        desc.configurable = !!desc.configurable;

        if ('value' in desc || desc.initializer) {
          desc.writable = true;
        }

        desc = decorators.slice().reverse().reduce(function (desc, decorator) {
          return decorator(target, property, desc) || desc;
        }, desc);

        if (context && desc.initializer !== void 0) {
          desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
          desc.initializer = undefined;
        }

        if (desc.initializer === void 0) {
          Object['define' + 'Property'](target, property, desc);
          desc = null;
        }

        return desc;
      }

      var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _desc, _value, _class2;

      let NegotiationController = (_dec = controller('#date', '#amount', '#value'), _dec2 = bindEvent('submit', '.form'), _dec3 = debounce(), _dec4 = bindEvent('click', '#btn-import'), _dec5 = debounce(), _dec6 = bindEvent('click', '#btn-clear'), _dec(_class = (_class2 = class NegotiationController {
        constructor(_dateInput, _amountInput, _valueInput) {
          const $ = document.querySelector.bind(document);
          const self = this;

          Object.assign(this, { _dateInput, _amountInput, _valueInput });

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
      }, (_applyDecoratedDescriptor(_class2.prototype, 'add', [_dec2, _dec3], Object.getOwnPropertyDescriptor(_class2.prototype, 'add'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'importNegotiations', [_dec4, _dec5], Object.getOwnPropertyDescriptor(_class2.prototype, 'importNegotiations'), _class2.prototype), _applyDecoratedDescriptor(_class2.prototype, 'clear', [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, 'clear'), _class2.prototype)), _class2)) || _class);

      _export('NegotiationController', NegotiationController);
    }
  };
});
//# sourceMappingURL=NegotiationController.js.map