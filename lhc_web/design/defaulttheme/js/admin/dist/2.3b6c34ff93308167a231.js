(window.webpackJsonpLHCReactAPPAdmin=window.webpackJsonpLHCReactAPPAdmin||[]).push([[2],{8:function(e,a,t){"use strict";t.r(a);var n=t(18),c=t.n(n),l=t(0),s=t.n(l),i=t(24),r=t.n(i);a.default=function(e){var a=Object(l.useState)([]),t=c()(a,2),n=t[0],i=t[1],o=Object(l.useState)(!1),d=c()(o,2),h=d[0],m=d[1];return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"col-7"},!h&&s.a.createElement("p",null,s.a.createElement("button",{type:"button",onClick:function(){r.a.get(WWW_DIR_JAVASCRIPT+"cannedmsg/filter/"+e.chatId).then((function(e){i(e.data),m(!0)}))}},"Load")),h&&n.map((function(e){return s.a.createElement("li",null,e.title,e.messages.map((function(e){return s.a.createElement("li",null,e.message_title)})))}))),s.a.createElement("div",{className:"col-3"},s.a.createElement("input",{type:"text",class:"form-control form-control-sm",id:"id_CannedMessageSearch-<?php echo $chat->id?>",value:"",placeholder:"<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/adminchat','Type to search')?>"})),s.a.createElement("div",{class:"col-2 sub-action-chat",id:"sub-action-chat-<?php echo $chat->id?>"},s.a.createElement("div",{className:"row d-flex"},s.a.createElement("div",{class:"col pl-0 pr-2"},s.a.createElement("a",{title:"<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/adminchat','Fill textarea with canned message')?>",href:"#",onclick:"$('#CSChatMessage-<?php echo $chat->id?>').val(($('#id_CannedMessage-<?php echo $chat->id?>').val() > 0) ? $('#id_CannedMessage-<?php echo $chat->id?>').find(':selected').attr('data-msg') : '');return false;",class:"btn btn-secondary w-100 btn-sm fill-editor-canned"},s.a.createElement("i",{class:"material-icons mr-0"},"mode_edit"))),s.a.createElement("div",{className:"col pl-0 pr-2"},s.a.createElement("a",{title:"<?php echo erTranslationClassLhTranslation::getInstance()->getTranslation('chat/adminchat','Send delayed canned message instantly')?>",href:"#",className:"btn btn-secondary w-100 btn-sm send-delayed-canned",onClick:"return lhinst.sendCannedMessage('<?php echo $chat->id?>',$(this))"},s.a.createElement("i",{className:"material-icons mr-0"},"mail"))))))}}}]);