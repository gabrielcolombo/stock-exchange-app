System.register(['./Negotiation.js'], function (_export, _context) {
  "use strict";

  var Negotiation;
  return {
    setters: [function (_NegotiationJs) {
      Negotiation = _NegotiationJs.Negotiation;
    }],
    execute: function () {
      class NegotiationDao {
        constructor(connection) {
          this._connection = connection;
          this._store = 'negotiations';
        }

        add(negotiation) {
          return new Promise((resolve, reject) => {
            const request = this._connection.transaction([this._store], 'readwrite').objectStore(this._store).add(negotiation);

            request.onsuccess = () => resolve();

            request.onerror = () => {
              reject('Failure while saving the negotiation.');
            };
          });
        }

        list() {
          return new Promise((resolve, reject) => {
            const negotiations = [];

            const cursor = this._connection.transaction([this._store], 'readwrite').objectStore(this._store).openCursor();

            cursor.onsuccess = event => {
              const current = event.target.result;

              if (current) {
                const negotiation = new Negotiation(new Date(current.value._date), current.value._amount, current.value._value);

                negotiations.push(negotiation);
                current.continue();
              } else {
                resolve(negotiations);
              }
            };

            cursor.onerror = event => {
              reject(event.target.error.name);
            };
          });
        }

        clear() {
          return new Promise((resolve, reject) => {
            const request = this._connection.transaction([this._store], 'readwrite').objectStore(this._store).clear();

            request.onsuccess = () => resolve();

            request.onerror = () => {
              reject('Failure while clearing the negotiations.');
            };
          });
        }

      }

      _export('NegotiationDao', NegotiationDao);
    }
  };
});
//# sourceMappingURL=NegotiationDao.js.map