System.register(['../../util/ApplicationException.js'], function (_export, _context) {
  "use strict";

  var ApplicationException;
  return {
    setters: [function (_utilApplicationExceptionJs) {
      ApplicationException = _utilApplicationExceptionJs.ApplicationException;
    }],
    execute: function () {
      let InvalidDateException = class InvalidDateException extends ApplicationException {
        constructor() {
          super('Date must have the following format: dd/mm/yyyy.');
        }
      };

      _export('InvalidDateException', InvalidDateException);
    }
  };
});
//# sourceMappingURL=InvalidDateException.js.map