(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c2272dae"],{1321:function(e,t,r){"use strict";var a=r("417e"),i=r.n(a);i.a},"417e":function(e,t,r){},c2fa:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h2",{staticClass:"title"},[e._v(e._s(e.id?"编辑":"新建")+"文章")]),r("el-form",{ref:"articleForm",attrs:{model:e.articleForm,rules:e.rules,"label-width":"100px"},nativeOn:{submit:function(t){return t.preventDefault(),e.saveArticle(t)}}},[r("el-form-item",{attrs:{label:"文章标题 :",prop:"title"}},[r("el-input",{model:{value:e.articleForm.title,callback:function(t){e.$set(e.articleForm,"title",t)},expression:"articleForm.title"}})],1),r("el-form-item",{attrs:{label:"文章类型 :",prop:"tags"}},[e.tagList?r("el-checkbox-group",{attrs:{size:"medium"},model:{value:e.articleForm.tags,callback:function(t){e.$set(e.articleForm,"tags",t)},expression:"articleForm.tags"}},e._l(e.tagList,(function(t){return r("el-checkbox-button",{key:t._id,attrs:{label:t._id}},[e._v(e._s(t.title))])})),1):e._e()],1),r("el-form-item",{attrs:{label:"设置置顶 :"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#666"},model:{value:e.articleForm.isTop,callback:function(t){e.$set(e.articleForm,"isTop",t)},expression:"articleForm.isTop"}}),r("span",{staticStyle:{"padding-left":"40px",color:"#606266"}},[e._v("设置可见 : ")]),r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#666"},model:{value:e.articleForm.isShow,callback:function(t){e.$set(e.articleForm,"isShow",t)},expression:"articleForm.isShow"}})],1),r("el-form-item",{attrs:{label:"封 面 :"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.uploadUrl,headers:e.uploadHeaders,"show-file-list":!1,"on-success":e.handleThumbnailSuccess}},[e.articleForm.thumbnail?r("img",{staticClass:"avatar",attrs:{src:e.articleForm.thumbnail}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"文章内容 :",prop:"contentMd"}},[r("markdown-editor",{staticClass:"me-write-editor",attrs:{editor:e.editor},on:{changeEdit:e.changeEdit}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary","native-type":"submit"}},[e._v("保存")])],1)],1)],1)},i=[],s=(r("96cf"),r("1da1")),n=r("52d5"),c=r("2423"),o=r("f8bc"),l={components:{MarkdownEditor:n["a"]},mixins:[o["a"]],props:{id:{type:String}},data:function(){return{tagList:[],articleForm:{title:"",tags:[],thumbnail:"",isTop:!1,isShow:!1,contentMd:"",contentHtml:""},editor:{value:"",ref:"",default_open:"edit",toolbars:{bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,mark:!0,superscript:!0,subscript:!0,quote:!0,ol:!0,ul:!0,imagelink:!0,code:!0,fullscreen:!0,readmodel:!0,help:!0,undo:!0,redo:!0,trash:!1,ishljs:!0,navigation:!0,preview:!0}},rules:{title:[{required:!0,message:"请输入文章标题",trigger:"blur"},{min:3,max:25,message:"长度在 3 到 25 个字符",trigger:"blur"}],tags:[{required:!0,message:"请选择文章标签",trigger:"change"}],contentMd:[{required:!0,message:"请输入文章内容",trigger:"blur"}]}}},created:function(){this.getTag(),this.id&&this.getArticle()},computed:{},methods:{getTag:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["g"])({page:1,pageSize:999});case 2:r=t.sent,e.tagList=r.data.tagList;case 4:case"end":return t.stop()}}),t)})))()},getArticle:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(c["e"])({id:e.id});case 2:r=t.sent,e.articleForm=r.data,e.editor.value=r.data.contentMd;case 5:case"end":return t.stop()}}),t)})))()},saveArticle:function(){var e,t,r=this;e=this.id,this.$refs.articleForm.validate(function(){var a=Object(s["a"])(regeneratorRuntime.mark((function a(i){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(i){a.next=5;break}return r.$message.error("填写错误，请检查!"),a.abrupt("return");case 5:if(!e){a.next=11;break}return a.next=8,Object(c["h"])({id:r.id,article:r.articleForm});case 8:t=a.sent,a.next=14;break;case 11:return a.next=13,Object(c["a"])({article:r.articleForm});case 13:t=a.sent;case 14:0===t.status&&r.$router.push("/article/ArticleList");case 15:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}())},handleThumbnailSuccess:function(e){0==e.status?(this.$message.success("".concat(e.msg)),this.articleForm.thumbnail=e.data.url):this.$message.error("".concat(e.msg))},changeEdit:function(e,t){this.articleForm.contentMd=t,this.articleForm.contentHtml=e}}},u=l,m=(r("1321"),r("2877")),d=Object(m["a"])(u,a,i,!1,null,"6487bba2",null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-c2272dae.9914bbfa.js.map