import{a2 as i,r as s,a4 as m,a5 as w,a6 as g,w as v,a7 as _,au as b,bE as O,cN as R}from"./index-20109f1f.js";function P(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function E(t,e,n){return e&&p(t.prototype,e),n&&p(t,n),t}function j(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}function f(t,e){return f=Object.setPrototypeOf||function(r,o){return r.__proto__=o,r},f(t,e)}function I(t){var e=k();return function(){var r=u(t),o;if(e){var c=u(this).constructor;o=Reflect.construct(r,arguments,c)}else o=r.apply(this,arguments);return S(this,o)}}function S(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return T(t)}function T(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function k(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function u(t){return u=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},u(t)}var d=function(t){j(n,t);var e=I(n);function n(){return P(this,n),e.apply(this,arguments)}return E(n,[{key:"render",value:function(){var o=this.props,c=o.captions,l=o.classes,y=o.audioOptions,h=o.audioResources;return i.createElement("div",{className:l.container},i.createElement("audio",Object.assign({className:l.audio},y),h.map(function(a){return i.createElement(s.Fragment,{key:a.id},i.createElement("source",{src:a.id,type:a.getFormat()}))}),c.map(function(a){return i.createElement(s.Fragment,{key:a.id},i.createElement("track",{src:a.id,label:a.getDefaultLabel(),srcLang:a.getProperty("language")}))})))}}]),n}(s.Component);d.defaultProps={audioOptions:{},audioResources:[],captions:[]};var V=function(e,n){var r=n.windowId;return{audioOptions:b(e).audioOptions,audioResources:O(e,{windowId:r})||[],captions:R(e,{windowId:r})||[]}},x=function(){return{audio:{width:"100%"},container:{alignItems:"center",display:"flex",width:"100%"}}},A=m(_(),v(x),g(V,null),w("AudioViewer"));const C=A(d);export{C as default};