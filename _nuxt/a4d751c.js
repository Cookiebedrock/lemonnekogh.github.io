(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{511:function(t,e,r){},536:function(t,e,r){"use strict";r(511)},561:function(t,e,r){"use strict";r.r(e);var n=r(20),d=(r(75),r(56),r(1)),o=r(0),c=r.n(o),v=d.a.extend({data:function(){return{page:{}}},computed:{createTime:function(){return this.page.createdAt?c()(this.page.createdAt).format("YYYY 年 MM 月 D 日 HH:mm:ss"):""},updateTime:function(){return this.page.updatedAt?c()(this.page.updatedAt).format("YYYY 年 MM 月 D 日 HH:mm:ss"):""}},mounted:function(){this.getData()},methods:{getData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("articles",t.$route.params.slug).fetch();case 2:r=e.sent,Array.isArray(r)||setTimeout((function(){t.page=r}),1500);case 4:case"end":return e.stop()}}),e)})))()}}}),l=(r(536),r(81)),m=r(106),_=r.n(m),x=r(161),f=r(496),h=r(495),k=r(508),w=r(160),C=r(554),component=Object(l.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.updateTime?r("v-card",{staticClass:"post-detail-card",attrs:{outlined:"",rounded:"lg"}},[r("div",{staticClass:"post-detail-card-header"},[r("div",{staticClass:"width-10px"}),t._v(" "),r("v-btn",{attrs:{icon:""},on:{click:function(e){return t.$router.back()}}},[r("v-icon",[t._v("mdi-arrow-left")])],1),t._v(" "),r("div",[r("v-card-title",[t._v("\n          "+t._s(t.page&&t.page.title)+"\n        ")]),t._v(" "),r("v-card-subtitle",[r("div",{staticClass:"post-times"},[r("div",[t._v("发布时间："+t._s(t.createTime))]),t._v(" "),r("div",{staticClass:"width-10px"}),t._v(" "),r("div",[t._v("更新时间："+t._s(t.updateTime))])])])],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",[r("nuxt-content",{attrs:{document:t.page}})],1)],1):r("v-card",{staticClass:"post-loading-card",attrs:{outlined:"",rounded:"lg"}},[r("div",{staticClass:"post-loading-card-header"},[r("v-skeleton-loader",{attrs:{type:"avatar"}}),t._v(" "),r("div",{staticClass:"post-loading-card-header-texts"},[r("v-skeleton-loader",{attrs:{type:"heading"}}),t._v(" "),r("v-skeleton-loader",{staticClass:"text-loading",attrs:{type:"text"}})],1)],1),t._v(" "),r("v-divider"),t._v(" "),r("v-card-text",[r("v-skeleton-loader",{attrs:{type:"text"}}),t._v(" "),r("v-skeleton-loader",{attrs:{type:"text"}}),t._v(" "),r("v-skeleton-loader",{attrs:{type:"text","max-width":"50%"}}),t._v(" "),r("v-skeleton-loader",{attrs:{type:"text"}}),t._v(" "),r("v-skeleton-loader",{attrs:{type:"text"}}),t._v(" "),r("v-skeleton-loader",{attrs:{type:"text","max-width":"50%"}})],1)],1)],1)}),[],!1,null,"c0bd69b8",null);e.default=component.exports;_()(component,{VBtn:x.a,VCard:f.a,VCardSubtitle:h.a,VCardText:h.b,VCardTitle:h.c,VDivider:k.a,VIcon:w.a,VSkeletonLoader:C.a})}}]);