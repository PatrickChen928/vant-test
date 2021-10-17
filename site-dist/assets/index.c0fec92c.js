import{c as z,j as M,b as B,u as W}from"./use-translate.f00dec62.js";import{n as D,m as P,c as S,t as N,a as T,w as U}from"./with-install.8c05f7e9.js";import{c as L,r as A}from"./utils.51167448.js";import{z as E,B as R,x as G,e as o,C as p,r as O,o as I,a as V,w as F,A as e,d as H,F as q}from"./vue-libs.dea03542.js";import{B as _}from"./index.04cdfa9b.js";import"./constant.bdedcaa1.js";import"./use-route.8c8b61a6.js";import"./index.bd074117.js";import"./index.91fa2961.js";const[J,y]=z("circle");let K=0;const j=r=>Math.min(Math.max(+r,0),100);function Q(r,s){const n=r?1:0;return`M ${s/2} ${s/2} m 0, -500 a 500, 500 0 1, ${n} 0, 1000 a 500, 500 0 1, ${n} 0, -1000`}var X=E({name:J,props:{text:String,size:D,fill:P("none"),rate:S(100),speed:S(0),color:[String,Object],clockwise:N,layerColor:String,currentRate:T(0),strokeWidth:S(40),strokeLinecap:String,startPosition:P("top")},emits:["update:currentRate"],setup(r,{emit:s,slots:n}){const m=`van-circle-${K++}`,f=R(()=>+r.strokeWidth+1e3),d=R(()=>Q(r.clockwise,f.value)),x=R(()=>{const t={top:0,right:90,bottom:180,left:270}[r.startPosition];if(t)return{transform:`rotate(${t}deg)`}});G(()=>r.rate,u=>{let t;const l=Date.now(),a=r.currentRate,i=j(u),g=Math.abs((a-i)*1e3/+r.speed),k=()=>{const $=Date.now(),w=Math.min(($-l)/g,1)*(i-a)+a;s("update:currentRate",j(parseFloat(w.toFixed(1)))),(i>a?w<i:w>i)&&(t=A(k))};r.speed?(t&&L(t),t=A(k)):s("update:currentRate",i)},{immediate:!0});const C=()=>{const u=3140,{strokeWidth:t,currentRate:l,strokeLinecap:a}=r,i=u*l/100,g=B(r.color)?`url(#${m})`:r.color,k={stroke:g,strokeWidth:`${+t+1}px`,strokeLinecap:a,strokeDasharray:`${i}px ${u}px`};return o("path",{d:d.value,style:k,class:y("hover"),stroke:g},null)},v=()=>{const u={fill:r.fill,stroke:r.layerColor,strokeWidth:`${r.strokeWidth}px`};return o("path",{class:y("layer"),style:u,d:d.value},null)},h=()=>{const{color:u}=r;if(!B(u))return;const t=Object.keys(u).sort((l,a)=>parseFloat(l)-parseFloat(a)).map((l,a)=>o("stop",{key:a,offset:l,"stop-color":u[l]},null));return o("defs",null,[o("linearGradient",{id:m,x1:"100%",y1:"0%",x2:"0%",y2:"0%"},[t])])},b=()=>{if(n.default)return n.default();if(r.text)return o("div",{class:y("text")},[r.text])};return()=>o("div",{class:y(),style:M(r.size)},[o("svg",{viewBox:`0 0 ${f.value} ${f.value}`,style:x.value},[h(),v(),C()]),b()])}});const c=U(X);const Y={style:{"margin-top":"15px"}},ct=E({setup(r){const s=W({"zh-CN":{left:"\u5DE6\u4FA7",right:"\u53F3\u4FA7",bottom:"\u5E95\u90E8",gradient:"\u6E10\u53D8\u8272",customSize:"\u5927\u5C0F\u5B9A\u5236",customStyle:"\u6837\u5F0F\u5B9A\u5236",customColor:"\u989C\u8272\u5B9A\u5236",customWidth:"\u5BBD\u5EA6\u5B9A\u5236",startPosition:"\u8D77\u59CB\u4F4D\u7F6E",counterClockwise:"\u9006\u65F6\u9488"},"en-US":{left:"Left",right:"Right",bottom:"Bottom",gradient:"Gradient",customSize:"Custom Size",customStyle:"Custom Style",customColor:"Custom Color",customWidth:"Custom Width",startPosition:"Start Position",counterClockwise:"Counter Clockwise"}}),n=p(70),m=p(70),f=p(70),d=p(70),x=p(70),C={"0%":"#3fecff","100%":"#6149f6"},v=u=>Math.min(Math.max(u,0),100),h=()=>{n.value=v(n.value+20)},b=()=>{n.value=v(n.value-20)};return(u,t)=>{const l=O("demo-block");return I(),V(q,null,[o(l,{title:e(s)("basicUsage")},{default:F(()=>[o(e(c),{"current-rate":m.value,"onUpdate:current-rate":t[0]||(t[0]=a=>m.value=a),rate:n.value,speed:100,text:m.value.toFixed(0)+"%"},null,8,["current-rate","rate","text"])]),_:1},8,["title"]),o(l,{title:e(s)("customStyle")},{default:F(()=>[o(e(c),{"current-rate":d.value,"onUpdate:current-rate":t[1]||(t[1]=a=>d.value=a),rate:n.value,speed:100,"stroke-width":60,text:e(s)("customWidth")},null,8,["current-rate","rate","text"]),o(e(c),{"current-rate":d.value,"onUpdate:current-rate":t[2]||(t[2]=a=>d.value=a),color:"#ee0a24",rate:n.value,"layer-color":"#ebedf0",speed:100,text:e(s)("customColor")},null,8,["current-rate","rate","text"]),o(e(c),{"current-rate":f.value,"onUpdate:current-rate":t[3]||(t[3]=a=>f.value=a),rate:n.value,speed:100,color:C,text:e(s)("gradient")},null,8,["current-rate","rate","text"]),o(e(c),{"current-rate":x.value,"onUpdate:current-rate":t[4]||(t[4]=a=>x.value=a),color:"#07c160",rate:n.value,speed:100,clockwise:!1,text:e(s)("counterClockwise"),style:{"margin-top":"15px"}},null,8,["current-rate","rate","text"]),o(e(c),{"current-rate":x.value,"onUpdate:current-rate":t[5]||(t[5]=a=>x.value=a),color:"#7232dd",rate:n.value,speed:100,size:"120px",clockwise:!1,text:e(s)("customSize"),style:{"margin-top":"15px"}},null,8,["current-rate","rate","text"])]),_:1},8,["title"]),H("div",Y,[o(e(_),{text:e(s)("add"),type:"primary",size:"small",onClick:h},null,8,["text"]),o(e(_),{text:e(s)("decrease"),type:"danger",size:"small",onClick:b},null,8,["text"])]),o(l,{title:e(s)("startPosition")},{default:F(()=>[o(e(c),{"current-rate":75,rate:n.value,text:e(s)("left"),"start-position":"left"},null,8,["rate","text"]),o(e(c),{"current-rate":75,rate:n.value,text:e(s)("right"),"start-position":"right"},null,8,["rate","text"]),o(e(c),{"current-rate":75,rate:n.value,text:e(s)("bottom"),"start-position":"bottom"},null,8,["rate","text"])]),_:1},8,["title"])],64)}}});export{ct as default};