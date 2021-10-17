import{c as A,e as u,p as N,f as F,q as R,a as z}from"./use-translate.f00dec62.js";import{n as E,u as I,m as U,t as x,w as K}from"./with-install.8c05f7e9.js";import{m as L,u as M}from"./mount-component.d70fed1c.js";import{e as V,c as W}from"./constant.bdedcaa1.js";import{c as _}from"./interceptor.3309ba7f.js";import{p as q,a as $,P as G}from"./index.b6a5a3b7.js";import{B as y}from"./index.04cdfa9b.js";import{b as P,a as J}from"./index.f58e814f.js";import{z as Q,D as X,e as o,H as p}from"./vue-libs.dea03542.js";const[Y,a,g]=A("dialog"),Z=[...q,"transition","closeOnPopstate"];var v=Q({name:Y,props:u({},$,{title:String,theme:String,width:E,message:[String,Function],callback:Function,allowHtml:Boolean,className:I,transition:U("van-dialog-bounce"),messageAlign:String,closeOnPopstate:x,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showConfirmButton:x,closeOnClickOverlay:Boolean}),emits:["confirm","cancel","update:show"],setup(e,{emit:i,slots:l}){const s=X({confirm:!1,cancel:!1}),C=t=>i("update:show",t),h=t=>{var c;C(!1),(c=e.callback)==null||c.call(e,t)},w=t=>()=>{!e.show||(i(t),e.beforeClose?(s[t]=!0,_(e.beforeClose,{args:[t],done(){h(t),s[t]=!1},canceled(){s[t]=!1}})):h(t))},b=w("cancel"),O=w("confirm"),k=()=>{const t=l.title?l.title():e.title;if(t)return o("div",{class:a("header",{isolated:!e.message&&!l.default})},[t])},S=t=>{const{message:c,allowHtml:f,messageAlign:r}=e,d=a("message",{"has-title":t,[r]:r}),B=R(c)?c():c;return f&&typeof B=="string"?o("div",{class:d,innerHTML:B},null):o("div",{class:d},[B])},T=()=>{if(l.default)return o("div",{class:a("content")},[l.default()]);const{title:t,message:c,allowHtml:f}=e;if(c){const r=!!(t||l.title);return o("div",{key:f?1:0,class:a("content",{isolated:!r})},[S(r)])}},j=()=>o("div",{class:[W,a("footer")]},[e.showCancelButton&&o(y,{size:"large",text:e.cancelButtonText||g("cancel"),class:a("cancel"),style:{color:e.cancelButtonColor},loading:s.cancel,onClick:b},null),e.showConfirmButton&&o(y,{size:"large",text:e.confirmButtonText||g("confirm"),class:[a("confirm"),{[V]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:s.confirm,onClick:O},null)]),D=()=>o(J,{class:a("footer")},{default:()=>[e.showCancelButton&&o(P,{type:"warning",text:e.cancelButtonText||g("cancel"),class:a("cancel"),color:e.cancelButtonColor,loading:s.cancel,onClick:b},null),e.showConfirmButton&&o(P,{type:"danger",text:e.confirmButtonText||g("confirm"),class:a("confirm"),color:e.confirmButtonColor,loading:s.confirm,onClick:O},null)]}),H=()=>l.footer?l.footer():e.theme==="round-button"?D():j();return()=>{const{width:t,title:c,theme:f,message:r,className:d}=e;return o(G,p({role:"dialog",class:[a([f]),d],style:{width:F(t)},"aria-labelledby":c||r,"onUpdate:show":C},N(e,Z)),{default:()=>[k(),T(),H()]})}}});let m;function ee(){({instance:m}=L({setup(){const{state:i,toggle:l}=M();return()=>o(v,p(i,{"onUpdate:show":l}),null)}}))}function n(e){return z?new Promise((i,l)=>{m||ee(),m.open(u({},n.currentOptions,e,{callback:s=>{(s==="confirm"?i:l)(s)}}))}):Promise.resolve()}n.defaultOptions={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};n.currentOptions=u({},n.defaultOptions);n.alert=n;n.confirm=e=>n(u({showCancelButton:!0},e));n.close=()=>{m&&m.toggle(!1)};n.setDefaultOptions=e=>{u(n.currentOptions,e)};n.resetDefaultOptions=()=>{n.currentOptions=u({},n.defaultOptions)};n.Component=K(v);n.install=e=>{e.use(n.Component),e.config.globalProperties.$dialog=n};export{n as D};
