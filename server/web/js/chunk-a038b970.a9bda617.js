(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a038b970"],{"038c":function(t,e,n){t.exports=n.p+"img/backTop.ac9610bf.png"},"07ac":function(t,e,n){var a=n("23e7"),i=n("6f53").values;a({target:"Object",stat:!0},{values:function(t){return i(t)}})},"1dde":function(t,e,n){var a=n("d039"),i=n("b622"),r=n("2d00"),o=i("species");t.exports=function(t){return r>=51||!a((function(){var e=[],n=e.constructor={};return n[o]=function(){return{foo:1}},1!==e[t](Boolean).foo}))}},"369c":function(t,e,n){"use strict";var a=n("a982"),i=n.n(a);i.a},"43d0":function(t,e,n){},"4de4":function(t,e,n){"use strict";var a=n("23e7"),i=n("b727").filter,r=n("1dde"),o=n("ae40"),s=r("filter"),c=o("filter");a({target:"Array",proto:!0,forced:!s||!c},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},"65f0":function(t,e,n){var a=n("861d"),i=n("e8b5"),r=n("b622"),o=r("species");t.exports=function(t,e){var n;return i(t)&&(n=t.constructor,"function"!=typeof n||n!==Array&&!i(n.prototype)?a(n)&&(n=n[o],null===n&&(n=void 0)):n=void 0),new(void 0===n?Array:n)(0===e?0:e)}},"6f53":function(t,e,n){var a=n("83ab"),i=n("df75"),r=n("fc6a"),o=n("d1e7").f,s=function(t){return function(e){var n,s=r(e),c=i(s),u=c.length,l=0,f=[];while(u>l)n=c[l++],a&&!o.call(s,n)||f.push(t?[n,s[n]]:s[n]);return f}};t.exports={entries:s(!0),values:s(!1)}},"88e9":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"homepage bg-bg"},[n("header",[n("navbar",{attrs:{navItemObj:t.navItemObj,showMobileNavItem:t.showMobileNavItem},on:{"update:showMobileNavItem":function(e){t.showMobileNavItem=e},"update:show-mobile-nav-item":function(e){t.showMobileNavItem=e}}})],1),n("article",{staticClass:"m-t-8"},[n("div",{staticClass:"content bg-white"},[n("keep-alive",{attrs:{max:"6",exclude:"articlePage"}},[n("router-view")],1)],1)]),n("footer",{staticClass:"m-t-8"},[n("div",{staticClass:"footerContent d-flex jc-start ai-center"},[t.friendList?n("div",{staticClass:"friend"},[n("div",{staticClass:"m-b-6 text-title"},[t._v("友情链接：")]),n("div",{staticClass:"m-b-5 friendLinkItems"},t._l(t.friendList,(function(e){return n("a",{key:e._id,staticClass:"text-title fs-xs",attrs:{href:e.url,target:"_blank"}},[t._v(t._s(e.name)),n("span",{staticClass:"fs-xxs"},[t._v("："+t._s(e.description))])])})),0)]):t._e(),n("div",{staticClass:"data"},[t._v("datadata")])])]),n("backTop",{staticClass:"topBtn"})],1)},i=[],r=(n("96cf"),n("1da1")),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"fs-xs bg-nav text-white d-flex ai-center jc-between"},[n("ul",{class:{hiddNavItem:t.isMobile,showMobileNavItem:t.showMobileNavItem}},t._l(t.navItemObj,(function(e,a){return n("div",{key:e.navRoute,staticClass:"nav-item p-x-7"},[n("li",{staticClass:"p-y-4 p-x-7",class:{navActive:a==t.currIndex},on:{click:function(n){return t.navItemClick(e.navRoute,a)}}},[t._v(" "+t._s(e.navName)+" ")])])})),0),t.isMobile?n("div",[n("div",{staticClass:"menuBtn m-y-7 m-x-8 bg-dark p-6 text-white p-x-8 fs-xl",on:{click:t.showNavItem}},[t._v(" ☰ ")])]):n("div",{staticClass:"userInfo p-8"},[n("span",[t._v(t._s(t.userName))]),n("img",{staticClass:"m-x-8",attrs:{src:"http://p1.music.126.net/cvmt4nmLFJfU35VDkxJl0A==/109951164833038560.jpg?param=140y140",alt:""}})])])},s=[],c=(n("4de4"),n("c975"),n("07ac"),{data:function(){return{isMobile:!1,currIndex:0}},props:{navItemObj:{type:Array,required:!0},userName:{type:String,default:function(){return"XU_158"}},showMobileNavItem:{type:Boolean,default:!1,required:!0}},created:function(){var t=[];this.navItemObj.filter((function(e){return t.push(Object.values(e)[1])}));var e=t.indexOf(this.$route.fullPath);this.currIndex=-1==e?0:e},mounted:function(){this._isMobile(),window.addEventListener("resize",this._isMobile)},methods:{navItemClick:function(t,e){this.isMobile&&this.$emit("update:showMobileNavItem",!this.showMobileNavItem),this.currIndex=e,this.$router.push(t)},_isMobile:function(){this.isMobile=window.innerWidth<800,this.isMobile&&(this.showMobileNavItem=!1)},showNavItem:function(){this.$emit("update:showMobileNavItem",!this.showMobileNavItem)}}}),u=c,l=(n("369c"),n("2877")),f=Object(l["a"])(u,o,s,!1,null,"e259919e",null),d=f.exports,v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"topBtn",on:{click:t.topTop}},[a("img",{attrs:{src:n("038c"),alt:""}})])},m=[],p={data:function(){return{backTop:!1}},mounted:function(){window.addEventListener("scroll",this.handleScroll,!0)},methods:{handleScroll:function(){var t=document.documentElement.scrollTop||document.body.scrollTop;this.backTop=t>30},topTop:function(){var t=document.documentElement.scrollTop||document.body.scrollTop,e=setInterval((function(){document.body.scrollTop=document.documentElement.scrollTop=t-=75,t<=0&&clearInterval(e)}),10)}}},b=p,h=(n("a196"),Object(l["a"])(b,v,m,!1,null,"355f8d58",null)),x=h.exports,w=n("4ec3"),I={name:"Home",data:function(){return{navItemObj:[{navName:"首页",navRoute:"/"},{navName:"分类",navRoute:"/category"},{navName:"时光机",navRoute:"/timeLine"},{navName:"音乐盒",navRoute:"/music"},{navName:"关于我",navRoute:"/about"}],friendList:[],showMobileNavItem:!1}},created:function(){this.getFriendList()},methods:{getFriendList:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(w["d"])();case 2:n=e.sent,t.friendList=n.data;case 4:case"end":return e.stop()}}),e)})))()}},components:{navbar:d,BackTop:x}},g=I,C=(n("9bf3"),Object(l["a"])(g,a,i,!1,null,"2a9e9da8",null));e["default"]=C.exports},"9bf3":function(t,e,n){"use strict";var a=n("fc77"),i=n.n(a);i.a},a196:function(t,e,n){"use strict";var a=n("43d0"),i=n.n(a);i.a},a640:function(t,e,n){"use strict";var a=n("d039");t.exports=function(t,e){var n=[][t];return!!n&&a((function(){n.call(null,e||function(){throw 1},1)}))}},a982:function(t,e,n){},ae40:function(t,e,n){var a=n("83ab"),i=n("d039"),r=n("5135"),o=Object.defineProperty,s={},c=function(t){throw t};t.exports=function(t,e){if(r(s,t))return s[t];e||(e={});var n=[][t],u=!!r(e,"ACCESSORS")&&e.ACCESSORS,l=r(e,0)?e[0]:c,f=r(e,1)?e[1]:void 0;return s[t]=!!n&&!i((function(){if(u&&!a)return!0;var t={length:-1};u?o(t,1,{enumerable:!0,get:c}):t[1]=1,n.call(t,l,f)}))}},b727:function(t,e,n){var a=n("0366"),i=n("44ad"),r=n("7b0b"),o=n("50c4"),s=n("65f0"),c=[].push,u=function(t){var e=1==t,n=2==t,u=3==t,l=4==t,f=6==t,d=5==t||f;return function(v,m,p,b){for(var h,x,w=r(v),I=i(w),g=a(m,p,3),C=o(I.length),_=0,y=b||s,N=e?y(v,C):n?y(v,0):void 0;C>_;_++)if((d||_ in I)&&(h=I[_],x=g(h,_,w),t))if(e)N[_]=x;else if(x)switch(t){case 3:return!0;case 5:return h;case 6:return _;case 2:c.call(N,h)}else if(l)return!1;return f?-1:u||l?l:N}};t.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6)}},c975:function(t,e,n){"use strict";var a=n("23e7"),i=n("4d64").indexOf,r=n("a640"),o=n("ae40"),s=[].indexOf,c=!!s&&1/[1].indexOf(1,-0)<0,u=r("indexOf"),l=o("indexOf",{ACCESSORS:!0,1:0});a({target:"Array",proto:!0,forced:c||!u||!l},{indexOf:function(t){return c?s.apply(this,arguments)||0:i(this,t,arguments.length>1?arguments[1]:void 0)}})},e8b5:function(t,e,n){var a=n("c6b6");t.exports=Array.isArray||function(t){return"Array"==a(t)}},fc77:function(t,e,n){}}]);
//# sourceMappingURL=chunk-a038b970.a9bda617.js.map