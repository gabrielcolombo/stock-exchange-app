System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      let HttpService = class HttpService {
        get(url) {
          return fetch(url).then(this._handleErrors).then(response => response.json());
        }

        _handleErrors(response) {
          if (!response.ok) {
            throw new Error(response.statusText);
          }

          return response;
        }
      };

      _export("HttpService", HttpService);
    }
  };
});
//# sourceMappingURL=HttpService.js.map