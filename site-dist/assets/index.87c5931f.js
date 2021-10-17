import{c as _,b as K,e as F,o as Q,u as W}from"./use-translate.f00dec62.js";import{n as E,t as M,c as k,b as X,w as Y}from"./with-install.8c05f7e9.js";import{z as B,C as S,e as l,F as Z,D as ee,B as y,x as T,j as p,v as j,q as ae,r as te,o as se,c as oe,w as le,A}from"./vue-libs.dea03542.js";import{u as re}from"./use-expose.e5d76f3d.js";import{A as ne,a as de}from"./index.59c12195.js";import{C as L}from"./index.45245c12.js";import{F as D}from"./index.cdcf7a30.js";import{P as ue}from"./index.b6a5a3b7.js";import{T as P}from"./function-call.371c5c4a.js";import{B as I}from"./index.04cdfa9b.js";import{S as ce}from"./index.b51356d1.js";import"./deep-clone.0c9ce2b7.js";import"./Picker.661c0308.js";import"./constant.bdedcaa1.js";import"./index.91fa2961.js";import"./use-touch.8bab3413.js";import"./useParent.e8f23fef.js";import"./useChildren.3c3a8afb.js";import"./index.81eaf013.js";import"./use-route.8c8b61a6.js";import"./index.bd074117.js";import"./index.d48d155f.js";import"./interceptor.3309ba7f.js";import"./index.c020d7aa.js";import"./utils.51167448.js";import"./index.9fc8b336.js";import"./use-lazy-render.4ae98f04.js";import"./on-popup-reopen.f4e064e0.js";import"./index.3d14facd.js";import"./mount-component.d70fed1c.js";const[ie,R,U]=_("address-edit-detail");var he=B({name:ie,props:{show:Boolean,value:String,focused:Boolean,detailRows:E,searchResult:Array,errorMessage:String,detailMaxlength:E,showSearchResult:Boolean},emits:["blur","focus","input","select-search"],setup(a,{emit:o}){const h=S(),c=()=>a.focused&&a.searchResult&&a.showSearchResult,t=n=>{o("select-search",n),o("input",`${n.address||""} ${n.name||""}`.trim())},v=n=>{if(n.name){const i=n.name.replace(a.value,`<span class=${R("keyword")}>${a.value}</span>`);return l("div",{innerHTML:i},null)}},g=()=>{if(!c())return;const{searchResult:n}=a;return n.map(i=>l(L,{clickable:!0,key:i.name+i.address,icon:"location-o",label:i.address,class:R("search-item"),border:!1,onClick:()=>t(i)},{title:()=>v(i)}))},C=n=>o("blur",n),w=n=>o("focus",n),f=n=>o("input",n);return()=>{if(a.show)return l(Z,null,[l(D,{autosize:!0,clearable:!0,ref:h,class:R(),rows:a.detailRows,type:"textarea",label:U("label"),border:!c(),maxlength:a.detailMaxlength,modelValue:a.value,placeholder:U("placeholder"),errorMessage:a.errorMessage,onBlur:C,onFocus:w,"onUpdate:modelValue":f},null),g()])}}});const[me,b,r]=_("address-edit"),$={name:"",tel:"",city:"",county:"",country:"",province:"",areaCode:"",isDefault:!1,postalCode:"",addressDetail:""},fe=a=>/^\d{6}$/.test(a),ge={areaList:Object,isSaving:Boolean,isDeleting:Boolean,validator:Function,showArea:M,showDetail:M,showDelete:Boolean,showPostal:Boolean,disableArea:Boolean,searchResult:Array,telMaxlength:E,showSetDefault:Boolean,saveButtonText:String,areaPlaceholder:String,deleteButtonText:String,showSearchResult:Boolean,detailRows:k(1),detailMaxlength:k(200),areaColumnsPlaceholder:X(),addressInfo:{type:Object,default:()=>F({},$)},telValidator:{type:Function,default:Q},postalValidator:{type:Function,default:fe}};var Ce=B({name:me,props:ge,emits:["save","focus","delete","click-area","change-area","change-detail","select-search","change-default"],setup(a,{emit:o,slots:h}){const c=S(),t=ee({data:{},showAreaPopup:!1,detailFocused:!1,errorInfo:{tel:"",name:"",areaCode:"",postalCode:"",addressDetail:""}}),v=y(()=>K(a.areaList)&&Object.keys(a.areaList).length),g=y(()=>{const{country:e,province:s,city:d,county:m,areaCode:u}=t.data;if(u){const V=[e,s,d,m];return s&&s===d&&V.splice(1,1),V.filter(Boolean).join("/")}return""}),C=y(()=>{var e;return((e=a.searchResult)==null?void 0:e.length)&&t.detailFocused}),w=()=>{if(c.value){const e=c.value.getArea();e.areaCode=e.code,delete e.code,F(t.data,e)}},f=e=>{t.errorInfo[e]="",t.detailFocused=e==="addressDetail",o("focus",e)},n=e=>{const s=String(t.data[e]||"").trim();if(a.validator){const d=a.validator(e,s);if(d)return d}switch(e){case"name":return s?"":r("nameEmpty");case"tel":return a.telValidator(s)?"":r("telInvalid");case"areaCode":return s?"":r("areaEmpty");case"addressDetail":return s?"":r("addressEmpty");case"postalCode":return s&&!a.postalValidator(s)?r("postalEmpty"):""}},i=()=>{const e=["name","tel"];a.showArea&&e.push("areaCode"),a.showDetail&&e.push("addressDetail"),a.showPostal&&e.push("postalCode"),e.every(d=>{const m=n(d);return m&&(t.errorInfo[d]=m),!m})&&!a.isSaving&&o("save",t.data)},N=e=>{t.data.addressDetail=e,o("change-detail",e)},z=e=>{if(e=e.filter(Boolean),e.some(s=>!s.code)){P(r("areaEmpty"));return}t.showAreaPopup=!1,w(),o("change-area",e)},O=()=>o("delete",t.data),H=()=>c.value?c.value.getValues():[],x=e=>{t.data.areaCode=e||"",e&&ae(w)},q=()=>{setTimeout(()=>{t.detailFocused=!1})},G=e=>{t.data.addressDetail=e},J=()=>{if(a.showSetDefault){const e={"right-icon":()=>l(ce,{modelValue:t.data.isDefault,"onUpdate:modelValue":s=>t.data.isDefault=s,size:"24",onChange:s=>o("change-default",s)},null)};return p(l(L,{center:!0,title:r("defaultAddress"),class:b("default")},e),[[j,!C.value]])}return null};return re({getArea:H,setAreaCode:x,setAddressDetail:G}),T(()=>a.areaList,()=>x(t.data.areaCode)),T(()=>a.addressInfo,e=>{t.data=F({},$,e),x(e.areaCode)},{deep:!0,immediate:!0}),()=>{var m;const{data:e,errorInfo:s}=t,{disableArea:d}=a;return l("div",{class:b()},[l("div",{class:b("fields")},[l(D,{modelValue:e.name,"onUpdate:modelValue":u=>e.name=u,clearable:!0,label:r("name"),placeholder:r("name"),errorMessage:s.name,onFocus:()=>f("name")},null),l(D,{modelValue:e.tel,"onUpdate:modelValue":u=>e.tel=u,clearable:!0,type:"tel",label:r("tel"),maxlength:a.telMaxlength,placeholder:r("tel"),errorMessage:s.tel,onFocus:()=>f("tel")},null),p(l(D,{readonly:!0,label:r("area"),"is-link":!d,modelValue:g.value,placeholder:a.areaPlaceholder||r("area"),errorMessage:s.areaCode,onFocus:()=>f("areaCode"),onClick:()=>{o("click-area"),t.showAreaPopup=!d}},null),[[j,a.showArea]]),l(he,{show:a.showDetail,value:e.addressDetail,focused:t.detailFocused,detailRows:a.detailRows,errorMessage:s.addressDetail,searchResult:a.searchResult,detailMaxlength:a.detailMaxlength,showSearchResult:a.showSearchResult,onBlur:q,onFocus:()=>f("addressDetail"),onInput:N,"onSelect-search":u=>o("select-search",u)},null),a.showPostal&&p(l(D,{modelValue:e.postalCode,"onUpdate:modelValue":u=>e.postalCode=u,type:"tel",label:r("postal"),maxlength:"6",placeholder:r("postal"),errorMessage:s.postalCode,onFocus:()=>f("postalCode")},null),[[j,!C.value]]),(m=h.default)==null?void 0:m.call(h)]),J(),p(l("div",{class:b("buttons")},[l(I,{block:!0,round:!0,type:"danger",text:a.saveButtonText||r("save"),class:b("button"),loading:a.isSaving,onClick:i},null),a.showDelete&&l(I,{block:!0,round:!0,class:b("button"),loading:a.isDeleting,text:a.deleteButtonText||r("delete"),onClick:O},null)]),[[j,!C.value]]),l(ue,{show:t.showAreaPopup,"onUpdate:show":u=>t.showAreaPopup=u,round:!0,teleport:"body",position:"bottom",lazyRender:!1},{default:()=>[l(ne,{ref:c,value:e.areaCode,loading:!v.value,areaList:a.areaList,columnsPlaceholder:a.areaColumnsPlaceholder,onConfirm:z,onCancel:()=>{t.showAreaPopup=!1}},null)]})])}}});const we=Y(Ce);const Ke=B({setup(a){const o=W({"zh-CN":{areaColumnsPlaceholder:["\u8BF7\u9009\u62E9","\u8BF7\u9009\u62E9","\u8BF7\u9009\u62E9"],searchResult:[{name:"\u9EC4\u9F99\u4E07\u79D1\u4E2D\u5FC3",address:"\u676D\u5DDE\u5E02\u897F\u6E56\u533A"},{name:"\u9EC4\u9F99\u4E07\u79D1\u4E2D\u5FC3G\u5EA7"},{name:"\u9EC4\u9F99\u4E07\u79D1\u4E2D\u5FC3H\u5EA7",address:"\u676D\u5DDE\u5E02\u897F\u6E56\u533A"}]},"en-US":{areaColumnsPlaceholder:["Choose","Choose","Choose"],searchResult:[{name:"Name1",address:"Address"},{name:"Name2"},{name:"Name3",address:"Address"}]}}),h=S([]),c=()=>P(o("save")),t=()=>P(o("delete")),v=g=>{h.value=g?o("searchResult"):[]};return(g,C)=>{const w=te("demo-block");return se(),oe(w,{title:A(o)("basicUsage")},{default:le(()=>[l(A(we),{"area-list":A(de),"show-postal":"","show-delete":"","show-set-default":"","show-search-result":"","search-result":h.value,"area-columns-placeholder":A(o)("areaColumnsPlaceholder"),onSave:c,onDelete:t,onChangeDetail:v},null,8,["area-list","search-result","area-columns-placeholder"])]),_:1},8,["title"])}}});export{Ke as default};
