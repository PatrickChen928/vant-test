import{A as l,C as w,D as y}from"./vue-libs.dea03542.js";function q(){}const G=Object.assign,p=typeof window!="undefined";function f(e,t){const n=t.split(".");let u=e;return n.forEach(o=>{var a;u=(a=u[o])!=null?a:""}),u}function K(e,t,n){return t.reduce((u,o)=>((!n||e[o]!==void 0)&&(u[o]=e[o]),u),{})}function S(e){return e===window}function E(e,t){return{top:0,left:0,right:e,bottom:t,width:e,height:t}}var v=e=>{var t=l(e);if(S(t)){var n=t.innerWidth,u=t.innerHeight;return E(n,u)}return t&&t.getBoundingClientRect?t.getBoundingClientRect():E(0,0)};const r=e=>e!=null,i=e=>typeof e=="function",g=e=>e!==null&&typeof e=="object",X=e=>g(e)&&i(e.then)&&i(e.catch),J=e=>Object.prototype.toString.call(e)==="[object Date]"&&!Number.isNaN(e.getTime());function Q(e){return e=e.replace(/[^-|\d]/g,""),/^((\+86)|(86))?(1)\d{10}$/.test(e)||/^0[0-9-]{10,13}$/.test(e)}const T=e=>typeof e=="number"||/^\d+(\.\d+)?$/.test(e),$=()=>p?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1;function x(e){const t="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(t,0)}function m(e,t){"scrollTop"in e?e.scrollTop=t:e.scrollTo(e.scrollX,t)}function F(){return window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0}function P(e){m(window,e),m(document.body,e)}function ee(e,t){if(e===window)return 0;const n=t?x(t):F();return v(e).top+n}const O=$();function te(){O&&P(F())}const U=e=>e.stopPropagation();function ne(e,t){(typeof e.cancelable!="boolean"||e.cancelable)&&e.preventDefault(),t&&U(e)}function ue(e,t){const n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function oe(e){const t=l(e);if(!t)return!1;const n=window.getComputedStyle(t),u=n.display==="none",o=t.offsetParent===null&&n.position!=="fixed";return u||o}function N(e){if(!!r(e))return T(e)?`${e}px`:String(e)}function ae(e){if(r(e)){const t=N(e);return{width:t,height:t}}}function se(e){const t={};return e!==void 0&&(t.zIndex=+e),t}let c;function R(){if(!c){const e=document.documentElement,t=e.style.fontSize||window.getComputedStyle(e).fontSize;c=parseFloat(t)}return c}function z(e){return e=e.replace(/rem/g,""),+e*R()}function L(e){return e=e.replace(/vw/g,""),+e*window.innerWidth/100}function j(e){return e=e.replace(/vh/g,""),+e*window.innerHeight/100}function re(e){if(typeof e=="number")return e;if(p){if(e.includes("rem"))return z(e);if(e.includes("vw"))return L(e);if(e.includes("vh"))return j(e)}return parseFloat(e)}const M=/-(\w)/g,C=e=>e.replace(M,(t,n)=>n.toUpperCase()),ie=e=>e.replace(/([A-Z])/g,"-$1").toLowerCase().replace(/^-/,"");function ce(e,t=2){let n=e+"";for(;n.length<t;)n="0"+n;return n}const de=(e,t,n)=>Math.min(Math.max(e,t),n);function B(e,t,n){const u=e.indexOf(t);return u===-1?e:t==="-"&&u!==0?e.slice(0,u):e.slice(0,u+1)+e.slice(u).replace(n,"")}function le(e,t=!0,n=!0){t?e=B(e,".",/\./g):e=e.split(".")[0],n?e=B(e,"-",/-/g):e=e.replace(/-/,"");const u=t?/[^-0-9.]/g:/[^-0-9]/g;return e.replace(u,"")}function pe(e,t){const n=10**10;return Math.round((e+t)*n)/n}const{hasOwnProperty:H}=Object.prototype;function I(e,t,n){const u=t[n];!r(u)||(!H.call(e,n)||!g(u)?e[n]=u:e[n]=h(Object(e[n]),t[n]))}function h(e,t){return Object.keys(t).forEach(n=>{I(e,t,n)}),e}var W={name:"\u59D3\u540D",tel:"\u7535\u8BDD",save:"\u4FDD\u5B58",confirm:"\u786E\u8BA4",cancel:"\u53D6\u6D88",delete:"\u5220\u9664",loading:"\u52A0\u8F7D\u4E2D...",noCoupon:"\u6682\u65E0\u4F18\u60E0\u5238",nameEmpty:"\u8BF7\u586B\u5199\u59D3\u540D",telInvalid:"\u8BF7\u586B\u5199\u6B63\u786E\u7684\u7535\u8BDD",vanCalendar:{end:"\u7ED3\u675F",start:"\u5F00\u59CB",title:"\u65E5\u671F\u9009\u62E9",confirm:"\u786E\u5B9A",startEnd:"\u5F00\u59CB/\u7ED3\u675F",weekdays:["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"],monthTitle:(e,t)=>`${e}\u5E74${t}\u6708`,rangePrompt:e=>`\u6700\u591A\u9009\u62E9 ${e} \u5929`},vanCascader:{select:"\u8BF7\u9009\u62E9"},vanContactCard:{addText:"\u6DFB\u52A0\u8054\u7CFB\u4EBA"},vanContactList:{addText:"\u65B0\u5EFA\u8054\u7CFB\u4EBA"},vanPagination:{prev:"\u4E0A\u4E00\u9875",next:"\u4E0B\u4E00\u9875"},vanPullRefresh:{pulling:"\u4E0B\u62C9\u5373\u53EF\u5237\u65B0...",loosing:"\u91CA\u653E\u5373\u53EF\u5237\u65B0..."},vanSubmitBar:{label:"\u5408\u8BA1\uFF1A"},vanCoupon:{unlimited:"\u65E0\u4F7F\u7528\u95E8\u69DB",discount:e=>`${e}\u6298`,condition:e=>`\u6EE1${e}\u5143\u53EF\u7528`},vanCouponCell:{title:"\u4F18\u60E0\u5238",count:e=>`${e}\u5F20\u53EF\u7528`},vanCouponList:{exchange:"\u5151\u6362",close:"\u4E0D\u4F7F\u7528\u4F18\u60E0\u5238",enable:"\u53EF\u7528",disabled:"\u4E0D\u53EF\u7528",placeholder:"\u8BF7\u8F93\u5165\u4F18\u60E0\u7801"},vanAddressEdit:{area:"\u5730\u533A",postal:"\u90AE\u653F\u7F16\u7801",areaEmpty:"\u8BF7\u9009\u62E9\u5730\u533A",addressEmpty:"\u8BF7\u586B\u5199\u8BE6\u7EC6\u5730\u5740",postalEmpty:"\u90AE\u653F\u7F16\u7801\u4E0D\u6B63\u786E",defaultAddress:"\u8BBE\u4E3A\u9ED8\u8BA4\u6536\u8D27\u5730\u5740"},vanAddressEditDetail:{label:"\u8BE6\u7EC6\u5730\u5740",placeholder:"\u8857\u9053\u95E8\u724C\u4FE1\u606F"},vanAddressList:{add:"\u65B0\u589E\u5730\u5740"}};const A=w("zh-CN"),b=y({"zh-CN":W}),s={messages(){return b[A.value]},use(e,t){A.value=e,this.add({[e]:t})},add(e={}){h(b,e)}};function D(e){const t=C(e)+".";return(n,...u)=>{const o=s.messages(),a=f(o,t+n)||f(o,n);return i(a)?a(...u):a}}function d(e,t){return t?typeof t=="string"?` ${e}--${t}`:Array.isArray(t)?t.reduce((n,u)=>n+d(e,u),""):Object.keys(t).reduce((n,u)=>n+(t[u]?d(e,u):""),""):""}function k(e){return(t,n)=>(t&&typeof t!="string"&&(n=t,t=""),t=t?`${e}__${t}`:e,`${t}${d(t,n)}`)}function fe(e){const t=`van-${e}`;return[t,k(t),D(t)]}var Y={name:"Name",tel:"Phone",save:"Save",confirm:"Confirm",cancel:"Cancel",delete:"Delete",loading:"Loading...",noCoupon:"No coupons",nameEmpty:"Please fill in the name",telInvalid:"Malformed phone number",vanCalendar:{end:"End",start:"Start",title:"Calendar",startEnd:"Start/End",weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],monthTitle:(e,t)=>`${e}/${t}`,rangePrompt:e=>`Choose no more than ${e} days`},vanCascader:{select:"Select"},vanContactCard:{addText:"Add contact info"},vanContactList:{addText:"Add new contact"},vanPagination:{prev:"Previous",next:"Next"},vanPullRefresh:{pulling:"Pull to refresh...",loosing:"Loose to refresh..."},vanSubmitBar:{label:"Total\uFF1A"},vanCoupon:{unlimited:"Unlimited",discount:e=>`${e*10}% off`,condition:e=>`At least ${e}`},vanCouponCell:{title:"Coupon",count:e=>`You have ${e} coupons`},vanCouponList:{exchange:"Exchange",close:"Close",enable:"Available",disabled:"Unavailable",placeholder:"Coupon code"},vanAddressEdit:{area:"Area",postal:"Postal",areaEmpty:"Please select a receiving area",addressEmpty:"Address can not be empty",postalEmpty:"Wrong postal code",defaultAddress:"Set as the default address"},vanAddressEditDetail:{label:"Address",placeholder:"Address"},vanAddressList:{add:"Add new address"}};function Z(){s.add({"en-US":Y}),window.vueRouter&&window.vueRouter.afterEach(e=>{const{lang:t}=e.meta||{};t&&s.use(t)}),s.add({"zh-CN":{add:"\u589E\u52A0",decrease:"\u51CF\u5C11",red:"\u7EA2\u8272",orange:"\u6A59\u8272",yellow:"\u9EC4\u8272",purple:"\u7D2B\u8272",tab:"\u6807\u7B7E",tag:"\u6807\u7B7E",desc:"\u63CF\u8FF0\u4FE1\u606F",back:"\u8FD4\u56DE",title:"\u6807\u9898",status:"\u72B6\u6001",button:"\u6309\u94AE",option:"\u9009\u9879",search:"\u641C\u7D22",content:"\u5185\u5BB9",custom:"\u81EA\u5B9A\u4E49",username:"\u7528\u6237\u540D",password:"\u5BC6\u7801",disabled:"\u7981\u7528\u72B6\u6001",uneditable:"\u4E0D\u53EF\u7F16\u8F91",basicUsage:"\u57FA\u7840\u7528\u6CD5",advancedUsage:"\u9AD8\u7EA7\u7528\u6CD5",loadingStatus:"\u52A0\u8F7D\u72B6\u6001",usernamePlaceholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D",passwordPlaceholder:"\u8BF7\u8F93\u5165\u5BC6\u7801"},"en-US":{add:"Add",decrease:"Decrease",red:"Red",orange:"Orange",yellow:"Yellow",purple:"Purple",tab:"Tab",tag:"Tag",desc:"Description",back:"Back",title:"Title",status:"Status",button:"Button",option:"Option",search:"Search",content:"Content",custom:"Custom",username:"Username",password:"Password",loadingStatus:"Loading",disabled:"Disabled",uneditable:"Uneditable",basicUsage:"Basic Usage",advancedUsage:"Advanced Usage",usernamePlaceholder:"Username",passwordPlaceholder:"Password"}})}Z();let _=0;function Ee(e){const t=`demo-i18n-${_++}`;if(e){const n={},u=C(t);Object.keys(e).forEach(o=>{n[o]={[u]:e[o]}}),s.add(n)}return D(t)}export{m as A,J as B,x as C,oe as D,ee as E,U as F,pe as G,ce as H,p as a,g as b,fe as c,C as d,G as e,N as f,T as g,ne as h,r as i,ae as j,ie as k,X as l,se as m,q as n,Q as o,K as p,i as q,F as r,P as s,ue as t,Ee as u,le as v,te as w,de as x,re as y,v as z};
