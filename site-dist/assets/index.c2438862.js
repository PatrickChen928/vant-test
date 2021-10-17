import{c as U,i as W,z as I,h as L,x as M,u as O}from"./use-translate.f00dec62.js";import{c as V,n as F,w as X}from"./with-install.8c05f7e9.js";import{c as $}from"./interceptor.3309ba7f.js";import{u as G}from"./use-touch.8bab3413.js";import{u as J}from"./use-expose.e5d76f3d.js";import{z as P,C as x,D as K,B as q,e as s,r as Q,o as Y,a as Z,w as r,A as t,F as ee}from"./vue-libs.dea03542.js";import{u as te}from"./index.51100e14.js";import{B as p}from"./index.04cdfa9b.js";import{C as z}from"./index.45245c12.js";import{C as oe}from"./index.6a20cdb3.js";import{D as se}from"./function-call.0e6e7fc0.js";import"./utils.51167448.js";import"./index.c020d7aa.js";import"./constant.bdedcaa1.js";import"./use-route.8c8b61a6.js";import"./index.bd074117.js";import"./index.91fa2961.js";import"./index.8020963d.js";import"./index.bdab381d.js";import"./mount-component.d70fed1c.js";import"./index.b6a5a3b7.js";import"./index.9fc8b336.js";import"./use-lazy-render.4ae98f04.js";import"./on-popup-reopen.f4e064e0.js";import"./index.3d14facd.js";import"./index.f58e814f.js";import"./useChildren.3c3a8afb.js";import"./useParent.e8f23fef.js";const[le,j]=U("swipe-cell"),ne={name:V(""),disabled:Boolean,leftWidth:F,rightWidth:F,beforeClose:Function,stopPropagation:Boolean};var ae=P({name:le,props:ne,emits:["open","close","click"],setup(l,{emit:o,slots:u}){let i,f,d;const m=x(),_=x(),y=x(),n=K({offset:0,dragging:!1}),h=G(),w=e=>e.value?I(e).width:0,g=q(()=>W(l.leftWidth)?+l.leftWidth:w(_)),C=q(()=>W(l.rightWidth)?+l.rightWidth:w(y)),T=e=>{i=!0,n.offset=e==="left"?g.value:-C.value,o("open",{name:l.name,position:e})},b=e=>{n.offset=0,i&&(i=!1,o("close",{name:l.name,position:e}))},A=e=>{const a=Math.abs(n.offset),c=.15,H=i?1-c:c,S=e==="left"?g.value:C.value;S&&a>S*H?T(e):b(e)},R=e=>{l.disabled||(d=n.offset,h.start(e))},N=e=>{if(l.disabled)return;const{deltaX:a}=h;h.move(e),h.isHorizontal()&&(f=!0,n.dragging=!0,(!i||a.value*d<0)&&L(e,l.stopPropagation),n.offset=M(a.value+d,-C.value,g.value))},k=()=>{n.dragging&&(n.dragging=!1,A(n.offset>0?"left":"right"),setTimeout(()=>{f=!1},0))},B=(e="outside")=>{o("click",e),i&&!f&&$(l.beforeClose,{args:[{name:l.name,position:e}],done:()=>b(e)})},E=(e,a)=>c=>{a&&c.stopPropagation(),B(e)},D=(e,a)=>{const c=u[e];if(c)return s("div",{ref:a,class:j(e),onClick:E(e,!0)},[c()])};return J({open:T,close:b}),te(m,()=>B("outside"),{eventName:"touchstart"}),()=>{var a;const e={transform:`translate3d(${n.offset}px, 0, 0)`,transitionDuration:n.dragging?"0s":".6s"};return s("div",{ref:m,class:j(),onClick:E("cell"),onTouchstart:R,onTouchmove:N,onTouchend:k,onTouchcancel:k},[s("div",{class:j("wrapper"),style:e},[D("left",_),(a=u.default)==null?void 0:a.call(u),D("right",y)])])}}});const v=X(ae);const ze=P({setup(l){const o=O({"zh-CN":{select:"\u9009\u62E9",delete:"\u5220\u9664",collect:"\u6536\u85CF",title:"\u5355\u5143\u683C",confirm:"\u786E\u5B9A\u5220\u9664\u5417\uFF1F",cardTitle:"\u5546\u54C1\u6807\u9898",beforeClose:"\u5F02\u6B65\u5173\u95ED",customContent:"\u81EA\u5B9A\u4E49\u5185\u5BB9"},"en-US":{select:"Select",delete:"Delete",collect:"Collect",title:"Cell",confirm:"Are you sure to delete?",cardTitle:"Title",beforeClose:"Before Close",customContent:"Custom Content"}}),u="https://img.yzcdn.cn/vant/ipad.jpeg",i=({position:f})=>{switch(f){case"left":case"cell":case"outside":return!0;case"right":return new Promise(d=>{se.confirm({title:o("confirm")}).then(d)})}};return(f,d)=>{const m=Q("demo-block");return Y(),Z(ee,null,[s(m,{title:t(o)("basicUsage")},{default:r(()=>[s(t(v),null,{left:r(()=>[s(t(p),{square:"",type:"primary",text:t(o)("select")},null,8,["text"])]),right:r(()=>[s(t(p),{square:"",type:"danger",text:t(o)("delete")},null,8,["text"]),s(t(p),{square:"",type:"primary",text:t(o)("collect")},null,8,["text"])]),default:r(()=>[s(t(z),{border:!1,title:t(o)("title"),value:t(o)("content")},null,8,["title","value"])]),_:1})]),_:1},8,["title"]),s(m,{title:t(o)("customContent")},{default:r(()=>[s(t(v),null,{right:r(()=>[s(t(p),{square:"",type:"danger",class:"delete-button",text:t(o)("delete")},null,8,["text"])]),default:r(()=>[s(t(oe),{num:"2",price:"2.00",desc:t(o)("desc"),title:t(o)("cardTitle"),thumb:u},null,8,["desc","title"])]),_:1})]),_:1},8,["title"]),s(m,{title:t(o)("beforeClose")},{default:r(()=>[s(t(v),{"before-close":i},{left:r(()=>[s(t(p),{square:"",type:"primary",text:t(o)("select")},null,8,["text"])]),right:r(()=>[s(t(p),{square:"",type:"danger",text:t(o)("delete")},null,8,["text"])]),default:r(()=>[s(t(z),{border:!1,title:t(o)("title"),value:t(o)("content")},null,8,["title","value"])]),_:1})]),_:1},8,["title"])],64)}}});export{ze as default};