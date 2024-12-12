import{r as y,k as C,j as u,am as k,x as a,y as r,C as t,H as s,I as l,B as c,K as d,L as _,M as w,av as V,R as L,J as h}from"./frappe-ui-CfOnYHud.js";import{_ as P}from"./UserAvatar-NO3477wF.js";import{u as B,S}from"./index-5_0ocoxz.js";const $={class:"sticky top-0 z-10 flex items-center justify-between border-b bg-white px-3 py-2.5 sm:px-5"},N={class:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 m-5"},j={class:"flex shadow rounded-md h-full p-2"},z={class:"text-lg font-semibold mb-2"},D={class:"leading-5"},T={__name:"CertifiedParticipants",setup(E){const o=y(""),i=C({url:"lms.lms.api.get_certified_participants",method:"GET",cache:"certified-participants",auto:!0}),v=u(()=>[{label:"Certified Participants",to:"/certified-participants"}]),g=u(()=>({title:"Certified Participants",description:"All participants that have been certified."})),x=u(()=>o.value?i.data.filter(m=>m.full_name.toLowerCase().includes(o.value.toLowerCase())):i.data);return B(g),(m,n)=>{var f;const p=k("router-link");return a(),r(d,null,[t("header",$,[s(l(V),{items:v.value},null,8,["items"]),t("div",null,[s(l(L),{type:"text",placeholder:"Search",modelValue:o.value,"onUpdate:modelValue":n[0]||(n[0]=e=>o.value=e),onInput:n[1]||(n[1]=e=>l(i).reload()),class:"w-40"},{prefix:c(()=>[s(l(S),{class:"w-4 stroke-1.5 text-gray-600",name:"search"})]),_:1},8,["modelValue"])])]),t("div",N,[(f=l(i).data)!=null&&f.length?(a(!0),r(d,{key:0},_(x.value,e=>(a(),r("div",null,[s(p,{to:{name:"Profile",params:{username:e.username}}},{default:c(()=>[t("div",j,[s(P,{user:e,size:"3xl",class:"mr-2"},null,8,["user"]),t("div",null,[s(p,{to:{name:"Profile",params:{username:e.username}}},{default:c(()=>[t("div",z,h(e.full_name),1)]),_:2},1032,["to"]),(a(!0),r(d,null,_(e.courses,b=>(a(),r("div",D,h(b),1))),256))])])]),_:2},1032,["to"])]))),256)):w("",!0)])],64)}}};export{T as default};
//# sourceMappingURL=CertifiedParticipants-DkIM0EBN.js.map
