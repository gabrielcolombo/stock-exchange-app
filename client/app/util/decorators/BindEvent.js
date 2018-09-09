System.register(['../../util/index.js'], function (_export, _context) {
  "use strict";

  var required;
  function bindEvent(event = required('event'), selector = required('selector'), prevent = true) {
    return function (target, propertyKey, descriptor) {
      Reflect.defineMetadata('bindEvent', { event, selector, prevent, propertyKey }, Object.getPrototypeOf(target), propertyKey);

      return descriptor;
    };
  }

  _export('bindEvent', bindEvent);

  return {
    setters: [function (_utilIndexJs) {
      required = _utilIndexJs.required;
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=BindEvent.js.map