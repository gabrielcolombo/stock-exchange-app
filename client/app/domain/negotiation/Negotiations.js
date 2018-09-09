System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      let Negotiations = class Negotiations {
        constructor() {
          this._negotiations = [];

          Object.freeze(this);
        }

        get totalVolume() {
          return this._negotiations.reduce((total, { volume }) => total + volume, 0);
        }

        add(negotiation) {
          this._negotiations.push(negotiation);
        }

        toArray() {
          return [].concat(this._negotiations);
        }

        clear() {
          this._negotiations.length = 0;
        }
      };

      _export("Negotiations", Negotiations);
    }
  };
});
//# sourceMappingURL=Negotiations.js.map