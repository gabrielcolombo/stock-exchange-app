System.register([], function (_export, _context) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      class ProxyFactory {
        static create(object, props, trap) {
          return new Proxy(object, {
            get(target, prop, receiver) {
              const _prop = target[prop];

              if (ProxyFactory._isFunction(_prop) && props.includes(prop)) {
                return function () {
                  _prop.apply(target, arguments);

                  trap(target);
                };
              }

              return _prop;
            },

            set(target, prop, value, receiver) {
              const updated = Reflect.set(target, prop, value);

              if (props.includes(prop)) {
                trap(target);
              }

              return updated;
            }
          });
        }

        static _isFunction(fn) {
          return typeof fn === typeof Function;
        }
      }

      _export("ProxyFactory", ProxyFactory);
    }
  };
});
//# sourceMappingURL=ProxyFactory.js.map