(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2baad5f4"],{"06ab":function(t,n,e){"use strict";var a=e("62a3"),r=e.n(a);r.a},"0bd2":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"aboutPage p-8"},[e("div",{staticClass:"content p-8 m-8"},[e("div",{staticClass:"header d-flex p-8"},[e("img",{attrs:{src:t.data.logo,alt:"图裂了"}}),e("div",{staticClass:"info"},[e("p",[t._v("QQ:"+t._s(t.data.qq))]),e("p",[t._v(t._s(t.data.e_mail))]),e("p",[e("a",{staticClass:"text-dark",attrs:{href:t.data.github,target:"_blank"}},[t._v("Github")])])])]),e("div",{staticClass:"body p-8 text-font",domProps:{innerHTML:t._s(t.data.contentHtml)}})])])},r=[],o=(e("96cf"),e("1da1")),i=e("4ec3"),s={data:function(){return{data:{}}},created:function(){this.getAboutMe()},methods:{getAboutMe:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function n(){var e;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(i["a"])();case 2:e=n.sent,t.data=e.data;case 4:case"end":return n.stop()}}),n)})))()}}},c=s,d=(e("06ab"),e("2877")),l=Object(d["a"])(c,a,r,!1,null,"37804791",null);n["default"]=l.exports},"62a3":function(t,n,e){var a=e("6637");"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var r=e("499e").default;r("47512588",a,!0,{sourceMap:!0,shadowMode:!1})},6637:function(t,n,e){var a=e("24fb");n=a(!0),n.push([t.i,".aboutPage .content[data-v-37804791]{border:1px dashed #666}.aboutPage .content .header[data-v-37804791]{justify-content:space-around}.aboutPage .content .header img[data-v-37804791]{height:10rem}.aboutPage .content .header .info[data-v-37804791]{text-align:end}@media(max-width:800px){.aboutPage .content .header[data-v-37804791]{flex-direction:column;align-items:center}.aboutPage .content .header img[data-v-37804791]{width:60vw;height:20rem}.aboutPage .content .header .info[data-v-37804791]{margin-top:1rem;text-align:start}}.aboutPage .body[data-v-37804791]{text-indent:2rem;line-height:1.5rem}","",{version:3,sources:["C:/Users/xu/Desktop/blog/web/src/views/C:/Users/xu/Desktop/blog/web/src/views/C:/Users/xu/Desktop/blog/web/src/views/AboutPage.vue"],names:[],mappings:"AAuCE,qCACE,sBAAA,CACA,6CACE,4BAAA,CACA,iDACE,YAAA,CAEF,mDACE,cAAA,CAIJ,wBACE,6CACE,qBAAA,CACA,kBAAA,CACA,iDACE,UAAA,CACA,YAAA,CAEF,mDACE,eAAA,CACA,gBAAA,CAAA,CAKR,kCACE,gBAAA,CACA,kBAAA",file:"AboutPage.vue",sourcesContent:['@import "@/assets/style/_variables.scss";\r\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\r\n.aboutPage {\r\n  .content {\r\n    border: 1px dashed #666;\r\n    .header {\r\n      justify-content: space-around;\r\n      img {\r\n        height: 10rem;\r\n      }\r\n      .info {\r\n        text-align: end;\r\n        // flex: 4;\r\n      }\r\n    }\r\n    @media (max-width: 800px) {\r\n      .header {\r\n        flex-direction: column;\r\n        align-items: center;\r\n        img {\r\n          width: 60vw;\r\n          height: 20rem;\r\n        }\r\n        .info {\r\n          margin-top: 1rem;\r\n          text-align: start;\r\n        }\r\n      }\r\n    }\r\n  }\r\n  .body {\r\n    text-indent: 2rem;\r\n    line-height: 1.5rem;\r\n  }\r\n}\r\n']}]),t.exports=n},"8cdb":function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"noFound d-flex jc-center ai-center p-t-8"},[e("canvas",{ref:"canvas",attrs:{id:"canvas"}})])},r=[],o={data:function(){return{fonsize:40,color1:"black",color2:"green",color3:"blue"}},mounted:function(){var t=this;setInterval((function(){var n=t.color1;t.color1=t.color2,t.color2=t.color3,t.color3=n,t.initCanvas()}),300),this.initCanvas(),window.onresize=function(){t.initCanvas()}},methods:{initCanvas:function(){var t=this.$refs.canvas,n=t.getContext("2d"),e=300,a=400;t.width=e,t.height=a,this.drawfont(n),this.drawKey(n),this.drawX(n),this.drawMsg(n)},drawfont:function(t){t.font="".concat(this.fonsize,"px Arial");var n=t.createLinearGradient(0,0,300,0);n.addColorStop("0","".concat(this.color1)),n.addColorStop("0.5","".concat(this.color2)),n.addColorStop("1","".concat(this.color3)),t.strokeStyle=n,t.lineWidth=4,t.strokeText("404 Not Found",10,50)},drawKey:function(t){t.beginPath(),t.moveTo(180,100),t.arc(150,100,30,0,2*Math.PI),t.moveTo(170,100),t.arc(150,100,15,0,2*Math.PI),t.moveTo(150,130),t.lineTo(150,200),t.moveTo(150,160),t.lineTo(140,160),t.moveTo(150,180),t.lineTo(160,180),t.lineWidth="2px",t.lineCap="round",t.strokeStyle="yellow",t.stroke()},drawX:function(t){t.beginPath(),t.moveTo(100,70),t.lineTo(190,200),t.moveTo(190,70),t.lineTo(100,200),t.strokeStyle="red",t.stroke()},drawMsg:function(t){t.beginPath(),t.moveTo(10,70),t.font="".concat(this.fonsize/1.6,"px Arial");var n=t.createLinearGradient(0,0,400,0);n.addColorStop("0","".concat(this.color1)),n.addColorStop("0.5","".concat(this.color2)),n.addColorStop("1","".concat(this.color3)),t.strokeStyle=n,t.lineWidth=3,t.strokeStyle="#534",t.strokeText("你 的 打 开 方 式 不 对 劲",10,280)}}},i=o,s=e("2877"),c=Object(s["a"])(i,a,r,!1,null,"05dfa841",null);n["default"]=c.exports},b85d:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"about"},[e("h1",{staticClass:"text-font"},[t._v("This is MusicPage")])])}],o=e("2877"),i={},s=Object(o["a"])(i,a,r,!1,null,null,null);n["default"]=s.exports}}]);
//# sourceMappingURL=chunk-2baad5f4.f47075f8.js.map