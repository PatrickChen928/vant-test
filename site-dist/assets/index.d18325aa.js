import{a as r,R as d}from"./index.b8e8b7b2.js";import{C as k}from"./index.545ef601.js";import{C as E}from"./index.45245c12.js";import{u as I}from"./use-translate.f00dec62.js";import{z as S,C as m,r as U,o as A,a as B,e as a,w as l,A as e,h as i,t as s,d as j,F}from"./vue-libs.dea03542.js";import"./with-install.8c05f7e9.js";import"./useChildren.3c3a8afb.js";import"./index.d48d155f.js";import"./Checker.f421b064.js";import"./index.bd074117.js";import"./useParent.e8f23fef.js";import"./constant.bdedcaa1.js";import"./use-route.8c8b61a6.js";const h=["src"],D=["src"],Q=S({setup(w){const o=I({"zh-CN":{radio:"\u5355\u9009\u6846",text1:"\u672A\u9009\u4E2D\u7981\u7528",text2:"\u9009\u4E2D\u4E14\u7981\u7528",withCell:"\u642D\u914D\u5355\u5143\u683C\u7EC4\u4EF6\u4F7F\u7528",horizontal:"\u6C34\u5E73\u6392\u5217",customIcon:"\u81EA\u5B9A\u4E49\u56FE\u6807",customColor:"\u81EA\u5B9A\u4E49\u989C\u8272",customShape:"\u81EA\u5B9A\u4E49\u5F62\u72B6",customIconSize:"\u81EA\u5B9A\u4E49\u5927\u5C0F",disableLabel:"\u7981\u7528\u6587\u672C\u70B9\u51FB"},"en-US":{radio:"Radio",text1:"Disabled",text2:"Disabled and checked",withCell:"Inside a Cell",horizontal:"Hrizontal",customIcon:"Custom Icon",customColor:"Custom Color",customShape:"Custom Shape",customIconSize:"Custom Icon Size",disableLabel:"Disable label click"}}),p=m("1"),f=m("2"),_=m("1"),v=m("1"),c=m("1"),b=m("1"),C=m("1"),V=m("1"),g=m("1"),x="https://img.yzcdn.cn/vant/user-active.png",z="https://img.yzcdn.cn/vant/user-inactive.png";return(y,u)=>{const n=U("demo-block");return A(),B(F,null,[a(n,{title:e(o)("basicUsage")},{default:l(()=>[a(e(r),{modelValue:p.value,"onUpdate:modelValue":u[0]||(u[0]=t=>p.value=t),class:"demo-radio-group"},{default:l(()=>[a(e(d),{name:"1"},{default:l(()=>[i(s(e(o)("radio"))+" 1",1)]),_:1}),a(e(d),{name:"2"},{default:l(()=>[i(s(e(o)("radio"))+" 2",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),a(n,{title:e(o)("horizontal")},{default:l(()=>[a(e(r),{modelValue:g.value,"onUpdate:modelValue":u[1]||(u[1]=t=>g.value=t),class:"demo-radio-group",direction:"horizontal"},{default:l(()=>[a(e(d),{name:"1"},{default:l(()=>[i(s(e(o)("radio"))+" 1",1)]),_:1}),a(e(d),{name:"2"},{default:l(()=>[i(s(e(o)("radio"))+" 2",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),a(n,{title:e(o)("disabled")},{default:l(()=>[a(e(r),{modelValue:f.value,"onUpdate:modelValue":u[2]||(u[2]=t=>f.value=t),class:"demo-radio-group",disabled:""},{default:l(()=>[a(e(d),{name:"1"},{default:l(()=>[i(s(e(o)("radio"))+" 1",1)]),_:1}),a(e(d),{name:"2"},{default:l(()=>[i(s(e(o)("radio"))+" 2",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),a(n,{title:e(o)("customShape")},{default:l(()=>[a(e(r),{modelValue:C.value,"onUpdate:modelValue":u[3]||(u[3]=t=>C.value=t),class:"demo-radio-group"},{default:l(()=>[a(e(d),{name:"1",shape:"square"},{default:l(()=>[i(s(e(o)("radio"))+" 1",1)]),_:1}),a(e(d),{name:"2",shape:"square"},{default:l(()=>[i(s(e(o)("radio"))+" 2",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),a(n,{title:e(o)("customColor")},{default:l(()=>[a(e(r),{modelValue:_.value,"onUpdate:modelValue":u[4]||(u[4]=t=>_.value=t),class:"demo-radio-group"},{default:l(()=>[a(e(d),{name:"1","checked-color":"#ee0a24"},{default:l(()=>[i(s(e(o)("radio"))+" 1 ",1)]),_:1}),a(e(d),{name:"2","checked-color":"#ee0a24"},{default:l(()=>[i(s(e(o)("radio"))+" 2 ",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),a(n,{title:e(o)("customIconSize")},{default:l(()=>[a(e(r),{modelValue:V.value,"onUpdate:modelValue":u[5]||(u[5]=t=>V.value=t),class:"demo-radio-group"},{default:l(()=>[a(e(d),{name:"1","icon-size":"24px"},{default:l(()=>[i(s(e(o)("radio"))+" 1 ",1)]),_:1}),a(e(d),{name:"2","icon-size":"24px"},{default:l(()=>[i(s(e(o)("radio"))+" 2 ",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),a(n,{title:e(o)("customIcon")},{default:l(()=>[a(e(r),{modelValue:v.value,"onUpdate:modelValue":u[6]||(u[6]=t=>v.value=t),class:"demo-radio-group"},{default:l(()=>[a(e(d),{name:"1"},{icon:l(({checked:t})=>[j("img",{src:t?x:z},null,8,h)]),default:l(()=>[i(s(e(o)("radio"))+" 1 ",1)]),_:1}),a(e(d),{name:"2"},{icon:l(({checked:t})=>[j("img",{src:t?x:z},null,8,D)]),default:l(()=>[i(s(e(o)("radio"))+" 2 ",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),a(n,{title:e(o)("disableLabel")},{default:l(()=>[a(e(r),{modelValue:b.value,"onUpdate:modelValue":u[7]||(u[7]=t=>b.value=t),class:"demo-radio-group"},{default:l(()=>[a(e(d),{name:"1","label-disabled":""},{default:l(()=>[i(s(e(o)("radio"))+" 1",1)]),_:1}),a(e(d),{name:"2","label-disabled":""},{default:l(()=>[i(s(e(o)("radio"))+" 2",1)]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"]),a(n,{title:e(o)("withCell")},{default:l(()=>[a(e(r),{modelValue:c.value,"onUpdate:modelValue":u[10]||(u[10]=t=>c.value=t)},{default:l(()=>[a(e(k),null,{default:l(()=>[a(e(E),{clickable:"",title:e(o)("radio")+1,onClick:u[8]||(u[8]=t=>c.value="1")},{"right-icon":l(()=>[a(e(d),{name:"1"})]),_:1},8,["title"]),a(e(E),{clickable:"",title:e(o)("radio")+2,onClick:u[9]||(u[9]=t=>c.value="2")},{"right-icon":l(()=>[a(e(d),{name:"2"})]),_:1},8,["title"])]),_:1})]),_:1},8,["modelValue"])]),_:1},8,["title"])],64)}}});export{Q as default};
