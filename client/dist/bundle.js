webpackJsonp([1],[,function(a,b,c){"use strict";c.d(b,"a",function(){return e});var d=c(3);let e=class{constructor(a=Object(d.g)("date"),b=Object(d.g)("amount"),c=Object(d.g)("value")){Object.assign(this,{_amount:b,_value:c}),this._date=new Date(a.getTime()),Object.freeze(this)}get volume(){return this._amount*this._value}get date(){return new Date(this._date.getTime())}get amount(){return this._amount}get value(){return this._value}equals(a){return JSON.stringify(this)===JSON.stringify(a)}}},,function(a,b,c){"use strict";function d(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d("next",a)},function(a){d("throw",a)})}return d("next")})}}function e(a){throw new Error(`The ${a} param is required.`)}function f(a=500){return function(b,c,d){const e=d.value;return d.value=function(...b){event&&event.preventDefault(),clearTimeout(0),timer=setTimeout(()=>e.apply(this,b),a)},d}}function g(...a){const b=a.map((a)=>document.querySelector(a));return function(a){const c=a,d=function(){const a=new c(...b);Object.getOwnPropertyNames(c.prototype).forEach((b)=>{Reflect.hasMetadata("bindEvent",a,b)&&h(a,Reflect.getMetadata("bindEvent",a,b))})};return d.prototype=c.prototype,d}}function h(a,b){document.querySelector(b.selector).addEventListener(b.event,(c)=>{b.prevent&&c.preventDefault(),a[b.propertyKey](c)})}function i(a=e("event"),b=e("selector"),c=!0){return function(d,e,f){return Reflect.defineMetadata("bindEvent",{event:a,selector:b,prevent:c,propertyKey:e},Object.getPrototypeOf(d),e),f}}var j=c(4);let k=class a{static create(b,c,d){return new Proxy(b,{get(b,e){const f=b[e];return a._isFunction(f)&&c.includes(e)?function(){f.apply(b,arguments),d(b)}:f},set(a,b,e){const f=Reflect.set(a,b,e);return c.includes(b)&&d(a),f}})}static _isFunction(a){return typeof a==typeof Function}},l=class{constructor(a,b,...c){const d=k.create(a,c,(a)=>{b.update(a)});return b.update(a),d}};const m=["negotiations"];let n=null,o=null,p=class a{constructor(){throw new Error("This class should not be instantiated.")}static getConnection(){return new Promise((b,c)=>{if(n)return b(n);const d=indexedDB.open("jscangaceiro",2);d.onupgradeneeded=(b)=>{a._createStores(b.target.result)},d.onsuccess=(a)=>{n=a.target.result,o=n.close.bind(n),n.close=()=>{throw new Error("A connection should not be closed directly. Use ConnectionFactory.closeConnection() instead.")},b(a.target.result)},d.onerror=(a)=>{c(a.target.error.name)}})}static _createStores(a){m.forEach((b)=>{a.objectStoreNames.contains(b)&&a.deleteObjectStore(b),a.createObjectStore(b,{autoIncrement:!0})})}closeConnection(){n&&o()}};var q=c(5);let r=(()=>{var a=d(function*(){const a=yield p.getConnection();return new q.a(a)});return function(){return a.apply(this,arguments)}})();var s=c(6);c.d(b,!1,function(){return j.a}),c.d(b,!1,function(){}),c.d(b,"e",function(){return j.b}),c.d(b,"a",function(){return l}),c.d(b,!1,function(){return p}),c.d(b,"f",function(){return r}),c.d(b,!1,function(){return s.a}),c.d(b,!1,function(){return k}),c.d(b,"g",function(){return e}),c.d(b,"d",function(){return f}),c.d(b,"c",function(){return g}),c.d(b,"b",function(){return i})},function(a,b,c){"use strict";function d(a){return a instanceof f||Object.getPrototypeOf(a)instanceof f}c.d(b,"a",function(){return e}),b.b=function(a){return d(a)?a.message:"The desired operation could not be performed."};let e=class extends Error{constructor(a=""){super(a),this.name=this.constructor.name}};const f=e},function(a,b,c){"use strict";c.d(b,"a",function(){return e});var d=c(1);let e=class{constructor(a){this._connection=a,this._store="negotiations"}add(a){return new Promise((b,c)=>{const d=this._connection.transaction([this._store],"readwrite").objectStore(this._store).add(a);d.onsuccess=()=>b(),d.onerror=()=>{c("Failure while saving the negotiation.")}})}list(){return new Promise((a,b)=>{const c=[],e=this._connection.transaction([this._store],"readwrite").objectStore(this._store).openCursor();e.onsuccess=(b)=>{const e=b.target.result;if(e){const a=new d.a(new Date(e.value._date),e.value._amount,e.value._value);c.push(a),e.continue()}else a(c)},e.onerror=(a)=>{b(a.target.error.name)}})}clear(){return new Promise((a,b)=>{const c=this._connection.transaction([this._store],"readwrite").objectStore(this._store).clear();c.onsuccess=()=>a(),c.onerror=()=>{b("Failure while clearing the negotiations.")}})}}},function(a,b,c){"use strict";c.d(b,"a",function(){return d});let d=class{get(a){return fetch(a).then(this._handleErrors).then((a)=>a.json())}_handleErrors(a){if(!a.ok)throw new Error(a.statusText);return a}}},function(a,b,c){"use strict";function d(a){return function(){var b=a.apply(this,arguments);return new Promise(function(a,c){function d(e,f){try{var g=b[e](f),h=g.value}catch(a){return void c(a)}return g.done?void a(h):Promise.resolve(h).then(function(a){d("next",a)},function(a){d("throw",a)})}return d("next")})}}function e(a,b,c,d,e){var f={};return Object.keys(d).forEach(function(a){f[a]=d[a]}),f.enumerable=!!f.enumerable,f.configurable=!!f.configurable,("value"in f||f.initializer)&&(f.writable=!0),f=c.slice().reverse().reduce(function(c,d){return d(a,b,c)||c},f),e&&void 0!==f.initializer&&(f.value=f.initializer?f.initializer.call(e):void 0,f.initializer=void 0),void 0===f.initializer&&(Object.defineProperty(a,b,f),f=null),f}Object.defineProperty(b,"__esModule",{value:!0});var f=c(8),g=c.n(f),h=c(9),i=c.n(h),j=c(0),k=c.n(j),l=c(2),m=c.n(l),n=c(10),o=c.n(n),p=c(1),q=c(5);let r=class{constructor(){this._negotiations=[],Object.freeze(this)}get totalVolume(){return this._negotiations.reduce((a,{volume:b})=>a+b,0)}add(a){this._negotiations.push(a)}toArray(){return[].concat(this._negotiations)}clear(){this._negotiations.length=0}},s=class{constructor(a){this._element=document.querySelector(a)}update(a){this._element.innerHTML=this.template(a)}template(){throw new Error("You must implement the template method.")}},t=class extends s{template(a){return a.text?`<p class="alert alert-info">${a.text}</p>`:"<p></p>"}};var u=c(4);let v=class extends u.a{constructor(){super("Date must have the following format: dd/mm/yyyy.")}},w=class{constructor(){throw new Error("This class should not be instantiated.")}static toText(a){return`${a.getDate()}/${a.getMonth()+1}/${a.getFullYear()}`}static toDate(a){if(!/\d{2}\/\d{2}\/\d{4}/.test(a))throw new v("Date must have the following format: dd/mm/yyyy");return new Date(...a.split("/").reverse().map((a,b)=>a-b%2))}},x=class extends s{template(a){return`
      <table class="table table-hover table-bordered">
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Value</th>
            <th>Volume</th>
          </tr>
        </thead>
        <tbody>
          ${a.toArray().map((a)=>`
                <tr>
                  <td>${w.toText(a.date)}</td>
                  <td>${a.amount}</td>
                  <td>${a.value}</td>
                  <td>${a.volume}</td>
                </tr>
              `).join("")}
        </tbody>
        <tfoot>
          <tr>
            <td colspan="3"></td>
            <td>${a.totalVolume}</td>
          </tr>
        </tfoot>
      </table>
    `}},y=class{constructor(a=""){this._text=a}get text(){return this._text}set text(a){this._text=a}};var z,A,B,C,D,E,F,G,H=c(3);let I=(z=Object(H.c)("#date","#amount","#value"),A=Object(H.b)("submit",".form"),B=Object(H.d)(),C=Object(H.b)("click","#btn-import"),D=Object(H.d)(),E=Object(H.b)("click","#btn-clear"),z(F=(G=class{constructor(a,b,c){const d=document.querySelector.bind(document),e=this;Object.assign(this,{_dateInput:a,_amountInput:b,_valueInput:c}),this._message=new H.a(new y(),new t("#message-view"),"text"),this._negotiations=new H.a(new r(),new x("#negotiations"),"add","clear"),this._init()}_init(){var a=this;return d(function*(){try{const b=yield Object(H.f)(),c=yield b.list();c.forEach(function(b){return a._negotiations.add(b)})}catch(b){a._message.text=Object(H.e)(b)}})()}add(a){var b=this;return d(function*(){try{a.preventDefault();const c=b._createNegotiation(),d=yield d.add(c);b._negotiations.add(c),b._message.text="Negotiation added successfully!",b._clearForm()}catch(a){b._message.text=Object(H.e)(a)}})()}_createNegotiation(){return new p.a(w.toDate(this._dateInput.value),parseInt(this._amountInput.value),parseFloat(this._valueInput.value))}importNegotiations(){var a=this;return d(function*(){try{const{NegotiationService:b}=yield c.e(0).then(c.bind(null,27)),d=new b,e=yield d.getPeriodNegotiations();e.filter(function(b){return!a._negotiations.toArray().some(function(a){return b.equals(a)})}).forEach(function(b){return a._negotiations.add(b)}),a._message.text="Negotiations imported successfully!"}catch(b){a._message.text=Object(H.e)(b)}})()}_clearForm(){this._dateInput.value="",this._amountInput.value=1,this._valueInput.value=0,this._dateInput.focus()}clear(){var a=this;return d(function*(){try{const b=yield Object(H.f)();yield b.clear(),a._negotiations.clear(),a._message.text="Negotiations cleared sucessfully!"}catch(b){a._message.text=Object(H.e)(b)}})()}},e(G.prototype,"add",[A,B],Object.getOwnPropertyDescriptor(G.prototype,"add"),G.prototype),e(G.prototype,"importNegotiations",[C,D],Object.getOwnPropertyDescriptor(G.prototype,"importNegotiations"),G.prototype),e(G.prototype,"clear",[E],Object.getOwnPropertyDescriptor(G.prototype,"clear"),G.prototype),G))||F);const J=new I,K=new Headers,L=JSON.stringify({date:"01/02/2016",amount:1,value:200});K.set("Content-Type","application/json");fetch("http://localhost:3000/negotiations",{method:"POST",headers:K,body:L}).then(()=>console.log("Data sent successfully."))},function(){},function(){},function(){}],[7]);