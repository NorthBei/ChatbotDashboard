(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69de1b5f"],{"6c74":function(e,t,a){},"8b4e":function(e,t,a){},a77f:function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"coupon"}},[a("h2",[e._v("建立優惠券")]),e._v(" "),a("el-divider"),e._v(" "),a("el-col",{attrs:{span:12}},[a("el-form",{ref:"form",attrs:{model:e.form,"label-width":"100px"}},[a("el-form-item",{attrs:{label:"優惠券名稱"}},[a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{maxlength:"30","show-word-limit":""},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"領取起始時間"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date1,callback:function(t){e.$set(e.form,"date1",t)},expression:"form.date1"}}),e._v(" "),a("el-time-select",{attrs:{placeholder:"选择时间"},model:{value:e.form.time1,callback:function(t){e.$set(e.form,"time1",t)},expression:"form.time1"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"領取結束時間"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date2,callback:function(t){e.$set(e.form,"date2",t)},expression:"form.date2"}}),e._v(" "),a("el-time-select",{attrs:{placeholder:"选择时间"},model:{value:e.form.time2,callback:function(t){e.$set(e.form,"time2",t)},expression:"form.time2"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"有效起始時間"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date3,callback:function(t){e.$set(e.form,"date3",t)},expression:"form.date3"}}),e._v(" "),a("el-time-select",{attrs:{placeholder:"选择时间"},model:{value:e.form.time3,callback:function(t){e.$set(e.form,"time3",t)},expression:"form.time3"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"有效結束時間"}},[a("el-date-picker",{attrs:{type:"date",placeholder:"选择日期"},model:{value:e.form.date4,callback:function(t){e.$set(e.form,"date4",t)},expression:"form.date4"}}),e._v(" "),a("el-time-select",{attrs:{placeholder:"选择时间"},model:{value:e.form.time4,callback:function(t){e.$set(e.form,"time4",t)},expression:"form.time4"}})],1),e._v(" "),a("el-form-item",{attrs:{label:"圖片上傳"}},[a("el-upload",{staticClass:"avatar-uploader",attrs:{action:"https://jsonplaceholder.typicode.com/posts/","show-file-list":!1,"on-success":e.handleAvatarSuccess,"before-upload":e.beforeAvatarUpload}},[e.imageUrl?a("img",{staticClass:"avatar",attrs:{src:e.imageUrl}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),e._v(" "),a("ol",[a("li",[e._v("上傳的圖片，長:寬必須是1.91 : 1")]),e._v(" "),a("li",[e._v("檔案大小上限10MB")])])],1),e._v(" "),a("el-form-item",{attrs:{label:"優惠券簡介"}},[a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{type:"textarea",placeholder:"請簡單說明優惠券內容",maxlength:"60","show-word-limit":""},model:{value:e.form.textarea1,callback:function(t){e.$set(e.form,"textarea1",t)},expression:"form.textarea1"}})],1)],1),e._v(" "),a("el-form-item",{attrs:{label:"使用說明"}},[a("div",{staticStyle:{width:"400px"}},[a("el-input",{attrs:{type:"textarea",placeholder:"請條列撰寫使用說明",maxlength:"300","show-word-limit":""},model:{value:e.form.textarea2,callback:function(t){e.$set(e.form,"textarea2",t)},expression:"form.textarea2"}})],1)]),e._v(" "),a("el-form-item",{attrs:{label:"優惠代碼"}},[a("div",{staticStyle:{width:"400px"}},[a("el-input",{attrs:{maxlength:"15","show-word-limit":""},model:{value:e.form.code,callback:function(t){e.$set(e.form,"code",t)},expression:"form.code"}})],1)]),e._v(" "),a("el-form-item",{attrs:{label:"優惠券類型"}},[a("el-select",{attrs:{placeholder:"請選擇類型"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[a("el-option",{attrs:{label:"折扣",value:"shanghai"}}),e._v(" "),a("el-option",{attrs:{label:"免費",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"贈品",value:"beijing"}}),e._v(" "),a("el-option",{attrs:{label:"其他",value:"beijing"}})],1)],1),e._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"}},[e._v("儲存")]),e._v(" "),a("el-button",[e._v("取消")])],1)],1)],1),e._v(" "),a("el-col",{attrs:{span:12}},[a("p",[e._v("優惠券領取連結：")]),e._v(" "),a("el-form",[a("el-form-item",[a("img",{staticStyle:{height:"200px"},attrs:{src:e.qrcodeUrl}})]),e._v(" "),a("el-form-item",[a("el-input",{attrs:{"suffix-icon":"el-icon-document-copy",readonly:""},model:{value:e.shortUrl,callback:function(t){e.shortUrl=t},expression:"shortUrl"}})],1)],1)],1)],1)},r=[],o={data:function(){return{form:{name:"6人同行1人免費",date1:"2020-01-01",date2:"2020-01-31",date3:"2020-01-01",date4:"2020-10-31",region:"",code:"6PEOPLE",time1:"00:00",time2:"23:59",time3:"00:00",time4:"23:59",textarea1:"使用期限：至2020/10/31截止",textarea2:"・本優惠券適用於異世客任一遊戲。\n・本優惠券同時適用於網路預訂與現場折抵，若現場使用請出示優惠券，線上使用請於異世客官網訂購表單內輸入優惠代碼。\n・同一團玩家只適用一張優惠券，無法同時使用多張。",delivery:!1,type:[],resource:"",desc:""},imageUrl:"https://scontent.ftpe11-1.fna.fbcdn.net/v/t1.0-9/86373544_504806550218819_992282516486356992_o.jpg?_nc_cat=109&_nc_sid=6e5ad9&_nc_oc=AQl9D6crq6mDerSbgLfhgZezxNCWmI6P8WnlXdK6wVnNfsq3waYAp1ZXBcMAn-5Hy8o&_nc_ht=scontent.ftpe11-1.fna&oh=f8714a94f3d1c9988e3ccfb56a7bf8ff&oe=5F16E9B9",qrcodeUrl:"https://store-images.s-microsoft.com/image/apps.33967.13510798887182917.246b0a3d-c3cc-46fc-9cea-021069d15c09.392bf5f5-ade4-4b36-aa63-bb15d5c3817a",shortUrl:"https://ae.sirt/QJEOIJ87QI121W1W6M3QP293"}},methods:{handleAvatarSuccess:function(e,t){this.imageUrl=URL.createObjectURL(t.raw)},beforeAvatarUpload:function(e){var t="image/jpeg"===e.type,a=e.size/1024/1024<2;return t||this.$message.error("上传头像图片只能是 JPG 格式!"),a||this.$message.error("上传头像图片大小不能超过 2MB!"),t&&a}}},s=o,i=(a("df36"),a("f910"),a("2877")),c=Object(i["a"])(s,l,r,!1,null,"37c3de74",null);t["default"]=c.exports},df36:function(e,t,a){"use strict";var l=a("8b4e"),r=a.n(l);r.a},f910:function(e,t,a){"use strict";var l=a("6c74"),r=a.n(l);r.a}}]);