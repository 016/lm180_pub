(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["my-corp-list"],{"2ef5":function(t,o,r){"use strict";r.r(o);var a=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"wrapper"},[r("Pri_TopBar"),r("Pri_SideBar"),r("div",{staticClass:"content-wrapper"},[r("section",{staticClass:"content-header"},[r("h1",[t._v("\n        "+t._s(t.$t("pri.myCorpListView.title"))),r("small",[t._v(t._s(t.version))]),r("small",[t._v(t._s(t.$t("pri.myCorpListView.subTitle"))+" ")])]),r("ol",{staticClass:"breadcrumb"},[r("router-link",{attrs:{tag:"li",to:"/dashboard"}},[r("a",{attrs:{href:"javascript:;"}},[r("i",{staticClass:"fa fa-cogs"}),r("span",{domProps:{innerHTML:t._s(t.$t("common.title"))}})])]),r("li",{staticClass:"active"},[t._v(t._s(t.$t("pri.myCorpListView.title")))])],1)]),r("section",{staticClass:"content"},[r("div",{staticClass:"box box-primary"},[r("div",{staticClass:"box-header"},[r("ol",{staticClass:"content-header-btns"},[r("router-link",{class:"btn btn-info ee-columnLeft",attrs:{tag:"a",to:{name:"page-view",params:{p_code:"help_corpModulev1"}}}},[t._v(t._s(t.$t("page.help_corpModulev1.title")))]),r("router-link",{class:"btn btn-primary",attrs:{tag:"a",to:"/pub-corp"}},[t._v(t._s(t.$t("pri.sidebar.pubCorp")))])],1),r("br")]),r("div",{staticClass:"box-body"},[r("eeTable",{attrs:{columnArr:t.tableData.columns,rowArr:t.table_corpListData,optionArr:t.tableData.options},scopedSlots:t._u([{key:"opAction",fn:function(o){return[o.oneRow.cm_status_id==t.$commonConst.corpMemberStatus.approval?[o.oneRow.cm_role_id==t.$commonConst.corpRoleType.ceo?[r("span",{staticClass:"fa fa-edit ee-pointer ",attrs:{title:t.$t("common.update")},on:{click:function(r){return t.editCorp(o.oneRow,o.oneKey)}}}),t._v("\n                      | \n                    ")]:t._e(),r("router-link",{staticClass:"fa fa-eye ee-pointer",attrs:{tag:"span",title:t.$t("common.view"),to:{name:"corp-detail",params:{co_id:o.oneRow.cm_corporation_id}}}}),t._v("\n                    |\n                    "),r("router-link",{staticClass:"fa fa-users ee-pointer",attrs:{tag:"span",title:t.$t("pri.corpMemberListView.title"),to:{name:"corp-member-list",params:{co_id:o.oneRow.cm_corporation_id}}}}),t._v("\n                    |\n                    "),r("router-link",{staticClass:"fa fa-calendar ee-pointer",attrs:{tag:"span",title:t.$t("pri.corpEventListView.title"),to:{name:"corp-event-list",params:{co_id:o.oneRow.cm_corporation_id}}}}),t._v("\n                    |\n                    "),r("router-link",{staticClass:"fa fa-shopping-cart ee-pointer",attrs:{tag:"span",title:t.$t("pri.corpItemListView.title"),to:{name:"corp-item-list",params:{co_id:o.oneRow.cm_corporation_id}}}})]:t._e()]}}])})],1)])])]),r("Pri_FooterBar"),r("CorpFormModal",{attrs:{modal:this.modalCorp,curDataObj:this.curCorpDataObj},on:{"modal-saved":t.modalCorpSaved}})],1)},e=[],i=r("5176"),s=r.n(i),c=r("7374"),l=r("bf26"),n=r("325e"),d=r("bcea"),m=r("6a38"),p=r("98a9"),_={name:"MyCorpListView",data:function(){var t=this;return{version:"v1.0",loadedCorpList:[],modalCorp:{type:"edit",form:{id:"ee-model-co-list-edit-form",class:"",sizeClass:"",title:""}},curCorpDataObj:{i:"",co_id:"",co_title:"",co_code:"",co_rate_iskScore:"",co_desc:"",co_notice:""},tableData:{columns:[{field:"cm_corporation_id",title:function(){return t.$t("pri.myCorpListView.table.title.co_id")},sortable:!0},{field:"co_code",title:function(){return t.$t("pri.myCorpListView.table.title.co_code")},sortable:!0},{field:"co_title",title:function(){return t.$t("pri.myCorpListView.table.title.co_title")},sortable:!0},{field:"co_cnt_member",title:function(){return t.$t("pri.myCorpListView.table.title.co_cnt_member")},sortable:!0},{field:"co_cnt_km",title:function(){return t.$t("pri.myCorpListView.table.title.co_cnt_km")},sortable:!0},{field:"co_creationDate",title:function(){return t.$t("pri.myCorpListView.table.title.co_creationDate")},sortable:!0},{field:"cm_role",title:function(){return t.$t("pri.myCorpListView.table.title.cm_role")},sortable:!0},{field:"cm_creationDate",title:function(){return t.$t("pri.myCorpListView.table.title.cm_creationDate")},sortable:!0},{field:"cm_status",title:function(){return t.$t("pri.myCorpListView.table.title.cm_status_id")},sortable:!0},{type:"slot",field:"opAction",titleStyle:"min-width:90px;",title:function(){return t.$t("common.op")}}],options:{tableClass:"table table-bordered text-center table-hover table-striped",showTableFooter:!0,sortContainerSize:2,tool_allowGlobalSearch:!0,tool_showRefresh:!0,tool_showColumns:!0}}}},computed:{table_corpListData:function(){var t=[];for(var o in this.loadedCorpList){var r=this.loadedCorpList[o],a=r;a["cm_role"]=this.$t("corp.role.cm_role_"+r.cm_role_id),a["cm_status"]=this.$t("corp.memberStatus.cm_status_"+r.cm_status_id),a["co_title"]=r.cmCorporation.co_title,a["co_code"]=r.cmCorporation.co_code,a["co_cnt_member"]=r.cmCorporation.co_cnt_member,a["co_cnt_km"]="0 / 0 / 0",a["co_creationDate"]=r.cmCorporation.co_creationDate,t.push(a)}return t}},watch:{},methods:{wrapData:function(t){var o=t;return o},wrapTableData:function(t){var o=t;return o},loadPubCorpList:function(){var t=this,o="v1/my-corps/corp-members?embed=cmCorporation:co_id,co_title,co_code,co_cnt_member,co_rate_iskScore,co_kmUri,co_shortDesc,co_desc,co_notice,co_adminMsg,co_creationDate";this.$axios.get(o).then(function(o){t.loadedCorpList=o.data}).catch(function(t){})},showDailog:function(t,o){this.modalCorp.type=t,"create"==t?(this.modalCorp.form.title=this.$t("common.create"),this.cleanObj("curCorpDataObj")):(this.modalCorp.form.title=this.$t("common.update"),"view"==t&&(this.modalCorp.form.title=this.$t("common.view")),this.curCorpDataObj=o),$("#"+this.modalCorp.form.id).modal()},editCorp:function(t,o){this.showDailog("update",s()({i:o},t.cmCorporation))},modalCorpSaved:function(t){var o=this;""!=this.curCorpDataObj.co_id&&o.$set(o.loadedCorpList[o.curCorpDataObj.i],"cmCorporation",o.wrapTableData(t)),$("#"+this.modalCorp.form.id).modal("hide")}},mixins:[],components:{Pri_TopBar:c["a"],Pri_SideBar:l["a"],Pri_FooterBar:n["a"],Pri_RightBar:d["a"],eeTable:m["a"],CorpFormModal:p["a"]},created:function(){},mounted:function(){this.loadPubCorpList()},destroyed:function(){},beforeMount:function(){document.body.className="hold-transition skin-red sidebar-mini sidebar-collapse"}},u=_,b=r("2877"),f=Object(b["a"])(u,a,e,!1,null,null,null);o["default"]=f.exports},"98a9":function(t,o,r){"use strict";var a=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("Modal",{attrs:{idName:t.modal.form.id,titleName:t.modal.form.title,showSaveBtn:"view"!=t.modal.type,className:t.modal.form.class},on:{"save-item":t.saveData},scopedSlots:t._u([{key:"form-items",fn:function(){return[""==t.curDataObj.co_id?r("div",{staticClass:"form-group",class:{"has-error":t.errorFlag.co_title}},[r("label",{staticClass:"col-sm-3 control-label",attrs:{for:"input_co_title"}},[t._v(t._s(t.$t("pri.corpFormModal.modal.co_title")))]),r("div",{staticClass:"col-sm-9"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.curDataObj.co_title,expression:"curDataObj.co_title"}],staticClass:"form-control",attrs:{type:"text",id:"input_co_title",placeholder:t.$t("pri.corpFormModal.modal.co_title")},domProps:{value:t.curDataObj.co_title},on:{input:function(o){o.target.composing||t.$set(t.curDataObj,"co_title",o.target.value)}}}),r("span",{directives:[{name:"show",rawName:"v-show",value:t.errorFlag.co_title,expression:"errorFlag.co_title"}],staticClass:"text-red",domProps:{innerHTML:t._s(t.$t("pri.corpFormModal.modal.co_title_hint"))}})])]):t._e(),""==t.curDataObj.co_id?r("div",{staticClass:"form-group",class:{"has-error":t.errorFlag.co_code}},[r("label",{staticClass:"col-sm-3 control-label",attrs:{for:"input_co_code"}},[t._v(t._s(t.$t("pri.corpFormModal.modal.co_code")))]),r("div",{staticClass:"col-sm-9"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.curDataObj.co_code,expression:"curDataObj.co_code"}],staticClass:"form-control",attrs:{type:"text",id:"input_co_code",placeholder:t.$t("pri.corpFormModal.modal.co_code")},domProps:{value:t.curDataObj.co_code},on:{input:function(o){o.target.composing||t.$set(t.curDataObj,"co_code",o.target.value)}}}),r("span",{directives:[{name:"show",rawName:"v-show",value:t.errorFlag.co_code,expression:"errorFlag.co_code"}],staticClass:"text-red",domProps:{innerHTML:t._s(t.$t("pri.corpFormModal.modal.co_code_hint"))}})])]):t._e(),r("div",{staticClass:"form-group",class:{"has-error":t.errorFlag.co_rate_iskScore}},[r("label",{staticClass:"col-sm-3 control-label",attrs:{for:"input_co_rate_iskScore"}},[t._v(t._s(t.$t("pri.corpFormModal.modal.co_rate_iskScore")))]),r("div",{staticClass:"col-sm-9"},[r("div",{staticClass:"input-group"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.curDataObj.co_rate_iskScore,expression:"curDataObj.co_rate_iskScore"}],staticClass:"form-control",attrs:{type:"text",id:"input_co_rate_iskScore",placeholder:t.$t("pri.corpFormModal.modal.co_rate_iskScore")},domProps:{value:t.curDataObj.co_rate_iskScore},on:{input:function(o){o.target.composing||t.$set(t.curDataObj,"co_rate_iskScore",o.target.value)}}}),r("span",{staticClass:"input-group-addon"},[t._v("ISK")])]),r("span",{staticClass:"text-green",domProps:{innerHTML:t._s(t.$t("pri.corpFormModal.modal.co_rate_iskScore_hint"))}})])]),r("div",{staticClass:"form-group",class:{"has-error":t.errorFlag.co_kmUri}},[r("label",{staticClass:"col-sm-3 control-label",attrs:{for:"input_co_kmUri"}},[t._v(t._s(t.$t("pri.corpFormModal.modal.co_kmUri")))]),r("div",{staticClass:"col-sm-9"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.curDataObj.co_kmUri,expression:"curDataObj.co_kmUri"}],staticClass:"form-control",attrs:{id:"input_co_kmUri",placeholder:t.$t("pri.corpFormModal.modal.co_kmUri")},domProps:{value:t.curDataObj.co_kmUri},on:{input:function(o){o.target.composing||t.$set(t.curDataObj,"co_kmUri",o.target.value)}}}),r("span",{staticClass:"text-green",domProps:{innerHTML:t._s(t.$t("pri.corpFormModal.modal.co_kmUri_hint"))}})])]),r("div",{staticClass:"form-group",class:{"has-error":t.errorFlag.co_shortDesc}},[r("label",{staticClass:"col-sm-3 control-label",attrs:{for:"input_co_shortDesc"}},[t._v(t._s(t.$t("pri.corpFormModal.modal.co_shortDesc")))]),r("div",{staticClass:"col-sm-9"},[r("textarea",{directives:[{name:"model",rawName:"v-model",value:t.curDataObj.co_shortDesc,expression:"curDataObj.co_shortDesc"}],staticClass:"form-control",attrs:{id:"input_co_shortDesc",placeholder:t.$t("pri.corpFormModal.modal.co_shortDesc")},domProps:{value:t.curDataObj.co_shortDesc},on:{input:function(o){o.target.composing||t.$set(t.curDataObj,"co_shortDesc",o.target.value)}}}),r("span",{directives:[{name:"show",rawName:"v-show",value:t.errorFlag.co_shortDesc,expression:"errorFlag.co_shortDesc"}],staticClass:"text-red",domProps:{innerHTML:t._s(t.$t("pri.corpFormModal.modal.co_shortDesc_hint"))}})])]),r("div",{staticClass:"form-group",class:{"has-error":t.errorFlag.co_desc}},[r("label",{staticClass:"col-sm-3 control-label",attrs:{for:"input_co_desc"}},[t._v(t._s(t.$t("pri.corpFormModal.modal.co_desc")))]),r("div",{staticClass:"col-sm-9"},[r("quill-editor",{attrs:{placeholder:t.$t("pri.corpFormModal.modal.co_desc")},on:{blur:function(o){return t.onEditorBlur(o)},focus:function(o){return t.onEditorFocus(o)},ready:function(o){return t.onEditorReady(o)}},model:{value:t.curDataObj.co_desc,callback:function(o){t.$set(t.curDataObj,"co_desc",o)},expression:"curDataObj.co_desc"}}),r("span",{directives:[{name:"show",rawName:"v-show",value:t.errorFlag.co_desc,expression:"errorFlag.co_desc"}],staticClass:"text-red",domProps:{innerHTML:t._s(t.$t("pri.corpFormModal.modal.co_desc_hint"))}})],1)]),r("div",{staticClass:"form-group",class:{"has-error":t.errorFlag.co_notice}},[r("label",{staticClass:"col-sm-3 control-label",attrs:{for:"input_co_notice"}},[t._v(t._s(t.$t("pri.corpFormModal.modal.co_notice")))]),r("div",{staticClass:"col-sm-9"},[r("quill-editor",{attrs:{placeholder:t.$t("pri.corpFormModal.modal.co_notice")},on:{blur:function(o){return t.onEditorBlur(o)},focus:function(o){return t.onEditorFocus(o)},ready:function(o){return t.onEditorReady(o)}},model:{value:t.curDataObj.co_notice,callback:function(o){t.$set(t.curDataObj,"co_notice",o)},expression:"curDataObj.co_notice"}}),r("span",{directives:[{name:"show",rawName:"v-show",value:t.errorFlag.co_notice,expression:"errorFlag.co_notice"}],staticClass:"text-red",domProps:{innerHTML:t._s(t.$t("pri.corpFormModal.modal.co_notice_hint"))}})],1)]),r("div",{staticClass:"form-group",class:{"has-error":t.errorFlag.co_adminMsg}},[r("label",{staticClass:"col-sm-3 control-label",attrs:{for:"input_co_adminMsg"}},[t._v(t._s(t.$t("pri.corpFormModal.modal.co_adminMsg")))]),r("div",{staticClass:"col-sm-9"},[r("quill-editor",{attrs:{placeholder:t.$t("pri.corpFormModal.modal.co_adminMsg")},on:{blur:function(o){return t.onEditorBlur(o)},focus:function(o){return t.onEditorFocus(o)},ready:function(o){return t.onEditorReady(o)}},model:{value:t.curDataObj.co_adminMsg,callback:function(o){t.$set(t.curDataObj,"co_adminMsg",o)},expression:"curDataObj.co_adminMsg"}}),r("span",{directives:[{name:"show",rawName:"v-show",value:t.errorFlag.co_adminMsg,expression:"errorFlag.co_adminMsg"}],staticClass:"text-red",domProps:{innerHTML:t._s(t.$t("pri.corpFormModal.modal.co_adminMsg_hint"))}})],1)])]},proxy:!0}])})},e=[],i=r("390f"),s=r("714b"),c={name:"corp-form-modal",data:function(){return{errorFlag:{co_title:!1,co_code:!1,co_kmUri:!1,co_shortDesc:!1,co_desc:!1,co_notice:!1,co_adminMsg:!1}}},props:{curDataObj:{type:[Object],required:!0},modal:{type:[Object],required:!0}},computed:{},methods:{onEditorBlur:function(t){},onEditorFocus:function(t){},onEditorReady:function(t){},saveData:function(){var t=this;for(var o in this.errorFlag)this.errorFlag[o]=!1;var r="v1/corporations";""!=this.curDataObj.co_id?(r+="/"+this.curDataObj.co_id,this.$axios.patch(r,this.curDataObj).then(function(o){t.$emit("modal-saved",o.data)}).catch(function(o){for(var r in o.response.data.data)t.errorFlag[r]=!0})):this.$axios.post(r,this.curDataObj).then(function(o){t.$emit("modal-saved",o.data)}).catch(function(o){for(var r in o.response.data.data)t.errorFlag[r]=!0})}},mixins:[],components:{Modal:s["a"],quillEditor:i["a"]},created:function(){},mounted:function(){},destroyed:function(){},beforeMount:function(){}},l=c,n=r("2877"),d=Object(n["a"])(l,a,e,!1,null,null,null);o["a"]=d.exports},bcea:function(t,o,r){"use strict";var a=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"control-sidebar-bg"})},e=[],i={name:"Pri_RightBar",props:{}},s=i,c=r("2877"),l=Object(c["a"])(s,a,e,!1,null,"e8df3b2e",null);o["a"]=l.exports}}]);