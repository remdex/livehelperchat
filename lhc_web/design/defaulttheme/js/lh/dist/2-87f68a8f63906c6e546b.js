webpackJsonp([2],[,,,function(t,i,e){function s(t){return e(n(t))}function n(t){return a[t]||function(){throw new Error("Cannot find module '"+t+"'.")}()}var a={"./lhc.speak.js":4,"./lhc.translation.js":5};s.keys=function(){return Object.keys(a)},s.resolve=n,t.exports=s,s.id=3},function(t,i){var e=function(){function t(t){this.recognizing=!1,this.startOnEnd=!1,this.final_transcript="",this.chat_id=t.chat_id,this.recognition=t.recognition,this.originText=""!=$("#CSChatMessage-"+this.chat_id).val()?$("#CSChatMessage-"+this.chat_id).val()+" ":""}return t.prototype.onstart=function(){$("#CSChatMessage-"+this.chat_id).addClass("admin-chat-mic"),$("#user-chat-status-"+this.chat_id).removeClass("icon-user").addClass("icon-mic"),$("#mic-chat-"+this.chat_id).addClass("text-danger").find(".mic-lang").text(this.recognition.lang),$("#user-is-typing-"+this.chat_id).html("Speak now.").css("visibility","visible")},t.prototype.onend=function(){$("#user-chat-status-"+this.chat_id).addClass("icon-user").removeClass("icon-mic"),$("#CSChatMessage-"+this.chat_id).removeClass("admin-chat-mic"),$("#mic-chat-"+this.chat_id).removeClass("text-danger").find(".mic-lang").text(""),$("#user-is-typing-"+this.chat_id).html(""),this.startOnEnd===!0&&(this.originText=$("#CSChatMessage-"+this.chat_id).val(),this.final_transcript="",this.startOnEnd=!1,this.recognition.start())},t.prototype.onerror=function(t){"no-speech"==t.error&&$("#user-is-typing-"+this.chat_id).html("No speech was detected.").css("visibility","visible"),"audio-capture"==t.error&&$("#user-is-typing-"+this.chat_id).html("No microphone was found.").css("visibility","visible"),"not-allowed"==t.error&&$("#user-is-typing-"+this.chat_id).html("Permission to use microphone was denied.").css("visibility","visible")},t.prototype.onresult=function(t){if(this.startOnEnd===!1){for(var i="",e=t.resultIndex;e<t.results.length;++e)t.results[e].isFinal?this.final_transcript+=t.results[e][0].transcript:i+=t.results[e][0].transcript;""!=i?$("#user-is-typing-"+this.chat_id).html(i).css("visibility","visible"):$("#user-is-typing-"+this.chat_id).html("").css("visibility","hidden"),$("#CSChatMessage-"+this.chat_id).val(this.originText+this.final_transcript+i).focus(),ee.emitEvent("afterSpeechToTextCallbackResult",[this.chat_id,this.originText+this.final_transcript+i]),lhinst.operatorTypingCallback(this.chat_id)}},t}();t.exports=function(){function t(){"webkitSpeechRecognition"in window?(this.recognizing=!1,this.browserSupported=!0,this.final_transcript="",this.chat_id=!1,this.chatDialect=[]):(alert("Sorry but only chrome is supported"),this.browserSupported=!1)}return t.prototype.stopSpeech=function(){this.browserSupported===!0&&this.recognizing===!0&&(this.recognizing=!1,this.recognition.stop())},t.prototype.messageSend=function(){this.browserSupported===!0&&(this.recognition.callbackHandler.startOnEnd=!0,this.recognition.stop())},t.prototype.setChatDialect=function(t,i){this.chatDialect[t]=i},t.prototype.getChatDialectAndStart=function(){var t=this;$.getJSON(WWW_DIR_JAVASCRIPT+"speech/getchatdialect/"+this.chat_id,function(i){i.error===!1?(t.chatDialect[t.chat_id]=i.dialect,t.recognition.lang=t.chatDialect[t.chat_id],t.recognition.start()):alert(i.result)})},t.prototype.getDialect=function(t){$.get(WWW_DIR_JAVASCRIPT+"speech/getdialect/"+t.val(),function(t){$("#id_select_dialect").replaceWith(t)})},t.prototype.setChatLanguageRecognition=function(t){return $.postJSON(WWW_DIR_JAVASCRIPT+"speech/setchatspeechlanguage/"+t.chat_id,{select_language:$("#id_select_language").val(),select_dialect:$("#id_select_dialect").val()},function(i){"false"==i.error&&(t.lhinst.speechHandler!==!1&&t.lhinst.speechHandler.setChatDialect(t.chat_id,i.dialect),$("#myModal").modal("hide"))}),!1},t.prototype.listen=function(t){if(this.browserSupported===!0){var i=this;if(this.chat_id!==!1&&this.chat_id!=t.chat_id?($("#CSChatMessage-"+this.chat_id).unbind("input propertychange",function(){}),this.stopSpeech()):$("#CSChatMessage-"+t.chat_id).bind("input propertychange",function(){i.messageSend()}),this.chat_id=t.chat_id,this.recognizing===!1){this.recognition=new webkitSpeechRecognition,this.recognition.continuous=!0,this.recognition.interimResults=!0;var s=new e({chat_id:this.chat_id,recognition:this.recognition});this.recognition.onresult=function(t){s.onresult(t)},this.recognition.onstart=function(){s.onstart()},this.recognition.onend=function(){s.onend()},this.recognition.onerror=function(t){s.onerror(t)},this.recognition.callbackHandler=s,this.recognizing=!0,void 0!=this.chatDialect[this.chat_id]?(this.recognition.lang=this.chatDialect[this.chat_id],this.recognition.start()):this.getChatDialectAndStart(),lhinst.speechHandler===!1&&(lhinst.speechHandler=this)}else this.stopSpeech(),lhinst.speechHandler=!1}},new t}()},function(t,i){t.exports=function(){function t(){}return t.prototype.startTranslation=function(t){t.btn.prop("disabled","disabled"),t.btn.button("loading"),jQuery.getJSON(WWW_DIR_JAVASCRIPT+"translation/starttranslation/"+t.chat_id+"/"+jQuery("#id_chat_locale_"+t.chat_id).val()+"/"+jQuery("#id_chat_locale_to_"+t.chat_id).val(),function(i){jQuery("#main-user-info-translation-"+t.chat_id+" > div.alert").remove(),jQuery("#main-user-info-translation-"+t.chat_id).prepend(i.result),i.error===!1?i.translation_status===!0?(jQuery("#id_chat_locale_"+t.chat_id+' option[value="'+i.chat_locale+'"]').prop("selected",!0),jQuery("#id_chat_locale_to_"+t.chat_id+' option[value="'+i.chat_locale_to+'"]').prop("selected",!0),jQuery("#messagesBlock-"+t.chat_id).html(""),lhinst.updateChatLastMessageID(t.chat_id,0),lhinst.syncadmincall(),jQuery(".translate-button-"+t.chat_id).addClass("btn-success")):(jQuery(".translate-button-"+t.chat_id).removeClass("btn-success"),jQuery("#id_chat_locale_"+t.chat_id+' option[value="0"]').prop("selected",!0),jQuery("#id_chat_locale_to_"+t.chat_id+' option[value="0"]').prop("selected",!0)):jQuery("#chat-tab-items-"+t.chat_id+' a[href="#main-user-info-translation-'+t.chat_id+'"]').tab("show"),t.btn.button("reset"),t.btn.prop("disabled","")})},new t}()}]);