(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["module-reprocess"],{a549:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("Pri_TopBar"),i("Pri_SideBar"),i("div",{staticClass:"content-wrapper"},[i("section",{staticClass:"content-header"},[i("h1",[t._v("\n        "+t._s(t.$t("pri.moduleReprocessView.title"))),i("small",[t._v(t._s(t.version))]),i("small",[t._v(t._s(t.$t("pri.moduleReprocessView.subTitle"))+" "),i("span",{staticClass:"btn btn-xs bg-olive "},[t._v(t._s(t.$t("datasource.d202012")))])])]),i("ol",{staticClass:"breadcrumb"},[i("router-link",{attrs:{tag:"li",to:"/dashboard"}},[i("a",{attrs:{href:"javascript:;"}},[i("i",{staticClass:"fa fa-cogs"}),i("span",{domProps:{innerHTML:t._s(t.$t("common.title"))}})])]),i("li",{staticClass:"active"},[t._v(t._s(t.$t("pri.moduleReprocessView.title")))])],1)]),i("section",{staticClass:"content"},[i("div",{staticClass:"box"},[i("div",{staticClass:"box-header"},[i("h3",{staticClass:"box-title"},[t._v(t._s(t.$t("pri.moduleReprocessView.config.title")))]),t._m(0)]),i("div",{staticClass:"box-body"},[i("form",{staticClass:"form-horizontal row"},[i("div",{staticClass:"col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-sm-4 control-label",attrs:{for:"input_ore_id"}},[t._v(t._s(t.$t("pri.moduleReprocessView.config.buildCostRate")))]),i("div",{staticClass:"col-sm-8"},[i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.buildCostRate,expression:"buildCostRate"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.buildCostRate},on:{input:function(e){e.target.composing||(t.buildCostRate=e.target.value)}}}),i("span",{staticClass:"input-group-addon"},[t._v("%")])])])])]),i("div",{staticClass:"col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-sm-4 control-label",attrs:{for:"input_ore_id"}},[t._v(t._s(t.$t("pri.quickInputSkill.config.lvNumber")))]),i("div",{staticClass:"col-sm-8"},[i("QuickInputSkill",{attrs:{t_id:t.$commonConst.skillQuickInputType.refine},on:{"set-skill-effect":t.setSkillEffect}})],1)])]),i("div",{staticClass:"col-sm-3"},[i("div",{staticClass:"form-group"},[i("label",{staticClass:"col-sm-4 control-label",attrs:{for:"input_ore_id"}},[t._v(t._s(t.$t("pri.moduleReprocessView.config.buildDefaultItemCount")))]),i("div",{staticClass:"col-sm-8"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.buildDefaultItemCount,expression:"buildDefaultItemCount"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:t.buildDefaultItemCount},on:{input:function(e){e.target.composing||(t.buildDefaultItemCount=e.target.value)}}})])])])])])]),i("div",{staticClass:"box box-primary"},[i("div",{staticClass:"box-footer"},[i("eeAccountWorkbenchSection",{attrs:{saveData:t.AccountWorkbench_saveData},on:{"aw-dataLoaded":t.aw_dataLoaded}})],1)]),i("TopicDisplay",{ref:"TopicDisplay"}),i("div",{staticClass:"box box-primary"},[i("div",{staticClass:"box-header"},[i("h3",{staticClass:"box-title"},[t._v(t._s(t.$t("pri.moduleReprocessView.result.title")))]),i("eePriceSelector",{staticClass:"pull-right",attrs:{input_flag_showDetailPrice:t.eePriceSelector_params.showDetailPrice,input_flag_showSumPrice:t.eePriceSelector_params.showSumPrice,input_flag_selectedPriceType:t.eePriceSelector_params.selectedPriceType,input_flag_stopPriceUpdate:t.awFlag.loadingAW,input_show_btnSum:!1},on:{"price-type-changed":t.eePriceSelector_priceTypeChanged,"switch-flag":function(e){var i=arguments.length,s=Array(i);while(i--)s[i]=arguments[i];return t.eeSwitchObjFlag.apply(void 0,[t.eePriceSelector_params].concat(s))}}})],1),i("div",{staticClass:"box-body ee-tableContent"},[i("table",{staticClass:"table table-bordered"},[i("tbody",[i("tr",{directives:[{name:"show",rawName:"v-show",value:t.eePriceSelector_params.showDetailPrice,expression:"eePriceSelector_params.showDetailPrice"}]},[i("td"),i("td"),i("td"),i("td"),t._l(t.showMaterialList,function(e,s){return i("td",[i("input",{directives:[{name:"model",rawName:"v-model",value:t.priceList[s],expression:"priceList[smIndex]"}],staticClass:"form-control",domProps:{value:t.priceList[s]},on:{input:function(e){e.target.composing||t.$set(t.priceList,s,e.target.value)}}})])}),i("td"),i("td")],2),i("tr",[i("th",{staticStyle:{"min-width":"6px"}},[t._v("#")]),i("th",{staticStyle:{"min-width":"200px",width:"15%"}},[t._v(t._s(t.$t("pri.moduleReprocessView.result.table.title.r_item")))]),i("th",{staticStyle:{"min-width":"90px",width:"8%"}},[t._v(t._s(t.$t("pri.moduleReprocessView.result.table.title.r_cnt")))]),i("th",{staticStyle:{"min-width":"90px",width:"8%"}},[t._v(t._s(t.$t("pri.moduleReprocessView.result.table.title.r_isk_output")))]),t._l(t.showMaterialList,function(e,s){return i("th",{staticStyle:{"min-width":"90px",width:"8%"}},[t._v("\n                    "+t._s(t.$t("fullItemList."+s+".title"))+"\n                  ")])}),i("th",{staticStyle:{"min-width":"90px",width:"8%"}},[t._v(t._s(t.$t("pri.moduleReprocessView.result.table.title.r_volnum_output")))]),i("th",{staticStyle:{"min-width":"5px"}},[t._v(t._s(t.$t("common.op")))])],2),t._l(t.reprocessList,function(e,s){return i("ModuleReprocessView_OneReprocessTR",{attrs:{k:s,buildCostRate:t.buildCostRate,loadedPriceList:t.priceList,input_showMaterialList:t.showMaterialList,select2_moduleList:t.select2_moduleTitleList},on:{"item-delete":t.item_delete,"item-changed":t.item_changed},model:{value:t.reprocessList[s],callback:function(e){t.$set(t.reprocessList,s,e)},expression:"reprocessList[k]"}})}),i("tr",[i("td",{attrs:{colspan:"2"}},[i("div",{staticClass:"input-group input-group-sm"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.addNewItemCount,expression:"addNewItemCount"}],staticClass:"form-control",domProps:{value:t.addNewItemCount},on:{input:function(e){e.target.composing||(t.addNewItemCount=e.target.value)}}}),i("span",{staticClass:"input-group-btn"},[i("button",{staticClass:"btn btn-primary",on:{click:function(e){return t.item_addNewItem()}}},[i("span",{staticClass:"fa  fa-plus"})])])])]),t._l(["r_cnt","r_isk_output"],function(e){return i("td",[t._v("\n                    "+t._s(t.cal_sumOutput(e))+"\n                  ")])}),t._l(t.showMaterialList,function(e,s){return i("td",[t._v("\n                   "+t._s(t.cal_sumOutput(s,"material"))+"\n                  ")])}),i("td",[t._v("\n                    "+t._s(t.cal_sumOutput("r_volumn_output"))+" / "+t._s(t.cal_sumOutput("r_volumn_item"))+"\n                  ")]),i("td")],2)],2)])])])],1)]),i("Pri_FooterBar")],1)},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"box-tools pull-right"},[i("button",{staticClass:"btn btn-box-tool",attrs:{"data-widget":"collapse","data-toggle":"tooltip",title:"","data-original-title":"Collapse"}},[i("i",{staticClass:"fa fa-minus"})]),i("button",{staticClass:"btn btn-box-tool",attrs:{"data-widget":"remove","data-toggle":"tooltip",title:"Remove"}},[i("i",{staticClass:"fa fa-times"})])])}],a=(i("c5f6"),i("96cf"),i("3b8d")),o=i("f499"),l=i.n(o),n=(i("ac6a"),i("7374")),c=i("bf26"),u=i("325e"),d=i("bcea"),m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",[i("td",[t._v(t._s(t.k+1)+". ")]),i("td",[i("Select2",{attrs:{options:t.select2_moduleList},on:{change:t.item_changed},model:{value:t.value.r_item_id,callback:function(e){t.$set(t.value,"r_item_id",e)},expression:"value.r_item_id"}})],1),i("td",[i("input",{directives:[{name:"model",rawName:"v-model.number",value:t.value.r_cnt,expression:"value.r_cnt",modifiers:{number:!0}}],staticClass:"form-control",domProps:{value:t.value.r_cnt},on:{input:function(e){e.target.composing||t.$set(t.value,"r_cnt",t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}})]),i("td",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(t.eeFormatNumber(t.value.r_isk_output)))]),t._l(t.render_showMaterialValue,function(e){return i("td",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(t.eeFormatNumber(e)))])}),i("td",{staticStyle:{"vertical-align":"middle"}},[t._v(t._s(t.eeFormatNumber(t.value.r_volumn_output))+" / "+t._s(t.eeFormatNumber(t.value.r_volumn_item)))]),i("td",{staticStyle:{"vertical-align":"middle"}},[i("span",{staticClass:"fa fa-remove text-red ee-pointer ee-opBtn16",on:{click:t.item_delete}})])],2)},p=[],h=i("a4bb"),v=i.n(h),f=i("6f44"),b={name:"ModuleReprocessView_OneReprocessTR",data:function(){return{theId:0}},props:{k:{required:!0},buildCostRate:{required:!0},select2_moduleList:{type:[Array],required:!0},loadedPriceList:{type:[Object]},input_showMaterialList:{type:[Object]},value:{type:[Object]}},computed:{render_showMaterialValue:function(){var t={};for(var e in this.input_showMaterialList)t[e]=0;for(var i=1;i<=10;i++){var s="r_m_cnt_"+i;if(this.value[s]>0){if(void 0==t[this.value.rModuleReprocess["mr_m_"+i]]){console.log("ee error undefined input_showMaterialList",this.value.rModuleReprocess["mr_m_"+i]);continue}t[this.value.rModuleReprocess["mr_m_"+i]]=this.value[s]}}return t}},watch:{"value.rModuleReprocess":function(t,e){this.cal_output()},"value.r_cnt":function(t,e){this.cal_output()},buildCostRate:function(t,e){this.cal_output()},loadedPriceList:{handler:function(t,e){this.cal_output()},deep:!0}},methods:{getUniqueId:function(){return Math.floor(1e6*Math.random())},wrapData:function(t){var e=t;return e},member_weightChanged:function(){this.$emit("weight-changed")},item_delete:function(){this.$emit("item-delete",this.k)},item_changed:function(){this.$emit("item-changed",this.k,this.value.r_item_id)},cal_output:function(){if(void 0==this.value.rModuleReprocess||v()(this.input_showMaterialList).length<1)return!1;for(var t=0,e=0,i=1;i<=10;i++){var s="r_m_cnt_"+i;this.value[s]=_.floor(this.buildCostRate/100*this.value.r_cnt*this.value.rModuleReprocess["m"+s],2),void 0!=this.loadedPriceList[this.value.rModuleReprocess["mr_m_"+i]]&&(t+=this.value[s]*Number(this.loadedPriceList[this.value.rModuleReprocess["mr_m_"+i]])),e+=this.value[s]}this.value.r_isk_output=_.floor(t,2),this.value.r_volumn_item=_.floor(this.value.rModuleReprocess.mr_volumn*this.value.r_cnt,2),this.value.r_volumn_output=_.floor(e/100)}},created:function(){this.theId=Math.floor(1e6*Math.random())},mounted:function(){},mixins:[],components:{Select2:f["a"]}},w=b,C=i("2877"),g=Object(C["a"])(w,m,p,!1,null,null,null),L=g.exports,R=i("d735"),M=i("8ec3"),x=i("3ab5"),y=i("61c1"),S=i("a97d"),P=i("37e4"),k={name:"ModuleReprocessView",data:function(){return{version:"v3.0.1",buildCostRate:30,buildDefaultItemCount:1,addNewItemCount:1,showMaterialList:{},reprocessList:[],emptyOneReprocessItem:{r_item_id:0,r_cnt:1,r_isk_output:0,r_volumn_output:0,r_volumn_item:0,r_m_1:void 0,r_m_cnt_1:0,r_m_2:void 0,r_m_cnt_2:0,r_m_3:void 0,r_m_cnt_3:0,r_m_4:void 0,r_m_cnt_4:0,r_m_5:void 0,r_m_cnt_5:0,r_m_6:void 0,r_m_cnt_6:0,r_m_7:void 0,r_m_cnt_7:0,r_m_8:void 0,r_m_cnt_8:0,r_m_9:void 0,r_m_cnt_9:0,r_m_10:void 0,r_m_cnt_10:0,rModuleReprocess:{mr_id:"",mr_title:"",mr_titleEn:"",mr_volumn:0,mr_m_1:void 0,mr_m_cnt_1:0,mr_m_2:void 0,mr_m_cnt_2:0,mr_m_3:void 0,mr_m_cnt_3:0,mr_m_4:void 0,mr_m_cnt_4:0,mr_m_5:void 0,mr_m_cnt_5:0,mr_m_6:void 0,mr_m_cnt_6:0,mr_m_7:void 0,mr_m_cnt_7:0,mr_m_8:void 0,mr_m_cnt_8:0,mr_m_9:void 0,mr_m_cnt_9:0,mr_m_10:void 0,mr_m_cnt_10:0}},loadedModuleReprocessTitleList:[],loadedModuleReprocessFullList:{},tableData:{columns:[],options:{tableClass:"table table-bordered text-center table-hover table-striped",showTableFooter:!0,sortContainerSize:2,tool_allowGlobalSearch:!0,tool_showRefresh:!0,tool_showColumns:!0}}}},computed:{AccountWorkbench_saveData:function(){var t={reprocessList:[],buildCostRate:this.buildCostRate,priceList:this.priceList,eePriceSelector_params:this.eePriceSelector_params};return this.reprocessList.forEach(function(e,i){t.reprocessList.push({r_item_id:e.r_item_id,r_cnt:e.r_cnt})}),l()(t)},select2_moduleTitleList:function(){var t=[];for(var e in this.loadedModuleReprocessTitleList){var i=this.loadedModuleReprocessTitleList[e],s=i.mr_titleEn;"zh"==this.$i18n.locale&&(s=i.mr_title),t.push({id:i.mr_id,text:s})}return t}},watch:{},methods:{wrapData:function(t){var e=t;return e},loadModuleReprocessList:function(){var t=this,e=this,i="v1/module-reprocess";this.$axios.get(i).then(function(i){var s=[];for(var r in i.data)s.push(t.wrapData(i.data[r]));e.loadedModuleReprocessTitleList=s}).catch(function(t){})},item_addNewItem:function(){this.addNewItemCount<1&&(this.addNewItemCount=1);for(var t=0;t<this.addNewItemCount;t++){var e=this.eeMergeData(this.emptyOneReprocessItem,{r_cnt:this.buildDefaultItemCount});this.reprocessList.push(e)}},item_delete:function(t){this.count_showMaterialList(this.reprocessList[t]["rModuleReprocess"],"remove"),this.reprocessList.splice(t,1)},item_changed:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e,i){var s,r,a=this;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(this.count_showMaterialList(this.reprocessList[e]["rModuleReprocess"],"remove"),!(i<1)){t.next=3;break}return t.abrupt("return",!1);case 3:if(s={},void 0!=this.loadedModuleReprocessFullList[i]){t.next=8;break}return r="v1/module-reprocess/"+i,t.next=8,this.$axios.get(r).then(function(t){a.loadedModuleReprocessFullList[i]=t.data}).catch(function(t){});case 8:s=this.loadedModuleReprocessFullList[i],this.count_showMaterialList(s),this.reprocessList[e]["rModuleReprocess"]=s,e==this.reprocessList.length-1&&this.item_addNewItem();case 12:case"end":return t.stop()}},t,this)}));function e(e,i){return t.apply(this,arguments)}return e}(),count_showMaterialList:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"add",i=1;i<=10;i++){var s="mr_m_"+i,r="mr_m_cnt_"+i;void 0==t[s]||t[r]<=0||("add"==e?void 0==this.showMaterialList[t[s]]?this.$set(this.showMaterialList,t[s],1):this.showMaterialList[t[s]]++:this.showMaterialList[t[s]]<=1?this.$delete(this.showMaterialList,t[s]):this.showMaterialList[t[s]]--)}},cal_sumOutput:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"normal",i=0,s=0;s<this.reprocessList.length;s++){var r=this.reprocessList[s];if("normal"==e)void 0!=r[t]&&(i+=Number(r[t]));else for(var a=1;a<=10;a++)if(r.rModuleReprocess["mr_m_"+a]==t){i+=Number(r["r_m_cnt_"+a]);break}}return this.eeFormatNumber(_.floor(i,2))},setSkillEffect:function(t){this.buildCostRate=_.floor(30*t.costRate,2)},aw_dataLoaded:function(){var t=Object(a["a"])(regeneratorRuntime.mark(function t(e){var i,s,r,a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:for(r in i=this,s=JSON.parse(e.aw_data),this.reprocessList=[],s)a=s[r],"reprocessList"==r?a.forEach(function(t,e){i.reprocessList.push(i.eeMergeData(i.emptyOneReprocessItem,t)),i.item_changed(e,t.r_item_id)}):i[r]=a;this.awFlag.loadingAW=!1;case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},mixins:[y["a"],P["a"]],components:{Pri_TopBar:n["a"],Pri_SideBar:c["a"],Pri_FooterBar:u["a"],Pri_RightBar:d["a"],ModuleReprocessView_OneReprocessTR:L,QuickInputSkill:M["a"],TopicDisplay:R["a"],eeAccountWorkbenchSection:x["a"],eePriceSelector:S["a"]},created:function(){},mounted:function(){this.loadModuleReprocessList(),void 0==this.$route.params.aw_id?this.item_addNewItem():this.awFlag.loadingAW=!0,this.eePriceSelector_params.showDetailPrice=!0},destroyed:function(){},beforeMount:function(){document.body.className="hold-transition skin-red sidebar-mini sidebar-collapse"}},$=k,I=Object(C["a"])($,s,r,!1,null,null,null);e["default"]=I.exports}}]);