(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"07c8":function(e,t,n){},"099e":function(e,t,n){},"19ed":function(e,t,n){"use strict";var s=n("f27f"),i=n.n(s);i.a},"25b8":function(e,t,n){"use strict";var s=n("6632"),i=n.n(s);i.a},2707:function(e,t,n){},"27c7":function(e,t,n){"use strict";var s=n("9cba"),i=n.n(s);i.a},"2abe":function(e,t,n){"use strict";var s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["container wish",e.rootDivClassName]},[n("WishHeader",{attrs:{isWishFormInFocus:e.wishFormInFocus,isWishSent:e.wishSent,title:e.title}}),n("DoneMessage",{attrs:{isHidden:!e.wishSent,message:e.doneMessage,actions:e.doneActions}}),n("WishForm",{attrs:{placeholder:e.inputPlaceholder,isHidden:e.wishSent,ymGoalPrefix:e.wishType,recaptchaSiteKey:"6LfRWDsUAAAAAIDgXusXVA7JmuSbmWlStqLkSFal"}}),n("WishCounter",{attrs:{isHidden:e.wishFormInFocus,recipient:e.recipient,wishCount:e.wishCount,social:e.social}}),n("TipAccordion",{attrs:{isHidden:e.wishSent||e.wishFormInFocus,tip:e.tip}})],1)},i=[],a=n("2f62"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["container-done-msg",e.className]},[n("p",[e._v(e._s(e.message))]),e.isHidden?e._e():n("span",e._l(e.actions,function(t){return n("span",{key:t.name},[n(t.component,{tag:"component",attrs:{data:t.data,isHidden:e.isHidden}})],1)}),0),n("Banner",{attrs:{isHidden:e.isHidden}})],1)},r=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",{class:["banner-done",e.className]},[n("div",{attrs:{id:"yandex_rtb_R-A-292666-1"}})])},u=[],l={name:"Banner",props:{isHidden:Boolean},mounted:function(){var e=document.createElement("script");e.setAttribute("type","text/javascript"),e.innerHTML='(function(w, d, n, s, t, ids) {\n      w[n] = w[n] || [];\n      w[n].push(function() {\n          Ya.Context.AdvManager.render({\n              blockId: "R-A-292666-1",\n              renderTo: "yandex_rtb_R-A-292666-1",\n              async: true\n          });\n      });\n      t = d.getElementsByTagName("script")[0];\n      s = d.createElement("script");\n      s.type = "text/javascript";\n      s.src = "//an.yandex.ru/system/context.js";\n      s.async = true;\n      t.parentNode.insertBefore(s, t);\n    })(this, this.document, "yandexContextAsyncCallbacks");',document.head.appendChild(e)},computed:{className:function(){return this.isHidden?"hide":""}}},d=l,h=(n("ad8e"),n("2877")),p=Object(h["a"])(d,o,u,!1,null,"599f49ca",null),f=p.exports,m={name:"DoneMessage",props:{message:String,isHidden:Boolean,actions:Array},components:{Banner:f},computed:{className:function(){return this.isHidden?"hide":""}}},b=m,v=(n("599b"),Object(h["a"])(b,c,r,!1,null,"2f255158",null)),_=v.exports,S=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v("\n  Все очень просто. Под новый год нужно мечтать широко и загадывать самое заветное!\n  А чтобы Дед Мороз не ошибся, сформулируй желание очень-очень конкретно, в позитивной формулировке\n  (без всяких 'не'), запиши в окошко вверху, и нажми кнопку "),n("SendButton"),e._v(". Все!\n  Дедушка Мороз позаботится о твоих желаниях.\n")],1)},y=[],w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{class:e.className,attrs:{height:"32",viewBox:"0 0 64 64",width:"32",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M47.964 8.127H16.036c-4.4 0-8 3.6-8 8v20.977c0 4.4 3.6 8 8\n                      8h7.397v10.768l13.333-10.768h11.197c4.4 0 8-3.6 8-8V16.127c0-4.4-3.6-8-8-8zm3\n                      28.977c0 1.626-1.374 3-3 3H35l-1.375 1.11-5.19 4.193v-5.303H16.036c-1.626\n                      0-3-1.374-3-3V16.127c0-1.626 1.374-3 3-3h31.928c1.626 0 3 1.374 3 3v20.977z"}}),n("circle",{attrs:{cx:"21.743",cy:"26.617",r:"2.913"}}),n("circle",{attrs:{cx:"32",cy:"26.617",r:"2.913"}}),n("circle",{attrs:{cx:"42.256",cy:"26.617",r:"2.913"}})])},x=[],O={name:"SendButton",props:{className:String}},g=O,T=(n("ac3a"),Object(h["a"])(g,w,x,!1,null,"311c520d",null)),C=T.exports,H={name:"StandardTip",components:{SendButton:C}},E=H,W=Object(h["a"])(E,S,y,!1,null,"93ef8eca",null),j=W.exports,F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e.data.textBeforeAction?n("span",[e._v("\n    "+e._s(e.data.textBeforeAction)+"\n    "),n("br")]):e._e(),n("a",{class:["link",e.className],attrs:{href:"#",id:"again"},on:{click:e.sendOneMoreWish}},[e._v(e._s(e.data.callToActionText))])])},N=[];function I(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),s.forEach(function(t){B(e,t,n[t])})}return e}function B(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A={name:"OneMoreWish",props:{data:Object,isHidden:Boolean},computed:{className:function(){return this.isHidden?"hide":""}},methods:I({sendOneMoreWish:function(){this.SET_WISH_SENT({isSent:!1})}},Object(a["b"])(["SET_WISH_SENT"]))},P=A,k=(n("25b8"),Object(h["a"])(P,F,N,!1,null,"2adcdf16",null)),M=k.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("span",[e._v('\n  \'Хочу, хочу, хочу!\'. Мы постоянно загадываем желания.\n  Трем носы и пальцы городским достопримечательностям, портим праздничное шампанское, ловим "22:22"\n  на часах. А они, заветные, все не сбываются. Что делать и как с этим бороться? Очень просто.\n  Перестать на них фокусироваться. Отправить запрос и заниматься своими делами.\n  Он обязательно дойдет куда надо и запишется на исполнение. Для этого всего лишь нужно\n  сформулировать его очень-очень конкретно, в позитивной формулировке (без всяких "не"),\n  записать в окошко сверху, нажать кнопку '),n("SendButton"),e._v(" и "),n("em",[e._v("забыть")]),e._v(".\n  Космос позаботится о Ваших желаниях. "),n("span",[e._v("Он уже начал.")])],1)},D=[],R={name:"StandardTip",components:{SendButton:C}},U=R,G=Object(h["a"])(U,$,D,!1,null,"fc51b50e",null),X=G.exports,V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"accordion"},[n("div",{staticClass:"accordion-section"},[n("a",{class:["accordion-section-title",e.titleClassName],attrs:{href:"#tip"},on:{click:e.toggleCollapse}},[e._v("\n      "+e._s(e.tip["title"])+"\n    ")]),n("div",{class:["accordion-section-content",e.textClassName],attrs:{id:"tip"}},[n(e.tip["text"],{tag:"component"})],1)])])},z=[],J={name:"Tip",props:{tip:Object,isHidden:Boolean},data:function(){return{collapsed:!0}},methods:{toggleCollapse:function(){this.collapsed=!this.collapsed}},computed:{titleClassName:function(){return this.isHidden?"hide":""},textClassName:function(){return(this.collapsed?"":"active ")+(this.isHidden?"hide":"")}}},K=J,L=(n("27c7"),Object(h["a"])(K,V,z,!1,null,"b1aca1d4",null)),q=L.exports,Y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["container-counter",e.className]},[n("p",[e._v(e._s(e.recipient)+" уже позаботился о "),n("strong",[e._v(e._s(e.wishCount))]),e._v(" запросах")]),n("p",[e._v("Если рассказать об этом друзьям, счастливых людей станет больше")]),n("SocialShare",{attrs:{social:e.social,isHide:e.isHidden}})],1)},Q=[],Z=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:["ya-share2",e.className],attrs:{"data-services":e.socialServices,"data-title":e.social["title"],"data-description":e.social["text"]}})},ee=[],te={name:"SocialShare",props:{isHide:Boolean,social:Object},data:function(){return{socialServices:"vkontakte,facebook,odnoklassniki,twitter,viber,whatsapp,telegram"}},computed:{className:function(){return this.isHide?"hide":""}},mounted:function(){var e=document.createElement("script");e.setAttribute("src","//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"),document.head.appendChild(e);var t=document.createElement("script");t.setAttribute("src","//yastatic.net/share2/share.js"),document.head.appendChild(t)}},ne=te,se=(n("19ed"),Object(h["a"])(ne,Z,ee,!1,null,"6a8c5082",null)),ie=se.exports,ae={name:"WishCounter",props:{recipient:String,wishCount:Number,isHidden:Boolean,social:Object},components:{SocialShare:ie},computed:{className:function(){return this.isHidden?"hide":""}}},ce=ae,re=(n("c80e"),Object(h["a"])(ce,Y,Q,!1,null,"d16797e4",null)),oe=re.exports,ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("form",{class:["container-form",e.formClassName],on:{submit:function(t){return t.preventDefault(),e.executeCaptcha(t)}}},[n("input",{staticClass:"container-form-input",attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.wishText},on:{change:e.handleWishChange,focus:e.handleFocus,blur:e.handleBlur}}),n("vue-recaptcha",{ref:"recaptcha",attrs:{size:"invisible",theme:"dark",sitekey:e.recaptchaSiteKey},on:{verify:e.sendWish,expired:e.onCaptchaExpired}}),n("button",{class:["container-form-button",e.buttonClassName],attrs:{disabled:!e.wishText}},[n("SendButton",{attrs:{className:"container-form-button-icon"}})],1)],1)},le=[],de=n("bc3a"),he=n.n(de),pe=n("e096");function fe(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),s.forEach(function(t){me(e,t,n[t])})}return e}function me(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var be="https://hello.wishbox.space/api/wishes",ve={name:"WishForm",props:{placeholder:String,isHidden:Boolean,ymGoalPrefix:String,recaptchaSiteKey:String},components:{SendButton:C,VueRecaptcha:pe["a"]},computed:fe({formClassName:function(){return this.isHidden?"hide":""},buttonClassName:function(){return this.isWishFormInFocus?"focused":""}},Object(a["c"])(["userId","wishText"])),methods:fe({executeCaptcha:function(){this.$refs.recaptcha.execute()},handleBlur:function(){this.SET_WISH_FORM_FOCUS({inFocus:!1})},handleFocus:function(){this.SET_WISH_FORM_FOCUS({inFocus:!0});var e=this.ymGoalPrefix?"".concat(this.ymGoalPrefix,"_INPUT_FOCUS"):"INPUT_FOCUS";window["yaCounter33316388"].reachGoal(e)},handleWishChange:function(e){this.SET_WISH_TEXT({text:e.target.value})},onCaptchaExpired:function(){this.$refs.recaptcha.reset()},sendWish:function(e){var t="anon";if(window["yaCounter33316388"]){var n=this.ymGoalPrefix?"".concat(this.ymGoalPrefix,"_WISH"):"WISH";window["yaCounter33316388"].reachGoal(n),t=window["yaCounter33316388"].getClientID()}this.SET_USER_ID({id:t}),he.a.post(be,{text:this.wishText,external_user_id:this.userId,recaptcha_token:e}).then(function(e){console.log(e)}).catch(function(e){console.log(e)}),this.SET_WISH_SENT({isSent:!0}),this.SET_WISH_TEXT({text:""}),this.SET_WISH_FORM_FOCUS({inFocus:!1}),this.$refs.recaptcha.reset()}},Object(a["b"])(["SET_USER_ID","SET_WISH_FORM_FOCUS","SET_WISH_TEXT","SET_WISH_SENT"]))},_e=ve,Se=(n("8057"),Object(h["a"])(_e,ue,le,!1,null,"628d7c17",null)),ye=Se.exports,we=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h1",{class:["container-header",e.className]},[e._v("\n  "+e._s(e.text)+"\n")])},xe=[],Oe={name:"WishHeader",props:{title:String,isWishSent:Boolean,isWishFormInFocus:Boolean},computed:{className:function(){return(this.isWishSent?"done ":"")+(this.isWishFormInFocus?"input-focus ":"")},text:function(){return this.isWishSent?"Готово":this.title}}},ge=Oe,Te=(n("37ba"),Object(h["a"])(ge,we,xe,!1,null,"521dbbc1",null)),Ce=Te.exports;function He(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),s.forEach(function(t){Ee(e,t,n[t])})}return e}function Ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var We={name:"Wish",components:{DoneMessage:_,TipAccordion:q,WishCounter:oe,WishHeader:Ce,WishForm:ye},props:{wishType:{type:String,default:""}},computed:He({doneActions:function(){var e=[{name:"SubmitOneMoreWish",component:M,data:{callToActionText:"Но лучше загадать еще одно желание"}}],t=[{name:"SubmitOneMoreWish",component:M,data:{textBeforeAction:"А если ты весь год был хорошим мальчиком или девочкой, то можешь",callToActionText:"загадать еще одно желание."}}];return"ny"===this.wishType?t:e},doneMessage:function(){var e="Запрос ушел Космосу, теперь осталось расслабиться и перестань об этом думать. Все будет хорошо!",t="Желание ушло Деду Морозу. Продолжай хорошо себя вести и оно обязательно сбудется!";return"ny"===this.wishType?t:e},inputPlaceholder:function(){return"ny"===this.wishType?"... формулируй, дедушка ждет":"... формулируй, космос ждет"},social:function(){var e={title:"Расскажите Космосу о своей мечте",text:"Как сделать так, чтобы заветное желание исполнилось? Попросить об этом Космос!"},t={title:"Расскажите Деду Морозу о своем желании",text:"Как исполнить желание на Новый год? Попросить об этом Деда Мороза!"};return"ny"===this.wishType?t:e},title:function(){return"ny"===this.wishType?"Дорогой Дедушка Мороз, ...":"Хочу, чтобы..."},tip:function(){var e={title:"Что здесь происходит?",text:X},t={title:"Как загадать желание на Новый год?",text:j};return"ny"===this.wishType?t:e},recipient:function(){return"ny"===this.wishType?"Дед Мороз":"Космос"},rootDivClassName:function(){return"ny"===this.wishType?"new-year":""}},Object(a["c"])(["wishCount","wishFormInFocus","wishSent"]))},je=We,Fe=(n("b8fb"),Object(h["a"])(je,s,i,!1,null,"087130b0",null));t["a"]=Fe.exports},"37ba":function(e,t,n){"use strict";var s=n("07c8"),i=n.n(s);i.a},"599b":function(e,t,n){"use strict";var s=n("2707"),i=n.n(s);i.a},6632:function(e,t,n){},8057:function(e,t,n){"use strict";var s=n("9066"),i=n.n(s);i.a},9066:function(e,t,n){},"98bf":function(e,t,n){},"9c89":function(e,t,n){},"9cba":function(e,t,n){},ac3a:function(e,t,n){"use strict";var s=n("e4b4"),i=n.n(s);i.a},ad8e:function(e,t,n){"use strict";var s=n("98bf"),i=n.n(s);i.a},b8fb:function(e,t,n){"use strict";var s=n("9c89"),i=n.n(s);i.a},c80e:function(e,t,n){"use strict";var s=n("099e"),i=n.n(s);i.a},e4b4:function(e,t,n){},f27f:function(e,t,n){}}]);
//# sourceMappingURL=chunk-common.642036ae.js.map