(window.webpackJsonpLHCReactAPPAdmin=window.webpackJsonpLHCReactAPPAdmin||[]).push([[4],{9:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a.n(n),s=a(45),c=a.n(s),l=a(0),o=a.n(l),i=a(12),m=a.n(i),u=a(46),p=a.n(u);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){c()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){switch(t.type){case"increment":return{count:e.count+1};case"decrement":return{count:e.count-1};case"update":return console.log("update"),g({},e,{},t.value);case"update_messages":return(e=g({},e,{},t.value)).messages.push(t.messages),e;case"init":return{count:e.count-1};default:throw new Error("Unknown action!")}}function b(e){var t=e.message,a=e.index,n=!1;return console.log(t.msop),console.log(t.lmsop),p()(t.msg,{replace:function(e){if(e.attribs){var r=Object.assign({},e.attribs);if(e.attribs.class&&(e.attribs.className=e.attribs.class,-1!==e.attribs.className.indexOf("message-row")&&a>0&&(e.attribs.className+=" fade-in-fast",t.msop>0&&t.msop!=t.lmsop&&0==n&&(e.attribs.className+=" operator-changes",n=!0)),delete e.attribs.class),e.attribs.onclick&&delete e.attribs.onclick,e.name&&"img"===e.name)return o.a.createElement("img",e.attribs);if(e.name&&"a"===e.name&&r.onclick)return o.a.createElement("a",e.attribs,Object(u.domToReact)(e.children))}}})}t.default=function(e){var t,n,s,c=Object(l.useRef)(null),i=Object(l.useRef)(null),u=Object(l.useRef)(null),p=Object(l.useReducer)(d,{messages:[],operators:[],last_message:"",last_message_id:0,lmsop:0}),f=r()(p,2),g=f[0],h=f[1],v=function(){m.a.post(WWW_DIR_JAVASCRIPT+"groupchat/sync/"+e.chatId,[e.chatId+","+g.last_message_id]).then((function(t){t.data.result.forEach((function(t){t.chat_id==e.chatId&&h({type:"update_messages",messages:{msg:t.content,lmsop:g.lmsop||t.lmsop,msop:t.msop},value:{last_message:"Just last message sample from sync"+Date.now(),last_message_id:t.message_id,lmsop:t.lmsop}})}))}))};t=function(){v()},n=2500,s=Object(l.useRef)(),Object(l.useEffect)((function(){s.current=t}),[t]),Object(l.useEffect)((function(){if(null!==n){var e=setInterval((function(){s.current()}),n);return function(){return clearInterval(e)}}}),[n]),Object(l.useEffect)((function(){i.current.scrollTop=i.current.scrollHeight}),[g.messages.length]);Object(l.useEffect)((function(){v(),function(e){if(localStorage)try{var t=[],a=localStorage.getItem("gachat_id");null!==a&&""!==a&&(t=a.split(",")),-1===t.indexOf(e)&&(t.push(e),localStorage.setItem("gachat_id",t.join(",")))}catch(e){}}(e.chatId);var t=u.current,n=a(58),r=t.querySelectorAll('[data-toggle="tab"]');return r.length>0&&Array.prototype.forEach.call(r,(function(e){new n.Tab(e)})),function(){!function(e){if(localStorage)try{var t=[],a=localStorage.getItem("gachat_id");null!==a&&""!==a&&(t=a.split(",")),-1!==t.indexOf(e)&&t.splice(t.indexOf(e),1),localStorage.setItem("gachat_id",t.join(","))}catch(e){}}(e.chatId)}}),[]);return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-sm-7 chat-main-left-column"},o.a.createElement("div",{className:"message-block"},o.a.createElement("div",{className:"msgBlock msgBlock-admin",ref:i},g.messages.map((function(t,a){return o.a.createElement(b,{key:"msg_"+e.chatId+"_"+a,index:a,message:t})})))),o.a.createElement("div",{className:"message-container-admin mt-2"},o.a.createElement("textarea",{ref:c,placeholder:"",onKeyDown:function(t){return function(t,a){if(13==t.keyCode)return m.a.post(WWW_DIR_JAVASCRIPT+"groupchat/addmessage/"+e.chatId,{msg:c.current.value}).then((function(e){v()})),c.current.value="",t.preventDefault(),void t.stopPropagation()}(t)},className:"form-control form-control-sm form-group",rows:"2"}))),o.a.createElement("div",{className:"col-sm-5 chat-main-right-column"},o.a.createElement("div",{role:"tabpanel"},o.a.createElement("ul",{className:"nav nav-pills",role:"tablist",ref:u},o.a.createElement("li",{role:"presentation",className:"nav-item"},o.a.createElement("a",{className:"nav-link active",href:"#group-chat-"+e.chatId,"aria-controls":"#group-chat-"+e.chatId,role:"tab","data-toggle":"tab",title:"Operators"},o.a.createElement("i",{className:"material-icons mr-0"},"face"))),o.a.createElement("li",{className:"nav-item",role:"presentation"},o.a.createElement("a",{className:"nav-link ",href:"#group-chat-info-"+e.chatId,"aria-controls":"#group-chat-info-"+e.chatId,title:"Information",role:"tab","data-toggle":"tab"},o.a.createElement("i",{className:"material-icons mr-0"},"info_outline")))),o.a.createElement("div",{className:"tab-content"},o.a.createElement("div",{role:"tabpanel",className:"tab-pane active",id:"group-chat-"+e.chatId},o.a.createElement("ul",{className:"list-group list-group-flush border-0"},o.a.createElement("li",{className:"list-group-item pl-1 py-0"},"Cras justo odio"),o.a.createElement("li",{className:"list-group-item"},"Dapibus ac facilisis in"),o.a.createElement("li",{className:"list-group-item"},"Morbi leo risus"),o.a.createElement("li",{className:"list-group-item"},"Porta ac consectetur ac"),o.a.createElement("li",{className:"list-group-item"},"Vestibulum at eros"))),o.a.createElement("div",{role:"tabpanel",className:"tab-pane",id:"group-chat-info-"+e.chatId},o.a.createElement("p",null,"Group chat information...")))))))}}}]);