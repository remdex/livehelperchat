(window.webpackJsonpLiveHelperChat=window.webpackJsonpLiveHelperChat||[]).push([[4],{29:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.analyticEvents=void 0;var i=function(){function e(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(n,t,i){return t&&e(n.prototype,t),i&&e(n,i),n}}();t(2),t(1);var a=new(function(){function e(){!function(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}(this,e),this.params={}}return i(e,[{key:"setParams",value:function(e,n){this.params=e,this.attributes=n,this.initMonitoring()}},{key:"initMonitoring",value:function(){var e=this;console.log(this.params),this.params.ga.events.forEach((function(n){e.attributes.eventEmitter.addListener(n.ev,(function(t){console.log("from listener "+n.ev),console.log("from listener "+e.params.ga.js)}))}))}}]),e}());n.analyticEvents=a}}]);