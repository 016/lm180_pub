(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["corp-score-log-list"],{"7e5d":function(t,a,r){"use strict";r.r(a);var s=function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"wrapper"},[r("Pri_TopBar"),r("Pri_SideBar"),r("div",{staticClass:"content-wrapper"},[r("section",{staticClass:"content-header"},[r("h1",[t._v("\n        "+t._s(t.$t("pri.corpScoreLogListView.title"))),r("small",[t._v(t._s(t.version))]),r("small",[t._v(t._s(t.$t("pri.corpScoreLogListView.subTitle"))+" ")])]),r("ol",{staticClass:"breadcrumb"},[r("router-link",{attrs:{tag:"li",to:"/dashboard"}},[r("a",{attrs:{href:"javascript:;"}},[r("i",{staticClass:"fa fa-cogs"}),r("span",{domProps:{innerHTML:t._s(t.$t("common.title"))}})])]),r("router-link",{attrs:{tag:"li",to:"/my-corp"}},[r("a",{attrs:{href:"javascript:;"}},[r("i",{staticClass:"fa fa-sitemap"}),r("span",{domProps:{innerHTML:t._s(t.$t("pri.sidebar.myCorp"))}})])]),r("li",{staticClass:"active"},[t._v(t._s(t.$t("pri.corpScoreLogListView.title")))])],1)]),r("section",{staticClass:"content"},[r("div",{staticClass:"box box-primary"},[t._m(0),r("div",{staticClass:"box-body"},[r("CorpMemberScoreListTable",{attrs:{co_id:this.co_id}})],1)])])]),r("Pri_FooterBar")],1)},i=[function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("div",{staticClass:"box-header"},[r("ol",{staticClass:"content-header-btns"}),r("br")])}],e=r("7374"),o=r("bf26"),c=r("325e"),n=r("bcea"),l=r("6a79"),d={name:"CorpScoreLogListView",data:function(){return{version:"v1.0",co_id:0}},computed:{},watch:{},methods:{wrapData:function(t){var a=t;return a}},mixins:[],components:{Pri_TopBar:e["a"],Pri_SideBar:o["a"],Pri_FooterBar:c["a"],Pri_RightBar:n["a"],CorpMemberScoreListTable:l["a"]},created:function(){this.co_id=this.$route.params.co_id},mounted:function(){},destroyed:function(){},beforeMount:function(){document.body.className="hold-transition skin-red sidebar-mini sidebar-collapse"}},p=d,u=r("2877"),_=Object(u["a"])(p,s,i,!1,null,null,null);a["default"]=_.exports}}]);