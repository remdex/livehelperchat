(window.webpackJsonpLHCReactAPPAdmin=window.webpackJsonpLHCReactAPPAdmin||[]).push([[2],{8:function(e,a,t){"use strict";t.r(a);var n=t(18),c=t.n(n),s=t(0),l=t.n(s),m=t(24),r=t.n(m);a.default=function(e){var a=Object(s.useState)([]),t=c()(a,2),n=t[0],m=t[1],d=Object(s.useState)(!1),i=c()(d,2),o=i[0],u=i[1],f=function(){r.a.get(WWW_DIR_JAVASCRIPT+"cannedmsg/filter/"+e.chatId).then((function(e){m(e.data),u(!0)}))};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"col-6"},l.a.createElement("input",{type:"text",onClick:f,className:"form-control form-control-sm",defaultValue:"",placeholder:"Type to search"}),!o&&l.a.createElement("p",{className:"border mt-1"},l.a.createElement("a",{className:"fs13",onClick:f},l.a.createElement("span",{className:"material-icons"},"expand_more")," Canned messages")),o&&l.a.createElement("ul",{className:"list-unstyled fs13 border mt-1"},n.map((function(a,t){return l.a.createElement("li",null,l.a.createElement("a",{onClick:function(){return c=t,(e=a).expanded=!e.expanded,void m(n.map((function(a,t){return c==t?e:a})));var e,c}},l.a.createElement("span",{className:"material-icons"},"expand_more"),a.title," [",a.messages.length,"]"),a.expanded&&l.a.createElement("ul",{className:"list-unstyled ml-4"},a.messages.map((function(a){return l.a.createElement("li",null,l.a.createElement("a",{title:"Send instantly",onClick:function(t){return function(a){setTimeout((function(){var t=new FormData;t.append("msg",a.msg),r.a.post(WWW_DIR_JAVASCRIPT+"chat/addmsgadmin/"+e.chatId,t,{headers:{"X-CSRFToken":confLH.csrf_token}}).then((function(a){return LHCCallbacks.addmsgadmin&&LHCCallbacks.addmsgadmin(e.chatId),ee.emitEvent("chatAddMsgAdmin",[e.chatId]),lhinst.syncadmincall(),!0}))}),a.delay)}(a)}},l.a.createElement("span",{className:"material-icons fs12"},"send")),l.a.createElement("a",{title:a.msg,onClick:function(t){return function(a){document.getElementById("CSChatMessage-"+e.chatId).value=a.msg,document.getElementById("CSChatMessage-"+e.chatId).focus()}(a)}},a.message_title))}))))})))),l.a.createElement("div",{className:"col-6"},"Preview rendered..."))}}}]);