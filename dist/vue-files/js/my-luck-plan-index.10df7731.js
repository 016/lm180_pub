(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["my-luck-plan-index"],{"6eec":function(t,l,n){"use strict";n.r(l);var o=function(){var t=this,l=t.$createElement,n=t._self._c||l;return n("div",{staticClass:"wrapper"},[n("mainLayout",{attrs:{input_pageTitle:t.$t("my.myLuckPlan.title"),input_version:t.version,input_pageSubtitle:t.$t("my.myLuckPlan.subTitle")},scopedSlots:t._u([{key:"addtionalBreadCrumb",fn:function(){return[n("router-link",{attrs:{tag:"li",to:"/luck-plan"}},[n("a",{attrs:{href:"javascript:;"}},[n("i",{staticClass:"fa fa-money"}),n("span",{domProps:{innerHTML:t._s(t.$t("pri.sidebar.luckPlan"))}})])])]},proxy:!0},{key:"mainContent",fn:function(){return[n("div",{staticClass:"box box-primary"},[n("div",{staticClass:"box-header"},[n("ol",{staticClass:"content-header-btns"},[n("router-link",{class:"btn btn-primary",attrs:{tag:"a",to:"/luck-plan"}},[t._v(t._s(t.$t("pri.sidebar.luckPlan")))])],1),n("br")]),n("div",{staticClass:"box-body"},[n("eeTable",{attrs:{columnArr:t.tableData.columns,rowArr:t.table_logListData,optionArr:t.tableData.options},scopedSlots:t._u([{key:"top-left-tool-section",fn:function(){return[n("eeButtonFilter",{attrs:{input_filterObj:t.flag.showTypes_luckPlanTypeId,input_activeClassObj:t.eeCalfilterBtnActiveClass(t.$commonConst.luckPlanType),input_countObj:t.eeArrayCountIndex(t.loadedLuckPlanOptionLogList,"lpolLuckPlan.lp_luckPlanType_id"),i18nPrefix:"luckPlan.luckPlan.type.t_",showDelimiter:!0},on:{"switch-item-show-flag":function(l){var n=arguments.length,o=Array(n);while(n--)o[n]=arguments[n];return t.eeSwitchObjFlag.apply(void 0,[t.flag.showTypes_luckPlanTypeId].concat(o))},"switch-showAll-flag":function(l){var n=arguments.length,o=Array(n);while(n--)o[n]=arguments[n];return t.eeSetObjFlag.apply(void 0,[t.flag.showTypes_luckPlanTypeId,""].concat(o,[!0]))}}}),n("eeButtonFilter",{attrs:{input_filterObj:t.flag.showTypes_luckPlanOptionLogStatusId,input_activeClassObj:t.eeCalfilterBtnActiveClass(t.$commonConst.luckPlanOptionLogStatus),input_countObj:t.eeArrayCountIndex(t.loadedLuckPlanOptionLogList,"lpol_status_id"),i18nPrefix:"luckPlan.luckPlanOptionLog.status.s_"},on:{"switch-item-show-flag":function(l){var n=arguments.length,o=Array(n);while(n--)o[n]=arguments[n];return t.eeSwitchObjFlag.apply(void 0,[t.flag.showTypes_luckPlanOptionLogStatusId].concat(o))},"switch-showAll-flag":function(l){var n=arguments.length,o=Array(n);while(n--)o[n]=arguments[n];return t.eeSetObjFlag.apply(void 0,[t.flag.showTypes_luckPlanOptionLogStatusId,""].concat(o,[!0]))}}})]},proxy:!0},{key:"opAction",fn:function(l){return[n("span",{staticClass:"fa fa-eye ee-opBtn16 ee-pointer ee-columnLeft",on:{click:function(n){return t.log_viewDetail(l.oneRow,l.oneKey)}}})]}}])})],1)])]},proxy:!0}])}),n("LuckPlanOptionLogViewModal",{ref:"LuckPlanOptionLogViewModal",attrs:{modal:this.modalOptionLog}})],1)},a=[],e=n("7f93"),i=n("6a38"),s=n("4090"),u=n("dc35"),c={name:"MyLuckPlanIndexView",data:function(){var t=this;return{version:"v1.0",loadedLuckPlanOptionLogList:[],flag:{showTypes_luckPlanTypeId:{},showTypes_luckPlanOptionLogStatusId:{}},tableData:{columns:[{field:"lpol_id",title:function(){return t.$t("luckPlan.luckPlanOptionLog.titles.lpol_id")},sortable:!0},{field:"lpol_buyDate",title:function(){return t.$t("luckPlan.luckPlanOptionLog.titles.lpol_buyDate")},sortable:!0},{field:"lp_luckPlanType",title:function(){return t.$t("luckPlan.luckPlan.titles.lp_luckPlanType_id")},sortable:!0,callback:function(t,l,n){var o="";return void 0!=n.$commonConst.luckPlanType[l.lpolLuckPlan.lp_luckPlanType_id]&&(o=n.$commonConst.luckPlanType[l.lpolLuckPlan.lp_luckPlanType_id]["bgColor"]),'<span class="label ee-font11 '+o+'" >'+t+"</span>"}},{field:"lp_title_s",title:function(){return t.$t("luckPlan.luckPlan.titles.lp_title")},sortable:!0},{field:"lpol_title_s",title:function(){return t.$t("luckPlan.luckPlanOptionLog.titles.lpol_title")},sortable:!0},{field:"lpol_status",title:function(){return t.$t("luckPlan.luckPlanOptionLog.titles.lpol_status_id")},sortable:!0,callback:function(t,l,n){var o="";return void 0!=n.$commonConst.luckPlanOptionLogStatus[l.lpol_status_id]&&(o=n.$commonConst.luckPlanOptionLogStatus[l.lpol_status_id]["bgColor"]),'<span class="label ee-font11 '+o+'" >'+t+"</span>"}},{type:"slot",field:"opAction",titleStyle:"min-width:90px;",title:function(){return t.$t("common.op")}}],options:{tableClass:"table table-bordered text-center table-hover table-striped",showTableFooter:!0,enablePagination:!0,pageSize:20,sortContainerSize:2,tool_allowGlobalSearch:!0,tool_showRefresh:!0,tool_showColumns:!0}},modalOptionLog:{type:"view",params:{id:"ee-model-myLuckPlan-optionLog-view",class:"",sizeClass:"eeModal60",title:"luckPlan.luckPlanOptionLog.title"}}}},computed:{table_logListData:function(){var t=[];for(var l in this.loadedLuckPlanOptionLogList){var n=this.loadedLuckPlanOptionLogList[l];if(this.flag.showTypes_luckPlanTypeId[n.lpolLuckPlan.lp_luckPlanType_id]&&this.flag.showTypes_luckPlanOptionLogStatusId[n.lpol_status_id]){var o=n;o["lpol_status"]=this.$t("luckPlan.luckPlanOptionLog.status.s_"+n.lpol_status_id),o["lp_luckPlanType"]=this.$t("luckPlan.luckPlan.type.t_"+n.lpolLuckPlan.lp_luckPlanType_id),o["lp_title_s"]=n.lpolLuckPlan.lp_titleEn,o["lpol_title_s"]=n.lpol_titleEn,"zh"==this.$i18n.locale&&(o["lp_title_s"]=n.lpolLuckPlan.lp_title,o["lpol_title_s"]=n.lpol_title),t.push(o)}}return t}},watch:{},methods:{wrapData:function(t){var l=t;return l},wrapTableData:function(t){var l=t;return l},loadPubCorpList:function(){var t=this,l="v1/my-luck-plans/luck-plan-option-logs";this.$axios.get(l).then(function(l){t.loadedLuckPlanOptionLogList=l.data}).catch(function(t){})},log_viewDetail:function(t){this.$refs.LuckPlanOptionLogViewModal.loadData(t.lpol_id),this.$refs.LuckPlanOptionLogViewModal.showModal()},init_eeBtnFilterIdShow:function(){var t={};for(var l in this.$commonConst.luckPlanType)t[this.$commonConst.luckPlanType[l]["id"]]=!0;for(var n in this.$set(this.flag,"showTypes_luckPlanTypeId",t),t={},this.$commonConst.luckPlanOptionLogStatusIdMapping)"fail"!=n&&"buying"!=n&&(t[this.$commonConst.luckPlanOptionLogStatusIdMapping[n]]=!0);this.$set(this.flag,"showTypes_luckPlanOptionLogStatusId",t)}},mixins:[],components:{mainLayout:e["a"],eeTable:i["a"],LuckPlanOptionLogViewModal:s["a"],eeButtonFilter:u["a"]},created:function(){},mounted:function(){this.init_eeBtnFilterIdShow(),this.loadPubCorpList()},destroyed:function(){},beforeMount:function(){document.body.className="hold-transition skin-red sidebar-mini sidebar-collapse"}},p=c,r=n("2877"),d=Object(r["a"])(p,o,a,!1,null,null,null);l["default"]=d.exports}}]);