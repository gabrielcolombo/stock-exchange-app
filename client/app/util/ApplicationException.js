System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      let ApplicationException = class ApplicationException extends Error {
        constructor(message = '') {
          super(message);

          this.name = this.constructor.name;
        }
      };

      _export('ApplicationException', ApplicationException);

      const exception = ApplicationException;

      function isApplicationException(err) {
        return err instanceof exception || Object.getPrototypeOf(err) instanceof exception;
      }

      _export('isApplicationException', isApplicationException);

      function getExceptionMessage(err) {
        return isApplicationException(err) ? err.message : 'The desired operation could not be performed.';
      }

      _export('getExceptionMessage', getExceptionMessage);
    }
  };
});
//# sourceMappingURL=ApplicationException.js.map