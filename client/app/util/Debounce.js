System.register([], function (_export, _context) {
  "use strict";

  function debounce(fn, milliseconds) {
    let timeout = 0;

    return () => {
      clearTimeout(timeout);

      timeout = setTimeout(fn, milliseconds);
    };
  }

  _export("debounce", debounce);

  return {
    setters: [],
    execute: function () {}
  };
});
//# sourceMappingURL=Debounce.js.map