(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-83c88f40"],{"5d0e":function(t,e,a){"use strict";var o=a("7562"),r=a.n(o);r.a},7562:function(t,e,a){},d87b:function(t,e,a){"use strict";a.r(e);var o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"title"},[t._v("关于我")]),a("el-form",{attrs:{model:t.aboutForm,"label-width":"100px"},nativeOn:{submit:function(e){return e.preventDefault(),t.saveAbout(e)}}},[a("el-form-item",{attrs:{label:"LOGO :"}},[a("el-col",{attrs:{span:4}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,headers:t.uploadHeaders,"show-file-list":!1,"on-success":t.handleThumbnailSuccess}},[t.aboutForm.logo?a("img",{staticClass:"avatar",attrs:{src:t.aboutForm.logo}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-col",{attrs:{span:11}},[a("el-form-item",{staticStyle:{"padding-bottom":"15px"},attrs:{label:"QQ : ",prop:"name"}},[a("el-input",{model:{value:t.aboutForm.qq,callback:function(e){t.$set(t.aboutForm,"qq",e)},expression:"aboutForm.qq"}})],1),a("el-form-item",{staticStyle:{"padding-bottom":"15px"},attrs:{label:"E-Mail : ",prop:"name"}},[a("el-input",{model:{value:t.aboutForm.e_mail,callback:function(e){t.$set(t.aboutForm,"e_mail",e)},expression:"aboutForm.e_mail"}})],1),a("el-form-item",{attrs:{label:"Github : ",prop:"name"}},[a("el-input",{model:{value:t.aboutForm.github,callback:function(e){t.$set(t.aboutForm,"github",e)},expression:"aboutForm.github"}})],1)],1)],1),a("el-form-item",{attrs:{label:"内容 :",prop:"contentMd"}},[a("markdown-editor",{staticClass:"me-write-editor",attrs:{editor:t.editor},on:{changeEdit:t.changeEdit}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary","native-type":"submit"}},[t._v("保存")])],1)],1)],1)},r=[],n=(a("96cf"),a("1da1")),i=a("52d5"),u=a("f8bc"),s=a("8a43");function l(t){return Object(s["a"])({method:"put",url:"/about/update",data:t})}function c(){return Object(s["a"])({method:"get",url:"/about/info"})}var m={components:{MarkdownEditor:i["a"]},mixins:[u["a"]],data:function(){return{aboutForm:{id:"",logo:"",qq:"",e_mail:"",github:"",contentHtml:"",contentMd:""},editor:{value:"",ref:"",default_open:"edit",toolbars:{bold:!0,italic:!0,header:!0,underline:!0,strikethrough:!0,mark:!0,superscript:!0,subscript:!0,quote:!0,ol:!0,ul:!0,imagelink:!0,code:!0,fullscreen:!0,readmodel:!0,help:!0,undo:!0,redo:!0,trash:!1,ishljs:!0,navigation:!0,preview:!0}}}},mounted:function(){this.initAboutInfo()},methods:{initAboutInfo:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c();case 2:a=e.sent,a.data&&(t.aboutForm=Object.assign(t.aboutForm,a.data),t.aboutForm.id=a.data._id,t.editor.value=a.data.contentMd);case 4:case"end":return e.stop()}}),e)})))()},saveAbout:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.aboutForm.id&&(a=t.aboutForm.id),e.next=3,l({id:a,about:t.aboutForm});case 3:o=e.sent,0==o.status&&t.initAboutInfo();case 5:case"end":return e.stop()}}),e)})))()},handleThumbnailSuccess:function(t){0==t.status?(this.$message.success("".concat(t.msg)),this.$set(this.aboutForm,"logo",t.data.url)):this.$message.error("".concat(t.msg))},changeEdit:function(t,e){this.aboutForm.contentMd=e,this.aboutForm.contentHtml=t}}},d=m,b=(a("5d0e"),a("2877")),p=Object(b["a"])(d,o,r,!1,null,"685b4046",null);e["default"]=p.exports}}]);
//# sourceMappingURL=chunk-83c88f40.23235714.js.map