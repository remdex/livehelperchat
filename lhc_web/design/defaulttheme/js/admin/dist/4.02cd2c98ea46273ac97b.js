(window.webpackJsonpLHCReactAPPAdmin=window.webpackJsonpLHCReactAPPAdmin||[]).push([[4],{9:function(e,t,a){"use strict";a.r(t);var n=a(11),s=a.n(n),r=a(45),c=a.n(r),o=a(0),i=a.n(o),l=a(12),m=a.n(l),u=a(46),f=a.n(u);function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){switch(t.type){case"increment":return{count:e.count+1};case"decrement":return{count:e.count-1};case"update":return console.log("update"),d({},e,{},t.value);case"update_messages":return(e=d({},e,{},t.value)).messages.push(t.messages),e;case"init":return{count:e.count-1};default:throw new Error("Unknown action!")}}function g(e){var t=e.message,a=e.msop,n=e.lmsop,s=e.index,r=!1;return f()(t,{replace:function(e){if(e.attribs){var t=Object.assign({},e.attribs);if(e.attribs.class&&(e.attribs.className=e.attribs.class,-1!==e.attribs.className.indexOf("message-row")&&s>0&&(e.attribs.className+=" fade-in-fast",a>0&&a!=n&&0==r&&(e.attribs.className+=" operator-changes",r=!0)),delete e.attribs.class),e.attribs.onclick&&delete e.attribs.onclick,e.name&&"img"===e.name)return i.a.createElement("img",e.attribs);if(e.name&&"a"===e.name&&t.onclick)return i.a.createElement("a",e.attribs,Object(u.domToReact)(e.children))}}})}t.default=function(e){var t,a,n,r=Object(o.useRef)(null),c=Object(o.useReducer)(b,{messages:[],operators:[],last_message:"",last_message_id:0,msop:0,lmsop:0}),l=s()(c,2),u=l[0],f=l[1],p=function(){m.a.post(WWW_DIR_JAVASCRIPT+"groupchat/sync/"+e.chatId,[e.chatId+","+u.last_message_id]).then((function(t){t.data.result.forEach((function(t){t.chat_id==e.chatId&&f({type:"update_messages",messages:t.content,value:{last_message:"Just last message sample from sync"+Date.now(),last_message_id:t.message_id}})}))}))};t=function(){p()},a=3e3,n=Object(o.useRef)(),Object(o.useEffect)((function(){n.current=t}),[t]),Object(o.useEffect)((function(){if(null!==a){var e=setInterval((function(){n.current()}),a);return function(){return clearInterval(e)}}}),[a]),Object(o.useEffect)((function(){return function(){}}),[]);return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-sm-7 chat-main-left-column"},u.last_message,"--",u.last_message_id,"--",u.messages.length,i.a.createElement("div",{className:"message-block"},i.a.createElement("div",{className:"msgBlock msgBlock-admin"},u.messages.map((function(e,t){return i.a.createElement(g,{key:t,index:t,message:e,msop:u.msop,lmsop:u.lmsop})})))),i.a.createElement("div",{className:"message-container-admin"},i.a.createElement("textarea",{ref:r,placeholder:"",onKeyDown:function(t){return function(t,a){if(13==t.keyCode)return m.a.post(WWW_DIR_JAVASCRIPT+"groupchat/addmessage/"+e.chatId,{msg:r.current.value}).then((function(e){p()})),r.current.value="",t.preventDefault(),void t.stopPropagation()}(t)},className:"form-control form-control-sm form-group",rows:"2"}))),i.a.createElement("div",{className:"col-sm-5 chat-main-right-column"},i.a.createElement("div",{role:"tabpanel"},i.a.createElement("ul",{className:"nav nav-pills",role:"tablist"},i.a.createElement("li",{role:"presentation",className:"nav-item"},i.a.createElement("a",{className:"nav-link active",href:"#main-user-info-tab-11194","aria-controls":"main-user-info-tab-11194",role:"tab","data-toggle":"tab",title:"Visitor"},i.a.createElement("i",{className:"material-icons mr-0"},"face"))),i.a.createElement("li",{className:"nav-item",role:"presentation"},i.a.createElement("a",{className:"nav-link ",href:"#main-user-info-translation-11194","aria-controls":"main-user-info-translation-11194",title:"Automatic translation",role:"tab","data-toggle":"tab"},i.a.createElement("i",{className:"material-icons mr-0"},"info_outline")))),i.a.createElement("div",{className:"tab-content"},i.a.createElement("div",{role:"tabpanel",className:"tab-pane active",id:"main-user-info-tab-11194"}),i.a.createElement("div",{role:"tabpanel",className:"tab-pane",id:"main-user-info-remarks-11194"}))))))}}}]);