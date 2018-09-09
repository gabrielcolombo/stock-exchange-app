System.register(['../../util/HttpService.js', './Negotiation.js'], function (_export, _context) {
  "use strict";

  var HttpService, Negotiation;

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
    setters: [function (_utilHttpServiceJs) {
      HttpService = _utilHttpServiceJs.HttpService;
    }, function (_NegotiationJs) {
      Negotiation = _NegotiationJs.Negotiation;
    }],
    execute: function () {
      class NegotiationService {
        constructor() {
          this._http = new HttpService();
        }

        getWeekNegotiations() {
          return this._http.get('negotiations/week').then(negotiations => negotiations.map(({ date, amount, value }) => new Negotiation(new Date(date), amount, value))).catch(err => {
            throw new ApplicationException('An error occurred while fetching this week\'s negotiations.');
          });
        }

        getPreviousWeekNegotiations() {
          return this._http.get('negotiations/previous').then(negotiations => negotiations.map(({ date, amount, value }) => new Negotiation(new Date(date), amount, value))).catch(err => {
            throw new ApplicationException('An error occurred while fetching previous week\'s negotiations.');
          });
        }

        getFortnightNegotiations() {
          return this._http.get('negotiations/fortnight').then(negotiations => negotiations.map(({ date, amount, value }) => new Negotiation(new Date(date), amount, value))).catch(err => {
            throw new ApplicationException('An error occurred while fetching previous week\'s negotiations.');
          });
        }

        getPeriodNegotiations() {
          var _this = this;

          return _asyncToGenerator(function* () {
            try {
              const period = yield Promise.all([_this.getWeekNegotiations(), _this.getPreviousWeekNegotiations(), _this.getFortnightNegotiations()]);

              return period.reduce(function (arr, item) {
                return arr.concat(item);
              }, []).sort(function (a, b) {
                return a.date.getTime() - b.date.getTime();
              });
            } catch (err) {
              throw new ApplicationException('An error occurred while fetching the negotiations for the period.');
            }
          })();
        }
      }

      _export('NegotiationService', NegotiationService);
    }
  };
});
//# sourceMappingURL=NegotiationService.js.map