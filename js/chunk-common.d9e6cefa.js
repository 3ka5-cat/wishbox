(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"02c3":function(t,e,n){},"07c8":function(t,e,n){},"0865":function(t,e,n){},"19ed":function(t,e,n){"use strict";var s=n("f27f"),i=n.n(s);i.a},2635:function(t,e,n){},"27fc":function(t,e,n){"use strict";var s=n("02c3"),i=n.n(s);i.a},"2abe":function(t,e,n){"use strict";var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["container wish",t.rootDivClassName]},[n("WishHeader",{attrs:{isWishFormInFocus:t.wishFormInFocus,isWishSent:t.wishSent,title:t.title}}),n("DoneMessage",{attrs:{isWishSent:t.wishSent,messages:t.doneMessages,bannerRtbId:t.bannerRtbId,bannerRtbBlockId:t.bannerRtbBlockId}}),n("WishForm",{attrs:{placeholder:t.inputPlaceholder,isWishSent:t.wishSent,ymGoalPrefix:t.wishType,recaptchaSiteKey:"6LfRWDsUAAAAAIDgXusXVA7JmuSbmWlStqLkSFal"}}),n("WishCounter",{attrs:{isWishFormInFocus:t.wishFormInFocus,recipient:t.recipient,wishCount:t.wishCount,social:t.social}}),n("TipAccordion",{attrs:{isWishFormInFocus:t.wishFormInFocus,tip:t.tip}})],1)},i=[],r=n("2f62"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["container-done-msg",t.className]},[n("p",[t._v(t._s(t.messages["done"]))]),n("a",{class:["link",t.className],attrs:{href:"#",id:"again"},on:{click:t.sendAgain}},[t._v(t._s(t.messages["again"])+"\n  ")]),n("Banner",{attrs:{isShown:t.isWishSent,rtbId:t.bannerRtbId,rtbBlockId:"bannerRtbBlockId"}})],1)},c=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{class:["banner-done",t.className]},[n("div",{attrs:{id:t.rtbId}})])},u=[],l={name:"Banner",props:{isShown:Boolean,rtbId:String,rtbBlockId:String},mounted:function(){if(this.rtbBlockId){var t=document.createElement("script");t.setAttribute("type","text/javascript"),t.innerHTML='(function(w, d, n, s, t) {\n        w[n] = w[n] || [];\n        w[n].push(function() {\n            Ya.Context.AdvManager.render({\n                blockId: "'.concat(this.rtbBlockId,'",\n                renderTo: "').concat(this.rtbId,'",\n                async: true\n            });\n        });\n        t = d.getElementsByTagName("script")[0];\n        s = d.createElement("script");\n        s.type = "text/javascript";\n        s.src = "//an.yandex.ru/system/context.js";\n        s.async = true;\n        t.parentNode.insertBefore(s, t);\n      })(this, this.document, "yandexContextAsyncCallbacks");'),document.head.appendChild(t)}},computed:{className:function(){return this.isShown?"":"hide"},bannerId:function(){return this.isShown?this.rtbId:""}}},h=l,d=n("2877"),p=Object(d["a"])(h,o,u,!1,null,"aa14cf98",null),f=p.exports;function m(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),s.forEach(function(e){b(t,e,n[e])})}return t}function b(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var S={name:"DoneMessage",props:{messages:Object,isWishSent:Boolean,bannerRtbId:String,bannerRtbBlockId:String},components:{Banner:f},computed:{className:function(){return this.isWishSent?"":"hide"}},methods:m({sendAgain:function(){this.SET_WISH_SENT({isSent:!1})}},Object(r["b"])(["SET_WISH_SENT"]))},v=S,_=(n("d27e"),Object(d["a"])(v,a,c,!1,null,"77a83998",null)),y=_.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._v("\n  Все очень просто. Под новый год нужно мечтать широко и загадывать самое заветное!\n  А чтобы Дед Мороз не ошибся, сформулируй желание очень-очень конкретно, в позитивной формулировке\n  (без всяких 'не'), запиши в окошко вверху, и нажми кнопку "),n("SendButton"),t._v(". Все!\n  Дедушка Мороз позаботится о твоих желаниях.\n")],1)},g=[],I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{class:t.className,attrs:{height:"32",viewBox:"0 0 64 64",width:"32",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M47.964 8.127H16.036c-4.4 0-8 3.6-8 8v20.977c0 4.4 3.6 8 8\n                      8h7.397v10.768l13.333-10.768h11.197c4.4 0 8-3.6 8-8V16.127c0-4.4-3.6-8-8-8zm3\n                      28.977c0 1.626-1.374 3-3 3H35l-1.375 1.11-5.19 4.193v-5.303H16.036c-1.626\n                      0-3-1.374-3-3V16.127c0-1.626 1.374-3 3-3h31.928c1.626 0 3 1.374 3 3v20.977z"}}),n("circle",{attrs:{cx:"21.743",cy:"26.617",r:"2.913"}}),n("circle",{attrs:{cx:"32",cy:"26.617",r:"2.913"}}),n("circle",{attrs:{cx:"42.256",cy:"26.617",r:"2.913"}})])},x=[],O={name:"SendButton",props:{className:String}},W=O,F=(n("ac3a"),Object(d["a"])(W,I,x,!1,null,"311c520d",null)),T=F.exports,C={name:"StandardTip",components:{SendButton:T}},E=C,j=Object(d["a"])(E,w,g,!1,null,"93ef8eca",null),N=j.exports,B=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._v('\n  \'Хочу, хочу, хочу!\'. Мы постоянно загадываем желания.\n  Трем носы и пальцы городским достопримечательностям, портим праздничное шампанское, ловим "22:22"\n  на часах. А они, заветные, все не сбываются. Что делать и как с этим бороться? Очень просто.\n  Перестать на них фокусироваться. Отправить запрос и заниматься своими делами.\n  Он обязательно дойдет куда надо и запишется на исполнение. Для этого всего лишь нужно\n  сформулировать его очень-очень конкретно, в позитивной формулировке (без всяких "не"),\n  записать в окошко сверху, нажать кнопку '),n("SendButton"),t._v(" и "),n("em",[t._v("забыть")]),t._v(".\n  Космос позаботится о Ваших желаниях. "),n("span",[t._v("Он уже начал.")])],1)},k=[],P={name:"StandardTip",components:{SendButton:T}},H=P,R=Object(d["a"])(H,B,k,!1,null,"fc51b50e",null),A=R.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"accordion"},[n("div",{staticClass:"accordion-section"},[n("a",{class:["accordion-section-title",t.titleClassName],attrs:{href:"#tip"},on:{click:t.toggleCollapse}},[t._v("\n      "+t._s(t.tip["title"])+"\n    ")]),n("div",{class:["accordion-section-content",t.textClassName],attrs:{id:"tip"}},[n(t.tip["text"],{tag:"component"})],1)])])},$=[],M={name:"Tip",props:{tip:Object,isWishFormInFocus:Boolean},data:function(){return{collapsed:!0}},methods:{toggleCollapse:function(){this.collapsed=!this.collapsed}},computed:{titleClassName:function(){return this.isWishFormInFocus?"hide":""},textClassName:function(){return(this.collapsed?"":"active ")+(this.isWishFormInFocus?"hide":"")}}},U=M,G=(n("3942"),Object(d["a"])(U,D,$,!1,null,"07554808",null)),X=G.exports,V=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["container-counter",t.className]},[n("p",[t._v(t._s(t.recipient)+" уже позаботился о "),n("strong",[t._v(t._s(t.wishCount))]),t._v(" запросах")]),n("p",[t._v("Если рассказать об этом друзьям, счастливых людей станет больше")]),n("SocialShare",{attrs:{social:t.social,isHide:t.isWishFormInFocus}})],1)},z=[],J=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["ya-share2",t.className],attrs:{"data-services":t.socialServices,"data-title":t.social["title"],"data-description":t.social["text"]}})},K=[],L={name:"SocialShare",props:{isHide:Boolean,social:Object},data:function(){return{socialServices:"vkontakte,facebook,odnoklassniki,twitter,viber,whatsapp,telegram"}},computed:{className:function(){return this.isHide?"hide":""}},mounted:function(){var t=document.createElement("script");t.setAttribute("src","//yastatic.net/es5-shims/0.0.2/es5-shims.min.js"),document.head.appendChild(t);var e=document.createElement("script");e.setAttribute("src","//yastatic.net/share2/share.js"),document.head.appendChild(e)}},q=L,Y=(n("19ed"),Object(d["a"])(q,J,K,!1,null,"6a8c5082",null)),Q=Y.exports,Z={name:"WishCounter",props:{recipient:String,wishCount:Number,isWishFormInFocus:Boolean,social:Object},components:{SocialShare:Q},computed:{className:function(){return this.isWishFormInFocus?"hide":""}}},tt=Z,et=(n("a806"),Object(d["a"])(tt,V,z,!1,null,"44105290",null)),nt=et.exports,st=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("form",{class:["container-form",t.formClassName],on:{submit:function(e){return e.preventDefault(),t.executeCaptcha(e)}}},[n("input",{staticClass:"container-form-input",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.wishText},on:{change:t.handleWishChange,focus:t.handleFocus,blur:t.handleBlur}}),n("vue-recaptcha",{ref:"recaptcha",attrs:{size:"invisible",theme:"dark",sitekey:t.recaptchaSiteKey},on:{verify:t.sendWish,expired:t.onCaptchaExpired}}),n("button",{class:["container-form-button",t.buttonClassName],attrs:{disabled:!t.wishText}},[n("SendButton",{attrs:{className:"container-form-button-icon"}})],1)],1)},it=[],rt=n("bc3a"),at=n.n(rt),ct=n("e096");function ot(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),s.forEach(function(e){ut(t,e,n[e])})}return t}function ut(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var lt="https://hello.wishbox.space/api/wishes",ht={name:"WishForm",props:{placeholder:String,isWishSent:Boolean,ymGoalPrefix:String,recaptchaSiteKey:String},components:{SendButton:T,VueRecaptcha:ct["a"]},computed:ot({formClassName:function(){return this.isWishSent?"hide":""},buttonClassName:function(){return this.isWishFormInFocus?"focused":""}},Object(r["c"])(["userId","wishText"])),methods:ot({executeCaptcha:function(){this.$refs.recaptcha.execute()},handleBlur:function(){this.SET_WISH_FORM_FOCUS({inFocus:!1})},handleFocus:function(){this.SET_WISH_FORM_FOCUS({inFocus:!0});var t=this.ymGoalPrefix?"".concat(this.ymGoalPrefix,"_INPUT_FOCUS"):"INPUT_FOCUS";window["yaCounter33316388"].reachGoal(t)},handleWishChange:function(t){this.SET_WISH_TEXT({text:t.target.value})},onCaptchaExpired:function(){this.$refs.recaptcha.reset()},sendWish:function(t){var e="anon";if(window["yaCounter33316388"]){var n=this.ymGoalPrefix?"".concat(this.ymGoalPrefix,"_WISH"):"WISH";window["yaCounter33316388"].reachGoal(n),e=window["yaCounter33316388"].getClientID()}this.SET_USER_ID({id:e}),at.a.post(lt,{text:this.text,external_user_id:this.userId,recaptcha_token:t}).then(function(t){console.log(t)}).catch(function(t){console.log(t)}),this.SET_WISH_SENT({isSent:!0}),this.SET_WISH_TEXT({text:""})}},Object(r["b"])(["SET_USER_ID","SET_WISH_FORM_FOCUS","SET_WISH_TEXT","SET_WISH_SENT"]))},dt=ht,pt=(n("9b56"),Object(d["a"])(dt,st,it,!1,null,"4708093f",null)),ft=pt.exports,mt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{class:["container-header",t.className]},[t._v("\n  "+t._s(t.text)+"\n")])},bt=[],St={name:"WishHeader",props:{title:String,isWishSent:Boolean,isWishFormInFocus:Boolean},computed:{className:function(){return(this.isWishSent?"done ":"")+(this.isWishFormInFocus?"input-focus ":"")},text:function(){return this.isWishSent?"Готово":this.title}}},vt=St,_t=(n("37ba"),Object(d["a"])(vt,mt,bt,!1,null,"521dbbc1",null)),yt=_t.exports;function wt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},s=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(s=s.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),s.forEach(function(e){gt(t,e,n[e])})}return t}function gt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var It={name:"Wish",components:{DoneMessage:y,TipAccordion:X,WishCounter:nt,WishHeader:yt,WishForm:ft},props:{wishType:{type:String,default:""}},computed:wt({bannerRtbId:function(){return"ny"===this.wishType?"":"yandex_rtb_R-A-292666-1"},bannerRtbBlockId:function(){return"ny"===this.wishType?"":"R-A-292666-1"},doneMessages:function(){var t={done:"Запрос ушел Космосу, теперь осталось расслабиться и перестань об этом думать. Все будет хорошо!",again:"Но лучше загадать еще одно желание"},e={done:"Желание ушло Деду Морозу. Продолжай хорошо себя вести и оно обязательно сбудется! А если ты весь год был хорошим мальчиком или девочкой, ",again:"можешь загадать еще одно."};return"ny"===this.wishType?e:t},inputPlaceholder:function(){return"ny"===this.wishType?"... формулируй, дедушка ждет":"... формулируй, космос ждет"},social:function(){var t={title:"Расскажите Космосу о своей мечте",text:"Как сделать так, чтобы заветное желание исполнилось? Попросить об этом Космос!"},e={title:"Расскажите Деду Морозу о своем желании",text:"Как исполнить желание на Новый год? Попросить об этом Деда Мороза!"};return"ny"===this.wishType?e:t},title:function(){return"ny"===this.wishType?"Дорогой Дедушка Мороз, ...":"Хочу, чтобы..."},tip:function(){var t={title:"Что здесь происходит?",text:A},e={title:"Как загадать желание на Новый год?",text:N};return"ny"===this.wishType?e:t},recipient:function(){return"ny"===this.wishType?"Дед Мороз":"Космос"},rootDivClassName:function(){return"ny"===this.wishType?"new-year":""}},Object(r["c"])(["wishCount","wishFormInFocus","wishSent"]))},xt=It,Ot=(n("27fc"),Object(d["a"])(xt,s,i,!1,null,"61d11930",null));e["a"]=Ot.exports},"37ba":function(t,e,n){"use strict";var s=n("07c8"),i=n.n(s);i.a},3942:function(t,e,n){"use strict";var s=n("0865"),i=n.n(s);i.a},"4d61":function(t,e,n){},"9b56":function(t,e,n){"use strict";var s=n("4d61"),i=n.n(s);i.a},a806:function(t,e,n){"use strict";var s=n("2635"),i=n.n(s);i.a},ac3a:function(t,e,n){"use strict";var s=n("e4b4"),i=n.n(s);i.a},d27e:function(t,e,n){"use strict";var s=n("e3c5"),i=n.n(s);i.a},e3c5:function(t,e,n){},e4b4:function(t,e,n){},f27f:function(t,e,n){}}]);
//# sourceMappingURL=chunk-common.d9e6cefa.js.map