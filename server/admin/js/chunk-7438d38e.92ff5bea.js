(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7438d38e"],{"83cf":function(e,t,i){"use strict";i.d(t,"a",(function(){return r})),i.d(t,"d",(function(){return a})),i.d(t,"b",(function(){return c})),i.d(t,"c",(function(){return u}));var n=i("8a43");function r(e){return Object(n["a"])({url:"/timeLine/edit",method:"post",data:e})}function a(e){return Object(n["a"])({url:"/timeLine/update",method:"put",data:e})}function c(e){return Object(n["a"])({url:"/timeLine/delete",method:"delete",params:e})}function u(e){return Object(n["a"])({url:"/timeLine/list",method:"get",params:e})}},9761:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("h2",{staticClass:"title"},[e._v(e._s(e.timeLine._id?"编辑":"新建")+"时间线")]),i("el-form",{ref:"form",attrs:{model:e.timeLine,"label-width":"120px",size:"mini"}},[i("el-form-item",{attrs:{label:"标题 : "}},[i("el-input",{model:{value:e.timeLine.title,callback:function(t){e.$set(e.timeLine,"title",t)},expression:"timeLine.title"}})],1),i("el-form-item",{attrs:{label:"创建时间 : "}},[i("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.timeLine.time,callback:function(t){e.$set(e.timeLine,"time",t)},expression:"timeLine.time"}})],1),i("el-form-item",{attrs:{label:"时间线内容 : "}},[i("el-input",{attrs:{type:"textarea",rows:8,placeholder:"请输入内容"},model:{value:e.timeLine.content,callback:function(t){e.$set(e.timeLine,"content",t)},expression:"timeLine.content"}})],1),i("el-form-item",{attrs:{size:"large"}},[i("el-button",{attrs:{type:"primary"},on:{click:e.editTimeLine}},[e._v("立即"+e._s(e.timeLine._id?"修改":"创建"))]),e.timeLine._id?i("el-button",{attrs:{type:"danger"},on:{click:e.deleteTimeLine}},[e._v("删除")]):e._e(),i("el-button",[e._v("取消")])],1)],1)],1)},r=[],a=(i("96cf"),i("1da1")),c=i("83cf"),u={data:function(){return{timeLine:{title:"",time:"",content:""}}},mounted:function(){this.$route.query.timeLine&&(this.timeLine=this.$route.query.timeLine)},methods:{editTimeLine:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(i=e.timeLine,!e.timeLine._id){t.next=7;break}return t.next=4,Object(c["d"])({id:e.timeLine._id,timeLine:i});case 4:n=t.sent,t.next=10;break;case 7:return t.next=9,Object(c["a"])({timeLine:i});case 9:n=t.sent;case 10:e.back(n);case 11:case"end":return t.stop()}}),t)})))()},deleteTimeLine:function(){var e=this;return Object(a["a"])(regeneratorRuntime.mark((function t(){var i,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.timeLine._id,t.next=3,Object(c["b"])({id:i});case 3:n=t.sent,e.back(n);case 5:case"end":return t.stop()}}),t)})))()},back:function(e){0==e.status&&this.$router.go(-1)}}},o=u,s=i("2877"),m=Object(s["a"])(o,n,r,!1,null,null,null);t["default"]=m.exports}}]);
//# sourceMappingURL=chunk-7438d38e.92ff5bea.js.map