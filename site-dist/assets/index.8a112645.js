import{C as l}from"./index.45245c12.js";import{D as n}from"./function-call.0e6e7fc0.js";import{u as F}from"./use-translate.f00dec62.js";import{z as _,C as g,r as A,o as x,a as B,e as o,w as u,A as e,d as E,F as h}from"./vue-libs.dea03542.js";import"./with-install.8c05f7e9.js";import"./use-route.8c8b61a6.js";import"./index.bd074117.js";import"./mount-component.d70fed1c.js";import"./use-expose.e5d76f3d.js";import"./constant.bdedcaa1.js";import"./interceptor.3309ba7f.js";import"./index.b6a5a3b7.js";import"./use-touch.8bab3413.js";import"./index.c020d7aa.js";import"./utils.51167448.js";import"./index.9fc8b336.js";import"./use-lazy-render.4ae98f04.js";import"./on-popup-reopen.f4e064e0.js";import"./index.3d14facd.js";import"./index.04cdfa9b.js";import"./index.91fa2961.js";import"./index.f58e814f.js";import"./useChildren.3c3a8afb.js";import"./useParent.e8f23fef.js";const Y=_({setup(v){const m=n.Component,t=F({"zh-CN":{title:"\u6807\u9898",alert1:"\u63D0\u793A\u5F39\u7A97",alert2:"\u63D0\u793A\u5F39\u7A97\uFF08\u65E0\u6807\u9898\uFF09",confirm:"\u786E\u8BA4\u5F39\u7A97",beforeClose:"\u5F02\u6B65\u5173\u95ED",roundButton:"\u5706\u89D2\u6309\u94AE\u6837\u5F0F",componentCall:"\u7EC4\u4EF6\u8C03\u7528",content:"\u4EE3\u7801\u662F\u5199\u51FA\u6765\u7ED9\u4EBA\u770B\u7684\uFF0C\u9644\u5E26\u80FD\u5728\u673A\u5668\u4E0A\u8FD0\u884C"},"en-US":{title:"Title",alert1:"Alert",alert2:"Alert without title",confirm:"Confirm dialog",beforeClose:"Before Close",roundButton:"Round Button Style",componentCall:"Component Call"}}),r=g(!1),d="https://img.yzcdn.cn/vant/apple-3.jpg",p=()=>{n.alert({title:t("title"),message:t("content")})},f=()=>{n.alert({message:t("content")})},C=()=>{n.alert({theme:"round-button",title:t("title"),message:t("content")})},j=()=>{n.alert({theme:"round-button",message:t("content")})},k=()=>{n.confirm({title:t("title"),message:t("content")})},b=()=>{const a=i=>new Promise(s=>{setTimeout(()=>s(i==="confirm"),1e3)});n.confirm({title:t("title"),message:t("content"),beforeClose:a})};return(a,i)=>{const s=A("demo-block");return x(),B(h,null,[o(s,{card:"",title:e(t)("basicUsage")},{default:u(()=>[o(e(l),{"is-link":"",title:e(t)("alert1"),onClick:p},null,8,["title"]),o(e(l),{"is-link":"",title:e(t)("alert2"),onClick:f},null,8,["title"]),o(e(l),{"is-link":"",title:e(t)("confirm"),onClick:k},null,8,["title"])]),_:1},8,["title"]),o(s,{card:"",title:e(t)("roundButton")},{default:u(()=>[o(e(l),{"is-link":"",title:e(t)("alert1"),onClick:C},null,8,["title"]),o(e(l),{"is-link":"",title:e(t)("alert2"),onClick:j},null,8,["title"])]),_:1},8,["title"]),o(s,{card:"",title:e(t)("beforeClose")},{default:u(()=>[o(e(l),{"is-link":"",title:e(t)("beforeClose"),onClick:b},null,8,["title"])]),_:1},8,["title"]),o(s,{card:"",title:e(t)("componentCall")},{default:u(()=>[o(e(l),{"is-link":"",title:e(t)("componentCall"),onClick:i[0]||(i[0]=c=>r.value=!0)},null,8,["title"]),o(e(m),{show:r.value,"onUpdate:show":i[1]||(i[1]=c=>r.value=c),title:e(t)("title"),"show-cancel-button":"","lazy-render":!1},{default:u(()=>[E("img",{src:d})]),_:1},8,["show","title"])]),_:1},8,["title"])],64)}}});export{Y as default};