(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0d985fa4"],{"01e8":function(t,e,a){"use strict";var i=a("7e36"),n=a.n(i);n.a},"0d49":function(t,e,a){},"0ddb":function(t,e,a){},"147e":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"source"},[a("el-tabs",{attrs:{type:"border-card"}},[a("el-tab-pane",{attrs:{label:"图片资源"}},[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.imagesViews}},[a("el-table-column",{attrs:{label:"预览"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{staticStyle:{color:"black"},attrs:{href:t.baseUrl+e.row.key,target:"block"}},[a("img",{attrs:{src:t.baseUrl+e.row.key,alt:"",width:"100",height:"100"}})])]}}])}),a("el-table-column",{attrs:{label:"mimeType"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{size:"medium"}},[t._v(t._s(e.row.mimeType))])]}}])}),a("el-table-column",{attrs:{label:"上传时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{size:"medium"}},[t._v(t._s(t.regDate(e.row.putTime)))])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.deleteAction(e.row.key)}}},[t._v("删除")])]}}])})],1),a("div",{staticClass:"page"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.imagesTotal,"page-size":t.pageSize,"current-page":t.imagesPage},on:{"current-change":t.imagesPageChange}})],1)],1),a("el-tab-pane",{attrs:{label:"音频资源"}},[a("audio",{ref:"audio",attrs:{controls:""}}),a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.mp3Views}},[a("el-table-column",{attrs:{label:"name"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("a",{staticStyle:{color:"black"},attrs:{href:t.baseUrl+e.row.key,target:"block"}},[t._v(t._s(t.regName(e.row.key)))])]}}])}),a("el-table-column",{attrs:{label:"mimeType"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{size:"medium"}},[t._v(t._s(e.row.mimeType))])]}}])}),a("el-table-column",{attrs:{label:"上传时间"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{size:"medium"}},[t._v(t._s(t.regDate(e.row.putTime)))])]}}])}),a("el-table-column",{attrs:{label:"播放"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",icon:"el-icon-video-play"},on:{click:function(a){return t.play(t.baseUrl+e.row.key)}}},[t._v("播放")])]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{size:"mini"},on:{click:function(a){return t.handleEdit(e.$index,e.row)}}},[t._v("编辑")]),a("el-button",{attrs:{size:"mini",type:"danger"},on:{click:function(a){return t.deleteAction(e.row.key)}}},[t._v("删除")])]}}])})],1),a("div",{staticClass:"page"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.mp3Total,"page-size":t.pageSize,"current-page":t.mp3Page},on:{"current-change":t.mp3PageChange}})],1)],1)],1)],1)},n=[],r=a("3123"),l=a("fb92"),o={data(){return{baseUrl:"http://img.xujinfeng.top/",imagesPage:1,mp3Page:1,pageSize:5,mp3Total:1,imagesTotal:1,imagesData:[],imagesViews:[],mp3Data:[],mp3Views:[]}},created(){this.getImagesSource(),this.getMp3Source()},computed:{regName(){return t=>t.match(/\/.*\.mp3/)[0].split(".")[0].replace("/","")},regDate(){return t=>Object(l["a"])("YYYY-mm-dd HH:MM",new Date(t/1e4))}},methods:{async getImagesSource(t){t||(this.imagesData=(await Object(r["a"])({limit:9999,prefix:"image"})).data.items.reverse()),t=t||this.imagesPage,this.imagesData&&(this.imagesTotal=this.imagesData.length,this.imagesViews=this.imagesData.slice((t-1)*this.pageSize,t*this.pageSize))},async getMp3Source(t){t||(this.mp3Data=(await Object(r["a"])({limit:9999,prefix:"audio"})).data.items.reverse()),t=t||this.mp3Page,this.mp3Data&&(this.mp3Total=this.mp3Data.length,this.mp3Views=this.mp3Data.slice((t-1)*this.pageSize,t*this.pageSize))},mp3PageChange(t){this.mp3Page=t,this.getMp3Source(t)},imagesPageChange(t){this.imagesPage=t,this.getImagesSource(t)},play(t){this.$refs.audio.src=t,this.$refs.audio.play(),console.log(this.$refs.audio)},async deleteAction(t){const e=await Object(r["b"])({key:t});0===e.status&&(this.getImagesSource(),this.getMp3Source())}}},s=o,c=a("2877"),u=Object(c["a"])(s,i,n,!1,null,null,null);e["default"]=u.exports},2423:function(t,e,a){"use strict";a.d(e,"b",(function(){return n})),a.d(e,"i",(function(){return r})),a.d(e,"d",(function(){return l})),a.d(e,"g",(function(){return o})),a.d(e,"a",(function(){return s})),a.d(e,"h",(function(){return c})),a.d(e,"c",(function(){return u})),a.d(e,"e",(function(){return d})),a.d(e,"f",(function(){return m}));var i=a("8a43");function n(t){return Object(i["a"])({url:"/tag/edit",method:"post",data:t})}function r(t){return Object(i["a"])({url:"/tag/update",method:"put",data:t})}function l(t){return Object(i["a"])({url:"/tag/delete",method:"delete",params:t})}function o(t){return Object(i["a"])({url:"/tag/list",method:"get",params:t})}function s(t){return Object(i["a"])({url:"/article/edit",method:"post",data:t})}function c(t){return Object(i["a"])({url:"/article/update",method:"put",data:t})}function u(t){return Object(i["a"])({url:"/article/delete",method:"delete",params:t})}function d(t){return Object(i["a"])({url:"/article/info",method:"get",params:t})}function m(t){return Object(i["a"])({url:"/article/list",method:"get",params:t})}},3123:function(t,e,a){"use strict";a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return l}));var i=a("8a43");function n(){return Object(i["a"])({url:"/qiniuUploadToken",method:"post"})}function r(t){return Object(i["a"])({url:"/getQiniuSource",method:"get",params:t})}function l(t){return Object(i["a"])({url:"/qiniuDelete",method:"delete",params:t})}},3387:function(t,e,a){"use strict";var i=a("95c9"),n=a.n(i);n.a},"370d":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.showEdit?a("div",{staticClass:"block"},[a("router-view")],1):a("div",[t.showEdit?t._e():a("el-button",{attrs:{type:"primary"},on:{click:t.createTimeLine}},[a("span",[t._v("创建时间线")])]),a("el-timeline",{staticClass:"timeline",attrs:{reverse:""}},t._l(t.timeLineList,(function(e){return a("el-timeline-item",{key:e._id,attrs:{timestamp:t._f("Time")(e.time),color:"#409eff",placement:"bottom"}},[a("div",{on:{click:function(a){return t.editTimeLine(e)}}},[a("el-card",[a("h4",[t._v(t._s(e.title))]),a("p",[t._v(t._s(e.content))])])],1)])})),1)],1)},n=[],r=a("83cf"),l=a("fb92"),o={data(){return{showEdit:!1,timeLineList:[]}},mounted(){const t=this.$route.query.showEdit;t&&(this.showEdit=t),this.initTimeLine()},filters:{Time(t){return Object(l["a"])("YYYY-mm-dd",new Date(t))}},methods:{createTimeLine(){this.$router.push({path:"/timeLine/timeLineList/timeLineEdit",query:{showEdit:"true"}})},changeShowEdit(){this.$set(this,"showEdit",!this.showEdit)},async initTimeLine(){const t=await Object(r["c"])();this.timeLineList=t.data},editTimeLine(t){this.$router.push({path:"/timeLine/timeLineList/timeLineEdit",query:{showEdit:"true",timeLine:t}})}}},s=o,c=(a("3387"),a("2877")),u=Object(c["a"])(s,i,n,!1,null,null,null);e["default"]=u.exports},"3c23":function(t,e,a){"use strict";var i=a("0d49"),n=a.n(i);n.a},"7e36":function(t,e,a){},"83cf":function(t,e,a){"use strict";a.d(e,"a",(function(){return n})),a.d(e,"d",(function(){return r})),a.d(e,"b",(function(){return l})),a.d(e,"c",(function(){return o}));var i=a("8a43");function n(t){return Object(i["a"])({url:"/timeLine/edit",method:"post",data:t})}function r(t){return Object(i["a"])({url:"/timeLine/update",method:"put",data:t})}function l(t){return Object(i["a"])({url:"/timeLine/delete",method:"delete",params:t})}function o(t){return Object(i["a"])({url:"/timeLine/list",method:"get",params:t})}},"95c9":function(t,e,a){},9761:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"title"},[t._v(t._s(t.timeLine._id?"编辑":"新建")+"时间线")]),a("el-form",{ref:"form",attrs:{model:t.timeLine,"label-width":"120px",size:"mini"}},[a("el-form-item",{attrs:{label:"标题 : "}},[a("el-input",{model:{value:t.timeLine.title,callback:function(e){t.$set(t.timeLine,"title",e)},expression:"timeLine.title"}})],1),a("el-form-item",{attrs:{label:"创建时间 : "}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:t.timeLine.time,callback:function(e){t.$set(t.timeLine,"time",e)},expression:"timeLine.time"}})],1),a("el-form-item",{attrs:{label:"时间线内容 : "}},[a("el-input",{attrs:{type:"textarea",rows:8,placeholder:"请输入内容"},model:{value:t.timeLine.content,callback:function(e){t.$set(t.timeLine,"content",e)},expression:"timeLine.content"}})],1),a("el-form-item",{attrs:{size:"large"}},[a("el-button",{attrs:{type:"primary"},on:{click:t.editTimeLine}},[t._v("立即"+t._s(t.timeLine._id?"修改":"创建"))]),t.timeLine._id?a("el-button",{attrs:{type:"danger"},on:{click:t.deleteTimeLine}},[t._v("删除")]):t._e(),a("el-button",{on:{click:function(e){return t.back()}}},[t._v("取消")])],1)],1)],1)},n=[],r=a("83cf"),l={data(){return{timeLine:{title:"",time:"",content:""}}},mounted(){this.$route.query.timeLine&&(this.timeLine=this.$route.query.timeLine)},methods:{async editTimeLine(){const t=this.timeLine;let e;e=this.timeLine._id?await Object(r["d"])({id:this.timeLine._id,timeLine:t}):await Object(r["a"])({timeLine:t}),this.back(e)},async deleteTimeLine(){const t=this.timeLine._id,e=await Object(r["b"])({id:t});this.back(e)},back(t){this.$router.go(-1)}}},o=l,s=a("2877"),c=Object(s["a"])(o,i,n,!1,null,null,null);e["default"]=c.exports},a0f4:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"articleTag"},[a("el-button",{attrs:{type:"primary",plain:""},on:{click:t.createTag}},[t._v("新建标签")]),t.tableData?a("el-table",{staticClass:"table",attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"_id",label:"编号",width:"350"}}),a("el-table-column",{attrs:{prop:"title",label:"标签名",width:"350"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",[t._v(t._s(e.row.title))])]}}],null,!1,2317849052)}),a("el-table-column",{attrs:{prop:"selectArticles",label:"文章数量"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{type:"success"}},[t._v(t._s(e.row.selectArticles.length))])]}}],null,!1,287535174)}),a("el-table-column",{staticClass:"option",attrs:{label:"操作",width:"250"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("el-button",{staticClass:"option-1",attrs:{size:"mini"},on:{click:function(a){return t.handleEdit(e.row)}}},[t._v("编辑")]),a("el-popconfirm",{attrs:{title:"确定删除这个标签吗？"},on:{onConfirm:function(a){return t.handleDelete(e.row._id)}}},[a("el-button",{attrs:{slot:"reference",size:"mini",type:"danger"},slot:"reference"},[t._v("删除")])],1)],1)]}}],null,!1,2417577733)})],1):t._e(),a("div",{staticClass:"page"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.totalSize,"page-size":t.pageSize,"current-page":t.page},on:{"current-change":t.pageChange}})],1)],1)},n=[],r=a("2423"),l={data(){return{tableData:[],page:1,pageSize:8,totalSize:1}},created(){this.initTagList()},methods:{async initTagList(){const{page:t,pageSize:e}=this,a=await Object(r["g"])({page:t,pageSize:e});this.tableData=a.data.tagList,this.totalSize=a.data.totalSize},createTag(){let t;this.$prompt("请输入标签名","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then(async({value:e})=>{if(!e)throw new Error("标签名不能为空");t=e;const a=await Object(r["b"])({title:t});0==a.status&&this.initTagList()}).catch(t=>{this.$message({type:"info",message:"cancel"===t?"取消创建":t})})},handleEdit(t){this.$prompt("将 [ "+t.title+" ] 修改为","提示",{confirmButtonText:"确定",cancelButtonText:"取消",inputValue:""+t.title}).then(async({value:e})=>{if(!e)throw new Error("标签名不能为空");const a=await Object(r["i"])({id:t._id,title:e,count:t.count});0==a.status&&this.initTagList()}).catch(()=>{this.$message({type:"info",message:"取消修改"})})},async handleDelete(t){const e=await Object(r["d"])({id:t});0==e.status&&this.initTagList()},pageChange(t){this.page=t,this.initTagList()}}},o=l,s=(a("a164"),a("2877")),c=Object(s["a"])(o,i,n,!1,null,null,null);e["default"]=c.exports},a164:function(t,e,a){"use strict";var i=a("0ddb"),n=a.n(i);n.a},b2d3:function(t,e,a){},c2fa:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"title"},[t._v(t._s(t.id?"编辑":"新建")+"文章")]),a("el-form",{ref:"articleForm",attrs:{model:t.articleForm,rules:t.rules,"label-width":"100px"},nativeOn:{submit:function(e){return e.preventDefault(),t.saveArticle(e)}}},[a("el-form-item",{attrs:{label:"文章标题 :",prop:"title"}},[a("el-input",{model:{value:t.articleForm.title,callback:function(e){t.$set(t.articleForm,"title",e)},expression:"articleForm.title"}})],1),a("el-form-item",{attrs:{label:"文章类型 :",prop:"tags"}},[t.tagList?a("el-checkbox-group",{attrs:{size:"medium"},model:{value:t.articleForm.tags,callback:function(e){t.$set(t.articleForm,"tags",e)},expression:"articleForm.tags"}},t._l(t.tagList,(function(e){return a("el-checkbox-button",{key:e._id,attrs:{label:e._id}},[t._v(t._s(e.title))])})),1):t._e()],1),a("el-form-item",{attrs:{label:"设置置顶 :"}},[a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#666"},model:{value:t.articleForm.isTop,callback:function(e){t.$set(t.articleForm,"isTop",e)},expression:"articleForm.isTop"}}),a("span",{staticStyle:{"padding-left":"40px",color:"#606266"}},[t._v("设置可见 : ")]),a("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#666"},model:{value:t.articleForm.isShow,callback:function(e){t.$set(t.articleForm,"isShow",e)},expression:"articleForm.isShow"}})],1),a("el-form-item",{attrs:{label:"封 面 :"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,"http-request":t.uploadImg,"show-file-list":!1,header:t.uploadHeaders}},[t.articleForm.thumbnail?a("img",{staticClass:"avatar",attrs:{src:t.articleForm.thumbnail}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-form-item",{attrs:{label:"文章内容 :",prop:"contentMd"}},[a("v-md-editor",{attrs:{mode:t.mode,"left-toolbar":t.toolbar,height:"400px","disabled-menus":[]},on:{"upload-image":t.handleUploadImage,change:t.change},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary","native-type":"submit"}},[t._v("保存")])],1)],1)],1)},n=[],r=a("2423"),l=a("f8bc"),o=a("eab8"),s={mixins:[l["a"]],props:{id:{type:String}},data(){return{tagList:[],articleForm:{title:"",tags:[],thumbnail:"",isTop:!1,isShow:!1,contentMd:"",contentHtml:""},text:"",mode:"editable",toolbar:"undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code",rules:{title:[{required:!0,message:"请输入文章标题",trigger:"blur"},{min:3,max:25,message:"长度在 3 到 25 个字符",trigger:"blur"}],tags:[{required:!0,message:"请选择文章标签",trigger:"change"}],contentMd:[{required:!0,message:"请输入文章内容",trigger:"blur"}]}}},created(){this.getTag(),this.id&&this.getArticle()},methods:{async getTag(){const t=await Object(r["g"])({page:1,pageSize:999});this.tagList=t.data.tagList},async getArticle(){const t=await Object(r["e"])({id:this.id});this.articleForm=t.data,this.text=t.data.contentMd},saveArticle(){let t,e;t=this.id,this.$refs.articleForm.validate(async a=>{a?(e=t?await Object(r["h"])({id:this.id,article:this.articleForm}):await Object(r["a"])({article:this.articleForm}),0===e.status&&this.$router.push("/article/ArticleList")):this.$message.error("填写错误，请检查!")})},async uploadImg(t){const e=await Object(o["a"])(t.file);this.articleForm.thumbnail=e.url},async handleUploadImage(t,e,a){const i=await Object(o["a"])(a[0]);e({url:""+i.url,desc:"图片哦"})},change(t,e){this.articleForm.contentMd=t,this.articleForm.contentHtml=e}}},c=s,u=(a("eb2f"),a("2877")),d=Object(u["a"])(c,i,n,!1,null,"e7fcf93e",null);e["default"]=d.exports},cccf:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",[t._v("文章列表")]),a("el-table",{staticClass:"table",attrs:{data:t.tableData}},[a("el-table-column",{attrs:{prop:"title",label:"标题"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"title"},[t._v(t._s(e.row.title))])]}}])}),a("el-table-column",{attrs:{prop:"tagNames",label:"文章标签"},scopedSlots:t._u([{key:"default",fn:function(e){return t._l(e.row.tags,(function(e){return a("el-tag",{key:e._id,staticStyle:{margin:"3px 3px"}},[t._v(t._s(e.title))])}))}}])}),a("el-table-column",{attrs:{prop:"createdAt",label:"创建日期",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[t._v(" "+t._s(t.regData(e.row.createdAt))+" ")])]}}])}),a("el-table-column",{attrs:{prop:"isTop",label:"是否置顶",width:"80"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("div",[t.row.isTop?a("i",{staticClass:"el-icon-success",staticStyle:{color:"#67c23A","font-size":"26px"}}):a("i",{staticClass:"el-icon-error",staticStyle:{color:"#ff0000","font-size":"26px"}})])]}}])}),a("el-table-column",{attrs:{prop:"isShow",label:"是否可见",width:"80"},scopedSlots:t._u([{key:"default",fn:function(t){return[a("div",[t.row.isShow?a("i",{staticClass:"el-icon-success",staticStyle:{color:"#67c23A","font-size":"26px"}}):a("i",{staticClass:"el-icon-error",staticStyle:{color:"#ff0000","font-size":"26px"}})])]}}])}),a("el-table-column",{attrs:{prop:"lickCount",label:"浏览量/点赞数",width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",[a("el-tag",{attrs:{type:"success"}},[t._v(t._s(e.row.hitCount))]),t._v(" "),a("el-tag",{attrs:{type:"danger"}},[t._v(t._s(e.row.likeCount))])],1)]}}])}),a("el-table-column",{attrs:{label:"操作",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"primary",size:"small"},on:{click:function(a){return t.goEdit(e.row._id)}}},[t._v("编辑")]),a("el-button",{attrs:{type:"danger",size:"small"},on:{click:function(a){return t.toDelete(e.row)}}},[t._v("删除")])]}}])})],1),a("div",{staticClass:"page"},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.articleTotal,"page-size":t.pageSize,"current-page":t.page},on:{"current-change":t.pageChange}})],1)],1)},n=[],r=a("2423"),l=a("fb92"),o={data(){return{tableData:[],page:1,pageSize:8,articleTotal:1}},created(){this.initData()},computed:{regData(){return t=>Object(l["a"])("YYYY-mm-dd HH:MM",new Date(t))}},methods:{async initData(){const{page:t,pageSize:e}=this,a=await Object(r["f"])({page:t,pageSize:e});this.tableData=a.data.data,this.articleTotal=a.data.totalSize},goEdit(t){this.$router.push("/article/ArticleUpdate/"+t)},toDelete(t){const{page:e,tableData:a}=this;this.$confirm(`此操作将永久删除 "${t.title}", 是否继续?`,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(async()=>{const i=await Object(r["c"])({id:t._id});0===i.status&&(1!=e&&1==a.length&&this.page--,this.initData())}).catch(()=>{this.$message({type:"info",message:"已取消删除"})})},pageChange(t){this.page=t,this.initData()}}},s=o,c=(a("3c23"),a("2877")),u=Object(c["a"])(s,i,n,!1,null,"1fee6e20",null);e["default"]=u.exports},d87b:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h2",{staticClass:"title"},[t._v("关于我")]),a("el-form",{attrs:{model:t.aboutForm,"label-width":"100px"},nativeOn:{submit:function(e){return e.preventDefault(),t.saveAbout(e)}}},[a("el-form-item",{attrs:{label:"LOGO :"}},[a("el-col",{attrs:{span:8}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:t.uploadUrl,"http-request":t.uploadImg,"show-file-list":!1,header:t.uploadHeaders}},[t.aboutForm.logo?a("img",{staticClass:"avatar",attrs:{src:t.aboutForm.logo}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),a("el-col",{attrs:{span:10}},[a("el-form-item",{staticStyle:{"padding-bottom":"15px"},attrs:{label:"QQ : ",prop:"name"}},[a("el-input",{model:{value:t.aboutForm.qq,callback:function(e){t.$set(t.aboutForm,"qq",e)},expression:"aboutForm.qq"}})],1),a("el-form-item",{staticStyle:{"padding-bottom":"15px"},attrs:{label:"E-Mail : ",prop:"name"}},[a("el-input",{model:{value:t.aboutForm.e_mail,callback:function(e){t.$set(t.aboutForm,"e_mail",e)},expression:"aboutForm.e_mail"}})],1),a("el-form-item",{attrs:{label:"Github : ",prop:"name"}},[a("el-input",{model:{value:t.aboutForm.github,callback:function(e){t.$set(t.aboutForm,"github",e)},expression:"aboutForm.github"}})],1)],1)],1),a("el-form-item",{attrs:{label:"内容 :",prop:"contentMd"}},[a("v-md-editor",{attrs:{mode:t.mode,"left-toolbar":t.toolbar,height:"400px","disabled-menus":[]},on:{"upload-image":t.handleUploadImage,change:t.change},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary","native-type":"submit"}},[t._v("保存")])],1)],1)],1)},n=[],r=a("f8bc"),l=a("8a43");function o(t){return Object(l["a"])({method:"put",url:"/about/update",data:t})}function s(){return Object(l["a"])({method:"get",url:"/about/info"})}var c=a("eab8"),u={mixins:[r["a"]],data(){return{aboutForm:{id:"",logo:"",qq:"",e_mail:"",github:"",contentHtml:"",contentMd:""},text:"",mode:"editable",toolbar:"undo redo clear | h bold italic strikethrough quote | ul ol table hr | link image code"}},mounted(){this.initAboutInfo()},methods:{async initAboutInfo(){const t=await s();t.data&&(this.aboutForm=Object.assign(this.aboutForm,t.data),this.aboutForm.id=t.data._id,this.text=t.data.contentMd)},async saveAbout(){let t;this.aboutForm.id&&(t=this.aboutForm.id);const e=await o({id:t,about:this.aboutForm});0==e.status&&this.initAboutInfo()},async uploadImg(t){const e=await Object(c["a"])(t.file);this.aboutForm.logo=e.url},async handleUploadImage(t,e,a){const i=await Object(c["a"])(a[0]);e({url:""+i.url,desc:"图片哦"})},change(t,e){this.aboutForm.contentMd=t,this.aboutForm.contentHtml=e}}},d=u,m=(a("01e8"),a("2877")),p=Object(m["a"])(d,i,n,!1,null,"531109e3",null);e["default"]=p.exports},eab8:function(t,e,a){"use strict";var i=a("3123"),n=a("8a43"),r=a("5f72");async function l(t){console.log(t);const{data:e,status:a}=await Object(i["c"])();if(1===a)return;const l="http://upload-z2.qiniup.com";console.log("file: ",t.name);let o,s=t.type.split("/").shift(),c={"image/png":"png","image/jpeg":"jpg","image/gif":"gif","audio/mp3":"mp3","audio/mpeg":"mp3"};if(!c[t.type])return void r["Message"].error(`暂不支持上传${t.type}格式`);o="mp3"==c[t.type]?`${s}/${t.name}${Math.random().toString(36).slice(2)}.${c[t.type]}`:`${s}/${(new Date).getTime()}${Math.random().toString(36).slice(2)}.${c[t.type]}`;const u=new FormData;u.append("file",t),u.append("token",e),u.append("key",o);const d=await n["a"].post(l,u,{onUploadProgress:t=>{let e=parseInt((t.loaded/t.total*100).toFixed(0));e%25==0&&Object(r["Message"])({showClose:!0,message:`正在上传${e}%`,type:"success",duration:0})}});return d}e["a"]=l},eb2f:function(t,e,a){"use strict";var i=a("b2d3"),n=a.n(i);n.a},f8bc:function(t,e,a){"use strict";e["a"]={computed:{uploadUrl(){return"http://upload-z2.qiniup.com"},uploadHeaders(){return{Authorization:sessionStorage.getItem("token")||""}}}}},fb92:function(t,e,a){"use strict";function i(t,e){let a;const i={"Y+":e.getFullYear().toString(),"m+":(e.getMonth()+1).toString(),"d+":e.getDate().toString(),"H+":e.getHours().toString(),"M+":e.getMinutes().toString(),"S+":e.getSeconds().toString()};for(let n in i)a=new RegExp("("+n+")").exec(t),a&&(t=t.replace(a[1],1==a[1].length?i[n]:i[n].padStart(a[1].length,"0")));return t}e["a"]=i}}]);
//# sourceMappingURL=chunk-0d985fa4.4f6a149f.js.map