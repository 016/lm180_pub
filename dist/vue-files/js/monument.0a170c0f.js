(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["monument"],{"8ccd":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("Pri_TopBar"),i("Pri_SideBar"),i("div",{staticClass:"content-wrapper"},[i("section",{staticClass:"content-header"},[i("h1",[t._v("\n        "+t._s(t.$t("pri.monumentView.title"))),i("small",[t._v(t._s(t.version))]),i("small",[t._v(t._s(t.$t("pri.monumentView.subTitle")))])]),i("ol",{staticClass:"breadcrumb"},[i("router-link",{attrs:{tag:"li",to:"/dashboard"}},[i("a",{attrs:{href:"javascript:;"}},[i("i",{staticClass:"fa fa-cogs"}),i("span",{domProps:{innerHTML:t._s(t.$t("common.title"))}})])]),i("li",{staticClass:"active"},[t._v(t._s(t.$t("pri.monumentView.title")))])],1)]),i("section",{staticClass:"content"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"box"},[i("div",{staticClass:"box-header"},[i("h3",{staticClass:"box-title"},[t._v(t._s(t.$t("pri.monumentView.topbar.title"))+" "),i("small",[t._v(" "+t._s(t.$t("pri.monumentView.topbar.subTitle")))])])]),i("div",{staticClass:"box-body",domProps:{innerHTML:t._s(t.$t("pri.monumentView.topbar.bodyText"))}})])]),i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"nav-tabs-custom"},[i("ul",{staticClass:"nav nav-tabs"},t._l(t.$commonConst.peopleType,function(e){return i("li",{class:t.curPeopleType==e?"active":"",on:{click:function(i){return t.activeTab(e)}}},[i("a",{staticStyle:{"max-width":"320px"},attrs:{href:"javascript:;"}},[t._v("\n                  "+t._s(t.$t("pri.monumentView.typeTitle.t"+e))+"\n                ")])])}),0)])]),i("div",{staticClass:"tab-content"},[i("div",{staticClass:"tab-pane active"},[i("div",{staticClass:"col-md-12"},[i("div",{staticClass:"box box-primary  "},[i("div",{staticClass:"box-body"},[i("eeTable",{attrs:{columnArr:t.table_cols,rowArr:t.table_peopleArr,optionArr:t.tableData.options}})],1)])])])])])])]),i("Pri_FooterBar")],1)},s=[],o=i("7374"),n=i("bf26"),r=i("325e"),l=i("bcea"),c=i("6a38"),p={name:"MonumentView",data:function(){var t=this;return{version:"v0.6",peopleList:{},curPeopleType:this.$commonConst.peopleType.volunteer,tableData:{columns:[{field:"m_title",title:function(){return t.$t("pri.monumentView.table.title.m_title")},sortable:!0},{field:"m_isk_market",title:function(){return t.$t("pri.monumentView.table.title.m_isk_market")},sortable:!0},{field:"m_isk_system",title:function(){return t.$t("pri.monumentView.table.title.m_isk_system")},sortable:!0},{field:"m_updateDate",title:function(){return t.$t("pri.monumentView.table.title.m_updateDate")},sortable:!0}],options:{tableClass:"table table-bordered text-center table-hover table-striped",showTableFooter:!0,sortContainerSize:2,tool_allowGlobalSearch:!0,tool_showRefresh:!0,tool_showColumns:!0}}}},computed:{table_cols:function(){var t=this,e=[{field:"title",title:function(){return t.$t("pri.monumentView.table.title.title")},sortable:!0,dataStyle:"min-width:100px;"}];return this.curPeopleType==this.$commonConst.peopleType.volunteer&&(e.push({field:"p_minusCnt",title:function(){return t.$t("pri.monumentView.table.title.p_minusCnt")},sortable:!0}),e.push({field:"p_startDate",title:function(){return t.$t("pri.monumentView.table.title.p_startDate")},sortable:!0,callback:function(t){return t.substr(0,10)}})),this.curPeopleType==this.$commonConst.peopleType.donor&&(e.push({field:"p_v_1",title:function(){return t.$t("pri.monumentView.table.title.p_donateAmount")},sortable:!0}),e.push({field:"p_startDate",title:function(){return t.$t("pri.monumentView.table.title.p_donateDate")},sortable:!0})),e.push({field:"desc",title:function(){return t.$t("pri.monumentView.table.title.desc")},sortable:!0,titleStyle:"",dataStyle:""}),e},table_peopleArr:function(){var t=[];for(var e in this.peopleList){var i=this.peopleList[e];"zh"==this.$i18n.locale?(i["title"]=i.p_title,i["desc"]=i.p_desc):(i["title"]=i.p_titleEn,i["desc"]=i.p_descEn),t.push(i)}return t}},methods:{wrapData:function(t){var e=t;return e},loadPeopleList:function(){var t=this,e=this,i="v1/people-types/"+this.curPeopleType+"/people?sort=p_sortOrder desc";this.$axios.get(i).then(function(i){var a=[];for(var s in i.data)a.push(t.wrapData(i.data[s]));e.peopleList=a}).catch(function(t){})},activeTab:function(t){this.curPeopleType=t,this.loadPeopleList()}},mixins:[],components:{Pri_TopBar:o["a"],Pri_SideBar:n["a"],Pri_FooterBar:r["a"],Pri_RightBar:l["a"],eeTable:c["a"]},created:function(){},mounted:function(){void 0!==this.$route.params.code&&(this.curPeopleType=this.$route.params.code),this.loadPeopleList()},destroyed:function(){},beforeMount:function(){document.body.className="hold-transition skin-red sidebar-mini sidebar-collapse"}},u=p,m=i("2877"),d=Object(m["a"])(u,a,s,!1,null,null,null);e["default"]=d.exports},bcea:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"control-sidebar-bg"})},s=[],o={name:"Pri_RightBar",props:{}},n=o,r=i("2877"),l=Object(r["a"])(n,a,s,!1,null,"e8df3b2e",null);e["a"]=l.exports}}]);