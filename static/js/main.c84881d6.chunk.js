(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{28:function(e,t,a){e.exports=a(65)},38:function(e,t,a){},59:function(e,t,a){},65:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(23),c=a.n(i),o=a(66),r=a(12),h=a.n(r),l=(a(38),a(3)),u=a(4),p=a(6),d=a(5),m=a(7),b=a(67),f=a(68),w=a(2),v=a(13),j=a.n(v),O=(a(59),function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.isWishSent,t=this.props.isWishFormInFocus,a=this.props.title;return s.a.createElement("h1",{className:"container-header "+(e?"done ":"")+(t?"input-focus ":"")},e?"\u0413\u043e\u0442\u043e\u0432\u043e":a)}}]),t}(s.a.Component)),y=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"appendYaRTB",value:function(){var e=document.createElement("script");e.setAttribute("type","text/javascript"),e.innerHTML='(function(w, d, n, s, t) {\n            w[n] = w[n] || [];\n            w[n].push(function() {\n                Ya.Context.AdvManager.render({\n                    blockId: "R-A-292666-1",\n                    renderTo: "yandex_rtb_R-A-292666-1",\n                    async: true\n                });\n            });\n            t = d.getElementsByTagName("script")[0];\n            s = d.createElement("script");\n            s.type = "text/javascript";\n            s.src = "//an.yandex.ru/system/context.js";\n            s.async = true;\n            t.parentNode.insertBefore(s, t);\n        })(this, this.document, "yandexContextAsyncCallbacks");',document.head.appendChild(e)}},{key:"render",value:function(){var e=this.props.isShown;return this.appendYaRTB(),s.a.createElement("span",{className:"banner-done "+(e?"":"hide")},s.a.createElement("div",{id:"yandex_rtb_R-A-292666-1"}))}}]),t}(s.a.Component),E=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"sendAgain",value:function(e){e.preventDefault(),this.props.updateWishSentStatus(!1)}},{key:"render",value:function(){var e=this.props.isWishSent,t=this.props.message.done,a=this.props.message.again;return s.a.createElement("div",{className:"container-done-msg "+(e?"":"hide")},s.a.createElement("p",null,t),s.a.createElement("a",{href:"#",className:"link "+(e?"":"hide"),id:"again",onClick:this.sendAgain.bind(this)},a),s.a.createElement(y,{isShown:e}))}}]),t}(s.a.Component),F=a(26),W=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.className;return s.a.createElement("svg",{className:e,height:"32",viewBox:"0 0 64 64",width:"32",xmlns:"http://www.w3.org/2000/svg"},s.a.createElement("path",{d:"M47.964 8.127H16.036c-4.4 0-8 3.6-8 8v20.977c0 4.4 3.6 8 8 8h7.397v10.768l13.333-10.768h11.197c4.4 0 8-3.6 8-8V16.127c0-4.4-3.6-8-8-8zm3 28.977c0 1.626-1.374 3-3 3H35l-1.375 1.11-5.19 4.193v-5.303H16.036c-1.626 0-3-1.374-3-3V16.127c0-1.626 1.374-3 3-3h31.928c1.626 0 3 1.374 3 3v20.977z"}),s.a.createElement("circle",{cx:"21.743",cy:"26.617",r:"2.913"}),s.a.createElement("circle",{cx:"32",cy:"26.617",r:"2.913"}),s.a.createElement("circle",{cx:"42.256",cy:"26.617",r:"2.913"}))}}]),t}(s.a.Component),C=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).executeCaptcha=function(e){e.preventDefault(),this.recaptchaRef.current.execute()},a.state={wish:""},a.handleFocus=a.handleFocus.bind(Object(w.a)(Object(w.a)(a))),a.handleBlur=a.handleBlur.bind(Object(w.a)(Object(w.a)(a))),a.handleWishChange=a.handleWishChange.bind(Object(w.a)(Object(w.a)(a))),a.sendWish=a.sendWish.bind(Object(w.a)(Object(w.a)(a))),a.executeCaptcha=a.executeCaptcha.bind(Object(w.a)(Object(w.a)(a))),a.recaptchaRef=s.a.createRef(),j.a.defaults.headers.post["Content-Type"]="application/json",a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"handleWishChange",value:function(e){this.setState({wish:e.target.value})}},{key:"handleFocus",value:function(e){this.props.updateWishFormFocus(!0),this.props.wishType?h()("reachGoal","INPUT_FOCUS_".concat(this.props.wishType)):h()("reachGoal","INPUT_FOCUS")}},{key:"handleBlur",value:function(e){this.props.updateWishFormFocus(!1)}},{key:"sendWish",value:function(){this.props.wishType?h()("reachGoal","WISH_".concat(this.props.wishType)):h()("reachGoal","WISH");var e="anon";window.yaCounter33316388&&(e=window.yaCounter33316388.getClientID());var t=this.recaptchaRef.current.getValue();j.a.post("https://hello.wishbox.space/api/wishes",{text:this.state.wish,external_user_id:e,recaptcha_token:t}).then(function(e){console.log(e)}).catch(function(e){console.log(e)}),this.setState({wish:""}),this.props.updateWishSentStatus(!0),this.recaptchaRef.current.reset()}},{key:"render",value:function(){var e=this.props.isWishSent,t=this.props.isWishFormInFocus,a=this.props.placeholder;return s.a.createElement("form",{className:"container-form "+(e?"hide":""),onSubmit:this.executeCaptcha},s.a.createElement("input",{className:"container-form-input",type:"text",placeholder:a,value:this.state.wish,onChange:this.handleWishChange,onFocus:this.handleFocus,onBlur:this.handleBlur}),s.a.createElement(F.a,{ref:this.recaptchaRef,sitekey:"6LfRWDsUAAAAAIDgXusXVA7JmuSbmWlStqLkSFal",size:"invisible",theme:"dark",onChange:this.sendWish}),s.a.createElement("button",{className:"container-form-button "+(t?"focused":""),disabled:!this.state.wish},s.a.createElement(W,{className:"container-form-button-icon"})))}}]),t}(s.a.Component),S=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.isHide,t=this.props.social.title,a=this.props.social.text;return s.a.createElement("div",{className:"ya-share2 "+(e?"hide":""),"data-services":"vkontakte,facebook,odnoklassniki,twitter,viber,whatsapp,telegram","data-title":t,"data-description":a})}}]),t}(s.a.Component),g=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.props.isWishFormInFocus;return s.a.createElement("div",{className:"container-counter "+(e?"hide":"")},s.a.createElement("p",null,this.props.recipient," \u0443\u0436\u0435 \u043f\u043e\u0437\u0430\u0431\u043e\u0442\u0438\u043b\u0441\u044f \u043e ",s.a.createElement("strong",null,this.props.wishCount)," \u0437\u0430\u043f\u0440\u043e\u0441\u0430\u0445"),s.a.createElement("p",null,"\u0415\u0441\u043b\u0438 \u0440\u0430\u0441\u0441\u043a\u0430\u0437\u0430\u0442\u044c \u043e\u0431 \u044d\u0442\u043e\u043c \u0434\u0440\u0443\u0437\u044c\u044f\u043c, \u0441\u0447\u0430\u0441\u0442\u043b\u0438\u0432\u044b\u0445 \u043b\u044e\u0434\u0435\u0439 \u0441\u0442\u0430\u043d\u0435\u0442 \u0431\u043e\u043b\u044c\u0448\u0435"),s.a.createElement(S,{social:this.props.social,isHide:e}))}}]),t}(s.a.Component),k=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={collapsed:!0},a.uncollapse=a.uncollapse.bind(Object(w.a)(Object(w.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"uncollapse",value:function(e){e.preventDefault(),this.setState({collapsed:!this.state.collapsed}),this.props.wishType?h()("reachGoal","TIP_".concat(this.props.wishType)):h()("reachGoal","TIP")}},{key:"render",value:function(){var e=this.props.isWishFormInFocus,t=this.props.tip.text,a=this.props.tip.title;return s.a.createElement("div",{className:"accordion"},s.a.createElement("div",{className:"accordion-section"},s.a.createElement("a",{href:"#tip",className:"accordion-section-title "+(e?"hide":""),onClick:this.uncollapse},a),s.a.createElement("div",{id:"tip",className:"accordion-section-content "+(this.state.collapsed?"":"active ")+(e?"hide ":"")},t)))}}]),t}(s.a.Component),x=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).state={wishFormInFocus:!1,wishSent:!1,wishCount:0},a.updateWishFormFocus=a.updateWishFormFocus.bind(Object(w.a)(Object(w.a)(a))),a.updateWishSentStatus=a.updateWishSentStatus.bind(Object(w.a)(Object(w.a)(a))),a.loadWishesCounter=a.loadWishesCounter.bind(Object(w.a)(Object(w.a)(a))),a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"updateWishSentStatus",value:function(e){this.setState({wishSent:e}),e&&this.setState({wishCount:++this.state.wishCount})}},{key:"updateWishFormFocus",value:function(e){this.setState({wishFormInFocus:e})}},{key:"loadWishesCounter",value:function(){var e=this;j.a.get("https://hello.wishbox.space/api/wishes").then(function(t){console.log(t);var a="success"===t.data.status?t.data.data.count:0;a=a<832?a+832:a,e.setState({wishCount:a})}).catch(function(t){console.log(t),e.setState({wishCount:832})})}},{key:"componentDidMount",value:function(){this.loadWishesCounter()}},{key:"render",value:function(){return s.a.createElement("div",{className:this.props.rootDivClassName},s.a.createElement(O,{isWishSent:this.state.wishSent,isWishFormInFocus:this.state.wishFormInFocus,title:this.props.topTitle}),s.a.createElement(E,{isWishSent:this.state.wishSent,updateWishSentStatus:this.updateWishSentStatus,message:this.props.doneMessage}),s.a.createElement(C,{isWishSent:this.state.wishSent,updateWishSentStatus:this.updateWishSentStatus,isWishFormInFocus:this.state.wishFormInFocus,updateWishFormFocus:this.updateWishFormFocus,placeholder:this.props.wishInputPlaceholder,wishType:this.props.wishType}),s.a.createElement(g,{isWishFormInFocus:this.state.wishFormInFocus,wishCount:this.state.wishCount,recipient:this.props.recipient,social:this.props.social}),s.a.createElement(k,{isWishFormInFocus:this.state.wishFormInFocus,tip:this.props.tip}))}}]),t}(s.a.Component),I=function(e){function t(){return Object(l.a)(this,t),Object(p.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e={wishType:"",rootDivClassName:"container wish",topTitle:"\u0425\u043e\u0447\u0443, \u0447\u0442\u043e\u0431\u044b...",doneMessage:{done:"\u0417\u0430\u043f\u0440\u043e\u0441 \u0443\u0448\u0435\u043b \u041a\u043e\u0441\u043c\u043e\u0441\u0443, \u0442\u0435\u043f\u0435\u0440\u044c \u043e\u0441\u0442\u0430\u043b\u043e\u0441\u044c \u0440\u0430\u0441\u0441\u043b\u0430\u0431\u0438\u0442\u044c\u0441\u044f \u0438 \u043f\u0435\u0440\u0435\u0441\u0442\u0430\u043d\u044c \u043e\u0431 \u044d\u0442\u043e\u043c \u0434\u0443\u043c\u0430\u0442\u044c. \u0412\u0441\u0435 \u0431\u0443\u0434\u0435\u0442 \u0445\u043e\u0440\u043e\u0448\u043e!",again:"\u041d\u043e \u043b\u0443\u0447\u0448\u0435 \u0437\u0430\u0433\u0430\u0434\u0430\u0442\u044c \u0435\u0449\u0435 \u043e\u0434\u043d\u043e \u0436\u0435\u043b\u0430\u043d\u0438\u0435"},wishInputPlaceholder:"... \u0444\u043e\u0440\u043c\u0443\u043b\u0438\u0440\u0443\u0439, \u043a\u043e\u0441\u043c\u043e\u0441 \u0436\u0434\u0435\u0442",tip:{title:"\u0427\u0442\u043e \u0437\u0434\u0435\u0441\u044c \u043f\u0440\u043e\u0438\u0441\u0445\u043e\u0434\u0438\u0442?",text:s.a.createElement("span",null,'\'\u0425\u043e\u0447\u0443, \u0445\u043e\u0447\u0443, \u0445\u043e\u0447\u0443!\'. \u041c\u044b \u043f\u043e\u0441\u0442\u043e\u044f\u043d\u043d\u043e \u0437\u0430\u0433\u0430\u0434\u044b\u0432\u0430\u0435\u043c \u0436\u0435\u043b\u0430\u043d\u0438\u044f. \u0422\u0440\u0435\u043c \u043d\u043e\u0441\u044b \u0438 \u043f\u0430\u043b\u044c\u0446\u044b \u0433\u043e\u0440\u043e\u0434\u0441\u043a\u0438\u043c \u0434\u043e\u0441\u0442\u043e\u043f\u0440\u0438\u043c\u0435\u0447\u0430\u0442\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044f\u043c, \u043f\u043e\u0440\u0442\u0438\u043c \u043f\u0440\u0430\u0437\u0434\u043d\u0438\u0447\u043d\u043e\u0435 \u0448\u0430\u043c\u043f\u0430\u043d\u0441\u043a\u043e\u0435, \u043b\u043e\u0432\u0438\u043c "22:22" \u043d\u0430 \u0447\u0430\u0441\u0430\u0445. \u0410 \u043e\u043d\u0438, \u0437\u0430\u0432\u0435\u0442\u043d\u044b\u0435, \u0432\u0441\u0435 \u043d\u0435 \u0441\u0431\u044b\u0432\u0430\u044e\u0442\u0441\u044f. \u0427\u0442\u043e \u0434\u0435\u043b\u0430\u0442\u044c \u0438 \u043a\u0430\u043a \u0441 \u044d\u0442\u0438\u043c \u0431\u043e\u0440\u043e\u0442\u044c\u0441\u044f? \u041e\u0447\u0435\u043d\u044c \u043f\u0440\u043e\u0441\u0442\u043e. \u041f\u0435\u0440\u0435\u0441\u0442\u0430\u0442\u044c \u043d\u0430 \u043d\u0438\u0445 \u0444\u043e\u043a\u0443\u0441\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f. \u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c \u0437\u0430\u043f\u0440\u043e\u0441 \u0438 \u0437\u0430\u043d\u0438\u043c\u0430\u0442\u044c\u0441\u044f \u0441\u0432\u043e\u0438\u043c\u0438 \u0434\u0435\u043b\u0430\u043c\u0438. \u041e\u043d \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0434\u043e\u0439\u0434\u0435\u0442 \u043a\u0443\u0434\u0430 \u043d\u0430\u0434\u043e \u0438 \u0437\u0430\u043f\u0438\u0448\u0435\u0442\u0441\u044f \u043d\u0430 \u0438\u0441\u043f\u043e\u043b\u043d\u0435\u043d\u0438\u0435. \u0414\u043b\u044f \u044d\u0442\u043e\u0433\u043e \u0432\u0441\u0435\u0433\u043e \u043b\u0438\u0448\u044c \u043d\u0443\u0436\u043d\u043e \u0441\u0444\u043e\u0440\u043c\u0443\u043b\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0435\u0433\u043e \u043e\u0447\u0435\u043d\u044c-\u043e\u0447\u0435\u043d\u044c \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e, \u0432 \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u0443\u043b\u0438\u0440\u043e\u0432\u043a\u0435 (\u0431\u0435\u0437 \u0432\u0441\u044f\u043a\u0438\u0445 "\u043d\u0435"), \u0437\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0432 \u043e\u043a\u043e\u0448\u043a\u043e \u0441\u0432\u0435\u0440\u0445\u0443, \u043d\u0430\u0436\u0430\u0442\u044c \u043a\u043d\u043e\u043f\u043a\u0443 ',s.a.createElement(W,null)," \u0438 ",s.a.createElement("em",null,"\u0437\u0430\u0431\u044b\u0442\u044c"),". \u041a\u043e\u0441\u043c\u043e\u0441 \u043f\u043e\u0437\u0430\u0431\u043e\u0442\u0438\u0442\u0441\u044f \u043e \u0412\u0430\u0448\u0438\u0445 \u0436\u0435\u043b\u0430\u043d\u0438\u044f\u0445. ",s.a.createElement("span",null,"\u041e\u043d \u0443\u0436\u0435 \u043d\u0430\u0447\u0430\u043b."))},recipient:"\u041a\u043e\u0441\u043c\u043e\u0441",social:{title:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u041a\u043e\u0441\u043c\u043e\u0441\u0443 \u043e \u0441\u0432\u043e\u0435\u0439 \u043c\u0435\u0447\u0442\u0435",text:"\u041a\u0430\u043a \u0441\u0434\u0435\u043b\u0430\u0442\u044c \u0442\u0430\u043a, \u0447\u0442\u043e\u0431\u044b \u0437\u0430\u0432\u0435\u0442\u043d\u043e\u0435 \u0436\u0435\u043b\u0430\u043d\u0438\u0435 \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u043b\u043e\u0441\u044c? \u041f\u043e\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u043e\u0431 \u044d\u0442\u043e\u043c \u041a\u043e\u0441\u043c\u043e\u0441!"}},t={wishType:"ny",rootDivClassName:"container wish new-year",topTitle:"\u0414\u043e\u0440\u043e\u0433\u043e\u0439 \u0414\u0435\u0434\u0443\u0448\u043a\u0430 \u041c\u043e\u0440\u043e\u0437, ...",doneMessage:{done:"\u0416\u0435\u043b\u0430\u043d\u0438\u0435 \u0443\u0448\u043b\u043e \u0414\u0435\u0434\u0443 \u041c\u043e\u0440\u043e\u0437\u0443. \u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0430\u0439 \u0445\u043e\u0440\u043e\u0448\u043e \u0441\u0435\u0431\u044f \u0432\u0435\u0441\u0442\u0438 \u0438 \u043e\u043d\u043e \u043e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e \u0441\u0431\u0443\u0434\u0435\u0442\u0441\u044f! \u0410 \u0435\u0441\u043b\u0438 \u0442\u044b \u0432\u0435\u0441\u044c \u0433\u043e\u0434 \u0431\u044b\u043b \u0445\u043e\u0440\u043e\u0448\u0438\u043c \u043c\u0430\u043b\u044c\u0447\u0438\u043a\u043e\u043c \u0438\u043b\u0438 \u0434\u0435\u0432\u043e\u0447\u043a\u043e\u0439, ",again:"\u043c\u043e\u0436\u0435\u0448\u044c \u0437\u0430\u0433\u0430\u0434\u0430\u0442\u044c \u0435\u0449\u0435 \u043e\u0434\u043d\u043e."},wishInputPlaceholder:"... \u0444\u043e\u0440\u043c\u0443\u043b\u0438\u0440\u0443\u0439, \u0434\u0435\u0434\u0443\u0448\u043a\u0430 \u0436\u0434\u0435\u0442",tip:{title:"\u041a\u0430\u043a \u0437\u0430\u0433\u0430\u0434\u0430\u0442\u044c \u0436\u0435\u043b\u0430\u043d\u0438\u0435 \u043d\u0430 \u041d\u043e\u0432\u044b\u0439 \u0433\u043e\u0434?",text:s.a.createElement("span",null,"\u0412\u0441\u0435 \u043e\u0447\u0435\u043d\u044c \u043f\u0440\u043e\u0441\u0442\u043e. \u041f\u043e\u0434 \u043d\u043e\u0432\u044b\u0439 \u0433\u043e\u0434 \u043d\u0443\u0436\u043d\u043e \u043c\u0435\u0447\u0442\u0430\u0442\u044c \u0448\u0438\u0440\u043e\u043a\u043e \u0438 \u0437\u0430\u0433\u0430\u0434\u044b\u0432\u0430\u0442\u044c \u0441\u0430\u043c\u043e\u0435 \u0437\u0430\u0432\u0435\u0442\u043d\u043e\u0435! \u0410 \u0447\u0442\u043e\u0431\u044b \u0414\u0435\u0434 \u041c\u043e\u0440\u043e\u0437 \u043d\u0435 \u043e\u0448\u0438\u0431\u0441\u044f, \u0441\u0444\u043e\u0440\u043c\u0443\u043b\u0438\u0440\u0443\u0439 \u0436\u0435\u043b\u0430\u043d\u0438\u0435 \u043e\u0447\u0435\u043d\u044c-\u043e\u0447\u0435\u043d\u044c \u043a\u043e\u043d\u043a\u0440\u0435\u0442\u043d\u043e, \u0432 \u043f\u043e\u0437\u0438\u0442\u0438\u0432\u043d\u043e\u0439 \u0444\u043e\u0440\u043c\u0443\u043b\u0438\u0440\u043e\u0432\u043a\u0435 (\u0431\u0435\u0437 \u0432\u0441\u044f\u043a\u0438\u0445 '\u043d\u0435'), \u0437\u0430\u043f\u0438\u0448\u0438 \u0432 \u043e\u043a\u043e\u0448\u043a\u043e \u0432\u0432\u0435\u0440\u0445\u0443, \u0438 \u043d\u0430\u0436\u043c\u0438 \u043a\u043d\u043e\u043f\u043a\u0443 ",s.a.createElement(W,null),". \u0412\u0441\u0435! \u0414\u0435\u0434\u0443\u0448\u043a\u0430 \u041c\u043e\u0440\u043e\u0437 \u043f\u043e\u0437\u0430\u0431\u043e\u0442\u0438\u0442\u0441\u044f \u043e \u0442\u0432\u043e\u0438\u0445 \u0436\u0435\u043b\u0430\u043d\u0438\u044f\u0445.")},recipient:"\u0414\u0435\u0434 \u041c\u043e\u0440\u043e\u0437",social:{title:"\u0420\u0430\u0441\u0441\u043a\u0430\u0436\u0438\u0442\u0435 \u0414\u0435\u0434\u0443 \u041c\u043e\u0440\u043e\u0437\u0443 \u043e \u0441\u0432\u043e\u0435\u043c \u0436\u0435\u043b\u0430\u043d\u0438\u0438",text:"\u041a\u0430\u043a \u0438\u0441\u043f\u043e\u043b\u043d\u0438\u0442\u044c \u0436\u0435\u043b\u0430\u043d\u0438\u0435 \u043d\u0430 \u041d\u043e\u0432\u044b\u0439 \u0433\u043e\u0434? \u041f\u043e\u043f\u0440\u043e\u0441\u0438\u0442\u044c \u043e\u0431 \u044d\u0442\u043e\u043c \u0414\u0435\u0434\u0430 \u041c\u043e\u0440\u043e\u0437\u0430!"}};return s.a.createElement(b.a,null,s.a.createElement(f.a,{path:"/",exact:!0,key:"original",render:function(){return s.a.createElement(x,e)}}),s.a.createElement(f.a,{path:"/ded_moroz",exact:!0,key:"newYear",render:function(){return s.a.createElement(x,t)}}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(s.a.createElement(s.a.Fragment,null,s.a.createElement(r.YMInitializer,{accounts:[33316388],options:{webvisor:!0}}),s.a.createElement(o.a,{basename:""},s.a.createElement(I,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[28,2,1]]]);
//# sourceMappingURL=main.c84881d6.chunk.js.map