System.register([], function (_export, _context) {
  "use strict";

  function required(param) {
    throw new Error(`The ${param} param is required.`);
  }

  _export("required", required);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=Required.js.map