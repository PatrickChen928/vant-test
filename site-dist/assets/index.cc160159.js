import{C as f}from"./index.45245c12.js";import{c as E,e as y,p as T,u as U}from"./use-translate.f00dec62.js";import{t as h,b as I,m as N,w as $}from"./with-install.8c05f7e9.js";import{I as z}from"./index.bd074117.js";import{p as _,a as H,P as K}from"./index.b6a5a3b7.js";import{L}from"./index.91fa2961.js";import{z as O,e as o,H as V,q,C as w,B as j,r as W,o as G,a as J,w as k,A as e,d as M,t as Q,F as R}from"./vue-libs.dea03542.js";import{T as g}from"./function-call.371c5c4a.js";import"./use-route.8c8b61a6.js";import"./interceptor.3309ba7f.js";import"./use-expose.e5d76f3d.js";import"./use-touch.8bab3413.js";import"./index.c020d7aa.js";import"./utils.51167448.js";import"./index.9fc8b336.js";import"./use-lazy-render.4ae98f04.js";import"./on-popup-reopen.f4e064e0.js";import"./index.3d14facd.js";import"./mount-component.d70fed1c.js";const[X,l]=E("action-sheet"),Y=[..._,"round","closeOnPopstate","safeAreaInsetBottom"];var Z=O({name:X,props:y({},H,{title:String,round:h,actions:I(),closeIcon:N("cross"),closeable:h,cancelText:String,description:String,closeOnPopstate:h,closeOnClickAction:Boolean,safeAreaInsetBottom:h}),emits:["select","cancel","update:show"],setup(i,{slots:t,emit:c}){const u=a=>c("update:show",a),p=()=>{u(!1),c("cancel")},d=()=>{if(i.title)return o("div",{class:l("header")},[i.title,i.closeable&&o(z,{name:i.closeIcon,class:l("close"),onClick:p},null)])},m=()=>{if(t.cancel||i.cancelText)return[o("div",{class:l("gap")},null),o("button",{type:"button",class:l("cancel"),onClick:p},[t.cancel?t.cancel():i.cancelText])]},C=(a,F)=>{const{name:S,color:v,subname:n,loading:r,callback:s,disabled:A,className:D}=a,P=r?o(L,{class:l("loading-icon")},null):[o("span",{class:l("name")},[S]),n&&o("div",{class:l("subname")},[n])],B=()=>{A||r||(s&&s(a),i.closeOnClickAction&&u(!1),q(()=>c("select",a,F)))};return o("button",{type:"button",style:{color:v},class:[l("item",{loading:r,disabled:A}),D],onClick:B},[P])},x=()=>{if(i.description||t.description){const a=t.description?t.description():i.description;return o("div",{class:l("description")},[a])}};return()=>o(K,V({class:l(),position:"bottom","onUpdate:show":u},T(i,Y)),{default:()=>{var a;return[d(),x(),o("div",{class:l("content")},[i.actions.map(C),(a=t.default)==null?void 0:a.call(t)]),m()]}})}});const b=$(Z);const tt={class:"demo-action-sheet-content"},kt=O({setup(i){const t=U({"zh-CN":{option1:"\u9009\u9879\u4E00",option2:"\u9009\u9879\u4E8C",option3:"\u9009\u9879\u4E09",subname:"\u63CF\u8FF0\u4FE1\u606F",showCancel:"\u5C55\u793A\u53D6\u6D88\u6309\u94AE",buttonText:"\u5F39\u51FA\u83DC\u5355",customPanel:"\u81EA\u5B9A\u4E49\u9762\u677F",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0\u4FE1\u606F",optionStatus:"\u9009\u9879\u72B6\u6001",coloredOption:"\u7740\u8272\u9009\u9879",disabledOption:"\u7981\u7528\u9009\u9879",showDescription:"\u5C55\u793A\u63CF\u8FF0\u4FE1\u606F"},"en-US":{option1:"Option 1",option2:"Option 2",option3:"Option 3",subname:"Description",showCancel:"Show Cancel Button",buttonText:"Show ActionSheet",customPanel:"Custom Panel",description:"Description",optionStatus:"Option Status",coloredOption:"Colored Option",disabledOption:"Disabled Option",showDescription:"Show Description"}}),c=w(!1),u=w(!1),p=w(!1),d=w(!1),m=w(!1),C=j(()=>[{name:t("option1")},{name:t("option2")},{name:t("option3")}]),x=j(()=>[{name:t("coloredOption"),color:"#ee0a24"},{name:t("disabledOption"),disabled:!0},{loading:!0}]),a=j(()=>[{name:t("option1")},{name:t("option2")},{name:t("option3"),subname:t("subname")}]),F=v=>{c.value=!1,g(v.name)},S=()=>g(t("cancel"));return(v,n)=>{const r=W("demo-block");return G(),J(R,null,[o(r,{card:"",title:e(t)("basicUsage")},{default:k(()=>[o(e(f),{"is-link":"",title:e(t)("basicUsage"),onClick:n[0]||(n[0]=s=>c.value=!0)},null,8,["title"]),o(e(f),{"is-link":"",title:e(t)("showCancel"),onClick:n[1]||(n[1]=s=>u.value=!0)},null,8,["title"]),o(e(f),{"is-link":"",title:e(t)("showDescription"),onClick:n[2]||(n[2]=s=>m.value=!0)},null,8,["title"])]),_:1},8,["title"]),o(r,{card:"",title:e(t)("optionStatus")},{default:k(()=>[o(e(f),{"is-link":"",title:e(t)("optionStatus"),onClick:n[3]||(n[3]=s=>d.value=!0)},null,8,["title"])]),_:1},8,["title"]),o(r,{card:"",title:e(t)("customPanel")},{default:k(()=>[o(e(f),{"is-link":"",title:e(t)("customPanel"),onClick:n[4]||(n[4]=s=>p.value=!0)},null,8,["title"])]),_:1},8,["title"]),o(e(b),{show:c.value,"onUpdate:show":n[5]||(n[5]=s=>c.value=s),actions:e(C),onSelect:F},null,8,["show","actions"]),o(e(b),{show:u.value,"onUpdate:show":n[6]||(n[6]=s=>u.value=s),actions:e(C),"close-on-click-action":"","cancel-text":e(t)("cancel"),onCancel:S},null,8,["show","actions","cancel-text"]),o(e(b),{show:m.value,"onUpdate:show":n[7]||(n[7]=s=>m.value=s),actions:e(a),"close-on-click-action":"","cancel-text":e(t)("cancel"),description:e(t)("description")},null,8,["show","actions","cancel-text","description"]),o(e(b),{show:d.value,"onUpdate:show":n[8]||(n[8]=s=>d.value=s),"close-on-click-action":"",actions:e(x),"cancel-text":e(t)("cancel")},null,8,["show","actions","cancel-text"]),o(e(b),{show:p.value,"onUpdate:show":n[9]||(n[9]=s=>p.value=s),title:e(t)("title")},{default:k(()=>[M("div",tt,Q(e(t)("content")),1)]),_:1},8,["show","title"])],64)}}});export{kt as default};
