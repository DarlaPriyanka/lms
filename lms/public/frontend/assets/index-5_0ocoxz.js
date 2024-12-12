const __vite__fileDeps=["assets/Courses-DERFIDwO.js","assets/frappe-ui-CfOnYHud.js","assets/frappe-ui-DzKBfka9.css","assets/CourseCard-SW0zFRjm.js","assets/UserAvatar-NO3477wF.js","assets/CourseInstructors-CGxRrteV.js","assets/ProgressBar-BFhrldIn.js","assets/CourseCard-BpJHuP_w.css","assets/CourseDetail-Cp8bzqWi.js","assets/CourseOutline-CUa4yH_C.js","assets/CourseOutline-Cq-UWY1n.css","assets/CourseDetail-34mM1fop.css","assets/Lesson-DDmEWS_u.js","assets/Discussions-DweGYuh1.js","assets/editorjs-D5YadEn0.js","assets/Lesson-Do8PLHO2.css","assets/Batches-6QFHyQio.js","assets/DateRange-B4NynQvi.js","assets/Batches-FS5WrcPN.css","assets/BatchDetail-DLtQ8QGU.js","assets/BatchDetail-CGcp7Hi5.css","assets/Batch-CMRxBcr_.js","assets/Batch-CgNJkyil.css","assets/Billing-CSVFhT9a.js","assets/Statistics-CFCNPNR8.js","assets/Profile-CX5eTTSj.js","assets/ProfileAbout-pj1d_uPK.js","assets/ProfileCertificates-CsC0UrUq.js","assets/ProfileRoles-pZjrA2xu.js","assets/ProfileEvaluator-YgDhtmL0.js","assets/Jobs-CM4pVLQC.js","assets/JobDetail-Op9n4xAQ.js","assets/CourseForm-DnhQO_Jh.js","assets/MultiSelect-B-q7M6eT.js","assets/LessonForm-qHs5bqmP.js","assets/LessonForm-BImPvLC9.css","assets/BatchForm-CM-e47BK.js","assets/JobCreation-6FQTJz4k.js","assets/AssignmentSubmission-BgjtMpT4.js","assets/CertifiedParticipants-DkIM0EBN.js","assets/Notifications-JHKvk395.js","assets/Notifications---1U4IkK.css","assets/Badge-CX0b02yx.js","assets/Quizzes-heZq5nTi.js","assets/QuizCreation-BitM9aI0.js","assets/QuizCreation-C7To55ie.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
var hg=Object.defineProperty,lg=Object.defineProperties;var sg=Object.getOwnPropertyDescriptors;var da=Object.getOwnPropertySymbols;var gv=Object.prototype.hasOwnProperty,Iv=Object.prototype.propertyIsEnumerable;var vv=(n,t,a)=>t in n?hg(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a,z2=(n,t)=>{for(var a in t||(t={}))gv.call(t,a)&&vv(n,a,t[a]);if(da)for(var a of da(t))Iv.call(t,a)&&vv(n,a,t[a]);return n},ha=(n,t)=>lg(n,sg(t));var xv=(n,t)=>{var a={};for(var o in n)gv.call(n,o)&&t.indexOf(o)<0&&(a[o]=n[o]);if(n!=null&&da)for(var o of da(n))t.indexOf(o)<0&&Iv.call(n,o)&&(a[o]=n[o]);return a};var V2=(n,t,a)=>new Promise((o,c)=>{var i=d=>{try{h(a.next(d))}catch(s){c(s)}},r=d=>{try{h(a.throw(d))}catch(s){c(s)}},h=d=>d.done?o(d.value):Promise.resolve(d.value).then(i,r);h((a=a.apply(n,t)).next())});import{e as Vv,r as q,m as lv,i as yg,w as te,a as L2,b as ue,c as Pv,t as pg,d as Jm,g as kg,o as ug,n as jv,h as Mg,f as mg,j as G,k as E,l as vg,p as gg,_ as R,q as w2,E as Ig,D as sv,s as A2,u as _v,v as yv,x as y,y as v,z as xg,A,B as z,C as u,F as U,G as av,H as b,I as l,J as w,K as Z,L as X,P as pv,M as D,N,O as na,Q as ov,R as D2,S as fv,T as fg,U as ia,V as Dv,W as Lg,X as wg,Y as Bv,Z as Cg,$ as ee,a0 as G2,a1 as N2,a2 as bg,a3 as Sg,a4 as qg,a5 as Lv,a6 as Ag,a7 as wv,a8 as Hg,a9 as cv,aa as Ym,ab as C2,ac as zg,ad as Vg,ae as Fv,af as Xm,ag as Pg,ah as jg,ai as _g,aj as Tv,ak as Dg,al as Rv,am as Bg,an as Fg,ao as Tg,ap as Rg,aq as Og,ar as Ug,as as Eg,at as Zg,au as $g}from"./frappe-ui-CfOnYHud.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))o(c);new MutationObserver(c=>{for(const i of c)if(i.type==="childList")for(const r of i.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&o(r)}).observe(document,{childList:!0,subtree:!0});function a(c){const i={};return c.integrity&&(i.integrity=c.integrity),c.referrerPolicy&&(i.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?i.credentials="include":c.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(c){if(c.ep)return;c.ep=!0;const i=a(c);fetch(c.href,i)}})();/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let Ov;const Qm=n=>Ov=n,Uv=Symbol();function nv(n){return n&&typeof n=="object"&&Object.prototype.toString.call(n)==="[object Object]"&&typeof n.toJSON!="function"}var W2;(function(n){n.direct="direct",n.patchObject="patch object",n.patchFunction="patch function"})(W2||(W2={}));function Gg(){const n=Vv(!0),t=n.run(()=>q({}));let a=[],o=[];const c=lv({install(i){Qm(c),c._a=i,i.provide(Uv,c),i.config.globalProperties.$pinia=c,o.forEach(r=>a.push(r)),o=[]},use(i){return!this._a&&!yg?o.push(i):a.push(i),this},_p:a,_a:null,_e:n,_s:new Map,state:t});return c}const Ev=()=>{};function Cv(n,t,a,o=Ev){n.push(t);const c=()=>{const i=n.indexOf(t);i>-1&&(n.splice(i,1),o())};return!a&&kg()&&ug(c),c}function P2(n,...t){n.slice().forEach(a=>{a(...t)})}const Ng=n=>n();function iv(n,t){n instanceof Map&&t instanceof Map&&t.forEach((a,o)=>n.set(o,a)),n instanceof Set&&t instanceof Set&&t.forEach(n.add,n);for(const a in t){if(!t.hasOwnProperty(a))continue;const o=t[a],c=n[a];nv(c)&&nv(o)&&n.hasOwnProperty(a)&&!ue(o)&&!Pv(o)?n[a]=iv(c,o):n[a]=o}return n}const Wg=Symbol();function Xg(n){return!nv(n)||!n.hasOwnProperty(Wg)}const{assign:pe}=Object;function Kg(n){return!!(ue(n)&&n.effect)}function Jg(n,t,a,o){const{state:c,actions:i,getters:r}=t,h=a.state.value[n];let d;function s(){h||(a.state.value[n]=c?c():{});const k=mg(a.state.value[n]);return pe(k,i,Object.keys(r||{}).reduce((m,p)=>(m[p]=lv(G(()=>{Qm(a);const g=a._s.get(n);return r[p].call(g,g)})),m),{}))}return d=Zv(n,s,t,a,o,!0),d}function Zv(n,t,a={},o,c,i){let r;const h=pe({actions:{}},a),d={deep:!0};let s,k,m=[],p=[],g;const M=o.state.value[n];!i&&!M&&(o.state.value[n]={}),q({});let C;function f(j){let _;s=k=!1,typeof j=="function"?(j(o.state.value[n]),_={type:W2.patchFunction,storeId:n,events:g}):(iv(o.state.value[n],j),_={type:W2.patchObject,payload:j,storeId:n,events:g});const x=C=Symbol();jv().then(()=>{C===x&&(s=!0)}),k=!0,P2(m,_,o.state.value[n])}const S=i?function(){const{state:_}=a,x=_?_():{};this.$patch(V=>{pe(V,x)})}:Ev;function I(){r.stop(),m=[],p=[],o._s.delete(n)}function L(j,_){return function(){Qm(o);const x=Array.from(arguments),V=[],O=[];function oe(W){V.push(W)}function ce(W){O.push(W)}P2(p,{args:x,name:j,store:H,after:oe,onError:ce});let ye;try{ye=_.apply(this&&this.$id===n?this:H,x)}catch(W){throw P2(O,W),W}return ye instanceof Promise?ye.then(W=>(P2(V,W),W)).catch(W=>(P2(O,W),Promise.reject(W))):(P2(V,ye),ye)}}const P={_p:o,$id:n,$onAction:Cv.bind(null,p),$patch:f,$reset:S,$subscribe(j,_={}){const x=Cv(m,j,_.detached,()=>V()),V=r.run(()=>te(()=>o.state.value[n],O=>{(_.flush==="sync"?k:s)&&j({storeId:n,type:W2.direct,events:g},O)},pe({},d,_)));return x},$dispose:I},H=L2(P);o._s.set(n,H);const B=(o._a&&o._a.runWithContext||Ng)(()=>o._e.run(()=>(r=Vv()).run(t)));for(const j in B){const _=B[j];if(ue(_)&&!Kg(_)||Pv(_))i||(M&&Xg(_)&&(ue(_)?_.value=M[j]:iv(_,M[j])),o.state.value[n][j]=_);else if(typeof _=="function"){const x=L(j,_);B[j]=x,h.actions[j]=_}}return pe(H,B),pe(pg(H),B),Object.defineProperty(H,"$state",{get:()=>o.state.value[n],set:j=>{f(_=>{pe(_,j)})}}),o._p.forEach(j=>{pe(H,r.run(()=>j({store:H,app:o._a,pinia:o,options:h})))}),M&&i&&a.hydrate&&a.hydrate(H.$state,M),s=!0,k=!0,H}function $v(n,t,a){let o,c;const i=typeof t=="function";typeof n=="string"?(o=n,c=i?a:t):(c=n,o=n.id);function r(h,d){const s=Mg();return h=h||(s?Jm(Uv,null):null),h&&Qm(h),h=Ov,h._s.has(o)||(i?Zv(o,t,c,h):Jg(o,c,h)),h._s.get(o)}return r.$id=o,r}const H2=$v("lms-users",()=>{let n=E({url:"lms.lms.api.get_user_info",onError(a){a&&a.exc_type==="AuthenticationError"&&router.push("/login")},auto:!0});const t=E({url:"lms.lms.api.get_all_users",cache:["allUsers"]});return{userResource:n,allUsers:t}}),q2=$v("lms-session",()=>{let{userResource:n,allUsers:t}=H2();function a(){let k=new URLSearchParams(document.cookie.split("; ").join("&")).get("user_id");return k==="Guest"&&(k=null),k}let o=q(a());o&&t.reload();const c=G(()=>!!o.value),i=E({url:"login",onError(){throw new Error("Invalid email or password")},onSuccess(){n.reload(),o.value=a(),i.reset(),kv.replace({path:"/"})}}),r=E({url:"logout",onSuccess(){n.reset(),o.value=null,window.location.reload()}}),h=E({url:"lms.lms.api.get_branding",cache:"brand",auto:!0,onSuccess(s){document.querySelector("link[rel='icon']").href=s.favicon}}),d=E({url:"lms.lms.api.get_sidebar_settings",cache:"Sidebar Settings",auto:!1});return{user:o,isLoggedIn:c,login:i,logout:r,branding:h,sidebarSettings:d}}),Yg=[{path:"/",redirect:{name:"Courses"}},{path:"/courses",name:"Courses",component:()=>R(()=>import("./Courses-DERFIDwO.js"),__vite__mapDeps([0,1,2,3,4,5,6,7]))},{path:"/courses/:courseName",name:"CourseDetail",component:()=>R(()=>import("./CourseDetail-Cp8bzqWi.js"),__vite__mapDeps([8,1,2,9,10,4,5,11])),props:!0},{path:"/courses/:courseName/learn/:chapterNumber-:lessonNumber",name:"Lesson",component:()=>R(()=>import("./Lesson-DDmEWS_u.js"),__vite__mapDeps([12,1,2,9,10,4,13,14,5,6,15])),props:!0},{path:"/batches",name:"Batches",component:()=>R(()=>import("./Batches-6QFHyQio.js"),__vite__mapDeps([16,1,2,17,5,4,18]))},{path:"/batches/details/:batchName",name:"BatchDetail",component:()=>R(()=>import("./BatchDetail-DLtQ8QGU.js"),__vite__mapDeps([19,1,2,3,4,5,6,7,17,20])),props:!0},{path:"/batches/:batchName",name:"Batch",component:()=>R(()=>import("./Batch-CMRxBcr_.js"),__vite__mapDeps([21,1,2,5,4,13,17,22])),props:!0},{path:"/billing/:type/:name",name:"Billing",component:()=>R(()=>import("./Billing-CSVFhT9a.js"),__vite__mapDeps([23,1,2])),props:!0},{path:"/statistics",name:"Statistics",component:()=>R(()=>import("./Statistics-CFCNPNR8.js"),__vite__mapDeps([24,1,2]))},{path:"/user/:username",name:"Profile",component:()=>R(()=>import("./Profile-CX5eTTSj.js"),__vite__mapDeps([25,1,2,4])),props:!0,redirect:{name:"ProfileAbout"},children:[{name:"ProfileAbout",path:"",component:()=>R(()=>import("./ProfileAbout-pj1d_uPK.js"),__vite__mapDeps([26,1,2]))},{name:"ProfileCertificates",path:"certificates",component:()=>R(()=>import("./ProfileCertificates-CsC0UrUq.js"),__vite__mapDeps([27,1,2]))},{name:"ProfileRoles",path:"roles",component:()=>R(()=>import("./ProfileRoles-pZjrA2xu.js"),__vite__mapDeps([28,1,2]))},{name:"ProfileEvaluator",path:"evaluations",component:()=>R(()=>import("./ProfileEvaluator-YgDhtmL0.js"),__vite__mapDeps([29,1,2]))}]},{path:"/job-openings",name:"Jobs",component:()=>R(()=>import("./Jobs-CM4pVLQC.js"),__vite__mapDeps([30,1,2]))},{path:"/job-openings/:job",name:"JobDetail",component:()=>R(()=>import("./JobDetail-Op9n4xAQ.js"),__vite__mapDeps([31,1,2])),props:!0},{path:"/courses/:courseName/edit",name:"CourseForm",component:()=>R(()=>import("./CourseForm-DnhQO_Jh.js"),__vite__mapDeps([32,1,2,9,10,33])),props:!0},{path:"/courses/:courseName/learn/:chapterNumber-:lessonNumber/edit",name:"LessonForm",component:()=>R(()=>import("./LessonForm-qHs5bqmP.js"),__vite__mapDeps([34,1,2,14,35])),props:!0},{path:"/batches/:batchName/edit",name:"BatchForm",component:()=>R(()=>import("./BatchForm-CM-e47BK.js"),__vite__mapDeps([36,1,2,33])),props:!0},{path:"/job-opening/:jobName/edit",name:"JobCreation",component:()=>R(()=>import("./JobCreation-6FQTJz4k.js"),__vite__mapDeps([37,1,2])),props:!0},{path:"/assignment-submission/:assignmentName/:submissionName",name:"AssignmentSubmission",component:()=>R(()=>import("./AssignmentSubmission-BgjtMpT4.js"),__vite__mapDeps([38,1,2])),props:!0},{path:"/certified-participants",name:"CertifiedParticipants",component:()=>R(()=>import("./CertifiedParticipants-DkIM0EBN.js"),__vite__mapDeps([39,1,2,4]))},{path:"/notifications",name:"Notifications",component:()=>R(()=>import("./Notifications-JHKvk395.js"),__vite__mapDeps([40,1,2,4,41]))},{path:"/badges/:badgeName/:email",name:"Badge",component:()=>R(()=>import("./Badge-CX0b02yx.js"),__vite__mapDeps([42,1,2])),props:!0},{path:"/quizzes",name:"Quizzes",component:()=>R(()=>import("./Quizzes-heZq5nTi.js"),__vite__mapDeps([43,1,2]))},{path:"/quizzes/:quizID",name:"QuizCreation",component:()=>R(()=>import("./QuizCreation-BitM9aI0.js"),__vite__mapDeps([44,1,2,45])),props:!0}];let kv=vg({history:gg("/lms"),routes:Yg});kv.beforeEach((n,t,a)=>V2(void 0,null,function*(){const{userResource:o,allUsers:c}=H2();let{isLoggedIn:i}=q2();try{i&&(yield o.promise),i&&(n.name=="Lesson"||n.name=="Batch"||n.name=="Notifications"||n.name=="Badge")&&(yield c.promise)}catch(r){i=!1}return a()}));let Qg=q([]),eI={name:"Dialogs",render(){return Qg.value.map(n=>w2(sv,{options:n,modelValue:n.show,"onUpdate:modelValue":t=>n.show=t},()=>[w2("p",{class:"text-p-base text-gray-700"},n.message),w2(Ig,{class:"mt-2",message:n.error})]))}};function tI(){const n=L2({width:window.innerWidth,height:window.innerHeight}),t=()=>{n.width=window.innerWidth,n.height=window.innerHeight};return A2(()=>{window.addEventListener("resize",t)}),_v(()=>{window.removeEventListener("resize",t)}),n}const aI={},oI={width:"118",height:"118",viewBox:"0 0 118 118",fill:"none",xmlns:"http://www.w3.org/2000/svg"},cI=xg('<path d="M93.9278 0H23.1013C10.3428 0 0 10.3428 0 23.1013V93.9278C0 106.686 10.3428 117.029 23.1013 117.029H93.9278C106.686 117.029 117.029 106.686 117.029 93.9278V23.1013C117.029 10.3428 106.686 0 93.9278 0Z" fill="url(#paint0_radial_174_336)"></path><path d="M93.9278 0H23.1013C10.3428 0 0 10.3428 0 23.1013V93.9278C0 106.686 10.3428 117.029 23.1013 117.029H93.9278C106.686 117.029 117.029 106.686 117.029 93.9278V23.1013C117.029 10.3428 106.686 0 93.9278 0Z" fill="#0B3D3D" fill-opacity="0.8"></path><path d="M95.1879 33.1294L91.4077 32.0268C80.1721 28.7716 67.9389 30.9242 58.5409 37.7496C52.083 33.0769 43.9975 30.5042 36.1746 30.5042H21.8938V41.0048H36.2796C42.2649 41.0048 48.1978 42.9999 52.923 46.6226L58.5934 50.9279L64.2637 46.6226C70.144 42.1599 77.5469 40.2698 84.7923 41.2673V76.1818C75.5518 75.2367 66.2063 77.7044 58.6459 83.2172C51.0854 77.7044 41.6349 75.2367 32.4994 76.1818V52.8705H21.9988V86.4724H95.3454V33.1294H95.1879Z" fill="#58FF9B"></path><defs><radialGradient id="paint0_radial_174_336" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(117.24 -101.5) rotate(105.042) scale(226.282)"><stop offset="0.445162" stop-color="#1F7676"></stop><stop offset="1" stop-color="#0A4B4B"></stop></radialGradient></defs>',4),nI=[cI];function iI(n,t){return y(),v("svg",oI,nI)}const rI=yv(aI,[["render",iI]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dI=n=>n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var la={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=(s,{slots:d})=>{var k=s,{size:n,strokeWidth:t=2,absoluteStrokeWidth:a,color:o,iconNode:c,name:i,class:r}=k,h=xv(k,["size","strokeWidth","absoluteStrokeWidth","color","iconNode","name","class"]);return w2("svg",z2(ha(z2({},la),{width:n||la.width,height:n||la.height,stroke:o||la.stroke,"stroke-width":a?Number(t)*24/Number(n):t,class:["lucide",`lucide-${dI(i!=null?i:"icon")}`]}),h),[...c.map(m=>w2(...m)),...d.default?[d.default()]:[]])};/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e=(n,t)=>(a,{slots:o})=>w2(Gv,ha(z2({},a),{iconNode:t,name:n}),o);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sa=e("AArrowDownIcon",[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 7v9",key:"pknjwm"}],["path",{d:"m14 12 4 4 4-4",key:"buelq4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ya=e("AArrowUpIcon",[["path",{d:"M3.5 13h6",key:"p1my2r"}],["path",{d:"m2 16 4.5-9 4.5 9",key:"ndf0b3"}],["path",{d:"M18 16V7",key:"ty0viw"}],["path",{d:"m14 11 4-4 4 4",key:"1pu57t"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pa=e("ALargeSmallIcon",[["path",{d:"M21 14h-5",key:"1vh23k"}],["path",{d:"M16 16v-3.5a2.5 2.5 0 0 1 5 0V16",key:"1wh10o"}],["path",{d:"M4.5 13h6",key:"dfilno"}],["path",{d:"m3 16 4.5-9 4.5 9",key:"2dxa0e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ka=e("AccessibilityIcon",[["circle",{cx:"16",cy:"4",r:"1",key:"1grugj"}],["path",{d:"m18 19 1-7-6 1",key:"r0i19z"}],["path",{d:"m5 8 3-3 5.5 3-2.36 3.5",key:"9ptxx2"}],["path",{d:"M4.24 14.5a5 5 0 0 0 6.88 6",key:"10kmtu"}],["path",{d:"M13.76 17.5a5 5 0 0 0-6.88-6",key:"2qq6rc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ua=e("ActivityIcon",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ma=e("AirVentIcon",[["path",{d:"M6 12H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"larmp2"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"M18.3 17.7a2.5 2.5 0 0 1-3.16 3.83 2.53 2.53 0 0 1-1.14-2V12",key:"1bo8pg"}],["path",{d:"M6.6 15.6A2 2 0 1 0 10 17v-5",key:"t9h90c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ma=e("AirplayIcon",[["path",{d:"M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1",key:"ns4c3b"}],["path",{d:"m12 15 5 6H7Z",key:"14qnn2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Me=e("AlarmClockCheckIcon",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const me=e("AlarmClockMinusIcon",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M9 13h6",key:"1uhe8q"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const va=e("AlarmClockOffIcon",[["path",{d:"M6.87 6.87a8 8 0 1 0 11.26 11.26",key:"3on8tj"}],["path",{d:"M19.9 14.25a8 8 0 0 0-9.15-9.15",key:"15ghsc"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.26 18.67 4 21",key:"yzmioq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M4 4 2 6",key:"1ycko6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ve=e("AlarmClockPlusIcon",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ga=e("AlarmClockIcon",[["circle",{cx:"12",cy:"13",r:"8",key:"3y4lt7"}],["path",{d:"M12 9v4l2 2",key:"1c63tq"}],["path",{d:"M5 3 2 6",key:"18tl5t"}],["path",{d:"m22 6-3-3",key:"1opdir"}],["path",{d:"M6.38 18.7 4 21",key:"17xu3x"}],["path",{d:"M17.64 18.67 20 21",key:"kv2oe2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ia=e("AlarmSmokeIcon",[["path",{d:"M11 21c0-2.5 2-2.5 2-5",key:"1sicvv"}],["path",{d:"M16 21c0-2.5 2-2.5 2-5",key:"1o3eny"}],["path",{d:"m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8",key:"1bvca4"}],["path",{d:"M21 3a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z",key:"x3qr1j"}],["path",{d:"M6 21c0-2.5 2-2.5 2-5",key:"i3w1gp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xa=e("AlbumIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["polyline",{points:"11 3 11 11 14 8 17 11 17 3",key:"1wcwz3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fa=e("AlignCenterHorizontalIcon",[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4",key:"11f1s0"}],["path",{d:"M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4",key:"t14dx9"}],["path",{d:"M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1",key:"1w07xs"}],["path",{d:"M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1",key:"1apec2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const La=e("AlignCenterVerticalIcon",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4",key:"14d6g8"}],["path",{d:"M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4",key:"1e2lrw"}],["path",{d:"M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1",key:"1fkdwx"}],["path",{d:"M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1",key:"1euafb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wa=e("AlignCenterIcon",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"17",x2:"7",y1:"12",y2:"12",key:"rsh8ii"}],["line",{x1:"19",x2:"5",y1:"18",y2:"18",key:"1t0tuv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ca=e("AlignEndHorizontalIcon",[["rect",{width:"6",height:"16",x:"4",y:"2",rx:"2",key:"z5wdxg"}],["rect",{width:"6",height:"9",x:"14",y:"9",rx:"2",key:"um7a8w"}],["path",{d:"M22 22H2",key:"19qnx5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ba=e("AlignEndVerticalIcon",[["rect",{width:"16",height:"6",x:"2",y:"4",rx:"2",key:"10wcwx"}],["rect",{width:"9",height:"6",x:"9",y:"14",rx:"2",key:"4p5bwg"}],["path",{d:"M22 22V2",key:"12ipfv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sa=e("AlignHorizontalDistributeCenterIcon",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M17 22v-5",key:"4b6g73"}],["path",{d:"M17 7V2",key:"hnrr36"}],["path",{d:"M7 22v-3",key:"1r4jpn"}],["path",{d:"M7 5V2",key:"liy1u9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qa=e("AlignHorizontalDistributeEndIcon",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M10 2v20",key:"uyc634"}],["path",{d:"M20 2v20",key:"1tx262"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aa=e("AlignHorizontalDistributeStartIcon",[["rect",{width:"6",height:"14",x:"4",y:"5",rx:"2",key:"1wwnby"}],["rect",{width:"6",height:"10",x:"14",y:"7",rx:"2",key:"1fe6j6"}],["path",{d:"M4 2v20",key:"gtpd5x"}],["path",{d:"M14 2v20",key:"tg6bpw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ha=e("AlignHorizontalJustifyCenterIcon",[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const za=e("AlignHorizontalJustifyEndIcon",[["rect",{width:"6",height:"14",x:"2",y:"5",rx:"2",key:"dy24zr"}],["rect",{width:"6",height:"10",x:"12",y:"7",rx:"2",key:"1ht384"}],["path",{d:"M22 2v20",key:"40qfg1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=e("AlignHorizontalJustifyStartIcon",[["rect",{width:"6",height:"14",x:"6",y:"5",rx:"2",key:"hsirpf"}],["rect",{width:"6",height:"10",x:"16",y:"7",rx:"2",key:"13zkjt"}],["path",{d:"M2 2v20",key:"1ivd8o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pa=e("AlignHorizontalSpaceAroundIcon",[["rect",{width:"6",height:"10",x:"9",y:"7",rx:"2",key:"yn7j0q"}],["path",{d:"M4 22V2",key:"tsjzd3"}],["path",{d:"M20 22V2",key:"1bnhr8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ja=e("AlignHorizontalSpaceBetweenIcon",[["rect",{width:"6",height:"14",x:"3",y:"5",rx:"2",key:"j77dae"}],["rect",{width:"6",height:"10",x:"15",y:"7",rx:"2",key:"bq30hj"}],["path",{d:"M3 2v20",key:"1d2pfg"}],["path",{d:"M21 2v20",key:"p059bm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _a=e("AlignJustifyIcon",[["line",{x1:"3",x2:"21",y1:"6",y2:"6",key:"4m8b97"}],["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}],["line",{x1:"3",x2:"21",y1:"18",y2:"18",key:"kwyyxn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Da=e("AlignLeftIcon",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}],["line",{x1:"17",x2:"3",y1:"18",y2:"18",key:"1awlsn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ba=e("AlignRightIcon",[["line",{x1:"21",x2:"3",y1:"6",y2:"6",key:"1fp77t"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}],["line",{x1:"21",x2:"7",y1:"18",y2:"18",key:"1g9eri"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fa=e("AlignStartHorizontalIcon",[["rect",{width:"6",height:"16",x:"4",y:"6",rx:"2",key:"1n4dg1"}],["rect",{width:"6",height:"9",x:"14",y:"6",rx:"2",key:"17khns"}],["path",{d:"M22 2H2",key:"fhrpnj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ta=e("AlignStartVerticalIcon",[["rect",{width:"9",height:"6",x:"6",y:"14",rx:"2",key:"lpm2y7"}],["rect",{width:"16",height:"6",x:"6",y:"4",rx:"2",key:"rdj6ps"}],["path",{d:"M2 2v20",key:"1ivd8o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ra=e("AlignVerticalDistributeCenterIcon",[["path",{d:"M22 17h-3",key:"1lwga1"}],["path",{d:"M22 7h-5",key:"o2endc"}],["path",{d:"M5 17H2",key:"1gx9xc"}],["path",{d:"M7 7H2",key:"6bq26l"}],["rect",{x:"5",y:"14",width:"14",height:"6",rx:"2",key:"1qrzuf"}],["rect",{x:"7",y:"4",width:"10",height:"6",rx:"2",key:"we8e9z"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oa=e("AlignVerticalDistributeEndIcon",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M2 10h20",key:"1ir3d8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ua=e("AlignVerticalDistributeStartIcon",[["rect",{width:"14",height:"6",x:"5",y:"14",rx:"2",key:"jmoj9s"}],["rect",{width:"10",height:"6",x:"7",y:"4",rx:"2",key:"aza5on"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M2 4h20",key:"mda7wb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ea=e("AlignVerticalJustifyCenterIcon",[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Za=e("AlignVerticalJustifyEndIcon",[["rect",{width:"14",height:"6",x:"5",y:"12",rx:"2",key:"4l4tp2"}],["rect",{width:"10",height:"6",x:"7",y:"2",rx:"2",key:"ypihtt"}],["path",{d:"M2 22h20",key:"272qi7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $a=e("AlignVerticalJustifyStartIcon",[["rect",{width:"14",height:"6",x:"5",y:"16",rx:"2",key:"1i8z2d"}],["rect",{width:"10",height:"6",x:"7",y:"6",rx:"2",key:"13squh"}],["path",{d:"M2 2h20",key:"1ennik"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ga=e("AlignVerticalSpaceAroundIcon",[["rect",{width:"10",height:"6",x:"7",y:"9",rx:"2",key:"b1zbii"}],["path",{d:"M22 20H2",key:"1p1f7z"}],["path",{d:"M22 4H2",key:"1b7qnq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Na=e("AlignVerticalSpaceBetweenIcon",[["rect",{width:"14",height:"6",x:"5",y:"15",rx:"2",key:"1w91an"}],["rect",{width:"10",height:"6",x:"7",y:"3",rx:"2",key:"17wqzy"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M2 3h20",key:"91anmk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wa=e("AmbulanceIcon",[["path",{d:"M10 10H6",key:"1bsnug"}],["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.28a1 1 0 0 0-.684-.948l-1.923-.641a1 1 0 0 1-.578-.502l-1.539-3.076A1 1 0 0 0 16.382 8H14",key:"lrkjwd"}],["path",{d:"M8 8v4",key:"1fwk8c"}],["path",{d:"M9 18h6",key:"x1upvd"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xa=e("AmpersandIcon",[["path",{d:"M17.5 12c0 4.4-3.6 8-8 8A4.5 4.5 0 0 1 5 15.5c0-6 8-4 8-8.5a3 3 0 1 0-6 0c0 3 2.5 8.5 12 13",key:"1o9ehi"}],["path",{d:"M16 12h3",key:"4uvgyw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ka=e("AmpersandsIcon",[["path",{d:"M10 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"12lh1k"}],["path",{d:"M22 17c-5-3-7-7-7-9a2 2 0 0 1 4 0c0 2.5-5 2.5-5 6 0 1.7 1.3 3 3 3 2.8 0 5-2.2 5-5",key:"173c68"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ja=e("AnchorIcon",[["path",{d:"M12 22V8",key:"qkxhtm"}],["path",{d:"M5 12H2a10 10 0 0 0 20 0h-3",key:"1hv3nh"}],["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ya=e("AngryIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["path",{d:"M7.5 8 10 9",key:"olxxln"}],["path",{d:"m14 9 2.5-1",key:"1j6cij"}],["path",{d:"M9 10h0",key:"1vxvly"}],["path",{d:"M15 10h0",key:"1j6oav"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qa=e("AnnoyedIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M14 9h2",key:"116p9w"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eo=e("AntennaIcon",[["path",{d:"M2 12 7 2",key:"117k30"}],["path",{d:"m7 12 5-10",key:"1tvx22"}],["path",{d:"m12 12 5-10",key:"ev1o1a"}],["path",{d:"m17 12 5-10",key:"1e4ti3"}],["path",{d:"M4.5 7h15",key:"vlsxkz"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const to=e("AnvilIcon",[["path",{d:"M7 10H6a4 4 0 0 1-4-4 1 1 0 0 1 1-1h4",key:"1hjpb6"}],["path",{d:"M7 5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1 7 7 0 0 1-7 7H8a1 1 0 0 1-1-1z",key:"1qn45f"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M5 20a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3 1 1 0 0 1-1 1H6a1 1 0 0 1-1-1",key:"1fi4x8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ao=e("ApertureIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14.31 8 5.74 9.94",key:"1y6ab4"}],["path",{d:"M9.69 8h11.48",key:"1wxppr"}],["path",{d:"m7.38 12 5.74-9.94",key:"1grp0k"}],["path",{d:"M9.69 16 3.95 6.06",key:"libnyf"}],["path",{d:"M14.31 16H2.83",key:"x5fava"}],["path",{d:"m16.62 12-5.74 9.94",key:"1vwawt"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oo=e("AppWindowMacIcon",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M14 8h.01",key:"1primd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const co=e("AppWindowIcon",[["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}],["path",{d:"M10 4v4",key:"pp8u80"}],["path",{d:"M2 8h20",key:"d11cs7"}],["path",{d:"M6 4v4",key:"1svtjw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const no=e("AppleIcon",[["path",{d:"M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z",key:"3s7exb"}],["path",{d:"M10 2c1 .5 2 2 2 5",key:"fcco2y"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const io=e("ArchiveRestoreIcon",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h2",key:"tvwodi"}],["path",{d:"M20 8v11a2 2 0 0 1-2 2h-2",key:"1gkqxj"}],["path",{d:"m9 15 3-3 3 3",key:"1pd0qc"}],["path",{d:"M12 12v9",key:"192myk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ro=e("ArchiveXIcon",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"m9.5 17 5-5",key:"nakeu6"}],["path",{d:"m9.5 12 5 5",key:"1hccrj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ho=e("ArchiveIcon",[["rect",{width:"20",height:"5",x:"2",y:"3",rx:"1",key:"1wp1u1"}],["path",{d:"M4 8v11a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8",key:"1s80jp"}],["path",{d:"M10 12h4",key:"a56b0p"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lo=e("AreaChartIcon",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M7 12v5h12V8l-5 5-4-4Z",key:"zxz28u"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const so=e("ArmchairIcon",[["path",{d:"M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3",key:"irtipd"}],["path",{d:"M3 16a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z",key:"1e01m0"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yo=e("ArrowBigDownDashIcon",[["path",{d:"M15 5H9",key:"1tp3ed"}],["path",{d:"M15 9v3h4l-7 7-7-7h4V9z",key:"ncdc4b"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const po=e("ArrowBigDownIcon",[["path",{d:"M15 6v6h4l-7 7-7-7h4V6h6z",key:"1thax2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ko=e("ArrowBigLeftDashIcon",[["path",{d:"M19 15V9",key:"1hci5f"}],["path",{d:"M15 15h-3v4l-7-7 7-7v4h3v6z",key:"16tjna"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uo=e("ArrowBigLeftIcon",[["path",{d:"M18 15h-6v4l-7-7 7-7v4h6v6z",key:"lbrdak"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mo=e("ArrowBigRightDashIcon",[["path",{d:"M5 9v6",key:"158jrl"}],["path",{d:"M9 9h3V5l7 7-7 7v-4H9V9z",key:"1sg2xn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mo=e("ArrowBigRightIcon",[["path",{d:"M6 9h6V5l7 7-7 7v-4H6V9z",key:"7fvt9c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vo=e("ArrowBigUpDashIcon",[["path",{d:"M9 19h6",key:"456am0"}],["path",{d:"M9 15v-3H5l7-7 7 7h-4v3H9z",key:"1r2uve"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const go=e("ArrowBigUpIcon",[["path",{d:"M9 18v-6H5l7-7 7 7h-4v6H9z",key:"1x06kx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Io=e("ArrowDown01Icon",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xo=e("ArrowDown10Icon",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ge=e("ArrowDownAZIcon",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fo=e("ArrowDownFromLineIcon",[["path",{d:"M19 3H5",key:"1236rx"}],["path",{d:"M12 21V7",key:"gj6g52"}],["path",{d:"m6 15 6 6 6-6",key:"h15q88"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lo=e("ArrowDownLeftIcon",[["path",{d:"M17 7 7 17",key:"15tmo1"}],["path",{d:"M17 17H7V7",key:"1org7z"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wo=e("ArrowDownNarrowWideIcon",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h4",key:"6d7r33"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h10",key:"1438ji"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Co=e("ArrowDownRightIcon",[["path",{d:"m7 7 10 10",key:"1fmybs"}],["path",{d:"M17 7v10H7",key:"6fjiku"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bo=e("ArrowDownToDotIcon",[["path",{d:"M12 2v14",key:"jyx4ut"}],["path",{d:"m19 9-7 7-7-7",key:"1oe3oy"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const So=e("ArrowDownToLineIcon",[["path",{d:"M12 17V3",key:"1cwfxf"}],["path",{d:"m6 11 6 6 6-6",key:"12ii2o"}],["path",{d:"M19 21H5",key:"150jfl"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qo=e("ArrowDownUpIcon",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"m21 8-4-4-4 4",key:"1c9v7m"}],["path",{d:"M17 4v16",key:"7dpous"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ie=e("ArrowDownWideNarrowIcon",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h10",key:"1w87gc"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h4",key:"q8tih4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xe=e("ArrowDownZAIcon",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ao=e("ArrowDownIcon",[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ho=e("ArrowLeftFromLineIcon",[["path",{d:"m9 6-6 6 6 6",key:"7v63n9"}],["path",{d:"M3 12h14",key:"13k4hi"}],["path",{d:"M21 19V5",key:"b4bplr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zo=e("ArrowLeftRightIcon",[["path",{d:"M8 3 4 7l4 4",key:"9rb6wj"}],["path",{d:"M4 7h16",key:"6tx8e3"}],["path",{d:"m16 21 4-4-4-4",key:"siv7j2"}],["path",{d:"M20 17H4",key:"h6l3hr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vo=e("ArrowLeftToLineIcon",[["path",{d:"M3 19V5",key:"rwsyhb"}],["path",{d:"m13 6-6 6 6 6",key:"1yhaz7"}],["path",{d:"M7 12h14",key:"uoisry"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Po=e("ArrowLeftIcon",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jo=e("ArrowRightFromLineIcon",[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M21 12H7",key:"13ipq5"}],["path",{d:"m15 18 6-6-6-6",key:"6tx3qv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _o=e("ArrowRightLeftIcon",[["path",{d:"m16 3 4 4-4 4",key:"1x1c3m"}],["path",{d:"M20 7H4",key:"zbl0bi"}],["path",{d:"m8 21-4-4 4-4",key:"h9nckh"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Do=e("ArrowRightToLineIcon",[["path",{d:"M17 12H3",key:"8awo09"}],["path",{d:"m11 18 6-6-6-6",key:"8c2y43"}],["path",{d:"M21 5v14",key:"nzette"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bo=e("ArrowRightIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fo=e("ArrowUp01Icon",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["rect",{x:"15",y:"4",width:"4",height:"6",ry:"2",key:"1bwicg"}],["path",{d:"M17 20v-6h-2",key:"1qp1so"}],["path",{d:"M15 20h4",key:"1j968p"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const To=e("ArrowUp10Icon",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M17 10V4h-2",key:"zcsr5x"}],["path",{d:"M15 10h4",key:"id2lce"}],["rect",{x:"15",y:"14",width:"4",height:"6",ry:"2",key:"33xykx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fe=e("ArrowUpAZIcon",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M20 8h-5",key:"1vsyxs"}],["path",{d:"M15 10V6.5a2.5 2.5 0 0 1 5 0V10",key:"ag13bf"}],["path",{d:"M15 14h5l-5 6h5",key:"ur5jdg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ro=e("ArrowUpDownIcon",[["path",{d:"m21 16-4 4-4-4",key:"f6ql7i"}],["path",{d:"M17 20V4",key:"1ejh1v"}],["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oo=e("ArrowUpFromDotIcon",[["path",{d:"m5 9 7-7 7 7",key:"1hw5ic"}],["path",{d:"M12 16V2",key:"ywoabb"}],["circle",{cx:"12",cy:"21",r:"1",key:"o0uj5v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uo=e("ArrowUpFromLineIcon",[["path",{d:"m18 9-6-6-6 6",key:"kcunyi"}],["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eo=e("ArrowUpLeftIcon",[["path",{d:"M7 17V7h10",key:"11bw93"}],["path",{d:"M17 17 7 7",key:"2786uv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Le=e("ArrowUpNarrowWideIcon",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zo=e("ArrowUpRightIcon",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $o=e("ArrowUpToLineIcon",[["path",{d:"M5 3h14",key:"7usisc"}],["path",{d:"m18 13-6-6-6 6",key:"1kf1n9"}],["path",{d:"M12 7v14",key:"1akyts"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Go=e("ArrowUpWideNarrowIcon",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h4",key:"1krc32"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const we=e("ArrowUpZAIcon",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M15 4h5l-5 6h5",key:"8asdl1"}],["path",{d:"M15 20v-3.5a2.5 2.5 0 0 1 5 0V20",key:"r6l5cz"}],["path",{d:"M20 18h-5",key:"18j1r2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const No=e("ArrowUpIcon",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wo=e("ArrowsUpFromLineIcon",[["path",{d:"m4 6 3-3 3 3",key:"9aidw8"}],["path",{d:"M7 17V3",key:"19qxw1"}],["path",{d:"m14 6 3-3 3 3",key:"6iy689"}],["path",{d:"M17 17V3",key:"o0fmgi"}],["path",{d:"M4 21h16",key:"1h09gz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xo=e("AsteriskIcon",[["path",{d:"M12 6v12",key:"1vza4d"}],["path",{d:"M17.196 9 6.804 15",key:"1ah31z"}],["path",{d:"m6.804 9 10.392 6",key:"1b6pxd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ko=e("AtSignIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8",key:"7n84p3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jo=e("AtomIcon",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z",key:"1l2ple"}],["path",{d:"M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z",key:"1wam0m"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yo=e("AudioLinesIcon",[["path",{d:"M2 10v3",key:"1fnikh"}],["path",{d:"M6 6v11",key:"11sgs0"}],["path",{d:"M10 3v18",key:"yhl04a"}],["path",{d:"M14 8v7",key:"3a1oy3"}],["path",{d:"M18 5v13",key:"123xd1"}],["path",{d:"M22 10v3",key:"154ddg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qo=e("AudioWaveformIcon",[["path",{d:"M2 13a2 2 0 0 0 2-2V7a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0V4a2 2 0 0 1 4 0v13a2 2 0 0 0 4 0v-4a2 2 0 0 1 2-2",key:"57tc96"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ec=e("AwardIcon",[["path",{d:"m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",key:"1yiouv"}],["circle",{cx:"12",cy:"8",r:"6",key:"1vp47v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tc=e("AxeIcon",[["path",{d:"m14 12-8.5 8.5a2.12 2.12 0 1 1-3-3L11 9",key:"csbz4o"}],["path",{d:"M15 13 9 7l4-4 6 6h3a8 8 0 0 1-7 7z",key:"113wfo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ce=e("Axis3dIcon",[["path",{d:"M4 4v16h16",key:"1s015l"}],["path",{d:"m4 20 7-7",key:"17qe9y"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ac=e("BabyIcon",[["path",{d:"M9 12h.01",key:"157uk2"}],["path",{d:"M15 12h.01",key:"1k8ypt"}],["path",{d:"M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5",key:"1u7htd"}],["path",{d:"M19 6.3a9 9 0 0 1 1.8 3.9 2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1",key:"5yv0yz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oc=e("BackpackIcon",[["path",{d:"M4 10a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2Z",key:"wvr1b5"}],["path",{d:"M9 6V4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2",key:"donm21"}],["path",{d:"M8 21v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5",key:"xk3gvk"}],["path",{d:"M8 10h8",key:"c7uz4u"}],["path",{d:"M8 18h8",key:"1no2b1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cc=e("BadgeAlertIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nc=e("BadgeCentIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M15.4 10a4 4 0 1 0 0 4",key:"2eqtx8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const be=e("BadgeCheckIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ic=e("BadgeDollarSignIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rc=e("BadgeEuroIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M7 12h5",key:"gblrwe"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dc=e("BadgeHelpIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["line",{x1:"12",x2:"12.01",y1:"17",y2:"17",key:"io3f8k"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hc=e("BadgeIndianRupeeIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 8h8",key:"1bis0t"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m13 17-5-1h1a4 4 0 0 0 0-8",key:"nu2bwa"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lc=e("BadgeInfoIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"16",y2:"12",key:"1y1yb1"}],["line",{x1:"12",x2:"12.01",y1:"8",y2:"8",key:"110wyk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sc=e("BadgeJapaneseYenIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m9 8 3 3v7",key:"17yadx"}],["path",{d:"m12 11 3-3",key:"p4cfq1"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M9 16h6",key:"8wimt3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yc=e("BadgeMinusIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pc=e("BadgePercentIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kc=e("BadgePlusIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"12",x2:"12",y1:"8",y2:"16",key:"10p56q"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uc=e("BadgePoundSterlingIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M8 12h4",key:"qz6y1c"}],["path",{d:"M10 16V9.5a2.5 2.5 0 0 1 5 0",key:"3mlbjk"}],["path",{d:"M8 16h7",key:"sbedsn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mc=e("BadgeRussianRubleIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M9 16h5",key:"1syiyw"}],["path",{d:"M9 12h5a2 2 0 1 0 0-4h-3v9",key:"1ge9c1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mc=e("BadgeSwissFrancIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["path",{d:"M11 17V8h4",key:"1bfq6y"}],["path",{d:"M11 12h3",key:"2eqnfz"}],["path",{d:"M9 16h4",key:"1skf3a"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vc=e("BadgeXIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gc=e("BadgeIcon",[["path",{d:"M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z",key:"3c2336"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ic=e("BaggageClaimIcon",[["path",{d:"M22 18H6a2 2 0 0 1-2-2V7a2 2 0 0 0-2-2",key:"4irg2o"}],["path",{d:"M17 14V4a2 2 0 0 0-2-2h-1a2 2 0 0 0-2 2v10",key:"14fcyx"}],["rect",{width:"13",height:"8",x:"8",y:"6",rx:"1",key:"o6oiis"}],["circle",{cx:"18",cy:"20",r:"2",key:"t9985n"}],["circle",{cx:"9",cy:"20",r:"2",key:"e5v82j"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xc=e("BanIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fc=e("BananaIcon",[["path",{d:"M4 13c3.5-2 8-2 10 2a5.5 5.5 0 0 1 8 5",key:"1cscit"}],["path",{d:"M5.15 17.89c5.52-1.52 8.65-6.89 7-12C11.55 4 11.5 2 13 2c3.22 0 5 5.5 5 8 0 6.5-4.2 12-10.49 12C5.11 22 2 22 2 20c0-1.5 1.14-1.55 3.15-2.11Z",key:"1y1nbv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lc=e("BanknoteIcon",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M6 12h.01M18 12h.01",key:"113zkx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wc=e("BarChart2Icon",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cc=e("BarChart3Icon",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bc=e("BarChart4Icon",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M13 17V9",key:"1fwyjl"}],["path",{d:"M18 17V5",key:"sfb6ij"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sc=e("BarChartBigIcon",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["rect",{width:"4",height:"7",x:"7",y:"10",rx:"1",key:"14u6mf"}],["rect",{width:"4",height:"12",x:"15",y:"5",rx:"1",key:"b3pek6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qc=e("BarChartHorizontalBigIcon",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["rect",{width:"12",height:"4",x:"7",y:"5",rx:"1",key:"936jl1"}],["rect",{width:"7",height:"4",x:"7",y:"13",rx:"1",key:"jqfkpy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ac=e("BarChartHorizontalIcon",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M7 16h8",key:"srdodz"}],["path",{d:"M7 11h12",key:"127s9w"}],["path",{d:"M7 6h3",key:"w9rmul"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hc=e("BarChartIcon",[["line",{x1:"12",x2:"12",y1:"20",y2:"10",key:"1vz5eb"}],["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["line",{x1:"6",x2:"6",y1:"20",y2:"16",key:"hq0ia6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zc=e("BarcodeIcon",[["path",{d:"M3 5v14",key:"1nt18q"}],["path",{d:"M8 5v14",key:"1ybrkv"}],["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"M17 5v14",key:"ycjyhj"}],["path",{d:"M21 5v14",key:"nzette"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vc=e("BaselineIcon",[["path",{d:"M4 20h16",key:"14thso"}],["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pc=e("BathIcon",[["path",{d:"M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5",key:"1r8yf5"}],["line",{x1:"10",x2:"8",y1:"5",y2:"7",key:"h5g8z4"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"7",x2:"7",y1:"19",y2:"21",key:"16jp00"}],["line",{x1:"17",x2:"17",y1:"19",y2:"21",key:"1pxrnk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jc=e("BatteryChargingIcon",[["path",{d:"M15 7h1a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2",key:"1sdynx"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h1",key:"1gkd3k"}],["path",{d:"m11 7-3 5h4l-3 5",key:"b4a64w"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _c=e("BatteryFullIcon",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"13",key:"c6fn6x"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dc=e("BatteryLowIcon",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bc=e("BatteryMediumIcon",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"6",x2:"6",y1:"11",y2:"13",key:"1wd6dw"}],["line",{x1:"10",x2:"10",y1:"11",y2:"13",key:"haxvl5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fc=e("BatteryWarningIcon",[["path",{d:"M14 7h2a2 2 0 0 1 2 2v6c0 1-1 2-2 2h-2",key:"1if82c"}],["path",{d:"M6 7H4a2 2 0 0 0-2 2v6c0 1 1 2 2 2h2",key:"2pdlyl"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}],["line",{x1:"10",x2:"10",y1:"7",y2:"13",key:"1uzyus"}],["line",{x1:"10",x2:"10",y1:"17",y2:"17.01",key:"1y8k4g"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tc=e("BatteryIcon",[["rect",{width:"16",height:"10",x:"2",y:"7",rx:"2",ry:"2",key:"1w10f2"}],["line",{x1:"22",x2:"22",y1:"11",y2:"13",key:"4dh1rd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rc=e("BeakerIcon",[["path",{d:"M4.5 3h15",key:"c7n0jr"}],["path",{d:"M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3",key:"m1uhx7"}],["path",{d:"M6 14h12",key:"4cwo0f"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oc=e("BeanOffIcon",[["path",{d:"M9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22a13.96 13.96 0 0 0 9.9-4.1",key:"bq3udt"}],["path",{d:"M10.75 5.093A6 6 0 0 1 22 8c0 2.411-.61 4.68-1.683 6.66",key:"17ccse"}],["path",{d:"M5.341 10.62a4 4 0 0 0 6.487 1.208M10.62 5.341a4.015 4.015 0 0 1 2.039 2.04",key:"18zqgq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uc=e("BeanIcon",[["path",{d:"M10.165 6.598C9.954 7.478 9.64 8.36 9 9c-.64.64-1.521.954-2.402 1.165A6 6 0 0 0 8 22c7.732 0 14-6.268 14-14a6 6 0 0 0-11.835-1.402Z",key:"1tvzk7"}],["path",{d:"M5.341 10.62a4 4 0 1 0 5.279-5.28",key:"2cyri2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ec=e("BedDoubleIcon",[["path",{d:"M2 20v-8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8",key:"1k78r4"}],["path",{d:"M4 10V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"fb3tl2"}],["path",{d:"M12 4v6",key:"1dcgq2"}],["path",{d:"M2 18h20",key:"ajqnye"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zc=e("BedSingleIcon",[["path",{d:"M3 20v-8a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v8",key:"1wm6mi"}],["path",{d:"M5 10V6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v4",key:"4k93s5"}],["path",{d:"M3 18h18",key:"1h113x"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $c=e("BedIcon",[["path",{d:"M2 4v16",key:"vw9hq8"}],["path",{d:"M2 8h18a2 2 0 0 1 2 2v10",key:"1dgv2r"}],["path",{d:"M2 17h20",key:"18nfp3"}],["path",{d:"M6 8v9",key:"1yriud"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gc=e("BeefIcon",[["circle",{cx:"12.5",cy:"8.5",r:"2.5",key:"9738u8"}],["path",{d:"M12.5 2a6.5 6.5 0 0 0-6.22 4.6c-1.1 3.13-.78 3.9-3.18 6.08A3 3 0 0 0 5 18c4 0 8.4-1.8 11.4-4.3A6.5 6.5 0 0 0 12.5 2Z",key:"o0f6za"}],["path",{d:"m18.5 6 2.19 4.5a6.48 6.48 0 0 1 .31 2 6.49 6.49 0 0 1-2.6 5.2C15.4 20.2 11 22 7 22a3 3 0 0 1-2.68-1.66L2.4 16.5",key:"k7p6i0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nc=e("BeerOffIcon",[["path",{d:"M13 13v5",key:"igwfh0"}],["path",{d:"M17 11.47V8",key:"16yw0g"}],["path",{d:"M17 11h1a3 3 0 0 1 2.745 4.211",key:"1xbt65"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3",key:"c55o3e"}],["path",{d:"M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268",key:"1ydug7"}],["path",{d:"M8.727 3.204C9.306 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a1 1 0 1 1 0 5c-.78 0-1.5-.5-2.5-.5a3.149 3.149 0 0 0-.842.12",key:"q81o7q"}],["path",{d:"M9 14.6V18",key:"20ek98"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wc=e("BeerIcon",[["path",{d:"M17 11h1a3 3 0 0 1 0 6h-1",key:"1yp76v"}],["path",{d:"M9 12v6",key:"1u1cab"}],["path",{d:"M13 12v6",key:"1sugkk"}],["path",{d:"M14 7.5c-1 0-1.44.5-3 .5s-2-.5-3-.5-1.72.5-2.5.5a2.5 2.5 0 0 1 0-5c.78 0 1.57.5 2.5.5S9.44 2 11 2s2 1.5 3 1.5 1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5Z",key:"1510fo"}],["path",{d:"M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8",key:"19jb7n"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xc=e("BellDotIcon",[["path",{d:"M19.4 14.9C20.2 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 .7 0 1.3.1 1.9.3",key:"xcehk"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["circle",{cx:"18",cy:"8",r:"3",key:"1g0gzu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kc=e("BellElectricIcon",[["path",{d:"M18.8 4A6.3 8.7 0 0 1 20 9",key:"xve1fh"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["rect",{width:"10",height:"6",x:"4",y:"16",rx:"2",key:"17f3te"}],["path",{d:"M14 19c3 0 4.6-1.6 4.6-1.6",key:"n7odp6"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jc=e("BellMinusIcon",[["path",{d:"M18.4 12c.8 3.8 2.6 5 2.6 5H3s3-2 3-9c0-3.3 2.7-6 6-6 1.8 0 3.4.8 4.5 2",key:"eck70s"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M15 8h6",key:"8ybuxh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yc=e("BellOffIcon",[["path",{d:"M8.7 3A6 6 0 0 1 18 8a21.3 21.3 0 0 0 .6 5",key:"o7mx20"}],["path",{d:"M17 17H3s3-2 3-9a4.67 4.67 0 0 1 .3-1.7",key:"16f1lm"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qc=e("BellPlusIcon",[["path",{d:"M19.3 14.8C20.1 16.4 21 17 21 17H3s3-2 3-9c0-3.3 2.7-6 6-6 1 0 1.9.2 2.8.7",key:"guizqy"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M15 8h6",key:"8ybuxh"}],["path",{d:"M18 5v6",key:"g5ayrv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e0=e("BellRingIcon",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}],["path",{d:"M4 2C2.8 3.7 2 5.7 2 8",key:"tap9e0"}],["path",{d:"M22 8c0-2.3-.8-4.3-2-6",key:"5bb3ad"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t0=e("BellIcon",[["path",{d:"M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9",key:"1qo2s2"}],["path",{d:"M10.3 21a1.94 1.94 0 0 0 3.4 0",key:"qgo35s"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Se=e("BetweenHorizontalEndIcon",[["rect",{width:"13",height:"7",x:"3",y:"3",rx:"1",key:"11xb64"}],["path",{d:"m22 15-3-3 3-3",key:"26chmm"}],["rect",{width:"13",height:"7",x:"3",y:"14",rx:"1",key:"k6ky7n"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=e("BetweenHorizontalStartIcon",[["rect",{width:"13",height:"7",x:"8",y:"3",rx:"1",key:"pkso9a"}],["path",{d:"m2 9 3 3-3 3",key:"1agib5"}],["rect",{width:"13",height:"7",x:"8",y:"14",rx:"1",key:"1q5fc1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a0=e("BetweenVerticalEndIcon",[["rect",{width:"7",height:"13",x:"3",y:"3",rx:"1",key:"1fdu0f"}],["path",{d:"m9 22 3-3 3 3",key:"17z65a"}],["rect",{width:"7",height:"13",x:"14",y:"3",rx:"1",key:"1squn4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o0=e("BetweenVerticalStartIcon",[["rect",{width:"7",height:"13",x:"3",y:"8",rx:"1",key:"1fjrkv"}],["path",{d:"m15 2-3 3-3-3",key:"1uh6eb"}],["rect",{width:"7",height:"13",x:"14",y:"8",rx:"1",key:"w3fjg8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=e("BikeIcon",[["circle",{cx:"18.5",cy:"17.5",r:"3.5",key:"15x4ox"}],["circle",{cx:"5.5",cy:"17.5",r:"3.5",key:"1noe27"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["path",{d:"M12 17.5V14l-3-3 4-3 2 3h2",key:"1npguv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n0=e("BinaryIcon",[["rect",{x:"14",y:"14",width:"4",height:"6",rx:"2",key:"p02svl"}],["rect",{x:"6",y:"4",width:"4",height:"6",rx:"2",key:"xm4xkj"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 10h4",key:"ru81e7"}],["path",{d:"M6 14h2v6",key:"16z9wg"}],["path",{d:"M14 4h2v6",key:"1idq9u"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i0=e("BiohazardIcon",[["circle",{cx:"12",cy:"11.9",r:"2",key:"e8h31w"}],["path",{d:"M6.7 3.4c-.9 2.5 0 5.2 2.2 6.7C6.5 9 3.7 9.6 2 11.6",key:"17bolr"}],["path",{d:"m8.9 10.1 1.4.8",key:"15ezny"}],["path",{d:"M17.3 3.4c.9 2.5 0 5.2-2.2 6.7 2.4-1.2 5.2-.6 6.9 1.5",key:"wtwa5u"}],["path",{d:"m15.1 10.1-1.4.8",key:"1r0b28"}],["path",{d:"M16.7 20.8c-2.6-.4-4.6-2.6-4.7-5.3-.2 2.6-2.1 4.8-4.7 5.2",key:"m7qszh"}],["path",{d:"M12 13.9v1.6",key:"zfyyim"}],["path",{d:"M13.5 5.4c-1-.2-2-.2-3 0",key:"1bi9q0"}],["path",{d:"M17 16.4c.7-.7 1.2-1.6 1.5-2.5",key:"1rhjqw"}],["path",{d:"M5.5 13.9c.3.9.8 1.8 1.5 2.5",key:"8gsud3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r0=e("BirdIcon",[["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20",key:"oj1oa8"}],["path",{d:"m20 7 2 .5-2 .5",key:"12nv4d"}],["path",{d:"M10 18v3",key:"1yea0a"}],["path",{d:"M14 17.75V21",key:"1pymcb"}],["path",{d:"M7 18a6 6 0 0 0 3.84-10.61",key:"1npnn0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=e("BitcoinIcon",[["path",{d:"M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 4.26m5.908 1.042.348-1.97M7.48 20.364l3.126-17.727",key:"yr8idg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=e("BlendIcon",[["circle",{cx:"9",cy:"9",r:"7",key:"p2h5vp"}],["circle",{cx:"15",cy:"15",r:"7",key:"19ennj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l0=e("BlindsIcon",[["path",{d:"M3 3h18",key:"o7r712"}],["path",{d:"M20 7H8",key:"gd2fo2"}],["path",{d:"M20 11H8",key:"1ynp89"}],["path",{d:"M10 19h10",key:"19hjk5"}],["path",{d:"M8 15h12",key:"1yqzne"}],["path",{d:"M4 3v14",key:"fggqzn"}],["circle",{cx:"4",cy:"19",r:"2",key:"p3m9r0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s0=e("BlocksIcon",[["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["path",{d:"M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3",key:"1fpvtg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=e("BluetoothConnectedIcon",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["line",{x1:"18",x2:"21",y1:"12",y2:"12",key:"1rsjjs"}],["line",{x1:"3",x2:"6",y1:"12",y2:"12",key:"11yl8c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=e("BluetoothOffIcon",[["path",{d:"m17 17-5 5V12l-5 5",key:"v5aci6"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M14.5 9.5 17 7l-5-5v4.5",key:"1kddfz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k0=e("BluetoothSearchingIcon",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}],["path",{d:"M20.83 14.83a4 4 0 0 0 0-5.66",key:"k8tn1j"}],["path",{d:"M18 12h.01",key:"yjnet6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=e("BluetoothIcon",[["path",{d:"m7 7 10 10-5 5V2l5 5L7 17",key:"1q5490"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M0=e("BoldIcon",[["path",{d:"M6 12h9a4 4 0 0 1 0 8H7a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h7a4 4 0 0 1 0 8",key:"mg9rjx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=e("BoltIcon",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=e("BombIcon",[["circle",{cx:"11",cy:"13",r:"9",key:"hd149"}],["path",{d:"M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95",key:"jp4j1b"}],["path",{d:"m22 2-1.5 1.5",key:"ay92ug"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=e("BoneIcon",[["path",{d:"M17 10c.7-.7 1.69 0 2.5 0a2.5 2.5 0 1 0 0-5 .5.5 0 0 1-.5-.5 2.5 2.5 0 1 0-5 0c0 .81.7 1.8 0 2.5l-7 7c-.7.7-1.69 0-2.5 0a2.5 2.5 0 0 0 0 5c.28 0 .5.22.5.5a2.5 2.5 0 1 0 5 0c0-.81-.7-1.8 0-2.5Z",key:"w610uw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I0=e("BookAIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m8 13 4-7 4 7",key:"4rari8"}],["path",{d:"M9.1 11h5.7",key:"1gkovt"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=e("BookAudioIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M8 8v3",key:"1qzp49"}],["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M16 8v3",key:"gejaml"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=e("BookCheckIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m9 9.5 2 2 4-4",key:"1dth82"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L0=e("BookCopyIcon",[["path",{d:"M2 16V4a2 2 0 0 1 2-2h11",key:"spzkk5"}],["path",{d:"M5 14H4a2 2 0 1 0 0 4h1",key:"16gqf9"}],["path",{d:"M22 18H11a2 2 0 1 0 0 4h11V6H11a2 2 0 0 0-2 2v12",key:"1owzki"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ae=e("BookDashedIcon",[["path",{d:"M20 22h-2",key:"1rpnb6"}],["path",{d:"M20 15v2h-2",key:"fph276"}],["path",{d:"M4 19.5V15",key:"6gr39e"}],["path",{d:"M20 8v3",key:"deu0bs"}],["path",{d:"M18 2h2v2",key:"180o53"}],["path",{d:"M4 11V9",key:"v3xsx8"}],["path",{d:"M12 2h2",key:"cvn524"}],["path",{d:"M12 22h2",key:"kn7ki6"}],["path",{d:"M12 17h2",key:"13u4lk"}],["path",{d:"M8 22H6.5a2.5 2.5 0 0 1 0-5H8",key:"fiseg2"}],["path",{d:"M4 5v-.5A2.5 2.5 0 0 1 6.5 2H8",key:"wywhs9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w0=e("BookDownIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3 3 3-3",key:"zt5b4y"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C0=e("BookHeadphonesIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["path",{d:"M8 12v-2a4 4 0 0 1 8 0v2",key:"1vsqkj"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b0=e("BookHeartIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M16 8.2C16 7 15 6 13.8 6c-.8 0-1.4.3-1.8.9-.4-.6-1-.9-1.8-.9C9 6 8 7 8 8.2c0 .6.3 1.2.7 1.6h0C10 11.1 12 13 12 13s2-1.9 3.3-3.1h0c.4-.4.7-1 .7-1.7z",key:"1dlbw1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=e("BookImageIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"10",cy:"8",r:"2",key:"2qkj4p"}],["path",{d:"m20 13.7-2.1-2.1c-.8-.8-2-.8-2.8 0L9.7 17",key:"160say"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=e("BookKeyIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H14",key:"1gfsgw"}],["path",{d:"M20 8v14H6.5a2.5 2.5 0 0 1 0-5H20",key:"zb0ngp"}],["circle",{cx:"14",cy:"8",r:"2",key:"u49eql"}],["path",{d:"m20 2-4.5 4.5",key:"1sppr8"}],["path",{d:"m19 3 1 1",key:"ze14oc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=e("BookLockIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H10",key:"18wgow"}],["path",{d:"M20 15v7H6.5a2.5 2.5 0 0 1 0-5H20",key:"dpch1j"}],["rect",{width:"8",height:"5",x:"12",y:"6",rx:"1",key:"9nqwug"}],["path",{d:"M18 6V4a2 2 0 1 0-4 0v2",key:"1aquzs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=e("BookMarkedIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["polyline",{points:"10 2 10 10 13 7 16 10 16 2",key:"13o6vz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z0=e("BookMinusIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=e("BookOpenCheckIcon",[["path",{d:"M8 3H2v15h7c1.7 0 3 1.3 3 3V7c0-2.2-1.8-4-4-4Z",key:"1i8u0n"}],["path",{d:"m16 12 2 2 4-4",key:"mdajum"}],["path",{d:"M22 6V3h-6c-2.2 0-4 1.8-4 4v14c0-1.7 1.3-3 3-3h7v-2.3",key:"jb5l51"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P0=e("BookOpenTextIcon",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}],["path",{d:"M6 8h2",key:"30oboj"}],["path",{d:"M6 12h2",key:"32wvfc"}],["path",{d:"M16 8h2",key:"msurwy"}],["path",{d:"M16 12h2",key:"7q9ll5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j0=e("BookOpenIcon",[["path",{d:"M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z",key:"vv98re"}],["path",{d:"M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z",key:"1cyq3y"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=e("BookPlusIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 7v6",key:"lw1j43"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D0=e("BookTextIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M8 7h6",key:"1f0q6e"}],["path",{d:"M8 11h8",key:"vwpz6n"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B0=e("BookTypeIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M16 8V6H8v2",key:"x8j6u4"}],["path",{d:"M12 6v7",key:"1f6ttz"}],["path",{d:"M10 13h4",key:"ytezjc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F0=e("BookUp2Icon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2",key:"1lorq7"}],["path",{d:"M18 2h2v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"1nfm9i"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"m9 5 3-3 3 3",key:"l8vdw6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T0=e("BookUpIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R0=e("BookUserIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M15 13a3 3 0 1 0-6 0",key:"10j68g"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O0=e("BookXIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}],["path",{d:"m14.5 7-5 5",key:"dy991v"}],["path",{d:"m9.5 7 5 5",key:"s45iea"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U0=e("BookIcon",[["path",{d:"M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20",key:"t4utmx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=e("BookmarkCheckIcon",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=e("BookmarkMinusIcon",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=e("BookmarkPlusIcon",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}],["line",{x1:"12",x2:"12",y1:"7",y2:"13",key:"1cppfj"}],["line",{x1:"15",x2:"9",y1:"10",y2:"10",key:"1gty7f"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=e("BookmarkXIcon",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z",key:"169p4p"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N0=e("BookmarkIcon",[["path",{d:"m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z",key:"1fy3hk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=e("BoomBoxIcon",[["path",{d:"M4 9V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4",key:"vvzvr1"}],["path",{d:"M8 8v1",key:"xcqmfk"}],["path",{d:"M12 8v1",key:"1rj8u4"}],["path",{d:"M16 8v1",key:"1q12zr"}],["rect",{width:"20",height:"12",x:"2",y:"9",rx:"2",key:"igpb89"}],["circle",{cx:"8",cy:"15",r:"2",key:"fa4a8s"}],["circle",{cx:"16",cy:"15",r:"2",key:"14c3ya"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=e("BotMessageSquareIcon",[["path",{d:"M12 6V2H8",key:"1155em"}],["path",{d:"m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z",key:"w2lp3e"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M9 11v2",key:"1ueba0"}],["path",{d:"M15 11v2",key:"i11awn"}],["path",{d:"M20 12h2",key:"1q8mjw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=e("BotOffIcon",[["path",{d:"M13.67 8H18a2 2 0 0 1 2 2v4.33",key:"7az073"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}],["path",{d:"M8 8H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 1.414-.586",key:"s09a7a"}],["path",{d:"M9 13v2",key:"rq6x2g"}],["path",{d:"M9.67 4H12v2.33",key:"110xot"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=e("BotIcon",[["path",{d:"M12 8V4H8",key:"hb8ula"}],["rect",{width:"16",height:"12",x:"4",y:"8",rx:"2",key:"enze0r"}],["path",{d:"M2 14h2",key:"vft8re"}],["path",{d:"M20 14h2",key:"4cs60a"}],["path",{d:"M15 13v2",key:"1xurst"}],["path",{d:"M9 13v2",key:"rq6x2g"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=e("BoxSelectIcon",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=e("BoxIcon",[["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const en=e("BoxesIcon",[["path",{d:"M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z",key:"lc1i9w"}],["path",{d:"m7 16.5-4.74-2.85",key:"1o9zyk"}],["path",{d:"m7 16.5 5-3",key:"va8pkn"}],["path",{d:"M7 16.5v5.17",key:"jnp8gn"}],["path",{d:"M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z",key:"8zsnat"}],["path",{d:"m17 16.5-5-3",key:"8arw3v"}],["path",{d:"m17 16.5 4.74-2.85",key:"8rfmw"}],["path",{d:"M17 16.5v5.17",key:"k6z78m"}],["path",{d:"M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z",key:"1xygjf"}],["path",{d:"M12 8 7.26 5.15",key:"1vbdud"}],["path",{d:"m12 8 4.74-2.85",key:"3rx089"}],["path",{d:"M12 13.5V8",key:"1io7kd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const He=e("BracesIcon",[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tn=e("BracketsIcon",[["path",{d:"M16 3h3v18h-3",key:"1yor1f"}],["path",{d:"M8 21H5V3h3",key:"1qrfwo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=e("BrainCircuitIcon",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M9 13a4.5 4.5 0 0 0 3-4",key:"10igwf"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M12 13h4",key:"1ku699"}],["path",{d:"M12 18h6a2 2 0 0 1 2 2v1",key:"105ag5"}],["path",{d:"M12 8h8",key:"1lhi5i"}],["path",{d:"M16 8V5a2 2 0 0 1 2-2",key:"u6izg6"}],["circle",{cx:"16",cy:"13",r:".5",key:"ry7gng"}],["circle",{cx:"18",cy:"3",r:".5",key:"1aiba7"}],["circle",{cx:"20",cy:"21",r:".5",key:"yhc1fs"}],["circle",{cx:"20",cy:"8",r:".5",key:"1e43v0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const on=e("BrainCogIcon",[["path",{d:"M12 5a3 3 0 1 0-5.997.142 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588 4 4 0 0 0 7.636 2.106 3.2 3.2 0 0 0 .164-.546c.028-.13.306-.13.335 0a3.2 3.2 0 0 0 .163.546 4 4 0 0 0 7.636-2.106 4 4 0 0 0 .556-6.588 4 4 0 0 0-2.526-5.77A3 3 0 1 0 12 5",key:"1kgmhc"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m15.7 10.4-.9.4",key:"ayzo6p"}],["path",{d:"m9.2 13.2-.9.4",key:"1uzb3g"}],["path",{d:"m13.6 15.7-.4-.9",key:"11ifqf"}],["path",{d:"m10.8 9.2-.4-.9",key:"1pmk2v"}],["path",{d:"m15.7 13.5-.9-.4",key:"7ng02m"}],["path",{d:"m9.2 10.9-.9-.4",key:"1x66zd"}],["path",{d:"m10.5 15.7.4-.9",key:"3js94g"}],["path",{d:"m13.1 9.2.4-.9",key:"18n7mc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cn=e("BrainIcon",[["path",{d:"M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z",key:"l5xja"}],["path",{d:"M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z",key:"ep3f8r"}],["path",{d:"M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4",key:"1p4c4q"}],["path",{d:"M17.599 6.5a3 3 0 0 0 .399-1.375",key:"tmeiqw"}],["path",{d:"M6.003 5.125A3 3 0 0 0 6.401 6.5",key:"105sqy"}],["path",{d:"M3.477 10.896a4 4 0 0 1 .585-.396",key:"ql3yin"}],["path",{d:"M19.938 10.5a4 4 0 0 1 .585.396",key:"1qfode"}],["path",{d:"M6 18a4 4 0 0 1-1.967-.516",key:"2e4loj"}],["path",{d:"M19.967 17.484A4 4 0 0 1 18 18",key:"159ez6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nn=e("BrickWallIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 9v6",key:"199k2o"}],["path",{d:"M16 15v6",key:"8rj2es"}],["path",{d:"M16 3v6",key:"1j6rpj"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M8 15v6",key:"1stoo3"}],["path",{d:"M8 3v6",key:"vlvjmk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rn=e("BriefcaseBusinessIcon",[["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M22 13a18.15 18.15 0 0 1-20 0",key:"12hx5q"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dn=e("BriefcaseMedicalIcon",[["path",{d:"M12 11v4",key:"a6ujw6"}],["path",{d:"M14 13h-4",key:"1pl8zg"}],["path",{d:"M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2",key:"1ksdt3"}],["path",{d:"M18 6v14",key:"1mu4gy"}],["path",{d:"M6 6v14",key:"1s15cj"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hn=e("BriefcaseIcon",[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ln=e("BringToFrontIcon",[["rect",{x:"8",y:"8",width:"8",height:"8",rx:"2",key:"yj20xf"}],["path",{d:"M4 10a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2",key:"1ltk23"}],["path",{d:"M14 20a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2",key:"1q24h9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sn=e("BrushIcon",[["path",{d:"m9.06 11.9 8.07-8.06a2.85 2.85 0 1 1 4.03 4.03l-8.06 8.08",key:"1styjt"}],["path",{d:"M7.07 14.94c-1.66 0-3 1.35-3 3.02 0 1.33-2.5 1.52-2 2.02 1.08 1.1 2.49 2.02 4 2.02 2.2 0 4-1.8 4-4.04a3.01 3.01 0 0 0-3-3.02z",key:"z0l1mu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yn=e("BugOffIcon",[["path",{d:"M15 7.13V6a3 3 0 0 0-5.14-2.1L8 2",key:"vl8zik"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M22 13h-4v-2a4 4 0 0 0-4-4h-1.3",key:"1ou0bd"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7.7 7.7A4 4 0 0 0 6 11v3a6 6 0 0 0 11.13 3.13",key:"1njkjs"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pn=e("BugPlayIcon",[["path",{d:"M12.765 21.522a.5.5 0 0 1-.765-.424v-8.196a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z",key:"17shqo"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M18 11a4 4 0 0 0-4-4h-4a4 4 0 0 0-4 4v3a6.1 6.1 0 0 0 2 4.5",key:"1tjixy"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=e("BugIcon",[["path",{d:"m8 2 1.88 1.88",key:"fmnt4t"}],["path",{d:"M14.12 3.88 16 2",key:"qol33r"}],["path",{d:"M9 7.13v-1a3.003 3.003 0 1 1 6 0v1",key:"d7y7pr"}],["path",{d:"M12 20c-3.3 0-6-2.7-6-6v-3a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v3c0 3.3-2.7 6-6 6",key:"xs1cw7"}],["path",{d:"M12 20v-9",key:"1qisl0"}],["path",{d:"M6.53 9C4.6 8.8 3 7.1 3 5",key:"32zzws"}],["path",{d:"M6 13H2",key:"82j7cp"}],["path",{d:"M3 21c0-2.1 1.7-3.9 3.8-4",key:"4p0ekp"}],["path",{d:"M20.97 5c0 2.1-1.6 3.8-3.5 4",key:"18gb23"}],["path",{d:"M22 13h-4",key:"1jl80f"}],["path",{d:"M17.2 17c2.1.1 3.8 1.9 3.8 4",key:"k3fwyw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const un=e("Building2Icon",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mn=e("BuildingIcon",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mn=e("BusFrontIcon",[["path",{d:"M4 6 2 7",key:"1mqr15"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"m22 7-2-1",key:"1umjhc"}],["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 21v-2",key:"sqyl04"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vn=e("BusIcon",[["path",{d:"M8 6v6",key:"18i7km"}],["path",{d:"M15 6v6",key:"1sg6z9"}],["path",{d:"M2 12h19.6",key:"de5uta"}],["path",{d:"M18 18h3s.5-1.7.8-2.8c.1-.4.2-.8.2-1.2 0-.4-.1-.8-.2-1.2l-1.4-5C20.1 6.8 19.1 6 18 6H4a2 2 0 0 0-2 2v10h3",key:"1wwztk"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}],["path",{d:"M9 18h5",key:"lrx6i"}],["circle",{cx:"16",cy:"18",r:"2",key:"1v4tcr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gn=e("CableCarIcon",[["path",{d:"M10 3h.01",key:"lbucoy"}],["path",{d:"M14 2h.01",key:"1k8aa1"}],["path",{d:"m2 9 20-5",key:"1kz0j5"}],["path",{d:"M12 12V6.5",key:"1vbrij"}],["rect",{width:"16",height:"10",x:"4",y:"12",rx:"3",key:"if91er"}],["path",{d:"M9 12v5",key:"3anwtq"}],["path",{d:"M15 12v5",key:"5xh3zn"}],["path",{d:"M4 17h16",key:"g4d7ey"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=e("CableIcon",[["path",{d:"M17 21v-2a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1",key:"10bnsj"}],["path",{d:"M19 15V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V9",key:"1eqmu1"}],["path",{d:"M21 21v-2h-4",key:"14zm7j"}],["path",{d:"M3 5h4V3",key:"z442eg"}],["path",{d:"M7 5a1 1 0 0 1 1 1v1a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1V3",key:"ebdjd7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xn=e("CakeSliceIcon",[["circle",{cx:"9",cy:"7",r:"2",key:"1305pl"}],["path",{d:"M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6",key:"xle13f"}],["path",{d:"M16 13H3",key:"1wpj08"}],["path",{d:"M16 17H3",key:"3lvfcd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fn=e("CakeIcon",[["path",{d:"M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8",key:"1w3rig"}],["path",{d:"M4 16s.5-1 2-1 2.5 2 4 2 2.5-2 4-2 2.5 2 4 2 2-1 2-1",key:"n2jgmb"}],["path",{d:"M2 21h20",key:"1nyx9w"}],["path",{d:"M7 8v3",key:"1qtyvj"}],["path",{d:"M12 8v3",key:"hwp4zt"}],["path",{d:"M17 8v3",key:"1i6e5u"}],["path",{d:"M7 4h0.01",key:"hsw7lv"}],["path",{d:"M12 4h0.01",key:"1e3d8f"}],["path",{d:"M17 4h0.01",key:"p7cxgy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ln=e("CalculatorIcon",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=e("CalendarCheck2Icon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 14V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"bce9hv"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cn=e("CalendarCheckIcon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m9 16 2 2 4-4",key:"19s6y9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bn=e("CalendarClockIcon",[["path",{d:"M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",key:"1osxxc"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h5",key:"r794hk"}],["path",{d:"M17.5 17.5 16 16.3V14",key:"akvzfd"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sn=e("CalendarDaysIcon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 18h.01",key:"lrp35t"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M16 18h.01",key:"kzsmim"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qn=e("CalendarFoldIcon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 17V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11Z",key:"kg77oy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M15 22v-4a2 2 0 0 1 2-2h4",key:"1gnbqr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const An=e("CalendarHeartIcon",[["path",{d:"M3 10h18V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7",key:"136lmk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21.29 14.7a2.43 2.43 0 0 0-2.65-.52c-.3.12-.57.3-.8.53l-.34.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L17.5 22l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1t7hil"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hn=e("CalendarMinus2Icon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M10 16h4",key:"17e571"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zn=e("CalendarMinusIcon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=e("CalendarOffIcon",[["path",{d:"M4.2 4.2A2 2 0 0 0 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 1.82-1.18",key:"16swn3"}],["path",{d:"M21 15.5V6a2 2 0 0 0-2-2H9.5",key:"yhw86o"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h7",key:"1wap6i"}],["path",{d:"M21 10h-5.5",key:"quycpq"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=e("CalendarPlus2Icon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M10 16h4",key:"17e571"}],["path",{d:"M12 14v4",key:"1thi36"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jn=e("CalendarPlusIcon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M16 19h6",key:"xwg31i"}],["path",{d:"M19 16v6",key:"tddt3s"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _n=e("CalendarRangeIcon",[["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M17 14h-6",key:"bkmgh3"}],["path",{d:"M13 18H7",key:"bb0bb7"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 18h.01",key:"1bdyru"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dn=e("CalendarSearchIcon",[["path",{d:"M21 12V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7.5",key:"1e09qw"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M3 10h18",key:"8toen8"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.5-1.5",key:"1x83k4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bn=e("CalendarX2Icon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",key:"3spt84"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m17 22 5-5",key:"1k6ppv"}],["path",{d:"m17 17 5 5",key:"p7ous7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=e("CalendarXIcon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}],["path",{d:"m14 14-4 4",key:"rymu2i"}],["path",{d:"m10 14 4 4",key:"3sz06r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tn=e("CalendarIcon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rn=e("CameraOffIcon",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16",key:"qmtpty"}],["path",{d:"M9.5 4h5L17 7h3a2 2 0 0 1 2 2v7.5",key:"1ufyfc"}],["path",{d:"M14.121 15.121A3 3 0 1 1 9.88 10.88",key:"11zox6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const On=e("CameraIcon",[["path",{d:"M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",key:"1tc9qg"}],["circle",{cx:"12",cy:"13",r:"3",key:"1vg3eu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Un=e("CandlestickChartIcon",[["path",{d:"M9 5v4",key:"14uxtq"}],["rect",{width:"4",height:"6",x:"7",y:"9",rx:"1",key:"f4fvz0"}],["path",{d:"M9 15v2",key:"r5rk32"}],["path",{d:"M17 3v2",key:"1l2re6"}],["rect",{width:"4",height:"8",x:"15",y:"5",rx:"1",key:"z38je5"}],["path",{d:"M17 13v3",key:"5l0wba"}],["path",{d:"M3 3v18h18",key:"1s2lah"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const En=e("CandyCaneIcon",[["path",{d:"M5.7 21a2 2 0 0 1-3.5-2l8.6-14a6 6 0 0 1 10.4 6 2 2 0 1 1-3.464-2 2 2 0 1 0-3.464-2Z",key:"isaq8g"}],["path",{d:"M17.75 7 15 2.1",key:"12x7e8"}],["path",{d:"M10.9 4.8 13 9",key:"100a87"}],["path",{d:"m7.9 9.7 2 4.4",key:"ntfhaj"}],["path",{d:"M4.9 14.7 7 18.9",key:"1x43jy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=e("CandyOffIcon",[["path",{d:"m8.5 8.5-1 1a4.95 4.95 0 0 0 7 7l1-1",key:"1ff4ui"}],["path",{d:"M11.843 6.187A4.947 4.947 0 0 1 16.5 7.5a4.947 4.947 0 0 1 1.313 4.657",key:"1sbrv4"}],["path",{d:"M14 16.5V14",key:"1maf8j"}],["path",{d:"M14 6.5v1.843",key:"1a6u6t"}],["path",{d:"M10 10v7.5",key:"80pj65"}],["path",{d:"m16 7 1-5 1.367.683A3 3 0 0 0 19.708 3H21v1.292a3 3 0 0 0 .317 1.341L22 7l-5 1",key:"11a9mt"}],["path",{d:"m8 17-1 5-1.367-.683A3 3 0 0 0 4.292 21H3v-1.292a3 3 0 0 0-.317-1.341L2 17l5-1",key:"3mjmon"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=e("CandyIcon",[["path",{d:"m9.5 7.5-2 2a4.95 4.95 0 1 0 7 7l2-2a4.95 4.95 0 1 0-7-7Z",key:"ue6khb"}],["path",{d:"M14 6.5v10",key:"5xnk7c"}],["path",{d:"M10 7.5v10",key:"1uew51"}],["path",{d:"m16 7 1-5 1.37.68A3 3 0 0 0 19.7 3H21v1.3c0 .46.1.92.32 1.33L22 7l-5 1",key:"b9cp6k"}],["path",{d:"m8 17-1 5-1.37-.68A3 3 0 0 0 4.3 21H3v-1.3a3 3 0 0 0-.32-1.33L2 17l5-1",key:"5lney8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gn=e("CannabisIcon",[["path",{d:"M12 22v-4",key:"1utk9m"}],["path",{d:"M7 12c-1.5 0-4.5 1.5-5 3 3.5 1.5 6 1 6 1-1.5 1.5-2 3.5-2 5 2.5 0 4.5-1.5 6-3 1.5 1.5 3.5 3 6 3 0-1.5-.5-3.5-2-5 0 0 2.5.5 6-1-.5-1.5-3.5-3-5-3 1.5-1 4-4 4-6-2.5 0-5.5 1.5-7 3 0-2.5-.5-5-2-7-1.5 2-2 4.5-2 7-1.5-1.5-4.5-3-7-3 0 2 2.5 5 4 6",key:"1mezod"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nn=e("CaptionsOffIcon",[["path",{d:"M10.5 5H19a2 2 0 0 1 2 2v8.5",key:"jqtk4d"}],["path",{d:"M17 11h-.5",key:"1961ue"}],["path",{d:"M19 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2",key:"1keqsi"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M7 11h4",key:"1o1z6v"}],["path",{d:"M7 15h2.5",key:"1ina1g"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ze=e("CaptionsIcon",[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2",key:"12ruh7"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4",key:"1ueiar"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=e("CarFrontIcon",[["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=e("CarTaxiFrontIcon",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"m21 8-2 2-1.5-3.7A2 2 0 0 0 15.646 5H8.4a2 2 0 0 0-1.903 1.257L5 10 3 8",key:"1imjwt"}],["path",{d:"M7 14h.01",key:"1qa3f1"}],["path",{d:"M17 14h.01",key:"7oqj8z"}],["rect",{width:"18",height:"8",x:"3",y:"10",rx:"2",key:"a7itu8"}],["path",{d:"M5 18v2",key:"ppbyun"}],["path",{d:"M19 18v2",key:"gy7782"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=e("CarIcon",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=e("CaravanIcon",[["rect",{width:"4",height:"4",x:"2",y:"9",key:"1vcvhd"}],["rect",{width:"4",height:"10",x:"10",y:"9",key:"1b7ev2"}],["path",{d:"M18 19V9a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v8a2 2 0 0 0 2 2h2",key:"19jm3t"}],["circle",{cx:"8",cy:"19",r:"2",key:"t8fc5s"}],["path",{d:"M10 19h12v-2",key:"1yu2qx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yn=e("CarrotIcon",[["path",{d:"M2.27 21.7s9.87-3.5 12.73-6.36a4.5 4.5 0 0 0-6.36-6.37C5.77 11.84 2.27 21.7 2.27 21.7zM8.64 14l-2.05-2.04M15.34 15l-2.46-2.46",key:"rfqxbe"}],["path",{d:"M22 9s-1.33-2-3.5-2C16.86 7 15 9 15 9s1.33 2 3.5 2S22 9 22 9z",key:"6b25w4"}],["path",{d:"M15 2s-2 1.33-2 3.5S15 9 15 9s2-1.84 2-3.5C17 3.33 15 2 15 2z",key:"fn65lo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qn=e("CaseLowerIcon",[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ei=e("CaseSensitiveIcon",[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["circle",{cx:"18",cy:"12",r:"3",key:"1kchzo"}],["path",{d:"M21 9v6",key:"anns31"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ti=e("CaseUpperIcon",[["path",{d:"m3 15 4-8 4 8",key:"1vwr6u"}],["path",{d:"M4 13h6",key:"1r9ots"}],["path",{d:"M15 11h4.5a2 2 0 0 1 0 4H15V7h4a2 2 0 0 1 0 4",key:"1sqfas"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ai=e("CassetteTapeIcon",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["circle",{cx:"8",cy:"10",r:"2",key:"1xl4ub"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"10",r:"2",key:"r14t7q"}],["path",{d:"m6 20 .7-2.9A1.4 1.4 0 0 1 8.1 16h7.8a1.4 1.4 0 0 1 1.4 1l.7 3",key:"l01ucn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oi=e("CastIcon",[["path",{d:"M2 8V6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2h-6",key:"3zrzxg"}],["path",{d:"M2 12a9 9 0 0 1 8 8",key:"g6cvee"}],["path",{d:"M2 16a5 5 0 0 1 4 4",key:"1y1dii"}],["line",{x1:"2",x2:"2.01",y1:"20",y2:"20",key:"xu2jvo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ci=e("CastleIcon",[["path",{d:"M22 20v-9H2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2Z",key:"109fe4"}],["path",{d:"M18 11V4H6v7",key:"mon5oj"}],["path",{d:"M15 22v-4a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v4",key:"jdggr9"}],["path",{d:"M22 11V9",key:"3zbp94"}],["path",{d:"M2 11V9",key:"1x5rnq"}],["path",{d:"M6 4V2",key:"1rsq15"}],["path",{d:"M18 4V2",key:"1jsdo1"}],["path",{d:"M10 4V2",key:"75d9ly"}],["path",{d:"M14 4V2",key:"8nj3z6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ni=e("CatIcon",[["path",{d:"M12 5c.67 0 1.35.09 2 .26 1.78-2 5.03-2.84 6.42-2.26 1.4.58-.42 7-.42 7 .57 1.07 1 2.24 1 3.44C21 17.9 16.97 21 12 21s-9-3-9-7.56c0-1.25.5-2.4 1-3.44 0 0-1.89-6.42-.5-7 1.39-.58 4.72.23 6.5 2.23A9.04 9.04 0 0 1 12 5Z",key:"x6xyqk"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ii=e("CctvIcon",[["path",{d:"M16.75 12h3.632a1 1 0 0 1 .894 1.447l-2.034 4.069a1 1 0 0 1-1.708.134l-2.124-2.97",key:"ir91b5"}],["path",{d:"M17.106 9.053a1 1 0 0 1 .447 1.341l-3.106 6.211a1 1 0 0 1-1.342.447L3.61 12.3a2.92 2.92 0 0 1-1.3-3.91L3.69 5.6a2.92 2.92 0 0 1 3.92-1.3z",key:"jlp8i1"}],["path",{d:"M2 19h3.76a2 2 0 0 0 1.8-1.1L9 15",key:"19bib8"}],["path",{d:"M2 21v-4",key:"l40lih"}],["path",{d:"M7 9h.01",key:"19b3jx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ri=e("CheckCheckIcon",[["path",{d:"M18 6 7 17l-5-5",key:"116fxf"}],["path",{d:"m22 10-7.5 7.5L13 16",key:"ke71qq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const di=e("CheckIcon",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hi=e("ChefHatIcon",[["path",{d:"M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z",key:"1qvrer"}],["path",{d:"M6 17h12",key:"1jwigz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const li=e("CherryIcon",[["path",{d:"M2 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"cvxqlc"}],["path",{d:"M12 17a5 5 0 0 0 10 0c0-2.76-2.5-5-5-3-2.5-2-5 .24-5 3Z",key:"1ostrc"}],["path",{d:"M7 14c3.22-2.91 4.29-8.75 5-12 1.66 2.38 4.94 9 5 12",key:"hqx58h"}],["path",{d:"M22 9c-4.29 0-7.14-2.33-10-7 5.71 0 10 4.67 10 7Z",key:"eykp1o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B2=e("ChevronDownIcon",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const si=e("ChevronFirstIcon",[["path",{d:"m17 18-6-6 6-6",key:"1yerx2"}],["path",{d:"M7 6v12",key:"1p53r6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yi=e("ChevronLastIcon",[["path",{d:"m7 18 6-6-6-6",key:"lwmzdw"}],["path",{d:"M17 6v12",key:"1o0aio"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pi=e("ChevronLeftIcon",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F2=e("ChevronRightIcon",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ki=e("ChevronUpIcon",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ui=e("ChevronsDownUpIcon",[["path",{d:"m7 20 5-5 5 5",key:"13a0gw"}],["path",{d:"m7 4 5 5 5-5",key:"1kwcof"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mi=e("ChevronsDownIcon",[["path",{d:"m7 6 5 5 5-5",key:"1lc07p"}],["path",{d:"m7 13 5 5 5-5",key:"1d48rs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mi=e("ChevronsLeftRightIcon",[["path",{d:"m9 7-5 5 5 5",key:"j5w590"}],["path",{d:"m15 7 5 5-5 5",key:"1bl6da"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vi=e("ChevronsLeftIcon",[["path",{d:"m11 17-5-5 5-5",key:"13zhaf"}],["path",{d:"m18 17-5-5 5-5",key:"h8a8et"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gi=e("ChevronsRightLeftIcon",[["path",{d:"m20 17-5-5 5-5",key:"30x0n2"}],["path",{d:"m4 17 5-5-5-5",key:"16spf4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ii=e("ChevronsRightIcon",[["path",{d:"m6 17 5-5-5-5",key:"xnjwq"}],["path",{d:"m13 17 5-5-5-5",key:"17xmmf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xi=e("ChevronsUpDownIcon",[["path",{d:"m7 15 5 5 5-5",key:"1hf1tw"}],["path",{d:"m7 9 5-5 5 5",key:"sgt6xg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fi=e("ChevronsUpIcon",[["path",{d:"m17 11-5-5-5 5",key:"e8nh98"}],["path",{d:"m17 18-5-5-5 5",key:"2avn1x"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Li=e("ChromeIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wi=e("ChurchIcon",[["path",{d:"m18 7 4 2v11a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9l4-2",key:"gy5gyo"}],["path",{d:"M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4",key:"cpkuc4"}],["path",{d:"M18 22V5l-6-3-6 3v17",key:"1hsnhq"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M10 9h4",key:"u4k05v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ci=e("CigaretteOffIcon",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M12 12H2v4h14",key:"91gsaq"}],["path",{d:"M22 12v4",key:"142cbu"}],["path",{d:"M18 12h-.5",key:"12ymji"}],["path",{d:"M7 12v4",key:"jqww69"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bi=e("CigaretteIcon",[["path",{d:"M18 12H2v4h16",key:"2rt1hm"}],["path",{d:"M22 12v4",key:"142cbu"}],["path",{d:"M7 12v4",key:"jqww69"}],["path",{d:"M18 8c0-2.5-2-2.5-2-5",key:"1il607"}],["path",{d:"M22 8c0-2.5-2-2.5-2-5",key:"1gah44"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ve=e("CircleAlertIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pe=e("CircleArrowDownIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const je=e("CircleArrowLeftIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _e=e("CircleArrowOutDownLeftIcon",[["path",{d:"M2 12a10 10 0 1 1 10 10",key:"1yn6ov"}],["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"M8 22H2v-6",key:"sulq54"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const De=e("CircleArrowOutDownRightIcon",[["path",{d:"M12 22a10 10 0 1 1 10-10",key:"130bv5"}],["path",{d:"M22 22 12 12",key:"131aw7"}],["path",{d:"M22 16v6h-6",key:"1gvm70"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Be=e("CircleArrowOutUpLeftIcon",[["path",{d:"M2 8V2h6",key:"hiwtdz"}],["path",{d:"m2 2 10 10",key:"1oh8rs"}],["path",{d:"M12 2A10 10 0 1 1 2 12",key:"rrk4fa"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fe=e("CircleArrowOutUpRightIcon",[["path",{d:"M22 12A10 10 0 1 1 12 2",key:"1fm58d"}],["path",{d:"M22 2 12 12",key:"yg2myt"}],["path",{d:"M16 2h6v6",key:"zan5cs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Te=e("CircleArrowRightIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Re=e("CircleArrowUpIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ie=e("CircleCheckBigIcon",[["path",{d:"M22 11.08V12a10 10 0 1 1-5.93-9.14",key:"g774vq"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oe=e("CircleCheckIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ue=e("CircleChevronDownIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ee=e("CircleChevronLeftIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ze=e("CircleChevronRightIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $e=e("CircleChevronUpIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Si=e("CircleDashedIcon",[["path",{d:"M10.1 2.182a10 10 0 0 1 3.8 0",key:"5ilxe3"}],["path",{d:"M13.9 21.818a10 10 0 0 1-3.8 0",key:"11zvb9"}],["path",{d:"M17.609 3.721a10 10 0 0 1 2.69 2.7",key:"1iw5b2"}],["path",{d:"M2.182 13.9a10 10 0 0 1 0-3.8",key:"c0bmvh"}],["path",{d:"M20.279 17.609a10 10 0 0 1-2.7 2.69",key:"1ruxm7"}],["path",{d:"M21.818 10.1a10 10 0 0 1 0 3.8",key:"qkgqxc"}],["path",{d:"M3.721 6.391a10 10 0 0 1 2.7-2.69",key:"1mcia2"}],["path",{d:"M6.391 20.279a10 10 0 0 1-2.69-2.7",key:"1fvljs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ge=e("CircleDivideIcon",[["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qi=e("CircleDollarSignIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 18V6",key:"zqpxq5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ai=e("CircleDotDashedIcon",[["path",{d:"M10.1 2.18a9.93 9.93 0 0 1 3.8 0",key:"1qdqn0"}],["path",{d:"M17.6 3.71a9.95 9.95 0 0 1 2.69 2.7",key:"1bq7p6"}],["path",{d:"M21.82 10.1a9.93 9.93 0 0 1 0 3.8",key:"1rlaqf"}],["path",{d:"M20.29 17.6a9.95 9.95 0 0 1-2.7 2.69",key:"1xk03u"}],["path",{d:"M13.9 21.82a9.94 9.94 0 0 1-3.8 0",key:"l7re25"}],["path",{d:"M6.4 20.29a9.95 9.95 0 0 1-2.69-2.7",key:"1v18p6"}],["path",{d:"M2.18 13.9a9.93 9.93 0 0 1 0-3.8",key:"xdo6bj"}],["path",{d:"M3.71 6.4a9.95 9.95 0 0 1 2.7-2.69",key:"1jjmaz"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hi=e("CircleDotIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zi=e("CircleEllipsisIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M7 12h.01",key:"eqddd0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vi=e("CircleEqualIcon",[["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pi=e("CircleFadingPlusIcon",[["path",{d:"M12 2a10 10 0 0 1 7.38 16.75",key:"175t95"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M2.5 8.875a10 10 0 0 0-.5 3",key:"1vce0s"}],["path",{d:"M2.83 16a10 10 0 0 0 2.43 3.4",key:"o3fkw4"}],["path",{d:"M4.636 5.235a10 10 0 0 1 .891-.857",key:"1szpfk"}],["path",{d:"M8.644 21.42a10 10 0 0 0 7.631-.38",key:"9yhvd4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ne=e("CircleGaugeIcon",[["path",{d:"M15.6 2.7a10 10 0 1 0 5.7 5.7",key:"1e0p6d"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M13.4 10.6 19 5",key:"1kr7tw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const We=e("CircleHelpIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const re=e("CircleMinusIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ji=e("CircleOffIcon",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M8.35 2.69A10 10 0 0 1 21.3 15.65",key:"1pfsoa"}],["path",{d:"M19.08 19.08A10 10 0 1 1 4.92 4.92",key:"1ablyi"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xe=e("CircleParkingOffIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m5 5 14 14",key:"11anup"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.34",key:"a9qo08"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=e("CircleParkingIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Je=e("CirclePauseIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"10",x2:"10",y1:"15",y2:"9",key:"c1nkhi"}],["line",{x1:"14",x2:"14",y1:"15",y2:"9",key:"h65svq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ye=e("CirclePercentIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qe=e("CirclePlayIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e1=e("CirclePlusIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t1=e("CirclePowerIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 12V7",key:"1tf3mz"}],["path",{d:"M16 9a5 5 0 1 1-8 0",key:"174bae"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a1=e("CircleSlash2Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M22 2 2 22",key:"y4kqgn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _i=e("CircleSlashIcon",[["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o1=e("CircleStopIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{width:"6",height:"6",x:"9",y:"9",key:"1wrtvo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c1=e("CircleUserRoundIcon",[["path",{d:"M18 20a6 6 0 0 0-12 0",key:"1qehca"}],["circle",{cx:"12",cy:"10",r:"4",key:"1h16sb"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n1=e("CircleUserIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662",key:"154egf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const de=e("CircleXIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Di=e("CircleIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bi=e("CircuitBoardIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M11 9h4a2 2 0 0 0 2-2V3",key:"1ve2rv"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"M7 21v-4a2 2 0 0 1 2-2h4",key:"1fwkro"}],["circle",{cx:"15",cy:"15",r:"2",key:"3i40o0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fi=e("CitrusIcon",[["path",{d:"M21.66 17.67a1.08 1.08 0 0 1-.04 1.6A12 12 0 0 1 4.73 2.38a1.1 1.1 0 0 1 1.61-.04z",key:"4ite01"}],["path",{d:"M19.65 15.66A8 8 0 0 1 8.35 4.34",key:"1gxipu"}],["path",{d:"m14 10-5.5 5.5",key:"92pfem"}],["path",{d:"M14 17.85V10H6.15",key:"xqmtsk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ti=e("ClapperboardIcon",[["path",{d:"M20.2 6 3 11l-.9-2.4c-.3-1.1.3-2.2 1.3-2.5l13.5-4c1.1-.3 2.2.3 2.5 1.3Z",key:"1tn4o7"}],["path",{d:"m6.2 5.3 3.1 3.9",key:"iuk76l"}],["path",{d:"m12.4 3.4 3.1 4",key:"6hsd6n"}],["path",{d:"M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z",key:"ltgou9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ri=e("ClipboardCheckIcon",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m9 14 2 2 4-4",key:"df797q"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oi=e("ClipboardCopyIcon",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2",key:"4jdomd"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v4",key:"3hqy98"}],["path",{d:"M21 14H11",key:"1bme5i"}],["path",{d:"m15 10-4 4 4 4",key:"5dvupr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ui=e("ClipboardListIcon",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M12 11h4",key:"1jrz19"}],["path",{d:"M12 16h4",key:"n85exb"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ei=e("ClipboardMinusIcon",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zi=e("ClipboardPasteIcon",[["path",{d:"M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z",key:"1pp7kr"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10",key:"2ik1ml"}],["path",{d:"m17 10 4 4-4 4",key:"vp2hj1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i1=e("ClipboardPenLineIcon",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-.5",key:"1but9f"}],["path",{d:"M16 4h2a2 2 0 0 1 1.73 1",key:"1p8n7l"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M18.4 9.6a2 2 0 0 1 3 3L17 17l-4 1 1-4Z",key:"yg2pdb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r1=e("ClipboardPenIcon",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",key:"1oijnt"}],["path",{d:"M10.4 12.6a2 2 0 0 1 3 3L8 21l-4 1 1-4Z",key:"hnx206"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-5.5",key:"cereej"}],["path",{d:"M4 13.5V6a2 2 0 0 1 2-2h2",key:"5ua5vh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $i=e("ClipboardPlusIcon",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 14h6",key:"159ibu"}],["path",{d:"M12 17v-6",key:"1y8rbf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gi=e("ClipboardTypeIcon",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"M9 12v-1h6v1",key:"iehl6m"}],["path",{d:"M11 17h2",key:"12w5me"}],["path",{d:"M12 11v6",key:"1bwqyc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ni=e("ClipboardXIcon",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}],["path",{d:"m15 11-6 6",key:"1toa9n"}],["path",{d:"m9 11 6 6",key:"wlibny"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wi=e("ClipboardIcon",[["rect",{width:"8",height:"4",x:"8",y:"2",rx:"1",ry:"1",key:"tgr4d6"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2",key:"116196"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xi=e("Clock1Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 8",key:"12zbmj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ki=e("Clock10Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 8 10",key:"atfzqc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ji=e("Clock11Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 9.5 8",key:"l5bg6f"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yi=e("Clock12Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12",key:"1fub01"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qi=e("Clock2Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 10",key:"1g230d"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const er=e("Clock3Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16.5 12",key:"1aq6pp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tr=e("Clock4Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ar=e("Clock5Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 14.5 16",key:"1pcbox"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const or=e("Clock6Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 12 16.5",key:"hb2qv6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cr=e("Clock7Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 9.5 16",key:"ka3394"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nr=e("Clock8Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 8 14",key:"tmc9b4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ir=e("Clock9Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 7.5 12",key:"1k60p0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rr=e("ClockIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dr=e("CloudCogIcon",[["circle",{cx:"12",cy:"17",r:"3",key:"1spfwm"}],["path",{d:"M4.2 15.1A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.2",key:"zaobp"}],["path",{d:"m15.7 18.4-.9-.3",key:"4qxpbn"}],["path",{d:"m9.2 15.9-.9-.3",key:"17q7o2"}],["path",{d:"m10.6 20.7.3-.9",key:"1pf4s2"}],["path",{d:"m13.1 14.2.3-.9",key:"1mnuqm"}],["path",{d:"m13.6 20.7-.4-1",key:"1jpd1m"}],["path",{d:"m10.8 14.3-.4-1",key:"17ugyy"}],["path",{d:"m8.3 18.6 1-.4",key:"s42vdx"}],["path",{d:"m14.7 15.8 1-.4",key:"2wizun"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d1=e("CloudDownloadIcon",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m8 17 4 4 4-4",key:"1ul180"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hr=e("CloudDrizzleIcon",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 19v1",key:"1dk2by"}],["path",{d:"M8 14v1",key:"84yxot"}],["path",{d:"M16 19v1",key:"v220m7"}],["path",{d:"M16 14v1",key:"g12gj6"}],["path",{d:"M12 21v1",key:"q8vafk"}],["path",{d:"M12 16v1",key:"1mx6rx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lr=e("CloudFogIcon",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 17H7",key:"pygtm1"}],["path",{d:"M17 21H9",key:"1u2q02"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sr=e("CloudHailIcon",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v2",key:"a1is7l"}],["path",{d:"M8 14v2",key:"1e9m6t"}],["path",{d:"M16 20h.01",key:"xwek51"}],["path",{d:"M8 20h.01",key:"1vjney"}],["path",{d:"M12 16v2",key:"z66u1j"}],["path",{d:"M12 22h.01",key:"1urd7a"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yr=e("CloudLightningIcon",[["path",{d:"M6 16.326A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 .5 8.973",key:"1cez44"}],["path",{d:"m13 12-3 5h4l-3 5",key:"1t22er"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pr=e("CloudMoonRainIcon",[["path",{d:"M10.083 9A6.002 6.002 0 0 1 16 4a4.243 4.243 0 0 0 6 6c0 2.22-1.206 4.16-3 5.197",key:"u82z8m"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M7 19v2",key:"12npes"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kr=e("CloudMoonIcon",[["path",{d:"M13 16a3 3 0 1 1 0 6H7a5 5 0 1 1 4.9-6Z",key:"p44pc9"}],["path",{d:"M10.1 9A6 6 0 0 1 16 4a4.24 4.24 0 0 0 6 6 6 6 0 0 1-3 5.197",key:"16nha0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ur=e("CloudOffIcon",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",key:"yfwify"}],["path",{d:"M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",key:"jlfiyv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mr=e("CloudRainWindIcon",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"m9.2 22 3-7",key:"sb5f6j"}],["path",{d:"m9 13-3 7",key:"500co5"}],["path",{d:"m17 13-3 7",key:"8t2fiy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mr=e("CloudRainIcon",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M16 14v6",key:"1j4efv"}],["path",{d:"M8 14v6",key:"17c4r9"}],["path",{d:"M12 16v6",key:"c8a4gj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vr=e("CloudSnowIcon",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M8 19h.01",key:"puxtts"}],["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M12 21h.01",key:"h35vbk"}],["path",{d:"M16 15h.01",key:"rnfrdf"}],["path",{d:"M16 19h.01",key:"1vcnzz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gr=e("CloudSunRainIcon",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M3 20a5 5 0 1 1 8.9-4H13a3 3 0 0 1 2 5.24",key:"1qmrp3"}],["path",{d:"M11 20v2",key:"174qtz"}],["path",{d:"M7 19v2",key:"12npes"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ir=e("CloudSunIcon",[["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}],["path",{d:"M15.947 12.65a4 4 0 0 0-5.925-4.128",key:"dpwdj0"}],["path",{d:"M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z",key:"s09mg5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h1=e("CloudUploadIcon",[["path",{d:"M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242",key:"1pljnt"}],["path",{d:"M12 12v9",key:"192myk"}],["path",{d:"m16 16-4-4-4 4",key:"119tzi"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xr=e("CloudIcon",[["path",{d:"M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"p7xjir"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fr=e("CloudyIcon",[["path",{d:"M17.5 21H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z",key:"gqqjvc"}],["path",{d:"M22 10a3 3 0 0 0-3-3h-2.207a5.502 5.502 0 0 0-10.702.5",key:"1p2s76"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lr=e("CloverIcon",[["path",{d:"M16.17 7.83 2 22",key:"t58vo8"}],["path",{d:"M4.02 12a2.827 2.827 0 1 1 3.81-4.17A2.827 2.827 0 1 1 12 4.02a2.827 2.827 0 1 1 4.17 3.81A2.827 2.827 0 1 1 19.98 12a2.827 2.827 0 1 1-3.81 4.17A2.827 2.827 0 1 1 12 19.98a2.827 2.827 0 1 1-4.17-3.81A1 1 0 1 1 4 12",key:"17k36q"}],["path",{d:"m7.83 7.83 8.34 8.34",key:"1d7sxk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wr=e("ClubIcon",[["path",{d:"M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z",key:"27yuqz"}],["path",{d:"M12 17.66L12 22",key:"ogfahf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l1=e("CodeXmlIcon",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X2=e("CodeIcon",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cr=e("CodepenIcon",[["polygon",{points:"12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2",key:"srzb37"}],["line",{x1:"12",x2:"12",y1:"22",y2:"15.5",key:"1t73f2"}],["polyline",{points:"22 8.5 12 15.5 2 8.5",key:"ajlxae"}],["polyline",{points:"2 15.5 12 8.5 22 15.5",key:"susrui"}],["line",{x1:"12",x2:"12",y1:"2",y2:"8.5",key:"2cldga"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const br=e("CodesandboxIcon",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["polyline",{points:"7.5 4.21 12 6.81 16.5 4.21",key:"fabo96"}],["polyline",{points:"7.5 19.79 7.5 14.6 3 12",key:"z377f1"}],["polyline",{points:"21 12 16.5 14.6 16.5 19.79",key:"9nrev1"}],["polyline",{points:"3.27 6.96 12 12.01 20.73 6.96",key:"1180pa"}],["line",{x1:"12",x2:"12",y1:"22.08",y2:"12",key:"3z3uq6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sr=e("CoffeeIcon",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1",key:"pwadti"}],["path",{d:"M6 2v2",key:"colzsn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qr=e("CogIcon",[["path",{d:"M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z",key:"sobvz5"}],["path",{d:"M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z",key:"11i496"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 22v-2",key:"1osdcq"}],["path",{d:"m17 20.66-1-1.73",key:"eq3orb"}],["path",{d:"M11 10.27 7 3.34",key:"16pf9h"}],["path",{d:"m20.66 17-1.73-1",key:"sg0v6f"}],["path",{d:"m3.34 7 1.73 1",key:"1ulond"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"m20.66 7-1.73 1",key:"1ow05n"}],["path",{d:"m3.34 17 1.73-1",key:"nuk764"}],["path",{d:"m17 3.34-1 1.73",key:"2wel8s"}],["path",{d:"m11 13.73-4 6.93",key:"794ttg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ar=e("CoinsIcon",[["circle",{cx:"8",cy:"8",r:"6",key:"3yglwk"}],["path",{d:"M18.09 10.37A6 6 0 1 1 10.34 18",key:"t5s6rm"}],["path",{d:"M7 6h1v4",key:"1obek4"}],["path",{d:"m16.71 13.88.7.71-2.82 2.82",key:"1rbuyh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s1=e("Columns2Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y1=e("Columns3Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hr=e("Columns4Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7.5 3v18",key:"w0wo6v"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M16.5 3v18",key:"10tjh1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zr=e("CombineIcon",[["rect",{width:"8",height:"8",x:"2",y:"2",rx:"2",key:"z1hh3n"}],["path",{d:"M14 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"83orz6"}],["path",{d:"M20 2c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"k86dmt"}],["path",{d:"M10 18H5c-1.7 0-3-1.3-3-3v-1",key:"6vokjl"}],["polyline",{points:"7 21 10 18 7 15",key:"1k02g0"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2",key:"1fa9i4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vr=e("CommandIcon",[["path",{d:"M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3",key:"11bfej"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pr=e("CompassIcon",[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jr=e("ComponentIcon",[["path",{d:"M5.5 8.5 9 12l-3.5 3.5L2 12l3.5-3.5Z",key:"1kciei"}],["path",{d:"m12 2 3.5 3.5L12 9 8.5 5.5 12 2Z",key:"1ome0g"}],["path",{d:"M18.5 8.5 22 12l-3.5 3.5L15 12l3.5-3.5Z",key:"vbupec"}],["path",{d:"m12 15 3.5 3.5L12 22l-3.5-3.5L12 15Z",key:"16csic"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _r=e("ComputerIcon",[["rect",{width:"14",height:"8",x:"5",y:"2",rx:"2",key:"wc9tft"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h2",key:"rwmk9e"}],["path",{d:"M12 18h6",key:"aqd8w3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dr=e("ConciergeBellIcon",[["path",{d:"M3 20a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1Z",key:"1pvr1r"}],["path",{d:"M20 16a8 8 0 1 0-16 0",key:"1pa543"}],["path",{d:"M12 4v4",key:"1bq03y"}],["path",{d:"M10 4h4",key:"1xpv9s"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Br=e("ConeIcon",[["path",{d:"m20.9 18.55-8-15.98a1 1 0 0 0-1.8 0l-8 15.98",key:"53pte7"}],["ellipse",{cx:"12",cy:"19",rx:"9",ry:"3",key:"1ji25f"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fr=e("ConstructionIcon",[["rect",{x:"2",y:"6",width:"20",height:"8",rx:"1",key:"1estib"}],["path",{d:"M17 14v7",key:"7m2elx"}],["path",{d:"M7 14v7",key:"1cm7wv"}],["path",{d:"M17 3v3",key:"1v4jwn"}],["path",{d:"M7 3v3",key:"7o6guu"}],["path",{d:"M10 14 2.3 6.3",key:"1023jk"}],["path",{d:"m14 6 7.7 7.7",key:"1s8pl2"}],["path",{d:"m8 6 8 8",key:"hl96qh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p1=e("ContactRoundIcon",[["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}],["circle",{cx:"12",cy:"11",r:"3",key:"itu57m"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4",key:"1ff9gb"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4",key:"1ufoma"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tr=e("ContactIcon",[["path",{d:"M17 18a2 2 0 0 0-2-2H9a2 2 0 0 0-2 2",key:"1mghuy"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["circle",{cx:"12",cy:"10",r:"2",key:"1yojzk"}],["line",{x1:"8",x2:"8",y1:"2",y2:"4",key:"1ff9gb"}],["line",{x1:"16",x2:"16",y1:"2",y2:"4",key:"1ufoma"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rr=e("ContainerIcon",[["path",{d:"M22 7.7c0-.6-.4-1.2-.8-1.5l-6.3-3.9a1.72 1.72 0 0 0-1.7 0l-10.3 6c-.5.2-.9.8-.9 1.4v6.6c0 .5.4 1.2.8 1.5l6.3 3.9a1.72 1.72 0 0 0 1.7 0l10.3-6c.5-.3.9-1 .9-1.5Z",key:"1t2lqe"}],["path",{d:"M10 21.9V14L2.1 9.1",key:"o7czzq"}],["path",{d:"m10 14 11.9-6.9",key:"zm5e20"}],["path",{d:"M14 19.8v-8.1",key:"159ecu"}],["path",{d:"M18 17.5V9.4",key:"11uown"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Or=e("ContrastIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 18a6 6 0 0 0 0-12v12z",key:"j4l70d"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ur=e("CookieIcon",[["path",{d:"M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5",key:"laymnq"}],["path",{d:"M8.5 8.5v.01",key:"ue8clq"}],["path",{d:"M16 15.5v.01",key:"14dtrp"}],["path",{d:"M12 12v.01",key:"u5ubse"}],["path",{d:"M11 17v.01",key:"1hyl5a"}],["path",{d:"M7 14v.01",key:"uct60s"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Er=e("CookingPotIcon",[["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M20 12v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-8",key:"u0tga0"}],["path",{d:"m4 8 16-4",key:"16g0ng"}],["path",{d:"m8.86 6.78-.45-1.81a2 2 0 0 1 1.45-2.43l1.94-.48a2 2 0 0 1 2.43 1.46l.45 1.8",key:"12cejc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zr=e("CopyCheckIcon",[["path",{d:"m12 15 2 2 4-4",key:"2c609p"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $r=e("CopyMinusIcon",[["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gr=e("CopyPlusIcon",[["line",{x1:"15",x2:"15",y1:"12",y2:"18",key:"1p7wdc"}],["line",{x1:"12",x2:"18",y1:"15",y2:"15",key:"1nscbv"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nr=e("CopySlashIcon",[["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wr=e("CopyXIcon",[["line",{x1:"12",x2:"18",y1:"12",y2:"18",key:"1rg63v"}],["line",{x1:"12",x2:"18",y1:"18",y2:"12",key:"ebkxgr"}],["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xr=e("CopyIcon",[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kr=e("CopyleftIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M9.17 14.83a4 4 0 1 0 0-5.66",key:"1sveal"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jr=e("CopyrightIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M14.83 14.83a4 4 0 1 1 0-5.66",key:"1i56pz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yr=e("CornerDownLeftIcon",[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qr=e("CornerDownRightIcon",[["polyline",{points:"15 10 20 15 15 20",key:"1q7qjw"}],["path",{d:"M4 4v7a4 4 0 0 0 4 4h12",key:"z08zvw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=e("CornerLeftDownIcon",[["polyline",{points:"14 15 9 20 4 15",key:"nkc4i"}],["path",{d:"M20 4h-7a4 4 0 0 0-4 4v12",key:"nbpdq2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=e("CornerLeftUpIcon",[["polyline",{points:"14 9 9 4 4 9",key:"m9oyvo"}],["path",{d:"M20 20h-7a4 4 0 0 1-4-4V4",key:"1blwi3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ad=e("CornerRightDownIcon",[["polyline",{points:"10 15 15 20 20 15",key:"axus6l"}],["path",{d:"M4 4h7a4 4 0 0 1 4 4v12",key:"wcbgct"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const od=e("CornerRightUpIcon",[["polyline",{points:"10 9 15 4 20 9",key:"1lr6px"}],["path",{d:"M4 20h7a4 4 0 0 0 4-4V4",key:"1plgdj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cd=e("CornerUpLeftIcon",[["polyline",{points:"9 14 4 9 9 4",key:"881910"}],["path",{d:"M20 20v-7a4 4 0 0 0-4-4H4",key:"1nkjon"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nd=e("CornerUpRightIcon",[["polyline",{points:"15 14 20 9 15 4",key:"1tbx3s"}],["path",{d:"M4 20v-7a4 4 0 0 1 4-4h12",key:"1lu4f8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=e("CpuIcon",[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=e("CreativeCommonsIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M10 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1ss3eq"}],["path",{d:"M17 9.3a2.8 2.8 0 0 0-3.5 1 3.1 3.1 0 0 0 0 3.4 2.7 2.7 0 0 0 3.5 1",key:"1od56t"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dd=e("CreditCardIcon",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hd=e("CroissantIcon",[["path",{d:"m4.6 13.11 5.79-3.21c1.89-1.05 4.79 1.78 3.71 3.71l-3.22 5.81C8.8 23.16.79 15.23 4.6 13.11Z",key:"1ozxlb"}],["path",{d:"m10.5 9.5-1-2.29C9.2 6.48 8.8 6 8 6H4.5C2.79 6 2 6.5 2 8.5a7.71 7.71 0 0 0 2 4.83",key:"ffuyb5"}],["path",{d:"M8 6c0-1.55.24-4-2-4-2 0-2.5 2.17-2.5 4",key:"osnpzi"}],["path",{d:"m14.5 13.5 2.29 1c.73.3 1.21.7 1.21 1.5v3.5c0 1.71-.5 2.5-2.5 2.5a7.71 7.71 0 0 1-4.83-2",key:"1vubaw"}],["path",{d:"M18 16c1.55 0 4-.24 4 2 0 2-2.17 2.5-4 2.5",key:"wxr772"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=e("CropIcon",[["path",{d:"M6 2v14a2 2 0 0 0 2 2h14",key:"ron5a4"}],["path",{d:"M18 22V8a2 2 0 0 0-2-2H2",key:"7s9ehn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=e("CrossIcon",[["path",{d:"M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z",key:"1t5g7j"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yd=e("CrosshairIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pd=e("CrownIcon",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kd=e("CuboidIcon",[["path",{d:"m21.12 6.4-6.05-4.06a2 2 0 0 0-2.17-.05L2.95 8.41a2 2 0 0 0-.95 1.7v5.82a2 2 0 0 0 .88 1.66l6.05 4.07a2 2 0 0 0 2.17.05l9.95-6.12a2 2 0 0 0 .95-1.7V8.06a2 2 0 0 0-.88-1.66Z",key:"1u2ovd"}],["path",{d:"M10 22v-8L2.25 9.15",key:"11pn4q"}],["path",{d:"m10 14 11.77-6.87",key:"1kt1wh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ud=e("CupSodaIcon",[["path",{d:"m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.54a2 2 0 0 0 2-1.72L18 8",key:"8166m8"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"yjz344"}],["path",{d:"m12 8 1-6h2",key:"3ybfa4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Md=e("CurrencyIcon",[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["line",{x1:"3",x2:"6",y1:"3",y2:"6",key:"1jkytn"}],["line",{x1:"21",x2:"18",y1:"3",y2:"6",key:"14zfjt"}],["line",{x1:"3",x2:"6",y1:"21",y2:"18",key:"iusuec"}],["line",{x1:"21",x2:"18",y1:"21",y2:"18",key:"yj2dd7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const md=e("CylinderIcon",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5v14a9 3 0 0 0 18 0V5",key:"aqi0yr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vd=e("DatabaseBackupIcon",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 12a9 3 0 0 0 5 2.69",key:"1ui2ym"}],["path",{d:"M21 9.3V5",key:"6k6cib"}],["path",{d:"M3 5v14a9 3 0 0 0 6.47 2.88",key:"i62tjy"}],["path",{d:"M12 12v4h4",key:"1bxaet"}],["path",{d:"M13 20a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L12 16",key:"1f4ei9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gd=e("DatabaseZapIcon",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 15 21.84",key:"14ibmq"}],["path",{d:"M21 5V8",key:"1marbg"}],["path",{d:"M21 12L18 17H22L19 22",key:"zafso"}],["path",{d:"M3 12A9 3 0 0 0 14.59 14.87",key:"1y4wr8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Id=e("DatabaseIcon",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xd=e("DeleteIcon",[["path",{d:"M20 5H9l-7 7 7 7h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Z",key:"1oy587"}],["line",{x1:"18",x2:"12",y1:"9",y2:"15",key:"1olkx5"}],["line",{x1:"12",x2:"18",y1:"9",y2:"15",key:"1n50pc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fd=e("DessertIcon",[["circle",{cx:"12",cy:"4",r:"2",key:"muu5ef"}],["path",{d:"M10.2 3.2C5.5 4 2 8.1 2 13a2 2 0 0 0 4 0v-1a2 2 0 0 1 4 0v4a2 2 0 0 0 4 0v-4a2 2 0 0 1 4 0v1a2 2 0 0 0 4 0c0-4.9-3.5-9-8.2-9.8",key:"lfo06j"}],["path",{d:"M3.2 14.8a9 9 0 0 0 17.6 0",key:"12xarc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ld=e("DiameterIcon",[["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}],["path",{d:"M6.48 3.66a10 10 0 0 1 13.86 13.86",key:"xr8kdq"}],["path",{d:"m6.41 6.41 11.18 11.18",key:"uhpjw7"}],["path",{d:"M3.66 6.48a10 10 0 0 0 13.86 13.86",key:"cldpwv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wd=e("DiamondMinusIcon",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z",key:"1ey20j"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k1=e("DiamondPercentIcon",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0Z",key:"1tpxz2"}],["path",{d:"M9.2 9.2h.01",key:"1b7bvt"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"M14.7 14.8h.01",key:"17nsh4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cd=e("DiamondPlusIcon",[["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41L13.7 2.71a2.41 2.41 0 0 0-3.41 0z",key:"1ey20j"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bd=e("DiamondIcon",[["path",{d:"M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z",key:"1f1r0c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sd=e("Dice1Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qd=e("Dice2Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M15 9h.01",key:"x1ddxp"}],["path",{d:"M9 15h.01",key:"fzyn71"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ad=e("Dice3Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hd=e("Dice4Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zd=e("Dice5Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 16h.01",key:"18s6g9"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vd=e("Dice6Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M16 8h.01",key:"cr5u4v"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"M8 8h.01",key:"1e4136"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M8 16h.01",key:"18s6g9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pd=e("DicesIcon",[["rect",{width:"12",height:"12",x:"2",y:"10",rx:"2",ry:"2",key:"6agr2n"}],["path",{d:"m17.92 14 3.5-3.5a2.24 2.24 0 0 0 0-3l-5-4.92a2.24 2.24 0 0 0-3 0L10 6",key:"1o487t"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 14h.01",key:"ssrbsk"}],["path",{d:"M15 6h.01",key:"cblpky"}],["path",{d:"M18 9h.01",key:"2061c0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jd=e("DiffIcon",[["path",{d:"M12 3v14",key:"7cf3v8"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M5 21h14",key:"11awu3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _d=e("Disc2Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dd=e("Disc3Icon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M6 12c0-1.7.7-3.2 1.8-4.2",key:"oqkarx"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M18 12c0 1.7-.7 3.2-1.8 4.2",key:"1eah9h"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bd=e("DiscAlbumIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"5",key:"nd82uf"}],["path",{d:"M12 12h.01",key:"1mp3jc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fd=e("DiscIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Td=e("DivideIcon",[["circle",{cx:"12",cy:"6",r:"1",key:"1bh7o1"}],["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}],["circle",{cx:"12",cy:"18",r:"1",key:"lqb9t5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rd=e("DnaOffIcon",[["path",{d:"M15 2c-1.35 1.5-2.092 3-2.5 4.5M9 22c1.35-1.5 2.092-3 2.5-4.5",key:"sxiaad"}],["path",{d:"M2 15c3.333-3 6.667-3 10-3m10-3c-1.5 1.35-3 2.092-4.5 2.5",key:"yn4bs1"}],["path",{d:"m17 6-2.5-2.5",key:"5cdfhj"}],["path",{d:"m14 8-1.5-1.5",key:"1ohn8i"}],["path",{d:"m7 18 2.5 2.5",key:"16tu1a"}],["path",{d:"m3.5 14.5.5.5",key:"hapbhd"}],["path",{d:"m20 9 .5.5",key:"1n7z02"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m10 16 1.5 1.5",key:"11lckj"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Od=e("DnaIcon",[["path",{d:"M2 15c6.667-6 13.333 0 20-6",key:"1pyr53"}],["path",{d:"M9 22c1.798-1.998 2.518-3.995 2.807-5.993",key:"q3hbxp"}],["path",{d:"M15 2c-1.798 1.998-2.518 3.995-2.807 5.993",key:"80uv8i"}],["path",{d:"m17 6-2.5-2.5",key:"5cdfhj"}],["path",{d:"m14 8-1-1",key:"15nbz5"}],["path",{d:"m7 18 2.5 2.5",key:"16tu1a"}],["path",{d:"m3.5 14.5.5.5",key:"hapbhd"}],["path",{d:"m20 9 .5.5",key:"1n7z02"}],["path",{d:"m6.5 12.5 1 1",key:"cs35ky"}],["path",{d:"m16.5 10.5 1 1",key:"696xn5"}],["path",{d:"m10 16 1.5 1.5",key:"11lckj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ud=e("DockIcon",[["path",{d:"M2 8h20",key:"d11cs7"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 16h12",key:"u522kt"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ed=e("DogIcon",[["path",{d:"M10 5.172C10 3.782 8.423 2.679 6.5 3c-2.823.47-4.113 6.006-4 7 .08.703 1.725 1.722 3.656 1 1.261-.472 1.96-1.45 2.344-2.5",key:"19br0u"}],["path",{d:"M14.267 5.172c0-1.39 1.577-2.493 3.5-2.172 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5",key:"11n1an"}],["path",{d:"M8 14v.5",key:"1nzgdb"}],["path",{d:"M16 14v.5",key:"1lajdz"}],["path",{d:"M11.25 16.25h1.5L12 17l-.75-.75Z",key:"12kq1m"}],["path",{d:"M4.42 11.247A13.152 13.152 0 0 0 4 14.556C4 18.728 7.582 21 12 21s8-2.272 8-6.444c0-1.061-.162-2.2-.493-3.309m-9.243-6.082A8.801 8.801 0 0 1 12 5c.78 0 1.5.108 2.161.306",key:"wsu29d"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zd=e("DollarSignIcon",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $d=e("DonutIcon",[["path",{d:"M20.5 10a2.5 2.5 0 0 1-2.4-3H18a2.95 2.95 0 0 1-2.6-4.4 10 10 0 1 0 6.3 7.1c-.3.2-.8.3-1.2.3",key:"19sr3x"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gd=e("DoorClosedIcon",[["path",{d:"M18 20V6a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v14",key:"36qu9e"}],["path",{d:"M2 20h20",key:"owomy5"}],["path",{d:"M14 12v.01",key:"xfcn54"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nd=e("DoorOpenIcon",[["path",{d:"M13 4h3a2 2 0 0 1 2 2v14",key:"hrm0s9"}],["path",{d:"M2 20h3",key:"1gaodv"}],["path",{d:"M13 20h9",key:"s90cdi"}],["path",{d:"M10 12v.01",key:"vx6srw"}],["path",{d:"M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z",key:"199qr4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wd=e("DotIcon",[["circle",{cx:"12.1",cy:"12.1",r:"1",key:"18d7e5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xd=e("DownloadIcon",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kd=e("DraftingCompassIcon",[["circle",{cx:"12",cy:"5",r:"2",key:"f1ur92"}],["path",{d:"m3 21 8.02-14.26",key:"1ssaw4"}],["path",{d:"m12.99 6.74 1.93 3.44",key:"iwagvd"}],["path",{d:"M19 12c-3.87 4-10.13 4-14 0",key:"1tsu18"}],["path",{d:"m21 21-2.16-3.84",key:"vylbct"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jd=e("DramaIcon",[["path",{d:"M10 11h.01",key:"d2at3l"}],["path",{d:"M14 6h.01",key:"k028ub"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6.5 13.1h.01",key:"1748ia"}],["path",{d:"M22 5c0 9-4 12-6 12s-6-3-6-12c0-2 2-3 6-3s6 1 6 3",key:"172yzv"}],["path",{d:"M17.4 9.9c-.8.8-2 .8-2.8 0",key:"1obv0w"}],["path",{d:"M10.1 7.1C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7",key:"rqjl8i"}],["path",{d:"M9.1 16.5c.3-1.1 1.4-1.7 2.4-1.4",key:"1mr6wy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yd=e("DribbbleIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94",key:"hpej1"}],["path",{d:"M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32",key:"1tr44o"}],["path",{d:"M8.56 2.75c4.37 6 6 9.42 8 17.72",key:"kbh691"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qd=e("DrillIcon",[["path",{d:"M14 9c0 .6-.4 1-1 1H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9c.6 0 1 .4 1 1Z",key:"b6nnkj"}],["path",{d:"M18 6h4",key:"66u95g"}],["path",{d:"M14 4h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3",key:"105ega"}],["path",{d:"m5 10-2 8",key:"xt2lic"}],["path",{d:"M12 10v3c0 .6-.4 1-1 1H8",key:"mwpjnk"}],["path",{d:"m7 18 2-8",key:"1bzku2"}],["path",{d:"M5 22c-1.7 0-3-1.3-3-3 0-.6.4-1 1-1h7c.6 0 1 .4 1 1v2c0 .6-.4 1-1 1Z",key:"117add"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eh=e("DropletIcon",[["path",{d:"M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z",key:"c7niix"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const th=e("DropletsIcon",[["path",{d:"M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",key:"1ptgy4"}],["path",{d:"M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",key:"1sl1rz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ah=e("DrumIcon",[["path",{d:"m2 2 8 8",key:"1v6059"}],["path",{d:"m22 2-8 8",key:"173r8a"}],["ellipse",{cx:"12",cy:"9",rx:"10",ry:"5",key:"liohsx"}],["path",{d:"M7 13.4v7.9",key:"1yi6u9"}],["path",{d:"M12 14v8",key:"1tn2tj"}],["path",{d:"M17 13.4v7.9",key:"eqz2v3"}],["path",{d:"M2 9v8a10 5 0 0 0 20 0V9",key:"1750ul"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oh=e("DrumstickIcon",[["path",{d:"M15.4 15.63a7.875 6 135 1 1 6.23-6.23 4.5 3.43 135 0 0-6.23 6.23",key:"1dtqwm"}],["path",{d:"m8.29 12.71-2.6 2.6a2.5 2.5 0 1 0-1.65 4.65A2.5 2.5 0 1 0 8.7 18.3l2.59-2.59",key:"1oq1fw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ch=e("DumbbellIcon",[["path",{d:"M14.4 14.4 9.6 9.6",key:"ic80wn"}],["path",{d:"M18.657 21.485a2 2 0 1 1-2.829-2.828l-1.767 1.768a2 2 0 1 1-2.829-2.829l6.364-6.364a2 2 0 1 1 2.829 2.829l-1.768 1.767a2 2 0 1 1 2.828 2.829z",key:"nnl7wr"}],["path",{d:"m21.5 21.5-1.4-1.4",key:"1f1ice"}],["path",{d:"M3.9 3.9 2.5 2.5",key:"1evmna"}],["path",{d:"M6.404 12.768a2 2 0 1 1-2.829-2.829l1.768-1.767a2 2 0 1 1-2.828-2.829l2.828-2.828a2 2 0 1 1 2.829 2.828l1.767-1.768a2 2 0 1 1 2.829 2.829z",key:"yhosts"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nh=e("EarOffIcon",[["path",{d:"M6 18.5a3.5 3.5 0 1 0 7 0c0-1.57.92-2.52 2.04-3.46",key:"1qngmn"}],["path",{d:"M6 8.5c0-.75.13-1.47.36-2.14",key:"b06bma"}],["path",{d:"M8.8 3.15A6.5 6.5 0 0 1 19 8.5c0 1.63-.44 2.81-1.09 3.76",key:"g10hsz"}],["path",{d:"M12.5 6A2.5 2.5 0 0 1 15 8.5M10 13a2 2 0 0 0 1.82-1.18",key:"ygzou7"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ih=e("EarIcon",[["path",{d:"M6 8.5a6.5 6.5 0 1 1 13 0c0 6-6 6-6 10a3.5 3.5 0 1 1-7 0",key:"1dfaln"}],["path",{d:"M15 8.5a2.5 2.5 0 0 0-5 0v1a2 2 0 1 1 0 4",key:"1qnva7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rh=e("EarthLockIcon",[["path",{d:"M7 3.34V5a3 3 0 0 0 3 3",key:"w732o8"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2 2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"f02343"}],["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M12 2a10 10 0 1 0 9.54 13",key:"zjsr6q"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u1=e("EarthIcon",[["path",{d:"M21.54 15H17a2 2 0 0 0-2 2v4.54",key:"1djwo0"}],["path",{d:"M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17",key:"1fi5u6"}],["path",{d:"M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05",key:"xsiumc"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dh=e("EclipseIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a7 7 0 1 0 10 10",key:"1yuj32"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hh=e("EggFriedIcon",[["circle",{cx:"11.5",cy:"12.5",r:"3.5",key:"1cl1mi"}],["path",{d:"M3 8c0-3.5 2.5-6 6.5-6 5 0 4.83 3 7.5 5s5 2 5 6c0 4.5-2.5 6.5-7 6.5-2.5 0-2.5 2.5-6 2.5s-7-2-7-5.5c0-3 1.5-3 1.5-5C3.5 10 3 9 3 8Z",key:"165ef9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lh=e("EggOffIcon",[["path",{d:"M6.399 6.399C5.362 8.157 4.65 10.189 4.5 12c-.37 4.43 1.27 9.95 7.5 10 3.256-.026 5.259-1.547 6.375-3.625",key:"6et380"}],["path",{d:"M19.532 13.875A14.07 14.07 0 0 0 19.5 12c-.36-4.34-3.95-9.96-7.5-10-1.04.012-2.082.502-3.046 1.297",key:"gcdc3f"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sh=e("EggIcon",[["path",{d:"M12 22c6.23-.05 7.87-5.57 7.5-10-.36-4.34-3.95-9.96-7.5-10-3.55.04-7.14 5.66-7.5 10-.37 4.43 1.27 9.95 7.5 10z",key:"1c39pg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M1=e("EllipsisVerticalIcon",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m1=e("EllipsisIcon",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yh=e("EqualNotIcon",[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ph=e("EqualIcon",[["line",{x1:"5",x2:"19",y1:"9",y2:"9",key:"1nwqeh"}],["line",{x1:"5",x2:"19",y1:"15",y2:"15",key:"g8yjpy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kh=e("EraserIcon",[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uh=e("EuroIcon",[["path",{d:"M4 10h12",key:"1y6xl8"}],["path",{d:"M4 14h9",key:"1loblj"}],["path",{d:"M19 6a7.7 7.7 0 0 0-5.2-2A7.9 7.9 0 0 0 6 12c0 4.4 3.5 8 7.8 8 2 0 3.8-.8 5.2-2",key:"1j6lzo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mh=e("ExpandIcon",[["path",{d:"m21 21-6-6m6 6v-4.8m0 4.8h-4.8",key:"1c15vz"}],["path",{d:"M3 16.2V21m0 0h4.8M3 21l6-6",key:"1fsnz2"}],["path",{d:"M21 7.8V3m0 0h-4.8M21 3l-6 6",key:"hawz9i"}],["path",{d:"M3 7.8V3m0 0h4.8M3 3l6 6",key:"u9ee12"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mh=e("ExternalLinkIcon",[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vh=e("EyeOffIcon",[["path",{d:"M9.88 9.88a3 3 0 1 0 4.24 4.24",key:"1jxqfv"}],["path",{d:"M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68",key:"9wicm4"}],["path",{d:"M6.61 6.61A13.526 13.526 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61",key:"1jreej"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gh=e("EyeIcon",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ih=e("FacebookIcon",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xh=e("FactoryIcon",[["path",{d:"M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"159hny"}],["path",{d:"M17 18h1",key:"uldtlt"}],["path",{d:"M12 18h1",key:"s9uhes"}],["path",{d:"M7 18h1",key:"1neino"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fh=e("FanIcon",[["path",{d:"M10.827 16.379a6.082 6.082 0 0 1-8.618-7.002l5.412 1.45a6.082 6.082 0 0 1 7.002-8.618l-1.45 5.412a6.082 6.082 0 0 1 8.618 7.002l-5.412-1.45a6.082 6.082 0 0 1-7.002 8.618l1.45-5.412Z",key:"484a7f"}],["path",{d:"M12 12v.01",key:"u5ubse"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lh=e("FastForwardIcon",[["polygon",{points:"13 19 22 12 13 5 13 19",key:"587y9g"}],["polygon",{points:"2 19 11 12 2 5 2 19",key:"3pweh0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wh=e("FeatherIcon",[["path",{d:"M12.67 19a2 2 0 0 0 1.416-.588l6.154-6.172a6 6 0 0 0-8.49-8.49L5.586 9.914A2 2 0 0 0 5 11.328V18a1 1 0 0 0 1 1z",key:"18jl4k"}],["path",{d:"M16 8 2 22",key:"vp34q"}],["path",{d:"M17.5 15H9",key:"1oz8nu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ch=e("FenceIcon",[["path",{d:"M4 3 2 5v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"1n2rgs"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M6 18h4",key:"12yh4b"}],["path",{d:"m12 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"3ha7mj"}],["path",{d:"M14 8h4",key:"1r8wg2"}],["path",{d:"M14 18h4",key:"1t3kbu"}],["path",{d:"m20 3-2 2v15c0 .6.4 1 1 1h2c.6 0 1-.4 1-1V5Z",key:"dfd4e2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bh=e("FerrisWheelIcon",[["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m6.8 15-3.5 2",key:"hjy98k"}],["path",{d:"m20.7 7-3.5 2",key:"f08gto"}],["path",{d:"M6.8 9 3.3 7",key:"1aevh4"}],["path",{d:"m20.7 17-3.5-2",key:"1liqo3"}],["path",{d:"m9 22 3-8 3 8",key:"wees03"}],["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M18 18.7a9 9 0 1 0-12 0",key:"dhzg4g"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sh=e("FigmaIcon",[["path",{d:"M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z",key:"1340ok"}],["path",{d:"M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z",key:"1hz3m3"}],["path",{d:"M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z",key:"1oz8n2"}],["path",{d:"M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z",key:"1ff65i"}],["path",{d:"M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z",key:"pdip6e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qh=e("FileArchiveIcon",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v18",key:"1oywqq"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"20",r:"2",key:"1xzdoj"}],["path",{d:"M10 7V6",key:"dljcrl"}],["path",{d:"M10 12v-1",key:"v7bkov"}],["path",{d:"M10 18v-2",key:"1cjy8d"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ah=e("FileAudio2Icon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"3",cy:"17",r:"1",key:"vo6nti"}],["path",{d:"M2 17v-3a4 4 0 0 1 8 0v3",key:"1ggdre"}],["circle",{cx:"9",cy:"17",r:"1",key:"bc1fq4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hh=e("FileAudioIcon",[["path",{d:"M17.5 22h.5a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"rslqgf"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 19a2 2 0 1 1 4 0v1a2 2 0 1 1-4 0v-4a6 6 0 0 1 12 0v4a2 2 0 1 1-4 0v-1a2 2 0 1 1 4 0",key:"9f7x3i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v1=e("FileAxis3dIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 18 4-4",key:"12zab0"}],["path",{d:"M8 10v8h8",key:"tlaukw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zh=e("FileBadge2Icon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14 12.5 1 5.5-3-1-3 1 1-5.5",key:"14xlky"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vh=e("FileBadgeIcon",[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"12ixgl"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M5 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",key:"u0c8gj"}],["path",{d:"M7 16.5 8 22l-3-1-3 1 1-5.5",key:"5gm2nr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ph=e("FileBarChart2Icon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-1",key:"zg0ygc"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"M16 18v-3",key:"j5jt4h"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jh=e("FileBarChartIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 18v-2",key:"qcmpov"}],["path",{d:"M12 18v-4",key:"q1q25u"}],["path",{d:"M16 18v-6",key:"15y0np"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _h=e("FileBoxIcon",[["path",{d:"M14.5 22H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"16lz6z"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 13.1a2 2 0 0 0-1 1.76v3.24a2 2 0 0 0 .97 1.78L6 21.7a2 2 0 0 0 2.03.01L11 19.9a2 2 0 0 0 1-1.76V14.9a2 2 0 0 0-.97-1.78L8 11.3a2 2 0 0 0-2.03-.01Z",key:"99pj1s"}],["path",{d:"M7 17v5",key:"1yj1jh"}],["path",{d:"M11.7 14.2 7 17l-4.7-2.8",key:"1yk8tc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dh=e("FileCheck2Icon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m3 15 2 2 4-4",key:"1lhrkk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bh=e("FileCheckIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m9 15 2 2 4-4",key:"1grp1n"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fh=e("FileClockIcon",[["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"37hlfg"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"8",cy:"16",r:"6",key:"10v15b"}],["path",{d:"M9.5 17.5 8 16.25V14",key:"1o80t2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Th=e("FileCode2Icon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m5 12-3 3 3 3",key:"oke12k"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rh=e("FileCodeIcon",[["path",{d:"M10 12.5 8 15l2 2.5",key:"1tg20x"}],["path",{d:"m14 12.5 2 2.5-2 2.5",key:"yinavb"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g1=e("FileCogIcon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"6",cy:"14",r:"3",key:"a1xfv6"}],["path",{d:"M6 10v1",key:"xs0f9j"}],["path",{d:"M6 17v1",key:"idyhc0"}],["path",{d:"M10 14H9",key:"m5fm2q"}],["path",{d:"M3 14H2",key:"19ot09"}],["path",{d:"m9 11-.88.88",key:"lhul2b"}],["path",{d:"M3.88 16.12 3 17",key:"169z9n"}],["path",{d:"m9 17-.88-.88",key:"5io96w"}],["path",{d:"M3.88 11.88 3 11",key:"1ynhy1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oh=e("FileDiffIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"M9 17h6",key:"r8uit2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uh=e("FileDigitIcon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"4",height:"6",x:"2",y:"12",rx:"2",key:"jm304g"}],["path",{d:"M10 12h2v6",key:"12zw74"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eh=e("FileDownIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zh=e("FileHeartIcon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2",key:"17k7jt"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10.29 10.7a2.43 2.43 0 0 0-2.66-.52c-.29.12-.56.3-.78.53l-.35.34-.35-.34a2.43 2.43 0 0 0-2.65-.53c-.3.12-.56.3-.79.53-.95.94-1 2.53.2 3.74L6.5 18l3.6-3.55c1.2-1.21 1.14-2.8.19-3.74Z",key:"1c1fso"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $h=e("FileImageIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"10",cy:"12",r:"2",key:"737tya"}],["path",{d:"m20 17-1.296-1.296a2.41 2.41 0 0 0-3.408 0L9 22",key:"wt3hpn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gh=e("FileInputIcon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 15h10",key:"jfw4w8"}],["path",{d:"m9 18 3-3-3-3",key:"112psh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nh=e("FileJson2Icon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"fq0c9t"}],["path",{d:"M8 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"4gibmv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wh=e("FileJsonIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 12a1 1 0 0 0-1 1v1a1 1 0 0 1-1 1 1 1 0 0 1 1 1v1a1 1 0 0 0 1 1",key:"1oajmo"}],["path",{d:"M14 18a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1 1 1 0 0 1-1-1v-1a1 1 0 0 0-1-1",key:"mpwhp6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xh=e("FileKey2Icon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6",key:"rc0qvx"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"m10 10-4.5 4.5",key:"7fwrp6"}],["path",{d:"m9 11 1 1",key:"wa6s5q"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kh=e("FileKeyIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["circle",{cx:"10",cy:"16",r:"2",key:"4ckbqe"}],["path",{d:"m16 10-4.5 4.5",key:"7p3ebg"}],["path",{d:"m15 11 1 1",key:"1bsyx3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jh=e("FileLineChartIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m16 13-3.5 3.5-2-2L8 17",key:"zz7yod"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yh=e("FileLock2Icon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v1",key:"jmtmu2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"5",x:"2",y:"13",rx:"1",key:"10y5wo"}],["path",{d:"M8 13v-2a2 2 0 1 0-4 0v2",key:"1pdxzg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qh=e("FileLockIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["rect",{width:"8",height:"6",x:"8",y:"12",rx:"1",key:"3yr8at"}],["path",{d:"M10 12v-2a2 2 0 1 1 4 0v2",key:"j4i8d"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const el=e("FileMinus2Icon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tl=e("FileMinusIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const al=e("FileMusicIcon",[["circle",{cx:"14",cy:"16",r:"2",key:"1bzzi3"}],["circle",{cx:"6",cy:"18",r:"2",key:"1fncim"}],["path",{d:"M4 12.4V4a2 2 0 0 1 2-2h8.5L20 7.5V20a2 2 0 0 1-2 2h-7.5",key:"skc018"}],["path",{d:"M8 18v-7.7L16 9v7",key:"1oie6o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ol=e("FileOutputIcon",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2",key:"1vk7w2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",key:"1jink5"}],["path",{d:"m5 11-3 3",key:"1dgrs4"}],["path",{d:"m5 17-3-3h10",key:"1mvvaf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I1=e("FilePenLineIcon",[["path",{d:"m18 5-3-3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2",key:"h0fsxq"}],["path",{d:"M8 18h1",key:"13wk12"}],["path",{d:"M18.4 9.6a2 2 0 1 1 3 3L17 17l-4 1 1-4Z",key:"dyo8mm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x1=e("FilePenIcon",[["path",{d:"M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10",key:"x7tsz2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z",key:"o3xyfb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cl=e("FilePieChartIcon",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M16 22h2a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3.5",key:"13ddob"}],["path",{d:"M4.017 11.512a6 6 0 1 0 8.466 8.475",key:"s6vs5t"}],["path",{d:"M8 16v-6a6 6 0 0 1 6 6z",key:"zfixgv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nl=e("FilePlus2Icon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M3 15h6",key:"4e2qda"}],["path",{d:"M6 12v6",key:"1u72j0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const il=e("FilePlusIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 15h6",key:"cctwl0"}],["path",{d:"M12 18v-6",key:"17g6i2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rl=e("FileQuestionIcon",[["path",{d:"M12 17h.01",key:"p32p05"}],["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",key:"1mlx9k"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dl=e("FileScanIcon",[["path",{d:"M20 10V7l-5-5H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h4",key:"1rdf37"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M16 14a2 2 0 0 0-2 2",key:"ceaadl"}],["path",{d:"M20 14a2 2 0 0 1 2 2",key:"1ny6zw"}],["path",{d:"M20 22a2 2 0 0 0 2-2",key:"1l9q4k"}],["path",{d:"M16 22a2 2 0 0 1-2-2",key:"1wqh5n"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hl=e("FileSearch2Icon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["circle",{cx:"11.5",cy:"14.5",r:"2.5",key:"1bq0ko"}],["path",{d:"M13.3 16.3 15 18",key:"2quom7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ll=e("FileSearchIcon",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"ms7g94"}],["path",{d:"m9 18-1.5-1.5",key:"1j6qii"}],["circle",{cx:"5",cy:"14",r:"3",key:"ufru5t"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sl=e("FileSlidersIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M10 11v2",key:"1s651w"}],["path",{d:"M8 17h8",key:"wh5c61"}],["path",{d:"M14 16v2",key:"12fp5e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yl=e("FileSpreadsheetIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 13h2",key:"yr2amv"}],["path",{d:"M14 13h2",key:"un5t4a"}],["path",{d:"M8 17h2",key:"2yhykz"}],["path",{d:"M14 17h2",key:"10kma7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pl=e("FileStackIcon",[["path",{d:"M21 7h-3a2 2 0 0 1-2-2V2",key:"9rb54x"}],["path",{d:"M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17Z",key:"1059l0"}],["path",{d:"M7 8v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H15",key:"16874u"}],["path",{d:"M3 12v8.8c0 .3.2.6.4.8.2.2.5.4.8.4H11",key:"k2ox98"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kl=e("FileSymlinkIcon",[["path",{d:"m10 18 3-3-3-3",key:"18f6ys"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 11V4a2 2 0 0 1 2-2h9l5 5v13a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",key:"50q2rw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ul=e("FileTerminalIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 16 2-2-2-2",key:"10vzyd"}],["path",{d:"M12 18h4",key:"1wd2n7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ml=e("FileTextIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ml=e("FileType2Icon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M2 13v-1h6v1",key:"1dh9dg"}],["path",{d:"M5 12v6",key:"150t9c"}],["path",{d:"M4 18h2",key:"1xrofg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vl=e("FileTypeIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M9 13v-1h6v1",key:"1bb014"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M11 18h2",key:"12mj7e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gl=e("FileUpIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"m15 15-3-3-3 3",key:"15xj92"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Il=e("FileVideo2Icon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["rect",{width:"8",height:"6",x:"2",y:"12",rx:"1",key:"1a6c1e"}],["path",{d:"m10 15.5 4 2.5v-6l-4 2.5",key:"t7cp39"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xl=e("FileVideoIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m10 11 5 3-5 3v-6Z",key:"7ntvm4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fl=e("FileVolume2Icon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M11.5 13.5a2.5 2.5 0 0 1 0 3",key:"1fccat"}],["path",{d:"M15 12a5 5 0 0 1 0 6",key:"ps46cm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ll=e("FileVolumeIcon",[["path",{d:"M11 11a5 5 0 0 1 0 6",key:"193qb2"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4.268 21A2 2 0 0 0 6 22h12a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3",key:"1x9xgf"}],["path",{d:"m7 10-3 2H2v4h2l3 2z",key:"1ln807"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wl=e("FileWarningIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cl=e("FileX2Icon",[["path",{d:"M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v4",key:"1pf5j1"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m8 12.5-5 5",key:"b853mi"}],["path",{d:"m3 12.5 5 5",key:"1qls4r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bl=e("FileXIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"m14.5 12.5-5 5",key:"b62r18"}],["path",{d:"m9.5 12.5 5 5",key:"1rk7el"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sl=e("FileIcon",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ql=e("FilesIcon",[["path",{d:"M20 7h-3a2 2 0 0 1-2-2V2",key:"x099mo"}],["path",{d:"M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z",key:"18t6ie"}],["path",{d:"M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8",key:"1nja0z"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Al=e("FilmIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hl=e("FilterXIcon",[["path",{d:"M13.013 3H2l8 9.46V19l4 2v-8.54l.9-1.055",key:"1fi1da"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zl=e("FilterIcon",[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vl=e("FingerprintIcon",[["path",{d:"M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4",key:"1nerag"}],["path",{d:"M14 13.12c0 2.38 0 6.38-1 8.88",key:"o46ks0"}],["path",{d:"M17.29 21.02c.12-.6.43-2.3.5-3.02",key:"ptglia"}],["path",{d:"M2 12a10 10 0 0 1 18-6",key:"ydlgp0"}],["path",{d:"M2 16h.01",key:"1gqxmh"}],["path",{d:"M21.8 16c.2-2 .131-5.354 0-6",key:"drycrb"}],["path",{d:"M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2",key:"1tidbn"}],["path",{d:"M8.65 22c.21-.66.45-1.32.57-2",key:"13wd9y"}],["path",{d:"M9 6.8a6 6 0 0 1 9 5.2v2",key:"1fr1j5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pl=e("FireExtinguisherIcon",[["path",{d:"M15 6.5V3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3.5",key:"sqyvz"}],["path",{d:"M9 18h8",key:"i7pszb"}],["path",{d:"M18 3h-3",key:"7idoqj"}],["path",{d:"M11 3a6 6 0 0 0-6 6v11",key:"1v5je3"}],["path",{d:"M5 13h4",key:"svpcxo"}],["path",{d:"M17 10a4 4 0 0 0-8 0v10a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2Z",key:"vsjego"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jl=e("FishOffIcon",[["path",{d:"M18 12.47v.03m0-.5v.47m-.475 5.056A6.744 6.744 0 0 1 15 18c-3.56 0-7.56-2.53-8.5-6 .348-1.28 1.114-2.433 2.121-3.38m3.444-2.088A8.802 8.802 0 0 1 15 6c3.56 0 6.06 2.54 7 6-.309 1.14-.786 2.177-1.413 3.058",key:"1j1hse"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33m7.48-4.372A9.77 9.77 0 0 1 16 6.07m0 11.86a9.77 9.77 0 0 1-1.728-3.618",key:"1q46z8"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98M8.53 3h5.27a2 2 0 0 1 1.98 1.67l.23 1.4M2 2l20 20",key:"1407gh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _l=e("FishSymbolIcon",[["path",{d:"M2 16s9-15 20-4C11 23 2 8 2 8",key:"h4oh4o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dl=e("FishIcon",[["path",{d:"M6.5 12c.94-3.46 4.94-6 8.5-6 3.56 0 6.06 2.54 7 6-.94 3.47-3.44 6-7 6s-7.56-2.53-8.5-6Z",key:"15baut"}],["path",{d:"M18 12v.5",key:"18hhni"}],["path",{d:"M16 17.93a9.77 9.77 0 0 1 0-11.86",key:"16dt7o"}],["path",{d:"M7 10.67C7 8 5.58 5.97 2.73 5.5c-1 1.5-1 5 .23 6.5-1.24 1.5-1.24 5-.23 6.5C5.58 18.03 7 16 7 13.33",key:"l9di03"}],["path",{d:"M10.46 7.26C10.2 5.88 9.17 4.24 8 3h5.8a2 2 0 0 1 1.98 1.67l.23 1.4",key:"1kjonw"}],["path",{d:"m16.01 17.93-.23 1.4A2 2 0 0 1 13.8 21H9.5a5.96 5.96 0 0 0 1.49-3.98",key:"1zlm23"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bl=e("FlagOffIcon",[["path",{d:"M8 2c3 0 5 2 8 2s4-1 4-1v11",key:"9rwyz9"}],["path",{d:"M4 22V4",key:"1plyxx"}],["path",{d:"M4 15s1-1 4-1 5 2 8 2",key:"1myooe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fl=e("FlagTriangleLeftIcon",[["path",{d:"M17 22V2L7 7l10 5",key:"1rmf0r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tl=e("FlagTriangleRightIcon",[["path",{d:"M7 22V2l10 5-10 5",key:"17n18y"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rl=e("FlagIcon",[["path",{d:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z",key:"i9b6wo"}],["line",{x1:"4",x2:"4",y1:"22",y2:"15",key:"1cm3nv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ol=e("FlameKindlingIcon",[["path",{d:"M12 2c1 3 2.5 3.5 3.5 4.5A5 5 0 0 1 17 10a5 5 0 1 1-10 0c0-.3 0-.6.1-.9a2 2 0 1 0 3.3-2C8 4.5 11 2 12 2Z",key:"1ir223"}],["path",{d:"m5 22 14-4",key:"1brv4h"}],["path",{d:"m5 18 14 4",key:"lgyyje"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ul=e("FlameIcon",[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const El=e("FlashlightOffIcon",[["path",{d:"M16 16v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4",key:"1r120k"}],["path",{d:"M7 2h11v4c0 2-2 2-2 4v1",key:"dz1920"}],["line",{x1:"11",x2:"18",y1:"6",y2:"6",key:"bi1vpe"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zl=e("FlashlightIcon",[["path",{d:"M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z",key:"1orkel"}],["line",{x1:"6",x2:"18",y1:"6",y2:"6",key:"1z11jq"}],["line",{x1:"12",x2:"12",y1:"12",y2:"12",key:"1f4yc1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $l=e("FlaskConicalOffIcon",[["path",{d:"M10 10 4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-1.272-2.542",key:"59ek9y"}],["path",{d:"M10 2v2.343",key:"15t272"}],["path",{d:"M14 2v6.343",key:"sxr80q"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h9",key:"t5njau"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gl=e("FlaskConicalIcon",[["path",{d:"M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2",key:"pzvekw"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nl=e("FlaskRoundIcon",[["path",{d:"M10 2v7.31",key:"5d1hyh"}],["path",{d:"M14 9.3V1.99",key:"14k4l0"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14 9.3a6.5 6.5 0 1 1-4 0",key:"1r8fvy"}],["path",{d:"M5.52 16h12.96",key:"46hh1i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wl=e("FlipHorizontal2Icon",[["path",{d:"m3 7 5 5-5 5V7",key:"couhi7"}],["path",{d:"m21 7-5 5 5 5V7",key:"6ouia7"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xl=e("FlipHorizontalIcon",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h3",key:"1i73f7"}],["path",{d:"M16 3h3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-3",key:"saxlbk"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 2v2",key:"tus03m"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kl=e("FlipVertical2Icon",[["path",{d:"m17 3-5 5-5-5h10",key:"1ftt6x"}],["path",{d:"m17 21-5-5-5 5h10",key:"1m0wmu"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jl=e("FlipVerticalIcon",[["path",{d:"M21 8V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3",key:"14bfxa"}],["path",{d:"M21 16v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3",key:"14rx03"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yl=e("Flower2Icon",[["path",{d:"M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1",key:"3pnvol"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M12 10v12",key:"6ubwww"}],["path",{d:"M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z",key:"9hd38g"}],["path",{d:"M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z",key:"ufn41s"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ql=e("FlowerIcon",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 16.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5 4.5 4.5 0 1 1-4.5 4.5",key:"14wa3c"}],["path",{d:"M12 7.5V9",key:"1oy5b0"}],["path",{d:"M7.5 12H9",key:"eltsq1"}],["path",{d:"M16.5 12H15",key:"vk5kw4"}],["path",{d:"M12 16.5V15",key:"k7eayi"}],["path",{d:"m8 8 1.88 1.88",key:"nxy4qf"}],["path",{d:"M14.12 9.88 16 8",key:"1lst6k"}],["path",{d:"m8 16 1.88-1.88",key:"h2eex1"}],["path",{d:"M14.12 14.12 16 16",key:"uqkrx3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const es=e("FocusIcon",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ts=e("FoldHorizontalIcon",[["path",{d:"M2 12h6",key:"1wqiqv"}],["path",{d:"M22 12h-6",key:"1eg9hc"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 9-3 3 3 3",key:"12ol22"}],["path",{d:"m5 15 3-3-3-3",key:"1kdhjc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const as=e("FoldVerticalIcon",[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3-3-3 3",key:"e37ymu"}],["path",{d:"m15 5-3 3-3-3",key:"19d6lf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const os=e("FolderArchiveIcon",[["circle",{cx:"15",cy:"19",r:"2",key:"u2pros"}],["path",{d:"M20.9 19.8A2 2 0 0 0 22 18V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2h5.1",key:"1jj40k"}],["path",{d:"M15 11v-1",key:"cntcp"}],["path",{d:"M15 17v-2",key:"1279jj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cs=e("FolderCheckIcon",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9 13 2 2 4-4",key:"6343dt"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ns=e("FolderClockIcon",[["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}],["path",{d:"M7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2",key:"1urifu"}],["path",{d:"M16 14v2l1 1",key:"xth2jh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const is=e("FolderClosedIcon",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M2 10h20",key:"1ir3d8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f1=e("FolderCogIcon",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"M10.3 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.3",key:"1k8050"}],["path",{d:"m21.7 19.4-.9-.3",key:"1qgwi9"}],["path",{d:"m15.2 16.9-.9-.3",key:"1t7mvx"}],["path",{d:"m16.6 21.7.3-.9",key:"1j67ps"}],["path",{d:"m19.1 15.2.3-.9",key:"18r7jp"}],["path",{d:"m19.6 21.7-.4-1",key:"z2vh2"}],["path",{d:"m16.8 15.3-.4-1",key:"1ei7r6"}],["path",{d:"m14.3 19.6 1-.4",key:"11sv9r"}],["path",{d:"m20.7 16.8 1-.4",key:"19m87a"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rs=e("FolderDotIcon",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"1",key:"49l61u"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ds=e("FolderDownIcon",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m15 13-3 3-3-3",key:"6j2sf0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hs=e("FolderGit2Icon",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v5",key:"1w6njk"}],["circle",{cx:"13",cy:"12",r:"2",key:"1j92g6"}],["path",{d:"M18 19c-2.8 0-5-2.2-5-5v8",key:"pkpw2h"}],["circle",{cx:"20",cy:"19",r:"2",key:"1obnsp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ls=e("FolderGitIcon",[["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M14 13h3",key:"1dgedf"}],["path",{d:"M7 13h3",key:"1pygq7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ss=e("FolderHeartIcon",[["path",{d:"M11 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v1.5",key:"6hud8k"}],["path",{d:"M13.9 17.45c-1.2-1.2-1.14-2.8-.2-3.73a2.43 2.43 0 0 1 3.44 0l.36.34.34-.34a2.43 2.43 0 0 1 3.45-.01v0c.95.95 1 2.53-.2 3.74L17.5 21Z",key:"vgq86i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ys=e("FolderInputIcon",[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-1",key:"fm4g5t"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m9 16 3-3-3-3",key:"6m91ic"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ps=e("FolderKanbanIcon",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ks=e("FolderKeyIcon",[["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2",key:"3hgo9p"}],["path",{d:"m22 14-4.5 4.5",key:"1ef6z8"}],["path",{d:"m21 15 1 1",key:"1ejcpy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const us=e("FolderLockIcon",[["rect",{width:"8",height:"5",x:"14",y:"17",rx:"1",key:"19aais"}],["path",{d:"M10 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v2.5",key:"1w6v7t"}],["path",{d:"M20 17v-2a2 2 0 1 0-4 0v2",key:"pwaxnr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ms=e("FolderMinusIcon",[["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ms=e("FolderOpenDotIcon",[["path",{d:"m6 14 1.45-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.55 6a2 2 0 0 1-1.94 1.5H4a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2h3.93a2 2 0 0 1 1.66.9l.82 1.2a2 2 0 0 0 1.66.9H18a2 2 0 0 1 2 2v2",key:"1nmvlm"}],["circle",{cx:"14",cy:"15",r:"1",key:"1gm4qj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vs=e("FolderOpenIcon",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gs=e("FolderOutputIcon",[["path",{d:"M2 7.5V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-1.5",key:"1yk7aj"}],["path",{d:"M2 13h10",key:"pgb2dq"}],["path",{d:"m5 10-3 3 3 3",key:"1r8ie0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L1=e("FolderPenIcon",[["path",{d:"M8.4 10.6a2 2 0 0 1 3 3L6 19l-4 1 1-4Z",key:"dakro8"}],["path",{d:"M2 11.5V5a2 2 0 0 1 2-2h3.9c.7 0 1.3.3 1.7.9l.8 1.2c.4.6 1 .9 1.7.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-9.5",key:"a8xqs0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Is=e("FolderPlusIcon",[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xs=e("FolderRootIcon",[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}],["path",{d:"M12 15v5",key:"11xva1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fs=e("FolderSearch2Icon",[["circle",{cx:"11.5",cy:"12.5",r:"2.5",key:"1ea5ju"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M13.3 14.3 15 16",key:"1y4v1n"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ls=e("FolderSearchIcon",[["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"M10.7 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v4.1",key:"1bw5m7"}],["path",{d:"m21 21-1.5-1.5",key:"3sg1j"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ws=e("FolderSymlinkIcon",[["path",{d:"M2 9V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h7",key:"x1c07l"}],["path",{d:"m8 16 3-3-3-3",key:"rlqrt1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cs=e("FolderSyncIcon",[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5",key:"1dkoa9"}],["path",{d:"M12 10v4h4",key:"1czhmt"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5",key:"lvuxfi"}],["path",{d:"M22 22v-4h-4",key:"1ewp4q"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5",key:"14ync0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bs=e("FolderTreeIcon",[["path",{d:"M20 10a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2.5a1 1 0 0 1-.8-.4l-.9-1.2A1 1 0 0 0 15 3h-2a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"hod4my"}],["path",{d:"M20 21a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-2.9a1 1 0 0 1-.88-.55l-.42-.85a1 1 0 0 0-.92-.6H13a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1Z",key:"w4yl2u"}],["path",{d:"M3 5a2 2 0 0 0 2 2h3",key:"f2jnh7"}],["path",{d:"M3 3v13a2 2 0 0 0 2 2h3",key:"k8epm1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ss=e("FolderUpIcon",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"m9 13 3-3 3 3",key:"1pxg3c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qs=e("FolderXIcon",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}],["path",{d:"m9.5 10.5 5 5",key:"ra9qjz"}],["path",{d:"m14.5 10.5-5 5",key:"l2rkpq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K2=e("FolderIcon",[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const As=e("FoldersIcon",[["path",{d:"M20 17a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3.9a2 2 0 0 1-1.69-.9l-.81-1.2a2 2 0 0 0-1.67-.9H8a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2Z",key:"4u7rpt"}],["path",{d:"M2 8v11a2 2 0 0 0 2 2h14",key:"1eicx1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hs=e("FootprintsIcon",[["path",{d:"M4 16v-2.38C4 11.5 2.97 10.5 3 8c.03-2.72 1.49-6 4.5-6C9.37 2 10 3.8 10 5.5c0 3.11-2 5.66-2 8.68V16a2 2 0 1 1-4 0Z",key:"1dudjm"}],["path",{d:"M20 20v-2.38c0-2.12 1.03-3.12 1-5.62-.03-2.72-1.49-6-4.5-6C14.63 6 14 7.8 14 9.5c0 3.11 2 5.66 2 8.68V20a2 2 0 1 0 4 0Z",key:"l2t8xc"}],["path",{d:"M16 17h4",key:"1dejxt"}],["path",{d:"M4 13h4",key:"1bwh8b"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zs=e("ForkliftIcon",[["path",{d:"M12 12H5a2 2 0 0 0-2 2v5",key:"7zsz91"}],["circle",{cx:"13",cy:"19",r:"2",key:"wjnkru"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M8 19h3m5-17v17h6M6 12V7c0-1.1.9-2 2-2h3l5 5",key:"13bk1p"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vs=e("ForwardIcon",[["polyline",{points:"15 17 20 12 15 7",key:"1w3sku"}],["path",{d:"M4 18v-2a4 4 0 0 1 4-4h12",key:"jmiej9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ps=e("FrameIcon",[["line",{x1:"22",x2:"2",y1:"6",y2:"6",key:"15w7dq"}],["line",{x1:"22",x2:"2",y1:"18",y2:"18",key:"1ip48p"}],["line",{x1:"6",x2:"6",y1:"2",y2:"22",key:"a2lnyx"}],["line",{x1:"18",x2:"18",y1:"2",y2:"22",key:"8vb6jd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const js=e("FramerIcon",[["path",{d:"M5 16V9h14V2H5l14 14h-7m-7 0 7 7v-7m-7 0h7",key:"1a2nng"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _s=e("FrownIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M16 16s-1.5-2-4-2-4 2-4 2",key:"epbg0q"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ds=e("FuelIcon",[["line",{x1:"3",x2:"15",y1:"22",y2:"22",key:"xegly4"}],["line",{x1:"4",x2:"14",y1:"9",y2:"9",key:"xcnuvu"}],["path",{d:"M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18",key:"16j0yd"}],["path",{d:"M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5",key:"8ur5zv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bs=e("FullscreenIcon",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["rect",{width:"10",height:"8",x:"7",y:"8",rx:"1",key:"vys8me"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fs=e("GalleryHorizontalEndIcon",[["path",{d:"M2 7v10",key:"a2pl2d"}],["path",{d:"M6 5v14",key:"1kq3d7"}],["rect",{width:"12",height:"18",x:"10",y:"3",rx:"2",key:"13i7bc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ts=e("GalleryHorizontalIcon",[["path",{d:"M2 3v18",key:"pzttux"}],["rect",{width:"12",height:"18",x:"6",y:"3",rx:"2",key:"btr8bg"}],["path",{d:"M22 3v18",key:"6jf3v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rs=e("GalleryThumbnailsIcon",[["rect",{width:"18",height:"14",x:"3",y:"3",rx:"2",key:"74y24f"}],["path",{d:"M4 21h1",key:"16zlid"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M19 21h1",key:"edywat"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Os=e("GalleryVerticalEndIcon",[["path",{d:"M7 2h10",key:"nczekb"}],["path",{d:"M5 6h14",key:"u2x4p"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2",key:"l0tzu3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Us=e("GalleryVerticalIcon",[["path",{d:"M3 2h18",key:"15qxfx"}],["rect",{width:"18",height:"12",x:"3",y:"6",rx:"2",key:"1439r6"}],["path",{d:"M3 22h18",key:"8prr45"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Es=e("Gamepad2Icon",[["line",{x1:"6",x2:"10",y1:"11",y2:"11",key:"1gktln"}],["line",{x1:"8",x2:"8",y1:"9",y2:"13",key:"qnk9ow"}],["line",{x1:"15",x2:"15.01",y1:"12",y2:"12",key:"krot7o"}],["line",{x1:"18",x2:"18.01",y1:"10",y2:"10",key:"1lcuu1"}],["path",{d:"M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z",key:"mfqc10"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zs=e("GamepadIcon",[["line",{x1:"6",x2:"10",y1:"12",y2:"12",key:"161bw2"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"15",x2:"15.01",y1:"13",y2:"13",key:"dqpgro"}],["line",{x1:"18",x2:"18.01",y1:"11",y2:"11",key:"meh2c"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $s=e("GanttChartIcon",[["path",{d:"M8 6h10",key:"9lnwnk"}],["path",{d:"M6 12h9",key:"1g9pqf"}],["path",{d:"M11 18h7",key:"c8dzvl"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gs=e("GaugeIcon",[["path",{d:"m12 14 4-4",key:"9kzdfg"}],["path",{d:"M3.34 19a10 10 0 1 1 17.32 0",key:"19p75a"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ns=e("GavelIcon",[["path",{d:"m14.5 12.5-8 8a2.119 2.119 0 1 1-3-3l8-8",key:"15492f"}],["path",{d:"m16 16 6-6",key:"vzrcl6"}],["path",{d:"m8 8 6-6",key:"18bi4p"}],["path",{d:"m9 7 8 8",key:"5jnvq1"}],["path",{d:"m21 11-8-8",key:"z4y7zo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ws=e("GemIcon",[["path",{d:"M6 3h12l4 6-10 13L2 9Z",key:"1pcd5k"}],["path",{d:"M11 3 8 9l4 13 4-13-3-6",key:"1fcu3u"}],["path",{d:"M2 9h20",key:"16fsjt"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xs=e("GhostIcon",[["path",{d:"M9 10h.01",key:"qbtxuw"}],["path",{d:"M15 10h.01",key:"1qmjsl"}],["path",{d:"M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",key:"uwwb07"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ks=e("GiftIcon",[["rect",{x:"3",y:"8",width:"18",height:"4",rx:"1",key:"bkv52"}],["path",{d:"M12 8v13",key:"1c76mn"}],["path",{d:"M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7",key:"6wjy6b"}],["path",{d:"M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",key:"1ihvrl"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Js=e("GitBranchPlusIcon",[["path",{d:"M6 3v12",key:"qpgusn"}],["path",{d:"M18 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"1d02ji"}],["path",{d:"M6 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",key:"chk6ph"}],["path",{d:"M15 6a9 9 0 0 0-9 9",key:"or332x"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ys=e("GitBranchIcon",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w1=e("GitCommitHorizontalIcon",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["line",{x1:"3",x2:"9",y1:"12",y2:"12",key:"1dyftd"}],["line",{x1:"15",x2:"21",y1:"12",y2:"12",key:"oup4p8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qs=e("GitCommitVerticalIcon",[["path",{d:"M12 3v6",key:"1holv5"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M12 15v6",key:"a9ows0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=e("GitCompareArrowsIcon",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"M12 18H7a2 2 0 0 1-2-2V9",key:"16sdep"}],["path",{d:"m9 15 3 3-3 3",key:"1m3kbl"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=e("GitCompareIcon",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["path",{d:"M11 18H8a2 2 0 0 1-2-2V9",key:"19pyzm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=e("GitForkIcon",[["circle",{cx:"12",cy:"18",r:"3",key:"1mpf1b"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["path",{d:"M18 9v2c0 .6-.4 1-1 1H7c-.6 0-1-.4-1-1V9",key:"1uq4wg"}],["path",{d:"M12 12v3",key:"158kv8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=e("GitGraphIcon",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v6",key:"158jrl"}],["circle",{cx:"5",cy:"18",r:"3",key:"104gr9"}],["path",{d:"M12 3v18",key:"108xh3"}],["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M16 15.7A9 9 0 0 0 19 9",key:"1e3vqb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=e("GitMergeIcon",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 21V9a9 9 0 0 0 9 9",key:"7kw0sc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=e("GitPullRequestArrowIcon",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["circle",{cx:"19",cy:"18",r:"3",key:"1qljk2"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v7",key:"1yj91y"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=e("GitPullRequestClosedIcon",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"m21 3-6 6",key:"16nqsk"}],["path",{d:"m21 9-6-6",key:"9j17rh"}],["path",{d:"M18 11.5V15",key:"65xf6f"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=e("GitPullRequestCreateArrowIcon",[["circle",{cx:"5",cy:"6",r:"3",key:"1qnov2"}],["path",{d:"M5 9v12",key:"ih889a"}],["path",{d:"m15 9-3-3 3-3",key:"1lwv8l"}],["path",{d:"M12 6h5a2 2 0 0 1 2 2v3",key:"1rbwk6"}],["path",{d:"M19 15v6",key:"10aioa"}],["path",{d:"M22 18h-6",key:"1d5gi5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=e("GitPullRequestCreateIcon",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M6 9v12",key:"1sc30k"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v3",key:"1jb6z3"}],["path",{d:"M18 15v6",key:"9wciyi"}],["path",{d:"M21 18h-6",key:"139f0c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=e("GitPullRequestDraftIcon",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M18 6V5",key:"1oao2s"}],["path",{d:"M18 11v-1",key:"11c8tz"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=e("GitPullRequestIcon",[["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M13 6h3a2 2 0 0 1 2 2v7",key:"1yeb86"}],["line",{x1:"6",x2:"6",y1:"9",y2:"21",key:"rroup"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=e("GithubIcon",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=e("GitlabIcon",[["path",{d:"m22 13.29-3.33-10a.42.42 0 0 0-.14-.18.38.38 0 0 0-.22-.11.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18l-2.26 6.67H8.32L6.1 3.26a.42.42 0 0 0-.1-.18.38.38 0 0 0-.26-.08.39.39 0 0 0-.23.07.42.42 0 0 0-.14.18L2 13.29a.74.74 0 0 0 .27.83L12 21l9.69-6.88a.71.71 0 0 0 .31-.83Z",key:"148pdi"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=e("GlassWaterIcon",[["path",{d:"M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z",key:"48rfw3"}],["path",{d:"M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0",key:"mjntcy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=e("GlassesIcon",[["circle",{cx:"6",cy:"15",r:"4",key:"vux9w4"}],["circle",{cx:"18",cy:"15",r:"4",key:"18o8ve"}],["path",{d:"M14 15a2 2 0 0 0-2-2 2 2 0 0 0-2 2",key:"1ag4bs"}],["path",{d:"M2.5 13 5 7c.7-1.3 1.4-2 3-2",key:"1hm1gs"}],["path",{d:"M21.5 13 19 7c-.7-1.3-1.5-2-3-2",key:"1r31ai"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=e("GlobeLockIcon",[["path",{d:"M15.686 15A14.5 14.5 0 0 1 12 22a14.5 14.5 0 0 1 0-20 10 10 0 1 0 9.542 13",key:"qkt0x6"}],["path",{d:"M2 12h8.5",key:"ovaggd"}],["path",{d:"M20 6V4a2 2 0 1 0-4 0v2",key:"1of5e8"}],["rect",{width:"8",height:"5",x:"14",y:"6",rx:"1",key:"1fmf51"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=e("GlobeIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=e("GoalIcon",[["path",{d:"M12 13V2l8 4-8 4",key:"5wlwwj"}],["path",{d:"M20.561 10.222a9 9 0 1 1-12.55-5.29",key:"1c0wjv"}],["path",{d:"M8.002 9.997a5 5 0 1 0 8.9 2.02",key:"gb1g7m"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=e("GrabIcon",[["path",{d:"M18 11.5V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4",key:"n5nng"}],["path",{d:"M14 10V8a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2",key:"185i9d"}],["path",{d:"M10 9.9V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5",key:"11pz95"}],["path",{d:"M6 14v0a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"16yk7l"}],["path",{d:"M18 11v0a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-4a8 8 0 0 1-8-8 2 2 0 1 1 4 0",key:"nzvb1c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=e("GraduationCapIcon",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=e("GrapeIcon",[["path",{d:"M22 5V2l-5.89 5.89",key:"1eenpo"}],["circle",{cx:"16.6",cy:"15.89",r:"3",key:"xjtalx"}],["circle",{cx:"8.11",cy:"7.4",r:"3",key:"u2fv6i"}],["circle",{cx:"12.35",cy:"11.65",r:"3",key:"i6i8g7"}],["circle",{cx:"13.91",cy:"5.85",r:"3",key:"6ye0dv"}],["circle",{cx:"18.15",cy:"10.09",r:"3",key:"snx9no"}],["circle",{cx:"6.56",cy:"13.2",r:"3",key:"17x4xg"}],["circle",{cx:"10.8",cy:"17.44",r:"3",key:"1hogw9"}],["circle",{cx:"5",cy:"19",r:"3",key:"1sn6vo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=e("Grid2x2CheckIcon",[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=e("Grid2x2XIcon",[["path",{d:"M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3",key:"11za1p"}],["path",{d:"m16 16 5 5",key:"8tpb07"}],["path",{d:"m16 21 5-5",key:"193jll"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C1=e("Grid2x2Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M12 3v18",key:"108xh3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ne=e("Grid3x3Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=e("GripHorizontalIcon",[["circle",{cx:"12",cy:"9",r:"1",key:"124mty"}],["circle",{cx:"19",cy:"9",r:"1",key:"1ruzo2"}],["circle",{cx:"5",cy:"9",r:"1",key:"1a8b28"}],["circle",{cx:"12",cy:"15",r:"1",key:"1e56xg"}],["circle",{cx:"19",cy:"15",r:"1",key:"1a92ep"}],["circle",{cx:"5",cy:"15",r:"1",key:"5r1jwy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=e("GripVerticalIcon",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"9",cy:"5",r:"1",key:"hp0tcf"}],["circle",{cx:"9",cy:"19",r:"1",key:"fkjjf6"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["circle",{cx:"15",cy:"5",r:"1",key:"19l28e"}],["circle",{cx:"15",cy:"19",r:"1",key:"f4zoj3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=e("GripIcon",[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"19",cy:"5",r:"1",key:"w8mnmm"}],["circle",{cx:"5",cy:"5",r:"1",key:"lttvr7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"19",cy:"12",r:"1",key:"1wjl8i"}],["circle",{cx:"5",cy:"12",r:"1",key:"1pcz8c"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}],["circle",{cx:"19",cy:"19",r:"1",key:"shf9b7"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=e("GroupIcon",[["path",{d:"M3 7V5c0-1.1.9-2 2-2h2",key:"adw53z"}],["path",{d:"M17 3h2c1.1 0 2 .9 2 2v2",key:"an4l38"}],["path",{d:"M21 17v2c0 1.1-.9 2-2 2h-2",key:"144t0e"}],["path",{d:"M7 21H5c-1.1 0-2-.9-2-2v-2",key:"rtnfgi"}],["rect",{width:"7",height:"5",x:"7",y:"7",rx:"1",key:"1eyiv7"}],["rect",{width:"7",height:"5",x:"10",y:"12",rx:"1",key:"1qlmkx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=e("GuitarIcon",[["path",{d:"m20 7 1.7-1.7a1 1 0 0 0 0-1.4l-1.6-1.6a1 1 0 0 0-1.4 0L17 4v3Z",key:"15ixgv"}],["path",{d:"m17 7-5.1 5.1",key:"l9guh7"}],["circle",{cx:"11.5",cy:"12.5",r:".5",fill:"currentColor",key:"16onso"}],["path",{d:"M6 12a2 2 0 0 0 1.8-1.2l.4-.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4",key:"x9fguj"}],["path",{d:"m6 16 2 2",key:"16qmzd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qy=e("HamIcon",[["path",{d:"M13.144 21.144A7.274 10.445 45 1 0 2.856 10.856",key:"1k1t7q"}],["path",{d:"M13.144 21.144A7.274 4.365 45 0 0 2.856 10.856a7.274 4.365 45 0 0 10.288 10.288",key:"153t1g"}],["path",{d:"M16.565 10.435 18.6 8.4a2.501 2.501 0 1 0 1.65-4.65 2.5 2.5 0 1 0-4.66 1.66l-2.024 2.025",key:"gzrt0n"}],["path",{d:"m8.5 16.5-1-1",key:"otr954"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=e("HammerIcon",[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",key:"eefl8a"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"b7pghm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hy=e("HandCoinsIcon",[["path",{d:"M11 15h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 17",key:"geh8rc"}],["path",{d:"m7 21 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"1fto5m"}],["path",{d:"m2 16 6 6",key:"1pfhp9"}],["circle",{cx:"16",cy:"9",r:"2.9",key:"1n0dlu"}],["circle",{cx:"6",cy:"5",r:"3",key:"151irh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=e("HandHeartIcon",[["path",{d:"M11 14h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 16",key:"1ifwr1"}],["path",{d:"m7 20 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"17abbs"}],["path",{d:"m2 15 6 6",key:"10dquu"}],["path",{d:"M19.5 8.5c.7-.7 1.5-1.6 1.5-2.7A2.73 2.73 0 0 0 16 4a2.78 2.78 0 0 0-5 1.8c0 1.2.8 2 1.5 2.8L16 12Z",key:"1h3036"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b1=e("HandHelpingIcon",[["path",{d:"M11 12h2a2 2 0 1 0 0-4h-3c-.6 0-1.1.2-1.4.6L3 14",key:"1j4xps"}],["path",{d:"m7 18 1.6-1.4c.3-.4.8-.6 1.4-.6h4c1.1 0 2.1-.4 2.8-1.2l4.6-4.4a2 2 0 0 0-2.75-2.91l-4.2 3.9",key:"uospg8"}],["path",{d:"m2 13 6 6",key:"16e5sb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vy=e("HandMetalIcon",[["path",{d:"M18 12.5V10a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1.4",key:"7eki13"}],["path",{d:"M14 11V9a2 2 0 1 0-4 0v2",key:"94qvcw"}],["path",{d:"M10 10.5V5a2 2 0 1 0-4 0v9",key:"m1ah89"}],["path",{d:"m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5",key:"t1skq1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=e("HandPlatterIcon",[["path",{d:"M12 3V2",key:"ar7q03"}],["path",{d:"M5 10a7.1 7.1 0 0 1 14 0",key:"1t9y3n"}],["path",{d:"M4 10h16",key:"img6z1"}],["path",{d:"M2 14h12a2 2 0 1 1 0 4h-2",key:"loyjft"}],["path",{d:"m15.4 17.4 3.2-2.8a2 2 0 0 1 2.8 2.9l-3.6 3.3c-.7.8-1.7 1.2-2.8 1.2h-4c-1.1 0-2.1-.4-2.8-1.2L5 18",key:"1rixiy"}],["path",{d:"M5 14v7H2",key:"3mujks"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jy=e("HandIcon",[["path",{d:"M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"aigmz7"}],["path",{d:"M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2",key:"1n6bmn"}],["path",{d:"M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8",key:"a9iiix"}],["path",{d:"M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"1s1gnw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=e("HandshakeIcon",[["path",{d:"m11 17 2 2a1 1 0 1 0 3-3",key:"efffak"}],["path",{d:"m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4",key:"9pr0kb"}],["path",{d:"m21 3 1 11h-2",key:"1tisrp"}],["path",{d:"M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3",key:"1uvwmv"}],["path",{d:"M3 4h8",key:"1ep09j"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=e("HardDriveDownloadIcon",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=e("HardDriveUploadIcon",[["path",{d:"m16 6-4-4-4 4",key:"13yo43"}],["path",{d:"M12 2v8",key:"1q4o3n"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M10 18h.01",key:"h775k"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fy=e("HardDriveIcon",[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=e("HardHatIcon",[["path",{d:"M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z",key:"1dej2m"}],["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6h0",key:"1uc279"}],["path",{d:"M14 6h0a6 6 0 0 1 6 6v3",key:"1j9mnm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=e("HashIcon",[["line",{x1:"4",x2:"20",y1:"9",y2:"9",key:"4lhtct"}],["line",{x1:"4",x2:"20",y1:"15",y2:"15",key:"vyu0kd"}],["line",{x1:"10",x2:"8",y1:"3",y2:"21",key:"1ggp8o"}],["line",{x1:"16",x2:"14",y1:"3",y2:"21",key:"weycgp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=e("HazeIcon",[["path",{d:"m5.2 6.2 1.4 1.4",key:"17imol"}],["path",{d:"M2 13h2",key:"13gyu8"}],["path",{d:"M20 13h2",key:"16rner"}],["path",{d:"m17.4 7.6 1.4-1.4",key:"t4xlah"}],["path",{d:"M22 17H2",key:"1gtaj3"}],["path",{d:"M22 21H2",key:"1gy6en"}],["path",{d:"M16 13a4 4 0 0 0-8 0",key:"1dyczq"}],["path",{d:"M12 5V2.5",key:"1vytko"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=e("HdmiPortIcon",[["path",{d:"M22 9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h1l2 2h12l2-2h1a1 1 0 0 0 1-1Z",key:"2128wb"}],["path",{d:"M7.5 12h9",key:"1t0ckc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=e("Heading1Icon",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"m17 12 3-2v8",key:"1hhhft"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zy=e("Heading2Icon",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M21 18h-4c0-4 4-3 4-6 0-1.5-2-2.5-4-1",key:"9jr5yi"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $y=e("Heading3Icon",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17.5 10.5c1.7-1 3.5 0 3.5 1.5a2 2 0 0 1-2 2",key:"68ncm8"}],["path",{d:"M17 17.5c2 1.5 4 .3 4-1.5a2 2 0 0 0-2-2",key:"1ejuhz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gy=e("Heading4Icon",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 10v4h4",key:"13sv97"}],["path",{d:"M21 10v8",key:"1kdml4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=e("Heading5Icon",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["path",{d:"M17 13v-3h4",key:"1nvgqp"}],["path",{d:"M17 17.7c.4.2.8.3 1.3.3 1.5 0 2.7-1.1 2.7-2.5S19.8 13 18.3 13H17",key:"2nebdn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wy=e("Heading6Icon",[["path",{d:"M4 12h8",key:"17cfdx"}],["path",{d:"M4 18V6",key:"1rz3zl"}],["path",{d:"M12 18V6",key:"zqpxq5"}],["circle",{cx:"19",cy:"16",r:"2",key:"15mx69"}],["path",{d:"M20 10c-2 2-3 3.5-3 6",key:"f35dl0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xy=e("HeadingIcon",[["path",{d:"M6 12h12",key:"8npq4p"}],["path",{d:"M6 20V4",key:"1w1bmo"}],["path",{d:"M18 20V4",key:"o2hl4u"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ky=e("HeadphonesIcon",[["path",{d:"M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3",key:"1xhozi"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jy=e("HeadsetIcon",[["path",{d:"M3 11h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-5Zm0 0a9 9 0 1 1 18 0m0 0v5a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3Z",key:"12oyoe"}],["path",{d:"M21 16v2a4 4 0 0 1-4 4h-5",key:"1x7m43"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yy=e("HeartCrackIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"m12 13-1-1 2-2-3-3 2-2",key:"xjdxli"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qy=e("HeartHandshakeIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08v0c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"12sd6o"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ep=e("HeartOffIcon",[["line",{x1:"2",y1:"2",x2:"22",y2:"22",key:"1w4vcy"}],["path",{d:"M16.5 16.5 12 21l-7-7c-1.5-1.45-3-3.2-3-5.5a5.5 5.5 0 0 1 2.14-4.35",key:"3mpagl"}],["path",{d:"M8.76 3.1c1.15.22 2.13.78 3.24 1.9 1.5-1.5 2.74-2 4.5-2A5.5 5.5 0 0 1 22 8.5c0 2.12-1.3 3.78-2.67 5.17",key:"1gh3v3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tp=e("HeartPulseIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ap=e("HeartIcon",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const op=e("HeaterIcon",[["path",{d:"M11 8c2-3-2-3 0-6",key:"1ldv5m"}],["path",{d:"M15.5 8c2-3-2-3 0-6",key:"1otqoz"}],["path",{d:"M6 10h.01",key:"1lbq93"}],["path",{d:"M6 14h.01",key:"zudwn7"}],["path",{d:"M10 16v-4",key:"1c25yv"}],["path",{d:"M14 16v-4",key:"1dkbt8"}],["path",{d:"M18 16v-4",key:"1yg9me"}],["path",{d:"M20 6a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h3",key:"1ubg90"}],["path",{d:"M5 20v2",key:"1abpe8"}],["path",{d:"M19 20v2",key:"kqn6ft"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cp=e("HexagonIcon",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const np=e("HighlighterIcon",[["path",{d:"m9 11-6 6v3h9l3-3",key:"1a3l36"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4",key:"14a9rk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ip=e("HistoryIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M12 7v5l4 2",key:"1fdv2h"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rp=e("HomeIcon",[["path",{d:"m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"y5dka4"}],["polyline",{points:"9 22 9 12 15 12 15 22",key:"e2us08"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dp=e("HopOffIcon",[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.28.01.53-.09.7-.27",key:"qyzcap"}],["path",{d:"M11.14 20.57c.52.24 2.44 1.12 4.08 1.37.46.06.86-.25.9-.71.12-1.52-.3-3.43-.5-4.28",key:"y078lb"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .7-.26",key:"1utre3"}],["path",{d:"M17.99 5.52a20.83 20.83 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-1.17.1-2.5.02-3.9-.25",key:"17o9hm"}],["path",{d:"M20.57 11.14c.24.52 1.12 2.44 1.37 4.08.04.3-.08.59-.31.75",key:"1d1n4p"}],["path",{d:"M4.93 4.93a10 10 0 0 0-.67 13.4c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.85.85 0 0 0 .48-.24",key:"9uv3tt"}],["path",{d:"M5.52 17.99c1.05.95 2.91 2.42 4.5 3.15a.8.8 0 0 0 1.13-.68c.2-2.34-.33-5.3-1.57-8.28",key:"1292wz"}],["path",{d:"M8.35 2.68a10 10 0 0 1 9.98 1.58c.43.35.4.96-.12 1.17-1.5.6-4.3.98-6.07 1.05",key:"7ozu9p"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hp=e("HopIcon",[["path",{d:"M10.82 16.12c1.69.6 3.91.79 5.18.85.55.03 1-.42.97-.97-.06-1.27-.26-3.5-.85-5.18",key:"18lxf1"}],["path",{d:"M11.5 6.5c1.64 0 5-.38 6.71-1.07.52-.2.55-.82.12-1.17A10 10 0 0 0 4.26 18.33c.35.43.96.4 1.17-.12.69-1.71 1.07-5.07 1.07-6.71 1.34.45 3.1.9 4.88.62a.88.88 0 0 0 .73-.74c.3-2.14-.15-3.5-.61-4.88",key:"vtfxrw"}],["path",{d:"M15.62 16.95c.2.85.62 2.76.5 4.28a.77.77 0 0 1-.9.7 16.64 16.64 0 0 1-4.08-1.36",key:"13hl71"}],["path",{d:"M16.13 21.05c1.65.63 3.68.84 4.87.91a.9.9 0 0 0 .96-.96 17.68 17.68 0 0 0-.9-4.87",key:"1sl8oj"}],["path",{d:"M16.94 15.62c.86.2 2.77.62 4.29.5a.77.77 0 0 0 .7-.9 16.64 16.64 0 0 0-1.36-4.08",key:"19c6kt"}],["path",{d:"M17.99 5.52a20.82 20.82 0 0 1 3.15 4.5.8.8 0 0 1-.68 1.13c-2.33.2-5.3-.32-8.27-1.57",key:"85ghs3"}],["path",{d:"M4.93 4.93 3 3a.7.7 0 0 1 0-1",key:"x087yj"}],["path",{d:"M9.58 12.18c1.24 2.98 1.77 5.95 1.57 8.28a.8.8 0 0 1-1.13.68 20.82 20.82 0 0 1-4.5-3.15",key:"11xdqo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lp=e("HospitalIcon",[["path",{d:"M12 6v4",key:"16clxf"}],["path",{d:"M14 14h-4",key:"esezmu"}],["path",{d:"M14 18h-4",key:"16mqa2"}],["path",{d:"M14 8h-4",key:"z8ypaz"}],["path",{d:"M18 12h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h2",key:"b1k337"}],["path",{d:"M18 22V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v18",key:"16g51d"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sp=e("HotelIcon",[["path",{d:"M10 22v-6.57",key:"1wmca3"}],["path",{d:"M12 11h.01",key:"z322tv"}],["path",{d:"M12 7h.01",key:"1ivr5q"}],["path",{d:"M14 15.43V22",key:"1q2vjd"}],["path",{d:"M15 16a5 5 0 0 0-6 0",key:"o9wqvi"}],["path",{d:"M16 11h.01",key:"xkw8gn"}],["path",{d:"M16 7h.01",key:"1kdx03"}],["path",{d:"M8 11h.01",key:"1dfujw"}],["path",{d:"M8 7h.01",key:"1vti4s"}],["rect",{x:"4",y:"2",width:"16",height:"20",rx:"2",key:"1uxh74"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yp=e("HourglassIcon",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M5 2h14",key:"pdyrp9"}],["path",{d:"M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22",key:"1d314k"}],["path",{d:"M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2",key:"1vvvr6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S1=e("IceCreamBowlIcon",[["path",{d:"M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6m-4 4h8m-4-3v3M5.14 11a3.5 3.5 0 1 1 6.71 0",key:"1uxfcu"}],["path",{d:"M12.14 11a3.5 3.5 0 1 1 6.71 0",key:"4k3m1s"}],["path",{d:"M15.5 6.5a3.5 3.5 0 1 0-7 0",key:"zmuahr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q1=e("IceCreamConeIcon",[["path",{d:"m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11",key:"1v6356"}],["path",{d:"M17 7A5 5 0 0 0 7 7",key:"151p3v"}],["path",{d:"M17 7a2 2 0 0 1 0 4H7a2 2 0 0 1 0-4",key:"1sdaij"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pp=e("ImageDownIcon",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19 3 3v-5.5",key:"9ldu5r"}],["path",{d:"m17 22 3-3",key:"1nkfve"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kp=e("ImageMinusIcon",[["path",{d:"M21 9v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"m87ecr"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const up=e("ImageOffIcon",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M10.41 10.41a2 2 0 1 1-2.83-2.83",key:"1bzlo9"}],["line",{x1:"13.5",x2:"6",y1:"13.5",y2:"21",key:"1q0aeu"}],["line",{x1:"18",x2:"21",y1:"12",y2:"15",key:"5mozeu"}],["path",{d:"M3.59 3.59A1.99 1.99 0 0 0 3 5v14a2 2 0 0 0 2 2h14c.55 0 1.052-.22 1.41-.59",key:"mmje98"}],["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mp=e("ImagePlayIcon",[["path",{d:"m11 16-5 5",key:"j5f7ct"}],["path",{d:"M11 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6.5",key:"7s81lt"}],["path",{d:"M15.765 22a.5.5 0 0 1-.765-.424V13.38a.5.5 0 0 1 .765-.424l5.878 3.674a1 1 0 0 1 0 1.696z",key:"1omb6s"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mp=e("ImagePlusIcon",[["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7",key:"31hg93"}],["line",{x1:"16",x2:"22",y1:"5",y2:"5",key:"ez7e4s"}],["line",{x1:"19",x2:"19",y1:"2",y2:"8",key:"1gkr8c"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vp=e("ImageUpIcon",[["path",{d:"M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21",key:"9csbqa"}],["path",{d:"m14 19.5 3-3 3 3",key:"9vmjn0"}],["path",{d:"M17 22v-5.5",key:"1aa6fl"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gp=e("ImageIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ip=e("ImagesIcon",[["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"m22 13-1.296-1.296a2.41 2.41 0 0 0-3.408 0L11 18",key:"nf6bnh"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["rect",{width:"16",height:"16",x:"6",y:"2",rx:"2",key:"12espp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xp=e("ImportIcon",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m8 11 4 4 4-4",key:"1dohi6"}],["path",{d:"M8 5H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-4",key:"1ywtjm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fp=e("InboxIcon",[["polyline",{points:"22 12 16 12 14 15 10 15 8 12 2 12",key:"o97t9d"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A1=e("IndentDecreaseIcon",[["polyline",{points:"7 8 3 12 7 16",key:"2j60jr"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12",key:"1fxxak"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6",key:"asgu94"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18",key:"13dsj7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H1=e("IndentIncreaseIcon",[["polyline",{points:"3 8 7 12 3 16",key:"f3rxhf"}],["line",{x1:"21",x2:"11",y1:"12",y2:"12",key:"1fxxak"}],["line",{x1:"21",x2:"11",y1:"6",y2:"6",key:"asgu94"}],["line",{x1:"21",x2:"11",y1:"18",y2:"18",key:"13dsj7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lp=e("IndianRupeeIcon",[["path",{d:"M6 3h12",key:"ggurg9"}],["path",{d:"M6 8h12",key:"6g4wlu"}],["path",{d:"m6 13 8.5 8",key:"u1kupk"}],["path",{d:"M6 13h3",key:"wdp6ag"}],["path",{d:"M9 13c6.667 0 6.667-10 0-10",key:"1nkvk2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wp=e("InfinityIcon",[["path",{d:"M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 0 0 0-8c-2 0-4 1.33-6 4Z",key:"1z0uae"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cp=e("InfoIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bp=e("InspectionPanelIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h.01",key:"7u93v4"}],["path",{d:"M17 7h.01",key:"14a9sn"}],["path",{d:"M7 17h.01",key:"19xn7k"}],["path",{d:"M17 17h.01",key:"1sd3ek"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sp=e("InstagramIcon",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"5",ry:"5",key:"2e1cvw"}],["path",{d:"M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z",key:"9exkf1"}],["line",{x1:"17.5",x2:"17.51",y1:"6.5",y2:"6.5",key:"r4j83e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qp=e("ItalicIcon",[["line",{x1:"19",x2:"10",y1:"4",y2:"4",key:"15jd3p"}],["line",{x1:"14",x2:"5",y1:"20",y2:"20",key:"bu0au3"}],["line",{x1:"15",x2:"9",y1:"4",y2:"20",key:"uljnxc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ap=e("IterationCcwIcon",[["path",{d:"M20 10c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8h8",key:"4znkd0"}],["polyline",{points:"16 14 20 18 16 22",key:"11njsm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hp=e("IterationCwIcon",[["path",{d:"M4 10c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8H4",key:"tuf4su"}],["polyline",{points:"8 22 4 18 8 14",key:"evkj9s"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zp=e("JapaneseYenIcon",[["path",{d:"M12 9.5V21m0-11.5L6 3m6 6.5L18 3",key:"2ej80x"}],["path",{d:"M6 15h12",key:"1hwgt5"}],["path",{d:"M6 11h12",key:"wf4gp6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vp=e("JoystickIcon",[["path",{d:"M21 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-2Z",key:"jg2n2t"}],["path",{d:"M6 15v-2",key:"gd6mvg"}],["path",{d:"M12 15V9",key:"8c7uyn"}],["circle",{cx:"12",cy:"6",r:"3",key:"1gm2ql"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pp=e("KanbanIcon",[["path",{d:"M6 5v11",key:"mdvv1e"}],["path",{d:"M12 5v6",key:"14ar3b"}],["path",{d:"M18 5v14",key:"7ji314"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jp=e("KeyRoundIcon",[["path",{d:"M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z",key:"167ctg"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _p=e("KeySquareIcon",[["path",{d:"M12.4 2.7c.9-.9 2.5-.9 3.4 0l5.5 5.5c.9.9.9 2.5 0 3.4l-3.7 3.7c-.9.9-2.5.9-3.4 0L8.7 9.8c-.9-.9-.9-2.5 0-3.4Z",key:"9li5bk"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M9.4 10.6 2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4",key:"1ym3zm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dp=e("KeyIcon",[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bp=e("KeyboardMusicIcon",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M6 8h4",key:"utf9t1"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M2 12h20",key:"9i4pu4"}],["path",{d:"M6 12v4",key:"dy92yo"}],["path",{d:"M10 12v4",key:"1fxnav"}],["path",{d:"M14 12v4",key:"1hft58"}],["path",{d:"M18 12v4",key:"tjjnbz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=e("KeyboardOffIcon",[["path",{d:"M 20 4 A2 2 0 0 1 22 6",key:"1g1fkt"}],["path",{d:"M 22 6 L 22 16.41",key:"1qjg3w"}],["path",{d:"M 7 16 L 16 16",key:"n0yqwb"}],["path",{d:"M 9.69 4 L 20 4",key:"kbpcgx"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M20 20H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2",key:"s23sx2"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M8 12h.01",key:"czm47f"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tp=e("KeyboardIcon",[["path",{d:"M10 8h.01",key:"1r9ogq"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M14 8h.01",key:"1primd"}],["path",{d:"M16 12h.01",key:"1l6xoz"}],["path",{d:"M18 8h.01",key:"emo2bl"}],["path",{d:"M6 8h.01",key:"x9i8wu"}],["path",{d:"M7 16h10",key:"wp8him"}],["path",{d:"M8 12h.01",key:"czm47f"}],["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rp=e("LampCeilingIcon",[["path",{d:"M12 2v5",key:"nd4vlx"}],["path",{d:"M6 7h12l4 9H2l4-9Z",key:"123d64"}],["path",{d:"M9.17 16a3 3 0 1 0 5.66 0",key:"1061mw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Op=e("LampDeskIcon",[["path",{d:"m14 5-3 3 2 7 8-8-7-2Z",key:"1b0msb"}],["path",{d:"m14 5-3 3-3-3 3-3 3 3Z",key:"1uemms"}],["path",{d:"M9.5 6.5 4 12l3 6",key:"1bx08v"}],["path",{d:"M3 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H3Z",key:"wap775"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Up=e("LampFloorIcon",[["path",{d:"M9 2h6l3 7H6l3-7Z",key:"wcx6mj"}],["path",{d:"M12 9v13",key:"3n1su1"}],["path",{d:"M9 22h6",key:"1rlq3v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ep=e("LampWallDownIcon",[["path",{d:"M11 13h6l3 7H8l3-7Z",key:"9n3qlo"}],["path",{d:"M14 13V8a2 2 0 0 0-2-2H8",key:"1hu4hb"}],["path",{d:"M4 9h2a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H4v6Z",key:"s053bc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zp=e("LampWallUpIcon",[["path",{d:"M11 4h6l3 7H8l3-7Z",key:"11x1ee"}],["path",{d:"M14 11v5a2 2 0 0 1-2 2H8",key:"eutp5o"}],["path",{d:"M4 15h2a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H4v-6Z",key:"1iuthr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $p=e("LampIcon",[["path",{d:"M8 2h8l4 10H4L8 2Z",key:"9dma5w"}],["path",{d:"M12 12v6",key:"3ahymv"}],["path",{d:"M8 22v-2c0-1.1.9-2 2-2h4a2 2 0 0 1 2 2v2H8Z",key:"mwf4oh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gp=e("LandPlotIcon",[["path",{d:"m12 8 6-3-6-3v10",key:"mvpnpy"}],["path",{d:"m8 11.99-5.5 3.14a1 1 0 0 0 0 1.74l8.5 4.86a2 2 0 0 0 2 0l8.5-4.86a1 1 0 0 0 0-1.74L16 12",key:"ek95tt"}],["path",{d:"m6.49 12.85 11.02 6.3",key:"1kt42w"}],["path",{d:"M17.51 12.85 6.5 19.15",key:"v55bdg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=e("LandmarkIcon",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wp=e("LanguagesIcon",[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z1=e("LaptopMinimalIcon",[["rect",{width:"18",height:"12",x:"3",y:"4",rx:"2",ry:"2",key:"1qhy41"}],["line",{x1:"2",x2:"22",y1:"20",y2:"20",key:"ni3hll"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xp=e("LaptopIcon",[["path",{d:"M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16",key:"tarvll"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kp=e("LassoSelectIcon",[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M7 16.93c.96.43 1.96.74 2.99.91",key:"ybbtv3"}],["path",{d:"M3.34 14A6.8 6.8 0 0 1 2 10c0-4.42 4.48-8 10-8s10 3.58 10 8a7.19 7.19 0 0 1-.33 2",key:"gt5e1w"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}],["path",{d:"M14.33 22h-.09a.35.35 0 0 1-.24-.32v-10a.34.34 0 0 1 .33-.34c.08 0 .15.03.21.08l7.34 6a.33.33 0 0 1-.21.59h-4.49l-2.57 3.85a.35.35 0 0 1-.28.14v0z",key:"1bawls"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jp=e("LassoIcon",[["path",{d:"M7 22a5 5 0 0 1-2-4",key:"umushi"}],["path",{d:"M3.3 14A6.8 6.8 0 0 1 2 10c0-4.4 4.5-8 10-8s10 3.6 10 8-4.5 8-10 8a12 12 0 0 1-5-1",key:"146dds"}],["path",{d:"M5 18a2 2 0 1 0 0-4 2 2 0 0 0 0 4z",key:"bq3ynw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yp=e("LaughIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M18 13a6 6 0 0 1-6 5 6 6 0 0 1-6-5h12Z",key:"b2q4dd"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qp=e("Layers2Icon",[["path",{d:"m16.02 12 5.48 3.13a1 1 0 0 1 0 1.74L13 21.74a2 2 0 0 1-2 0l-8.5-4.87a1 1 0 0 1 0-1.74L7.98 12",key:"1cuww1"}],["path",{d:"M13 13.74a2 2 0 0 1-2 0L2.5 8.87a1 1 0 0 1 0-1.74L11 2.26a2 2 0 0 1 2 0l8.5 4.87a1 1 0 0 1 0 1.74Z",key:"pdlvxu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ek=e("Layers3Icon",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m6.08 9.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1e5n1m"}],["path",{d:"m6.08 14.5-3.5 1.6a1 1 0 0 0 0 1.81l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9a1 1 0 0 0 0-1.83l-3.5-1.59",key:"1iwflc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tk=e("LayersIcon",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ak=e("LayoutDashboardIcon",[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J2=e("LayoutGridIcon",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ok=e("LayoutListIcon",[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["path",{d:"M14 4h7",key:"3xa0d5"}],["path",{d:"M14 9h7",key:"1icrd9"}],["path",{d:"M14 15h7",key:"1mj8o2"}],["path",{d:"M14 20h7",key:"11slyb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ck=e("LayoutPanelLeftIcon",[["rect",{width:"7",height:"18",x:"3",y:"3",rx:"1",key:"2obqm"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nk=e("LayoutPanelTopIcon",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ik=e("LayoutTemplateIcon",[["rect",{width:"18",height:"7",x:"3",y:"3",rx:"1",key:"f1a2em"}],["rect",{width:"9",height:"7",x:"3",y:"14",rx:"1",key:"jqznyg"}],["rect",{width:"5",height:"7",x:"16",y:"14",rx:"1",key:"q5h2i8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rk=e("LeafIcon",[["path",{d:"M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z",key:"nnexq3"}],["path",{d:"M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12",key:"mt58a7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dk=e("LeafyGreenIcon",[["path",{d:"M2 22c1.25-.987 2.27-1.975 3.9-2.2a5.56 5.56 0 0 1 3.8 1.5 4 4 0 0 0 6.187-2.353 3.5 3.5 0 0 0 3.69-5.116A3.5 3.5 0 0 0 20.95 8 3.5 3.5 0 1 0 16 3.05a3.5 3.5 0 0 0-5.831 1.373 3.5 3.5 0 0 0-5.116 3.69 4 4 0 0 0-2.348 6.155C3.499 15.42 4.409 16.712 4.2 18.1 3.926 19.743 3.014 20.732 2 22",key:"1134nt"}],["path",{d:"M2 22 17 7",key:"1q7jp2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hk=e("LecternIcon",[["path",{d:"M16 12h3a2 2 0 0 0 1.902-1.38l1.056-3.333A1 1 0 0 0 21 6H3a1 1 0 0 0-.958 1.287l1.056 3.334A2 2 0 0 0 5 12h3",key:"13jjxg"}],["path",{d:"M18 6V3a1 1 0 0 0-1-1h-3",key:"1550fe"}],["rect",{width:"8",height:"12",x:"8",y:"10",rx:"1",key:"qmu8b6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lk=e("LibraryBigIcon",[["rect",{width:"8",height:"18",x:"3",y:"3",rx:"1",key:"oynpb5"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M20.4 18.9c.2.5-.1 1.1-.6 1.3l-1.9.7c-.5.2-1.1-.1-1.3-.6L11.1 5.1c-.2-.5.1-1.1.6-1.3l1.9-.7c.5-.2 1.1.1 1.3.6Z",key:"1qboyk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sk=e("LibraryIcon",[["path",{d:"m16 6 4 14",key:"ji33uf"}],["path",{d:"M12 6v14",key:"1n7gus"}],["path",{d:"M8 8v12",key:"1gg7y9"}],["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yk=e("LifeBuoyIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.93 4.93 4.24 4.24",key:"1ymg45"}],["path",{d:"m14.83 9.17 4.24-4.24",key:"1cb5xl"}],["path",{d:"m14.83 14.83 4.24 4.24",key:"q42g0n"}],["path",{d:"m9.17 14.83-4.24 4.24",key:"bqpfvv"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pk=e("LigatureIcon",[["path",{d:"M8 20V8c0-2.2 1.8-4 4-4 1.5 0 2.8.8 3.5 2",key:"1rtphz"}],["path",{d:"M6 12h4",key:"a4o3ry"}],["path",{d:"M14 12h2v8",key:"c1fccl"}],["path",{d:"M6 20h4",key:"1i6q5t"}],["path",{d:"M14 20h4",key:"lzx1xo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kk=e("LightbulbOffIcon",[["path",{d:"M16.8 11.2c.8-.9 1.2-2 1.2-3.2a6 6 0 0 0-9.3-5",key:"1fkcox"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M6.3 6.3a4.67 4.67 0 0 0 1.2 5.2c.7.7 1.3 1.5 1.5 2.5",key:"10m8kw"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uk=e("LightbulbIcon",[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mk=e("LineChartIcon",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"m19 9-5 5-4-4-3 3",key:"2osh9i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mk=e("Link2OffIcon",[["path",{d:"M9 17H7A5 5 0 0 1 7 7",key:"10o201"}],["path",{d:"M15 7h2a5 5 0 0 1 4 8",key:"1d3206"}],["line",{x1:"8",x2:"12",y1:"12",y2:"12",key:"rvw6j4"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vk=e("Link2Icon",[["path",{d:"M9 17H7A5 5 0 0 1 7 7h2",key:"8i5ue5"}],["path",{d:"M15 7h2a5 5 0 1 1 0 10h-2",key:"1b9ql8"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gk=e("LinkIcon",[["path",{d:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71",key:"1cjeqo"}],["path",{d:"M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",key:"19qd67"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ik=e("LinkedinIcon",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xk=e("ListChecksIcon",[["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"m3 7 2 2 4-4",key:"1obspn"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fk=e("ListCollapseIcon",[["path",{d:"m3 10 2.5-2.5L3 5",key:"i6eama"}],["path",{d:"m3 19 2.5-2.5L3 14",key:"w2gmor"}],["path",{d:"M10 6h11",key:"c7qv1k"}],["path",{d:"M10 12h11",key:"6m4ad9"}],["path",{d:"M10 18h11",key:"11hvi2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lk=e("ListEndIcon",[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M10 18H3",key:"13769t"}],["path",{d:"M21 6v10a2 2 0 0 1-2 2h-5",key:"ilrcs8"}],["path",{d:"m16 16-2 2 2 2",key:"kkc6pm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wk=e("ListFilterIcon",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ck=e("ListMinusIcon",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bk=e("ListMusicIcon",[["path",{d:"M21 15V6",key:"h1cx4g"}],["path",{d:"M18.5 18a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z",key:"8saifv"}],["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sk=e("ListOrderedIcon",[["line",{x1:"10",x2:"21",y1:"6",y2:"6",key:"76qw6h"}],["line",{x1:"10",x2:"21",y1:"12",y2:"12",key:"16nom4"}],["line",{x1:"10",x2:"21",y1:"18",y2:"18",key:"u3jurt"}],["path",{d:"M4 6h1v4",key:"cnovpq"}],["path",{d:"M4 10h2",key:"16xx2s"}],["path",{d:"M6 18H4c0-1 2-2 2-3s-1-1.5-2-1",key:"m9a95d"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qk=e("ListPlusIcon",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M18 9v6",key:"1twb98"}],["path",{d:"M21 12h-6",key:"bt1uis"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ak=e("ListRestartIcon",[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M7 12H3",key:"13ou7f"}],["path",{d:"M7 18H3",key:"1sijw9"}],["path",{d:"M12 18a5 5 0 0 0 9-3 4.5 4.5 0 0 0-4.5-4.5c-1.33 0-2.54.54-3.41 1.41L11 14",key:"qth677"}],["path",{d:"M11 10v4h4",key:"172dkj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hk=e("ListStartIcon",[["path",{d:"M16 12H3",key:"1a2rj7"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"M10 6H3",key:"lf8lx7"}],["path",{d:"M21 18V8a2 2 0 0 0-2-2h-5",key:"1hghli"}],["path",{d:"m16 8-2-2 2-2",key:"160uvd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zk=e("ListTodoIcon",[["rect",{x:"3",y:"5",width:"6",height:"6",rx:"1",key:"1defrl"}],["path",{d:"m3 17 2 2 4-4",key:"1jhpwq"}],["path",{d:"M13 6h8",key:"15sg57"}],["path",{d:"M13 12h8",key:"h98zly"}],["path",{d:"M13 18h8",key:"oe0vm4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vk=e("ListTreeIcon",[["path",{d:"M21 12h-8",key:"1bmf0i"}],["path",{d:"M21 6H8",key:"1pqkrb"}],["path",{d:"M21 18h-8",key:"1tm79t"}],["path",{d:"M3 6v4c0 1.1.9 2 2 2h3",key:"1ywdgy"}],["path",{d:"M3 10v6c0 1.1.9 2 2 2h3",key:"2wc746"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pk=e("ListVideoIcon",[["path",{d:"M12 12H3",key:"18klou"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M12 18H3",key:"11ftsu"}],["path",{d:"m16 12 5 3-5 3v-6Z",key:"zpskkp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jk=e("ListXIcon",[["path",{d:"M11 12H3",key:"51ecnj"}],["path",{d:"M16 6H3",key:"1wxfjs"}],["path",{d:"M16 18H3",key:"12xzn7"}],["path",{d:"m19 10-4 4",key:"1tz659"}],["path",{d:"m15 10 4 4",key:"1n7nei"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _k=e("ListIcon",[["line",{x1:"8",x2:"21",y1:"6",y2:"6",key:"7ey8pc"}],["line",{x1:"8",x2:"21",y1:"12",y2:"12",key:"rjfblc"}],["line",{x1:"8",x2:"21",y1:"18",y2:"18",key:"c3b1m8"}],["line",{x1:"3",x2:"3.01",y1:"6",y2:"6",key:"1g7gq3"}],["line",{x1:"3",x2:"3.01",y1:"12",y2:"12",key:"1pjlvk"}],["line",{x1:"3",x2:"3.01",y1:"18",y2:"18",key:"28t2mc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V1=e("LoaderCircleIcon",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dk=e("LoaderPinwheelIcon",[["path",{d:"M2 12c0-2.8 2.2-5 5-5s5 2.2 5 5 2.2 5 5 5 5-2.2 5-5",key:"1cg5zf"}],["path",{d:"M7 20.7a1 1 0 1 1 5-8.7 1 1 0 1 0 5-8.6",key:"1gnrpi"}],["path",{d:"M7 3.3a1 1 0 1 1 5 8.6 1 1 0 1 0 5 8.6",key:"u9yy5q"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bk=e("LoaderIcon",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fk=e("LocateFixedIcon",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tk=e("LocateOffIcon",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["path",{d:"M7.11 7.11C5.83 8.39 5 10.1 5 12c0 3.87 3.13 7 7 7 1.9 0 3.61-.83 4.89-2.11",key:"1oh7ia"}],["path",{d:"M18.71 13.96c.19-.63.29-1.29.29-1.96 0-3.87-3.13-7-7-7-.67 0-1.33.1-1.96.29",key:"3qdecy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rk=e("LocateIcon",[["line",{x1:"2",x2:"5",y1:"12",y2:"12",key:"bvdh0s"}],["line",{x1:"19",x2:"22",y1:"12",y2:"12",key:"1tbv5k"}],["line",{x1:"12",x2:"12",y1:"2",y2:"5",key:"11lu5j"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}],["circle",{cx:"12",cy:"12",r:"7",key:"fim9np"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P1=e("LockKeyholeOpenIcon",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{width:"18",height:"12",x:"3",y:"10",rx:"2",key:"l0tzu3"}],["path",{d:"M7 10V7a5 5 0 0 1 9.33-2.5",key:"car5b7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ok=e("LockKeyholeIcon",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j1=e("LockOpenIcon",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 9.9-1",key:"1mm8w8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uk=e("LockIcon",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y2=e("LogInIcon",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q2=e("LogOutIcon",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ek=e("LollipopIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}],["path",{d:"M11 11a2 2 0 0 0 4 0 4 4 0 0 0-8 0 6 6 0 0 0 12 0",key:"107gwy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zk=e("LuggageIcon",[["path",{d:"M6 20h0a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h0",key:"1h5fkc"}],["path",{d:"M8 18V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14",key:"1l99gc"}],["path",{d:"M10 20h4",key:"ni2waw"}],["circle",{cx:"16",cy:"20",r:"2",key:"1vifvg"}],["circle",{cx:"8",cy:"20",r:"2",key:"ckkr5m"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $k=e("MagnetIcon",[["path",{d:"m6 15-4-4 6.75-6.77a7.79 7.79 0 0 1 11 11L13 22l-4-4 6.39-6.36a2.14 2.14 0 0 0-3-3L6 15",key:"1i3lhw"}],["path",{d:"m5 8 4 4",key:"j6kj7e"}],["path",{d:"m12 15 4 4",key:"lnac28"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gk=e("MailCheckIcon",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nk=e("MailMinusIcon",[["path",{d:"M22 15V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"fuxbkv"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wk=e("MailOpenIcon",[["path",{d:"M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z",key:"1jhwl8"}],["path",{d:"m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10",key:"1qfld7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xk=e("MailPlusIcon",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8",key:"12jkf8"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M16 19h6",key:"xwg31i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kk=e("MailQuestionIcon",[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 15.28c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2",key:"7z9rxb"}],["path",{d:"M20 22v.01",key:"12bgn6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jk=e("MailSearchIcon",[["path",{d:"M22 12.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h7.5",key:"w80f2v"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6v0Z",key:"mgbru4"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.5-1.5",key:"1x83k4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yk=e("MailWarningIcon",[["path",{d:"M22 10.5V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h12.5",key:"e61zoh"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"M20 14v4",key:"1hm744"}],["path",{d:"M20 22v.01",key:"12bgn6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qk=e("MailXIcon",[["path",{d:"M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h9",key:"1j9vog"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}],["path",{d:"m17 17 4 4",key:"1b3523"}],["path",{d:"m21 17-4 4",key:"uinynz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e4=e("MailIcon",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t4=e("MailboxIcon",[["path",{d:"M22 17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V9.5C2 7 4 5 6.5 5H18c2.2 0 4 1.8 4 4v8Z",key:"1lbycx"}],["polyline",{points:"15,9 18,9 18,11",key:"1pm9c0"}],["path",{d:"M6.5 5C9 5 11 7 11 9.5V17a2 2 0 0 1-2 2v0",key:"n6nfvi"}],["line",{x1:"6",x2:"7",y1:"10",y2:"10",key:"1e2scm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a4=e("MailsIcon",[["rect",{width:"16",height:"13",x:"6",y:"4",rx:"2",key:"1drq3f"}],["path",{d:"m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7",key:"xn252p"}],["path",{d:"M2 8v11c0 1.1.9 2 2 2h14",key:"n13cji"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o4=e("MapPinOffIcon",[["path",{d:"M5.43 5.43A8.06 8.06 0 0 0 4 10c0 6 8 12 8 12a29.94 29.94 0 0 0 5-5",key:"12a8pk"}],["path",{d:"M19.18 13.52A8.66 8.66 0 0 0 20 10a8 8 0 0 0-8-8 7.88 7.88 0 0 0-3.52.82",key:"1r9f6y"}],["path",{d:"M9.13 9.13A2.78 2.78 0 0 0 9 10a3 3 0 0 0 3 3 2.78 2.78 0 0 0 .87-.13",key:"erynq7"}],["path",{d:"M14.9 9.25a3 3 0 0 0-2.15-2.16",key:"1hwwmx"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c4=e("MapPinIcon",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n4=e("MapPinnedIcon",[["path",{d:"M18 8c0 4.5-6 9-6 9s-6-4.5-6-9a6 6 0 0 1 12 0",key:"yrbn30"}],["circle",{cx:"12",cy:"8",r:"2",key:"1822b1"}],["path",{d:"M8.835 14H5a1 1 0 0 0-.9.7l-2 6c-.1.1-.1.2-.1.3 0 .6.4 1 1 1h18c.6 0 1-.4 1-1 0-.1 0-.2-.1-.3l-2-6a1 1 0 0 0-.9-.7h-3.835",key:"112zkj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i4=e("MapIcon",[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z",key:"169xi5"}],["path",{d:"M15 5.764v15",key:"1pn4in"}],["path",{d:"M9 3.236v15",key:"1uimfh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r4=e("MartiniIcon",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M12 11v11",key:"ur9y6a"}],["path",{d:"m19 3-7 8-7-8Z",key:"1sgpiw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d4=e("Maximize2Icon",[["polyline",{points:"15 3 21 3 21 9",key:"mznyad"}],["polyline",{points:"9 21 3 21 3 15",key:"1avn1i"}],["line",{x1:"21",x2:"14",y1:"3",y2:"10",key:"ota7mn"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ea=e("MaximizeIcon",[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h4=e("MedalIcon",[["path",{d:"M7.21 15 2.66 7.14a2 2 0 0 1 .13-2.2L4.4 2.8A2 2 0 0 1 6 2h12a2 2 0 0 1 1.6.8l1.6 2.14a2 2 0 0 1 .14 2.2L16.79 15",key:"143lza"}],["path",{d:"M11 12 5.12 2.2",key:"qhuxz6"}],["path",{d:"m13 12 5.88-9.8",key:"hbye0f"}],["path",{d:"M8 7h8",key:"i86dvs"}],["circle",{cx:"12",cy:"17",r:"5",key:"qbz8iq"}],["path",{d:"M12 18v-2h-.5",key:"fawc4q"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l4=e("MegaphoneOffIcon",[["path",{d:"M9.26 9.26 3 11v3l14.14 3.14",key:"3429n"}],["path",{d:"M21 15.34V6l-7.31 2.03",key:"4o1dh8"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s4=e("MegaphoneIcon",[["path",{d:"m3 11 18-5v12L3 14v-3z",key:"n962bs"}],["path",{d:"M11.6 16.8a3 3 0 1 1-5.8-1.6",key:"1yl0tm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y4=e("MehIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"8",x2:"16",y1:"15",y2:"15",key:"1xb1d9"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p4=e("MemoryStickIcon",[["path",{d:"M6 19v-3",key:"1nvgqn"}],["path",{d:"M10 19v-3",key:"iu8nkm"}],["path",{d:"M14 19v-3",key:"kcehxu"}],["path",{d:"M18 19v-3",key:"1vh91z"}],["path",{d:"M8 11V9",key:"63erz4"}],["path",{d:"M16 11V9",key:"fru6f3"}],["path",{d:"M12 11V9",key:"ha00sb"}],["path",{d:"M2 15h20",key:"16ne18"}],["path",{d:"M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",key:"lhddv3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k4=e("MenuIcon",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u4=e("MergeIcon",[["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M12 2v10.3a4 4 0 0 1-1.172 2.872L4 22",key:"1hyw0i"}],["path",{d:"m20 22-5-5",key:"1m27yz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M4=e("MessageCircleCodeIcon",[["path",{d:"M10 9.5 8 12l2 2.5",key:"3mjy60"}],["path",{d:"m14 9.5 2 2.5-2 2.5",key:"1bir2l"}],["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22z",key:"k85zhp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m4=e("MessageCircleDashedIcon",[["path",{d:"M13.5 3.1c-.5 0-1-.1-1.5-.1s-1 .1-1.5.1",key:"16ll65"}],["path",{d:"M19.3 6.8a10.45 10.45 0 0 0-2.1-2.1",key:"1nq77a"}],["path",{d:"M20.9 13.5c.1-.5.1-1 .1-1.5s-.1-1-.1-1.5",key:"1sf7wn"}],["path",{d:"M17.2 19.3a10.45 10.45 0 0 0 2.1-2.1",key:"x1hs5g"}],["path",{d:"M10.5 20.9c.5.1 1 .1 1.5.1s1-.1 1.5-.1",key:"19m18z"}],["path",{d:"M3.5 17.5 2 22l4.5-1.5",key:"1f36qi"}],["path",{d:"M3.1 10.5c0 .5-.1 1-.1 1.5s.1 1 .1 1.5",key:"1vz3ju"}],["path",{d:"M6.8 4.7a10.45 10.45 0 0 0-2.1 2.1",key:"19f9do"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v4=e("MessageCircleHeartIcon",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M15.8 9.2a2.5 2.5 0 0 0-3.5 0l-.3.4-.35-.3a2.42 2.42 0 1 0-3.2 3.6l3.6 3.5 3.6-3.5c1.2-1.2 1.1-2.7.2-3.7",key:"43lnbm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g4=e("MessageCircleMoreIcon",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I4=e("MessageCircleOffIcon",[["path",{d:"M20.5 14.9A9 9 0 0 0 9.1 3.5",key:"1iebmn"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5.6 5.6C3 8.3 2.2 12.5 4 16l-2 6 6-2c3.4 1.8 7.6 1.1 10.3-1.7",key:"1ov8ce"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x4=e("MessageCirclePlusIcon",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f4=e("MessageCircleQuestionIcon",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3",key:"1u773s"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L4=e("MessageCircleReplyIcon",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}],["path",{d:"M7 12h7a2 2 0 0 1 2 2v1",key:"1gheu4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w4=e("MessageCircleWarningIcon",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C4=e("MessageCircleXIcon",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b4=e("MessageCircleIcon",[["path",{d:"M7.9 20A9 9 0 1 0 4 16.1L2 22Z",key:"vv11sd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S4=e("MessageSquareCodeIcon",[["path",{d:"M10 7.5 8 10l2 2.5",key:"xb17xw"}],["path",{d:"m14 7.5 2 2.5-2 2.5",key:"5rap1v"}],["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q4=e("MessageSquareDashedIcon",[["path",{d:"M3 6V5c0-1.1.9-2 2-2h2",key:"9usibi"}],["path",{d:"M11 3h3",key:"1c3ji7"}],["path",{d:"M18 3h1c1.1 0 2 .9 2 2",key:"19esxn"}],["path",{d:"M21 9v2",key:"p14lih"}],["path",{d:"M21 15c0 1.1-.9 2-2 2h-1",key:"1fo1j8"}],["path",{d:"M14 17h-3",key:"1w4p2m"}],["path",{d:"m7 17-4 4v-5",key:"ph9x1h"}],["path",{d:"M3 12v-2",key:"856n1q"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A4=e("MessageSquareDiffIcon",[["path",{d:"m5 19-2 2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2",key:"1xuzuj"}],["path",{d:"M9 10h6",key:"9gxzsh"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 17h6",key:"r8uit2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H4=e("MessageSquareDotIcon",[["path",{d:"M11.7 3H5a2 2 0 0 0-2 2v16l4-4h12a2 2 0 0 0 2-2v-2.7",key:"uodpkb"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z4=e("MessageSquareHeartIcon",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M14.8 7.5a1.84 1.84 0 0 0-2.6 0l-.2.3-.3-.3a1.84 1.84 0 1 0-2.4 2.8L12 13l2.7-2.7c.9-.9.8-2.1.1-2.8",key:"1blaws"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V4=e("MessageSquareMoreIcon",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M16 10h.01",key:"1m94wz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P4=e("MessageSquareOffIcon",[["path",{d:"M21 15V5a2 2 0 0 0-2-2H9",key:"43el77"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M3.6 3.6c-.4.3-.6.8-.6 1.4v16l4-4h10",key:"pwpm4a"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j4=e("MessageSquarePlusIcon",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v6",key:"lw1j43"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _4=e("MessageSquareQuoteIcon",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M8 12a2 2 0 0 0 2-2V8H8",key:"1jfesj"}],["path",{d:"M14 12a2 2 0 0 0 2-2V8h-2",key:"1dq9mh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D4=e("MessageSquareReplyIcon",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m10 7-3 3 3 3",key:"1eugdv"}],["path",{d:"M17 13v-1a2 2 0 0 0-2-2H7",key:"ernfh3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B4=e("MessageSquareShareIcon",[["path",{d:"M21 12v3a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h7",key:"tqtdkg"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"m16 8 5-5",key:"15mbrl"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F4=e("MessageSquareTextIcon",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M13 8H7",key:"14i4kc"}],["path",{d:"M17 12H7",key:"16if0g"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T4=e("MessageSquareWarningIcon",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"M12 7v2",key:"stiyo7"}],["path",{d:"M12 13h.01",key:"y0uutt"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R4=e("MessageSquareXIcon",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}],["path",{d:"m14.5 7.5-5 5",key:"3lb6iw"}],["path",{d:"m9.5 7.5 5 5",key:"ko136h"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O4=e("MessageSquareIcon",[["path",{d:"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",key:"1lielz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U4=e("MessagesSquareIcon",[["path",{d:"M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z",key:"jj09z8"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1",key:"1cx29u"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E4=e("MicOffIcon",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["path",{d:"M18.89 13.23A7.12 7.12 0 0 0 19 12v-2",key:"80xlxr"}],["path",{d:"M5 10v2a7 7 0 0 0 12 5",key:"p2k8kg"}],["path",{d:"M15 9.34V5a3 3 0 0 0-5.68-1.33",key:"1gzdoj"}],["path",{d:"M9 9v3a3 3 0 0 0 5.12 2.12",key:"r2i35w"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _1=e("MicVocalIcon",[["path",{d:"m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12",key:"zoua8r"}],["circle",{cx:"17",cy:"7",r:"5",key:"1fomce"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z4=e("MicIcon",[["path",{d:"M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",key:"131961"}],["path",{d:"M19 10v2a7 7 0 0 1-14 0v-2",key:"1vc78b"}],["line",{x1:"12",x2:"12",y1:"19",y2:"22",key:"x3vr5v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $4=e("MicroscopeIcon",[["path",{d:"M6 18h8",key:"1borvv"}],["path",{d:"M3 22h18",key:"8prr45"}],["path",{d:"M14 22a7 7 0 1 0 0-14h-1",key:"1jwaiy"}],["path",{d:"M9 14h2",key:"197e7h"}],["path",{d:"M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z",key:"1bmzmy"}],["path",{d:"M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3",key:"1drr47"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G4=e("MicrowaveIcon",[["rect",{width:"20",height:"15",x:"2",y:"4",rx:"2",key:"2no95f"}],["rect",{width:"8",height:"7",x:"6",y:"8",rx:"1",key:"zh9wx"}],["path",{d:"M18 8v7",key:"o5zi4n"}],["path",{d:"M6 19v2",key:"1loha6"}],["path",{d:"M18 19v2",key:"1dawf0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N4=e("MilestoneIcon",[["path",{d:"M18 6H5a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h13l4-3.5L18 6Z",key:"1mp5s7"}],["path",{d:"M12 13v8",key:"1l5pq0"}],["path",{d:"M12 3v3",key:"1n5kay"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W4=e("MilkOffIcon",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v1.343M15 2v2.789a4 4 0 0 0 .672 2.219l.656.984a4 4 0 0 1 .672 2.22v1.131M7.8 7.8l-.128.192A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-3",key:"y0ejgx"}],["path",{d:"M7 15a6.47 6.47 0 0 1 5 0 6.472 6.472 0 0 0 3.435.435",key:"iaxqsy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X4=e("MilkIcon",[["path",{d:"M8 2h8",key:"1ssgc1"}],["path",{d:"M9 2v2.789a4 4 0 0 1-.672 2.219l-.656.984A4 4 0 0 0 7 10.212V20a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2v-9.789a4 4 0 0 0-.672-2.219l-.656-.984A4 4 0 0 1 15 4.788V2",key:"qtp12x"}],["path",{d:"M7 15a6.472 6.472 0 0 1 5 0 6.47 6.47 0 0 0 5 0",key:"ygeh44"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K4=e("Minimize2Icon",[["polyline",{points:"4 14 10 14 10 20",key:"11kfnr"}],["polyline",{points:"20 10 14 10 14 4",key:"rlmsce"}],["line",{x1:"14",x2:"21",y1:"10",y2:"3",key:"o5lafz"}],["line",{x1:"3",x2:"10",y1:"21",y2:"14",key:"1atl0r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J4=e("MinimizeIcon",[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y4=e("MinusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q4=e("MonitorCheckIcon",[["path",{d:"m9 10 2 2 4-4",key:"1gnqz4"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eu=e("MonitorDotIcon",[["circle",{cx:"19",cy:"6",r:"3",key:"108a5v"}],["path",{d:"M22 12v3a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h9",key:"1fet9y"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tu=e("MonitorDownIcon",[["path",{d:"M12 13V7",key:"h0r20n"}],["path",{d:"m15 10-3 3-3-3",key:"lzhmyn"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const au=e("MonitorOffIcon",[["path",{d:"M17 17H4a2 2 0 0 1-2-2V5c0-1.5 1-2 1-2",key:"k0q8oc"}],["path",{d:"M22 15V5a2 2 0 0 0-2-2H9",key:"cp1ac0"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ou=e("MonitorPauseIcon",[["path",{d:"M10 13V7",key:"1u13u9"}],["path",{d:"M14 13V7",key:"1vj9om"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cu=e("MonitorPlayIcon",[["path",{d:"M10 7.75a.75.75 0 0 1 1.142-.638l3.664 2.249a.75.75 0 0 1 0 1.278l-3.664 2.25a.75.75 0 0 1-1.142-.64z",key:"1pctta"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nu=e("MonitorSmartphoneIcon",[["path",{d:"M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8",key:"10dyio"}],["path",{d:"M10 19v-3.96 3.15",key:"1irgej"}],["path",{d:"M7 19h5",key:"qswx4l"}],["rect",{width:"6",height:"10",x:"16",y:"12",rx:"2",key:"1egngj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iu=e("MonitorSpeakerIcon",[["path",{d:"M5.5 20H8",key:"1k40s5"}],["path",{d:"M17 9h.01",key:"1j24nn"}],["rect",{width:"10",height:"16",x:"12",y:"4",rx:"2",key:"ixliua"}],["path",{d:"M8 6H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h4",key:"1mp6e1"}],["circle",{cx:"17",cy:"15",r:"1",key:"tqvash"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ru=e("MonitorStopIcon",[["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["rect",{x:"2",y:"3",width:"20",height:"14",rx:"2",key:"x3v2xh"}],["rect",{x:"9",y:"7",width:"6",height:"6",rx:"1",key:"5m2oou"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const du=e("MonitorUpIcon",[["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}],["path",{d:"M12 13V7",key:"h0r20n"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hu=e("MonitorXIcon",[["path",{d:"m14.5 12.5-5-5",key:"1jahn5"}],["path",{d:"m9.5 12.5 5-5",key:"1k2t7b"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"M8 21h8",key:"1ev6f3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lu=e("MonitorIcon",[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const su=e("MoonStarIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9",key:"4ay0iu"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yu=e("MoonIcon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pu=e("MountainSnowIcon",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}],["path",{d:"M4.14 15.08c2.62-1.57 5.24-1.43 7.86.42 2.74 1.94 5.49 2 8.23.19",key:"1pvmmp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ku=e("MountainIcon",[["path",{d:"m8 3 4 8 5-5 5 15H2L8 3z",key:"otkl63"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uu=e("MouseOffIcon",[["path",{d:"M12 6v.343",key:"1gyhex"}],["path",{d:"M18.218 18.218A7 7 0 0 1 5 15V9a7 7 0 0 1 .782-3.218",key:"ukzz01"}],["path",{d:"M19 13.343V9A7 7 0 0 0 8.56 2.902",key:"104jy9"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mu=e("MousePointer2Icon",[["path",{d:"m4 4 7.07 17 2.51-7.39L21 11.07z",key:"1vqm48"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mu=e("MousePointerBanIcon",[["path",{d:"m2 2 4 11 2-5 5-2Z",key:"i586l5"}],["circle",{cx:"16",cy:"16",r:"6",key:"qoo3c4"}],["path",{d:"m11.8 11.8 8.4 8.4",key:"oogvdj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vu=e("MousePointerClickIcon",[["path",{d:"m9 9 5 12 1.8-5.2L21 14Z",key:"1b76lo"}],["path",{d:"M7.2 2.2 8 5.1",key:"1cfko1"}],["path",{d:"m5.1 8-2.9-.8",key:"1go3kf"}],["path",{d:"M14 4.1 12 6",key:"ita8i4"}],["path",{d:"m6 12-1.9 2",key:"mnht97"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gu=e("MousePointerIcon",[["path",{d:"m3 3 7.07 16.97 2.51-7.39 7.39-2.51L3 3z",key:"y2ucgo"}],["path",{d:"m13 13 6 6",key:"1nhxnf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iu=e("MouseIcon",[["rect",{x:"5",y:"2",width:"14",height:"20",rx:"7",key:"11ol66"}],["path",{d:"M12 6v4",key:"16clxf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D1=e("Move3dIcon",[["path",{d:"M5 3v16h16",key:"1mqmf9"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}],["path",{d:"m2 6 3-3 3 3",key:"tkyvxa"}],["path",{d:"m18 16 3 3-3 3",key:"1d4glt"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xu=e("MoveDiagonal2Icon",[["polyline",{points:"5 11 5 5 11 5",key:"ncfzxk"}],["polyline",{points:"19 13 19 19 13 19",key:"1mk7hk"}],["line",{x1:"5",x2:"19",y1:"5",y2:"19",key:"mcyte3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fu=e("MoveDiagonalIcon",[["polyline",{points:"13 5 19 5 19 11",key:"11219e"}],["polyline",{points:"11 19 5 19 5 13",key:"sfq3wq"}],["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lu=e("MoveDownLeftIcon",[["path",{d:"M11 19H5V13",key:"1akmht"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wu=e("MoveDownRightIcon",[["path",{d:"M19 13V19H13",key:"10vkzq"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cu=e("MoveDownIcon",[["path",{d:"M8 18L12 22L16 18",key:"cskvfv"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bu=e("MoveHorizontalIcon",[["polyline",{points:"18 8 22 12 18 16",key:"1hqrds"}],["polyline",{points:"6 8 2 12 6 16",key:"f0ernq"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Su=e("MoveLeftIcon",[["path",{d:"M6 8L2 12L6 16",key:"kyvwex"}],["path",{d:"M2 12H22",key:"1m8cig"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qu=e("MoveRightIcon",[["path",{d:"M18 8L22 12L18 16",key:"1r0oui"}],["path",{d:"M2 12H22",key:"1m8cig"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Au=e("MoveUpLeftIcon",[["path",{d:"M5 11V5H11",key:"3q78g9"}],["path",{d:"M5 5L19 19",key:"5zm2fv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hu=e("MoveUpRightIcon",[["path",{d:"M13 5H19V11",key:"1n1gyv"}],["path",{d:"M19 5L5 19",key:"72u4yj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zu=e("MoveUpIcon",[["path",{d:"M8 6L12 2L16 6",key:"1yvkyx"}],["path",{d:"M12 2V22",key:"r89rzk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vu=e("MoveVerticalIcon",[["polyline",{points:"8 18 12 22 16 18",key:"1uutw3"}],["polyline",{points:"8 6 12 2 16 6",key:"d60sxy"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pu=e("MoveIcon",[["polyline",{points:"5 9 2 12 5 15",key:"1r5uj5"}],["polyline",{points:"9 5 12 2 15 5",key:"5v383o"}],["polyline",{points:"15 19 12 22 9 19",key:"g7qi8m"}],["polyline",{points:"19 9 22 12 19 15",key:"tpp73q"}],["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ju=e("Music2Icon",[["circle",{cx:"8",cy:"18",r:"4",key:"1fc0mg"}],["path",{d:"M12 18V2l7 4",key:"g04rme"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _u=e("Music3Icon",[["circle",{cx:"12",cy:"18",r:"4",key:"m3r9ws"}],["path",{d:"M16 18V2",key:"40x2m5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Du=e("Music4Icon",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["path",{d:"m9 9 12-2",key:"1e64n2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bu=e("MusicIcon",[["path",{d:"M9 18V5l12-2v13",key:"1jmyc2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["circle",{cx:"18",cy:"16",r:"3",key:"1hluhg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fu=e("Navigation2OffIcon",[["path",{d:"M9.31 9.31 5 21l7-4 7 4-1.17-3.17",key:"qoq2o2"}],["path",{d:"M14.53 8.88 12 2l-1.17 3.17",key:"k3sjzy"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tu=e("Navigation2Icon",[["polygon",{points:"12 2 19 21 12 17 5 21 12 2",key:"x8c0qg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ru=e("NavigationOffIcon",[["path",{d:"M8.43 8.43 3 11l8 2 2 8 2.57-5.43",key:"1vdtb7"}],["path",{d:"M17.39 11.73 22 2l-9.73 4.61",key:"tya3r6"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ou=e("NavigationIcon",[["polygon",{points:"3 11 22 2 13 21 11 13 3 11",key:"1ltx0t"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uu=e("NetworkIcon",[["rect",{x:"16",y:"16",width:"6",height:"6",rx:"1",key:"4q2zg0"}],["rect",{x:"2",y:"16",width:"6",height:"6",rx:"1",key:"8cvhb9"}],["rect",{x:"9",y:"2",width:"6",height:"6",rx:"1",key:"1egb70"}],["path",{d:"M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3",key:"1jsf9p"}],["path",{d:"M12 12V8",key:"2874zd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Eu=e("NewspaperIcon",[["path",{d:"M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",key:"7pis2x"}],["path",{d:"M18 14h-8",key:"sponae"}],["path",{d:"M15 18h-5",key:"95g1m2"}],["path",{d:"M10 6h8v4h-8V6Z",key:"smlsk5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zu=e("NfcIcon",[["path",{d:"M6 8.32a7.43 7.43 0 0 1 0 7.36",key:"9iaqei"}],["path",{d:"M9.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"1yha7l"}],["path",{d:"M12.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"4iu2gk"}],["path",{d:"M16.37 2a20.16 20.16 0 0 1 0 20",key:"sap9u2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $u=e("NotebookPenIcon",[["path",{d:"M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4",key:"re6nr2"}],["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["path",{d:"M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4 1 1-4Z",key:"1dba1m"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gu=e("NotebookTabsIcon",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M15 2v20",key:"dcj49h"}],["path",{d:"M15 7h5",key:"1xj5lc"}],["path",{d:"M15 12h5",key:"w5shd9"}],["path",{d:"M15 17h5",key:"1qaofu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nu=e("NotebookTextIcon",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M9.5 8h5",key:"11mslq"}],["path",{d:"M9.5 12H16",key:"ktog6x"}],["path",{d:"M9.5 16H14",key:"p1seyn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wu=e("NotebookIcon",[["path",{d:"M2 6h4",key:"aawbzj"}],["path",{d:"M2 10h4",key:"l0bgd4"}],["path",{d:"M2 14h4",key:"1gsvsf"}],["path",{d:"M2 18h4",key:"1bu2t1"}],["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M16 2v20",key:"rotuqe"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xu=e("NotepadTextDashedIcon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["path",{d:"M16 4h2a2 2 0 0 1 2 2v2",key:"j91f56"}],["path",{d:"M20 12v2",key:"w8o0tu"}],["path",{d:"M20 18v2a2 2 0 0 1-2 2h-1",key:"1c9ggx"}],["path",{d:"M13 22h-2",key:"191ugt"}],["path",{d:"M7 22H6a2 2 0 0 1-2-2v-2",key:"1rt9px"}],["path",{d:"M4 14v-2",key:"1v0sqh"}],["path",{d:"M4 8V6a2 2 0 0 1 2-2h2",key:"1mwabg"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ku=e("NotepadTextIcon",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"16",height:"18",x:"4",y:"4",rx:"2",key:"1u9h20"}],["path",{d:"M8 10h6",key:"3oa6kw"}],["path",{d:"M8 14h8",key:"1fgep2"}],["path",{d:"M8 18h5",key:"17enja"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ju=e("NutOffIcon",[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592a7.01 7.01 0 0 0 4.125-2.939",key:"1xcvy9"}],["path",{d:"M19 10v3.343",key:"163tfc"}],["path",{d:"M12 12c-1.349-.573-1.905-1.005-2.5-2-.546.902-1.048 1.353-2.5 2-1.018-.644-1.46-1.08-2-2-1.028.71-1.69.918-3 1 1.081-1.048 1.757-2.03 2-3 .194-.776.84-1.551 1.79-2.21m11.654 5.997c.887-.457 1.28-.891 1.556-1.787 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4-.74 0-1.461.068-2.15.192",key:"17914v"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yu=e("NutIcon",[["path",{d:"M12 4V2",key:"1k5q1u"}],["path",{d:"M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4",key:"1tgyif"}],["path",{d:"M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z",key:"tnsqj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B1=e("OctagonAlertIcon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F1=e("OctagonPauseIcon",[["path",{d:"M10 15V9",key:"1lckn7"}],["path",{d:"M14 15V9",key:"1muqhk"}],["path",{d:"M7.714 2h8.572L22 7.714v8.572L16.286 22H7.714L2 16.286V7.714z",key:"p5imkh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T1=e("OctagonXIcon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qu=e("OctagonIcon",[["polygon",{points:"7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2",key:"h1p8hx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e5=e("OptionIcon",[["path",{d:"M3 3h6l6 18h6",key:"ph9rgk"}],["path",{d:"M14 3h7",key:"16f0ms"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t5=e("OrbitIcon",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416",key:"eohfx2"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416",key:"19pvbm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a5=e("OrigamiIcon",[["path",{d:"M12 12V4a1 1 0 0 1 1-1h6.297a1 1 0 0 1 .651 1.759l-4.696 4.025",key:"1bx4vc"}],["path",{d:"m12 21-7.414-7.414A2 2 0 0 1 4 12.172V6.415a1.002 1.002 0 0 1 1.707-.707L20 20.009",key:"1h3km6"}],["path",{d:"m12.214 3.381 8.414 14.966a1 1 0 0 1-.167 1.199l-1.168 1.163a1 1 0 0 1-.706.291H6.351a1 1 0 0 1-.625-.219L3.25 18.8a1 1 0 0 1 .631-1.781l4.165.027",key:"1hj4wg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o5=e("Package2Icon",[["path",{d:"M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z",key:"1ront0"}],["path",{d:"m3 9 2.45-4.9A2 2 0 0 1 7.24 3h9.52a2 2 0 0 1 1.8 1.1L21 9",key:"19h2x1"}],["path",{d:"M12 3v6",key:"1holv5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c5=e("PackageCheckIcon",[["path",{d:"m16 16 2 2 4-4",key:"gfu2re"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n5=e("PackageMinusIcon",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i5=e("PackageOpenIcon",[["path",{d:"M12 22v-9",key:"x3hkom"}],["path",{d:"M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z",key:"2ntwy6"}],["path",{d:"M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13",key:"1pmm1c"}],["path",{d:"M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z",key:"12ttoo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r5=e("PackagePlusIcon",[["path",{d:"M16 16h6",key:"100bgy"}],["path",{d:"M19 13v6",key:"85cyf1"}],["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d5=e("PackageSearchIcon",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["circle",{cx:"18.5",cy:"15.5",r:"2.5",key:"b5zd12"}],["path",{d:"M20.27 17.27 22 19",key:"1l4muz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h5=e("PackageXIcon",[["path",{d:"M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14",key:"e7tb2h"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}],["path",{d:"m17 13 5 5m-5 0 5-5",key:"im3w4b"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l5=e("PackageIcon",[["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}],["path",{d:"M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z",key:"hh9hay"}],["path",{d:"m3.3 7 8.7 5 8.7-5",key:"g66t2b"}],["path",{d:"M12 22V12",key:"d0xqtd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s5=e("PaintBucketIcon",[["path",{d:"m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z",key:"irua1i"}],["path",{d:"m5 2 5 5",key:"1lls2c"}],["path",{d:"M2 13h15",key:"1hkzvu"}],["path",{d:"M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z",key:"xk76lq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y5=e("PaintRollerIcon",[["rect",{width:"16",height:"6",x:"2",y:"2",rx:"2",key:"jcyz7m"}],["path",{d:"M10 16v-2a2 2 0 0 1 2-2h8a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",key:"1b9h7c"}],["rect",{width:"4",height:"6",x:"8",y:"16",rx:"1",key:"d6e7yl"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R1=e("PaintbrushVerticalIcon",[["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M14 2v4",key:"qmzblu"}],["path",{d:"M17 2a1 1 0 0 1 1 1v9H6V3a1 1 0 0 1 1-1z",key:"ycvu00"}],["path",{d:"M6 12a1 1 0 0 0-1 1v1a2 2 0 0 0 2 2h2a1 1 0 0 1 1 1v2.9a2 2 0 1 0 4 0V17a1 1 0 0 1 1-1h2a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1",key:"iw4wnp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p5=e("PaintbrushIcon",[["path",{d:"M18.37 2.63 14 7l-1.59-1.59a2 2 0 0 0-2.82 0L8 7l9 9 1.59-1.59a2 2 0 0 0 0-2.82L17 10l4.37-4.37a2.12 2.12 0 1 0-3-3Z",key:"m6k5sh"}],["path",{d:"M9 8c-2 3-4 3.5-7 4l8 10c2-1 6-5 6-7",key:"arzq70"}],["path",{d:"M14.5 17.5 4.5 15",key:"s7fvrz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k5=e("PaletteIcon",[["circle",{cx:"13.5",cy:"6.5",r:".5",fill:"currentColor",key:"1okk4w"}],["circle",{cx:"17.5",cy:"10.5",r:".5",fill:"currentColor",key:"f64h9f"}],["circle",{cx:"8.5",cy:"7.5",r:".5",fill:"currentColor",key:"fotxhn"}],["circle",{cx:"6.5",cy:"12.5",r:".5",fill:"currentColor",key:"qy21gx"}],["path",{d:"M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z",key:"12rzf8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u5=e("PanelBottomCloseIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m15 8-3 3-3-3",key:"1oxy1z"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O1=e("PanelBottomDashedIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 15h1",key:"171nev"}],["path",{d:"M19 15h2",key:"1vnucp"}],["path",{d:"M3 15h2",key:"8bym0q"}],["path",{d:"M9 15h1",key:"1tg3ks"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M5=e("PanelBottomOpenIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"m9 10 3-3 3 3",key:"11gsxs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m5=e("PanelBottomIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U1=e("PanelLeftCloseIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m16 15-3-3 3-3",key:"14y99z"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E1=e("PanelLeftDashedIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 14v1",key:"askpd8"}],["path",{d:"M9 19v2",key:"16tejx"}],["path",{d:"M9 3v2",key:"1noubl"}],["path",{d:"M9 9v1",key:"19ebxg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z1=e("PanelLeftOpenIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"m14 9 3 3-3 3",key:"8010ee"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $1=e("PanelLeftIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v5=e("PanelRightCloseIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m8 9 3 3-3 3",key:"12hl5m"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G1=e("PanelRightDashedIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 14v1",key:"ilsfch"}],["path",{d:"M15 19v2",key:"1fst2f"}],["path",{d:"M15 3v2",key:"z204g4"}],["path",{d:"M15 9v1",key:"z2a8b1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g5=e("PanelRightOpenIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}],["path",{d:"m10 15-3-3 3-3",key:"1pgupc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I5=e("PanelRightIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x5=e("PanelTopCloseIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m9 16 3-3 3 3",key:"1idcnm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N1=e("PanelTopDashedIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M14 9h1",key:"l0svgy"}],["path",{d:"M19 9h2",key:"te2zfg"}],["path",{d:"M3 9h2",key:"1h4ldw"}],["path",{d:"M9 9h1",key:"15jzuz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f5=e("PanelTopOpenIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"m15 14-3 3-3-3",key:"g215vf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L5=e("PanelTopIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w5=e("PanelsLeftBottomIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M9 15h12",key:"5ijen5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C5=e("PanelsRightBottomIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 15h12",key:"1wkqb3"}],["path",{d:"M15 3v18",key:"14nvp0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W1=e("PanelsTopLeftIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M9 21V9",key:"1oto5p"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b5=e("PaperclipIcon",[["path",{d:"m21.44 11.05-9.19 9.19a6 6 0 0 1-8.49-8.49l8.57-8.57A4 4 0 1 1 18 8.84l-8.59 8.57a2 2 0 0 1-2.83-2.83l8.49-8.48",key:"1u3ebp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S5=e("ParenthesesIcon",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q5=e("ParkingMeterIcon",[["path",{d:"M9 9a3 3 0 1 1 6 0",key:"jdoeu8"}],["path",{d:"M12 12v3",key:"158kv8"}],["path",{d:"M11 15h2",key:"199qp6"}],["path",{d:"M19 9a7 7 0 1 0-13.6 2.3C6.4 14.4 8 19 8 19h8s1.6-4.6 2.6-7.7c.3-.8.4-1.5.4-2.3",key:"1l50wn"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A5=e("PartyPopperIcon",[["path",{d:"M5.8 11.3 2 22l10.7-3.79",key:"gwxi1d"}],["path",{d:"M4 3h.01",key:"1vcuye"}],["path",{d:"M22 8h.01",key:"1mrtc2"}],["path",{d:"M15 2h.01",key:"1cjtqr"}],["path",{d:"M22 20h.01",key:"1mrys2"}],["path",{d:"m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12v0c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",key:"bpx1uq"}],["path",{d:"m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11v0c-.11.7-.72 1.22-1.43 1.22H17",key:"1pd0s7"}],["path",{d:"m11 2 .33.82c.34.86-.2 1.82-1.11 1.98v0C9.52 4.9 9 5.52 9 6.23V7",key:"zq5xbz"}],["path",{d:"M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",key:"4kbmks"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T2=e("PauseIcon",[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H5=e("PawPrintIcon",[["circle",{cx:"11",cy:"4",r:"2",key:"vol9p0"}],["circle",{cx:"18",cy:"8",r:"2",key:"17gozi"}],["circle",{cx:"20",cy:"16",r:"2",key:"1v9bxh"}],["path",{d:"M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z",key:"1ydw1z"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z5=e("PcCaseIcon",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",key:"1uq1d7"}],["path",{d:"M15 14h.01",key:"1kp3bh"}],["path",{d:"M9 6h6",key:"dgm16u"}],["path",{d:"M9 10h6",key:"9gxzsh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X1=e("PenLineIcon",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V5=e("PenToolIcon",[["path",{d:"M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z",key:"nt11vn"}],["path",{d:"m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18",key:"15qc1e"}],["path",{d:"m2.3 2.3 7.286 7.286",key:"1wuzzi"}],["circle",{cx:"11",cy:"11",r:"2",key:"xmgehs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K1=e("PenIcon",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P5=e("PencilLineIcon",[["path",{d:"M12 20h9",key:"t2du7b"}],["path",{d:"M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z",key:"ymcmye"}],["path",{d:"m15 5 3 3",key:"1w25hb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j5=e("PencilRulerIcon",[["path",{d:"m15 5 4 4",key:"1mk7zo"}],["path",{d:"M13 7 8.7 2.7a2.41 2.41 0 0 0-3.4 0L2.7 5.3a2.41 2.41 0 0 0 0 3.4L7 13",key:"orapub"}],["path",{d:"m8 6 2-2",key:"115y1s"}],["path",{d:"m2 22 5.5-1.5L21.17 6.83a2.82 2.82 0 0 0-4-4L3.5 16.5Z",key:"hes763"}],["path",{d:"m18 16 2-2",key:"ee94s4"}],["path",{d:"m17 11 4.3 4.3c.94.94.94 2.46 0 3.4l-2.6 2.6c-.94.94-2.46.94-3.4 0L11 17",key:"cfq27r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _5=e("PencilIcon",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D5=e("PentagonIcon",[["path",{d:"M3.5 8.7c-.7.5-1 1.4-.7 2.2l2.8 8.7c.3.8 1 1.4 1.9 1.4h9.1c.9 0 1.6-.6 1.9-1.4l2.8-8.7c.3-.8 0-1.7-.7-2.2l-7.4-5.3a2.1 2.1 0 0 0-2.4 0Z",key:"hsj90r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B5=e("PercentIcon",[["line",{x1:"19",x2:"5",y1:"5",y2:"19",key:"1x9vlm"}],["circle",{cx:"6.5",cy:"6.5",r:"2.5",key:"4mh3h7"}],["circle",{cx:"17.5",cy:"17.5",r:"2.5",key:"1mdrzq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F5=e("PersonStandingIcon",[["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["path",{d:"m9 20 3-6 3 6",key:"se2kox"}],["path",{d:"m6 8 6 2 6-2",key:"4o3us4"}],["path",{d:"M12 10v4",key:"1kjpxc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T5=e("PhoneCallIcon",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}],["path",{d:"M14.05 2a9 9 0 0 1 8 7.94",key:"vmijpz"}],["path",{d:"M14.05 6A5 5 0 0 1 18 10",key:"13nbpp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R5=e("PhoneForwardedIcon",[["polyline",{points:"18 2 22 6 18 10",key:"6vjanh"}],["line",{x1:"14",x2:"22",y1:"6",y2:"6",key:"1jsywh"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O5=e("PhoneIncomingIcon",[["polyline",{points:"16 2 16 8 22 8",key:"1ygljm"}],["line",{x1:"22",x2:"16",y1:"2",y2:"8",key:"1xzwqn"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U5=e("PhoneMissedIcon",[["line",{x1:"22",x2:"16",y1:"2",y2:"8",key:"1xzwqn"}],["line",{x1:"16",x2:"22",y1:"2",y2:"8",key:"13zxdn"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E5=e("PhoneOffIcon",[["path",{d:"M10.68 13.31a16 16 0 0 0 3.41 2.6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7 2 2 0 0 1 1.72 2v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.42 19.42 0 0 1-3.33-2.67m-2.67-3.34a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91",key:"z86iuo"}],["line",{x1:"22",x2:"2",y1:"2",y2:"22",key:"11kh81"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z5=e("PhoneOutgoingIcon",[["polyline",{points:"22 8 22 2 16 2",key:"1g204g"}],["line",{x1:"16",x2:"22",y1:"8",y2:"2",key:"1ggias"}],["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $5=e("PhoneIcon",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G5=e("PiIcon",[["line",{x1:"9",x2:"9",y1:"4",y2:"20",key:"ovs5a5"}],["path",{d:"M4 7c0-1.7 1.3-3 3-3h13",key:"10pag4"}],["path",{d:"M18 20c-1.7 0-3-1.3-3-3V4",key:"1gaosr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N5=e("PianoIcon",[["path",{d:"M18.5 8c-1.4 0-2.6-.8-3.2-2A6.87 6.87 0 0 0 2 9v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-8.5C22 9.6 20.4 8 18.5 8",key:"lag0yf"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M6 14v4",key:"9ng0ue"}],["path",{d:"M10 14v4",key:"1v8uk5"}],["path",{d:"M14 14v4",key:"1tqops"}],["path",{d:"M18 14v4",key:"18uqwm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W5=e("PickaxeIcon",[["path",{d:"M14.531 12.469 6.619 20.38a1 1 0 1 1-3-3l7.912-7.912",key:"we99rg"}],["path",{d:"M15.686 4.314A12.5 12.5 0 0 0 5.461 2.958 1 1 0 0 0 5.58 4.71a22 22 0 0 1 6.318 3.393",key:"1w6hck"}],["path",{d:"M17.7 3.7a1 1 0 0 0-1.4 0l-4.6 4.6a1 1 0 0 0 0 1.4l2.6 2.6a1 1 0 0 0 1.4 0l4.6-4.6a1 1 0 0 0 0-1.4z",key:"15hgfx"}],["path",{d:"M19.686 8.314a12.501 12.501 0 0 1 1.356 10.225 1 1 0 0 1-1.751-.119 22 22 0 0 0-3.393-6.319",key:"452b4h"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X5=e("PictureInPicture2Icon",[["path",{d:"M21 9V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h4",key:"daa4of"}],["rect",{width:"10",height:"7",x:"12",y:"13",rx:"2",key:"1nb8gs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K5=e("PictureInPictureIcon",[["path",{d:"M8 4.5v5H3m-1-6 6 6m13 0v-3c0-1.16-.84-2-2-2h-7m-9 9v2c0 1.05.95 2 2 2h3",key:"bcd8fb"}],["rect",{width:"10",height:"7",x:"12",y:"13.5",ry:"2",key:"136fx3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J5=e("PieChartIcon",[["path",{d:"M21.21 15.89A10 10 0 1 1 8 2.83",key:"k2fpak"}],["path",{d:"M22 12A10 10 0 0 0 12 2v10z",key:"1rfc4y"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y5=e("PiggyBankIcon",[["path",{d:"M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2h0V5z",key:"uf6l00"}],["path",{d:"M2 9v1c0 1.1.9 2 2 2h1",key:"nm575m"}],["path",{d:"M16 11h0",key:"k2aug8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q5=e("PilcrowLeftIcon",[["path",{d:"M14 3v11",key:"mlfb7b"}],["path",{d:"M14 9h-3a3 3 0 0 1 0-6h9",key:"1ulc19"}],["path",{d:"M18 3v11",key:"1phi0r"}],["path",{d:"M22 18H2l4-4",key:"yt65j9"}],["path",{d:"m6 22-4-4",key:"6jgyf5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e3=e("PilcrowRightIcon",[["path",{d:"M10 3v11",key:"o3l5kj"}],["path",{d:"M10 9H7a1 1 0 0 1 0-6h8",key:"1wb1nc"}],["path",{d:"M14 3v11",key:"mlfb7b"}],["path",{d:"m18 14 4 4H2",key:"4r8io1"}],["path",{d:"m22 18-4 4",key:"1hjjrd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t3=e("PilcrowIcon",[["path",{d:"M13 4v16",key:"8vvj80"}],["path",{d:"M17 4v16",key:"7dpous"}],["path",{d:"M19 4H9.5a4.5 4.5 0 0 0 0 9H13",key:"sh4n9v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a3=e("PillBottleIcon",[["path",{d:"M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4",key:"17ldeb"}],["path",{d:"M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7",key:"nc37y6"}],["rect",{width:"16",height:"5",x:"4",y:"2",rx:"1",key:"3jeezo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o3=e("PillIcon",[["path",{d:"m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",key:"wa1lgi"}],["path",{d:"m8.5 8.5 7 7",key:"rvfmvr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c3=e("PinOffIcon",[["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}],["line",{x1:"12",x2:"12",y1:"17",y2:"22",key:"1jrz49"}],["path",{d:"M9 9v1.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24V17h12",key:"13x2n8"}],["path",{d:"M15 9.34V6h1a2 2 0 0 0 0-4H7.89",key:"reo3ki"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n3=e("PinIcon",[["line",{x1:"12",x2:"12",y1:"17",y2:"22",key:"1jrz49"}],["path",{d:"M5 17h14v-1.76a2 2 0 0 0-1.11-1.79l-1.78-.9A2 2 0 0 1 15 10.76V6h1a2 2 0 0 0 0-4H8a2 2 0 0 0 0 4h1v4.76a2 2 0 0 1-1.11 1.79l-1.78.9A2 2 0 0 0 5 15.24Z",key:"13yl11"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i3=e("PipetteIcon",[["path",{d:"m2 22 1-1h3l9-9",key:"1sre89"}],["path",{d:"M3 21v-3l9-9",key:"hpe2y6"}],["path",{d:"m15 6 3.4-3.4a2.1 2.1 0 1 1 3 3L18 9l.4.4a2.1 2.1 0 1 1-3 3l-3.8-3.8a2.1 2.1 0 1 1 3-3l.4.4Z",key:"196du1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r3=e("PizzaIcon",[["path",{d:"M15 11h.01",key:"rns66s"}],["path",{d:"M11 15h.01",key:"k85uqc"}],["path",{d:"M16 16h.01",key:"1f9h7w"}],["path",{d:"m2 16 20 6-6-20A20 20 0 0 0 2 16",key:"e4slt2"}],["path",{d:"M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4",key:"rerf8f"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d3=e("PlaneLandingIcon",[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z",key:"1ma21e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h3=e("PlaneTakeoffIcon",[["path",{d:"M2 22h20",key:"272qi7"}],["path",{d:"M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z",key:"fkigj9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l3=e("PlaneIcon",[["path",{d:"M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z",key:"1v9wt8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R2=e("PlayIcon",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s3=e("Plug2Icon",[["path",{d:"M9 2v6",key:"17ngun"}],["path",{d:"M15 2v6",key:"s7yy2p"}],["path",{d:"M12 17v5",key:"bb1du9"}],["path",{d:"M5 8h14",key:"pcz4l3"}],["path",{d:"M6 11V8h12v3a6 6 0 1 1-12 0v0Z",key:"nd4hoy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y3=e("PlugZap2Icon",[["path",{d:"m13 2-2 2.5h3L12 7",key:"1me98u"}],["path",{d:"M10 14v-3",key:"1mllf3"}],["path",{d:"M14 14v-3",key:"1l3fkq"}],["path",{d:"M11 19c-1.7 0-3-1.3-3-3v-2h8v2c0 1.7-1.3 3-3 3Z",key:"jd5pat"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p3=e("PlugZapIcon",[["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m18 3-4 4h6l-4 4",key:"16psg9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k3=e("PlugIcon",[["path",{d:"M12 22v-5",key:"1ega77"}],["path",{d:"M9 8V2",key:"14iosj"}],["path",{d:"M15 8V2",key:"18g5xt"}],["path",{d:"M18 8v5a4 4 0 0 1-4 4h-4a4 4 0 0 1-4-4V8Z",key:"osxo6l"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b2=e("PlusIcon",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u3=e("PocketKnifeIcon",[["path",{d:"M3 2v1c0 1 2 1 2 2S3 6 3 7s2 1 2 2-2 1-2 2 2 1 2 2",key:"19w3oe"}],["path",{d:"M18 6h.01",key:"1v4wsw"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"M20.83 8.83a4 4 0 0 0-5.66-5.66l-12 12a4 4 0 1 0 5.66 5.66Z",key:"6fykxj"}],["path",{d:"M18 11.66V22a4 4 0 0 0 4-4V6",key:"1utzek"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M3=e("PocketIcon",[["path",{d:"M4 3h16a2 2 0 0 1 2 2v6a10 10 0 0 1-10 10A10 10 0 0 1 2 11V5a2 2 0 0 1 2-2z",key:"1mz881"}],["polyline",{points:"8 10 12 14 16 10",key:"w4mbv5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m3=e("PodcastIcon",[["path",{d:"M16.85 18.58a9 9 0 1 0-9.7 0",key:"d71mpg"}],["path",{d:"M8 14a5 5 0 1 1 8 0",key:"fc81rn"}],["circle",{cx:"12",cy:"11",r:"1",key:"1gvufo"}],["path",{d:"M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z",key:"za5kbj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v3=e("PointerOffIcon",[["path",{d:"M10 4.5V4a2 2 0 0 0-2.41-1.957",key:"jsi14n"}],["path",{d:"M13.9 8.4a2 2 0 0 0-1.26-1.295",key:"hirc7f"}],["path",{d:"M21.7 16.2A8 8 0 0 0 22 14v-3a2 2 0 1 0-4 0v-1a2 2 0 0 0-3.63-1.158",key:"1jxb2e"}],["path",{d:"m7 15-1.8-1.8a2 2 0 0 0-2.79 2.86L6 19.7a7.74 7.74 0 0 0 6 2.3h2a8 8 0 0 0 5.657-2.343",key:"10r7hm"}],["path",{d:"M6 6v8",key:"tv5xkp"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g3=e("PointerIcon",[["path",{d:"M22 14a8 8 0 0 1-8 8",key:"56vcr3"}],["path",{d:"M18 11v-1a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0",key:"1pp0yd"}],["path",{d:"M14 10V9a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v1",key:"u654g"}],["path",{d:"M10 9.5V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v10",key:"1e2dtv"}],["path",{d:"M18 11a2 2 0 1 1 4 0v3a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15",key:"g6ys72"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I3=e("PopcornIcon",[["path",{d:"M18 8a2 2 0 0 0 0-4 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0-4 0 2 2 0 0 0 0 4",key:"10td1f"}],["path",{d:"M10 22 9 8",key:"yjptiv"}],["path",{d:"m14 22 1-14",key:"8jwc8b"}],["path",{d:"M20 8c.5 0 .9.4.8 1l-2.6 12c-.1.5-.7 1-1.2 1H7c-.6 0-1.1-.4-1.2-1L3.2 9c-.1-.6.3-1 .8-1Z",key:"1qo33t"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x3=e("PopsicleIcon",[["path",{d:"M18.6 14.4c.8-.8.8-2 0-2.8l-8.1-8.1a4.95 4.95 0 1 0-7.1 7.1l8.1 8.1c.9.7 2.1.7 2.9-.1Z",key:"1o68ps"}],["path",{d:"m22 22-5.5-5.5",key:"17o70y"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f3=e("PoundSterlingIcon",[["path",{d:"M18 7c0-5.333-8-5.333-8 0",key:"1prm2n"}],["path",{d:"M10 7v14",key:"18tmcs"}],["path",{d:"M6 21h12",key:"4dkmi1"}],["path",{d:"M6 13h10",key:"ybwr4a"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L3=e("PowerOffIcon",[["path",{d:"M18.36 6.64A9 9 0 0 1 20.77 15",key:"dxknvb"}],["path",{d:"M6.16 6.16a9 9 0 1 0 12.68 12.68",key:"1x7qb5"}],["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w3=e("PowerIcon",[["path",{d:"M12 2v10",key:"mnfbl"}],["path",{d:"M18.4 6.6a9 9 0 1 1-12.77.04",key:"obofu9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C3=e("PresentationIcon",[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b3=e("PrinterIcon",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S3=e("ProjectorIcon",[["path",{d:"M5 7 3 5",key:"1yys58"}],["path",{d:"M9 6V3",key:"1ptz9u"}],["path",{d:"m13 7 2-2",key:"1w3vmq"}],["circle",{cx:"9",cy:"13",r:"3",key:"1mma13"}],["path",{d:"M11.83 12H20a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h2.17",key:"2frwzc"}],["path",{d:"M16 16h2",key:"dnq2od"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q3=e("ProportionsIcon",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M12 9v11",key:"1fnkrn"}],["path",{d:"M2 9h13a2 2 0 0 1 2 2v9",key:"11z3ex"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A3=e("PuzzleIcon",[["path",{d:"M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z",key:"i0oyt7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H3=e("PyramidIcon",[["path",{d:"M2.5 16.88a1 1 0 0 1-.32-1.43l9-13.02a1 1 0 0 1 1.64 0l9 13.01a1 1 0 0 1-.32 1.44l-8.51 4.86a2 2 0 0 1-1.98 0Z",key:"aenxs0"}],["path",{d:"M12 2v20",key:"t6zp3m"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z3=e("QrCodeIcon",[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V3=e("QuoteIcon",[["path",{d:"M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z",key:"4rm80e"}],["path",{d:"M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z",key:"10za9r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P3=e("RabbitIcon",[["path",{d:"M13 16a3 3 0 0 1 2.24 5",key:"1epib5"}],["path",{d:"M18 12h.01",key:"yjnet6"}],["path",{d:"M18 21h-8a4 4 0 0 1-4-4 7 7 0 0 1 7-7h.2L9.6 6.4a1 1 0 1 1 2.8-2.8L15.8 7h.2c3.3 0 6 2.7 6 6v1a2 2 0 0 1-2 2h-1a3 3 0 0 0-3 3",key:"ue9ozu"}],["path",{d:"M20 8.54V4a2 2 0 1 0-4 0v3",key:"49iql8"}],["path",{d:"M7.612 12.524a3 3 0 1 0-1.6 4.3",key:"1e33i0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j3=e("RadarIcon",[["path",{d:"M19.07 4.93A10 10 0 0 0 6.99 3.34",key:"z3du51"}],["path",{d:"M4 6h.01",key:"oypzma"}],["path",{d:"M2.29 9.62A10 10 0 1 0 21.31 8.35",key:"qzzz0"}],["path",{d:"M16.24 7.76A6 6 0 1 0 8.23 16.67",key:"1yjesh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M17.99 11.66A6 6 0 0 1 15.77 16.67",key:"1u2y91"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"m13.41 10.59 5.66-5.66",key:"mhq4k0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _3=e("RadiationIcon",[["path",{d:"M12 12h0.01",key:"6ztbls"}],["path",{d:"M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z",key:"wy49g3"}],["path",{d:"M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z",key:"vklnvr"}],["path",{d:"M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z",key:"wkdf1o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D3=e("RadicalIcon",[["path",{d:"M3 12h3.28a1 1 0 0 1 .948.684l2.298 7.934a.5.5 0 0 0 .96-.044L13.82 4.771A1 1 0 0 1 14.792 4H21",key:"1mqj8i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B3=e("RadioReceiverIcon",[["path",{d:"M5 16v2",key:"g5qcv5"}],["path",{d:"M19 16v2",key:"1gbaio"}],["rect",{width:"20",height:"8",x:"2",y:"8",rx:"2",key:"vjsjur"}],["path",{d:"M18 12h0",key:"1ucjzd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F3=e("RadioTowerIcon",[["path",{d:"M4.9 16.1C1 12.2 1 5.8 4.9 1.9",key:"s0qx1y"}],["path",{d:"M7.8 4.7a6.14 6.14 0 0 0-.8 7.5",key:"1idnkw"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}],["path",{d:"M16.2 4.8c2 2 2.26 5.11.8 7.47",key:"ojru2q"}],["path",{d:"M19.1 1.9a9.96 9.96 0 0 1 0 14.1",key:"rhi7fg"}],["path",{d:"M9.5 18h5",key:"mfy3pd"}],["path",{d:"m8 22 4-11 4 11",key:"25yftu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T3=e("RadioIcon",[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R3=e("RadiusIcon",[["path",{d:"M20.34 17.52a10 10 0 1 0-2.82 2.82",key:"fydyku"}],["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["path",{d:"m13.41 13.41 4.18 4.18",key:"1gqbwc"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O3=e("RailSymbolIcon",[["path",{d:"M5 15h14",key:"m0yey3"}],["path",{d:"M5 9h14",key:"7tsvo6"}],["path",{d:"m14 20-5-5 6-6-5-5",key:"1jo42i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U3=e("RainbowIcon",[["path",{d:"M22 17a10 10 0 0 0-20 0",key:"ozegv"}],["path",{d:"M6 17a6 6 0 0 1 12 0",key:"5giftw"}],["path",{d:"M10 17a2 2 0 0 1 4 0",key:"gnsikk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E3=e("RatIcon",[["path",{d:"M17 5c0-1.7-1.3-3-3-3s-3 1.3-3 3c0 .8.3 1.5.8 2H11c-3.9 0-7 3.1-7 7v0c0 2.2 1.8 4 4 4",key:"16aj0u"}],["path",{d:"M16.8 3.9c.3-.3.6-.5 1-.7 1.5-.6 3.3.1 3.9 1.6.6 1.5-.1 3.3-1.6 3.9l1.6 2.8c.2.3.2.7.2 1-.2.8-.9 1.2-1.7 1.1 0 0-1.6-.3-2.7-.6H17c-1.7 0-3 1.3-3 3",key:"1crdmb"}],["path",{d:"M13.2 18a3 3 0 0 0-2.2-5",key:"1ol3lk"}],["path",{d:"M13 22H4a2 2 0 0 1 0-4h12",key:"bt3f23"}],["path",{d:"M16 9h.01",key:"1bdo4e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z3=e("RatioIcon",[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}],["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $3=e("ReceiptCentIcon",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M12 6.5v11",key:"ecfhkf"}],["path",{d:"M15 9.4a4 4 0 1 0 0 5.2",key:"1makmb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G3=e("ReceiptEuroIcon",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 12h5",key:"1g6qi8"}],["path",{d:"M16 9.5a4 4 0 1 0 0 5.2",key:"b2px4r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N3=e("ReceiptIndianRupeeIcon",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 7h8",key:"i86dvs"}],["path",{d:"M12 17.5 8 15h1a4 4 0 0 0 0-8",key:"grpkl4"}],["path",{d:"M8 11h8",key:"vwpz6n"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W3=e("ReceiptJapaneseYenIcon",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"m12 10 3-3",key:"1mc12w"}],["path",{d:"m9 7 3 3v7.5",key:"39i0xv"}],["path",{d:"M9 11h6",key:"1fldmi"}],["path",{d:"M9 15h6",key:"cctwl0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X3=e("ReceiptPoundSterlingIcon",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 13h5",key:"1k9z8w"}],["path",{d:"M10 17V9.5a2.5 2.5 0 0 1 5 0",key:"1dzgp0"}],["path",{d:"M8 17h7",key:"8mjdqu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K3=e("ReceiptRussianRubleIcon",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M8 15h5",key:"vxg57a"}],["path",{d:"M8 11h5a2 2 0 1 0 0-4h-3v10",key:"1usi5u"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J3=e("ReceiptSwissFrancIcon",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M10 17V7h5",key:"k7jq18"}],["path",{d:"M10 11h4",key:"1i0mka"}],["path",{d:"M8 15h5",key:"vxg57a"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y3=e("ReceiptTextIcon",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M14 8H8",key:"1l3xfs"}],["path",{d:"M16 12H8",key:"1fr5h0"}],["path",{d:"M13 16H8",key:"wsln4y"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q3=e("ReceiptIcon",[["path",{d:"M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z",key:"q3az6g"}],["path",{d:"M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8",key:"1h4pet"}],["path",{d:"M12 17.5v-11",key:"1jc1ny"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J1=e("RectangleEllipsisIcon",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M17 12h.01",key:"1m0b6t"}],["path",{d:"M7 12h.01",key:"eqddd0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e6=e("RectangleHorizontalIcon",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"2",key:"9lu3g6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t6=e("RectangleVerticalIcon",[["rect",{width:"12",height:"20",x:"6",y:"2",rx:"2",key:"1oxtiu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a6=e("RecycleIcon",[["path",{d:"M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5",key:"x6z5xu"}],["path",{d:"M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12",key:"1x4zh5"}],["path",{d:"m14 16-3 3 3 3",key:"f6jyew"}],["path",{d:"M8.293 13.596 7.196 9.5 3.1 10.598",key:"wf1obh"}],["path",{d:"m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843",key:"9tzpgr"}],["path",{d:"m13.378 9.633 4.096 1.098 1.097-4.096",key:"1oe83g"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o6=e("Redo2Icon",[["path",{d:"m15 14 5-5-5-5",key:"12vg1m"}],["path",{d:"M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0A5.5 5.5 0 0 0 9.5 20H13",key:"19mnr4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c6=e("RedoDotIcon",[["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}],["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n6=e("RedoIcon",[["path",{d:"M21 7v6h-6",key:"3ptur4"}],["path",{d:"M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7",key:"1kgawr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i6=e("RefreshCcwDotIcon",[["path",{d:"M3 2v6h6",key:"18ldww"}],["path",{d:"M21 12A9 9 0 0 0 6 5.3L3 8",key:"1pbrqz"}],["path",{d:"M21 22v-6h-6",key:"usdfbe"}],["path",{d:"M3 12a9 9 0 0 0 15 6.7l3-2.7",key:"1hosoe"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r6=e("RefreshCcwIcon",[["path",{d:"M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"14sxne"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}],["path",{d:"M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",key:"1hlbsb"}],["path",{d:"M16 16h5v5",key:"ccwih5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d6=e("RefreshCwOffIcon",[["path",{d:"M21 8L18.74 5.74A9.75 9.75 0 0 0 12 3C11 3 10.03 3.16 9.13 3.47",key:"1krf6h"}],["path",{d:"M8 16H3v5",key:"1cv678"}],["path",{d:"M3 12C3 9.51 4 7.26 5.64 5.64",key:"ruvoct"}],["path",{d:"m3 16 2.26 2.26A9.75 9.75 0 0 0 12 21c2.49 0 4.74-1 6.36-2.64",key:"19q130"}],["path",{d:"M21 12c0 1-.16 1.97-.47 2.87",key:"4w8emr"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M22 22 2 2",key:"1r8tn9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ta=e("RefreshCwIcon",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h6=e("RefrigeratorIcon",[["path",{d:"M5 6a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6Z",key:"fpq118"}],["path",{d:"M5 10h14",key:"elsbfy"}],["path",{d:"M15 7v6",key:"1nx30x"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l6=e("RegexIcon",[["path",{d:"M17 3v10",key:"15fgeh"}],["path",{d:"m12.67 5.5 8.66 5",key:"1gpheq"}],["path",{d:"m12.67 10.5 8.66-5",key:"1dkfa6"}],["path",{d:"M9 17a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-2z",key:"swwfx4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s6=e("RemoveFormattingIcon",[["path",{d:"M4 7V4h16v3",key:"9msm58"}],["path",{d:"M5 20h6",key:"1h6pxn"}],["path",{d:"M13 4 8 20",key:"kqq6aj"}],["path",{d:"m15 15 5 5",key:"me55sn"}],["path",{d:"m20 15-5 5",key:"11p7ol"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y6=e("Repeat1Icon",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}],["path",{d:"M11 10h1v4",key:"70cz1p"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p6=e("Repeat2Icon",[["path",{d:"m2 9 3-3 3 3",key:"1ltn5i"}],["path",{d:"M13 18H7a2 2 0 0 1-2-2V6",key:"1r6tfw"}],["path",{d:"m22 15-3 3-3-3",key:"4rnwn2"}],["path",{d:"M11 6h6a2 2 0 0 1 2 2v10",key:"2f72bc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=e("RepeatIcon",[["path",{d:"m17 2 4 4-4 4",key:"nntrym"}],["path",{d:"M3 11v-1a4 4 0 0 1 4-4h14",key:"84bu3i"}],["path",{d:"m7 22-4-4 4-4",key:"1wqhfi"}],["path",{d:"M21 13v1a4 4 0 0 1-4 4H3",key:"1rx37r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u6=e("ReplaceAllIcon",[["path",{d:"M14 4c0-1.1.9-2 2-2",key:"1mvvbw"}],["path",{d:"M20 2c1.1 0 2 .9 2 2",key:"1mj6oe"}],["path",{d:"M22 8c0 1.1-.9 2-2 2",key:"v1wql3"}],["path",{d:"M16 10c-1.1 0-2-.9-2-2",key:"821ux0"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5c0-1.7 1.3-3 3-3h1",key:"13af7h"}],["rect",{width:"8",height:"8",x:"2",y:"14",rx:"2",key:"17ihk4"}],["path",{d:"M14 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"1w9p8c"}],["path",{d:"M20 14c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2",key:"m45eaa"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M6=e("ReplaceIcon",[["path",{d:"M14 4c0-1.1.9-2 2-2",key:"1mvvbw"}],["path",{d:"M20 2c1.1 0 2 .9 2 2",key:"1mj6oe"}],["path",{d:"M22 8c0 1.1-.9 2-2 2",key:"v1wql3"}],["path",{d:"M16 10c-1.1 0-2-.9-2-2",key:"821ux0"}],["path",{d:"m3 7 3 3 3-3",key:"x25e72"}],["path",{d:"M6 10V5c0-1.7 1.3-3 3-3h1",key:"13af7h"}],["rect",{width:"8",height:"8",x:"2",y:"14",rx:"2",key:"17ihk4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m6=e("ReplyAllIcon",[["polyline",{points:"7 17 2 12 7 7",key:"t83bqg"}],["polyline",{points:"12 17 7 12 12 7",key:"1g4ajm"}],["path",{d:"M22 18v-2a4 4 0 0 0-4-4H7",key:"1fcyog"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v6=e("ReplyIcon",[["polyline",{points:"9 17 4 12 9 7",key:"hvgpf2"}],["path",{d:"M20 18v-2a4 4 0 0 0-4-4H4",key:"5vmcpk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g6=e("RewindIcon",[["polygon",{points:"11 19 2 12 11 5 11 19",key:"14yba5"}],["polygon",{points:"22 19 13 12 22 5 22 19",key:"1pi1cj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I6=e("RibbonIcon",[["path",{d:"M17.75 9.01c-.52 2.08-1.83 3.64-3.18 5.49l-2.6 3.54-2.97 4-3.5-2.54 3.85-4.97c-1.86-2.61-2.8-3.77-3.16-5.44",key:"1njedg"}],["path",{d:"M17.75 9.01A7 7 0 0 0 6.2 9.1C6.06 8.5 6 7.82 6 7c0-3.5 2.83-5 5.98-5C15.24 2 18 3.5 18 7c0 .73-.09 1.4-.25 2.01Z",key:"10len7"}],["path",{d:"m9.35 14.53 2.64-3.31",key:"1wfi09"}],["path",{d:"m11.97 18.04 2.99 4 3.54-2.54-3.93-5",key:"1ezyge"}],["path",{d:"M14 8c0 1-1 2-2.01 3.22C11 10 10 9 10 8a2 2 0 1 1 4 0",key:"aw0zq5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x6=e("RocketIcon",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f6=e("RockingChairIcon",[["polyline",{points:"3.5 2 6.5 12.5 18 12.5",key:"y3iy52"}],["line",{x1:"9.5",x2:"5.5",y1:"12.5",y2:"20",key:"19vg5i"}],["line",{x1:"15",x2:"18.5",y1:"12.5",y2:"20",key:"1inpmv"}],["path",{d:"M2.75 18a13 13 0 0 0 18.5 0",key:"1nquas"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L6=e("RollerCoasterIcon",[["path",{d:"M6 19V5",key:"1r845m"}],["path",{d:"M10 19V6.8",key:"9j2tfs"}],["path",{d:"M14 19v-7.8",key:"10s8qv"}],["path",{d:"M18 5v4",key:"1tajlv"}],["path",{d:"M18 19v-6",key:"ielfq3"}],["path",{d:"M22 19V9",key:"158nzp"}],["path",{d:"M2 19V9a4 4 0 0 1 4-4c2 0 4 1.33 6 4s4 4 6 4a4 4 0 1 0-3-6.65",key:"1930oh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y1=e("Rotate3dIcon",[["path",{d:"M16.466 7.5C15.643 4.237 13.952 2 12 2 9.239 2 7 6.477 7 12s2.239 10 5 10c.342 0 .677-.069 1-.2",key:"10n0gc"}],["path",{d:"m15.194 13.707 3.814 1.86-1.86 3.814",key:"16shm9"}],["path",{d:"M19 15.57c-1.804.885-4.274 1.43-7 1.43-5.523 0-10-2.239-10-5s4.477-5 10-5c4.838 0 8.873 1.718 9.8 4",key:"1lxi77"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=e("RotateCcwSquareIcon",[["path",{d:"M20 9V7a2 2 0 0 0-2-2h-6",key:"19z8uc"}],["path",{d:"m15 2-3 3 3 3",key:"177bxs"}],["path",{d:"M20 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2",key:"d36hnl"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C6=e("RotateCcwIcon",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b6=e("RotateCwSquareIcon",[["path",{d:"M12 5H6a2 2 0 0 0-2 2v3",key:"l96uqu"}],["path",{d:"m9 8 3-3-3-3",key:"1gzgc3"}],["path",{d:"M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2",key:"1w2k5h"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S6=e("RotateCwIcon",[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q6=e("RouteOffIcon",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5c.4 0 .9-.1 1.3-.2",key:"1effex"}],["path",{d:"M5.2 5.2A3.5 3.53 0 0 0 6.5 12H12",key:"k9y2ds"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M21 15.3a3.5 3.5 0 0 0-3.3-3.3",key:"11nlu2"}],["path",{d:"M15 5h-4.3",key:"6537je"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A6=e("RouteIcon",[["circle",{cx:"6",cy:"19",r:"3",key:"1kj8tv"}],["path",{d:"M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15",key:"1d8sl"}],["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H6=e("RouterIcon",[["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",key:"w68u3i"}],["path",{d:"M6.01 18H6",key:"19vcac"}],["path",{d:"M10.01 18H10",key:"uamcmx"}],["path",{d:"M15 10v4",key:"qjz1xs"}],["path",{d:"M17.84 7.17a4 4 0 0 0-5.66 0",key:"1rif40"}],["path",{d:"M20.66 4.34a8 8 0 0 0-11.31 0",key:"6a5xfq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q1=e("Rows2Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 12h18",key:"1i2n21"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const et=e("Rows3Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z6=e("Rows4Icon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 7.5H3",key:"1hm9pq"}],["path",{d:"M21 12H3",key:"2avoz0"}],["path",{d:"M21 16.5H3",key:"n7jzkj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V6=e("RssIcon",[["path",{d:"M4 11a9 9 0 0 1 9 9",key:"pv89mb"}],["path",{d:"M4 4a16 16 0 0 1 16 16",key:"k0647b"}],["circle",{cx:"5",cy:"19",r:"1",key:"bfqh0e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P6=e("RulerIcon",[["path",{d:"M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z",key:"icamh8"}],["path",{d:"m14.5 12.5 2-2",key:"inckbg"}],["path",{d:"m11.5 9.5 2-2",key:"fmmyf7"}],["path",{d:"m8.5 6.5 2-2",key:"vc6u1g"}],["path",{d:"m17.5 15.5 2-2",key:"wo5hmg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j6=e("RussianRubleIcon",[["path",{d:"M6 11h8a4 4 0 0 0 0-8H9v18",key:"18ai8t"}],["path",{d:"M6 15h8",key:"1y8f6l"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _6=e("SailboatIcon",[["path",{d:"M22 18H2a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4Z",key:"1404fh"}],["path",{d:"M21 14 10 2 3 14h18Z",key:"1nzg7v"}],["path",{d:"M10 2v16",key:"1labyt"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D6=e("SaladIcon",[["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M11.38 12a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7 2.51 2.51 0 0 1 .03 1.1",key:"10xrj0"}],["path",{d:"m13 12 4-4",key:"1hckqy"}],["path",{d:"M10.9 7.25A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2",key:"1p4srx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B6=e("SandwichIcon",[["path",{d:"M3 11v3a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-3",key:"34v9d7"}],["path",{d:"M12 19H4a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3.83",key:"1k5vfb"}],["path",{d:"m3 11 7.77-6.04a2 2 0 0 1 2.46 0L21 11H3Z",key:"1oe7l6"}],["path",{d:"M12.97 19.77 7 15h12.5l-3.75 4.5a2 2 0 0 1-2.78.27Z",key:"1ts2ri"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F6=e("SatelliteDishIcon",[["path",{d:"M4 10a7.31 7.31 0 0 0 10 10Z",key:"1fzpp3"}],["path",{d:"m9 15 3-3",key:"88sc13"}],["path",{d:"M17 13a6 6 0 0 0-6-6",key:"15cc6u"}],["path",{d:"M21 13A10 10 0 0 0 11 3",key:"11nf8s"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T6=e("SatelliteIcon",[["path",{d:"M13 7 9 3 5 7l4 4",key:"vyckw6"}],["path",{d:"m17 11 4 4-4 4-4-4",key:"rchckc"}],["path",{d:"m8 12 4 4 6-6-4-4Z",key:"1sshf7"}],["path",{d:"m16 8 3-3",key:"x428zp"}],["path",{d:"M9 21a6 6 0 0 0-6-6",key:"1iajcf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R6=e("SaveAllIcon",[["path",{d:"M10 2v3a1 1 0 0 0 1 1h5",key:"1xspal"}],["path",{d:"M18 18v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6",key:"1ra60u"}],["path",{d:"M18 22H4a2 2 0 0 1-2-2V6",key:"pblm9e"}],["path",{d:"M8 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9.172a2 2 0 0 1 1.414.586l2.828 2.828A2 2 0 0 1 22 6.828V16a2 2 0 0 1-2.01 2z",key:"1yve0x"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O6=e("SaveIcon",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tt=e("Scale3dIcon",[["circle",{cx:"19",cy:"19",r:"2",key:"17f5cg"}],["circle",{cx:"5",cy:"5",r:"2",key:"1gwv83"}],["path",{d:"M5 7v12h12",key:"vtaa4r"}],["path",{d:"m5 19 6-6",key:"jh6hbb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U6=e("ScaleIcon",[["path",{d:"m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"7g6ntu"}],["path",{d:"m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z",key:"ijws7r"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2",key:"3gwbw2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E6=e("ScalingIcon",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M14 15H9v-5",key:"pi4jk9"}],["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M21 3 9 15",key:"15kdhq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z6=e("ScanBarcodeIcon",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 7v10",key:"23sfjj"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M17 7v10",key:"578dap"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $6=e("ScanEyeIcon",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["path",{d:"M5 12s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5",key:"nhuolu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G6=e("ScanFaceIcon",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 9h.01",key:"x1ddxp"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N6=e("ScanLineIcon",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 12h10",key:"b7w52i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W6=e("ScanSearchIcon",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m16 16-1.9-1.9",key:"1dq9hf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6=e("ScanTextIcon",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}],["path",{d:"M7 8h8",key:"1jbsf9"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h6",key:"1vyc9m"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6=e("ScanIcon",[["path",{d:"M3 7V5a2 2 0 0 1 2-2h2",key:"aa7l1z"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2",key:"4qcy5o"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2",key:"6vwrx8"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2",key:"ioqczr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6=e("ScatterChartIcon",[["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["circle",{cx:"18.5",cy:"5.5",r:".5",fill:"currentColor",key:"lysivs"}],["circle",{cx:"11.5",cy:"11.5",r:".5",fill:"currentColor",key:"byv1b8"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["circle",{cx:"17.5",cy:"14.5",r:".5",fill:"currentColor",key:"1gjh6j"}],["path",{d:"M3 3v18h18",key:"1s2lah"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y6=e("SchoolIcon",[["path",{d:"M14 22v-4a2 2 0 1 0-4 0v4",key:"hhkicm"}],["path",{d:"m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2",key:"1vwozw"}],["path",{d:"M18 5v17",key:"1sw6gf"}],["path",{d:"m4 6 8-4 8 4",key:"1q0ilc"}],["path",{d:"M6 5v17",key:"1xfsm0"}],["circle",{cx:"12",cy:"9",r:"2",key:"1092wv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q6=e("ScissorsLineDashedIcon",[["path",{d:"M5.42 9.42 8 12",key:"12pkuq"}],["circle",{cx:"4",cy:"8",r:"2",key:"107mxr"}],["path",{d:"m14 6-8.58 8.58",key:"gvzu5l"}],["circle",{cx:"4",cy:"16",r:"2",key:"1ehqvc"}],["path",{d:"M10.8 14.8 14 18",key:"ax7m9r"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e8=e("ScissorsIcon",[["circle",{cx:"6",cy:"6",r:"3",key:"1lh9wr"}],["path",{d:"M8.12 8.12 12 12",key:"1alkpv"}],["path",{d:"M20 4 8.12 15.88",key:"xgtan2"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M14.8 14.8 20 20",key:"ptml3r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t8=e("ScreenShareOffIcon",[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m22 3-5 5",key:"12jva0"}],["path",{d:"m17 3 5 5",key:"k36vhe"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a8=e("ScreenShareIcon",[["path",{d:"M13 3H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-3",key:"i8wdob"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}],["path",{d:"m17 8 5-5",key:"fqif7o"}],["path",{d:"M17 3h5v5",key:"1o3tu8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o8=e("ScrollTextIcon",[["path",{d:"M15 12h-5",key:"r7krc0"}],["path",{d:"M15 8h-5",key:"1khuty"}],["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c8=e("ScrollIcon",[["path",{d:"M19 17V5a2 2 0 0 0-2-2H4",key:"zz82l3"}],["path",{d:"M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3",key:"1ph1d7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n8=e("SearchCheckIcon",[["path",{d:"m8 11 2 2 4-4",key:"1sed1v"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i8=e("SearchCodeIcon",[["path",{d:"m13 13.5 2-2.5-2-2.5",key:"1rvxrh"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}],["path",{d:"M9 8.5 7 11l2 2.5",key:"6ffwbx"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r8=e("SearchSlashIcon",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d8=e("SearchXIcon",[["path",{d:"m13.5 8.5-5 5",key:"1cs55j"}],["path",{d:"m8.5 8.5 5 5",key:"a8mexj"}],["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h8=e("SearchIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l8=e("SectionIcon",[["path",{d:"M16 5a4 3 0 0 0-8 0c0 4 8 3 8 7a4 3 0 0 1-8 0",key:"vqan6v"}],["path",{d:"M8 19a4 3 0 0 0 8 0c0-4-8-3-8-7a4 3 0 0 1 8 0",key:"wdjd8o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const at=e("SendHorizontalIcon",[["path",{d:"m3 3 3 9-3 9 19-9Z",key:"1aobqy"}],["path",{d:"M6 12h16",key:"s4cdu5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s8=e("SendToBackIcon",[["rect",{x:"14",y:"14",width:"8",height:"8",rx:"2",key:"1b0bso"}],["rect",{x:"2",y:"2",width:"8",height:"8",rx:"2",key:"1x09vl"}],["path",{d:"M7 14v1a2 2 0 0 0 2 2h1",key:"pao6x6"}],["path",{d:"M14 7h1a2 2 0 0 1 2 2v1",key:"19tdru"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y8=e("SendIcon",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p8=e("SeparatorHorizontalIcon",[["line",{x1:"3",x2:"21",y1:"12",y2:"12",key:"10d38w"}],["polyline",{points:"8 8 12 4 16 8",key:"zo8t4w"}],["polyline",{points:"16 16 12 20 8 16",key:"1oyrid"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k8=e("SeparatorVerticalIcon",[["line",{x1:"12",x2:"12",y1:"3",y2:"21",key:"1efggb"}],["polyline",{points:"8 8 4 12 8 16",key:"bnfmv4"}],["polyline",{points:"16 16 20 12 16 8",key:"u90052"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u8=e("ServerCogIcon",[["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"M4.5 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-.5",key:"tn8das"}],["path",{d:"M4.5 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-.5",key:"1g2pve"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m15.7 13.4-.9-.3",key:"1jwmzr"}],["path",{d:"m9.2 10.9-.9-.3",key:"qapnim"}],["path",{d:"m10.6 15.7.3-.9",key:"quwk0k"}],["path",{d:"m13.6 15.7-.4-1",key:"cb9xp7"}],["path",{d:"m10.8 9.3-.4-1",key:"1uaiz5"}],["path",{d:"m8.3 13.6 1-.4",key:"s6srou"}],["path",{d:"m14.7 10.8 1-.4",key:"4d31cq"}],["path",{d:"m13.4 8.3-.3.9",key:"1bm987"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M8=e("ServerCrashIcon",[["path",{d:"M6 10H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-2",key:"4b9dqc"}],["path",{d:"M6 14H4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2h-2",key:"22nnkd"}],["path",{d:"M6 6h.01",key:"1utrut"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m13 6-4 6h6l-4 6",key:"14hqih"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m8=e("ServerOffIcon",[["path",{d:"M7 2h13a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-5",key:"bt2siv"}],["path",{d:"M10 10 2.5 2.5C2 2 2 2.5 2 5v3a2 2 0 0 0 2 2h6z",key:"1hjrv1"}],["path",{d:"M22 17v-1a2 2 0 0 0-2-2h-1",key:"1iynyr"}],["path",{d:"M4 14a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16.5l1-.5.5.5-8-8H4z",key:"161ggg"}],["path",{d:"M6 18h.01",key:"uhywen"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v8=e("ServerIcon",[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g8=e("Settings2Icon",[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aa=e("SettingsIcon",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I8=e("ShapesIcon",[["path",{d:"M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1Z",key:"1bo67w"}],["rect",{x:"3",y:"14",width:"7",height:"7",rx:"1",key:"1bkyp8"}],["circle",{cx:"17.5",cy:"17.5",r:"3.5",key:"w3z12y"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x8=e("Share2Icon",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f8=e("ShareIcon",[["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["polyline",{points:"16 6 12 2 8 6",key:"m901s6"}],["line",{x1:"12",x2:"12",y1:"2",y2:"15",key:"1p0rca"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L8=e("SheetIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"3",x2:"21",y1:"9",y2:"9",key:"1vqk6q"}],["line",{x1:"3",x2:"21",y1:"15",y2:"15",key:"o2sbyz"}],["line",{x1:"9",x2:"9",y1:"9",y2:"21",key:"1ib60c"}],["line",{x1:"15",x2:"15",y1:"9",y2:"21",key:"1n26ft"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w8=e("ShellIcon",[["path",{d:"M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44",key:"1cn552"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C8=e("ShieldAlertIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b8=e("ShieldBanIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m4.243 5.21 14.39 12.472",key:"1c9a7c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S8=e("ShieldCheckIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q8=e("ShieldEllipsisIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M8 12h.01",key:"czm47f"}],["path",{d:"M12 12h.01",key:"1mp3jc"}],["path",{d:"M16 12h.01",key:"1l6xoz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A8=e("ShieldHalfIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 22V2",key:"zs6s6o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H8=e("ShieldMinusIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z8=e("ShieldOffIcon",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",key:"1jlk70"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",key:"18rp1v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V8=e("ShieldPlusIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P8=e("ShieldQuestionIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3",key:"mhlwft"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ot=e("ShieldXIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m14.5 9.5-5 5",key:"17q4r4"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j8=e("ShieldIcon",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _8=e("ShipWheelIcon",[["circle",{cx:"12",cy:"12",r:"8",key:"46899m"}],["path",{d:"M12 2v7.5",key:"1e5rl5"}],["path",{d:"m19 5-5.23 5.23",key:"1ezxxf"}],["path",{d:"M22 12h-7.5",key:"le1719"}],["path",{d:"m19 19-5.23-5.23",key:"p3fmgn"}],["path",{d:"M12 14.5V22",key:"dgcmos"}],["path",{d:"M10.23 13.77 5 19",key:"qwopd4"}],["path",{d:"M9.5 12H2",key:"r7bup8"}],["path",{d:"M10.23 10.23 5 5",key:"k2y7lj"}],["circle",{cx:"12",cy:"12",r:"2.5",key:"ix0uyj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D8=e("ShipIcon",[["path",{d:"M2 21c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1 .6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"iegodh"}],["path",{d:"M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.34 2.81 7.76",key:"fp8vka"}],["path",{d:"M19 13V7a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v6",key:"qpkstq"}],["path",{d:"M12 10v4",key:"1kjpxc"}],["path",{d:"M12 2v3",key:"qbqxhf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B8=e("ShirtIcon",[["path",{d:"M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z",key:"1wgbhj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F8=e("ShoppingBagIcon",[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T8=e("ShoppingBasketIcon",[["path",{d:"m15 11-1 9",key:"5wnq3a"}],["path",{d:"m19 11-4-7",key:"cnml18"}],["path",{d:"M2 11h20",key:"3eubbj"}],["path",{d:"m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8a2 2 0 0 0 2-1.6l1.7-7.4",key:"yiazzp"}],["path",{d:"M4.5 15.5h15",key:"13mye1"}],["path",{d:"m5 11 4-7",key:"116ra9"}],["path",{d:"m9 11 1 9",key:"1ojof7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R8=e("ShoppingCartIcon",[["circle",{cx:"8",cy:"21",r:"1",key:"jimo8o"}],["circle",{cx:"19",cy:"21",r:"1",key:"13723u"}],["path",{d:"M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12",key:"9zh506"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O8=e("ShovelIcon",[["path",{d:"M2 22v-5l5-5 5 5-5 5z",key:"1fh25c"}],["path",{d:"M9.5 14.5 16 8",key:"1smz5x"}],["path",{d:"m17 2 5 5-.5.5a3.53 3.53 0 0 1-5 0s0 0 0 0a3.53 3.53 0 0 1 0-5L17 2",key:"1q8uv5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U8=e("ShowerHeadIcon",[["path",{d:"m4 4 2.5 2.5",key:"uv2vmf"}],["path",{d:"M13.5 6.5a4.95 4.95 0 0 0-7 7",key:"frdkwv"}],["path",{d:"M15 5 5 15",key:"1ag8rq"}],["path",{d:"M14 17v.01",key:"eokfpp"}],["path",{d:"M10 16v.01",key:"14uyyl"}],["path",{d:"M13 13v.01",key:"1v1k97"}],["path",{d:"M16 10v.01",key:"5169yg"}],["path",{d:"M11 20v.01",key:"cj92p8"}],["path",{d:"M17 14v.01",key:"11cswd"}],["path",{d:"M20 11v.01",key:"19e0od"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E8=e("ShrinkIcon",[["path",{d:"m15 15 6 6m-6-6v4.8m0-4.8h4.8",key:"17vawe"}],["path",{d:"M9 19.8V15m0 0H4.2M9 15l-6 6",key:"chjx8e"}],["path",{d:"M15 4.2V9m0 0h4.8M15 9l6-6",key:"lav6yq"}],["path",{d:"M9 4.2V9m0 0H4.2M9 9 3 3",key:"1pxi2q"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z8=e("ShrubIcon",[["path",{d:"M12 22v-7l-2-2",key:"eqv9mc"}],["path",{d:"M17 8v.8A6 6 0 0 1 13.8 20v0H10v0A6.5 6.5 0 0 1 7 8h0a5 5 0 0 1 10 0Z",key:"12jcau"}],["path",{d:"m14 14-2 2",key:"847xa2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $8=e("ShuffleIcon",[["path",{d:"M2 18h1.4c1.3 0 2.5-.6 3.3-1.7l6.1-8.6c.7-1.1 2-1.7 3.3-1.7H22",key:"1wmou1"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 6h1.9c1.5 0 2.9.9 3.6 2.2",key:"10bdb2"}],["path",{d:"M22 18h-5.9c-1.3 0-2.6-.7-3.3-1.8l-.5-.8",key:"vgxac0"}],["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G8=e("SigmaIcon",[["path",{d:"M18 7V4H6l6 8-6 8h12v-3",key:"zis8ev"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N8=e("SignalHighIcon",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W8=e("SignalLowIcon",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X8=e("SignalMediumIcon",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K8=e("SignalZeroIcon",[["path",{d:"M2 20h.01",key:"4haj6o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J8=e("SignalIcon",[["path",{d:"M2 20h.01",key:"4haj6o"}],["path",{d:"M7 20v-4",key:"j294jx"}],["path",{d:"M12 20v-8",key:"i3yub9"}],["path",{d:"M17 20V8",key:"1tkaf5"}],["path",{d:"M22 4v16",key:"sih9yq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y8=e("SignpostBigIcon",[["path",{d:"M10 9H4L2 7l2-2h6",key:"1hq7x2"}],["path",{d:"M14 5h6l2 2-2 2h-6",key:"bv62ej"}],["path",{d:"M10 22V4a2 2 0 1 1 4 0v18",key:"eqpcf2"}],["path",{d:"M8 22h8",key:"rmew8v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q8=e("SignpostIcon",[["path",{d:"M12 3v3",key:"1n5kay"}],["path",{d:"M18.5 13h-13L2 9.5 5.5 6h13L22 9.5Z",key:"27os56"}],["path",{d:"M12 13v8",key:"1l5pq0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e7=e("SirenIcon",[["path",{d:"M7 18v-6a5 5 0 1 1 10 0v6",key:"pcx96s"}],["path",{d:"M5 21a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-1a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2z",key:"1b4s83"}],["path",{d:"M21 12h1",key:"jtio3y"}],["path",{d:"M18.5 4.5 18 5",key:"g5sp9y"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"m4.929 4.929.707.707",key:"1i51kw"}],["path",{d:"M12 12v6",key:"3ahymv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t7=e("SkipBackIcon",[["polygon",{points:"19 20 9 12 19 4 19 20",key:"o2sva"}],["line",{x1:"5",x2:"5",y1:"19",y2:"5",key:"1ocqjk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a7=e("SkipForwardIcon",[["polygon",{points:"5 4 15 12 5 20 5 4",key:"16p6eg"}],["line",{x1:"19",x2:"19",y1:"5",y2:"19",key:"futhcm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o7=e("SkullIcon",[["circle",{cx:"9",cy:"12",r:"1",key:"1vctgf"}],["circle",{cx:"15",cy:"12",r:"1",key:"1tmaij"}],["path",{d:"M8 20v2h8v-2",key:"ded4og"}],["path",{d:"m12.5 17-.5-1-.5 1h1z",key:"3me087"}],["path",{d:"M16 20a2 2 0 0 0 1.56-3.25 8 8 0 1 0-11.12 0A2 2 0 0 0 8 20",key:"xq9p5u"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c7=e("SlackIcon",[["rect",{width:"3",height:"8",x:"13",y:"2",rx:"1.5",key:"diqz80"}],["path",{d:"M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5",key:"183iwg"}],["rect",{width:"3",height:"8",x:"8",y:"14",rx:"1.5",key:"hqg7r1"}],["path",{d:"M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5",key:"76g71w"}],["rect",{width:"8",height:"3",x:"14",y:"13",rx:"1.5",key:"1kmz0a"}],["path",{d:"M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5",key:"jc4sz0"}],["rect",{width:"8",height:"3",x:"2",y:"8",rx:"1.5",key:"1omvl4"}],["path",{d:"M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5",key:"16f3cl"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n7=e("SlashIcon",[["path",{d:"M22 2 2 22",key:"y4kqgn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i7=e("SliceIcon",[["path",{d:"m8 14-6 6h9v-3",key:"zo3j9a"}],["path",{d:"M18.37 3.63 8 14l3 3L21.37 6.63a2.12 2.12 0 1 0-3-3Z",key:"1dzx0j"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r7=e("SlidersHorizontalIcon",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ct=e("SlidersVerticalIcon",[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d7=e("SmartphoneChargingIcon",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12.667 8 10 12h4l-2.667 4",key:"h9lk2d"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h7=e("SmartphoneNfcIcon",[["rect",{width:"7",height:"12",x:"2",y:"6",rx:"1",key:"5nje8w"}],["path",{d:"M13 8.32a7.43 7.43 0 0 1 0 7.36",key:"1g306n"}],["path",{d:"M16.46 6.21a11.76 11.76 0 0 1 0 11.58",key:"uqvjvo"}],["path",{d:"M19.91 4.1a15.91 15.91 0 0 1 .01 15.8",key:"ujntz3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l7=e("SmartphoneIcon",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s7=e("SmilePlusIcon",[["path",{d:"M22 11v1a10 10 0 1 1-9-10",key:"ew0xw9"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}],["path",{d:"M16 5h6",key:"1vod17"}],["path",{d:"M19 2v6",key:"4bpg5p"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y7=e("SmileIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 14s1.5 2 4 2 4-2 4-2",key:"1y1vjs"}],["line",{x1:"9",x2:"9.01",y1:"9",y2:"9",key:"yxxnd0"}],["line",{x1:"15",x2:"15.01",y1:"9",y2:"9",key:"1p4y9e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p7=e("SnailIcon",[["path",{d:"M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0",key:"hneq2s"}],["circle",{cx:"10",cy:"13",r:"8",key:"194lz3"}],["path",{d:"M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6",key:"ixqyt7"}],["path",{d:"M18 3 19.1 5.2",key:"9tjm43"}],["path",{d:"M22 3 20.9 5.2",key:"j3odrs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k7=e("SnowflakeIcon",[["line",{x1:"2",x2:"22",y1:"12",y2:"12",key:"1dnqot"}],["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"m20 16-4-4 4-4",key:"rquw4f"}],["path",{d:"m4 8 4 4-4 4",key:"12s3z9"}],["path",{d:"m16 4-4 4-4-4",key:"1tumq1"}],["path",{d:"m8 20 4-4 4 4",key:"9p200w"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u7=e("SofaIcon",[["path",{d:"M20 9V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v3",key:"1dgpiv"}],["path",{d:"M2 11v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H6v-2a2 2 0 0 0-4 0Z",key:"u5qfb7"}],["path",{d:"M4 18v2",key:"jwo5n2"}],["path",{d:"M20 18v2",key:"1ar1qi"}],["path",{d:"M12 4v9",key:"oqhhn3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M7=e("SoupIcon",[["path",{d:"M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z",key:"4rw317"}],["path",{d:"M7 21h10",key:"1b0cd5"}],["path",{d:"M19.5 12 22 6",key:"shfsr5"}],["path",{d:"M16.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.73 1.62",key:"rpc6vp"}],["path",{d:"M11.25 3c.27.1.8.53.74 1.36-.05.83-.93 1.2-.98 2.02-.06.78.33 1.24.72 1.62",key:"1lf63m"}],["path",{d:"M6.25 3c.27.1.8.53.75 1.36-.06.83-.93 1.2-1 2.02-.05.78.34 1.24.74 1.62",key:"97tijn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m7=e("SpaceIcon",[["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v7=e("SpadeIcon",[["path",{d:"M5 9c-1.5 1.5-3 3.2-3 5.5A5.5 5.5 0 0 0 7.5 20c1.8 0 3-.5 4.5-2 1.5 1.5 2.7 2 4.5 2a5.5 5.5 0 0 0 5.5-5.5c0-2.3-1.5-4-3-5.5l-7-7-7 7Z",key:"40bo9n"}],["path",{d:"M12 18v4",key:"jadmvz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g7=e("SparkleIcon",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nt=e("SparklesIcon",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I7=e("SpeakerIcon",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["circle",{cx:"12",cy:"14",r:"4",key:"1jruaj"}],["path",{d:"M12 14h.01",key:"1etili"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x7=e("SpeechIcon",[["path",{d:"M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20",key:"11atix"}],["path",{d:"M19.8 17.8a7.5 7.5 0 0 0 .003-10.603",key:"yol142"}],["path",{d:"M17 15a3.5 3.5 0 0 0-.025-4.975",key:"ssbmkc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f7=e("SpellCheck2Icon",[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M4 21c1.1 0 1.1-1 2.3-1s1.1 1 2.3 1c1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1 1.1 0 1.1 1 2.3 1 1.1 0 1.1-1 2.3-1",key:"8mdmtu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L7=e("SpellCheckIcon",[["path",{d:"m6 16 6-12 6 12",key:"1b4byz"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m16 20 2 2 4-4",key:"13tcca"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w7=e("SplineIcon",[["circle",{cx:"19",cy:"5",r:"2",key:"mhkx31"}],["circle",{cx:"5",cy:"19",r:"2",key:"v8kfzx"}],["path",{d:"M5 17A12 12 0 0 1 17 5",key:"1okkup"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C7=e("SplitIcon",[["path",{d:"M16 3h5v5",key:"1806ms"}],["path",{d:"M8 3H3v5",key:"15dfkv"}],["path",{d:"M12 22v-8.3a4 4 0 0 0-1.172-2.872L3 3",key:"1qrqzj"}],["path",{d:"m15 9 6-6",key:"ko1vev"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b7=e("SprayCanIcon",[["path",{d:"M3 3h.01",key:"159qn6"}],["path",{d:"M7 5h.01",key:"1hq22a"}],["path",{d:"M11 7h.01",key:"1osv80"}],["path",{d:"M3 7h.01",key:"1xzrh3"}],["path",{d:"M7 9h.01",key:"19b3jx"}],["path",{d:"M3 11h.01",key:"1eifu7"}],["rect",{width:"4",height:"4",x:"15",y:"5",key:"mri9e4"}],["path",{d:"m19 9 2 2v10c0 .6-.4 1-1 1h-6c-.6 0-1-.4-1-1V11l2-2",key:"aib6hk"}],["path",{d:"m13 14 8-2",key:"1d7bmk"}],["path",{d:"m13 19 8-2",key:"1y2vml"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S7=e("SproutIcon",[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const it=e("SquareActivityIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M17 12h-2l-2 5-2-10-2 5H7",key:"15hlnc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rt=e("SquareArrowDownLeftIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 8-8 8",key:"166keh"}],["path",{d:"M16 16H8V8",key:"1w2ppm"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dt=e("SquareArrowDownRightIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"M16 8v8H8",key:"1lbpgo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ht=e("SquareArrowDownIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8 12 4 4 4-4",key:"k98ssh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lt=e("SquareArrowLeftIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m12 8-4 4 4 4",key:"15vm53"}],["path",{d:"M16 12H8",key:"1fr5h0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const st=e("SquareArrowOutDownLeftIcon",[["path",{d:"M13 21h6a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v6",key:"14qz4y"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M9 21H3v-6",key:"wtvkvv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yt=e("SquareArrowOutDownRightIcon",[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}],["path",{d:"m21 21-9-9",key:"1et2py"}],["path",{d:"M21 15v6h-6",key:"1jko0i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pt=e("SquareArrowOutUpLeftIcon",[["path",{d:"M13 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6",key:"14mv1t"}],["path",{d:"m3 3 9 9",key:"rks13r"}],["path",{d:"M3 9V3h6",key:"ira0h2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kt=e("SquareArrowOutUpRightIcon",[["path",{d:"M21 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h6",key:"y09zxi"}],["path",{d:"m21 3-9 9",key:"mpx6sq"}],["path",{d:"M15 3h6v6",key:"1q9fwt"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ut=e("SquareArrowRightIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"m12 16 4-4-4-4",key:"1i9zcv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=e("SquareArrowUpLeftIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8h8",key:"19xb1h"}],["path",{d:"M16 16 8 8",key:"1qdy8n"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mt=e("SquareArrowUpRightIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 8h8v8",key:"b65dnt"}],["path",{d:"m8 16 8-8",key:"13b9ih"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vt=e("SquareArrowUpIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 12-4-4-4 4",key:"177agl"}],["path",{d:"M12 16V8",key:"1sbj14"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gt=e("SquareAsteriskIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 8v8",key:"napkw2"}],["path",{d:"m8.5 14 7-4",key:"12hpby"}],["path",{d:"m8.5 10 7 4",key:"wwy2dy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const It=e("SquareBottomDashedScissorsIcon",[["path",{d:"M4 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2",key:"1vzg26"}],["path",{d:"M10 22H8",key:"euku7a"}],["path",{d:"M16 22h-2",key:"18d249"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xt=e("SquareCheckBigIcon",[["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}],["path",{d:"M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11",key:"1jnkn4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ft=e("SquareCheckIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lt=e("SquareChevronDownIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m16 10-4 4-4-4",key:"894hmk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wt=e("SquareChevronLeftIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m14 16-4-4 4-4",key:"ojs7w8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ct=e("SquareChevronRightIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m10 8 4 4-4 4",key:"1wy4r4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bt=e("SquareChevronUpIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m8 14 4-4 4 4",key:"fy2ptz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const St=e("SquareCodeIcon",[["path",{d:"M10 9.5 8 12l2 2.5",key:"3mjy60"}],["path",{d:"m14 9.5 2 2.5-2 2.5",key:"1bir2l"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q7=e("SquareDashedBottomCodeIcon",[["path",{d:"M10 9.5 8 12l2 2.5",key:"3mjy60"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"m14 9.5 2 2.5-2 2.5",key:"1bir2l"}],["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A7=e("SquareDashedBottomIcon",[["path",{d:"M5 21a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2",key:"as5y1o"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 21h1",key:"v9vybs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qt=e("SquareDashedKanbanIcon",[["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}],["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M21 14v1",key:"169vum"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M3 9v1",key:"1r0deq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const At=e("SquareDashedMousePointerIcon",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"m12 12 4 10 1.7-4.3L22 16Z",key:"64ilsv"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h2",key:"1qve2z"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v2",key:"p14lih"}],["path",{d:"M3 14v1",key:"vnatye"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ht=e("SquareDivideIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["line",{x1:"8",x2:"16",y1:"12",y2:"12",key:"1jonct"}],["line",{x1:"12",x2:"12",y1:"16",y2:"16",key:"aqc6ln"}],["line",{x1:"12",x2:"12",y1:"8",y2:"8",key:"1mkcni"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zt=e("SquareDotIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vt=e("SquareEqualIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M7 14h10",key:"1mhdw3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pt=e("SquareFunctionIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3",key:"m1af9g"}],["path",{d:"M9 11.2h5.7",key:"3zgcl2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=e("SquareGanttChartIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 8h7",key:"kbo1nt"}],["path",{d:"M8 12h6",key:"ikassy"}],["path",{d:"M11 16h5",key:"oq65wt"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _t=e("SquareKanbanIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 7v7",key:"1x2jlm"}],["path",{d:"M12 7v4",key:"xawao1"}],["path",{d:"M16 7v9",key:"1hp2iy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dt=e("SquareLibraryIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7v10",key:"d5nglc"}],["path",{d:"M11 7v10",key:"pptsnr"}],["path",{d:"m15 7 2 10",key:"1m7qm5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bt=e("SquareMIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 16V8l4 4 4-4v8",key:"141u4e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ft=e("SquareMenuIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 8h10",key:"1jw688"}],["path",{d:"M7 12h10",key:"b7w52i"}],["path",{d:"M7 16h10",key:"wp8him"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tt=e("SquareMinusIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rt=e("SquareMousePointerIcon",[["path",{d:"M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6",key:"14rsvq"}],["path",{d:"m12 12 4 10 1.7-4.3L22 16Z",key:"64ilsv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ot=e("SquareParkingOffIcon",[["path",{d:"M3.6 3.6A2 2 0 0 1 5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-.59 1.41",key:"9l1ft6"}],["path",{d:"M3 8.7V19a2 2 0 0 0 2 2h10.3",key:"17knke"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M13 13a3 3 0 1 0 0-6H9v2",key:"uoagbd"}],["path",{d:"M9 17v-2.3",key:"1jxgo2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ut=e("SquareParkingIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M9 17V7h4a3 3 0 0 1 0 6H9",key:"1dfk2c"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K=e("SquarePenIcon",[["path",{d:"M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",key:"1m0v6g"}],["path",{d:"M18.375 2.625a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4Z",key:"1lpok0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Et=e("SquarePercentIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zt=e("SquarePiIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 7h10",key:"udp07y"}],["path",{d:"M10 7v10",key:"i1d9ee"}],["path",{d:"M16 17a2 2 0 0 1-2-2V7",key:"ftwdc7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $t=e("SquarePilcrowIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 12H9.5a2.5 2.5 0 0 1 0-5H17",key:"1l9586"}],["path",{d:"M12 7v10",key:"jspqdw"}],["path",{d:"M16 7v10",key:"lavkr4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gt=e("SquarePlayIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"m9 8 6 4-6 4Z",key:"f1r3lt"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nt=e("SquarePlusIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wt=e("SquarePowerIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 7v5",key:"ma6bk"}],["path",{d:"M8 9a5.14 5.14 0 0 0 4 8 4.95 4.95 0 0 0 4-8",key:"15eubv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H7=e("SquareRadicalIcon",[["path",{d:"M7 12h2l2 5 2-10h4",key:"1fxv6h"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xt=e("SquareScissorsIcon",[["rect",{width:"20",height:"20",x:"2",y:"2",rx:"2",key:"1btzen"}],["circle",{cx:"8",cy:"8",r:"2",key:"14cg06"}],["path",{d:"M9.414 9.414 12 12",key:"qz4lzr"}],["path",{d:"M14.8 14.8 18 18",key:"11flf1"}],["circle",{cx:"8",cy:"16",r:"2",key:"1acxsx"}],["path",{d:"m18 6-8.586 8.586",key:"11kzk1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kt=e("SquareSigmaIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M16 8.9V7H8l4 5-4 5h8v-1.9",key:"9nih0i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jt=e("SquareSlashIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["line",{x1:"9",x2:"15",y1:"15",y2:"9",key:"1dfufj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Yt=e("SquareSplitHorizontalIcon",[["path",{d:"M8 19H5c-1 0-2-1-2-2V7c0-1 1-2 2-2h3",key:"lubmu8"}],["path",{d:"M16 5h3c1 0 2 1 2 2v10c0 1-1 2-2 2h-3",key:"1ag34g"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qt=e("SquareSplitVerticalIcon",[["path",{d:"M5 8V5c0-1 1-2 2-2h10c1 0 2 1 2 2v3",key:"1pi83i"}],["path",{d:"M19 16v3c0 1-1 2-2 2H7c-1 0-2-1-2-2v-3",key:"ido5k7"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z7=e("SquareStackIcon",[["path",{d:"M4 10c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"4i38lg"}],["path",{d:"M10 16c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2",key:"mlte4a"}],["rect",{width:"8",height:"8",x:"14",y:"14",rx:"2",key:"1fa9i4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e2=e("SquareTerminalIcon",[["path",{d:"m7 11 2-2-2-2",key:"1lz0vl"}],["path",{d:"M11 13h4",key:"1p7l4v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t2=e("SquareUserRoundIcon",[["path",{d:"M18 21a6 6 0 0 0-12 0",key:"kaz2du"}],["circle",{cx:"12",cy:"11",r:"4",key:"1gt34v"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a2=e("SquareUserIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",key:"1m6ac2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o2=e("SquareXIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"m9 9 6 6",key:"z0biqf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V7=e("SquareIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P7=e("SquircleIcon",[["path",{d:"M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9",key:"garfkc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j7=e("SquirrelIcon",[["path",{d:"M15.236 22a3 3 0 0 0-2.2-5",key:"21bitc"}],["path",{d:"M16 20a3 3 0 0 1 3-3h1a2 2 0 0 0 2-2v-2a4 4 0 0 0-4-4V4",key:"oh0fg0"}],["path",{d:"M18 13h.01",key:"9veqaj"}],["path",{d:"M18 6a4 4 0 0 0-4 4 7 7 0 0 0-7 7c0-5 4-5 4-10.5a4.5 4.5 0 1 0-9 0 2.5 2.5 0 0 0 5 0C7 10 3 11 3 17c0 2.8 2.2 5 5 5h10",key:"980v8a"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _7=e("StampIcon",[["path",{d:"M5 22h14",key:"ehvnwv"}],["path",{d:"M19.27 13.73A2.5 2.5 0 0 0 17.5 13h-11A2.5 2.5 0 0 0 4 15.5V17a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-1.5c0-.66-.26-1.3-.73-1.77Z",key:"1sy9ra"}],["path",{d:"M14 13V8.5C14 7 15 7 15 5a3 3 0 0 0-3-3c-1.66 0-3 1-3 3s1 2 1 3.5V13",key:"cnxgux"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D7=e("StarHalfIcon",[["path",{d:"M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2",key:"nare05"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B7=e("StarOffIcon",[["path",{d:"M8.34 8.34 2 9.27l5 4.87L5.82 21 12 17.77 18.18 21l-.59-3.43",key:"16m0ql"}],["path",{d:"M18.42 12.76 22 9.27l-6.91-1L12 2l-1.44 2.91",key:"1vt8nq"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F7=e("StarIcon",[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",key:"8f66p6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T7=e("StepBackIcon",[["line",{x1:"18",x2:"18",y1:"20",y2:"4",key:"cun8e5"}],["polygon",{points:"14,20 4,12 14,4",key:"ypakod"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R7=e("StepForwardIcon",[["line",{x1:"6",x2:"6",y1:"4",y2:"20",key:"fy8qot"}],["polygon",{points:"10,4 20,12 10,20",key:"1mc1pf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O7=e("StethoscopeIcon",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U7=e("StickerIcon",[["path",{d:"M15.5 3H5a2 2 0 0 0-2 2v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V8.5L15.5 3Z",key:"1wis1t"}],["path",{d:"M14 3v4a2 2 0 0 0 2 2h4",key:"36rjfy"}],["path",{d:"M8 13h0",key:"jdup5h"}],["path",{d:"M16 13h0",key:"l4i2ga"}],["path",{d:"M10 16s.8 1 2 1c1.3 0 2-1 2-1",key:"1vvgv3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E7=e("StickyNoteIcon",[["path",{d:"M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z",key:"qazsjp"}],["path",{d:"M15 3v4a2 2 0 0 0 2 2h4",key:"40519r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z7=e("StoreIcon",[["path",{d:"m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7",key:"ztvudi"}],["path",{d:"M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8",key:"1b2hhj"}],["path",{d:"M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4",key:"2ebpfo"}],["path",{d:"M2 7h20",key:"1fcdvo"}],["path",{d:"M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7",key:"jon5kx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $7=e("StretchHorizontalIcon",[["rect",{width:"20",height:"6",x:"2",y:"4",rx:"2",key:"qdearl"}],["rect",{width:"20",height:"6",x:"2",y:"14",rx:"2",key:"1xrn6j"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G7=e("StretchVerticalIcon",[["rect",{width:"6",height:"20",x:"4",y:"2",rx:"2",key:"19qu7m"}],["rect",{width:"6",height:"20",x:"14",y:"2",rx:"2",key:"24v0nk"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N7=e("StrikethroughIcon",[["path",{d:"M16 4H9a3 3 0 0 0-2.83 4",key:"43sutm"}],["path",{d:"M14 12a4 4 0 0 1 0 8H6",key:"nlfj13"}],["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W7=e("SubscriptIcon",[["path",{d:"m4 5 8 8",key:"1eunvl"}],["path",{d:"m12 5-8 8",key:"1ah0jp"}],["path",{d:"M20 19h-4c0-1.5.44-2 1.5-2.5S20 15.33 20 14c0-.47-.17-.93-.48-1.29a2.11 2.11 0 0 0-2.62-.44c-.42.24-.74.62-.9 1.07",key:"e8ta8j"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X7=e("SunDimIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 4h.01",key:"1ujb9j"}],["path",{d:"M20 12h.01",key:"1ykeid"}],["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M4 12h.01",key:"158zrr"}],["path",{d:"M17.657 6.343h.01",key:"31pqzk"}],["path",{d:"M17.657 17.657h.01",key:"jehnf4"}],["path",{d:"M6.343 17.657h.01",key:"gdk6ow"}],["path",{d:"M6.343 6.343h.01",key:"1uurf0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K7=e("SunMediumIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 3v1",key:"1asbbs"}],["path",{d:"M12 20v1",key:"1wcdkc"}],["path",{d:"M3 12h1",key:"lp3yf2"}],["path",{d:"M20 12h1",key:"1vloll"}],["path",{d:"m18.364 5.636-.707.707",key:"1hakh0"}],["path",{d:"m6.343 17.657-.707.707",key:"18m9nf"}],["path",{d:"m5.636 5.636.707.707",key:"1xv1c5"}],["path",{d:"m17.657 17.657.707.707",key:"vl76zb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J7=e("SunMoonIcon",[["path",{d:"M12 8a2.83 2.83 0 0 0 4 4 4 4 0 1 1-4-4",key:"1fu5g2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.9 4.9 1.4 1.4",key:"b9915j"}],["path",{d:"m17.7 17.7 1.4 1.4",key:"qc3ed3"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.3 17.7-1.4 1.4",key:"5gca6"}],["path",{d:"m19.1 4.9-1.4 1.4",key:"wpu9u6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y7=e("SunSnowIcon",[["path",{d:"M10 9a3 3 0 1 0 0 6",key:"6zmtdl"}],["path",{d:"M2 12h1",key:"1uaihz"}],["path",{d:"M14 21V3",key:"1llu3z"}],["path",{d:"M10 4V3",key:"pkzwkn"}],["path",{d:"M10 21v-1",key:"1u8rkd"}],["path",{d:"m3.64 18.36.7-.7",key:"105rm9"}],["path",{d:"m4.34 6.34-.7-.7",key:"d3unjp"}],["path",{d:"M14 12h8",key:"4f43i9"}],["path",{d:"m17 4-3 3",key:"15jcng"}],["path",{d:"m14 17 3 3",key:"6tlq38"}],["path",{d:"m21 15-3-3 3-3",key:"1nlnje"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q7=e("SunIcon",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e9=e("SunriseIcon",[["path",{d:"M12 2v8",key:"1q4o3n"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m8 6 4-4 4 4",key:"ybng9g"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t9=e("SunsetIcon",[["path",{d:"M12 10V2",key:"16sf7g"}],["path",{d:"m4.93 10.93 1.41 1.41",key:"2a7f42"}],["path",{d:"M2 18h2",key:"j10viu"}],["path",{d:"M20 18h2",key:"wocana"}],["path",{d:"m19.07 10.93-1.41 1.41",key:"15zs5n"}],["path",{d:"M22 22H2",key:"19qnx5"}],["path",{d:"m16 6-4 4-4-4",key:"6wukr"}],["path",{d:"M16 18a4 4 0 0 0-8 0",key:"1lzouq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a9=e("SuperscriptIcon",[["path",{d:"m4 19 8-8",key:"hr47gm"}],["path",{d:"m12 19-8-8",key:"1dhhmo"}],["path",{d:"M20 12h-4c0-1.5.442-2 1.5-2.5S20 8.334 20 7.002c0-.472-.17-.93-.484-1.29a2.105 2.105 0 0 0-2.617-.436c-.42.239-.738.614-.899 1.06",key:"1dfcux"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o9=e("SwatchBookIcon",[["path",{d:"M11 17a4 4 0 0 1-8 0V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2Z",key:"1ldrpk"}],["path",{d:"M16.7 13H19a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H7",key:"11i5po"}],["path",{d:"M 7 17h0.01",key:"10821z"}],["path",{d:"m11 8 2.3-2.3a2.4 2.4 0 0 1 3.404.004L18.6 7.6a2.4 2.4 0 0 1 .026 3.434L9.9 19.8",key:"o2gii7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c9=e("SwissFrancIcon",[["path",{d:"M10 21V3h8",key:"br2l0g"}],["path",{d:"M6 16h9",key:"2py0wn"}],["path",{d:"M10 9.5h7",key:"13dmhz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n9=e("SwitchCameraIcon",[["path",{d:"M11 19H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h5",key:"mtk2lu"}],["path",{d:"M13 5h7a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5",key:"120jsl"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}],["path",{d:"m18 22-3-3 3-3",key:"kgdoj7"}],["path",{d:"m6 2 3 3-3 3",key:"1fnbkv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i9=e("SwordIcon",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r9=e("SwordsIcon",[["polyline",{points:"14.5 17.5 3 6 3 3 6 3 17.5 14.5",key:"1hfsw2"}],["line",{x1:"13",x2:"19",y1:"19",y2:"13",key:"1vrmhu"}],["line",{x1:"16",x2:"20",y1:"16",y2:"20",key:"1bron3"}],["line",{x1:"19",x2:"21",y1:"21",y2:"19",key:"13pww6"}],["polyline",{points:"14.5 6.5 18 3 21 3 21 6 17.5 9.5",key:"hbey2j"}],["line",{x1:"5",x2:"9",y1:"14",y2:"18",key:"1hf58s"}],["line",{x1:"7",x2:"4",y1:"17",y2:"20",key:"pidxm4"}],["line",{x1:"3",x2:"5",y1:"19",y2:"21",key:"1pehsh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d9=e("SyringeIcon",[["path",{d:"m18 2 4 4",key:"22kx64"}],["path",{d:"m17 7 3-3",key:"1w1zoj"}],["path",{d:"M19 9 8.7 19.3c-1 1-2.5 1-3.4 0l-.6-.6c-1-1-1-2.5 0-3.4L15 5",key:"1exhtz"}],["path",{d:"m9 11 4 4",key:"rovt3i"}],["path",{d:"m5 19-3 3",key:"59f2uf"}],["path",{d:"m14 4 6 6",key:"yqp9t2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h9=e("Table2Icon",[["path",{d:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",key:"gugj83"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l9=e("TableCellsMergeIcon",[["path",{d:"M12 21v-6",key:"lihzve"}],["path",{d:"M12 9V3",key:"da5inc"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s9=e("TableCellsSplitIcon",[["path",{d:"M12 15V9",key:"8c7uyn"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M3 9h18",key:"1pudct"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y9=e("TableColumnsSplitIcon",[["path",{d:"M14 14v2",key:"w2a1xv"}],["path",{d:"M14 20v2",key:"1lq872"}],["path",{d:"M14 2v2",key:"6buw04"}],["path",{d:"M14 8v2",key:"i67w9a"}],["path",{d:"M2 15h8",key:"82wtch"}],["path",{d:"M2 3h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H2",key:"up0l64"}],["path",{d:"M2 9h8",key:"yelfik"}],["path",{d:"M22 15h-4",key:"1es58f"}],["path",{d:"M22 3h-2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h2",key:"pdjoqf"}],["path",{d:"M22 9h-4",key:"1luja7"}],["path",{d:"M5 3v18",key:"14hmio"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p9=e("TablePropertiesIcon",[["path",{d:"M15 3v18",key:"14nvp0"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M21 9H3",key:"1338ky"}],["path",{d:"M21 15H3",key:"9uk58r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k9=e("TableRowsSplitIcon",[["path",{d:"M14 10h2",key:"1lstlu"}],["path",{d:"M15 22v-8",key:"1fwwgm"}],["path",{d:"M15 2v4",key:"1044rn"}],["path",{d:"M2 10h2",key:"1r8dkt"}],["path",{d:"M20 10h2",key:"1ug425"}],["path",{d:"M3 19h18",key:"awlh7x"}],["path",{d:"M3 22v-6a2 2 135 0 1 2-2h14a2 2 45 0 1 2 2v6",key:"ibqhof"}],["path",{d:"M3 2v2a2 2 45 0 0 2 2h14a2 2 135 0 0 2-2V2",key:"1uenja"}],["path",{d:"M8 10h2",key:"66od0"}],["path",{d:"M9 22v-8",key:"fmnu31"}],["path",{d:"M9 2v4",key:"j1yeou"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u9=e("TableIcon",[["path",{d:"M12 3v18",key:"108xh3"}],["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M9=e("TabletSmartphoneIcon",[["rect",{width:"10",height:"14",x:"3",y:"8",rx:"2",key:"1vrsiq"}],["path",{d:"M5 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2h-2.4",key:"1j4zmg"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m9=e("TabletIcon",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["line",{x1:"12",x2:"12.01",y1:"18",y2:"18",key:"1dp563"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v9=e("TabletsIcon",[["circle",{cx:"7",cy:"7",r:"5",key:"x29byf"}],["circle",{cx:"17",cy:"17",r:"5",key:"1op1d2"}],["path",{d:"M12 17h10",key:"ls21zv"}],["path",{d:"m3.46 10.54 7.08-7.08",key:"1rehiu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g9=e("TagIcon",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I9=e("TagsIcon",[["path",{d:"m15 5 6.3 6.3a2.4 2.4 0 0 1 0 3.4L17 19",key:"1cbfv1"}],["path",{d:"M9.586 5.586A2 2 0 0 0 8.172 5H3a1 1 0 0 0-1 1v5.172a2 2 0 0 0 .586 1.414L8.29 18.29a2.426 2.426 0 0 0 3.42 0l3.58-3.58a2.426 2.426 0 0 0 0-3.42z",key:"135mg7"}],["circle",{cx:"6.5",cy:"9.5",r:".5",fill:"currentColor",key:"5pm5xn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x9=e("Tally1Icon",[["path",{d:"M4 4v16",key:"6qkkli"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f9=e("Tally2Icon",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L9=e("Tally3Icon",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w9=e("Tally4Icon",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C9=e("Tally5Icon",[["path",{d:"M4 4v16",key:"6qkkli"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"M14 4v16",key:"12vmem"}],["path",{d:"M19 4v16",key:"8ij5ei"}],["path",{d:"M22 6 2 18",key:"h9moai"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b9=e("TangentIcon",[["circle",{cx:"17",cy:"4",r:"2",key:"y5j2s2"}],["path",{d:"M15.59 5.41 5.41 15.59",key:"l0vprr"}],["circle",{cx:"4",cy:"17",r:"2",key:"9p4efm"}],["path",{d:"M12 22s-4-9-1.5-11.5S22 12 22 12",key:"1twk4o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S9=e("TargetIcon",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q9=e("TelescopeIcon",[["path",{d:"m10.065 12.493-6.18 1.318a.934.934 0 0 1-1.108-.702l-.537-2.15a1.07 1.07 0 0 1 .691-1.265l13.504-4.44",key:"k4qptu"}],["path",{d:"m13.56 11.747 4.332-.924",key:"19l80z"}],["path",{d:"m16 21-3.105-6.21",key:"7oh9d"}],["path",{d:"M16.485 5.94a2 2 0 0 1 1.455-2.425l1.09-.272a1 1 0 0 1 1.212.727l1.515 6.06a1 1 0 0 1-.727 1.213l-1.09.272a2 2 0 0 1-2.425-1.455z",key:"m7xp4m"}],["path",{d:"m6.158 8.633 1.114 4.456",key:"74o979"}],["path",{d:"m8 21 3.105-6.21",key:"1fvxut"}],["circle",{cx:"12",cy:"13",r:"2",key:"1c1ljs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A9=e("TentTreeIcon",[["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}],["path",{d:"m14 5 3-3 3 3",key:"1sorif"}],["path",{d:"m14 10 3-3 3 3",key:"1jyi9h"}],["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M17 14H7l-5 8h20Z",key:"13ar7p"}],["path",{d:"M8 14v8",key:"1ghmqk"}],["path",{d:"m9 14 5 8",key:"13pgi6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H9=e("TentIcon",[["path",{d:"M3.5 21 14 3",key:"1szst5"}],["path",{d:"M20.5 21 10 3",key:"1310c3"}],["path",{d:"M15.5 21 12 15l-3.5 6",key:"1ddtfw"}],["path",{d:"M2 21h20",key:"1nyx9w"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z9=e("TerminalIcon",[["polyline",{points:"4 17 10 11 4 5",key:"akl6gq"}],["line",{x1:"12",x2:"20",y1:"19",y2:"19",key:"q2wloq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c2=e("TestTubeDiagonalIcon",[["path",{d:"M21 7 6.82 21.18a2.83 2.83 0 0 1-3.99-.01v0a2.83 2.83 0 0 1 0-4L17 3",key:"dg8b2p"}],["path",{d:"m16 2 6 6",key:"1gw87d"}],["path",{d:"M12 16H4",key:"1cjfip"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V9=e("TestTubeIcon",[["path",{d:"M14.5 2v17.5c0 1.4-1.1 2.5-2.5 2.5h0c-1.4 0-2.5-1.1-2.5-2.5V2",key:"187lwq"}],["path",{d:"M8.5 2h7",key:"csnxdl"}],["path",{d:"M14.5 16h-5",key:"1ox875"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P9=e("TestTubesIcon",[["path",{d:"M9 2v17.5A2.5 2.5 0 0 1 6.5 22v0A2.5 2.5 0 0 1 4 19.5V2",key:"12z67u"}],["path",{d:"M20 2v17.5a2.5 2.5 0 0 1-2.5 2.5v0a2.5 2.5 0 0 1-2.5-2.5V2",key:"1q2nfy"}],["path",{d:"M3 2h7",key:"7s29d5"}],["path",{d:"M14 2h7",key:"7sicin"}],["path",{d:"M9 16H4",key:"1bfye3"}],["path",{d:"M20 16h-5",key:"ddnjpe"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j9=e("TextCursorInputIcon",[["path",{d:"M5 4h1a3 3 0 0 1 3 3 3 3 0 0 1 3-3h1",key:"18xjzo"}],["path",{d:"M13 20h-1a3 3 0 0 1-3-3 3 3 0 0 1-3 3H5",key:"fj48gi"}],["path",{d:"M5 16H4a2 2 0 0 1-2-2v-4a2 2 0 0 1 2-2h1",key:"1n9rhb"}],["path",{d:"M13 8h7a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-7",key:"13ksps"}],["path",{d:"M9 7v10",key:"1vc8ob"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _9=e("TextCursorIcon",[["path",{d:"M17 22h-1a4 4 0 0 1-4-4V6a4 4 0 0 1 4-4h1",key:"uvaxm9"}],["path",{d:"M7 22h1a4 4 0 0 0 4-4v-1",key:"11xy8d"}],["path",{d:"M7 2h1a4 4 0 0 1 4 4v1",key:"1uw06m"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D9=e("TextQuoteIcon",[["path",{d:"M17 6H3",key:"16j9eg"}],["path",{d:"M21 12H8",key:"scolzb"}],["path",{d:"M21 18H8",key:"1wfozv"}],["path",{d:"M3 12v6",key:"fv4c87"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B9=e("TextSearchIcon",[["path",{d:"M21 6H3",key:"1jwq7v"}],["path",{d:"M10 12H3",key:"1ulcyk"}],["path",{d:"M10 18H3",key:"13769t"}],["circle",{cx:"17",cy:"15",r:"3",key:"1upz2a"}],["path",{d:"m21 19-1.9-1.9",key:"dwi7p8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n2=e("TextSelectIcon",[["path",{d:"M5 3a2 2 0 0 0-2 2",key:"y57alp"}],["path",{d:"M19 3a2 2 0 0 1 2 2",key:"18rm91"}],["path",{d:"M21 19a2 2 0 0 1-2 2",key:"1j7049"}],["path",{d:"M5 21a2 2 0 0 1-2-2",key:"sbafld"}],["path",{d:"M9 3h1",key:"1yesri"}],["path",{d:"M9 21h1",key:"15o7lz"}],["path",{d:"M14 3h1",key:"1ec4yj"}],["path",{d:"M14 21h1",key:"v9vybs"}],["path",{d:"M3 9v1",key:"1r0deq"}],["path",{d:"M21 9v1",key:"mxsmne"}],["path",{d:"M3 14v1",key:"vnatye"}],["path",{d:"M21 14v1",key:"169vum"}],["line",{x1:"7",x2:"15",y1:"8",y2:"8",key:"1758g8"}],["line",{x1:"7",x2:"17",y1:"12",y2:"12",key:"197423"}],["line",{x1:"7",x2:"13",y1:"16",y2:"16",key:"37cgm6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F9=e("TextIcon",[["path",{d:"M17 6.1H3",key:"wptmhv"}],["path",{d:"M21 12.1H3",key:"1j38uz"}],["path",{d:"M15.1 18H3",key:"1nb16a"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T9=e("TheaterIcon",[["path",{d:"M2 10s3-3 3-8",key:"3xiif0"}],["path",{d:"M22 10s-3-3-3-8",key:"ioaa5q"}],["path",{d:"M10 2c0 4.4-3.6 8-8 8",key:"16fkpi"}],["path",{d:"M14 2c0 4.4 3.6 8 8 8",key:"b9eulq"}],["path",{d:"M2 10s2 2 2 5",key:"1au1lb"}],["path",{d:"M22 10s-2 2-2 5",key:"qi2y5e"}],["path",{d:"M8 15h8",key:"45n4r"}],["path",{d:"M2 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"1vsc2m"}],["path",{d:"M14 22v-1a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1",key:"hrha4u"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R9=e("ThermometerSnowflakeIcon",[["path",{d:"M2 12h10",key:"19562f"}],["path",{d:"M9 4v16",key:"81ygyz"}],["path",{d:"m3 9 3 3-3 3",key:"1sas0l"}],["path",{d:"M12 6 9 9 6 6",key:"pfrgxu"}],["path",{d:"m6 18 3-3 1.5 1.5",key:"1e277p"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O9=e("ThermometerSunIcon",[["path",{d:"M12 9a4 4 0 0 0-2 7.5",key:"1jvsq6"}],["path",{d:"M12 3v2",key:"1w22ol"}],["path",{d:"m6.6 18.4-1.4 1.4",key:"w2yidj"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}],["path",{d:"M4 13H2",key:"118le4"}],["path",{d:"M6.34 7.34 4.93 5.93",key:"1brd51"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U9=e("ThermometerIcon",[["path",{d:"M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"17jzev"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E9=e("ThumbsDownIcon",[["path",{d:"M17 14V2",key:"8ymqnk"}],["path",{d:"M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z",key:"s6e0r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z9=e("ThumbsUpIcon",[["path",{d:"M7 10v12",key:"1qc93n"}],["path",{d:"M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z",key:"y3tblf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $9=e("TicketCheckIcon",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G9=e("TicketMinusIcon",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M9 12h6",key:"1c52cq"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N9=e("TicketPercentIcon",[["path",{d:"M2 9a3 3 0 1 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 1 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"1l48ns"}],["path",{d:"M9 9h.01",key:"1q5me6"}],["path",{d:"m15 9-6 6",key:"1uzhvr"}],["path",{d:"M15 15h.01",key:"lqbp3k"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W9=e("TicketPlusIcon",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M9 12h6",key:"1c52cq"}],["path",{d:"M12 9v6",key:"199k2o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X9=e("TicketSlashIcon",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9.5 14.5 5-5",key:"qviqfa"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K9=e("TicketXIcon",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"m9.5 14.5 5-5",key:"qviqfa"}],["path",{d:"m9.5 9.5 5 5",key:"18nt4w"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J9=e("TicketIcon",[["path",{d:"M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z",key:"qn84l0"}],["path",{d:"M13 5v2",key:"dyzc3o"}],["path",{d:"M13 17v2",key:"1ont0d"}],["path",{d:"M13 11v2",key:"1wjjxi"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y9=e("TimerOffIcon",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M4.6 11a8 8 0 0 0 1.7 8.7 8 8 0 0 0 8.7 1.7",key:"10he05"}],["path",{d:"M7.4 7.4a8 8 0 0 1 10.3 1 8 8 0 0 1 .9 10.2",key:"15f7sh"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M12 12v-2",key:"fwoke6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q9=e("TimerResetIcon",[["path",{d:"M10 2h4",key:"n1abiw"}],["path",{d:"M12 14v-4",key:"1evpnu"}],["path",{d:"M4 13a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6",key:"1ts96g"}],["path",{d:"M9 17H4v5",key:"8t5av"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eM=e("TimerIcon",[["line",{x1:"10",x2:"14",y1:"2",y2:"2",key:"14vaq8"}],["line",{x1:"12",x2:"15",y1:"14",y2:"11",key:"17fdiu"}],["circle",{cx:"12",cy:"14",r:"8",key:"1e1u0o"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tM=e("ToggleLeftIcon",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"8",cy:"12",r:"2",key:"1nvbw3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aM=e("ToggleRightIcon",[["rect",{width:"20",height:"12",x:"2",y:"6",rx:"6",ry:"6",key:"f2vt7d"}],["circle",{cx:"16",cy:"12",r:"2",key:"4ma0v8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oM=e("TornadoIcon",[["path",{d:"M21 4H3",key:"1hwok0"}],["path",{d:"M18 8H6",key:"41n648"}],["path",{d:"M19 12H9",key:"1g4lpz"}],["path",{d:"M16 16h-6",key:"1j5d54"}],["path",{d:"M11 20H9",key:"39obr8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cM=e("TorusIcon",[["ellipse",{cx:"12",cy:"11",rx:"3",ry:"2",key:"1b2qxu"}],["ellipse",{cx:"12",cy:"12.5",rx:"10",ry:"8.5",key:"h8emeu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nM=e("TouchpadOffIcon",[["path",{d:"M4 4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16",key:"lnt0bk"}],["path",{d:"M2 14h12",key:"d8icqz"}],["path",{d:"M22 14h-2",key:"jrx26d"}],["path",{d:"M12 20v-6",key:"1rm09r"}],["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M22 16V6a2 2 0 0 0-2-2H10",key:"11y8e4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iM=e("TouchpadIcon",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 14h20",key:"myj16y"}],["path",{d:"M12 20v-6",key:"1rm09r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rM=e("TowerControlIcon",[["path",{d:"M18.2 12.27 20 6H4l1.8 6.27a1 1 0 0 0 .95.73h10.5a1 1 0 0 0 .96-.73Z",key:"1pledb"}],["path",{d:"M8 13v9",key:"hmv0ci"}],["path",{d:"M16 22v-9",key:"ylnf1u"}],["path",{d:"m9 6 1 7",key:"dpdgam"}],["path",{d:"m15 6-1 7",key:"ls7zgu"}],["path",{d:"M12 6V2",key:"1pj48d"}],["path",{d:"M13 2h-2",key:"mj6ths"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dM=e("ToyBrickIcon",[["rect",{width:"18",height:"12",x:"3",y:"8",rx:"1",key:"158fvp"}],["path",{d:"M10 8V5c0-.6-.4-1-1-1H6a1 1 0 0 0-1 1v3",key:"s0042v"}],["path",{d:"M19 8V5c0-.6-.4-1-1-1h-3a1 1 0 0 0-1 1v3",key:"9wmeh2"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hM=e("TractorIcon",[["path",{d:"m10 11 11 .9c.6 0 .9.5.8 1.1l-.8 5h-1",key:"2w242w"}],["path",{d:"M16 18h-5",key:"bq60fd"}],["path",{d:"M18 5a1 1 0 0 0-1 1v5.573",key:"1kv8ia"}],["path",{d:"M3 4h9l1 7.246",key:"d639it"}],["path",{d:"M4 11V4",key:"9ft8pt"}],["path",{d:"M7 15h.01",key:"k5ht0j"}],["path",{d:"M8 10.1V4",key:"1jgyzo"}],["circle",{cx:"18",cy:"18",r:"2",key:"1emm8v"}],["circle",{cx:"7",cy:"15",r:"5",key:"ddtuc"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lM=e("TrafficConeIcon",[["path",{d:"M9.3 6.2a4.55 4.55 0 0 0 5.4 0",key:"flyxqv"}],["path",{d:"M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3",key:"1nlxxg"}],["path",{d:"M13.9 3.5a1.93 1.93 0 0 0-3.8-.1l-3 10c-.1.2-.1.4-.1.6 0 1.7 2.2 3 5 3s5-1.3 5-3c0-.2 0-.4-.1-.5Z",key:"vz7x1l"}],["path",{d:"m7.5 12.2-4.7 2.7c-.5.3-.8.7-.8 1.1s.3.8.8 1.1l7.6 4.5c.9.5 2.1.5 3 0l7.6-4.5c.7-.3 1-.7 1-1.1s-.3-.8-.8-1.1l-4.7-2.8",key:"1xfzlw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sM=e("TrainFrontTunnelIcon",[["path",{d:"M2 22V12a10 10 0 1 1 20 0v10",key:"o0fyp0"}],["path",{d:"M15 6.8v1.4a3 2.8 0 1 1-6 0V6.8",key:"m8q3n9"}],["path",{d:"M10 15h.01",key:"44in9x"}],["path",{d:"M14 15h.01",key:"5mohn5"}],["path",{d:"M10 19a4 4 0 0 1-4-4v-3a6 6 0 1 1 12 0v3a4 4 0 0 1-4 4Z",key:"hckbmu"}],["path",{d:"m9 19-2 3",key:"iij7hm"}],["path",{d:"m15 19 2 3",key:"npx8sa"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yM=e("TrainFrontIcon",[["path",{d:"M8 3.1V7a4 4 0 0 0 8 0V3.1",key:"1v71zp"}],["path",{d:"m9 15-1-1",key:"1yrq24"}],["path",{d:"m15 15 1-1",key:"1t0d6s"}],["path",{d:"M9 19c-2.8 0-5-2.2-5-5v-4a8 8 0 0 1 16 0v4c0 2.8-2.2 5-5 5Z",key:"1p0hjs"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m16 19 2 3",key:"xo31yx"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pM=e("TrainTrackIcon",[["path",{d:"M2 17 17 2",key:"18b09t"}],["path",{d:"m2 14 8 8",key:"1gv9hu"}],["path",{d:"m5 11 8 8",key:"189pqp"}],["path",{d:"m8 8 8 8",key:"1imecy"}],["path",{d:"m11 5 8 8",key:"ummqn6"}],["path",{d:"m14 2 8 8",key:"1vk7dn"}],["path",{d:"M7 22 22 7",key:"15mb1i"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i2=e("TramFrontIcon",[["rect",{width:"16",height:"16",x:"4",y:"3",rx:"2",key:"1wxw4b"}],["path",{d:"M4 11h16",key:"mpoxn0"}],["path",{d:"M12 3v8",key:"1h2ygw"}],["path",{d:"m8 19-2 3",key:"13i0xs"}],["path",{d:"m18 22-2-3",key:"1p0ohu"}],["path",{d:"M8 15h.01",key:"a7atzg"}],["path",{d:"M16 15h.01",key:"rnfrdf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kM=e("Trash2Icon",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uM=e("TrashIcon",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const MM=e("TreeDeciduousIcon",[["path",{d:"M8 19a4 4 0 0 1-2.24-7.32A3.5 3.5 0 0 1 9 6.03V6a3 3 0 1 1 6 0v.04a3.5 3.5 0 0 1 3.24 5.65A4 4 0 0 1 16 19Z",key:"oadzkq"}],["path",{d:"M12 19v3",key:"npa21l"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=e("TreePalmIcon",[["path",{d:"M13 8c0-2.76-2.46-5-5.5-5S2 5.24 2 8h2l1-1 1 1h4",key:"foxbe7"}],["path",{d:"M13 7.14A5.82 5.82 0 0 1 16.5 6c3.04 0 5.5 2.24 5.5 5h-3l-1-1-1 1h-3",key:"18arnh"}],["path",{d:"M5.89 9.71c-2.15 2.15-2.3 5.47-.35 7.43l4.24-4.25.7-.7.71-.71 2.12-2.12c-1.95-1.96-5.27-1.8-7.42.35",key:"ywahnh"}],["path",{d:"M11 15.5c.5 2.5-.17 4.5-1 6.5h4c2-5.5-.5-12-1-14",key:"ft0feo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mM=e("TreePineIcon",[["path",{d:"m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z",key:"cpyugq"}],["path",{d:"M12 22v-3",key:"kmzjlo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vM=e("TreesIcon",[["path",{d:"M10 10v.2A3 3 0 0 1 8.9 16v0H5v0h0a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z",key:"yh07w9"}],["path",{d:"M7 16v6",key:"1a82de"}],["path",{d:"M13 19v3",key:"13sx9i"}],["path",{d:"M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5",key:"1sj9kv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gM=e("TrelloIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["rect",{width:"3",height:"9",x:"7",y:"7",key:"14n3xi"}],["rect",{width:"3",height:"5",x:"14",y:"7",key:"s4azjd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const IM=e("TrendingDownIcon",[["polyline",{points:"22 17 13.5 8.5 8.5 13.5 2 7",key:"1r2t7k"}],["polyline",{points:"16 17 22 17 22 11",key:"11uiuu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xM=e("TrendingUpIcon",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d2=e("TriangleAlertIcon",[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fM=e("TriangleRightIcon",[["path",{d:"M22 18a2 2 0 0 1-2 2H3c-1.1 0-1.3-.6-.4-1.3L20.4 4.3c.9-.7 1.6-.4 1.6.7Z",key:"183wce"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const LM=e("TriangleIcon",[["path",{d:"M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z",key:"14u9p9"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wM=e("TrophyIcon",[["path",{d:"M6 9H4.5a2.5 2.5 0 0 1 0-5H6",key:"17hqa7"}],["path",{d:"M18 9h1.5a2.5 2.5 0 0 0 0-5H18",key:"lmptdp"}],["path",{d:"M4 22h16",key:"57wxv0"}],["path",{d:"M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22",key:"1nw9bq"}],["path",{d:"M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22",key:"1np0yb"}],["path",{d:"M18 2H6v7a6 6 0 0 0 12 0V2Z",key:"u46fv3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CM=e("TruckIcon",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bM=e("TurtleIcon",[["path",{d:"m12 10 2 4v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3a8 8 0 1 0-16 0v3a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-3l2-4h4Z",key:"1lbbv7"}],["path",{d:"M4.82 7.9 8 10",key:"m9wose"}],["path",{d:"M15.18 7.9 12 10",key:"p8dp2u"}],["path",{d:"M16.93 10H20a2 2 0 0 1 0 4H2",key:"12nsm7"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const SM=e("Tv2Icon",[["path",{d:"M7 21h10",key:"1b0cd5"}],["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qM=e("TvIcon",[["rect",{width:"20",height:"15",x:"2",y:"7",rx:"2",ry:"2",key:"10ag99"}],["polyline",{points:"17 2 12 7 7 2",key:"11pgbg"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const AM=e("TwitchIcon",[["path",{d:"M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7",key:"c0yzno"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const HM=e("TwitterIcon",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zM=e("TypeIcon",[["polyline",{points:"4 7 4 4 20 4 20 7",key:"1nosan"}],["line",{x1:"9",x2:"15",y1:"20",y2:"20",key:"swin9y"}],["line",{x1:"12",x2:"12",y1:"4",y2:"20",key:"1tx1rr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VM=e("UmbrellaOffIcon",[["path",{d:"M12 2v1",key:"11qlp1"}],["path",{d:"M15.5 21a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575",key:"eki10q"}],["path",{d:"M17.5 12H22A10 10 0 0 0 9.004 3.455",key:"n2ayka"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const PM=e("UmbrellaIcon",[["path",{d:"M22 12a10.06 10.06 1 0 0-20 0Z",key:"1teyop"}],["path",{d:"M12 12v8a2 2 0 0 0 4 0",key:"ulpmoc"}],["path",{d:"M12 2v1",key:"11qlp1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jM=e("UnderlineIcon",[["path",{d:"M6 4v6a6 6 0 0 0 12 0V4",key:"9kb039"}],["line",{x1:"4",x2:"20",y1:"20",y2:"20",key:"nun2al"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _M=e("Undo2Icon",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11",key:"llx8ln"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const DM=e("UndoDotIcon",[["circle",{cx:"12",cy:"17",r:"1",key:"1ixnty"}],["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BM=e("UndoIcon",[["path",{d:"M3 7v6h6",key:"1v2h90"}],["path",{d:"M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13",key:"1r6uu6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FM=e("UnfoldHorizontalIcon",[["path",{d:"M16 12h6",key:"15xry1"}],["path",{d:"M8 12H2",key:"1jqql6"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 8v2",key:"1woqiv"}],["path",{d:"M12 14v2",key:"8jcxud"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m19 15 3-3-3-3",key:"wjy7rq"}],["path",{d:"m5 9-3 3 3 3",key:"j64kie"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const TM=e("UnfoldVerticalIcon",[["path",{d:"M12 22v-6",key:"6o8u61"}],["path",{d:"M12 8V2",key:"1wkif3"}],["path",{d:"M4 12H2",key:"rhcxmi"}],["path",{d:"M10 12H8",key:"s88cx1"}],["path",{d:"M16 12h-2",key:"10asgb"}],["path",{d:"M22 12h-2",key:"14jgyd"}],["path",{d:"m15 19-3 3-3-3",key:"11eu04"}],["path",{d:"m15 5-3-3-3 3",key:"itvq4r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const RM=e("UngroupIcon",[["rect",{width:"8",height:"6",x:"5",y:"4",rx:"1",key:"nzclkv"}],["rect",{width:"8",height:"6",x:"11",y:"14",rx:"1",key:"4tytwb"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h2=e("UniversityIcon",[["circle",{cx:"12",cy:"10",r:"1",key:"1gnqs8"}],["path",{d:"M22 20V8h-4l-6-4-6 4H2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",key:"1qj5sn"}],["path",{d:"M6 17v.01",key:"roodi6"}],["path",{d:"M6 13v.01",key:"67c122"}],["path",{d:"M18 17v.01",key:"12ktxm"}],["path",{d:"M18 13v.01",key:"tn1rt1"}],["path",{d:"M14 22v-5a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v5",key:"jfgdp0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const OM=e("Unlink2Icon",[["path",{d:"M15 7h2a5 5 0 0 1 0 10h-2m-6 0H7A5 5 0 0 1 7 7h2",key:"1re2ne"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const UM=e("UnlinkIcon",[["path",{d:"m18.84 12.25 1.72-1.71h-.02a5.004 5.004 0 0 0-.12-7.07 5.006 5.006 0 0 0-6.95 0l-1.72 1.71",key:"yqzxt4"}],["path",{d:"m5.17 11.75-1.71 1.71a5.004 5.004 0 0 0 .12 7.07 5.006 5.006 0 0 0 6.95 0l1.71-1.71",key:"4qinb0"}],["line",{x1:"8",x2:"8",y1:"2",y2:"5",key:"1041cp"}],["line",{x1:"2",x2:"5",y1:"8",y2:"8",key:"14m1p5"}],["line",{x1:"16",x2:"16",y1:"19",y2:"22",key:"rzdirn"}],["line",{x1:"19",x2:"22",y1:"16",y2:"16",key:"ox905f"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const EM=e("UnplugIcon",[["path",{d:"m19 5 3-3",key:"yk6iyv"}],["path",{d:"m2 22 3-3",key:"19mgm9"}],["path",{d:"M6.3 20.3a2.4 2.4 0 0 0 3.4 0L12 18l-6-6-2.3 2.3a2.4 2.4 0 0 0 0 3.4Z",key:"goz73y"}],["path",{d:"M7.5 13.5 10 11",key:"7xgeeb"}],["path",{d:"M10.5 16.5 13 14",key:"10btkg"}],["path",{d:"m12 6 6 6 2.3-2.3a2.4 2.4 0 0 0 0-3.4l-2.6-2.6a2.4 2.4 0 0 0-3.4 0Z",key:"1snsnr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ZM=e("UploadIcon",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $M=e("UsbIcon",[["circle",{cx:"10",cy:"7",r:"1",key:"dypaad"}],["circle",{cx:"4",cy:"20",r:"1",key:"22iqad"}],["path",{d:"M4.7 19.3 19 5",key:"1enqfc"}],["path",{d:"m21 3-3 1 2 2Z",key:"d3ov82"}],["path",{d:"M9.26 7.68 5 12l2 5",key:"1esawj"}],["path",{d:"m10 14 5 2 3.5-3.5",key:"v8oal5"}],["path",{d:"m18 12 1-1 1 1-1 1Z",key:"1bh22v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GM=e("UserCheckIcon",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["polyline",{points:"16 11 18 13 22 9",key:"1pwet4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const NM=e("UserCogIcon",[["circle",{cx:"18",cy:"15",r:"3",key:"gjjjvw"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M10 15H6a4 4 0 0 0-4 4v2",key:"1nfge6"}],["path",{d:"m21.7 16.4-.9-.3",key:"12j9ji"}],["path",{d:"m15.2 13.9-.9-.3",key:"1fdjdi"}],["path",{d:"m16.6 18.7.3-.9",key:"heedtr"}],["path",{d:"m19.1 12.2.3-.9",key:"1af3ki"}],["path",{d:"m19.6 18.7-.4-1",key:"1x9vze"}],["path",{d:"m16.8 12.3-.4-1",key:"vqeiwj"}],["path",{d:"m14.3 16.6 1-.4",key:"1qlj63"}],["path",{d:"m20.7 13.8 1-.4",key:"1v5t8k"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const WM=e("UserMinusIcon",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const XM=e("UserPlusIcon",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l2=e("UserRoundCheckIcon",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m16 19 2 2 4-4",key:"1b14m6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=e("UserRoundCogIcon",[["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m19.5 14.3-.4.9",key:"1eb35c"}],["path",{d:"m16.9 20.8-.4.9",key:"dfjc4z"}],["path",{d:"m21.7 19.5-.9-.4",key:"q4dx6b"}],["path",{d:"m15.2 16.9-.9-.4",key:"1r0w5f"}],["path",{d:"m21.7 16.5-.9.4",key:"1knoei"}],["path",{d:"m15.2 19.1-.9.4",key:"j188fs"}],["path",{d:"m19.5 21.7-.4-.9",key:"1tonu5"}],["path",{d:"m16.9 15.2-.4-.9",key:"699xu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y2=e("UserRoundMinusIcon",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 19h-6",key:"vcuq98"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p2=e("UserRoundPlusIcon",[["path",{d:"M2 21a8 8 0 0 1 13.292-6",key:"bjp14o"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M19 16v6",key:"tddt3s"}],["path",{d:"M22 19h-6",key:"vcuq98"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KM=e("UserRoundSearchIcon",[["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M2 21a8 8 0 0 1 10.434-7.62",key:"1yezr2"}],["circle",{cx:"18",cy:"18",r:"3",key:"1xkwt0"}],["path",{d:"m22 22-1.9-1.9",key:"1e5ubv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k2=e("UserRoundXIcon",[["path",{d:"M2 21a8 8 0 0 1 11.873-7",key:"74fkxq"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"m17 17 5 5",key:"p7ous7"}],["path",{d:"m22 17-5 5",key:"gqnmv0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u2=e("UserRoundIcon",[["circle",{cx:"12",cy:"8",r:"5",key:"1hypcn"}],["path",{d:"M20 21a8 8 0 0 0-16 0",key:"rfgkzh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const JM=e("UserSearchIcon",[["circle",{cx:"10",cy:"7",r:"4",key:"e45bow"}],["path",{d:"M10.3 15H7a4 4 0 0 0-4 4v2",key:"3bnktk"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["path",{d:"m21 21-1.9-1.9",key:"1g2n9r"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YM=e("UserXIcon",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"17",x2:"22",y1:"8",y2:"13",key:"3nzzx3"}],["line",{x1:"22",x2:"17",y1:"8",y2:"13",key:"1swrse"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oa=e("UserIcon",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M2=e("UsersRoundIcon",[["path",{d:"M18 21a8 8 0 0 0-16 0",key:"3ypg7q"}],["circle",{cx:"10",cy:"8",r:"5",key:"o932ke"}],["path",{d:"M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3",key:"10s06x"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QM=e("UsersIcon",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const em=e("UtensilsCrossedIcon",[["path",{d:"m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8",key:"n7qcjb"}],["path",{d:"M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7",key:"d0u48b"}],["path",{d:"m2.1 21.8 6.4-6.3",key:"yn04lh"}],["path",{d:"m19 5-7 7",key:"194lzd"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const tm=e("UtensilsIcon",[["path",{d:"M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2",key:"cjf0a3"}],["path",{d:"M7 2v20",key:"1473qp"}],["path",{d:"M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7",key:"1ogz0v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const am=e("UtilityPoleIcon",[["path",{d:"M12 2v20",key:"t6zp3m"}],["path",{d:"M2 5h20",key:"1fs1ex"}],["path",{d:"M3 3v2",key:"9imdir"}],["path",{d:"M7 3v2",key:"n0os7"}],["path",{d:"M17 3v2",key:"1l2re6"}],["path",{d:"M21 3v2",key:"1duuac"}],["path",{d:"m19 5-7 7-7-7",key:"133zxf"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const om=e("VariableIcon",[["path",{d:"M8 21s-4-3-4-9 4-9 4-9",key:"uto9ud"}],["path",{d:"M16 3s4 3 4 9-4 9-4 9",key:"4w2vsq"}],["line",{x1:"15",x2:"9",y1:"9",y2:"15",key:"f7djnv"}],["line",{x1:"9",x2:"15",y1:"9",y2:"15",key:"1shsy8"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cm=e("VaultIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}],["path",{d:"m7.9 7.9 2.7 2.7",key:"hpeyl3"}],["circle",{cx:"16.5",cy:"7.5",r:".5",fill:"currentColor",key:"w0ekpg"}],["path",{d:"m13.4 10.6 2.7-2.7",key:"264c1n"}],["circle",{cx:"7.5",cy:"16.5",r:".5",fill:"currentColor",key:"nkw3mc"}],["path",{d:"m7.9 16.1 2.7-2.7",key:"p81g5e"}],["circle",{cx:"16.5",cy:"16.5",r:".5",fill:"currentColor",key:"fubopw"}],["path",{d:"m13.4 13.4 2.7 2.7",key:"abhel3"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nm=e("VeganIcon",[["path",{d:"M2 2a26.6 26.6 0 0 1 10 20c.9-6.82 1.5-9.5 4-14",key:"qiv7li"}],["path",{d:"M16 8c4 0 6-2 6-6-4 0-6 2-6 6",key:"n7eohy"}],["path",{d:"M17.41 3.6a10 10 0 1 0 3 3",key:"1dion0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const im=e("VenetianMaskIcon",[["path",{d:"M2 12a5 5 0 0 0 5 5 8 8 0 0 1 5 2 8 8 0 0 1 5-2 5 5 0 0 0 5-5V7h-5a8 8 0 0 0-5 2 8 8 0 0 0-5-2H2Z",key:"1g6z3j"}],["path",{d:"M6 11c1.5 0 3 .5 3 2-2 0-3 0-3-2Z",key:"c2lwnf"}],["path",{d:"M18 11c-1.5 0-3 .5-3 2 2 0 3 0 3-2Z",key:"njd9zo"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rm=e("VibrateOffIcon",[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["path",{d:"M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2",key:"1hbad5"}],["path",{d:"M16 10.34V6c0-.55-.45-1-1-1h-4.34",key:"1x5tf0"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dm=e("VibrateIcon",[["path",{d:"m2 8 2 2-2 2 2 2-2 2",key:"sv1b1"}],["path",{d:"m22 8-2 2 2 2-2 2 2 2",key:"101i4y"}],["rect",{width:"8",height:"14",x:"8",y:"5",rx:"1",key:"1oyrl4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hm=e("VideoOffIcon",[["path",{d:"M10.66 6H14a2 2 0 0 1 2 2v2.5l5.248-3.062A.5.5 0 0 1 22 7.87v8.196",key:"w8jjjt"}],["path",{d:"M16 16a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2",key:"1xawa7"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const lm=e("VideoIcon",[["path",{d:"m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5",key:"ftymec"}],["rect",{x:"2",y:"6",width:"14",height:"12",rx:"2",key:"158x01"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sm=e("VideotapeIcon",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"M2 8h20",key:"d11cs7"}],["circle",{cx:"8",cy:"14",r:"2",key:"1k2qr5"}],["path",{d:"M8 12h8",key:"1wcyev"}],["circle",{cx:"16",cy:"14",r:"2",key:"14k7lr"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ym=e("ViewIcon",[["path",{d:"M5 12s2.545-5 7-5c4.454 0 7 5 7 5s-2.546 5-7 5c-4.455 0-7-5-7-5z",key:"vptub8"}],["path",{d:"M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",key:"10lhjs"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2",key:"mrq65r"}],["path",{d:"M21 7V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2",key:"be3xqs"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pm=e("VoicemailIcon",[["circle",{cx:"6",cy:"12",r:"4",key:"1ehtga"}],["circle",{cx:"18",cy:"12",r:"4",key:"4vafl8"}],["line",{x1:"6",x2:"18",y1:"16",y2:"16",key:"pmt8us"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=e("Volume1Icon",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O2=e("Volume2Icon",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["path",{d:"M15.54 8.46a5 5 0 0 1 0 7.07",key:"ltjumu"}],["path",{d:"M19.07 4.93a10 10 0 0 1 0 14.14",key:"1kegas"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U2=e("VolumeXIcon",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const um=e("VolumeIcon",[["polygon",{points:"11 5 6 9 2 9 2 15 6 15 11 19 11 5",key:"16drj5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mm=e("VoteIcon",[["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}],["path",{d:"M5 7c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v12H5V7Z",key:"1ezoue"}],["path",{d:"M22 19H2",key:"nuriw5"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mm=e("WalletCardsIcon",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2",key:"4125el"}],["path",{d:"M3 11h3c.8 0 1.6.3 2.1.9l1.1.9c1.6 1.6 4.1 1.6 5.7 0l1.1-.9c.5-.5 1.3-.9 2.1-.9H21",key:"1dpki6"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m2=e("WalletMinimalIcon",[["path",{d:"M17 14h.01",key:"7oqj8z"}],["path",{d:"M7 7h12a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14",key:"u1rqew"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vm=e("WalletIcon",[["path",{d:"M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",key:"18etb6"}],["path",{d:"M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4",key:"xoc0q4"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gm=e("WallpaperIcon",[["circle",{cx:"8",cy:"9",r:"2",key:"gjzl9d"}],["path",{d:"m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2",key:"69xh40"}],["path",{d:"M8 21h8",key:"1ev6f3"}],["path",{d:"M12 17v4",key:"1riwvh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v2=e("WandSparklesIcon",[["path",{d:"m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",key:"ul74o6"}],["path",{d:"m14 7 3 3",key:"1r5n42"}],["path",{d:"M5 6v4",key:"ilb8ba"}],["path",{d:"M19 14v4",key:"blhpug"}],["path",{d:"M10 2v2",key:"7u0qdc"}],["path",{d:"M7 8H3",key:"zfb6yr"}],["path",{d:"M21 16h-4",key:"1cnmox"}],["path",{d:"M11 3H9",key:"1obp7u"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Im=e("WandIcon",[["path",{d:"M15 4V2",key:"z1p9b7"}],["path",{d:"M15 16v-2",key:"px0unx"}],["path",{d:"M8 9h2",key:"1g203m"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M17.8 11.8 19 13",key:"yihg8r"}],["path",{d:"M15 9h0",key:"kg5t1u"}],["path",{d:"M17.8 6.2 19 5",key:"fd4us0"}],["path",{d:"m3 21 9-9",key:"1jfql5"}],["path",{d:"M12.2 6.2 11 5",key:"i3da3b"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xm=e("WarehouseIcon",[["path",{d:"M22 8.35V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8.35A2 2 0 0 1 3.26 6.5l8-3.2a2 2 0 0 1 1.48 0l8 3.2A2 2 0 0 1 22 8.35Z",key:"gksnxg"}],["path",{d:"M6 18h12",key:"9pbo8z"}],["path",{d:"M6 14h12",key:"4cwo0f"}],["rect",{width:"12",height:"12",x:"6",y:"10",key:"apd30q"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fm=e("WashingMachineIcon",[["path",{d:"M3 6h3",key:"155dbl"}],["path",{d:"M17 6h.01",key:"e2y6kg"}],["rect",{width:"18",height:"20",x:"3",y:"2",rx:"2",key:"od3kk9"}],["circle",{cx:"12",cy:"13",r:"5",key:"nlbqau"}],["path",{d:"M12 18a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 1 0-5",key:"17lach"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lm=e("WatchIcon",[["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["polyline",{points:"12 10 12 12 13 13",key:"19dquz"}],["path",{d:"m16.13 7.66-.81-4.05a2 2 0 0 0-2-1.61h-2.68a2 2 0 0 0-2 1.61l-.78 4.05",key:"18k57s"}],["path",{d:"m7.88 16.36.8 4a2 2 0 0 0 2 1.61h2.72a2 2 0 0 0 2-1.61l.81-4.05",key:"16ny36"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wm=e("WavesIcon",[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cm=e("WaypointsIcon",[["circle",{cx:"12",cy:"4.5",r:"2.5",key:"r5ysbb"}],["path",{d:"m10.2 6.3-3.9 3.9",key:"1nzqf6"}],["circle",{cx:"4.5",cy:"12",r:"2.5",key:"jydg6v"}],["path",{d:"M7 12h10",key:"b7w52i"}],["circle",{cx:"19.5",cy:"12",r:"2.5",key:"1piiel"}],["path",{d:"m13.8 17.7 3.9-3.9",key:"1wyg1y"}],["circle",{cx:"12",cy:"19.5",r:"2.5",key:"13o1pw"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bm=e("WebcamIcon",[["circle",{cx:"12",cy:"10",r:"8",key:"1gshiw"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}],["path",{d:"M7 22h10",key:"10w4w3"}],["path",{d:"M12 22v-4",key:"1utk9m"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sm=e("WebhookOffIcon",[["path",{d:"M17 17h-5c-1.09-.02-1.94.92-2.5 1.9A3 3 0 1 1 2.57 15",key:"1tvl6x"}],["path",{d:"M9 3.4a4 4 0 0 1 6.52.66",key:"q04jfq"}],["path",{d:"m6 17 3.1-5.8a2.5 2.5 0 0 0 .057-2.05",key:"azowf0"}],["path",{d:"M20.3 20.3a4 4 0 0 1-2.3.7",key:"5joiws"}],["path",{d:"M18.6 13a4 4 0 0 1 3.357 3.414",key:"cangb8"}],["path",{d:"m12 6 .6 1",key:"tpjl1n"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qm=e("WebhookIcon",[["path",{d:"M18 16.98h-5.99c-1.1 0-1.95.94-2.48 1.9A4 4 0 0 1 2 17c.01-.7.2-1.4.57-2",key:"q3hayz"}],["path",{d:"m6 17 3.13-5.78c.53-.97.1-2.18-.5-3.1a4 4 0 1 1 6.89-4.06",key:"1go1hn"}],["path",{d:"m12 6 3.13 5.73C15.66 12.7 16.9 13 18 13a4 4 0 0 1 0 8",key:"qlwsc0"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Am=e("WeightIcon",[["circle",{cx:"12",cy:"5",r:"3",key:"rqqgnr"}],["path",{d:"M6.5 8a2 2 0 0 0-1.905 1.46L2.1 18.5A2 2 0 0 0 4 21h16a2 2 0 0 0 1.925-2.54L19.4 9.5A2 2 0 0 0 17.48 8Z",key:"56o5sh"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=e("WheatOffIcon",[["path",{d:"m2 22 10-10",key:"28ilpk"}],["path",{d:"m16 8-1.17 1.17",key:"1qqm82"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"m8 8-.53.53a3.5 3.5 0 0 0 0 4.94L9 15l1.53-1.53c.55-.55.88-1.25.98-1.97",key:"4wz8re"}],["path",{d:"M10.91 5.26c.15-.26.34-.51.56-.73L13 3l1.53 1.53a3.5 3.5 0 0 1 .28 4.62",key:"rves66"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"m16 16-.53.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.49 3.49 0 0 1 1.97-.98",key:"ak46r"}],["path",{d:"M18.74 13.09c.26-.15.51-.34.73-.56L21 11l-1.53-1.53a3.5 3.5 0 0 0-4.62-.28",key:"1tw520"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zm=e("WheatIcon",[["path",{d:"M2 22 16 8",key:"60hf96"}],["path",{d:"M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1rdhi6"}],["path",{d:"M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"1sdzmb"}],["path",{d:"M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z",key:"eoatbi"}],["path",{d:"M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z",key:"19rau1"}],["path",{d:"M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"tc8ph9"}],["path",{d:"M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"2m8kc5"}],["path",{d:"M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z",key:"vex3ng"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=e("WholeWordIcon",[["circle",{cx:"7",cy:"12",r:"3",key:"12clwm"}],["path",{d:"M10 9v6",key:"17i7lo"}],["circle",{cx:"17",cy:"12",r:"3",key:"gl7c2s"}],["path",{d:"M14 7v8",key:"dl84cr"}],["path",{d:"M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1",key:"lt2kga"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pm=e("WifiOffIcon",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jm=e("WifiIcon",[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _m=e("WindIcon",[["path",{d:"M17.7 7.7a2.5 2.5 0 1 1 1.8 4.3H2",key:"1k4u03"}],["path",{d:"M9.6 4.6A2 2 0 1 1 11 8H2",key:"b7d0fd"}],["path",{d:"M12.6 19.4A2 2 0 1 0 14 16H2",key:"1p5cb3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dm=e("WineOffIcon",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h3m7 0h-1.343",key:"v48bem"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M7.307 7.307A12.33 12.33 0 0 0 7 10a5 5 0 0 0 7.391 4.391M8.638 2.981C8.75 2.668 8.872 2.34 9 2h6c1.5 4 2 6 2 8 0 .407-.05.809-.145 1.198",key:"1ymjlu"}],["line",{x1:"2",x2:"22",y1:"2",y2:"22",key:"a6p6uj"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bm=e("WineIcon",[["path",{d:"M8 22h8",key:"rmew8v"}],["path",{d:"M7 10h10",key:"1101jm"}],["path",{d:"M12 15v7",key:"t2xh3l"}],["path",{d:"M12 15a5 5 0 0 0 5-5c0-2-.5-4-2-8H9c-1.5 4-2 6-2 8a5 5 0 0 0 5 5Z",key:"10ffi3"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fm=e("WorkflowIcon",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tm=e("WormIcon",[["path",{d:"m19 12-1.5 3",key:"9bcu4o"}],["path",{d:"M19.63 18.81 22 20",key:"121v98"}],["path",{d:"M6.47 8.23a1.68 1.68 0 0 1 2.44 1.93l-.64 2.08a6.76 6.76 0 0 0 10.16 7.67l.42-.27a1 1 0 1 0-2.73-4.21l-.42.27a1.76 1.76 0 0 1-2.63-1.99l.64-2.08A6.66 6.66 0 0 0 3.94 3.9l-.7.4a1 1 0 1 0 2.55 4.34z",key:"1tij6q"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rm=e("WrapTextIcon",[["line",{x1:"3",x2:"21",y1:"6",y2:"6",key:"4m8b97"}],["path",{d:"M3 12h15a3 3 0 1 1 0 6h-4",key:"1cl7v7"}],["polyline",{points:"16 16 14 18 16 20",key:"1jznyi"}],["line",{x1:"3",x2:"10",y1:"18",y2:"18",key:"1h33wv"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Om=e("WrenchIcon",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E2=e("XIcon",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Um=e("YoutubeIcon",[["path",{d:"M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17",key:"1q2vi4"}],["path",{d:"m10 15 5-3-5-3z",key:"1jp15x"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Em=e("ZapOffIcon",[["path",{d:"M10.513 4.856 13.12 2.17a.5.5 0 0 1 .86.46l-1.377 4.317",key:"193nxd"}],["path",{d:"M15.656 10H20a1 1 0 0 1 .78 1.63l-1.72 1.773",key:"27a7lr"}],["path",{d:"M16.273 16.273 10.88 21.83a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14H4a1 1 0 0 1-.78-1.63l4.507-4.643",key:"1e0qe9"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zm=e("ZapIcon",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $m=e("ZoomInIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=e("ZoomOutIcon",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hI=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:sa,AArrowUp:ya,ALargeSmall:pa,Accessibility:ka,Activity:ua,AirVent:Ma,Airplay:ma,AlarmClock:ga,AlarmClockCheck:Me,AlarmClockMinus:me,AlarmClockOff:va,AlarmClockPlus:ve,AlarmSmoke:Ia,Album:xa,AlignCenter:wa,AlignCenterHorizontal:fa,AlignCenterVertical:La,AlignEndHorizontal:Ca,AlignEndVertical:ba,AlignHorizontalDistributeCenter:Sa,AlignHorizontalDistributeEnd:qa,AlignHorizontalDistributeStart:Aa,AlignHorizontalJustifyCenter:Ha,AlignHorizontalJustifyEnd:za,AlignHorizontalJustifyStart:Va,AlignHorizontalSpaceAround:Pa,AlignHorizontalSpaceBetween:ja,AlignJustify:_a,AlignLeft:Da,AlignRight:Ba,AlignStartHorizontal:Fa,AlignStartVertical:Ta,AlignVerticalDistributeCenter:Ra,AlignVerticalDistributeEnd:Oa,AlignVerticalDistributeStart:Ua,AlignVerticalJustifyCenter:Ea,AlignVerticalJustifyEnd:Za,AlignVerticalJustifyStart:$a,AlignVerticalSpaceAround:Ga,AlignVerticalSpaceBetween:Na,Ambulance:Wa,Ampersand:Xa,Ampersands:Ka,Anchor:Ja,Angry:Ya,Annoyed:Qa,Antenna:eo,Anvil:to,Aperture:ao,AppWindow:co,AppWindowMac:oo,Apple:no,Archive:ho,ArchiveRestore:io,ArchiveX:ro,AreaChart:lo,Armchair:so,ArrowBigDown:po,ArrowBigDownDash:yo,ArrowBigLeft:uo,ArrowBigLeftDash:ko,ArrowBigRight:mo,ArrowBigRightDash:Mo,ArrowBigUp:go,ArrowBigUpDash:vo,ArrowDown:Ao,ArrowDown01:Io,ArrowDown10:xo,ArrowDownAZ:ge,ArrowDownFromLine:fo,ArrowDownLeft:Lo,ArrowDownNarrowWide:wo,ArrowDownRight:Co,ArrowDownToDot:bo,ArrowDownToLine:So,ArrowDownUp:qo,ArrowDownWideNarrow:Ie,ArrowDownZA:xe,ArrowLeft:Po,ArrowLeftFromLine:Ho,ArrowLeftRight:zo,ArrowLeftToLine:Vo,ArrowRight:Bo,ArrowRightFromLine:jo,ArrowRightLeft:_o,ArrowRightToLine:Do,ArrowUp:No,ArrowUp01:Fo,ArrowUp10:To,ArrowUpAZ:fe,ArrowUpDown:Ro,ArrowUpFromDot:Oo,ArrowUpFromLine:Uo,ArrowUpLeft:Eo,ArrowUpNarrowWide:Le,ArrowUpRight:Zo,ArrowUpToLine:$o,ArrowUpWideNarrow:Go,ArrowUpZA:we,ArrowsUpFromLine:Wo,Asterisk:Xo,AtSign:Ko,Atom:Jo,AudioLines:Yo,AudioWaveform:Qo,Award:ec,Axe:tc,Axis3d:Ce,Baby:ac,Backpack:oc,Badge:gc,BadgeAlert:cc,BadgeCent:nc,BadgeCheck:be,BadgeDollarSign:ic,BadgeEuro:rc,BadgeHelp:dc,BadgeIndianRupee:hc,BadgeInfo:lc,BadgeJapaneseYen:sc,BadgeMinus:yc,BadgePercent:pc,BadgePlus:kc,BadgePoundSterling:uc,BadgeRussianRuble:Mc,BadgeSwissFranc:mc,BadgeX:vc,BaggageClaim:Ic,Ban:xc,Banana:fc,Banknote:Lc,BarChart:Hc,BarChart2:wc,BarChart3:Cc,BarChart4:bc,BarChartBig:Sc,BarChartHorizontal:Ac,BarChartHorizontalBig:qc,Barcode:zc,Baseline:Vc,Bath:Pc,Battery:Tc,BatteryCharging:jc,BatteryFull:_c,BatteryLow:Dc,BatteryMedium:Bc,BatteryWarning:Fc,Beaker:Rc,Bean:Uc,BeanOff:Oc,Bed:$c,BedDouble:Ec,BedSingle:Zc,Beef:Gc,Beer:Wc,BeerOff:Nc,Bell:t0,BellDot:Xc,BellElectric:Kc,BellMinus:Jc,BellOff:Yc,BellPlus:Qc,BellRing:e0,BetweenHorizontalEnd:Se,BetweenHorizontalStart:qe,BetweenVerticalEnd:a0,BetweenVerticalStart:o0,Bike:c0,Binary:n0,Biohazard:i0,Bird:r0,Bitcoin:d0,Blend:h0,Blinds:l0,Blocks:s0,Bluetooth:u0,BluetoothConnected:y0,BluetoothOff:p0,BluetoothSearching:k0,Bold:M0,Bolt:m0,Bomb:v0,Bone:g0,Book:U0,BookA:I0,BookAudio:x0,BookCheck:f0,BookCopy:L0,BookDashed:Ae,BookDown:w0,BookHeadphones:C0,BookHeart:b0,BookImage:S0,BookKey:q0,BookLock:A0,BookMarked:H0,BookMinus:z0,BookOpen:j0,BookOpenCheck:V0,BookOpenText:P0,BookPlus:_0,BookText:D0,BookType:B0,BookUp:T0,BookUp2:F0,BookUser:R0,BookX:O0,Bookmark:N0,BookmarkCheck:E0,BookmarkMinus:Z0,BookmarkPlus:$0,BookmarkX:G0,BoomBox:W0,Bot:J0,BotMessageSquare:X0,BotOff:K0,Box:Q0,BoxSelect:Y0,Boxes:en,Braces:He,Brackets:tn,Brain:cn,BrainCircuit:an,BrainCog:on,BrickWall:nn,Briefcase:hn,BriefcaseBusiness:rn,BriefcaseMedical:dn,BringToFront:ln,Brush:sn,Bug:kn,BugOff:yn,BugPlay:pn,Building:Mn,Building2:un,Bus:vn,BusFront:mn,Cable:In,CableCar:gn,Cake:fn,CakeSlice:xn,Calculator:Ln,Calendar:Tn,CalendarCheck:Cn,CalendarCheck2:wn,CalendarClock:bn,CalendarDays:Sn,CalendarFold:qn,CalendarHeart:An,CalendarMinus:zn,CalendarMinus2:Hn,CalendarOff:Vn,CalendarPlus:jn,CalendarPlus2:Pn,CalendarRange:_n,CalendarSearch:Dn,CalendarX:Fn,CalendarX2:Bn,Camera:On,CameraOff:Rn,CandlestickChart:Un,Candy:$n,CandyCane:En,CandyOff:Zn,Cannabis:Gn,Captions:ze,CaptionsOff:Nn,Car:Kn,CarFront:Wn,CarTaxiFront:Xn,Caravan:Jn,Carrot:Yn,CaseLower:Qn,CaseSensitive:ei,CaseUpper:ti,CassetteTape:ai,Cast:oi,Castle:ci,Cat:ni,Cctv:ii,Check:di,CheckCheck:ri,ChefHat:hi,Cherry:li,ChevronDown:B2,ChevronFirst:si,ChevronLast:yi,ChevronLeft:pi,ChevronRight:F2,ChevronUp:ki,ChevronsDown:Mi,ChevronsDownUp:ui,ChevronsLeft:vi,ChevronsLeftRight:mi,ChevronsRight:Ii,ChevronsRightLeft:gi,ChevronsUp:fi,ChevronsUpDown:xi,Chrome:Li,Church:wi,Cigarette:bi,CigaretteOff:Ci,Circle:Di,CircleAlert:Ve,CircleArrowDown:Pe,CircleArrowLeft:je,CircleArrowOutDownLeft:_e,CircleArrowOutDownRight:De,CircleArrowOutUpLeft:Be,CircleArrowOutUpRight:Fe,CircleArrowRight:Te,CircleArrowUp:Re,CircleCheck:Oe,CircleCheckBig:ie,CircleChevronDown:Ue,CircleChevronLeft:Ee,CircleChevronRight:Ze,CircleChevronUp:$e,CircleDashed:Si,CircleDivide:Ge,CircleDollarSign:qi,CircleDot:Hi,CircleDotDashed:Ai,CircleEllipsis:zi,CircleEqual:Vi,CircleFadingPlus:Pi,CircleGauge:Ne,CircleHelp:We,CircleMinus:re,CircleOff:ji,CircleParking:Ke,CircleParkingOff:Xe,CirclePause:Je,CirclePercent:Ye,CirclePlay:Qe,CirclePlus:e1,CirclePower:t1,CircleSlash:_i,CircleSlash2:a1,CircleStop:o1,CircleUser:n1,CircleUserRound:c1,CircleX:de,CircuitBoard:Bi,Citrus:Fi,Clapperboard:Ti,Clipboard:Wi,ClipboardCheck:Ri,ClipboardCopy:Oi,ClipboardList:Ui,ClipboardMinus:Ei,ClipboardPaste:Zi,ClipboardPen:r1,ClipboardPenLine:i1,ClipboardPlus:$i,ClipboardType:Gi,ClipboardX:Ni,Clock:rr,Clock1:Xi,Clock10:Ki,Clock11:Ji,Clock12:Yi,Clock2:Qi,Clock3:er,Clock4:tr,Clock5:ar,Clock6:or,Clock7:cr,Clock8:nr,Clock9:ir,Cloud:xr,CloudCog:dr,CloudDownload:d1,CloudDrizzle:hr,CloudFog:lr,CloudHail:sr,CloudLightning:yr,CloudMoon:kr,CloudMoonRain:pr,CloudOff:ur,CloudRain:mr,CloudRainWind:Mr,CloudSnow:vr,CloudSun:Ir,CloudSunRain:gr,CloudUpload:h1,Cloudy:fr,Clover:Lr,Club:wr,Code:X2,CodeXml:l1,Codepen:Cr,Codesandbox:br,Coffee:Sr,Cog:qr,Coins:Ar,Columns2:s1,Columns3:y1,Columns4:Hr,Combine:zr,Command:Vr,Compass:Pr,Component:jr,Computer:_r,ConciergeBell:Dr,Cone:Br,Construction:Fr,Contact:Tr,ContactRound:p1,Container:Rr,Contrast:Or,Cookie:Ur,CookingPot:Er,Copy:Xr,CopyCheck:Zr,CopyMinus:$r,CopyPlus:Gr,CopySlash:Nr,CopyX:Wr,Copyleft:Kr,Copyright:Jr,CornerDownLeft:Yr,CornerDownRight:Qr,CornerLeftDown:ed,CornerLeftUp:td,CornerRightDown:ad,CornerRightUp:od,CornerUpLeft:cd,CornerUpRight:nd,Cpu:id,CreativeCommons:rd,CreditCard:dd,Croissant:hd,Crop:ld,Cross:sd,Crosshair:yd,Crown:pd,Cuboid:kd,CupSoda:ud,Currency:Md,Cylinder:md,Database:Id,DatabaseBackup:vd,DatabaseZap:gd,Delete:xd,Dessert:fd,Diameter:Ld,Diamond:bd,DiamondMinus:wd,DiamondPercent:k1,DiamondPlus:Cd,Dice1:Sd,Dice2:qd,Dice3:Ad,Dice4:Hd,Dice5:zd,Dice6:Vd,Dices:Pd,Diff:jd,Disc:Fd,Disc2:_d,Disc3:Dd,DiscAlbum:Bd,Divide:Td,Dna:Od,DnaOff:Rd,Dock:Ud,Dog:Ed,DollarSign:Zd,Donut:$d,DoorClosed:Gd,DoorOpen:Nd,Dot:Wd,Download:Xd,DraftingCompass:Kd,Drama:Jd,Dribbble:Yd,Drill:Qd,Droplet:eh,Droplets:th,Drum:ah,Drumstick:oh,Dumbbell:ch,Ear:ih,EarOff:nh,Earth:u1,EarthLock:rh,Eclipse:dh,Egg:sh,EggFried:hh,EggOff:lh,Ellipsis:m1,EllipsisVertical:M1,Equal:ph,EqualNot:yh,Eraser:kh,Euro:uh,Expand:Mh,ExternalLink:mh,Eye:gh,EyeOff:vh,Facebook:Ih,Factory:xh,Fan:fh,FastForward:Lh,Feather:wh,Fence:Ch,FerrisWheel:bh,Figma:Sh,File:Sl,FileArchive:qh,FileAudio:Hh,FileAudio2:Ah,FileAxis3d:v1,FileBadge:Vh,FileBadge2:zh,FileBarChart:jh,FileBarChart2:Ph,FileBox:_h,FileCheck:Bh,FileCheck2:Dh,FileClock:Fh,FileCode:Rh,FileCode2:Th,FileCog:g1,FileDiff:Oh,FileDigit:Uh,FileDown:Eh,FileHeart:Zh,FileImage:$h,FileInput:Gh,FileJson:Wh,FileJson2:Nh,FileKey:Kh,FileKey2:Xh,FileLineChart:Jh,FileLock:Qh,FileLock2:Yh,FileMinus:tl,FileMinus2:el,FileMusic:al,FileOutput:ol,FilePen:x1,FilePenLine:I1,FilePieChart:cl,FilePlus:il,FilePlus2:nl,FileQuestion:rl,FileScan:dl,FileSearch:ll,FileSearch2:hl,FileSliders:sl,FileSpreadsheet:yl,FileStack:pl,FileSymlink:kl,FileTerminal:ul,FileText:Ml,FileType:vl,FileType2:ml,FileUp:gl,FileVideo:xl,FileVideo2:Il,FileVolume:Ll,FileVolume2:fl,FileWarning:wl,FileX:bl,FileX2:Cl,Files:ql,Film:Al,Filter:zl,FilterX:Hl,Fingerprint:Vl,FireExtinguisher:Pl,Fish:Dl,FishOff:jl,FishSymbol:_l,Flag:Rl,FlagOff:Bl,FlagTriangleLeft:Fl,FlagTriangleRight:Tl,Flame:Ul,FlameKindling:Ol,Flashlight:Zl,FlashlightOff:El,FlaskConical:Gl,FlaskConicalOff:$l,FlaskRound:Nl,FlipHorizontal:Xl,FlipHorizontal2:Wl,FlipVertical:Jl,FlipVertical2:Kl,Flower:Ql,Flower2:Yl,Focus:es,FoldHorizontal:ts,FoldVertical:as,Folder:K2,FolderArchive:os,FolderCheck:cs,FolderClock:ns,FolderClosed:is,FolderCog:f1,FolderDot:rs,FolderDown:ds,FolderGit:ls,FolderGit2:hs,FolderHeart:ss,FolderInput:ys,FolderKanban:ps,FolderKey:ks,FolderLock:us,FolderMinus:Ms,FolderOpen:vs,FolderOpenDot:ms,FolderOutput:gs,FolderPen:L1,FolderPlus:Is,FolderRoot:xs,FolderSearch:Ls,FolderSearch2:fs,FolderSymlink:ws,FolderSync:Cs,FolderTree:bs,FolderUp:Ss,FolderX:qs,Folders:As,Footprints:Hs,Forklift:zs,Forward:Vs,Frame:Ps,Framer:js,Frown:_s,Fuel:Ds,Fullscreen:Bs,GalleryHorizontal:Ts,GalleryHorizontalEnd:Fs,GalleryThumbnails:Rs,GalleryVertical:Us,GalleryVerticalEnd:Os,Gamepad:Zs,Gamepad2:Es,GanttChart:$s,Gauge:Gs,Gavel:Ns,Gem:Ws,Ghost:Xs,Gift:Ks,GitBranch:Ys,GitBranchPlus:Js,GitCommitHorizontal:w1,GitCommitVertical:Qs,GitCompare:ty,GitCompareArrows:ey,GitFork:ay,GitGraph:oy,GitMerge:cy,GitPullRequest:ly,GitPullRequestArrow:ny,GitPullRequestClosed:iy,GitPullRequestCreate:dy,GitPullRequestCreateArrow:ry,GitPullRequestDraft:hy,Github:sy,Gitlab:yy,GlassWater:py,Glasses:ky,Globe:My,GlobeLock:uy,Goal:my,Grab:vy,GraduationCap:gy,Grape:Iy,Grid2x2:C1,Grid2x2Check:xy,Grid2x2X:fy,Grid3x3:ne,Grip:Cy,GripHorizontal:Ly,GripVertical:wy,Group:by,Guitar:Sy,Ham:qy,Hammer:Ay,Hand:jy,HandCoins:Hy,HandHeart:zy,HandHelping:b1,HandMetal:Vy,HandPlatter:Py,Handshake:_y,HardDrive:Fy,HardDriveDownload:Dy,HardDriveUpload:By,HardHat:Ty,Hash:Ry,Haze:Oy,HdmiPort:Uy,Heading:Xy,Heading1:Ey,Heading2:Zy,Heading3:$y,Heading4:Gy,Heading5:Ny,Heading6:Wy,Headphones:Ky,Headset:Jy,Heart:ap,HeartCrack:Yy,HeartHandshake:Qy,HeartOff:ep,HeartPulse:tp,Heater:op,Hexagon:cp,Highlighter:np,History:ip,Home:rp,Hop:hp,HopOff:dp,Hospital:lp,Hotel:sp,Hourglass:yp,IceCreamBowl:S1,IceCreamCone:q1,Image:gp,ImageDown:pp,ImageMinus:kp,ImageOff:up,ImagePlay:Mp,ImagePlus:mp,ImageUp:vp,Images:Ip,Import:xp,Inbox:fp,IndentDecrease:A1,IndentIncrease:H1,IndianRupee:Lp,Infinity:wp,Info:Cp,InspectionPanel:bp,Instagram:Sp,Italic:qp,IterationCcw:Ap,IterationCw:Hp,JapaneseYen:zp,Joystick:Vp,Kanban:Pp,Key:Dp,KeyRound:jp,KeySquare:_p,Keyboard:Tp,KeyboardMusic:Bp,KeyboardOff:Fp,Lamp:$p,LampCeiling:Rp,LampDesk:Op,LampFloor:Up,LampWallDown:Ep,LampWallUp:Zp,LandPlot:Gp,Landmark:Np,Languages:Wp,Laptop:Xp,LaptopMinimal:z1,Lasso:Jp,LassoSelect:Kp,Laugh:Yp,Layers:tk,Layers2:Qp,Layers3:ek,LayoutDashboard:ak,LayoutGrid:J2,LayoutList:ok,LayoutPanelLeft:ck,LayoutPanelTop:nk,LayoutTemplate:ik,Leaf:rk,LeafyGreen:dk,Lectern:hk,Library:sk,LibraryBig:lk,LifeBuoy:yk,Ligature:pk,Lightbulb:uk,LightbulbOff:kk,LineChart:Mk,Link:gk,Link2:vk,Link2Off:mk,Linkedin:Ik,List:_k,ListChecks:xk,ListCollapse:fk,ListEnd:Lk,ListFilter:wk,ListMinus:Ck,ListMusic:bk,ListOrdered:Sk,ListPlus:qk,ListRestart:Ak,ListStart:Hk,ListTodo:zk,ListTree:Vk,ListVideo:Pk,ListX:jk,Loader:Bk,LoaderCircle:V1,LoaderPinwheel:Dk,Locate:Rk,LocateFixed:Fk,LocateOff:Tk,Lock:Uk,LockKeyhole:Ok,LockKeyholeOpen:P1,LockOpen:j1,LogIn:Y2,LogOut:Q2,Lollipop:Ek,Luggage:Zk,Magnet:$k,Mail:e4,MailCheck:Gk,MailMinus:Nk,MailOpen:Wk,MailPlus:Xk,MailQuestion:Kk,MailSearch:Jk,MailWarning:Yk,MailX:Qk,Mailbox:t4,Mails:a4,Map:i4,MapPin:c4,MapPinOff:o4,MapPinned:n4,Martini:r4,Maximize:ea,Maximize2:d4,Medal:h4,Megaphone:s4,MegaphoneOff:l4,Meh:y4,MemoryStick:p4,Menu:k4,Merge:u4,MessageCircle:b4,MessageCircleCode:M4,MessageCircleDashed:m4,MessageCircleHeart:v4,MessageCircleMore:g4,MessageCircleOff:I4,MessageCirclePlus:x4,MessageCircleQuestion:f4,MessageCircleReply:L4,MessageCircleWarning:w4,MessageCircleX:C4,MessageSquare:O4,MessageSquareCode:S4,MessageSquareDashed:q4,MessageSquareDiff:A4,MessageSquareDot:H4,MessageSquareHeart:z4,MessageSquareMore:V4,MessageSquareOff:P4,MessageSquarePlus:j4,MessageSquareQuote:_4,MessageSquareReply:D4,MessageSquareShare:B4,MessageSquareText:F4,MessageSquareWarning:T4,MessageSquareX:R4,MessagesSquare:U4,Mic:Z4,MicOff:E4,MicVocal:_1,Microscope:$4,Microwave:G4,Milestone:N4,Milk:X4,MilkOff:W4,Minimize:J4,Minimize2:K4,Minus:Y4,Monitor:lu,MonitorCheck:Q4,MonitorDot:eu,MonitorDown:tu,MonitorOff:au,MonitorPause:ou,MonitorPlay:cu,MonitorSmartphone:nu,MonitorSpeaker:iu,MonitorStop:ru,MonitorUp:du,MonitorX:hu,Moon:yu,MoonStar:su,Mountain:ku,MountainSnow:pu,Mouse:Iu,MouseOff:uu,MousePointer:gu,MousePointer2:Mu,MousePointerBan:mu,MousePointerClick:vu,Move:Pu,Move3d:D1,MoveDiagonal:fu,MoveDiagonal2:xu,MoveDown:Cu,MoveDownLeft:Lu,MoveDownRight:wu,MoveHorizontal:bu,MoveLeft:Su,MoveRight:qu,MoveUp:zu,MoveUpLeft:Au,MoveUpRight:Hu,MoveVertical:Vu,Music:Bu,Music2:ju,Music3:_u,Music4:Du,Navigation:Ou,Navigation2:Tu,Navigation2Off:Fu,NavigationOff:Ru,Network:Uu,Newspaper:Eu,Nfc:Zu,Notebook:Wu,NotebookPen:$u,NotebookTabs:Gu,NotebookText:Nu,NotepadText:Ku,NotepadTextDashed:Xu,Nut:Yu,NutOff:Ju,Octagon:Qu,OctagonAlert:B1,OctagonPause:F1,OctagonX:T1,Option:e5,Orbit:t5,Origami:a5,Package:l5,Package2:o5,PackageCheck:c5,PackageMinus:n5,PackageOpen:i5,PackagePlus:r5,PackageSearch:d5,PackageX:h5,PaintBucket:s5,PaintRoller:y5,Paintbrush:p5,PaintbrushVertical:R1,Palette:k5,PanelBottom:m5,PanelBottomClose:u5,PanelBottomDashed:O1,PanelBottomOpen:M5,PanelLeft:$1,PanelLeftClose:U1,PanelLeftDashed:E1,PanelLeftOpen:Z1,PanelRight:I5,PanelRightClose:v5,PanelRightDashed:G1,PanelRightOpen:g5,PanelTop:L5,PanelTopClose:x5,PanelTopDashed:N1,PanelTopOpen:f5,PanelsLeftBottom:w5,PanelsRightBottom:C5,PanelsTopLeft:W1,Paperclip:b5,Parentheses:S5,ParkingMeter:q5,PartyPopper:A5,Pause:T2,PawPrint:H5,PcCase:z5,Pen:K1,PenLine:X1,PenTool:V5,Pencil:_5,PencilLine:P5,PencilRuler:j5,Pentagon:D5,Percent:B5,PersonStanding:F5,Phone:$5,PhoneCall:T5,PhoneForwarded:R5,PhoneIncoming:O5,PhoneMissed:U5,PhoneOff:E5,PhoneOutgoing:Z5,Pi:G5,Piano:N5,Pickaxe:W5,PictureInPicture:K5,PictureInPicture2:X5,PieChart:J5,PiggyBank:Y5,Pilcrow:t3,PilcrowLeft:Q5,PilcrowRight:e3,Pill:o3,PillBottle:a3,Pin:n3,PinOff:c3,Pipette:i3,Pizza:r3,Plane:l3,PlaneLanding:d3,PlaneTakeoff:h3,Play:R2,Plug:k3,Plug2:s3,PlugZap:p3,PlugZap2:y3,Plus:b2,Pocket:M3,PocketKnife:u3,Podcast:m3,Pointer:g3,PointerOff:v3,Popcorn:I3,Popsicle:x3,PoundSterling:f3,Power:w3,PowerOff:L3,Presentation:C3,Printer:b3,Projector:S3,Proportions:q3,Puzzle:A3,Pyramid:H3,QrCode:z3,Quote:V3,Rabbit:P3,Radar:j3,Radiation:_3,Radical:D3,Radio:T3,RadioReceiver:B3,RadioTower:F3,Radius:R3,RailSymbol:O3,Rainbow:U3,Rat:E3,Ratio:Z3,Receipt:Q3,ReceiptCent:$3,ReceiptEuro:G3,ReceiptIndianRupee:N3,ReceiptJapaneseYen:W3,ReceiptPoundSterling:X3,ReceiptRussianRuble:K3,ReceiptSwissFranc:J3,ReceiptText:Y3,RectangleEllipsis:J1,RectangleHorizontal:e6,RectangleVertical:t6,Recycle:a6,Redo:n6,Redo2:o6,RedoDot:c6,RefreshCcw:r6,RefreshCcwDot:i6,RefreshCw:ta,RefreshCwOff:d6,Refrigerator:h6,Regex:l6,RemoveFormatting:s6,Repeat:k6,Repeat1:y6,Repeat2:p6,Replace:M6,ReplaceAll:u6,Reply:v6,ReplyAll:m6,Rewind:g6,Ribbon:I6,Rocket:x6,RockingChair:f6,RollerCoaster:L6,Rotate3d:Y1,RotateCcw:C6,RotateCcwSquare:w6,RotateCw:S6,RotateCwSquare:b6,Route:A6,RouteOff:q6,Router:H6,Rows2:Q1,Rows3:et,Rows4:z6,Rss:V6,Ruler:P6,RussianRuble:j6,Sailboat:_6,Salad:D6,Sandwich:B6,Satellite:T6,SatelliteDish:F6,Save:O6,SaveAll:R6,Scale:U6,Scale3d:tt,Scaling:E6,Scan:K6,ScanBarcode:Z6,ScanEye:$6,ScanFace:G6,ScanLine:N6,ScanSearch:W6,ScanText:X6,ScatterChart:J6,School:Y6,Scissors:e8,ScissorsLineDashed:Q6,ScreenShare:a8,ScreenShareOff:t8,Scroll:c8,ScrollText:o8,Search:h8,SearchCheck:n8,SearchCode:i8,SearchSlash:r8,SearchX:d8,Section:l8,Send:y8,SendHorizontal:at,SendToBack:s8,SeparatorHorizontal:p8,SeparatorVertical:k8,Server:v8,ServerCog:u8,ServerCrash:M8,ServerOff:m8,Settings:aa,Settings2:g8,Shapes:I8,Share:f8,Share2:x8,Sheet:L8,Shell:w8,Shield:j8,ShieldAlert:C8,ShieldBan:b8,ShieldCheck:S8,ShieldEllipsis:q8,ShieldHalf:A8,ShieldMinus:H8,ShieldOff:z8,ShieldPlus:V8,ShieldQuestion:P8,ShieldX:ot,Ship:D8,ShipWheel:_8,Shirt:B8,ShoppingBag:F8,ShoppingBasket:T8,ShoppingCart:R8,Shovel:O8,ShowerHead:U8,Shrink:E8,Shrub:Z8,Shuffle:$8,Sigma:G8,Signal:J8,SignalHigh:N8,SignalLow:W8,SignalMedium:X8,SignalZero:K8,Signpost:Q8,SignpostBig:Y8,Siren:e7,SkipBack:t7,SkipForward:a7,Skull:o7,Slack:c7,Slash:n7,Slice:i7,SlidersHorizontal:r7,SlidersVertical:ct,Smartphone:l7,SmartphoneCharging:d7,SmartphoneNfc:h7,Smile:y7,SmilePlus:s7,Snail:p7,Snowflake:k7,Sofa:u7,Soup:M7,Space:m7,Spade:v7,Sparkle:g7,Sparkles:nt,Speaker:I7,Speech:x7,SpellCheck:L7,SpellCheck2:f7,Spline:w7,Split:C7,SprayCan:b7,Sprout:S7,Square:V7,SquareActivity:it,SquareArrowDown:ht,SquareArrowDownLeft:rt,SquareArrowDownRight:dt,SquareArrowLeft:lt,SquareArrowOutDownLeft:st,SquareArrowOutDownRight:yt,SquareArrowOutUpLeft:pt,SquareArrowOutUpRight:kt,SquareArrowRight:ut,SquareArrowUp:vt,SquareArrowUpLeft:Mt,SquareArrowUpRight:mt,SquareAsterisk:gt,SquareBottomDashedScissors:It,SquareCheck:ft,SquareCheckBig:xt,SquareChevronDown:Lt,SquareChevronLeft:wt,SquareChevronRight:Ct,SquareChevronUp:bt,SquareCode:St,SquareDashedBottom:A7,SquareDashedBottomCode:q7,SquareDashedKanban:qt,SquareDashedMousePointer:At,SquareDivide:Ht,SquareDot:zt,SquareEqual:Vt,SquareFunction:Pt,SquareGanttChart:jt,SquareKanban:_t,SquareLibrary:Dt,SquareM:Bt,SquareMenu:Ft,SquareMinus:Tt,SquareMousePointer:Rt,SquareParking:Ut,SquareParkingOff:Ot,SquarePen:K,SquarePercent:Et,SquarePi:Zt,SquarePilcrow:$t,SquarePlay:Gt,SquarePlus:Nt,SquarePower:Wt,SquareRadical:H7,SquareScissors:Xt,SquareSigma:Kt,SquareSlash:Jt,SquareSplitHorizontal:Yt,SquareSplitVertical:Qt,SquareStack:z7,SquareTerminal:e2,SquareUser:a2,SquareUserRound:t2,SquareX:o2,Squircle:P7,Squirrel:j7,Stamp:_7,Star:F7,StarHalf:D7,StarOff:B7,StepBack:T7,StepForward:R7,Stethoscope:O7,Sticker:U7,StickyNote:E7,Store:Z7,StretchHorizontal:$7,StretchVertical:G7,Strikethrough:N7,Subscript:W7,Sun:Q7,SunDim:X7,SunMedium:K7,SunMoon:J7,SunSnow:Y7,Sunrise:e9,Sunset:t9,Superscript:a9,SwatchBook:o9,SwissFranc:c9,SwitchCamera:n9,Sword:i9,Swords:r9,Syringe:d9,Table:u9,Table2:h9,TableCellsMerge:l9,TableCellsSplit:s9,TableColumnsSplit:y9,TableProperties:p9,TableRowsSplit:k9,Tablet:m9,TabletSmartphone:M9,Tablets:v9,Tag:g9,Tags:I9,Tally1:x9,Tally2:f9,Tally3:L9,Tally4:w9,Tally5:C9,Tangent:b9,Target:S9,Telescope:q9,Tent:H9,TentTree:A9,Terminal:z9,TestTube:V9,TestTubeDiagonal:c2,TestTubes:P9,Text:F9,TextCursor:_9,TextCursorInput:j9,TextQuote:D9,TextSearch:B9,TextSelect:n2,Theater:T9,Thermometer:U9,ThermometerSnowflake:R9,ThermometerSun:O9,ThumbsDown:E9,ThumbsUp:Z9,Ticket:J9,TicketCheck:$9,TicketMinus:G9,TicketPercent:N9,TicketPlus:W9,TicketSlash:X9,TicketX:K9,Timer:eM,TimerOff:Y9,TimerReset:Q9,ToggleLeft:tM,ToggleRight:aM,Tornado:oM,Torus:cM,Touchpad:iM,TouchpadOff:nM,TowerControl:rM,ToyBrick:dM,Tractor:hM,TrafficCone:lM,TrainFront:yM,TrainFrontTunnel:sM,TrainTrack:pM,TramFront:i2,Trash:uM,Trash2:kM,TreeDeciduous:MM,TreePalm:r2,TreePine:mM,Trees:vM,Trello:gM,TrendingDown:IM,TrendingUp:xM,Triangle:LM,TriangleAlert:d2,TriangleRight:fM,Trophy:wM,Truck:CM,Turtle:bM,Tv:qM,Tv2:SM,Twitch:AM,Twitter:HM,Type:zM,Umbrella:PM,UmbrellaOff:VM,Underline:jM,Undo:BM,Undo2:_M,UndoDot:DM,UnfoldHorizontal:FM,UnfoldVertical:TM,Ungroup:RM,University:h2,Unlink:UM,Unlink2:OM,Unplug:EM,Upload:ZM,Usb:$M,User:oa,UserCheck:GM,UserCog:NM,UserMinus:WM,UserPlus:XM,UserRound:u2,UserRoundCheck:l2,UserRoundCog:s2,UserRoundMinus:y2,UserRoundPlus:p2,UserRoundSearch:KM,UserRoundX:k2,UserSearch:JM,UserX:YM,Users:QM,UsersRound:M2,Utensils:tm,UtensilsCrossed:em,UtilityPole:am,Variable:om,Vault:cm,Vegan:nm,VenetianMask:im,Vibrate:dm,VibrateOff:rm,Video:lm,VideoOff:hm,Videotape:sm,View:ym,Voicemail:pm,Volume:um,Volume1:km,Volume2:O2,VolumeX:U2,Vote:Mm,Wallet:vm,WalletCards:mm,WalletMinimal:m2,Wallpaper:gm,Wand:Im,WandSparkles:v2,Warehouse:xm,WashingMachine:fm,Watch:Lm,Waves:wm,Waypoints:Cm,Webcam:bm,Webhook:qm,WebhookOff:Sm,Weight:Am,Wheat:zm,WheatOff:Hm,WholeWord:Vm,Wifi:jm,WifiOff:Pm,Wind:_m,Wine:Bm,WineOff:Dm,Workflow:Fm,Worm:Tm,WrapText:Rm,Wrench:Om,X:E2,Youtube:Um,Zap:Zm,ZapOff:Em,ZoomIn:$m,ZoomOut:Gm},Symbol.toStringTag,{value:"Module"}));/**
 * @license lucide-vue-next v0.383.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g2=Object.freeze(Object.defineProperty({__proto__:null,AArrowDown:sa,AArrowDownIcon:sa,AArrowUp:ya,AArrowUpIcon:ya,ALargeSmall:pa,ALargeSmallIcon:pa,Accessibility:ka,AccessibilityIcon:ka,Activity:ua,ActivityIcon:ua,ActivitySquare:it,ActivitySquareIcon:it,AirVent:Ma,AirVentIcon:Ma,Airplay:ma,AirplayIcon:ma,AlarmCheck:Me,AlarmCheckIcon:Me,AlarmClock:ga,AlarmClockCheck:Me,AlarmClockCheckIcon:Me,AlarmClockIcon:ga,AlarmClockMinus:me,AlarmClockMinusIcon:me,AlarmClockOff:va,AlarmClockOffIcon:va,AlarmClockPlus:ve,AlarmClockPlusIcon:ve,AlarmMinus:me,AlarmMinusIcon:me,AlarmPlus:ve,AlarmPlusIcon:ve,AlarmSmoke:Ia,AlarmSmokeIcon:Ia,Album:xa,AlbumIcon:xa,AlertCircle:Ve,AlertCircleIcon:Ve,AlertOctagon:B1,AlertOctagonIcon:B1,AlertTriangle:d2,AlertTriangleIcon:d2,AlignCenter:wa,AlignCenterHorizontal:fa,AlignCenterHorizontalIcon:fa,AlignCenterIcon:wa,AlignCenterVertical:La,AlignCenterVerticalIcon:La,AlignEndHorizontal:Ca,AlignEndHorizontalIcon:Ca,AlignEndVertical:ba,AlignEndVerticalIcon:ba,AlignHorizontalDistributeCenter:Sa,AlignHorizontalDistributeCenterIcon:Sa,AlignHorizontalDistributeEnd:qa,AlignHorizontalDistributeEndIcon:qa,AlignHorizontalDistributeStart:Aa,AlignHorizontalDistributeStartIcon:Aa,AlignHorizontalJustifyCenter:Ha,AlignHorizontalJustifyCenterIcon:Ha,AlignHorizontalJustifyEnd:za,AlignHorizontalJustifyEndIcon:za,AlignHorizontalJustifyStart:Va,AlignHorizontalJustifyStartIcon:Va,AlignHorizontalSpaceAround:Pa,AlignHorizontalSpaceAroundIcon:Pa,AlignHorizontalSpaceBetween:ja,AlignHorizontalSpaceBetweenIcon:ja,AlignJustify:_a,AlignJustifyIcon:_a,AlignLeft:Da,AlignLeftIcon:Da,AlignRight:Ba,AlignRightIcon:Ba,AlignStartHorizontal:Fa,AlignStartHorizontalIcon:Fa,AlignStartVertical:Ta,AlignStartVerticalIcon:Ta,AlignVerticalDistributeCenter:Ra,AlignVerticalDistributeCenterIcon:Ra,AlignVerticalDistributeEnd:Oa,AlignVerticalDistributeEndIcon:Oa,AlignVerticalDistributeStart:Ua,AlignVerticalDistributeStartIcon:Ua,AlignVerticalJustifyCenter:Ea,AlignVerticalJustifyCenterIcon:Ea,AlignVerticalJustifyEnd:Za,AlignVerticalJustifyEndIcon:Za,AlignVerticalJustifyStart:$a,AlignVerticalJustifyStartIcon:$a,AlignVerticalSpaceAround:Ga,AlignVerticalSpaceAroundIcon:Ga,AlignVerticalSpaceBetween:Na,AlignVerticalSpaceBetweenIcon:Na,Ambulance:Wa,AmbulanceIcon:Wa,Ampersand:Xa,AmpersandIcon:Xa,Ampersands:Ka,AmpersandsIcon:Ka,Anchor:Ja,AnchorIcon:Ja,Angry:Ya,AngryIcon:Ya,Annoyed:Qa,AnnoyedIcon:Qa,Antenna:eo,AntennaIcon:eo,Anvil:to,AnvilIcon:to,Aperture:ao,ApertureIcon:ao,AppWindow:co,AppWindowIcon:co,AppWindowMac:oo,AppWindowMacIcon:oo,Apple:no,AppleIcon:no,Archive:ho,ArchiveIcon:ho,ArchiveRestore:io,ArchiveRestoreIcon:io,ArchiveX:ro,ArchiveXIcon:ro,AreaChart:lo,AreaChartIcon:lo,Armchair:so,ArmchairIcon:so,ArrowBigDown:po,ArrowBigDownDash:yo,ArrowBigDownDashIcon:yo,ArrowBigDownIcon:po,ArrowBigLeft:uo,ArrowBigLeftDash:ko,ArrowBigLeftDashIcon:ko,ArrowBigLeftIcon:uo,ArrowBigRight:mo,ArrowBigRightDash:Mo,ArrowBigRightDashIcon:Mo,ArrowBigRightIcon:mo,ArrowBigUp:go,ArrowBigUpDash:vo,ArrowBigUpDashIcon:vo,ArrowBigUpIcon:go,ArrowDown:Ao,ArrowDown01:Io,ArrowDown01Icon:Io,ArrowDown10:xo,ArrowDown10Icon:xo,ArrowDownAZ:ge,ArrowDownAZIcon:ge,ArrowDownAz:ge,ArrowDownAzIcon:ge,ArrowDownCircle:Pe,ArrowDownCircleIcon:Pe,ArrowDownFromLine:fo,ArrowDownFromLineIcon:fo,ArrowDownIcon:Ao,ArrowDownLeft:Lo,ArrowDownLeftFromCircle:_e,ArrowDownLeftFromCircleIcon:_e,ArrowDownLeftFromSquare:st,ArrowDownLeftFromSquareIcon:st,ArrowDownLeftIcon:Lo,ArrowDownLeftSquare:rt,ArrowDownLeftSquareIcon:rt,ArrowDownNarrowWide:wo,ArrowDownNarrowWideIcon:wo,ArrowDownRight:Co,ArrowDownRightFromCircle:De,ArrowDownRightFromCircleIcon:De,ArrowDownRightFromSquare:yt,ArrowDownRightFromSquareIcon:yt,ArrowDownRightIcon:Co,ArrowDownRightSquare:dt,ArrowDownRightSquareIcon:dt,ArrowDownSquare:ht,ArrowDownSquareIcon:ht,ArrowDownToDot:bo,ArrowDownToDotIcon:bo,ArrowDownToLine:So,ArrowDownToLineIcon:So,ArrowDownUp:qo,ArrowDownUpIcon:qo,ArrowDownWideNarrow:Ie,ArrowDownWideNarrowIcon:Ie,ArrowDownZA:xe,ArrowDownZAIcon:xe,ArrowDownZa:xe,ArrowDownZaIcon:xe,ArrowLeft:Po,ArrowLeftCircle:je,ArrowLeftCircleIcon:je,ArrowLeftFromLine:Ho,ArrowLeftFromLineIcon:Ho,ArrowLeftIcon:Po,ArrowLeftRight:zo,ArrowLeftRightIcon:zo,ArrowLeftSquare:lt,ArrowLeftSquareIcon:lt,ArrowLeftToLine:Vo,ArrowLeftToLineIcon:Vo,ArrowRight:Bo,ArrowRightCircle:Te,ArrowRightCircleIcon:Te,ArrowRightFromLine:jo,ArrowRightFromLineIcon:jo,ArrowRightIcon:Bo,ArrowRightLeft:_o,ArrowRightLeftIcon:_o,ArrowRightSquare:ut,ArrowRightSquareIcon:ut,ArrowRightToLine:Do,ArrowRightToLineIcon:Do,ArrowUp:No,ArrowUp01:Fo,ArrowUp01Icon:Fo,ArrowUp10:To,ArrowUp10Icon:To,ArrowUpAZ:fe,ArrowUpAZIcon:fe,ArrowUpAz:fe,ArrowUpAzIcon:fe,ArrowUpCircle:Re,ArrowUpCircleIcon:Re,ArrowUpDown:Ro,ArrowUpDownIcon:Ro,ArrowUpFromDot:Oo,ArrowUpFromDotIcon:Oo,ArrowUpFromLine:Uo,ArrowUpFromLineIcon:Uo,ArrowUpIcon:No,ArrowUpLeft:Eo,ArrowUpLeftFromCircle:Be,ArrowUpLeftFromCircleIcon:Be,ArrowUpLeftFromSquare:pt,ArrowUpLeftFromSquareIcon:pt,ArrowUpLeftIcon:Eo,ArrowUpLeftSquare:Mt,ArrowUpLeftSquareIcon:Mt,ArrowUpNarrowWide:Le,ArrowUpNarrowWideIcon:Le,ArrowUpRight:Zo,ArrowUpRightFromCircle:Fe,ArrowUpRightFromCircleIcon:Fe,ArrowUpRightFromSquare:kt,ArrowUpRightFromSquareIcon:kt,ArrowUpRightIcon:Zo,ArrowUpRightSquare:mt,ArrowUpRightSquareIcon:mt,ArrowUpSquare:vt,ArrowUpSquareIcon:vt,ArrowUpToLine:$o,ArrowUpToLineIcon:$o,ArrowUpWideNarrow:Go,ArrowUpWideNarrowIcon:Go,ArrowUpZA:we,ArrowUpZAIcon:we,ArrowUpZa:we,ArrowUpZaIcon:we,ArrowsUpFromLine:Wo,ArrowsUpFromLineIcon:Wo,Asterisk:Xo,AsteriskIcon:Xo,AsteriskSquare:gt,AsteriskSquareIcon:gt,AtSign:Ko,AtSignIcon:Ko,Atom:Jo,AtomIcon:Jo,AudioLines:Yo,AudioLinesIcon:Yo,AudioWaveform:Qo,AudioWaveformIcon:Qo,Award:ec,AwardIcon:ec,Axe:tc,AxeIcon:tc,Axis3D:Ce,Axis3DIcon:Ce,Axis3d:Ce,Axis3dIcon:Ce,Baby:ac,BabyIcon:ac,Backpack:oc,BackpackIcon:oc,Badge:gc,BadgeAlert:cc,BadgeAlertIcon:cc,BadgeCent:nc,BadgeCentIcon:nc,BadgeCheck:be,BadgeCheckIcon:be,BadgeDollarSign:ic,BadgeDollarSignIcon:ic,BadgeEuro:rc,BadgeEuroIcon:rc,BadgeHelp:dc,BadgeHelpIcon:dc,BadgeIcon:gc,BadgeIndianRupee:hc,BadgeIndianRupeeIcon:hc,BadgeInfo:lc,BadgeInfoIcon:lc,BadgeJapaneseYen:sc,BadgeJapaneseYenIcon:sc,BadgeMinus:yc,BadgeMinusIcon:yc,BadgePercent:pc,BadgePercentIcon:pc,BadgePlus:kc,BadgePlusIcon:kc,BadgePoundSterling:uc,BadgePoundSterlingIcon:uc,BadgeRussianRuble:Mc,BadgeRussianRubleIcon:Mc,BadgeSwissFranc:mc,BadgeSwissFrancIcon:mc,BadgeX:vc,BadgeXIcon:vc,BaggageClaim:Ic,BaggageClaimIcon:Ic,Ban:xc,BanIcon:xc,Banana:fc,BananaIcon:fc,Banknote:Lc,BanknoteIcon:Lc,BarChart:Hc,BarChart2:wc,BarChart2Icon:wc,BarChart3:Cc,BarChart3Icon:Cc,BarChart4:bc,BarChart4Icon:bc,BarChartBig:Sc,BarChartBigIcon:Sc,BarChartHorizontal:Ac,BarChartHorizontalBig:qc,BarChartHorizontalBigIcon:qc,BarChartHorizontalIcon:Ac,BarChartIcon:Hc,Barcode:zc,BarcodeIcon:zc,Baseline:Vc,BaselineIcon:Vc,Bath:Pc,BathIcon:Pc,Battery:Tc,BatteryCharging:jc,BatteryChargingIcon:jc,BatteryFull:_c,BatteryFullIcon:_c,BatteryIcon:Tc,BatteryLow:Dc,BatteryLowIcon:Dc,BatteryMedium:Bc,BatteryMediumIcon:Bc,BatteryWarning:Fc,BatteryWarningIcon:Fc,Beaker:Rc,BeakerIcon:Rc,Bean:Uc,BeanIcon:Uc,BeanOff:Oc,BeanOffIcon:Oc,Bed:$c,BedDouble:Ec,BedDoubleIcon:Ec,BedIcon:$c,BedSingle:Zc,BedSingleIcon:Zc,Beef:Gc,BeefIcon:Gc,Beer:Wc,BeerIcon:Wc,BeerOff:Nc,BeerOffIcon:Nc,Bell:t0,BellDot:Xc,BellDotIcon:Xc,BellElectric:Kc,BellElectricIcon:Kc,BellIcon:t0,BellMinus:Jc,BellMinusIcon:Jc,BellOff:Yc,BellOffIcon:Yc,BellPlus:Qc,BellPlusIcon:Qc,BellRing:e0,BellRingIcon:e0,BetweenHorizonalEnd:Se,BetweenHorizonalEndIcon:Se,BetweenHorizonalStart:qe,BetweenHorizonalStartIcon:qe,BetweenHorizontalEnd:Se,BetweenHorizontalEndIcon:Se,BetweenHorizontalStart:qe,BetweenHorizontalStartIcon:qe,BetweenVerticalEnd:a0,BetweenVerticalEndIcon:a0,BetweenVerticalStart:o0,BetweenVerticalStartIcon:o0,Bike:c0,BikeIcon:c0,Binary:n0,BinaryIcon:n0,Biohazard:i0,BiohazardIcon:i0,Bird:r0,BirdIcon:r0,Bitcoin:d0,BitcoinIcon:d0,Blend:h0,BlendIcon:h0,Blinds:l0,BlindsIcon:l0,Blocks:s0,BlocksIcon:s0,Bluetooth:u0,BluetoothConnected:y0,BluetoothConnectedIcon:y0,BluetoothIcon:u0,BluetoothOff:p0,BluetoothOffIcon:p0,BluetoothSearching:k0,BluetoothSearchingIcon:k0,Bold:M0,BoldIcon:M0,Bolt:m0,BoltIcon:m0,Bomb:v0,BombIcon:v0,Bone:g0,BoneIcon:g0,Book:U0,BookA:I0,BookAIcon:I0,BookAudio:x0,BookAudioIcon:x0,BookCheck:f0,BookCheckIcon:f0,BookCopy:L0,BookCopyIcon:L0,BookDashed:Ae,BookDashedIcon:Ae,BookDown:w0,BookDownIcon:w0,BookHeadphones:C0,BookHeadphonesIcon:C0,BookHeart:b0,BookHeartIcon:b0,BookIcon:U0,BookImage:S0,BookImageIcon:S0,BookKey:q0,BookKeyIcon:q0,BookLock:A0,BookLockIcon:A0,BookMarked:H0,BookMarkedIcon:H0,BookMinus:z0,BookMinusIcon:z0,BookOpen:j0,BookOpenCheck:V0,BookOpenCheckIcon:V0,BookOpenIcon:j0,BookOpenText:P0,BookOpenTextIcon:P0,BookPlus:_0,BookPlusIcon:_0,BookTemplate:Ae,BookTemplateIcon:Ae,BookText:D0,BookTextIcon:D0,BookType:B0,BookTypeIcon:B0,BookUp:T0,BookUp2:F0,BookUp2Icon:F0,BookUpIcon:T0,BookUser:R0,BookUserIcon:R0,BookX:O0,BookXIcon:O0,Bookmark:N0,BookmarkCheck:E0,BookmarkCheckIcon:E0,BookmarkIcon:N0,BookmarkMinus:Z0,BookmarkMinusIcon:Z0,BookmarkPlus:$0,BookmarkPlusIcon:$0,BookmarkX:G0,BookmarkXIcon:G0,BoomBox:W0,BoomBoxIcon:W0,Bot:J0,BotIcon:J0,BotMessageSquare:X0,BotMessageSquareIcon:X0,BotOff:K0,BotOffIcon:K0,Box:Q0,BoxIcon:Q0,BoxSelect:Y0,BoxSelectIcon:Y0,Boxes:en,BoxesIcon:en,Braces:He,BracesIcon:He,Brackets:tn,BracketsIcon:tn,Brain:cn,BrainCircuit:an,BrainCircuitIcon:an,BrainCog:on,BrainCogIcon:on,BrainIcon:cn,BrickWall:nn,BrickWallIcon:nn,Briefcase:hn,BriefcaseBusiness:rn,BriefcaseBusinessIcon:rn,BriefcaseIcon:hn,BriefcaseMedical:dn,BriefcaseMedicalIcon:dn,BringToFront:ln,BringToFrontIcon:ln,Brush:sn,BrushIcon:sn,Bug:kn,BugIcon:kn,BugOff:yn,BugOffIcon:yn,BugPlay:pn,BugPlayIcon:pn,Building:Mn,Building2:un,Building2Icon:un,BuildingIcon:Mn,Bus:vn,BusFront:mn,BusFrontIcon:mn,BusIcon:vn,Cable:In,CableCar:gn,CableCarIcon:gn,CableIcon:In,Cake:fn,CakeIcon:fn,CakeSlice:xn,CakeSliceIcon:xn,Calculator:Ln,CalculatorIcon:Ln,Calendar:Tn,CalendarCheck:Cn,CalendarCheck2:wn,CalendarCheck2Icon:wn,CalendarCheckIcon:Cn,CalendarClock:bn,CalendarClockIcon:bn,CalendarDays:Sn,CalendarDaysIcon:Sn,CalendarFold:qn,CalendarFoldIcon:qn,CalendarHeart:An,CalendarHeartIcon:An,CalendarIcon:Tn,CalendarMinus:zn,CalendarMinus2:Hn,CalendarMinus2Icon:Hn,CalendarMinusIcon:zn,CalendarOff:Vn,CalendarOffIcon:Vn,CalendarPlus:jn,CalendarPlus2:Pn,CalendarPlus2Icon:Pn,CalendarPlusIcon:jn,CalendarRange:_n,CalendarRangeIcon:_n,CalendarSearch:Dn,CalendarSearchIcon:Dn,CalendarX:Fn,CalendarX2:Bn,CalendarX2Icon:Bn,CalendarXIcon:Fn,Camera:On,CameraIcon:On,CameraOff:Rn,CameraOffIcon:Rn,CandlestickChart:Un,CandlestickChartIcon:Un,Candy:$n,CandyCane:En,CandyCaneIcon:En,CandyIcon:$n,CandyOff:Zn,CandyOffIcon:Zn,Cannabis:Gn,CannabisIcon:Gn,Captions:ze,CaptionsIcon:ze,CaptionsOff:Nn,CaptionsOffIcon:Nn,Car:Kn,CarFront:Wn,CarFrontIcon:Wn,CarIcon:Kn,CarTaxiFront:Xn,CarTaxiFrontIcon:Xn,Caravan:Jn,CaravanIcon:Jn,Carrot:Yn,CarrotIcon:Yn,CaseLower:Qn,CaseLowerIcon:Qn,CaseSensitive:ei,CaseSensitiveIcon:ei,CaseUpper:ti,CaseUpperIcon:ti,CassetteTape:ai,CassetteTapeIcon:ai,Cast:oi,CastIcon:oi,Castle:ci,CastleIcon:ci,Cat:ni,CatIcon:ni,Cctv:ii,CctvIcon:ii,Check:di,CheckCheck:ri,CheckCheckIcon:ri,CheckCircle:ie,CheckCircle2:Oe,CheckCircle2Icon:Oe,CheckCircleIcon:ie,CheckIcon:di,CheckSquare:xt,CheckSquare2:ft,CheckSquare2Icon:ft,CheckSquareIcon:xt,ChefHat:hi,ChefHatIcon:hi,Cherry:li,CherryIcon:li,ChevronDown:B2,ChevronDownCircle:Ue,ChevronDownCircleIcon:Ue,ChevronDownIcon:B2,ChevronDownSquare:Lt,ChevronDownSquareIcon:Lt,ChevronFirst:si,ChevronFirstIcon:si,ChevronLast:yi,ChevronLastIcon:yi,ChevronLeft:pi,ChevronLeftCircle:Ee,ChevronLeftCircleIcon:Ee,ChevronLeftIcon:pi,ChevronLeftSquare:wt,ChevronLeftSquareIcon:wt,ChevronRight:F2,ChevronRightCircle:Ze,ChevronRightCircleIcon:Ze,ChevronRightIcon:F2,ChevronRightSquare:Ct,ChevronRightSquareIcon:Ct,ChevronUp:ki,ChevronUpCircle:$e,ChevronUpCircleIcon:$e,ChevronUpIcon:ki,ChevronUpSquare:bt,ChevronUpSquareIcon:bt,ChevronsDown:Mi,ChevronsDownIcon:Mi,ChevronsDownUp:ui,ChevronsDownUpIcon:ui,ChevronsLeft:vi,ChevronsLeftIcon:vi,ChevronsLeftRight:mi,ChevronsLeftRightIcon:mi,ChevronsRight:Ii,ChevronsRightIcon:Ii,ChevronsRightLeft:gi,ChevronsRightLeftIcon:gi,ChevronsUp:fi,ChevronsUpDown:xi,ChevronsUpDownIcon:xi,ChevronsUpIcon:fi,Chrome:Li,ChromeIcon:Li,Church:wi,ChurchIcon:wi,Cigarette:bi,CigaretteIcon:bi,CigaretteOff:Ci,CigaretteOffIcon:Ci,Circle:Di,CircleAlert:Ve,CircleAlertIcon:Ve,CircleArrowDown:Pe,CircleArrowDownIcon:Pe,CircleArrowLeft:je,CircleArrowLeftIcon:je,CircleArrowOutDownLeft:_e,CircleArrowOutDownLeftIcon:_e,CircleArrowOutDownRight:De,CircleArrowOutDownRightIcon:De,CircleArrowOutUpLeft:Be,CircleArrowOutUpLeftIcon:Be,CircleArrowOutUpRight:Fe,CircleArrowOutUpRightIcon:Fe,CircleArrowRight:Te,CircleArrowRightIcon:Te,CircleArrowUp:Re,CircleArrowUpIcon:Re,CircleCheck:Oe,CircleCheckBig:ie,CircleCheckBigIcon:ie,CircleCheckIcon:Oe,CircleChevronDown:Ue,CircleChevronDownIcon:Ue,CircleChevronLeft:Ee,CircleChevronLeftIcon:Ee,CircleChevronRight:Ze,CircleChevronRightIcon:Ze,CircleChevronUp:$e,CircleChevronUpIcon:$e,CircleDashed:Si,CircleDashedIcon:Si,CircleDivide:Ge,CircleDivideIcon:Ge,CircleDollarSign:qi,CircleDollarSignIcon:qi,CircleDot:Hi,CircleDotDashed:Ai,CircleDotDashedIcon:Ai,CircleDotIcon:Hi,CircleEllipsis:zi,CircleEllipsisIcon:zi,CircleEqual:Vi,CircleEqualIcon:Vi,CircleFadingPlus:Pi,CircleFadingPlusIcon:Pi,CircleGauge:Ne,CircleGaugeIcon:Ne,CircleHelp:We,CircleHelpIcon:We,CircleIcon:Di,CircleMinus:re,CircleMinusIcon:re,CircleOff:ji,CircleOffIcon:ji,CircleParking:Ke,CircleParkingIcon:Ke,CircleParkingOff:Xe,CircleParkingOffIcon:Xe,CirclePause:Je,CirclePauseIcon:Je,CirclePercent:Ye,CirclePercentIcon:Ye,CirclePlay:Qe,CirclePlayIcon:Qe,CirclePlus:e1,CirclePlusIcon:e1,CirclePower:t1,CirclePowerIcon:t1,CircleSlash:_i,CircleSlash2:a1,CircleSlash2Icon:a1,CircleSlashIcon:_i,CircleSlashed:a1,CircleSlashedIcon:a1,CircleStop:o1,CircleStopIcon:o1,CircleUser:n1,CircleUserIcon:n1,CircleUserRound:c1,CircleUserRoundIcon:c1,CircleX:de,CircleXIcon:de,CircuitBoard:Bi,CircuitBoardIcon:Bi,Citrus:Fi,CitrusIcon:Fi,Clapperboard:Ti,ClapperboardIcon:Ti,Clipboard:Wi,ClipboardCheck:Ri,ClipboardCheckIcon:Ri,ClipboardCopy:Oi,ClipboardCopyIcon:Oi,ClipboardEdit:r1,ClipboardEditIcon:r1,ClipboardIcon:Wi,ClipboardList:Ui,ClipboardListIcon:Ui,ClipboardMinus:Ei,ClipboardMinusIcon:Ei,ClipboardPaste:Zi,ClipboardPasteIcon:Zi,ClipboardPen:r1,ClipboardPenIcon:r1,ClipboardPenLine:i1,ClipboardPenLineIcon:i1,ClipboardPlus:$i,ClipboardPlusIcon:$i,ClipboardSignature:i1,ClipboardSignatureIcon:i1,ClipboardType:Gi,ClipboardTypeIcon:Gi,ClipboardX:Ni,ClipboardXIcon:Ni,Clock:rr,Clock1:Xi,Clock10:Ki,Clock10Icon:Ki,Clock11:Ji,Clock11Icon:Ji,Clock12:Yi,Clock12Icon:Yi,Clock1Icon:Xi,Clock2:Qi,Clock2Icon:Qi,Clock3:er,Clock3Icon:er,Clock4:tr,Clock4Icon:tr,Clock5:ar,Clock5Icon:ar,Clock6:or,Clock6Icon:or,Clock7:cr,Clock7Icon:cr,Clock8:nr,Clock8Icon:nr,Clock9:ir,Clock9Icon:ir,ClockIcon:rr,Cloud:xr,CloudCog:dr,CloudCogIcon:dr,CloudDownload:d1,CloudDownloadIcon:d1,CloudDrizzle:hr,CloudDrizzleIcon:hr,CloudFog:lr,CloudFogIcon:lr,CloudHail:sr,CloudHailIcon:sr,CloudIcon:xr,CloudLightning:yr,CloudLightningIcon:yr,CloudMoon:kr,CloudMoonIcon:kr,CloudMoonRain:pr,CloudMoonRainIcon:pr,CloudOff:ur,CloudOffIcon:ur,CloudRain:mr,CloudRainIcon:mr,CloudRainWind:Mr,CloudRainWindIcon:Mr,CloudSnow:vr,CloudSnowIcon:vr,CloudSun:Ir,CloudSunIcon:Ir,CloudSunRain:gr,CloudSunRainIcon:gr,CloudUpload:h1,CloudUploadIcon:h1,Cloudy:fr,CloudyIcon:fr,Clover:Lr,CloverIcon:Lr,Club:wr,ClubIcon:wr,Code:X2,Code2:l1,Code2Icon:l1,CodeIcon:X2,CodeSquare:St,CodeSquareIcon:St,CodeXml:l1,CodeXmlIcon:l1,Codepen:Cr,CodepenIcon:Cr,Codesandbox:br,CodesandboxIcon:br,Coffee:Sr,CoffeeIcon:Sr,Cog:qr,CogIcon:qr,Coins:Ar,CoinsIcon:Ar,Columns:s1,Columns2:s1,Columns2Icon:s1,Columns3:y1,Columns3Icon:y1,Columns4:Hr,Columns4Icon:Hr,ColumnsIcon:s1,Combine:zr,CombineIcon:zr,Command:Vr,CommandIcon:Vr,Compass:Pr,CompassIcon:Pr,Component:jr,ComponentIcon:jr,Computer:_r,ComputerIcon:_r,ConciergeBell:Dr,ConciergeBellIcon:Dr,Cone:Br,ConeIcon:Br,Construction:Fr,ConstructionIcon:Fr,Contact:Tr,Contact2:p1,Contact2Icon:p1,ContactIcon:Tr,ContactRound:p1,ContactRoundIcon:p1,Container:Rr,ContainerIcon:Rr,Contrast:Or,ContrastIcon:Or,Cookie:Ur,CookieIcon:Ur,CookingPot:Er,CookingPotIcon:Er,Copy:Xr,CopyCheck:Zr,CopyCheckIcon:Zr,CopyIcon:Xr,CopyMinus:$r,CopyMinusIcon:$r,CopyPlus:Gr,CopyPlusIcon:Gr,CopySlash:Nr,CopySlashIcon:Nr,CopyX:Wr,CopyXIcon:Wr,Copyleft:Kr,CopyleftIcon:Kr,Copyright:Jr,CopyrightIcon:Jr,CornerDownLeft:Yr,CornerDownLeftIcon:Yr,CornerDownRight:Qr,CornerDownRightIcon:Qr,CornerLeftDown:ed,CornerLeftDownIcon:ed,CornerLeftUp:td,CornerLeftUpIcon:td,CornerRightDown:ad,CornerRightDownIcon:ad,CornerRightUp:od,CornerRightUpIcon:od,CornerUpLeft:cd,CornerUpLeftIcon:cd,CornerUpRight:nd,CornerUpRightIcon:nd,Cpu:id,CpuIcon:id,CreativeCommons:rd,CreativeCommonsIcon:rd,CreditCard:dd,CreditCardIcon:dd,Croissant:hd,CroissantIcon:hd,Crop:ld,CropIcon:ld,Cross:sd,CrossIcon:sd,Crosshair:yd,CrosshairIcon:yd,Crown:pd,CrownIcon:pd,Cuboid:kd,CuboidIcon:kd,CupSoda:ud,CupSodaIcon:ud,CurlyBraces:He,CurlyBracesIcon:He,Currency:Md,CurrencyIcon:Md,Cylinder:md,CylinderIcon:md,Database:Id,DatabaseBackup:vd,DatabaseBackupIcon:vd,DatabaseIcon:Id,DatabaseZap:gd,DatabaseZapIcon:gd,Delete:xd,DeleteIcon:xd,Dessert:fd,DessertIcon:fd,Diameter:Ld,DiameterIcon:Ld,Diamond:bd,DiamondIcon:bd,DiamondMinus:wd,DiamondMinusIcon:wd,DiamondPercent:k1,DiamondPercentIcon:k1,DiamondPlus:Cd,DiamondPlusIcon:Cd,Dice1:Sd,Dice1Icon:Sd,Dice2:qd,Dice2Icon:qd,Dice3:Ad,Dice3Icon:Ad,Dice4:Hd,Dice4Icon:Hd,Dice5:zd,Dice5Icon:zd,Dice6:Vd,Dice6Icon:Vd,Dices:Pd,DicesIcon:Pd,Diff:jd,DiffIcon:jd,Disc:Fd,Disc2:_d,Disc2Icon:_d,Disc3:Dd,Disc3Icon:Dd,DiscAlbum:Bd,DiscAlbumIcon:Bd,DiscIcon:Fd,Divide:Td,DivideCircle:Ge,DivideCircleIcon:Ge,DivideIcon:Td,DivideSquare:Ht,DivideSquareIcon:Ht,Dna:Od,DnaIcon:Od,DnaOff:Rd,DnaOffIcon:Rd,Dock:Ud,DockIcon:Ud,Dog:Ed,DogIcon:Ed,DollarSign:Zd,DollarSignIcon:Zd,Donut:$d,DonutIcon:$d,DoorClosed:Gd,DoorClosedIcon:Gd,DoorOpen:Nd,DoorOpenIcon:Nd,Dot:Wd,DotIcon:Wd,DotSquare:zt,DotSquareIcon:zt,Download:Xd,DownloadCloud:d1,DownloadCloudIcon:d1,DownloadIcon:Xd,DraftingCompass:Kd,DraftingCompassIcon:Kd,Drama:Jd,DramaIcon:Jd,Dribbble:Yd,DribbbleIcon:Yd,Drill:Qd,DrillIcon:Qd,Droplet:eh,DropletIcon:eh,Droplets:th,DropletsIcon:th,Drum:ah,DrumIcon:ah,Drumstick:oh,DrumstickIcon:oh,Dumbbell:ch,DumbbellIcon:ch,Ear:ih,EarIcon:ih,EarOff:nh,EarOffIcon:nh,Earth:u1,EarthIcon:u1,EarthLock:rh,EarthLockIcon:rh,Eclipse:dh,EclipseIcon:dh,Edit:K,Edit2:K1,Edit2Icon:K1,Edit3:X1,Edit3Icon:X1,EditIcon:K,Egg:sh,EggFried:hh,EggFriedIcon:hh,EggIcon:sh,EggOff:lh,EggOffIcon:lh,Ellipsis:m1,EllipsisIcon:m1,EllipsisVertical:M1,EllipsisVerticalIcon:M1,Equal:ph,EqualIcon:ph,EqualNot:yh,EqualNotIcon:yh,EqualSquare:Vt,EqualSquareIcon:Vt,Eraser:kh,EraserIcon:kh,Euro:uh,EuroIcon:uh,Expand:Mh,ExpandIcon:Mh,ExternalLink:mh,ExternalLinkIcon:mh,Eye:gh,EyeIcon:gh,EyeOff:vh,EyeOffIcon:vh,Facebook:Ih,FacebookIcon:Ih,Factory:xh,FactoryIcon:xh,Fan:fh,FanIcon:fh,FastForward:Lh,FastForwardIcon:Lh,Feather:wh,FeatherIcon:wh,Fence:Ch,FenceIcon:Ch,FerrisWheel:bh,FerrisWheelIcon:bh,Figma:Sh,FigmaIcon:Sh,File:Sl,FileArchive:qh,FileArchiveIcon:qh,FileAudio:Hh,FileAudio2:Ah,FileAudio2Icon:Ah,FileAudioIcon:Hh,FileAxis3D:v1,FileAxis3DIcon:v1,FileAxis3d:v1,FileAxis3dIcon:v1,FileBadge:Vh,FileBadge2:zh,FileBadge2Icon:zh,FileBadgeIcon:Vh,FileBarChart:jh,FileBarChart2:Ph,FileBarChart2Icon:Ph,FileBarChartIcon:jh,FileBox:_h,FileBoxIcon:_h,FileCheck:Bh,FileCheck2:Dh,FileCheck2Icon:Dh,FileCheckIcon:Bh,FileClock:Fh,FileClockIcon:Fh,FileCode:Rh,FileCode2:Th,FileCode2Icon:Th,FileCodeIcon:Rh,FileCog:g1,FileCog2:g1,FileCog2Icon:g1,FileCogIcon:g1,FileDiff:Oh,FileDiffIcon:Oh,FileDigit:Uh,FileDigitIcon:Uh,FileDown:Eh,FileDownIcon:Eh,FileEdit:x1,FileEditIcon:x1,FileHeart:Zh,FileHeartIcon:Zh,FileIcon:Sl,FileImage:$h,FileImageIcon:$h,FileInput:Gh,FileInputIcon:Gh,FileJson:Wh,FileJson2:Nh,FileJson2Icon:Nh,FileJsonIcon:Wh,FileKey:Kh,FileKey2:Xh,FileKey2Icon:Xh,FileKeyIcon:Kh,FileLineChart:Jh,FileLineChartIcon:Jh,FileLock:Qh,FileLock2:Yh,FileLock2Icon:Yh,FileLockIcon:Qh,FileMinus:tl,FileMinus2:el,FileMinus2Icon:el,FileMinusIcon:tl,FileMusic:al,FileMusicIcon:al,FileOutput:ol,FileOutputIcon:ol,FilePen:x1,FilePenIcon:x1,FilePenLine:I1,FilePenLineIcon:I1,FilePieChart:cl,FilePieChartIcon:cl,FilePlus:il,FilePlus2:nl,FilePlus2Icon:nl,FilePlusIcon:il,FileQuestion:rl,FileQuestionIcon:rl,FileScan:dl,FileScanIcon:dl,FileSearch:ll,FileSearch2:hl,FileSearch2Icon:hl,FileSearchIcon:ll,FileSignature:I1,FileSignatureIcon:I1,FileSliders:sl,FileSlidersIcon:sl,FileSpreadsheet:yl,FileSpreadsheetIcon:yl,FileStack:pl,FileStackIcon:pl,FileSymlink:kl,FileSymlinkIcon:kl,FileTerminal:ul,FileTerminalIcon:ul,FileText:Ml,FileTextIcon:Ml,FileType:vl,FileType2:ml,FileType2Icon:ml,FileTypeIcon:vl,FileUp:gl,FileUpIcon:gl,FileVideo:xl,FileVideo2:Il,FileVideo2Icon:Il,FileVideoIcon:xl,FileVolume:Ll,FileVolume2:fl,FileVolume2Icon:fl,FileVolumeIcon:Ll,FileWarning:wl,FileWarningIcon:wl,FileX:bl,FileX2:Cl,FileX2Icon:Cl,FileXIcon:bl,Files:ql,FilesIcon:ql,Film:Al,FilmIcon:Al,Filter:zl,FilterIcon:zl,FilterX:Hl,FilterXIcon:Hl,Fingerprint:Vl,FingerprintIcon:Vl,FireExtinguisher:Pl,FireExtinguisherIcon:Pl,Fish:Dl,FishIcon:Dl,FishOff:jl,FishOffIcon:jl,FishSymbol:_l,FishSymbolIcon:_l,Flag:Rl,FlagIcon:Rl,FlagOff:Bl,FlagOffIcon:Bl,FlagTriangleLeft:Fl,FlagTriangleLeftIcon:Fl,FlagTriangleRight:Tl,FlagTriangleRightIcon:Tl,Flame:Ul,FlameIcon:Ul,FlameKindling:Ol,FlameKindlingIcon:Ol,Flashlight:Zl,FlashlightIcon:Zl,FlashlightOff:El,FlashlightOffIcon:El,FlaskConical:Gl,FlaskConicalIcon:Gl,FlaskConicalOff:$l,FlaskConicalOffIcon:$l,FlaskRound:Nl,FlaskRoundIcon:Nl,FlipHorizontal:Xl,FlipHorizontal2:Wl,FlipHorizontal2Icon:Wl,FlipHorizontalIcon:Xl,FlipVertical:Jl,FlipVertical2:Kl,FlipVertical2Icon:Kl,FlipVerticalIcon:Jl,Flower:Ql,Flower2:Yl,Flower2Icon:Yl,FlowerIcon:Ql,Focus:es,FocusIcon:es,FoldHorizontal:ts,FoldHorizontalIcon:ts,FoldVertical:as,FoldVerticalIcon:as,Folder:K2,FolderArchive:os,FolderArchiveIcon:os,FolderCheck:cs,FolderCheckIcon:cs,FolderClock:ns,FolderClockIcon:ns,FolderClosed:is,FolderClosedIcon:is,FolderCog:f1,FolderCog2:f1,FolderCog2Icon:f1,FolderCogIcon:f1,FolderDot:rs,FolderDotIcon:rs,FolderDown:ds,FolderDownIcon:ds,FolderEdit:L1,FolderEditIcon:L1,FolderGit:ls,FolderGit2:hs,FolderGit2Icon:hs,FolderGitIcon:ls,FolderHeart:ss,FolderHeartIcon:ss,FolderIcon:K2,FolderInput:ys,FolderInputIcon:ys,FolderKanban:ps,FolderKanbanIcon:ps,FolderKey:ks,FolderKeyIcon:ks,FolderLock:us,FolderLockIcon:us,FolderMinus:Ms,FolderMinusIcon:Ms,FolderOpen:vs,FolderOpenDot:ms,FolderOpenDotIcon:ms,FolderOpenIcon:vs,FolderOutput:gs,FolderOutputIcon:gs,FolderPen:L1,FolderPenIcon:L1,FolderPlus:Is,FolderPlusIcon:Is,FolderRoot:xs,FolderRootIcon:xs,FolderSearch:Ls,FolderSearch2:fs,FolderSearch2Icon:fs,FolderSearchIcon:Ls,FolderSymlink:ws,FolderSymlinkIcon:ws,FolderSync:Cs,FolderSyncIcon:Cs,FolderTree:bs,FolderTreeIcon:bs,FolderUp:Ss,FolderUpIcon:Ss,FolderX:qs,FolderXIcon:qs,Folders:As,FoldersIcon:As,Footprints:Hs,FootprintsIcon:Hs,Forklift:zs,ForkliftIcon:zs,FormInput:J1,FormInputIcon:J1,Forward:Vs,ForwardIcon:Vs,Frame:Ps,FrameIcon:Ps,Framer:js,FramerIcon:js,Frown:_s,FrownIcon:_s,Fuel:Ds,FuelIcon:Ds,Fullscreen:Bs,FullscreenIcon:Bs,FunctionSquare:Pt,FunctionSquareIcon:Pt,GalleryHorizontal:Ts,GalleryHorizontalEnd:Fs,GalleryHorizontalEndIcon:Fs,GalleryHorizontalIcon:Ts,GalleryThumbnails:Rs,GalleryThumbnailsIcon:Rs,GalleryVertical:Us,GalleryVerticalEnd:Os,GalleryVerticalEndIcon:Os,GalleryVerticalIcon:Us,Gamepad:Zs,Gamepad2:Es,Gamepad2Icon:Es,GamepadIcon:Zs,GanttChart:$s,GanttChartIcon:$s,GanttChartSquare:jt,GanttChartSquareIcon:jt,Gauge:Gs,GaugeCircle:Ne,GaugeCircleIcon:Ne,GaugeIcon:Gs,Gavel:Ns,GavelIcon:Ns,Gem:Ws,GemIcon:Ws,Ghost:Xs,GhostIcon:Xs,Gift:Ks,GiftIcon:Ks,GitBranch:Ys,GitBranchIcon:Ys,GitBranchPlus:Js,GitBranchPlusIcon:Js,GitCommit:w1,GitCommitHorizontal:w1,GitCommitHorizontalIcon:w1,GitCommitIcon:w1,GitCommitVertical:Qs,GitCommitVerticalIcon:Qs,GitCompare:ty,GitCompareArrows:ey,GitCompareArrowsIcon:ey,GitCompareIcon:ty,GitFork:ay,GitForkIcon:ay,GitGraph:oy,GitGraphIcon:oy,GitMerge:cy,GitMergeIcon:cy,GitPullRequest:ly,GitPullRequestArrow:ny,GitPullRequestArrowIcon:ny,GitPullRequestClosed:iy,GitPullRequestClosedIcon:iy,GitPullRequestCreate:dy,GitPullRequestCreateArrow:ry,GitPullRequestCreateArrowIcon:ry,GitPullRequestCreateIcon:dy,GitPullRequestDraft:hy,GitPullRequestDraftIcon:hy,GitPullRequestIcon:ly,Github:sy,GithubIcon:sy,Gitlab:yy,GitlabIcon:yy,GlassWater:py,GlassWaterIcon:py,Glasses:ky,GlassesIcon:ky,Globe:My,Globe2:u1,Globe2Icon:u1,GlobeIcon:My,GlobeLock:uy,GlobeLockIcon:uy,Goal:my,GoalIcon:my,Grab:vy,GrabIcon:vy,GraduationCap:gy,GraduationCapIcon:gy,Grape:Iy,GrapeIcon:Iy,Grid:ne,Grid2X2:C1,Grid2X2Icon:C1,Grid2x2:C1,Grid2x2Check:xy,Grid2x2CheckIcon:xy,Grid2x2Icon:C1,Grid2x2X:fy,Grid2x2XIcon:fy,Grid3X3:ne,Grid3X3Icon:ne,Grid3x3:ne,Grid3x3Icon:ne,GridIcon:ne,Grip:Cy,GripHorizontal:Ly,GripHorizontalIcon:Ly,GripIcon:Cy,GripVertical:wy,GripVerticalIcon:wy,Group:by,GroupIcon:by,Guitar:Sy,GuitarIcon:Sy,Ham:qy,HamIcon:qy,Hammer:Ay,HammerIcon:Ay,Hand:jy,HandCoins:Hy,HandCoinsIcon:Hy,HandHeart:zy,HandHeartIcon:zy,HandHelping:b1,HandHelpingIcon:b1,HandIcon:jy,HandMetal:Vy,HandMetalIcon:Vy,HandPlatter:Py,HandPlatterIcon:Py,Handshake:_y,HandshakeIcon:_y,HardDrive:Fy,HardDriveDownload:Dy,HardDriveDownloadIcon:Dy,HardDriveIcon:Fy,HardDriveUpload:By,HardDriveUploadIcon:By,HardHat:Ty,HardHatIcon:Ty,Hash:Ry,HashIcon:Ry,Haze:Oy,HazeIcon:Oy,HdmiPort:Uy,HdmiPortIcon:Uy,Heading:Xy,Heading1:Ey,Heading1Icon:Ey,Heading2:Zy,Heading2Icon:Zy,Heading3:$y,Heading3Icon:$y,Heading4:Gy,Heading4Icon:Gy,Heading5:Ny,Heading5Icon:Ny,Heading6:Wy,Heading6Icon:Wy,HeadingIcon:Xy,Headphones:Ky,HeadphonesIcon:Ky,Headset:Jy,HeadsetIcon:Jy,Heart:ap,HeartCrack:Yy,HeartCrackIcon:Yy,HeartHandshake:Qy,HeartHandshakeIcon:Qy,HeartIcon:ap,HeartOff:ep,HeartOffIcon:ep,HeartPulse:tp,HeartPulseIcon:tp,Heater:op,HeaterIcon:op,HelpCircle:We,HelpCircleIcon:We,HelpingHand:b1,HelpingHandIcon:b1,Hexagon:cp,HexagonIcon:cp,Highlighter:np,HighlighterIcon:np,History:ip,HistoryIcon:ip,Home:rp,HomeIcon:rp,Hop:hp,HopIcon:hp,HopOff:dp,HopOffIcon:dp,Hospital:lp,HospitalIcon:lp,Hotel:sp,HotelIcon:sp,Hourglass:yp,HourglassIcon:yp,IceCream:q1,IceCream2:S1,IceCream2Icon:S1,IceCreamBowl:S1,IceCreamBowlIcon:S1,IceCreamCone:q1,IceCreamConeIcon:q1,IceCreamIcon:q1,Icon:Gv,Image:gp,ImageDown:pp,ImageDownIcon:pp,ImageIcon:gp,ImageMinus:kp,ImageMinusIcon:kp,ImageOff:up,ImageOffIcon:up,ImagePlay:Mp,ImagePlayIcon:Mp,ImagePlus:mp,ImagePlusIcon:mp,ImageUp:vp,ImageUpIcon:vp,Images:Ip,ImagesIcon:Ip,Import:xp,ImportIcon:xp,Inbox:fp,InboxIcon:fp,Indent:H1,IndentDecrease:A1,IndentDecreaseIcon:A1,IndentIcon:H1,IndentIncrease:H1,IndentIncreaseIcon:H1,IndianRupee:Lp,IndianRupeeIcon:Lp,Infinity:wp,InfinityIcon:wp,Info:Cp,InfoIcon:Cp,Inspect:Rt,InspectIcon:Rt,InspectionPanel:bp,InspectionPanelIcon:bp,Instagram:Sp,InstagramIcon:Sp,Italic:qp,ItalicIcon:qp,IterationCcw:Ap,IterationCcwIcon:Ap,IterationCw:Hp,IterationCwIcon:Hp,JapaneseYen:zp,JapaneseYenIcon:zp,Joystick:Vp,JoystickIcon:Vp,Kanban:Pp,KanbanIcon:Pp,KanbanSquare:_t,KanbanSquareDashed:qt,KanbanSquareDashedIcon:qt,KanbanSquareIcon:_t,Key:Dp,KeyIcon:Dp,KeyRound:jp,KeyRoundIcon:jp,KeySquare:_p,KeySquareIcon:_p,Keyboard:Tp,KeyboardIcon:Tp,KeyboardMusic:Bp,KeyboardMusicIcon:Bp,KeyboardOff:Fp,KeyboardOffIcon:Fp,Lamp:$p,LampCeiling:Rp,LampCeilingIcon:Rp,LampDesk:Op,LampDeskIcon:Op,LampFloor:Up,LampFloorIcon:Up,LampIcon:$p,LampWallDown:Ep,LampWallDownIcon:Ep,LampWallUp:Zp,LampWallUpIcon:Zp,LandPlot:Gp,LandPlotIcon:Gp,Landmark:Np,LandmarkIcon:Np,Languages:Wp,LanguagesIcon:Wp,Laptop:Xp,Laptop2:z1,Laptop2Icon:z1,LaptopIcon:Xp,LaptopMinimal:z1,LaptopMinimalIcon:z1,Lasso:Jp,LassoIcon:Jp,LassoSelect:Kp,LassoSelectIcon:Kp,Laugh:Yp,LaughIcon:Yp,Layers:tk,Layers2:Qp,Layers2Icon:Qp,Layers3:ek,Layers3Icon:ek,LayersIcon:tk,Layout:W1,LayoutDashboard:ak,LayoutDashboardIcon:ak,LayoutGrid:J2,LayoutGridIcon:J2,LayoutIcon:W1,LayoutList:ok,LayoutListIcon:ok,LayoutPanelLeft:ck,LayoutPanelLeftIcon:ck,LayoutPanelTop:nk,LayoutPanelTopIcon:nk,LayoutTemplate:ik,LayoutTemplateIcon:ik,Leaf:rk,LeafIcon:rk,LeafyGreen:dk,LeafyGreenIcon:dk,Lectern:hk,LecternIcon:hk,Library:sk,LibraryBig:lk,LibraryBigIcon:lk,LibraryIcon:sk,LibrarySquare:Dt,LibrarySquareIcon:Dt,LifeBuoy:yk,LifeBuoyIcon:yk,Ligature:pk,LigatureIcon:pk,Lightbulb:uk,LightbulbIcon:uk,LightbulbOff:kk,LightbulbOffIcon:kk,LineChart:Mk,LineChartIcon:Mk,Link:gk,Link2:vk,Link2Icon:vk,Link2Off:mk,Link2OffIcon:mk,LinkIcon:gk,Linkedin:Ik,LinkedinIcon:Ik,List:_k,ListChecks:xk,ListChecksIcon:xk,ListCollapse:fk,ListCollapseIcon:fk,ListEnd:Lk,ListEndIcon:Lk,ListFilter:wk,ListFilterIcon:wk,ListIcon:_k,ListMinus:Ck,ListMinusIcon:Ck,ListMusic:bk,ListMusicIcon:bk,ListOrdered:Sk,ListOrderedIcon:Sk,ListPlus:qk,ListPlusIcon:qk,ListRestart:Ak,ListRestartIcon:Ak,ListStart:Hk,ListStartIcon:Hk,ListTodo:zk,ListTodoIcon:zk,ListTree:Vk,ListTreeIcon:Vk,ListVideo:Pk,ListVideoIcon:Pk,ListX:jk,ListXIcon:jk,Loader:Bk,Loader2:V1,Loader2Icon:V1,LoaderCircle:V1,LoaderCircleIcon:V1,LoaderIcon:Bk,LoaderPinwheel:Dk,LoaderPinwheelIcon:Dk,Locate:Rk,LocateFixed:Fk,LocateFixedIcon:Fk,LocateIcon:Rk,LocateOff:Tk,LocateOffIcon:Tk,Lock:Uk,LockIcon:Uk,LockKeyhole:Ok,LockKeyholeIcon:Ok,LockKeyholeOpen:P1,LockKeyholeOpenIcon:P1,LockOpen:j1,LockOpenIcon:j1,LogIn:Y2,LogInIcon:Y2,LogOut:Q2,LogOutIcon:Q2,Lollipop:Ek,LollipopIcon:Ek,LucideAArrowDown:sa,LucideAArrowUp:ya,LucideALargeSmall:pa,LucideAccessibility:ka,LucideActivity:ua,LucideActivitySquare:it,LucideAirVent:Ma,LucideAirplay:ma,LucideAlarmCheck:Me,LucideAlarmClock:ga,LucideAlarmClockCheck:Me,LucideAlarmClockMinus:me,LucideAlarmClockOff:va,LucideAlarmClockPlus:ve,LucideAlarmMinus:me,LucideAlarmPlus:ve,LucideAlarmSmoke:Ia,LucideAlbum:xa,LucideAlertCircle:Ve,LucideAlertOctagon:B1,LucideAlertTriangle:d2,LucideAlignCenter:wa,LucideAlignCenterHorizontal:fa,LucideAlignCenterVertical:La,LucideAlignEndHorizontal:Ca,LucideAlignEndVertical:ba,LucideAlignHorizontalDistributeCenter:Sa,LucideAlignHorizontalDistributeEnd:qa,LucideAlignHorizontalDistributeStart:Aa,LucideAlignHorizontalJustifyCenter:Ha,LucideAlignHorizontalJustifyEnd:za,LucideAlignHorizontalJustifyStart:Va,LucideAlignHorizontalSpaceAround:Pa,LucideAlignHorizontalSpaceBetween:ja,LucideAlignJustify:_a,LucideAlignLeft:Da,LucideAlignRight:Ba,LucideAlignStartHorizontal:Fa,LucideAlignStartVertical:Ta,LucideAlignVerticalDistributeCenter:Ra,LucideAlignVerticalDistributeEnd:Oa,LucideAlignVerticalDistributeStart:Ua,LucideAlignVerticalJustifyCenter:Ea,LucideAlignVerticalJustifyEnd:Za,LucideAlignVerticalJustifyStart:$a,LucideAlignVerticalSpaceAround:Ga,LucideAlignVerticalSpaceBetween:Na,LucideAmbulance:Wa,LucideAmpersand:Xa,LucideAmpersands:Ka,LucideAnchor:Ja,LucideAngry:Ya,LucideAnnoyed:Qa,LucideAntenna:eo,LucideAnvil:to,LucideAperture:ao,LucideAppWindow:co,LucideAppWindowMac:oo,LucideApple:no,LucideArchive:ho,LucideArchiveRestore:io,LucideArchiveX:ro,LucideAreaChart:lo,LucideArmchair:so,LucideArrowBigDown:po,LucideArrowBigDownDash:yo,LucideArrowBigLeft:uo,LucideArrowBigLeftDash:ko,LucideArrowBigRight:mo,LucideArrowBigRightDash:Mo,LucideArrowBigUp:go,LucideArrowBigUpDash:vo,LucideArrowDown:Ao,LucideArrowDown01:Io,LucideArrowDown10:xo,LucideArrowDownAZ:ge,LucideArrowDownAz:ge,LucideArrowDownCircle:Pe,LucideArrowDownFromLine:fo,LucideArrowDownLeft:Lo,LucideArrowDownLeftFromCircle:_e,LucideArrowDownLeftFromSquare:st,LucideArrowDownLeftSquare:rt,LucideArrowDownNarrowWide:wo,LucideArrowDownRight:Co,LucideArrowDownRightFromCircle:De,LucideArrowDownRightFromSquare:yt,LucideArrowDownRightSquare:dt,LucideArrowDownSquare:ht,LucideArrowDownToDot:bo,LucideArrowDownToLine:So,LucideArrowDownUp:qo,LucideArrowDownWideNarrow:Ie,LucideArrowDownZA:xe,LucideArrowDownZa:xe,LucideArrowLeft:Po,LucideArrowLeftCircle:je,LucideArrowLeftFromLine:Ho,LucideArrowLeftRight:zo,LucideArrowLeftSquare:lt,LucideArrowLeftToLine:Vo,LucideArrowRight:Bo,LucideArrowRightCircle:Te,LucideArrowRightFromLine:jo,LucideArrowRightLeft:_o,LucideArrowRightSquare:ut,LucideArrowRightToLine:Do,LucideArrowUp:No,LucideArrowUp01:Fo,LucideArrowUp10:To,LucideArrowUpAZ:fe,LucideArrowUpAz:fe,LucideArrowUpCircle:Re,LucideArrowUpDown:Ro,LucideArrowUpFromDot:Oo,LucideArrowUpFromLine:Uo,LucideArrowUpLeft:Eo,LucideArrowUpLeftFromCircle:Be,LucideArrowUpLeftFromSquare:pt,LucideArrowUpLeftSquare:Mt,LucideArrowUpNarrowWide:Le,LucideArrowUpRight:Zo,LucideArrowUpRightFromCircle:Fe,LucideArrowUpRightFromSquare:kt,LucideArrowUpRightSquare:mt,LucideArrowUpSquare:vt,LucideArrowUpToLine:$o,LucideArrowUpWideNarrow:Go,LucideArrowUpZA:we,LucideArrowUpZa:we,LucideArrowsUpFromLine:Wo,LucideAsterisk:Xo,LucideAsteriskSquare:gt,LucideAtSign:Ko,LucideAtom:Jo,LucideAudioLines:Yo,LucideAudioWaveform:Qo,LucideAward:ec,LucideAxe:tc,LucideAxis3D:Ce,LucideAxis3d:Ce,LucideBaby:ac,LucideBackpack:oc,LucideBadge:gc,LucideBadgeAlert:cc,LucideBadgeCent:nc,LucideBadgeCheck:be,LucideBadgeDollarSign:ic,LucideBadgeEuro:rc,LucideBadgeHelp:dc,LucideBadgeIndianRupee:hc,LucideBadgeInfo:lc,LucideBadgeJapaneseYen:sc,LucideBadgeMinus:yc,LucideBadgePercent:pc,LucideBadgePlus:kc,LucideBadgePoundSterling:uc,LucideBadgeRussianRuble:Mc,LucideBadgeSwissFranc:mc,LucideBadgeX:vc,LucideBaggageClaim:Ic,LucideBan:xc,LucideBanana:fc,LucideBanknote:Lc,LucideBarChart:Hc,LucideBarChart2:wc,LucideBarChart3:Cc,LucideBarChart4:bc,LucideBarChartBig:Sc,LucideBarChartHorizontal:Ac,LucideBarChartHorizontalBig:qc,LucideBarcode:zc,LucideBaseline:Vc,LucideBath:Pc,LucideBattery:Tc,LucideBatteryCharging:jc,LucideBatteryFull:_c,LucideBatteryLow:Dc,LucideBatteryMedium:Bc,LucideBatteryWarning:Fc,LucideBeaker:Rc,LucideBean:Uc,LucideBeanOff:Oc,LucideBed:$c,LucideBedDouble:Ec,LucideBedSingle:Zc,LucideBeef:Gc,LucideBeer:Wc,LucideBeerOff:Nc,LucideBell:t0,LucideBellDot:Xc,LucideBellElectric:Kc,LucideBellMinus:Jc,LucideBellOff:Yc,LucideBellPlus:Qc,LucideBellRing:e0,LucideBetweenHorizonalEnd:Se,LucideBetweenHorizonalStart:qe,LucideBetweenHorizontalEnd:Se,LucideBetweenHorizontalStart:qe,LucideBetweenVerticalEnd:a0,LucideBetweenVerticalStart:o0,LucideBike:c0,LucideBinary:n0,LucideBiohazard:i0,LucideBird:r0,LucideBitcoin:d0,LucideBlend:h0,LucideBlinds:l0,LucideBlocks:s0,LucideBluetooth:u0,LucideBluetoothConnected:y0,LucideBluetoothOff:p0,LucideBluetoothSearching:k0,LucideBold:M0,LucideBolt:m0,LucideBomb:v0,LucideBone:g0,LucideBook:U0,LucideBookA:I0,LucideBookAudio:x0,LucideBookCheck:f0,LucideBookCopy:L0,LucideBookDashed:Ae,LucideBookDown:w0,LucideBookHeadphones:C0,LucideBookHeart:b0,LucideBookImage:S0,LucideBookKey:q0,LucideBookLock:A0,LucideBookMarked:H0,LucideBookMinus:z0,LucideBookOpen:j0,LucideBookOpenCheck:V0,LucideBookOpenText:P0,LucideBookPlus:_0,LucideBookTemplate:Ae,LucideBookText:D0,LucideBookType:B0,LucideBookUp:T0,LucideBookUp2:F0,LucideBookUser:R0,LucideBookX:O0,LucideBookmark:N0,LucideBookmarkCheck:E0,LucideBookmarkMinus:Z0,LucideBookmarkPlus:$0,LucideBookmarkX:G0,LucideBoomBox:W0,LucideBot:J0,LucideBotMessageSquare:X0,LucideBotOff:K0,LucideBox:Q0,LucideBoxSelect:Y0,LucideBoxes:en,LucideBraces:He,LucideBrackets:tn,LucideBrain:cn,LucideBrainCircuit:an,LucideBrainCog:on,LucideBrickWall:nn,LucideBriefcase:hn,LucideBriefcaseBusiness:rn,LucideBriefcaseMedical:dn,LucideBringToFront:ln,LucideBrush:sn,LucideBug:kn,LucideBugOff:yn,LucideBugPlay:pn,LucideBuilding:Mn,LucideBuilding2:un,LucideBus:vn,LucideBusFront:mn,LucideCable:In,LucideCableCar:gn,LucideCake:fn,LucideCakeSlice:xn,LucideCalculator:Ln,LucideCalendar:Tn,LucideCalendarCheck:Cn,LucideCalendarCheck2:wn,LucideCalendarClock:bn,LucideCalendarDays:Sn,LucideCalendarFold:qn,LucideCalendarHeart:An,LucideCalendarMinus:zn,LucideCalendarMinus2:Hn,LucideCalendarOff:Vn,LucideCalendarPlus:jn,LucideCalendarPlus2:Pn,LucideCalendarRange:_n,LucideCalendarSearch:Dn,LucideCalendarX:Fn,LucideCalendarX2:Bn,LucideCamera:On,LucideCameraOff:Rn,LucideCandlestickChart:Un,LucideCandy:$n,LucideCandyCane:En,LucideCandyOff:Zn,LucideCannabis:Gn,LucideCaptions:ze,LucideCaptionsOff:Nn,LucideCar:Kn,LucideCarFront:Wn,LucideCarTaxiFront:Xn,LucideCaravan:Jn,LucideCarrot:Yn,LucideCaseLower:Qn,LucideCaseSensitive:ei,LucideCaseUpper:ti,LucideCassetteTape:ai,LucideCast:oi,LucideCastle:ci,LucideCat:ni,LucideCctv:ii,LucideCheck:di,LucideCheckCheck:ri,LucideCheckCircle:ie,LucideCheckCircle2:Oe,LucideCheckSquare:xt,LucideCheckSquare2:ft,LucideChefHat:hi,LucideCherry:li,LucideChevronDown:B2,LucideChevronDownCircle:Ue,LucideChevronDownSquare:Lt,LucideChevronFirst:si,LucideChevronLast:yi,LucideChevronLeft:pi,LucideChevronLeftCircle:Ee,LucideChevronLeftSquare:wt,LucideChevronRight:F2,LucideChevronRightCircle:Ze,LucideChevronRightSquare:Ct,LucideChevronUp:ki,LucideChevronUpCircle:$e,LucideChevronUpSquare:bt,LucideChevronsDown:Mi,LucideChevronsDownUp:ui,LucideChevronsLeft:vi,LucideChevronsLeftRight:mi,LucideChevronsRight:Ii,LucideChevronsRightLeft:gi,LucideChevronsUp:fi,LucideChevronsUpDown:xi,LucideChrome:Li,LucideChurch:wi,LucideCigarette:bi,LucideCigaretteOff:Ci,LucideCircle:Di,LucideCircleAlert:Ve,LucideCircleArrowDown:Pe,LucideCircleArrowLeft:je,LucideCircleArrowOutDownLeft:_e,LucideCircleArrowOutDownRight:De,LucideCircleArrowOutUpLeft:Be,LucideCircleArrowOutUpRight:Fe,LucideCircleArrowRight:Te,LucideCircleArrowUp:Re,LucideCircleCheck:Oe,LucideCircleCheckBig:ie,LucideCircleChevronDown:Ue,LucideCircleChevronLeft:Ee,LucideCircleChevronRight:Ze,LucideCircleChevronUp:$e,LucideCircleDashed:Si,LucideCircleDivide:Ge,LucideCircleDollarSign:qi,LucideCircleDot:Hi,LucideCircleDotDashed:Ai,LucideCircleEllipsis:zi,LucideCircleEqual:Vi,LucideCircleFadingPlus:Pi,LucideCircleGauge:Ne,LucideCircleHelp:We,LucideCircleMinus:re,LucideCircleOff:ji,LucideCircleParking:Ke,LucideCircleParkingOff:Xe,LucideCirclePause:Je,LucideCirclePercent:Ye,LucideCirclePlay:Qe,LucideCirclePlus:e1,LucideCirclePower:t1,LucideCircleSlash:_i,LucideCircleSlash2:a1,LucideCircleSlashed:a1,LucideCircleStop:o1,LucideCircleUser:n1,LucideCircleUserRound:c1,LucideCircleX:de,LucideCircuitBoard:Bi,LucideCitrus:Fi,LucideClapperboard:Ti,LucideClipboard:Wi,LucideClipboardCheck:Ri,LucideClipboardCopy:Oi,LucideClipboardEdit:r1,LucideClipboardList:Ui,LucideClipboardMinus:Ei,LucideClipboardPaste:Zi,LucideClipboardPen:r1,LucideClipboardPenLine:i1,LucideClipboardPlus:$i,LucideClipboardSignature:i1,LucideClipboardType:Gi,LucideClipboardX:Ni,LucideClock:rr,LucideClock1:Xi,LucideClock10:Ki,LucideClock11:Ji,LucideClock12:Yi,LucideClock2:Qi,LucideClock3:er,LucideClock4:tr,LucideClock5:ar,LucideClock6:or,LucideClock7:cr,LucideClock8:nr,LucideClock9:ir,LucideCloud:xr,LucideCloudCog:dr,LucideCloudDownload:d1,LucideCloudDrizzle:hr,LucideCloudFog:lr,LucideCloudHail:sr,LucideCloudLightning:yr,LucideCloudMoon:kr,LucideCloudMoonRain:pr,LucideCloudOff:ur,LucideCloudRain:mr,LucideCloudRainWind:Mr,LucideCloudSnow:vr,LucideCloudSun:Ir,LucideCloudSunRain:gr,LucideCloudUpload:h1,LucideCloudy:fr,LucideClover:Lr,LucideClub:wr,LucideCode:X2,LucideCode2:l1,LucideCodeSquare:St,LucideCodeXml:l1,LucideCodepen:Cr,LucideCodesandbox:br,LucideCoffee:Sr,LucideCog:qr,LucideCoins:Ar,LucideColumns:s1,LucideColumns2:s1,LucideColumns3:y1,LucideColumns4:Hr,LucideCombine:zr,LucideCommand:Vr,LucideCompass:Pr,LucideComponent:jr,LucideComputer:_r,LucideConciergeBell:Dr,LucideCone:Br,LucideConstruction:Fr,LucideContact:Tr,LucideContact2:p1,LucideContactRound:p1,LucideContainer:Rr,LucideContrast:Or,LucideCookie:Ur,LucideCookingPot:Er,LucideCopy:Xr,LucideCopyCheck:Zr,LucideCopyMinus:$r,LucideCopyPlus:Gr,LucideCopySlash:Nr,LucideCopyX:Wr,LucideCopyleft:Kr,LucideCopyright:Jr,LucideCornerDownLeft:Yr,LucideCornerDownRight:Qr,LucideCornerLeftDown:ed,LucideCornerLeftUp:td,LucideCornerRightDown:ad,LucideCornerRightUp:od,LucideCornerUpLeft:cd,LucideCornerUpRight:nd,LucideCpu:id,LucideCreativeCommons:rd,LucideCreditCard:dd,LucideCroissant:hd,LucideCrop:ld,LucideCross:sd,LucideCrosshair:yd,LucideCrown:pd,LucideCuboid:kd,LucideCupSoda:ud,LucideCurlyBraces:He,LucideCurrency:Md,LucideCylinder:md,LucideDatabase:Id,LucideDatabaseBackup:vd,LucideDatabaseZap:gd,LucideDelete:xd,LucideDessert:fd,LucideDiameter:Ld,LucideDiamond:bd,LucideDiamondMinus:wd,LucideDiamondPercent:k1,LucideDiamondPlus:Cd,LucideDice1:Sd,LucideDice2:qd,LucideDice3:Ad,LucideDice4:Hd,LucideDice5:zd,LucideDice6:Vd,LucideDices:Pd,LucideDiff:jd,LucideDisc:Fd,LucideDisc2:_d,LucideDisc3:Dd,LucideDiscAlbum:Bd,LucideDivide:Td,LucideDivideCircle:Ge,LucideDivideSquare:Ht,LucideDna:Od,LucideDnaOff:Rd,LucideDock:Ud,LucideDog:Ed,LucideDollarSign:Zd,LucideDonut:$d,LucideDoorClosed:Gd,LucideDoorOpen:Nd,LucideDot:Wd,LucideDotSquare:zt,LucideDownload:Xd,LucideDownloadCloud:d1,LucideDraftingCompass:Kd,LucideDrama:Jd,LucideDribbble:Yd,LucideDrill:Qd,LucideDroplet:eh,LucideDroplets:th,LucideDrum:ah,LucideDrumstick:oh,LucideDumbbell:ch,LucideEar:ih,LucideEarOff:nh,LucideEarth:u1,LucideEarthLock:rh,LucideEclipse:dh,LucideEdit:K,LucideEdit2:K1,LucideEdit3:X1,LucideEgg:sh,LucideEggFried:hh,LucideEggOff:lh,LucideEllipsis:m1,LucideEllipsisVertical:M1,LucideEqual:ph,LucideEqualNot:yh,LucideEqualSquare:Vt,LucideEraser:kh,LucideEuro:uh,LucideExpand:Mh,LucideExternalLink:mh,LucideEye:gh,LucideEyeOff:vh,LucideFacebook:Ih,LucideFactory:xh,LucideFan:fh,LucideFastForward:Lh,LucideFeather:wh,LucideFence:Ch,LucideFerrisWheel:bh,LucideFigma:Sh,LucideFile:Sl,LucideFileArchive:qh,LucideFileAudio:Hh,LucideFileAudio2:Ah,LucideFileAxis3D:v1,LucideFileAxis3d:v1,LucideFileBadge:Vh,LucideFileBadge2:zh,LucideFileBarChart:jh,LucideFileBarChart2:Ph,LucideFileBox:_h,LucideFileCheck:Bh,LucideFileCheck2:Dh,LucideFileClock:Fh,LucideFileCode:Rh,LucideFileCode2:Th,LucideFileCog:g1,LucideFileCog2:g1,LucideFileDiff:Oh,LucideFileDigit:Uh,LucideFileDown:Eh,LucideFileEdit:x1,LucideFileHeart:Zh,LucideFileImage:$h,LucideFileInput:Gh,LucideFileJson:Wh,LucideFileJson2:Nh,LucideFileKey:Kh,LucideFileKey2:Xh,LucideFileLineChart:Jh,LucideFileLock:Qh,LucideFileLock2:Yh,LucideFileMinus:tl,LucideFileMinus2:el,LucideFileMusic:al,LucideFileOutput:ol,LucideFilePen:x1,LucideFilePenLine:I1,LucideFilePieChart:cl,LucideFilePlus:il,LucideFilePlus2:nl,LucideFileQuestion:rl,LucideFileScan:dl,LucideFileSearch:ll,LucideFileSearch2:hl,LucideFileSignature:I1,LucideFileSliders:sl,LucideFileSpreadsheet:yl,LucideFileStack:pl,LucideFileSymlink:kl,LucideFileTerminal:ul,LucideFileText:Ml,LucideFileType:vl,LucideFileType2:ml,LucideFileUp:gl,LucideFileVideo:xl,LucideFileVideo2:Il,LucideFileVolume:Ll,LucideFileVolume2:fl,LucideFileWarning:wl,LucideFileX:bl,LucideFileX2:Cl,LucideFiles:ql,LucideFilm:Al,LucideFilter:zl,LucideFilterX:Hl,LucideFingerprint:Vl,LucideFireExtinguisher:Pl,LucideFish:Dl,LucideFishOff:jl,LucideFishSymbol:_l,LucideFlag:Rl,LucideFlagOff:Bl,LucideFlagTriangleLeft:Fl,LucideFlagTriangleRight:Tl,LucideFlame:Ul,LucideFlameKindling:Ol,LucideFlashlight:Zl,LucideFlashlightOff:El,LucideFlaskConical:Gl,LucideFlaskConicalOff:$l,LucideFlaskRound:Nl,LucideFlipHorizontal:Xl,LucideFlipHorizontal2:Wl,LucideFlipVertical:Jl,LucideFlipVertical2:Kl,LucideFlower:Ql,LucideFlower2:Yl,LucideFocus:es,LucideFoldHorizontal:ts,LucideFoldVertical:as,LucideFolder:K2,LucideFolderArchive:os,LucideFolderCheck:cs,LucideFolderClock:ns,LucideFolderClosed:is,LucideFolderCog:f1,LucideFolderCog2:f1,LucideFolderDot:rs,LucideFolderDown:ds,LucideFolderEdit:L1,LucideFolderGit:ls,LucideFolderGit2:hs,LucideFolderHeart:ss,LucideFolderInput:ys,LucideFolderKanban:ps,LucideFolderKey:ks,LucideFolderLock:us,LucideFolderMinus:Ms,LucideFolderOpen:vs,LucideFolderOpenDot:ms,LucideFolderOutput:gs,LucideFolderPen:L1,LucideFolderPlus:Is,LucideFolderRoot:xs,LucideFolderSearch:Ls,LucideFolderSearch2:fs,LucideFolderSymlink:ws,LucideFolderSync:Cs,LucideFolderTree:bs,LucideFolderUp:Ss,LucideFolderX:qs,LucideFolders:As,LucideFootprints:Hs,LucideForklift:zs,LucideFormInput:J1,LucideForward:Vs,LucideFrame:Ps,LucideFramer:js,LucideFrown:_s,LucideFuel:Ds,LucideFullscreen:Bs,LucideFunctionSquare:Pt,LucideGalleryHorizontal:Ts,LucideGalleryHorizontalEnd:Fs,LucideGalleryThumbnails:Rs,LucideGalleryVertical:Us,LucideGalleryVerticalEnd:Os,LucideGamepad:Zs,LucideGamepad2:Es,LucideGanttChart:$s,LucideGanttChartSquare:jt,LucideGauge:Gs,LucideGaugeCircle:Ne,LucideGavel:Ns,LucideGem:Ws,LucideGhost:Xs,LucideGift:Ks,LucideGitBranch:Ys,LucideGitBranchPlus:Js,LucideGitCommit:w1,LucideGitCommitHorizontal:w1,LucideGitCommitVertical:Qs,LucideGitCompare:ty,LucideGitCompareArrows:ey,LucideGitFork:ay,LucideGitGraph:oy,LucideGitMerge:cy,LucideGitPullRequest:ly,LucideGitPullRequestArrow:ny,LucideGitPullRequestClosed:iy,LucideGitPullRequestCreate:dy,LucideGitPullRequestCreateArrow:ry,LucideGitPullRequestDraft:hy,LucideGithub:sy,LucideGitlab:yy,LucideGlassWater:py,LucideGlasses:ky,LucideGlobe:My,LucideGlobe2:u1,LucideGlobeLock:uy,LucideGoal:my,LucideGrab:vy,LucideGraduationCap:gy,LucideGrape:Iy,LucideGrid:ne,LucideGrid2X2:C1,LucideGrid2x2:C1,LucideGrid2x2Check:xy,LucideGrid2x2X:fy,LucideGrid3X3:ne,LucideGrid3x3:ne,LucideGrip:Cy,LucideGripHorizontal:Ly,LucideGripVertical:wy,LucideGroup:by,LucideGuitar:Sy,LucideHam:qy,LucideHammer:Ay,LucideHand:jy,LucideHandCoins:Hy,LucideHandHeart:zy,LucideHandHelping:b1,LucideHandMetal:Vy,LucideHandPlatter:Py,LucideHandshake:_y,LucideHardDrive:Fy,LucideHardDriveDownload:Dy,LucideHardDriveUpload:By,LucideHardHat:Ty,LucideHash:Ry,LucideHaze:Oy,LucideHdmiPort:Uy,LucideHeading:Xy,LucideHeading1:Ey,LucideHeading2:Zy,LucideHeading3:$y,LucideHeading4:Gy,LucideHeading5:Ny,LucideHeading6:Wy,LucideHeadphones:Ky,LucideHeadset:Jy,LucideHeart:ap,LucideHeartCrack:Yy,LucideHeartHandshake:Qy,LucideHeartOff:ep,LucideHeartPulse:tp,LucideHeater:op,LucideHelpCircle:We,LucideHelpingHand:b1,LucideHexagon:cp,LucideHighlighter:np,LucideHistory:ip,LucideHome:rp,LucideHop:hp,LucideHopOff:dp,LucideHospital:lp,LucideHotel:sp,LucideHourglass:yp,LucideIceCream:q1,LucideIceCream2:S1,LucideIceCreamBowl:S1,LucideIceCreamCone:q1,LucideImage:gp,LucideImageDown:pp,LucideImageMinus:kp,LucideImageOff:up,LucideImagePlay:Mp,LucideImagePlus:mp,LucideImageUp:vp,LucideImages:Ip,LucideImport:xp,LucideInbox:fp,LucideIndent:H1,LucideIndentDecrease:A1,LucideIndentIncrease:H1,LucideIndianRupee:Lp,LucideInfinity:wp,LucideInfo:Cp,LucideInspect:Rt,LucideInspectionPanel:bp,LucideInstagram:Sp,LucideItalic:qp,LucideIterationCcw:Ap,LucideIterationCw:Hp,LucideJapaneseYen:zp,LucideJoystick:Vp,LucideKanban:Pp,LucideKanbanSquare:_t,LucideKanbanSquareDashed:qt,LucideKey:Dp,LucideKeyRound:jp,LucideKeySquare:_p,LucideKeyboard:Tp,LucideKeyboardMusic:Bp,LucideKeyboardOff:Fp,LucideLamp:$p,LucideLampCeiling:Rp,LucideLampDesk:Op,LucideLampFloor:Up,LucideLampWallDown:Ep,LucideLampWallUp:Zp,LucideLandPlot:Gp,LucideLandmark:Np,LucideLanguages:Wp,LucideLaptop:Xp,LucideLaptop2:z1,LucideLaptopMinimal:z1,LucideLasso:Jp,LucideLassoSelect:Kp,LucideLaugh:Yp,LucideLayers:tk,LucideLayers2:Qp,LucideLayers3:ek,LucideLayout:W1,LucideLayoutDashboard:ak,LucideLayoutGrid:J2,LucideLayoutList:ok,LucideLayoutPanelLeft:ck,LucideLayoutPanelTop:nk,LucideLayoutTemplate:ik,LucideLeaf:rk,LucideLeafyGreen:dk,LucideLectern:hk,LucideLibrary:sk,LucideLibraryBig:lk,LucideLibrarySquare:Dt,LucideLifeBuoy:yk,LucideLigature:pk,LucideLightbulb:uk,LucideLightbulbOff:kk,LucideLineChart:Mk,LucideLink:gk,LucideLink2:vk,LucideLink2Off:mk,LucideLinkedin:Ik,LucideList:_k,LucideListChecks:xk,LucideListCollapse:fk,LucideListEnd:Lk,LucideListFilter:wk,LucideListMinus:Ck,LucideListMusic:bk,LucideListOrdered:Sk,LucideListPlus:qk,LucideListRestart:Ak,LucideListStart:Hk,LucideListTodo:zk,LucideListTree:Vk,LucideListVideo:Pk,LucideListX:jk,LucideLoader:Bk,LucideLoader2:V1,LucideLoaderCircle:V1,LucideLoaderPinwheel:Dk,LucideLocate:Rk,LucideLocateFixed:Fk,LucideLocateOff:Tk,LucideLock:Uk,LucideLockKeyhole:Ok,LucideLockKeyholeOpen:P1,LucideLockOpen:j1,LucideLogIn:Y2,LucideLogOut:Q2,LucideLollipop:Ek,LucideLuggage:Zk,LucideMSquare:Bt,LucideMagnet:$k,LucideMail:e4,LucideMailCheck:Gk,LucideMailMinus:Nk,LucideMailOpen:Wk,LucideMailPlus:Xk,LucideMailQuestion:Kk,LucideMailSearch:Jk,LucideMailWarning:Yk,LucideMailX:Qk,LucideMailbox:t4,LucideMails:a4,LucideMap:i4,LucideMapPin:c4,LucideMapPinOff:o4,LucideMapPinned:n4,LucideMartini:r4,LucideMaximize:ea,LucideMaximize2:d4,LucideMedal:h4,LucideMegaphone:s4,LucideMegaphoneOff:l4,LucideMeh:y4,LucideMemoryStick:p4,LucideMenu:k4,LucideMenuSquare:Ft,LucideMerge:u4,LucideMessageCircle:b4,LucideMessageCircleCode:M4,LucideMessageCircleDashed:m4,LucideMessageCircleHeart:v4,LucideMessageCircleMore:g4,LucideMessageCircleOff:I4,LucideMessageCirclePlus:x4,LucideMessageCircleQuestion:f4,LucideMessageCircleReply:L4,LucideMessageCircleWarning:w4,LucideMessageCircleX:C4,LucideMessageSquare:O4,LucideMessageSquareCode:S4,LucideMessageSquareDashed:q4,LucideMessageSquareDiff:A4,LucideMessageSquareDot:H4,LucideMessageSquareHeart:z4,LucideMessageSquareMore:V4,LucideMessageSquareOff:P4,LucideMessageSquarePlus:j4,LucideMessageSquareQuote:_4,LucideMessageSquareReply:D4,LucideMessageSquareShare:B4,LucideMessageSquareText:F4,LucideMessageSquareWarning:T4,LucideMessageSquareX:R4,LucideMessagesSquare:U4,LucideMic:Z4,LucideMic2:_1,LucideMicOff:E4,LucideMicVocal:_1,LucideMicroscope:$4,LucideMicrowave:G4,LucideMilestone:N4,LucideMilk:X4,LucideMilkOff:W4,LucideMinimize:J4,LucideMinimize2:K4,LucideMinus:Y4,LucideMinusCircle:re,LucideMinusSquare:Tt,LucideMonitor:lu,LucideMonitorCheck:Q4,LucideMonitorDot:eu,LucideMonitorDown:tu,LucideMonitorOff:au,LucideMonitorPause:ou,LucideMonitorPlay:cu,LucideMonitorSmartphone:nu,LucideMonitorSpeaker:iu,LucideMonitorStop:ru,LucideMonitorUp:du,LucideMonitorX:hu,LucideMoon:yu,LucideMoonStar:su,LucideMoreHorizontal:m1,LucideMoreVertical:M1,LucideMountain:ku,LucideMountainSnow:pu,LucideMouse:Iu,LucideMouseOff:uu,LucideMousePointer:gu,LucideMousePointer2:Mu,LucideMousePointerBan:mu,LucideMousePointerClick:vu,LucideMousePointerSquareDashed:At,LucideMove:Pu,LucideMove3D:D1,LucideMove3d:D1,LucideMoveDiagonal:fu,LucideMoveDiagonal2:xu,LucideMoveDown:Cu,LucideMoveDownLeft:Lu,LucideMoveDownRight:wu,LucideMoveHorizontal:bu,LucideMoveLeft:Su,LucideMoveRight:qu,LucideMoveUp:zu,LucideMoveUpLeft:Au,LucideMoveUpRight:Hu,LucideMoveVertical:Vu,LucideMusic:Bu,LucideMusic2:ju,LucideMusic3:_u,LucideMusic4:Du,LucideNavigation:Ou,LucideNavigation2:Tu,LucideNavigation2Off:Fu,LucideNavigationOff:Ru,LucideNetwork:Uu,LucideNewspaper:Eu,LucideNfc:Zu,LucideNotebook:Wu,LucideNotebookPen:$u,LucideNotebookTabs:Gu,LucideNotebookText:Nu,LucideNotepadText:Ku,LucideNotepadTextDashed:Xu,LucideNut:Yu,LucideNutOff:Ju,LucideOctagon:Qu,LucideOctagonAlert:B1,LucideOctagonPause:F1,LucideOctagonX:T1,LucideOption:e5,LucideOrbit:t5,LucideOrigami:a5,LucideOutdent:A1,LucidePackage:l5,LucidePackage2:o5,LucidePackageCheck:c5,LucidePackageMinus:n5,LucidePackageOpen:i5,LucidePackagePlus:r5,LucidePackageSearch:d5,LucidePackageX:h5,LucidePaintBucket:s5,LucidePaintRoller:y5,LucidePaintbrush:p5,LucidePaintbrush2:R1,LucidePaintbrushVertical:R1,LucidePalette:k5,LucidePalmtree:r2,LucidePanelBottom:m5,LucidePanelBottomClose:u5,LucidePanelBottomDashed:O1,LucidePanelBottomInactive:O1,LucidePanelBottomOpen:M5,LucidePanelLeft:$1,LucidePanelLeftClose:U1,LucidePanelLeftDashed:E1,LucidePanelLeftInactive:E1,LucidePanelLeftOpen:Z1,LucidePanelRight:I5,LucidePanelRightClose:v5,LucidePanelRightDashed:G1,LucidePanelRightInactive:G1,LucidePanelRightOpen:g5,LucidePanelTop:L5,LucidePanelTopClose:x5,LucidePanelTopDashed:N1,LucidePanelTopInactive:N1,LucidePanelTopOpen:f5,LucidePanelsLeftBottom:w5,LucidePanelsLeftRight:y1,LucidePanelsRightBottom:C5,LucidePanelsTopBottom:et,LucidePanelsTopLeft:W1,LucidePaperclip:b5,LucideParentheses:S5,LucideParkingCircle:Ke,LucideParkingCircleOff:Xe,LucideParkingMeter:q5,LucideParkingSquare:Ut,LucideParkingSquareOff:Ot,LucidePartyPopper:A5,LucidePause:T2,LucidePauseCircle:Je,LucidePauseOctagon:F1,LucidePawPrint:H5,LucidePcCase:z5,LucidePen:K1,LucidePenBox:K,LucidePenLine:X1,LucidePenSquare:K,LucidePenTool:V5,LucidePencil:_5,LucidePencilLine:P5,LucidePencilRuler:j5,LucidePentagon:D5,LucidePercent:B5,LucidePercentCircle:Ye,LucidePercentDiamond:k1,LucidePercentSquare:Et,LucidePersonStanding:F5,LucidePhone:$5,LucidePhoneCall:T5,LucidePhoneForwarded:R5,LucidePhoneIncoming:O5,LucidePhoneMissed:U5,LucidePhoneOff:E5,LucidePhoneOutgoing:Z5,LucidePi:G5,LucidePiSquare:Zt,LucidePiano:N5,LucidePickaxe:W5,LucidePictureInPicture:K5,LucidePictureInPicture2:X5,LucidePieChart:J5,LucidePiggyBank:Y5,LucidePilcrow:t3,LucidePilcrowLeft:Q5,LucidePilcrowRight:e3,LucidePilcrowSquare:$t,LucidePill:o3,LucidePillBottle:a3,LucidePin:n3,LucidePinOff:c3,LucidePipette:i3,LucidePizza:r3,LucidePlane:l3,LucidePlaneLanding:d3,LucidePlaneTakeoff:h3,LucidePlay:R2,LucidePlayCircle:Qe,LucidePlaySquare:Gt,LucidePlug:k3,LucidePlug2:s3,LucidePlugZap:p3,LucidePlugZap2:y3,LucidePlus:b2,LucidePlusCircle:e1,LucidePlusSquare:Nt,LucidePocket:M3,LucidePocketKnife:u3,LucidePodcast:m3,LucidePointer:g3,LucidePointerOff:v3,LucidePopcorn:I3,LucidePopsicle:x3,LucidePoundSterling:f3,LucidePower:w3,LucidePowerCircle:t1,LucidePowerOff:L3,LucidePowerSquare:Wt,LucidePresentation:C3,LucidePrinter:b3,LucideProjector:S3,LucideProportions:q3,LucidePuzzle:A3,LucidePyramid:H3,LucideQrCode:z3,LucideQuote:V3,LucideRabbit:P3,LucideRadar:j3,LucideRadiation:_3,LucideRadical:D3,LucideRadio:T3,LucideRadioReceiver:B3,LucideRadioTower:F3,LucideRadius:R3,LucideRailSymbol:O3,LucideRainbow:U3,LucideRat:E3,LucideRatio:Z3,LucideReceipt:Q3,LucideReceiptCent:$3,LucideReceiptEuro:G3,LucideReceiptIndianRupee:N3,LucideReceiptJapaneseYen:W3,LucideReceiptPoundSterling:X3,LucideReceiptRussianRuble:K3,LucideReceiptSwissFranc:J3,LucideReceiptText:Y3,LucideRectangleEllipsis:J1,LucideRectangleHorizontal:e6,LucideRectangleVertical:t6,LucideRecycle:a6,LucideRedo:n6,LucideRedo2:o6,LucideRedoDot:c6,LucideRefreshCcw:r6,LucideRefreshCcwDot:i6,LucideRefreshCw:ta,LucideRefreshCwOff:d6,LucideRefrigerator:h6,LucideRegex:l6,LucideRemoveFormatting:s6,LucideRepeat:k6,LucideRepeat1:y6,LucideRepeat2:p6,LucideReplace:M6,LucideReplaceAll:u6,LucideReply:v6,LucideReplyAll:m6,LucideRewind:g6,LucideRibbon:I6,LucideRocket:x6,LucideRockingChair:f6,LucideRollerCoaster:L6,LucideRotate3D:Y1,LucideRotate3d:Y1,LucideRotateCcw:C6,LucideRotateCcwSquare:w6,LucideRotateCw:S6,LucideRotateCwSquare:b6,LucideRoute:A6,LucideRouteOff:q6,LucideRouter:H6,LucideRows:Q1,LucideRows2:Q1,LucideRows3:et,LucideRows4:z6,LucideRss:V6,LucideRuler:P6,LucideRussianRuble:j6,LucideSailboat:_6,LucideSalad:D6,LucideSandwich:B6,LucideSatellite:T6,LucideSatelliteDish:F6,LucideSave:O6,LucideSaveAll:R6,LucideScale:U6,LucideScale3D:tt,LucideScale3d:tt,LucideScaling:E6,LucideScan:K6,LucideScanBarcode:Z6,LucideScanEye:$6,LucideScanFace:G6,LucideScanLine:N6,LucideScanSearch:W6,LucideScanText:X6,LucideScatterChart:J6,LucideSchool:Y6,LucideSchool2:h2,LucideScissors:e8,LucideScissorsLineDashed:Q6,LucideScissorsSquare:Xt,LucideScissorsSquareDashedBottom:It,LucideScreenShare:a8,LucideScreenShareOff:t8,LucideScroll:c8,LucideScrollText:o8,LucideSearch:h8,LucideSearchCheck:n8,LucideSearchCode:i8,LucideSearchSlash:r8,LucideSearchX:d8,LucideSection:l8,LucideSend:y8,LucideSendHorizonal:at,LucideSendHorizontal:at,LucideSendToBack:s8,LucideSeparatorHorizontal:p8,LucideSeparatorVertical:k8,LucideServer:v8,LucideServerCog:u8,LucideServerCrash:M8,LucideServerOff:m8,LucideSettings:aa,LucideSettings2:g8,LucideShapes:I8,LucideShare:f8,LucideShare2:x8,LucideSheet:L8,LucideShell:w8,LucideShield:j8,LucideShieldAlert:C8,LucideShieldBan:b8,LucideShieldCheck:S8,LucideShieldClose:ot,LucideShieldEllipsis:q8,LucideShieldHalf:A8,LucideShieldMinus:H8,LucideShieldOff:z8,LucideShieldPlus:V8,LucideShieldQuestion:P8,LucideShieldX:ot,LucideShip:D8,LucideShipWheel:_8,LucideShirt:B8,LucideShoppingBag:F8,LucideShoppingBasket:T8,LucideShoppingCart:R8,LucideShovel:O8,LucideShowerHead:U8,LucideShrink:E8,LucideShrub:Z8,LucideShuffle:$8,LucideSidebar:$1,LucideSidebarClose:U1,LucideSidebarOpen:Z1,LucideSigma:G8,LucideSigmaSquare:Kt,LucideSignal:J8,LucideSignalHigh:N8,LucideSignalLow:W8,LucideSignalMedium:X8,LucideSignalZero:K8,LucideSignpost:Q8,LucideSignpostBig:Y8,LucideSiren:e7,LucideSkipBack:t7,LucideSkipForward:a7,LucideSkull:o7,LucideSlack:c7,LucideSlash:n7,LucideSlashSquare:Jt,LucideSlice:i7,LucideSliders:ct,LucideSlidersHorizontal:r7,LucideSlidersVertical:ct,LucideSmartphone:l7,LucideSmartphoneCharging:d7,LucideSmartphoneNfc:h7,LucideSmile:y7,LucideSmilePlus:s7,LucideSnail:p7,LucideSnowflake:k7,LucideSofa:u7,LucideSortAsc:Le,LucideSortDesc:Ie,LucideSoup:M7,LucideSpace:m7,LucideSpade:v7,LucideSparkle:g7,LucideSparkles:nt,LucideSpeaker:I7,LucideSpeech:x7,LucideSpellCheck:L7,LucideSpellCheck2:f7,LucideSpline:w7,LucideSplit:C7,LucideSplitSquareHorizontal:Yt,LucideSplitSquareVertical:Qt,LucideSprayCan:b7,LucideSprout:S7,LucideSquare:V7,LucideSquareActivity:it,LucideSquareArrowDown:ht,LucideSquareArrowDownLeft:rt,LucideSquareArrowDownRight:dt,LucideSquareArrowLeft:lt,LucideSquareArrowOutDownLeft:st,LucideSquareArrowOutDownRight:yt,LucideSquareArrowOutUpLeft:pt,LucideSquareArrowOutUpRight:kt,LucideSquareArrowRight:ut,LucideSquareArrowUp:vt,LucideSquareArrowUpLeft:Mt,LucideSquareArrowUpRight:mt,LucideSquareAsterisk:gt,LucideSquareBottomDashedScissors:It,LucideSquareCheck:ft,LucideSquareCheckBig:xt,LucideSquareChevronDown:Lt,LucideSquareChevronLeft:wt,LucideSquareChevronRight:Ct,LucideSquareChevronUp:bt,LucideSquareCode:St,LucideSquareDashedBottom:A7,LucideSquareDashedBottomCode:q7,LucideSquareDashedKanban:qt,LucideSquareDashedMousePointer:At,LucideSquareDivide:Ht,LucideSquareDot:zt,LucideSquareEqual:Vt,LucideSquareFunction:Pt,LucideSquareGanttChart:jt,LucideSquareKanban:_t,LucideSquareLibrary:Dt,LucideSquareM:Bt,LucideSquareMenu:Ft,LucideSquareMinus:Tt,LucideSquareMousePointer:Rt,LucideSquareParking:Ut,LucideSquareParkingOff:Ot,LucideSquarePen:K,LucideSquarePercent:Et,LucideSquarePi:Zt,LucideSquarePilcrow:$t,LucideSquarePlay:Gt,LucideSquarePlus:Nt,LucideSquarePower:Wt,LucideSquareRadical:H7,LucideSquareScissors:Xt,LucideSquareSigma:Kt,LucideSquareSlash:Jt,LucideSquareSplitHorizontal:Yt,LucideSquareSplitVertical:Qt,LucideSquareStack:z7,LucideSquareTerminal:e2,LucideSquareUser:a2,LucideSquareUserRound:t2,LucideSquareX:o2,LucideSquircle:P7,LucideSquirrel:j7,LucideStamp:_7,LucideStar:F7,LucideStarHalf:D7,LucideStarOff:B7,LucideStars:nt,LucideStepBack:T7,LucideStepForward:R7,LucideStethoscope:O7,LucideSticker:U7,LucideStickyNote:E7,LucideStopCircle:o1,LucideStore:Z7,LucideStretchHorizontal:$7,LucideStretchVertical:G7,LucideStrikethrough:N7,LucideSubscript:W7,LucideSubtitles:ze,LucideSun:Q7,LucideSunDim:X7,LucideSunMedium:K7,LucideSunMoon:J7,LucideSunSnow:Y7,LucideSunrise:e9,LucideSunset:t9,LucideSuperscript:a9,LucideSwatchBook:o9,LucideSwissFranc:c9,LucideSwitchCamera:n9,LucideSword:i9,LucideSwords:r9,LucideSyringe:d9,LucideTable:u9,LucideTable2:h9,LucideTableCellsMerge:l9,LucideTableCellsSplit:s9,LucideTableColumnsSplit:y9,LucideTableProperties:p9,LucideTableRowsSplit:k9,LucideTablet:m9,LucideTabletSmartphone:M9,LucideTablets:v9,LucideTag:g9,LucideTags:I9,LucideTally1:x9,LucideTally2:f9,LucideTally3:L9,LucideTally4:w9,LucideTally5:C9,LucideTangent:b9,LucideTarget:S9,LucideTelescope:q9,LucideTent:H9,LucideTentTree:A9,LucideTerminal:z9,LucideTerminalSquare:e2,LucideTestTube:V9,LucideTestTube2:c2,LucideTestTubeDiagonal:c2,LucideTestTubes:P9,LucideText:F9,LucideTextCursor:_9,LucideTextCursorInput:j9,LucideTextQuote:D9,LucideTextSearch:B9,LucideTextSelect:n2,LucideTextSelection:n2,LucideTheater:T9,LucideThermometer:U9,LucideThermometerSnowflake:R9,LucideThermometerSun:O9,LucideThumbsDown:E9,LucideThumbsUp:Z9,LucideTicket:J9,LucideTicketCheck:$9,LucideTicketMinus:G9,LucideTicketPercent:N9,LucideTicketPlus:W9,LucideTicketSlash:X9,LucideTicketX:K9,LucideTimer:eM,LucideTimerOff:Y9,LucideTimerReset:Q9,LucideToggleLeft:tM,LucideToggleRight:aM,LucideTornado:oM,LucideTorus:cM,LucideTouchpad:iM,LucideTouchpadOff:nM,LucideTowerControl:rM,LucideToyBrick:dM,LucideTractor:hM,LucideTrafficCone:lM,LucideTrain:i2,LucideTrainFront:yM,LucideTrainFrontTunnel:sM,LucideTrainTrack:pM,LucideTramFront:i2,LucideTrash:uM,LucideTrash2:kM,LucideTreeDeciduous:MM,LucideTreePalm:r2,LucideTreePine:mM,LucideTrees:vM,LucideTrello:gM,LucideTrendingDown:IM,LucideTrendingUp:xM,LucideTriangle:LM,LucideTriangleAlert:d2,LucideTriangleRight:fM,LucideTrophy:wM,LucideTruck:CM,LucideTurtle:bM,LucideTv:qM,LucideTv2:SM,LucideTwitch:AM,LucideTwitter:HM,LucideType:zM,LucideUmbrella:PM,LucideUmbrellaOff:VM,LucideUnderline:jM,LucideUndo:BM,LucideUndo2:_M,LucideUndoDot:DM,LucideUnfoldHorizontal:FM,LucideUnfoldVertical:TM,LucideUngroup:RM,LucideUniversity:h2,LucideUnlink:UM,LucideUnlink2:OM,LucideUnlock:j1,LucideUnlockKeyhole:P1,LucideUnplug:EM,LucideUpload:ZM,LucideUploadCloud:h1,LucideUsb:$M,LucideUser:oa,LucideUser2:u2,LucideUserCheck:GM,LucideUserCheck2:l2,LucideUserCircle:n1,LucideUserCircle2:c1,LucideUserCog:NM,LucideUserCog2:s2,LucideUserMinus:WM,LucideUserMinus2:y2,LucideUserPlus:XM,LucideUserPlus2:p2,LucideUserRound:u2,LucideUserRoundCheck:l2,LucideUserRoundCog:s2,LucideUserRoundMinus:y2,LucideUserRoundPlus:p2,LucideUserRoundSearch:KM,LucideUserRoundX:k2,LucideUserSearch:JM,LucideUserSquare:a2,LucideUserSquare2:t2,LucideUserX:YM,LucideUserX2:k2,LucideUsers:QM,LucideUsers2:M2,LucideUsersRound:M2,LucideUtensils:tm,LucideUtensilsCrossed:em,LucideUtilityPole:am,LucideVariable:om,LucideVault:cm,LucideVegan:nm,LucideVenetianMask:im,LucideVerified:be,LucideVibrate:dm,LucideVibrateOff:rm,LucideVideo:lm,LucideVideoOff:hm,LucideVideotape:sm,LucideView:ym,LucideVoicemail:pm,LucideVolume:um,LucideVolume1:km,LucideVolume2:O2,LucideVolumeX:U2,LucideVote:Mm,LucideWallet:vm,LucideWallet2:m2,LucideWalletCards:mm,LucideWalletMinimal:m2,LucideWallpaper:gm,LucideWand:Im,LucideWand2:v2,LucideWandSparkles:v2,LucideWarehouse:xm,LucideWashingMachine:fm,LucideWatch:Lm,LucideWaves:wm,LucideWaypoints:Cm,LucideWebcam:bm,LucideWebhook:qm,LucideWebhookOff:Sm,LucideWeight:Am,LucideWheat:zm,LucideWheatOff:Hm,LucideWholeWord:Vm,LucideWifi:jm,LucideWifiOff:Pm,LucideWind:_m,LucideWine:Bm,LucideWineOff:Dm,LucideWorkflow:Fm,LucideWorm:Tm,LucideWrapText:Rm,LucideWrench:Om,LucideX:E2,LucideXCircle:de,LucideXOctagon:T1,LucideXSquare:o2,LucideYoutube:Um,LucideZap:Zm,LucideZapOff:Em,LucideZoomIn:$m,LucideZoomOut:Gm,Luggage:Zk,LuggageIcon:Zk,MSquare:Bt,MSquareIcon:Bt,Magnet:$k,MagnetIcon:$k,Mail:e4,MailCheck:Gk,MailCheckIcon:Gk,MailIcon:e4,MailMinus:Nk,MailMinusIcon:Nk,MailOpen:Wk,MailOpenIcon:Wk,MailPlus:Xk,MailPlusIcon:Xk,MailQuestion:Kk,MailQuestionIcon:Kk,MailSearch:Jk,MailSearchIcon:Jk,MailWarning:Yk,MailWarningIcon:Yk,MailX:Qk,MailXIcon:Qk,Mailbox:t4,MailboxIcon:t4,Mails:a4,MailsIcon:a4,Map:i4,MapIcon:i4,MapPin:c4,MapPinIcon:c4,MapPinOff:o4,MapPinOffIcon:o4,MapPinned:n4,MapPinnedIcon:n4,Martini:r4,MartiniIcon:r4,Maximize:ea,Maximize2:d4,Maximize2Icon:d4,MaximizeIcon:ea,Medal:h4,MedalIcon:h4,Megaphone:s4,MegaphoneIcon:s4,MegaphoneOff:l4,MegaphoneOffIcon:l4,Meh:y4,MehIcon:y4,MemoryStick:p4,MemoryStickIcon:p4,Menu:k4,MenuIcon:k4,MenuSquare:Ft,MenuSquareIcon:Ft,Merge:u4,MergeIcon:u4,MessageCircle:b4,MessageCircleCode:M4,MessageCircleCodeIcon:M4,MessageCircleDashed:m4,MessageCircleDashedIcon:m4,MessageCircleHeart:v4,MessageCircleHeartIcon:v4,MessageCircleIcon:b4,MessageCircleMore:g4,MessageCircleMoreIcon:g4,MessageCircleOff:I4,MessageCircleOffIcon:I4,MessageCirclePlus:x4,MessageCirclePlusIcon:x4,MessageCircleQuestion:f4,MessageCircleQuestionIcon:f4,MessageCircleReply:L4,MessageCircleReplyIcon:L4,MessageCircleWarning:w4,MessageCircleWarningIcon:w4,MessageCircleX:C4,MessageCircleXIcon:C4,MessageSquare:O4,MessageSquareCode:S4,MessageSquareCodeIcon:S4,MessageSquareDashed:q4,MessageSquareDashedIcon:q4,MessageSquareDiff:A4,MessageSquareDiffIcon:A4,MessageSquareDot:H4,MessageSquareDotIcon:H4,MessageSquareHeart:z4,MessageSquareHeartIcon:z4,MessageSquareIcon:O4,MessageSquareMore:V4,MessageSquareMoreIcon:V4,MessageSquareOff:P4,MessageSquareOffIcon:P4,MessageSquarePlus:j4,MessageSquarePlusIcon:j4,MessageSquareQuote:_4,MessageSquareQuoteIcon:_4,MessageSquareReply:D4,MessageSquareReplyIcon:D4,MessageSquareShare:B4,MessageSquareShareIcon:B4,MessageSquareText:F4,MessageSquareTextIcon:F4,MessageSquareWarning:T4,MessageSquareWarningIcon:T4,MessageSquareX:R4,MessageSquareXIcon:R4,MessagesSquare:U4,MessagesSquareIcon:U4,Mic:Z4,Mic2:_1,Mic2Icon:_1,MicIcon:Z4,MicOff:E4,MicOffIcon:E4,MicVocal:_1,MicVocalIcon:_1,Microscope:$4,MicroscopeIcon:$4,Microwave:G4,MicrowaveIcon:G4,Milestone:N4,MilestoneIcon:N4,Milk:X4,MilkIcon:X4,MilkOff:W4,MilkOffIcon:W4,Minimize:J4,Minimize2:K4,Minimize2Icon:K4,MinimizeIcon:J4,Minus:Y4,MinusCircle:re,MinusCircleIcon:re,MinusIcon:Y4,MinusSquare:Tt,MinusSquareIcon:Tt,Monitor:lu,MonitorCheck:Q4,MonitorCheckIcon:Q4,MonitorDot:eu,MonitorDotIcon:eu,MonitorDown:tu,MonitorDownIcon:tu,MonitorIcon:lu,MonitorOff:au,MonitorOffIcon:au,MonitorPause:ou,MonitorPauseIcon:ou,MonitorPlay:cu,MonitorPlayIcon:cu,MonitorSmartphone:nu,MonitorSmartphoneIcon:nu,MonitorSpeaker:iu,MonitorSpeakerIcon:iu,MonitorStop:ru,MonitorStopIcon:ru,MonitorUp:du,MonitorUpIcon:du,MonitorX:hu,MonitorXIcon:hu,Moon:yu,MoonIcon:yu,MoonStar:su,MoonStarIcon:su,MoreHorizontal:m1,MoreHorizontalIcon:m1,MoreVertical:M1,MoreVerticalIcon:M1,Mountain:ku,MountainIcon:ku,MountainSnow:pu,MountainSnowIcon:pu,Mouse:Iu,MouseIcon:Iu,MouseOff:uu,MouseOffIcon:uu,MousePointer:gu,MousePointer2:Mu,MousePointer2Icon:Mu,MousePointerBan:mu,MousePointerBanIcon:mu,MousePointerClick:vu,MousePointerClickIcon:vu,MousePointerIcon:gu,MousePointerSquareDashed:At,MousePointerSquareDashedIcon:At,Move:Pu,Move3D:D1,Move3DIcon:D1,Move3d:D1,Move3dIcon:D1,MoveDiagonal:fu,MoveDiagonal2:xu,MoveDiagonal2Icon:xu,MoveDiagonalIcon:fu,MoveDown:Cu,MoveDownIcon:Cu,MoveDownLeft:Lu,MoveDownLeftIcon:Lu,MoveDownRight:wu,MoveDownRightIcon:wu,MoveHorizontal:bu,MoveHorizontalIcon:bu,MoveIcon:Pu,MoveLeft:Su,MoveLeftIcon:Su,MoveRight:qu,MoveRightIcon:qu,MoveUp:zu,MoveUpIcon:zu,MoveUpLeft:Au,MoveUpLeftIcon:Au,MoveUpRight:Hu,MoveUpRightIcon:Hu,MoveVertical:Vu,MoveVerticalIcon:Vu,Music:Bu,Music2:ju,Music2Icon:ju,Music3:_u,Music3Icon:_u,Music4:Du,Music4Icon:Du,MusicIcon:Bu,Navigation:Ou,Navigation2:Tu,Navigation2Icon:Tu,Navigation2Off:Fu,Navigation2OffIcon:Fu,NavigationIcon:Ou,NavigationOff:Ru,NavigationOffIcon:Ru,Network:Uu,NetworkIcon:Uu,Newspaper:Eu,NewspaperIcon:Eu,Nfc:Zu,NfcIcon:Zu,Notebook:Wu,NotebookIcon:Wu,NotebookPen:$u,NotebookPenIcon:$u,NotebookTabs:Gu,NotebookTabsIcon:Gu,NotebookText:Nu,NotebookTextIcon:Nu,NotepadText:Ku,NotepadTextDashed:Xu,NotepadTextDashedIcon:Xu,NotepadTextIcon:Ku,Nut:Yu,NutIcon:Yu,NutOff:Ju,NutOffIcon:Ju,Octagon:Qu,OctagonAlert:B1,OctagonAlertIcon:B1,OctagonIcon:Qu,OctagonPause:F1,OctagonPauseIcon:F1,OctagonX:T1,OctagonXIcon:T1,Option:e5,OptionIcon:e5,Orbit:t5,OrbitIcon:t5,Origami:a5,OrigamiIcon:a5,Outdent:A1,OutdentIcon:A1,Package:l5,Package2:o5,Package2Icon:o5,PackageCheck:c5,PackageCheckIcon:c5,PackageIcon:l5,PackageMinus:n5,PackageMinusIcon:n5,PackageOpen:i5,PackageOpenIcon:i5,PackagePlus:r5,PackagePlusIcon:r5,PackageSearch:d5,PackageSearchIcon:d5,PackageX:h5,PackageXIcon:h5,PaintBucket:s5,PaintBucketIcon:s5,PaintRoller:y5,PaintRollerIcon:y5,Paintbrush:p5,Paintbrush2:R1,Paintbrush2Icon:R1,PaintbrushIcon:p5,PaintbrushVertical:R1,PaintbrushVerticalIcon:R1,Palette:k5,PaletteIcon:k5,Palmtree:r2,PalmtreeIcon:r2,PanelBottom:m5,PanelBottomClose:u5,PanelBottomCloseIcon:u5,PanelBottomDashed:O1,PanelBottomDashedIcon:O1,PanelBottomIcon:m5,PanelBottomInactive:O1,PanelBottomInactiveIcon:O1,PanelBottomOpen:M5,PanelBottomOpenIcon:M5,PanelLeft:$1,PanelLeftClose:U1,PanelLeftCloseIcon:U1,PanelLeftDashed:E1,PanelLeftDashedIcon:E1,PanelLeftIcon:$1,PanelLeftInactive:E1,PanelLeftInactiveIcon:E1,PanelLeftOpen:Z1,PanelLeftOpenIcon:Z1,PanelRight:I5,PanelRightClose:v5,PanelRightCloseIcon:v5,PanelRightDashed:G1,PanelRightDashedIcon:G1,PanelRightIcon:I5,PanelRightInactive:G1,PanelRightInactiveIcon:G1,PanelRightOpen:g5,PanelRightOpenIcon:g5,PanelTop:L5,PanelTopClose:x5,PanelTopCloseIcon:x5,PanelTopDashed:N1,PanelTopDashedIcon:N1,PanelTopIcon:L5,PanelTopInactive:N1,PanelTopInactiveIcon:N1,PanelTopOpen:f5,PanelTopOpenIcon:f5,PanelsLeftBottom:w5,PanelsLeftBottomIcon:w5,PanelsLeftRight:y1,PanelsLeftRightIcon:y1,PanelsRightBottom:C5,PanelsRightBottomIcon:C5,PanelsTopBottom:et,PanelsTopBottomIcon:et,PanelsTopLeft:W1,PanelsTopLeftIcon:W1,Paperclip:b5,PaperclipIcon:b5,Parentheses:S5,ParenthesesIcon:S5,ParkingCircle:Ke,ParkingCircleIcon:Ke,ParkingCircleOff:Xe,ParkingCircleOffIcon:Xe,ParkingMeter:q5,ParkingMeterIcon:q5,ParkingSquare:Ut,ParkingSquareIcon:Ut,ParkingSquareOff:Ot,ParkingSquareOffIcon:Ot,PartyPopper:A5,PartyPopperIcon:A5,Pause:T2,PauseCircle:Je,PauseCircleIcon:Je,PauseIcon:T2,PauseOctagon:F1,PauseOctagonIcon:F1,PawPrint:H5,PawPrintIcon:H5,PcCase:z5,PcCaseIcon:z5,Pen:K1,PenBox:K,PenBoxIcon:K,PenIcon:K1,PenLine:X1,PenLineIcon:X1,PenSquare:K,PenSquareIcon:K,PenTool:V5,PenToolIcon:V5,Pencil:_5,PencilIcon:_5,PencilLine:P5,PencilLineIcon:P5,PencilRuler:j5,PencilRulerIcon:j5,Pentagon:D5,PentagonIcon:D5,Percent:B5,PercentCircle:Ye,PercentCircleIcon:Ye,PercentDiamond:k1,PercentDiamondIcon:k1,PercentIcon:B5,PercentSquare:Et,PercentSquareIcon:Et,PersonStanding:F5,PersonStandingIcon:F5,Phone:$5,PhoneCall:T5,PhoneCallIcon:T5,PhoneForwarded:R5,PhoneForwardedIcon:R5,PhoneIcon:$5,PhoneIncoming:O5,PhoneIncomingIcon:O5,PhoneMissed:U5,PhoneMissedIcon:U5,PhoneOff:E5,PhoneOffIcon:E5,PhoneOutgoing:Z5,PhoneOutgoingIcon:Z5,Pi:G5,PiIcon:G5,PiSquare:Zt,PiSquareIcon:Zt,Piano:N5,PianoIcon:N5,Pickaxe:W5,PickaxeIcon:W5,PictureInPicture:K5,PictureInPicture2:X5,PictureInPicture2Icon:X5,PictureInPictureIcon:K5,PieChart:J5,PieChartIcon:J5,PiggyBank:Y5,PiggyBankIcon:Y5,Pilcrow:t3,PilcrowIcon:t3,PilcrowLeft:Q5,PilcrowLeftIcon:Q5,PilcrowRight:e3,PilcrowRightIcon:e3,PilcrowSquare:$t,PilcrowSquareIcon:$t,Pill:o3,PillBottle:a3,PillBottleIcon:a3,PillIcon:o3,Pin:n3,PinIcon:n3,PinOff:c3,PinOffIcon:c3,Pipette:i3,PipetteIcon:i3,Pizza:r3,PizzaIcon:r3,Plane:l3,PlaneIcon:l3,PlaneLanding:d3,PlaneLandingIcon:d3,PlaneTakeoff:h3,PlaneTakeoffIcon:h3,Play:R2,PlayCircle:Qe,PlayCircleIcon:Qe,PlayIcon:R2,PlaySquare:Gt,PlaySquareIcon:Gt,Plug:k3,Plug2:s3,Plug2Icon:s3,PlugIcon:k3,PlugZap:p3,PlugZap2:y3,PlugZap2Icon:y3,PlugZapIcon:p3,Plus:b2,PlusCircle:e1,PlusCircleIcon:e1,PlusIcon:b2,PlusSquare:Nt,PlusSquareIcon:Nt,Pocket:M3,PocketIcon:M3,PocketKnife:u3,PocketKnifeIcon:u3,Podcast:m3,PodcastIcon:m3,Pointer:g3,PointerIcon:g3,PointerOff:v3,PointerOffIcon:v3,Popcorn:I3,PopcornIcon:I3,Popsicle:x3,PopsicleIcon:x3,PoundSterling:f3,PoundSterlingIcon:f3,Power:w3,PowerCircle:t1,PowerCircleIcon:t1,PowerIcon:w3,PowerOff:L3,PowerOffIcon:L3,PowerSquare:Wt,PowerSquareIcon:Wt,Presentation:C3,PresentationIcon:C3,Printer:b3,PrinterIcon:b3,Projector:S3,ProjectorIcon:S3,Proportions:q3,ProportionsIcon:q3,Puzzle:A3,PuzzleIcon:A3,Pyramid:H3,PyramidIcon:H3,QrCode:z3,QrCodeIcon:z3,Quote:V3,QuoteIcon:V3,Rabbit:P3,RabbitIcon:P3,Radar:j3,RadarIcon:j3,Radiation:_3,RadiationIcon:_3,Radical:D3,RadicalIcon:D3,Radio:T3,RadioIcon:T3,RadioReceiver:B3,RadioReceiverIcon:B3,RadioTower:F3,RadioTowerIcon:F3,Radius:R3,RadiusIcon:R3,RailSymbol:O3,RailSymbolIcon:O3,Rainbow:U3,RainbowIcon:U3,Rat:E3,RatIcon:E3,Ratio:Z3,RatioIcon:Z3,Receipt:Q3,ReceiptCent:$3,ReceiptCentIcon:$3,ReceiptEuro:G3,ReceiptEuroIcon:G3,ReceiptIcon:Q3,ReceiptIndianRupee:N3,ReceiptIndianRupeeIcon:N3,ReceiptJapaneseYen:W3,ReceiptJapaneseYenIcon:W3,ReceiptPoundSterling:X3,ReceiptPoundSterlingIcon:X3,ReceiptRussianRuble:K3,ReceiptRussianRubleIcon:K3,ReceiptSwissFranc:J3,ReceiptSwissFrancIcon:J3,ReceiptText:Y3,ReceiptTextIcon:Y3,RectangleEllipsis:J1,RectangleEllipsisIcon:J1,RectangleHorizontal:e6,RectangleHorizontalIcon:e6,RectangleVertical:t6,RectangleVerticalIcon:t6,Recycle:a6,RecycleIcon:a6,Redo:n6,Redo2:o6,Redo2Icon:o6,RedoDot:c6,RedoDotIcon:c6,RedoIcon:n6,RefreshCcw:r6,RefreshCcwDot:i6,RefreshCcwDotIcon:i6,RefreshCcwIcon:r6,RefreshCw:ta,RefreshCwIcon:ta,RefreshCwOff:d6,RefreshCwOffIcon:d6,Refrigerator:h6,RefrigeratorIcon:h6,Regex:l6,RegexIcon:l6,RemoveFormatting:s6,RemoveFormattingIcon:s6,Repeat:k6,Repeat1:y6,Repeat1Icon:y6,Repeat2:p6,Repeat2Icon:p6,RepeatIcon:k6,Replace:M6,ReplaceAll:u6,ReplaceAllIcon:u6,ReplaceIcon:M6,Reply:v6,ReplyAll:m6,ReplyAllIcon:m6,ReplyIcon:v6,Rewind:g6,RewindIcon:g6,Ribbon:I6,RibbonIcon:I6,Rocket:x6,RocketIcon:x6,RockingChair:f6,RockingChairIcon:f6,RollerCoaster:L6,RollerCoasterIcon:L6,Rotate3D:Y1,Rotate3DIcon:Y1,Rotate3d:Y1,Rotate3dIcon:Y1,RotateCcw:C6,RotateCcwIcon:C6,RotateCcwSquare:w6,RotateCcwSquareIcon:w6,RotateCw:S6,RotateCwIcon:S6,RotateCwSquare:b6,RotateCwSquareIcon:b6,Route:A6,RouteIcon:A6,RouteOff:q6,RouteOffIcon:q6,Router:H6,RouterIcon:H6,Rows:Q1,Rows2:Q1,Rows2Icon:Q1,Rows3:et,Rows3Icon:et,Rows4:z6,Rows4Icon:z6,RowsIcon:Q1,Rss:V6,RssIcon:V6,Ruler:P6,RulerIcon:P6,RussianRuble:j6,RussianRubleIcon:j6,Sailboat:_6,SailboatIcon:_6,Salad:D6,SaladIcon:D6,Sandwich:B6,SandwichIcon:B6,Satellite:T6,SatelliteDish:F6,SatelliteDishIcon:F6,SatelliteIcon:T6,Save:O6,SaveAll:R6,SaveAllIcon:R6,SaveIcon:O6,Scale:U6,Scale3D:tt,Scale3DIcon:tt,Scale3d:tt,Scale3dIcon:tt,ScaleIcon:U6,Scaling:E6,ScalingIcon:E6,Scan:K6,ScanBarcode:Z6,ScanBarcodeIcon:Z6,ScanEye:$6,ScanEyeIcon:$6,ScanFace:G6,ScanFaceIcon:G6,ScanIcon:K6,ScanLine:N6,ScanLineIcon:N6,ScanSearch:W6,ScanSearchIcon:W6,ScanText:X6,ScanTextIcon:X6,ScatterChart:J6,ScatterChartIcon:J6,School:Y6,School2:h2,School2Icon:h2,SchoolIcon:Y6,Scissors:e8,ScissorsIcon:e8,ScissorsLineDashed:Q6,ScissorsLineDashedIcon:Q6,ScissorsSquare:Xt,ScissorsSquareDashedBottom:It,ScissorsSquareDashedBottomIcon:It,ScissorsSquareIcon:Xt,ScreenShare:a8,ScreenShareIcon:a8,ScreenShareOff:t8,ScreenShareOffIcon:t8,Scroll:c8,ScrollIcon:c8,ScrollText:o8,ScrollTextIcon:o8,Search:h8,SearchCheck:n8,SearchCheckIcon:n8,SearchCode:i8,SearchCodeIcon:i8,SearchIcon:h8,SearchSlash:r8,SearchSlashIcon:r8,SearchX:d8,SearchXIcon:d8,Section:l8,SectionIcon:l8,Send:y8,SendHorizonal:at,SendHorizonalIcon:at,SendHorizontal:at,SendHorizontalIcon:at,SendIcon:y8,SendToBack:s8,SendToBackIcon:s8,SeparatorHorizontal:p8,SeparatorHorizontalIcon:p8,SeparatorVertical:k8,SeparatorVerticalIcon:k8,Server:v8,ServerCog:u8,ServerCogIcon:u8,ServerCrash:M8,ServerCrashIcon:M8,ServerIcon:v8,ServerOff:m8,ServerOffIcon:m8,Settings:aa,Settings2:g8,Settings2Icon:g8,SettingsIcon:aa,Shapes:I8,ShapesIcon:I8,Share:f8,Share2:x8,Share2Icon:x8,ShareIcon:f8,Sheet:L8,SheetIcon:L8,Shell:w8,ShellIcon:w8,Shield:j8,ShieldAlert:C8,ShieldAlertIcon:C8,ShieldBan:b8,ShieldBanIcon:b8,ShieldCheck:S8,ShieldCheckIcon:S8,ShieldClose:ot,ShieldCloseIcon:ot,ShieldEllipsis:q8,ShieldEllipsisIcon:q8,ShieldHalf:A8,ShieldHalfIcon:A8,ShieldIcon:j8,ShieldMinus:H8,ShieldMinusIcon:H8,ShieldOff:z8,ShieldOffIcon:z8,ShieldPlus:V8,ShieldPlusIcon:V8,ShieldQuestion:P8,ShieldQuestionIcon:P8,ShieldX:ot,ShieldXIcon:ot,Ship:D8,ShipIcon:D8,ShipWheel:_8,ShipWheelIcon:_8,Shirt:B8,ShirtIcon:B8,ShoppingBag:F8,ShoppingBagIcon:F8,ShoppingBasket:T8,ShoppingBasketIcon:T8,ShoppingCart:R8,ShoppingCartIcon:R8,Shovel:O8,ShovelIcon:O8,ShowerHead:U8,ShowerHeadIcon:U8,Shrink:E8,ShrinkIcon:E8,Shrub:Z8,ShrubIcon:Z8,Shuffle:$8,ShuffleIcon:$8,Sidebar:$1,SidebarClose:U1,SidebarCloseIcon:U1,SidebarIcon:$1,SidebarOpen:Z1,SidebarOpenIcon:Z1,Sigma:G8,SigmaIcon:G8,SigmaSquare:Kt,SigmaSquareIcon:Kt,Signal:J8,SignalHigh:N8,SignalHighIcon:N8,SignalIcon:J8,SignalLow:W8,SignalLowIcon:W8,SignalMedium:X8,SignalMediumIcon:X8,SignalZero:K8,SignalZeroIcon:K8,Signpost:Q8,SignpostBig:Y8,SignpostBigIcon:Y8,SignpostIcon:Q8,Siren:e7,SirenIcon:e7,SkipBack:t7,SkipBackIcon:t7,SkipForward:a7,SkipForwardIcon:a7,Skull:o7,SkullIcon:o7,Slack:c7,SlackIcon:c7,Slash:n7,SlashIcon:n7,SlashSquare:Jt,SlashSquareIcon:Jt,Slice:i7,SliceIcon:i7,Sliders:ct,SlidersHorizontal:r7,SlidersHorizontalIcon:r7,SlidersIcon:ct,SlidersVertical:ct,SlidersVerticalIcon:ct,Smartphone:l7,SmartphoneCharging:d7,SmartphoneChargingIcon:d7,SmartphoneIcon:l7,SmartphoneNfc:h7,SmartphoneNfcIcon:h7,Smile:y7,SmileIcon:y7,SmilePlus:s7,SmilePlusIcon:s7,Snail:p7,SnailIcon:p7,Snowflake:k7,SnowflakeIcon:k7,Sofa:u7,SofaIcon:u7,SortAsc:Le,SortAscIcon:Le,SortDesc:Ie,SortDescIcon:Ie,Soup:M7,SoupIcon:M7,Space:m7,SpaceIcon:m7,Spade:v7,SpadeIcon:v7,Sparkle:g7,SparkleIcon:g7,Sparkles:nt,SparklesIcon:nt,Speaker:I7,SpeakerIcon:I7,Speech:x7,SpeechIcon:x7,SpellCheck:L7,SpellCheck2:f7,SpellCheck2Icon:f7,SpellCheckIcon:L7,Spline:w7,SplineIcon:w7,Split:C7,SplitIcon:C7,SplitSquareHorizontal:Yt,SplitSquareHorizontalIcon:Yt,SplitSquareVertical:Qt,SplitSquareVerticalIcon:Qt,SprayCan:b7,SprayCanIcon:b7,Sprout:S7,SproutIcon:S7,Square:V7,SquareActivity:it,SquareActivityIcon:it,SquareArrowDown:ht,SquareArrowDownIcon:ht,SquareArrowDownLeft:rt,SquareArrowDownLeftIcon:rt,SquareArrowDownRight:dt,SquareArrowDownRightIcon:dt,SquareArrowLeft:lt,SquareArrowLeftIcon:lt,SquareArrowOutDownLeft:st,SquareArrowOutDownLeftIcon:st,SquareArrowOutDownRight:yt,SquareArrowOutDownRightIcon:yt,SquareArrowOutUpLeft:pt,SquareArrowOutUpLeftIcon:pt,SquareArrowOutUpRight:kt,SquareArrowOutUpRightIcon:kt,SquareArrowRight:ut,SquareArrowRightIcon:ut,SquareArrowUp:vt,SquareArrowUpIcon:vt,SquareArrowUpLeft:Mt,SquareArrowUpLeftIcon:Mt,SquareArrowUpRight:mt,SquareArrowUpRightIcon:mt,SquareAsterisk:gt,SquareAsteriskIcon:gt,SquareBottomDashedScissors:It,SquareBottomDashedScissorsIcon:It,SquareCheck:ft,SquareCheckBig:xt,SquareCheckBigIcon:xt,SquareCheckIcon:ft,SquareChevronDown:Lt,SquareChevronDownIcon:Lt,SquareChevronLeft:wt,SquareChevronLeftIcon:wt,SquareChevronRight:Ct,SquareChevronRightIcon:Ct,SquareChevronUp:bt,SquareChevronUpIcon:bt,SquareCode:St,SquareCodeIcon:St,SquareDashedBottom:A7,SquareDashedBottomCode:q7,SquareDashedBottomCodeIcon:q7,SquareDashedBottomIcon:A7,SquareDashedKanban:qt,SquareDashedKanbanIcon:qt,SquareDashedMousePointer:At,SquareDashedMousePointerIcon:At,SquareDivide:Ht,SquareDivideIcon:Ht,SquareDot:zt,SquareDotIcon:zt,SquareEqual:Vt,SquareEqualIcon:Vt,SquareFunction:Pt,SquareFunctionIcon:Pt,SquareGanttChart:jt,SquareGanttChartIcon:jt,SquareIcon:V7,SquareKanban:_t,SquareKanbanIcon:_t,SquareLibrary:Dt,SquareLibraryIcon:Dt,SquareM:Bt,SquareMIcon:Bt,SquareMenu:Ft,SquareMenuIcon:Ft,SquareMinus:Tt,SquareMinusIcon:Tt,SquareMousePointer:Rt,SquareMousePointerIcon:Rt,SquareParking:Ut,SquareParkingIcon:Ut,SquareParkingOff:Ot,SquareParkingOffIcon:Ot,SquarePen:K,SquarePenIcon:K,SquarePercent:Et,SquarePercentIcon:Et,SquarePi:Zt,SquarePiIcon:Zt,SquarePilcrow:$t,SquarePilcrowIcon:$t,SquarePlay:Gt,SquarePlayIcon:Gt,SquarePlus:Nt,SquarePlusIcon:Nt,SquarePower:Wt,SquarePowerIcon:Wt,SquareRadical:H7,SquareRadicalIcon:H7,SquareScissors:Xt,SquareScissorsIcon:Xt,SquareSigma:Kt,SquareSigmaIcon:Kt,SquareSlash:Jt,SquareSlashIcon:Jt,SquareSplitHorizontal:Yt,SquareSplitHorizontalIcon:Yt,SquareSplitVertical:Qt,SquareSplitVerticalIcon:Qt,SquareStack:z7,SquareStackIcon:z7,SquareTerminal:e2,SquareTerminalIcon:e2,SquareUser:a2,SquareUserIcon:a2,SquareUserRound:t2,SquareUserRoundIcon:t2,SquareX:o2,SquareXIcon:o2,Squircle:P7,SquircleIcon:P7,Squirrel:j7,SquirrelIcon:j7,Stamp:_7,StampIcon:_7,Star:F7,StarHalf:D7,StarHalfIcon:D7,StarIcon:F7,StarOff:B7,StarOffIcon:B7,Stars:nt,StarsIcon:nt,StepBack:T7,StepBackIcon:T7,StepForward:R7,StepForwardIcon:R7,Stethoscope:O7,StethoscopeIcon:O7,Sticker:U7,StickerIcon:U7,StickyNote:E7,StickyNoteIcon:E7,StopCircle:o1,StopCircleIcon:o1,Store:Z7,StoreIcon:Z7,StretchHorizontal:$7,StretchHorizontalIcon:$7,StretchVertical:G7,StretchVerticalIcon:G7,Strikethrough:N7,StrikethroughIcon:N7,Subscript:W7,SubscriptIcon:W7,Subtitles:ze,SubtitlesIcon:ze,Sun:Q7,SunDim:X7,SunDimIcon:X7,SunIcon:Q7,SunMedium:K7,SunMediumIcon:K7,SunMoon:J7,SunMoonIcon:J7,SunSnow:Y7,SunSnowIcon:Y7,Sunrise:e9,SunriseIcon:e9,Sunset:t9,SunsetIcon:t9,Superscript:a9,SuperscriptIcon:a9,SwatchBook:o9,SwatchBookIcon:o9,SwissFranc:c9,SwissFrancIcon:c9,SwitchCamera:n9,SwitchCameraIcon:n9,Sword:i9,SwordIcon:i9,Swords:r9,SwordsIcon:r9,Syringe:d9,SyringeIcon:d9,Table:u9,Table2:h9,Table2Icon:h9,TableCellsMerge:l9,TableCellsMergeIcon:l9,TableCellsSplit:s9,TableCellsSplitIcon:s9,TableColumnsSplit:y9,TableColumnsSplitIcon:y9,TableIcon:u9,TableProperties:p9,TablePropertiesIcon:p9,TableRowsSplit:k9,TableRowsSplitIcon:k9,Tablet:m9,TabletIcon:m9,TabletSmartphone:M9,TabletSmartphoneIcon:M9,Tablets:v9,TabletsIcon:v9,Tag:g9,TagIcon:g9,Tags:I9,TagsIcon:I9,Tally1:x9,Tally1Icon:x9,Tally2:f9,Tally2Icon:f9,Tally3:L9,Tally3Icon:L9,Tally4:w9,Tally4Icon:w9,Tally5:C9,Tally5Icon:C9,Tangent:b9,TangentIcon:b9,Target:S9,TargetIcon:S9,Telescope:q9,TelescopeIcon:q9,Tent:H9,TentIcon:H9,TentTree:A9,TentTreeIcon:A9,Terminal:z9,TerminalIcon:z9,TerminalSquare:e2,TerminalSquareIcon:e2,TestTube:V9,TestTube2:c2,TestTube2Icon:c2,TestTubeDiagonal:c2,TestTubeDiagonalIcon:c2,TestTubeIcon:V9,TestTubes:P9,TestTubesIcon:P9,Text:F9,TextCursor:_9,TextCursorIcon:_9,TextCursorInput:j9,TextCursorInputIcon:j9,TextIcon:F9,TextQuote:D9,TextQuoteIcon:D9,TextSearch:B9,TextSearchIcon:B9,TextSelect:n2,TextSelectIcon:n2,TextSelection:n2,TextSelectionIcon:n2,Theater:T9,TheaterIcon:T9,Thermometer:U9,ThermometerIcon:U9,ThermometerSnowflake:R9,ThermometerSnowflakeIcon:R9,ThermometerSun:O9,ThermometerSunIcon:O9,ThumbsDown:E9,ThumbsDownIcon:E9,ThumbsUp:Z9,ThumbsUpIcon:Z9,Ticket:J9,TicketCheck:$9,TicketCheckIcon:$9,TicketIcon:J9,TicketMinus:G9,TicketMinusIcon:G9,TicketPercent:N9,TicketPercentIcon:N9,TicketPlus:W9,TicketPlusIcon:W9,TicketSlash:X9,TicketSlashIcon:X9,TicketX:K9,TicketXIcon:K9,Timer:eM,TimerIcon:eM,TimerOff:Y9,TimerOffIcon:Y9,TimerReset:Q9,TimerResetIcon:Q9,ToggleLeft:tM,ToggleLeftIcon:tM,ToggleRight:aM,ToggleRightIcon:aM,Tornado:oM,TornadoIcon:oM,Torus:cM,TorusIcon:cM,Touchpad:iM,TouchpadIcon:iM,TouchpadOff:nM,TouchpadOffIcon:nM,TowerControl:rM,TowerControlIcon:rM,ToyBrick:dM,ToyBrickIcon:dM,Tractor:hM,TractorIcon:hM,TrafficCone:lM,TrafficConeIcon:lM,Train:i2,TrainFront:yM,TrainFrontIcon:yM,TrainFrontTunnel:sM,TrainFrontTunnelIcon:sM,TrainIcon:i2,TrainTrack:pM,TrainTrackIcon:pM,TramFront:i2,TramFrontIcon:i2,Trash:uM,Trash2:kM,Trash2Icon:kM,TrashIcon:uM,TreeDeciduous:MM,TreeDeciduousIcon:MM,TreePalm:r2,TreePalmIcon:r2,TreePine:mM,TreePineIcon:mM,Trees:vM,TreesIcon:vM,Trello:gM,TrelloIcon:gM,TrendingDown:IM,TrendingDownIcon:IM,TrendingUp:xM,TrendingUpIcon:xM,Triangle:LM,TriangleAlert:d2,TriangleAlertIcon:d2,TriangleIcon:LM,TriangleRight:fM,TriangleRightIcon:fM,Trophy:wM,TrophyIcon:wM,Truck:CM,TruckIcon:CM,Turtle:bM,TurtleIcon:bM,Tv:qM,Tv2:SM,Tv2Icon:SM,TvIcon:qM,Twitch:AM,TwitchIcon:AM,Twitter:HM,TwitterIcon:HM,Type:zM,TypeIcon:zM,Umbrella:PM,UmbrellaIcon:PM,UmbrellaOff:VM,UmbrellaOffIcon:VM,Underline:jM,UnderlineIcon:jM,Undo:BM,Undo2:_M,Undo2Icon:_M,UndoDot:DM,UndoDotIcon:DM,UndoIcon:BM,UnfoldHorizontal:FM,UnfoldHorizontalIcon:FM,UnfoldVertical:TM,UnfoldVerticalIcon:TM,Ungroup:RM,UngroupIcon:RM,University:h2,UniversityIcon:h2,Unlink:UM,Unlink2:OM,Unlink2Icon:OM,UnlinkIcon:UM,Unlock:j1,UnlockIcon:j1,UnlockKeyhole:P1,UnlockKeyholeIcon:P1,Unplug:EM,UnplugIcon:EM,Upload:ZM,UploadCloud:h1,UploadCloudIcon:h1,UploadIcon:ZM,Usb:$M,UsbIcon:$M,User:oa,User2:u2,User2Icon:u2,UserCheck:GM,UserCheck2:l2,UserCheck2Icon:l2,UserCheckIcon:GM,UserCircle:n1,UserCircle2:c1,UserCircle2Icon:c1,UserCircleIcon:n1,UserCog:NM,UserCog2:s2,UserCog2Icon:s2,UserCogIcon:NM,UserIcon:oa,UserMinus:WM,UserMinus2:y2,UserMinus2Icon:y2,UserMinusIcon:WM,UserPlus:XM,UserPlus2:p2,UserPlus2Icon:p2,UserPlusIcon:XM,UserRound:u2,UserRoundCheck:l2,UserRoundCheckIcon:l2,UserRoundCog:s2,UserRoundCogIcon:s2,UserRoundIcon:u2,UserRoundMinus:y2,UserRoundMinusIcon:y2,UserRoundPlus:p2,UserRoundPlusIcon:p2,UserRoundSearch:KM,UserRoundSearchIcon:KM,UserRoundX:k2,UserRoundXIcon:k2,UserSearch:JM,UserSearchIcon:JM,UserSquare:a2,UserSquare2:t2,UserSquare2Icon:t2,UserSquareIcon:a2,UserX:YM,UserX2:k2,UserX2Icon:k2,UserXIcon:YM,Users:QM,Users2:M2,Users2Icon:M2,UsersIcon:QM,UsersRound:M2,UsersRoundIcon:M2,Utensils:tm,UtensilsCrossed:em,UtensilsCrossedIcon:em,UtensilsIcon:tm,UtilityPole:am,UtilityPoleIcon:am,Variable:om,VariableIcon:om,Vault:cm,VaultIcon:cm,Vegan:nm,VeganIcon:nm,VenetianMask:im,VenetianMaskIcon:im,Verified:be,VerifiedIcon:be,Vibrate:dm,VibrateIcon:dm,VibrateOff:rm,VibrateOffIcon:rm,Video:lm,VideoIcon:lm,VideoOff:hm,VideoOffIcon:hm,Videotape:sm,VideotapeIcon:sm,View:ym,ViewIcon:ym,Voicemail:pm,VoicemailIcon:pm,Volume:um,Volume1:km,Volume1Icon:km,Volume2:O2,Volume2Icon:O2,VolumeIcon:um,VolumeX:U2,VolumeXIcon:U2,Vote:Mm,VoteIcon:Mm,Wallet:vm,Wallet2:m2,Wallet2Icon:m2,WalletCards:mm,WalletCardsIcon:mm,WalletIcon:vm,WalletMinimal:m2,WalletMinimalIcon:m2,Wallpaper:gm,WallpaperIcon:gm,Wand:Im,Wand2:v2,Wand2Icon:v2,WandIcon:Im,WandSparkles:v2,WandSparklesIcon:v2,Warehouse:xm,WarehouseIcon:xm,WashingMachine:fm,WashingMachineIcon:fm,Watch:Lm,WatchIcon:Lm,Waves:wm,WavesIcon:wm,Waypoints:Cm,WaypointsIcon:Cm,Webcam:bm,WebcamIcon:bm,Webhook:qm,WebhookIcon:qm,WebhookOff:Sm,WebhookOffIcon:Sm,Weight:Am,WeightIcon:Am,Wheat:zm,WheatIcon:zm,WheatOff:Hm,WheatOffIcon:Hm,WholeWord:Vm,WholeWordIcon:Vm,Wifi:jm,WifiIcon:jm,WifiOff:Pm,WifiOffIcon:Pm,Wind:_m,WindIcon:_m,Wine:Bm,WineIcon:Bm,WineOff:Dm,WineOffIcon:Dm,Workflow:Fm,WorkflowIcon:Fm,Worm:Tm,WormIcon:Tm,WrapText:Rm,WrapTextIcon:Rm,Wrench:Om,WrenchIcon:Om,X:E2,XCircle:de,XCircleIcon:de,XIcon:E2,XOctagon:T1,XOctagonIcon:T1,XSquare:o2,XSquareIcon:o2,Youtube:Um,YoutubeIcon:Um,Zap:Zm,ZapIcon:Zm,ZapOff:Em,ZapOffIcon:Em,ZoomIn:$m,ZoomInIcon:$m,ZoomOut:Gm,ZoomOutIcon:Gm,createLucideIcon:e,icons:hI},Symbol.toStringTag,{value:"Module"})),lI=["onClick"],sI={class:"flex gap-2"},yI={class:"whitespace-nowrap"},pI={class:"grid grid-cols-3 justify-between mx-3 p-2 rounded-lg border border-gray-100 bg-white shadow-xl"},kI={key:"name"},uI=["href"],MI=["src"],mI=["onClick"],vI={__name:"Apps",setup(n){const t=E({url:"frappe.apps.get_apps",cache:"apps",auto:!0,transform:a=>{let o=[{name:"frappe",logo:"/assets/lms/images/desk.png",title:__("Desk"),route:"/app"}];return a.map(c=>{c.name!=="lms"&&o.push({name:c.name,logo:c.logo,title:__(c.title),route:c.route})}),o}});return(a,o)=>(y(),A(l(pv),{placement:"right-start",class:"flex w-full"},{target:z(({togglePopover:c})=>[u("button",{class:U(["group w-full flex h-7 items-center justify-between rounded px-2 text-base text-gray-800 hover:bg-gray-100"]),onClick:av(i=>c(),["prevent"])},[u("div",sI,[b(l(J2),{class:"size-4 stroke-1.5"}),u("span",yI,w(a.__("Apps")),1)]),b(l(F2),{class:"h-4 w-4 stroke-1.5"})],8,lI)]),body:z(()=>[u("div",pI,[(y(!0),v(Z,null,X(l(t).data,c=>(y(),v("div",kI,[u("a",{href:c.route,class:"flex flex-col gap-1.5 rounded justify-center items-center py-2 px-3 hover:bg-gray-100"},[u("img",{class:"size-8",src:c.logo},null,8,MI),u("div",{class:"text-sm",onClick:c.onClick},w(c.title),9,mI)],8,uI)]))),128))])]),_:1}))}},gI={key:0},II={class:"bg-blue-100 py-2 px-2 mb-4 rounded-md text-sm text-blue-800"},xI={class:"leading-relaxed"},fI={key:0,class:"leading-relaxed"},LI={key:1,class:"leading-relaxed"},wI={key:2,class:"leading-relaxed"},CI={key:0},bI={class:"border text-center p-20 rounded-md"},SI={class:"font-semibold text-lg"},qI={key:1},AI={key:1},HI={key:0,class:"border rounded-md p-5"},zI={class:"flex justify-between"},VI={class:"text-sm"},PI={class:"mr-2"},jI={key:0},_I={key:1},DI={class:"text-gray-900 text-sm font-semibold item-left"},BI=["innerHTML"],FI={key:0,class:"flex items-center bg-gray-200 rounded-md p-3 mt-4 w-full cursor-pointer focus:border-blue-600"},TI=["name","onChange"],RI=["name","onChange"],OI={key:0},UI=["innerHTML"],EI={key:1},ZI={key:0},$I={class:"flex items-center justify-between mt-5"},GI={key:2,class:"border rounded-md p-20 text-center"},NI={class:"text-lg font-semibold"},WI={key:3,class:"mt-10"},XI={__name:"Quiz",props:{quizName:{type:String,required:!0}},setup(n){const t=Jm("$user"),a=q(0),o=q(""),c=L2([0,0,0,0]),i=L2([]);let r=L2([]);const h=q(null),d=n,s=E({url:"frappe.client.get",makeParams(x){return{doctype:"LMS Quiz",name:d.quizName}},cache:["quiz",d.quizName],auto:!0,onSuccess(x){k()}}),k=()=>{let x=s.data;x.shuffle_questions?(r=m(x.questions),x.limit_questions_to&&(r=r.slice(0,x.limit_questions_to))):r=x.questions},m=x=>{for(let V=x.length-1;V>0;V--){const O=Math.floor(Math.random()*(V+1));[x[V],x[O]]=[x[O],x[V]]}return x},p=E({url:"frappe.client.get_list",makeParams(x){var V,O;return{doctype:"LMS Quiz Submission",filters:{member:(V=t.data)==null?void 0:V.name,quiz:(O=s.data)==null?void 0:O.name},fields:["name","creation","score","score_out_of","percentage","passing_percentage"],order_by:"creation desc"}},transform(x){x.forEach((V,O)=>{V.creation=of(V.creation),V.idx=O+1})}});te(()=>s.data,()=>{s.data&&s.data.max_attempts&&(p.reload(),j())});const g=E({url:"lms.lms.doctype.lms_quiz.lms_quiz.quiz_summary",makeParams(x){return{quiz:s.data.name,results:localStorage.getItem(s.data.title)}}}),M=E({url:"lms.lms.utils.get_question_details",makeParams(x){return{question:o.value}}});te(a,x=>{x>0&&(o.value=s.data.questions[x-1].question,M.reload())}),te(()=>d.quizName,x=>{x&&s.reload()});const C=()=>{a.value=1,localStorage.removeItem(s.data.title)},f=x=>{M.data.multiple||c.splice(0,c.length,0,0,0,0),c[x-1]=c[x-1]?0:1},S=()=>{let x=[];return M.data.type=="Choices"?c.forEach((O,oe)=>{c[oe]&&x.push(M.data[`option_${oe+1}`])}):x.push(h.value),x},I=()=>{let x=S();if(!x.length){og({title:"Please select an option",icon:"alert-circle",iconClasses:"text-yellow-600 bg-yellow-100 rounded-full",position:"top-center"});return}E({url:"lms.lms.doctype.lms_quiz.lms_quiz.check_answer",params:{question:o.value,type:M.data.type,answers:JSON.stringify(x)},auto:!0,onSuccess(V){M.data.type=="Choices"?c.forEach((oe,ce)=>{oe?i[ce]=oe&&V[ce]:M.data[`is_correct_${ce+1}`]?i[ce]=0:i[ce]=void 0}):i.push(V),L(),s.data.show_answers||H()}})},L=()=>{let x=JSON.parse(localStorage.getItem(s.data.title)),V={question_name:o.value,answer:S().join(),is_correct:i.filter(O=>O!=null)};x?x.push(V):x=[V],localStorage.setItem(s.data.title,JSON.stringify(x))},P=()=>{s.data.show_answers?H():I()},H=()=>{a.value!=s.data.questions.length&&(a.value=a.value+1,c.splice(0,c.length,0,0,0,0),i.length=0,h.value=null)},$=()=>{if(!s.data.show_answers){I(),setTimeout(()=>{B()},500);return}B()},B=()=>{g.reload().then(()=>{s.data&&s.data.max_attempts&&p.reload()})},j=()=>{a.value=0,c.splice(0,c.length,0,0,0,0),i.length=0,g.reset(),k()},_=()=>[{label:"No.",key:"idx"},{label:"Date",key:"creation"},{label:"Score",key:"score",align:"center"},{label:"Score out of",key:"score_out_of",align:"center"},{label:"Percentage",key:"percentage",align:"center"}];return(x,V)=>{var O,oe,ce,ye;return l(s).data?(y(),v("div",gI,[u("div",II,[u("div",xI,w(x.__("This quiz consists of {0} questions.").format(l(r).length)),1),l(s).data.passing_percentage?(y(),v("div",fI,w(x.__("You will have to get {0}% correct answers in order to pass the quiz.").format(l(s).data.passing_percentage)),1)):D("",!0),l(s).data.max_attempts?(y(),v("div",LI,w(x.__("You can attempt this quiz {0}.").format(l(s).data.max_attempts==1?"1 time":`${l(s).data.max_attempts} times`)),1)):D("",!0),l(s).data.time?(y(),v("div",wI,w(x.__("The quiz has a time limit. For each question you will be given {0} seconds.").format(l(s).data.time)),1)):D("",!0)]),a.value==0?(y(),v("div",CI,[u("div",bI,[u("div",SI,w(l(s).data.title),1),!l(s).data.max_attempts||((O=l(p).data)==null?void 0:O.length)<l(s).data.max_attempts?(y(),A(l(N),{key:0,onClick:C,class:"mt-2"},{default:z(()=>[u("span",null,w(x.__("Start")),1)]),_:1})):(y(),v("div",qI,w(x.__("You have already exceeded the maximum number of attempts allowed for this quiz.")),1))])])):l(g).data?(y(),v("div",GI,[u("div",NI,w(x.__("Quiz Summary")),1),u("div",null,w(x.__("You got {0}% correct answers with a score of {1} out of {2}").format(Math.ceil(l(g).data.percentage),l(g).data.score,l(g).data.score_out_of)),1),!l(s).data.max_attempts||((oe=l(p))==null?void 0:oe.data.length)<l(s).data.max_attempts?(y(),A(l(N),{key:0,onClick:V[4]||(V[4]=W=>j()),class:"mt-2"},{default:z(()=>[u("span",null,w(x.__("Try Again")),1)]),_:1})):D("",!0)])):(y(),v("div",AI,[(y(!0),v(Z,null,X(l(r),(W,rg)=>(y(),v("div",null,[rg==a.value-1&&l(M).data?(y(),v("div",HI,[u("div",zI,[u("div",VI,[u("span",PI,w(x.__("Question {0}").format(a.value))+": ",1),l(M).data.type=="User Input"?(y(),v("span",jI,w(x.__("Type your answer")),1)):(y(),v("span",_I,w(l(M).data.multiple?x.__("Choose all answers that apply"):x.__("Choose one answer")),1))]),u("div",DI,w(W.marks)+" "+w(W.marks==1?x.__("Mark"):x.__("Marks")),1)]),u("div",{class:"text-gray-900 font-semibold mt-2",innerHTML:l(M).data.question},null,8,BI),l(M).data.type=="Choices"?(y(),v(Z,{key:0},X(4,J=>u("div",null,[l(M).data[`option_${J}`]?(y(),v("label",FI,[!i.length&&!l(M).data.multiple?(y(),v("input",{key:0,type:"radio",name:encodeURIComponent(l(M).data.question),class:"w-3.5 h-3.5 text-gray-900 focus:ring-gray-200",onChange:ra=>f(J)},null,40,TI)):!i.length&&l(M).data.multiple?(y(),v("input",{key:1,type:"checkbox",name:encodeURIComponent(l(M).data.question),class:"w-3.5 h-3.5 text-gray-900 rounded-sm focus:ring-gray-200",onChange:ra=>f(J)},null,40,RI)):l(s).data.show_answers?(y(!0),v(Z,{key:2},X(i,(ra,dg)=>(y(),v("div",null,[J-1==dg?(y(),v("div",OI,[ra?(y(),A(l(ie),{key:0,class:"w-4 h-4 text-green-500"})):l(M).data[`is_correct_${J}`]?(y(),A(l(re),{key:1,class:"w-4 h-4 text-green-500"})):ra==0?(y(),A(l(de),{key:2,class:"w-4 h-4 text-red-500"})):(y(),A(l(re),{key:3,class:"w-4 h-4"}))])):D("",!0)]))),256)):D("",!0),u("span",{class:"ml-2",innerHTML:l(M).data[`option_${J}`]},null,8,UI)])):D("",!0),l(M).data[`explanation_${J}`]?na((y(),v("div",{key:1,class:"mt-2 text-xs"},w(l(M).data[`explanation_${J}`]),513)),[[ov,i.length]]):D("",!0)])),64)):(y(),v("div",EI,[b(D2,{modelValue:h.value,"onUpdate:modelValue":V[0]||(V[0]=J=>h.value=J),type:"textarea",disabled:!!i.length,class:"my-2"},null,8,["modelValue","disabled"]),i.length?(y(),v("div",ZI,[i[0]?(y(),A(l(fv),{key:0,label:x.__("Correct"),theme:"green"},{prefix:z(()=>[b(l(ie),{class:"w-4 h-4 text-green-500 mr-1"})]),_:1},8,["label"])):(y(),A(l(fv),{key:1,theme:"red",label:x.__("Incorrect")},{prefix:z(()=>[b(l(de),{class:"w-4 h-4 text-red-500 mr-1"})]),_:1},8,["label"]))])):D("",!0)])),u("div",$I,[u("div",null,w(x.__("Question {0} of {1}").format(a.value,l(r).length)),1),l(s).data.show_answers&&!i.length?(y(),A(l(N),{key:0,onClick:V[1]||(V[1]=J=>I())},{default:z(()=>[u("span",null,w(x.__("Check")),1)]),_:1})):a.value!=l(r).length?(y(),A(l(N),{key:1,onClick:V[2]||(V[2]=J=>P())},{default:z(()=>[u("span",null,w(x.__("Next")),1)]),_:1})):(y(),A(l(N),{key:2,onClick:V[3]||(V[3]=J=>$())},{default:z(()=>[u("span",null,w(x.__("Submit")),1)]),_:1}))])])):D("",!0)]))),256))])),l(s).data.show_submission_history&&((ce=l(p))!=null&&ce.data)?(y(),v("div",WI,[b(l(fg),{columns:_(),rows:(ye=l(p))==null?void 0:ye.data,"row-key":"name",options:{selectable:!1,showTooltip:!1}},null,8,["columns","rows"])])):D("",!0)])):D("",!0)}}},KI={key:1,class:"border rounded-md text-center py-20"},JI={__name:"QuizBlock",props:{quiz:{type:String,required:!0}},setup(n){const t=Jm("$user"),a=()=>{window.location.href="/login"};return(o,c)=>l(t).data?(y(),A(XI,{key:0,quizName:n.quiz},null,8,["quizName"])):(y(),v("div",KI,[u("div",null,w(o.__("Please login to access the quiz.")),1),b(l(N),{onClick:c[0]||(c[0]=i=>a()),class:"mt-2"},{default:z(()=>[u("span",null,w(o.__("Login")),1)]),_:1})]))}};function Nv(n){n.config.globalProperties.__=bv,window.__=bv,window.translatedMessages||YI()}function bv(n){let a=(window.translatedMessages||{})[n]||n;return/{\d+}/.test(n)?{format:function(...c){return a.replace(/{(\d+)}/g,function(i,r){return typeof c[r]!="undefined"?c[r]:i})}}:a}function YI(n){E({url:"lms.lms.api.get_translations",cache:"translations",auto:!0,transform:t=>{window.translatedMessages=t}})}class QI{constructor({data:t,api:a,readOnly:o}){this.data=t,this.readOnly=o}static get isReadOnlySupported(){return!0}render(){if(this.wrapper=document.createElement("div"),this.data){let t=this.renderQuiz(this.data.quiz);this.readOnly||(this.wrapper.innerHTML=t)}return this.wrapper}renderQuiz(t){if(this.readOnly){const a=ia(JI,{quiz:t});a.use(Nv);const{userResource:o}=H2();a.provide("$user",o),a.mount(this.wrapper);return}return`<div class='border rounded-md p-10 text-center mb-2'>
            <span class="font-medium">
                Quiz: ${t}
            </span>
        </div>`}save(t){return{quiz:this.data.quiz}}}const ex=["src"],tx={class:"flex items-center space-x-2 shadow rounded-lg p-1 w-1/2"},ax=["max"],ox={class:"text-xs text-gray-900 font-medium"},cx={__name:"AudioBlock",props:{file:{type:String,required:!0}},setup(n){const t=q(!1),a=q(null);let o=q(!1),c=q(0),i=q(0);A2(()=>{setTimeout(()=>{a.value=document.querySelector("audio"),console.log(a.value),a.value.onloadedmetadata=()=>{i.value=a.value.duration},a.value.ontimeupdate=()=>{c.value=a.value.currentTime}},0)});const r=()=>{a.value.paused?(a.value.play(),t.value=!0):(a.value.pause(),t.value=!1)},h=()=>{a.value.muted=!a.value.muted,o.value=a.value.muted},d=()=>{a.value.currentTime=c.value},s=()=>{t.value=!1},k=m=>{const p=Math.floor(m/60),g=Math.floor(m%60);return`${p}:${g<10?"0":""}${g}`};return te(t,m=>{m?a.value.play():a.value.pause()}),(m,p)=>(y(),v("div",null,[u("audio",{onEnded:s,controlsList:"nodownload",class:"mb-4"},[u("source",{src:encodeURI(n.file),type:"audio/mp3"},null,8,ex)],32),u("div",tx,[b(l(N),{variant:"ghost",onClick:r},{icon:z(()=>[t.value?(y(),A(l(T2),{key:1,class:"w-4 h-4 text-gray-900"})):(y(),A(l(R2),{key:0,class:"w-4 h-4 text-gray-900"}))]),_:1}),na(u("input",{type:"range",min:"0",max:l(i),step:"0.1","onUpdate:modelValue":p[0]||(p[0]=g=>ue(c)?c.value=g:c=g),onInput:d,class:"duration-slider w-full h-1"},null,40,ax),[[Dv,l(c)]]),u("span",ox,w(k(l(c)))+" / "+w(k(l(i))),1),b(l(N),{variant:"ghost",onClick:h},{icon:z(()=>[l(o)?(y(),A(l(U2),{key:1,class:"w-4 h-4 text-gray-900"})):(y(),A(l(O2),{key:0,class:"w-4 h-4 text-gray-900"}))]),_:1})])]))}},nx=["src","type"],ix={class:"flex items-center space-x-2 bg-gray-200 rounded-md p-0.5 absolute bottom-3 w-[98%] left-0 right-0 mx-auto"},rx=["max"],dx={class:"text-xs font-medium"},hx={__name:"VideoBlock",props:{file:{type:String,required:!0},type:{type:String,default:"video/mp4"}},setup(n){const t=q(null),a=q(null);let o=q(!1),c=q(0),i=q(0),r=q(!1);const h=n;A2(()=>{setTimeout(()=>{t.value=document.querySelector("video"),t.value.onloadedmetadata=()=>{i.value=t.value.duration},t.value.ontimeupdate=()=>{c.value=t.value.currentTime}},0)});const d=G(()=>{if(s){let S=h.file;return S.includes("watch?v=")&&(S=S.replace("watch?v=","embed/")),`${S}?autoplay=0&controls=0&disablekb=1&playsinline=1&cc_load_policy=1&cc_lang_pref=auto`}return h.file}),s=G(()=>h.type=="video/youtube"),k=()=>{t.value.play(),o.value=!0},m=()=>{t.value.pause(),o.value=!1},p=()=>{o.value=!1},g=()=>{t.value.muted=!t.value.muted,r.value=t.value.muted},M=()=>{t.value.currentTime=c.value},C=S=>{const I=Math.floor(S/60),L=Math.floor(S%60);return`${I}:${L<10?"0":""}${L}`},f=()=>{document.fullscreenElement?document.exitFullscreen():a.value.requestFullscreen()};return(S,I)=>(y(),v("div",{ref_key:"videoContainer",ref:a,class:"video-block group relative"},[u("video",{onTimeupdate:I[0]||(I[0]=(...L)=>S.updateTime&&S.updateTime(...L)),onEnded:p,class:"rounded-lg border border-gray-100"},[u("source",{src:d.value,type:n.type},null,8,nx)],32),u("div",ix,[b(l(N),{variant:"ghost"},{icon:z(()=>[l(o)?(y(),A(l(T2),{key:1,onClick:m,class:"w-4 h-4 text-gray-900"})):(y(),A(l(R2),{key:0,onClick:k,class:"w-4 h-4 text-gray-900"}))]),_:1}),b(l(N),{variant:"ghost",onClick:g},{icon:z(()=>[l(r)?(y(),A(l(U2),{key:1,class:"w-4 h-4 text-gray-900"})):(y(),A(l(O2),{key:0,class:"w-4 h-4 text-gray-900"}))]),_:1}),na(u("input",{type:"range",min:"0",max:l(i),step:"0.1","onUpdate:modelValue":I[1]||(I[1]=L=>ue(c)?c.value=L:c=L),onInput:M,class:"duration-slider w-full h-1"},null,40,rx),[[Dv,l(c)]]),u("span",dx,w(C(l(c)))+" / "+w(C(l(i))),1),b(l(N),{variant:"ghost",onClick:f},{icon:z(()=>[b(l(ea),{class:"w-4 h-4 text-gray-900"})]),_:1})])],512))}},lx=yv(hx,[["__scopeId","data-v-7d84f4ba"]]);class sx{constructor({data:t,api:a,readOnly:o}){this.data=t,this.readOnly=o}static get isReadOnlySupported(){return!0}render(){return this.wrapper=document.createElement("div"),this.renderUpload(this.data),this.wrapper}renderUpload(t){if(this.isVideo(t.file_type)){ia(lx,{file:t.file_url}).mount(this.wrapper);return}else if(this.isAudio(t.file_type)){ia(cx,{file:t.file_url}).mount(this.wrapper);return}else if(t.file_type=="PDF"){this.wrapper.innerHTML=`<iframe src="${encodeURI(t.file_url)}#toolbar=0" width='100%' height='700px' class="mb-4"></iframe>`;return}else{this.wrapper.innerHTML=`<img class="mb-4" src=${encodeURI(t.file_url)} width='100%'>`;return}}save(t){return{file_url:this.data.file_url,file_type:this.data.file_type}}isVideo(t){return["mov","mp4","avi","mkv","webm"].includes(t.toLowerCase())}isAudio(t){return["mp3","wav","ogg"].includes(t.toLowerCase())}}(function(){try{if(typeof document<"u"){var n=document.createElement("style");n.appendChild(document.createTextNode(".ce-header{padding:.6em 0 3px;margin:0;line-height:1.25em;outline:none}.ce-header p,.ce-header div{padding:0!important;margin:0!important}.ce-header[contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;display:none;cursor:text}.ce-header[contentEditable=true][data-placeholder]:empty:before{display:block}.ce-header[contentEditable=true][data-placeholder]:empty:focus:before{display:none}")),document.head.appendChild(n)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();const yx='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19 17V10.2135C19 10.1287 18.9011 10.0824 18.836 10.1367L16 12.5"/></svg>',px='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10 19 9.5 19 12C19 13.9771 16.0684 13.9997 16.0012 16.8981C15.9999 16.9533 16.0448 17 16.1 17L19.3 17"/></svg>',kx='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 11C16 10.5 16.8323 10 17.6 10C18.3677 10 19.5 10.311 19.5 11.5C19.5 12.5315 18.7474 12.9022 18.548 12.9823C18.5378 12.9864 18.5395 13.0047 18.5503 13.0063C18.8115 13.0456 20 13.3065 20 14.8C20 16 19.5 17 17.8 17C17.8 17 16 17 16 16.3"/></svg>',ux='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M18 10L15.2834 14.8511C15.246 14.9178 15.294 15 15.3704 15C16.8489 15 18.7561 15 20.2 15M19 17C19 15.7187 19 14.8813 19 13.6"/></svg>',Mx='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 15.9C16 15.9 16.3768 17 17.8 17C19.5 17 20 15.6199 20 14.7C20 12.7323 17.6745 12.0486 16.1635 12.9894C16.094 13.0327 16 12.9846 16 12.9027V10.1C16 10.0448 16.0448 10 16.1 10H19.8"/></svg>',mx='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M6 7L6 12M6 17L6 12M6 12L12 12M12 7V12M12 17L12 12"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M19.5 10C16.5 10.5 16 13.3285 16 15M16 15V15C16 16.1046 16.8954 17 18 17H18.3246C19.3251 17 20.3191 16.3492 20.2522 15.3509C20.0612 12.4958 16 12.6611 16 15Z"/></svg>',vx='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9 7L9 12M9 17V12M9 12L15 12M15 7V12M15 17L15 12"/></svg>';/**
 * Header block for the Editor.js.
 *
 * @author CodeX (team@ifmo.su)
 * @copyright CodeX 2018
 * @license MIT
 * @version 2.0.0
 */let gx=class{constructor({data:t,config:a,api:o,readOnly:c}){this.api=o,this.readOnly=c,this._CSS={block:this.api.styles.block,wrapper:"ce-header"},this._settings=a,this._data=this.normalizeData(t),this._element=this.getTag()}normalizeData(t){const a={};return typeof t!="object"&&(t={}),a.text=t.text||"",a.level=parseInt(t.level)||this.defaultLevel.number,a}render(){return this._element}renderSettings(){return this.levels.map(t=>({icon:t.svg,label:this.api.i18n.t(`Heading ${t.number}`),onActivate:()=>this.setLevel(t.number),closeOnActivate:!0,isActive:this.currentLevel.number===t.number}))}setLevel(t){this.data={level:t,text:this.data.text}}merge(t){const a={text:this.data.text+t.text,level:this.data.level};this.data=a}validate(t){return t.text.trim()!==""}save(t){return{text:t.innerHTML,level:this.currentLevel.number}}static get conversionConfig(){return{export:"text",import:"text"}}static get sanitize(){return{level:!1,text:{}}}static get isReadOnlySupported(){return!0}get data(){return this._data.text=this._element.innerHTML,this._data.level=this.currentLevel.number,this._data}set data(t){if(this._data=this.normalizeData(t),t.level!==void 0&&this._element.parentNode){const a=this.getTag();a.innerHTML=this._element.innerHTML,this._element.parentNode.replaceChild(a,this._element),this._element=a}t.text!==void 0&&(this._element.innerHTML=this._data.text||"")}getTag(){const t=document.createElement(this.currentLevel.tag);return t.innerHTML=this._data.text||"",t.classList.add(this._CSS.wrapper),t.contentEditable=this.readOnly?"false":"true",t.dataset.placeholder=this.api.i18n.t(this._settings.placeholder||""),t}get currentLevel(){let t=this.levels.find(a=>a.number===this._data.level);return t||(t=this.defaultLevel),t}get defaultLevel(){if(this._settings.defaultLevel){const t=this.levels.find(a=>a.number===this._settings.defaultLevel);if(t)return t;console.warn("(ง'̀-'́)ง Heading Tool: the default level specified was not found in available levels")}return this.levels[1]}get levels(){const t=[{number:1,tag:"H1",svg:yx},{number:2,tag:"H2",svg:px},{number:3,tag:"H3",svg:kx},{number:4,tag:"H4",svg:ux},{number:5,tag:"H5",svg:Mx},{number:6,tag:"H6",svg:mx}];return this._settings.levels?t.filter(a=>this._settings.levels.includes(a.number)):t}onPaste(t){const a=t.detail.data;let o=this.defaultLevel.number;switch(a.tagName){case"H1":o=1;break;case"H2":o=2;break;case"H3":o=3;break;case"H4":o=4;break;case"H5":o=5;break;case"H6":o=6;break}this._settings.levels&&(o=this._settings.levels.reduce((c,i)=>Math.abs(i-o)<Math.abs(c-o)?i:c)),this.data={level:o,text:a.innerHTML}}static get pasteConfig(){return{tags:["H1","H2","H3","H4","H5","H6"]}}static get toolbox(){return{icon:vx,title:"Heading"}}};(function(){try{if(typeof document<"u"){var n=document.createElement("style");n.appendChild(document.createTextNode(".ce-paragraph{line-height:1.6em;outline:none}.ce-paragraph[data-placeholder]:empty:before{content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:before{opacity:1}.codex-editor--toolbox-opened .ce-block:first-child .ce-paragraph[data-placeholder]:empty:before,.codex-editor--empty .ce-block:first-child .ce-paragraph[data-placeholder]:empty:focus:before{opacity:0}.ce-paragraph p:first-of-type{margin-top:0}.ce-paragraph p:last-of-type{margin-bottom:0}")),document.head.appendChild(n)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();const Ix='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 9V7.2C8 7.08954 8.08954 7 8.2 7L12 7M16 9V7.2C16 7.08954 15.9105 7 15.8 7L12 7M12 7L12 17M12 17H10M12 17H14"/></svg>';function xx(n){const t=document.createElement("div");t.innerHTML=n.trim();const a=document.createDocumentFragment();return a.append(...Array.from(t.childNodes)),a}/**
 * Base Paragraph Block for the Editor.js.
 * Represents a regular text block
 *
 * @author CodeX (team@codex.so)
 * @copyright CodeX 2018
 * @license The MIT License (MIT)
 */class uv{static get DEFAULT_PLACEHOLDER(){return""}constructor({data:t,config:a,api:o,readOnly:c}){this.api=o,this.readOnly=c,this._CSS={block:this.api.styles.block,wrapper:"ce-paragraph"},this.readOnly||(this.onKeyUp=this.onKeyUp.bind(this)),this._placeholder=a.placeholder?a.placeholder:uv.DEFAULT_PLACEHOLDER,this._data=t!=null?t:{},this._element=null,this._preserveBlank=a.preserveBlank!==void 0?a.preserveBlank:!1}onKeyUp(t){if(t.code!=="Backspace"&&t.code!=="Delete")return;const{textContent:a}=this._element;a===""&&(this._element.innerHTML="")}drawView(){const t=document.createElement("DIV");return t.classList.add(this._CSS.wrapper,this._CSS.block),t.contentEditable=!1,t.dataset.placeholder=this.api.i18n.t(this._placeholder),this._data.text&&(t.innerHTML=this._data.text),this.readOnly||(t.contentEditable=!0,t.addEventListener("keyup",this.onKeyUp)),t}render(){return this._element=this.drawView(),this._element}merge(t){this._data.text+=t.text;const a=xx(t.text);this._element.appendChild(a),this._element.normalize()}validate(t){return!(t.text.trim()===""&&!this._preserveBlank)}save(t){return{text:t.innerHTML}}onPaste(t){const a={text:t.detail.data.innerHTML};this._data=a,window.requestAnimationFrame(()=>{this._element.innerHTML=this._data.text||""})}static get conversionConfig(){return{export:"text",import:"text"}}static get sanitize(){return{text:{br:!0}}}static get isReadOnlySupported(){return!0}static get pasteConfig(){return{tags:["P"]}}static get toolbox(){return{icon:Ix,title:"Text"}}}const fx=["light","dark"],Lx={none:"Auto-detect",apache:"Apache",bash:"Bash",cs:"C#",cpp:"C++",css:"CSS",coffeescript:"CoffeeScript",diff:"Diff",go:"Go",html:"HTML, XML",http:"HTTP",json:"JSON",java:"Java",javascript:"JavaScript",kotlin:"Kotlin",less:"Less",lua:"Lua",makefile:"Makefile",markdown:"Markdown",nginx:"Nginx",objectivec:"Objective-C",php:"PHP",perl:"Perl",properties:"Properties",python:"Python",ruby:"Ruby",rust:"Rust",scss:"SCSS",sql:"SQL",shell:"Shell Session",swift:"Swift",toml:"TOML, also INI",typescript:"TypeScript",yaml:"YAML",plaintext:"Plaintext"};class wx{constructor({data:t,api:a,config:o,readOnly:c}){this.api=a,this.readOnly=c,this.config={themeName:o.themeName&&typeof o.themeName=="string"?o.themeName:"",themeURL:o.themeURL&&typeof o.themeURL=="string"?o.themeURL:"",useDefaultTheme:o.useDefaultTheme&&typeof o.useDefaultTheme=="string"&&fx.includes(o.useDefaultTheme.toLowerCase())?o.useDefaultTheme:"dark"},this.data={code:t.code&&typeof t.code=="string"?t.code:"",language:t.language&&typeof t.language=="string"?t.language:"Auto-detect",theme:t.theme&&typeof t.theme=="string"?t.theme:this._getThemeURLFromConfig()},this.highlightScriptID="highlightJSScriptElement",this.highlightCSSID="highlightJSCSSElement",this.codeArea=document.createElement("div"),this.selectInput=document.createElement("input"),this.selectDropIcon=document.createElement("i"),this._injectHighlightJSScriptElement(),this._injectHighlightJSCSSElement(),this.api.listeners.on(window,"click",this._closeAllLanguageSelects,!0)}static get isReadOnlySupported(){return!0}static get sanitize(){return{code:!0,language:!1,theme:!1}}static get toolbox(){const t=ia({render:()=>w2(X2,{size:24,strokeWidth:2,color:"black"})}),a=document.createElement("div");return t.mount(a),{title:"CodeBox",icon:a.innerHTML}}static get displayInToolbox(){return!0}static get enableLineBreaks(){return!0}render(){const t=document.createElement("pre"),a=this._createLanguageSelectElement();return t.setAttribute("class","codeBoxHolder"),this.codeArea.setAttribute("class",`codeBoxTextArea ${this.config.useDefaultTheme} ${this.data.language}`),this.codeArea.setAttribute("contenteditable","true"),this.codeArea.innerHTML=this.data.code,this.api.listeners.on(this.codeArea,"blur",o=>this._highlightCodeArea(o),!1),this.api.listeners.on(this.codeArea,"paste",o=>this._handleCodeAreaPaste(o),!1),t.appendChild(this.codeArea),!this.readOnly&&t.appendChild(a),t}save(t){return Object.assign(this.data,{code:this.codeArea.innerHTML,theme:this._getThemeURLFromConfig()})}validate(t){return!!t.code.trim()}destroy(){this.api.listeners.off(window,"click",this._closeAllLanguageSelects,!0),this.api.listeners.off(this.codeArea,"blur",t=>this._highlightCodeArea(t),!1),this.api.listeners.off(this.codeArea,"paste",t=>this._handleCodeAreaPaste(t),!1),this.api.listeners.off(this.selectInput,"click",t=>this._handleSelectInputClick(t),!1)}_createLanguageSelectElement(){const t=document.createElement("div"),a=document.createElement("div"),o=Object.entries(Lx);return t.setAttribute("class","codeBoxSelectDiv"),this.selectDropIcon.setAttribute("class",`codeBoxSelectDropIcon ${this.config.useDefaultTheme}`),this.selectDropIcon.innerHTML="&#8595;",this.selectInput.setAttribute("class",`codeBoxSelectInput ${this.config.useDefaultTheme}`),this.selectInput.setAttribute("type","text"),this.selectInput.setAttribute("readonly","true"),this.selectInput.value=this.data.language,this.api.listeners.on(this.selectInput,"click",c=>this._handleSelectInputClick(c),!1),a.setAttribute("class","codeBoxSelectPreview"),o.forEach(c=>{const i=document.createElement("p");i.setAttribute("class",`codeBoxSelectItem ${this.config.useDefaultTheme}`),i.setAttribute("data-key",c[0]),i.textContent=c[1],this.api.listeners.on(i,"click",r=>this._handleSelectItemClick(r,c),!1),a.appendChild(i)}),t.appendChild(this.selectDropIcon),t.appendChild(this.selectInput),t.appendChild(a),t}_highlightCodeArea(t){window.hljs.highlightBlock(this.codeArea)}_handleCodeAreaPaste(t){t.stopPropagation()}_handleSelectInputClick(t){t.target.nextSibling.classList.toggle("codeBoxShow")}_handleSelectItemClick(t,a){t.target.parentNode.parentNode.querySelector(".codeBoxSelectInput").value=a[1],t.target.parentNode.classList.remove("codeBoxShow"),this.codeArea.removeAttribute("class"),this.data.language=a[0],this.codeArea.setAttribute("class",`codeBoxTextArea ${this.config.useDefaultTheme} ${this.data.language}`),window.hljs.highlightBlock(this.codeArea)}_closeAllLanguageSelects(){const t=document.querySelectorAll(".codeBoxSelectPreview");for(let a=0,o=t.length;a<o;a++)t[a].classList.remove("codeBoxShow")}_injectHighlightJSScriptElement(){const t=document.querySelector(`#${this.highlightScriptID}`),a="https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/highlight.min.js";if(t)t.setAttribute("src",a);else{const o=document.createElement("script"),c=document.querySelector("head");o.setAttribute("src",a),o.setAttribute("id",this.highlightScriptID),c&&c.appendChild(o)}}_injectHighlightJSCSSElement(){const t=document.querySelector(`#${this.highlightCSSID}`);let a=this._getThemeURLFromConfig();if(t)t.setAttribute("href",a);else{const o=document.createElement("link"),c=document.querySelector("head");o.setAttribute("rel","stylesheet"),o.setAttribute("href",a),o.setAttribute("id",this.highlightCSSID),c&&c.appendChild(o)}}_getThemeURLFromConfig(){let t=`https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/atom-one-${this.config.useDefaultTheme}.min.css`;return this.config.themeName&&(t=`https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/${this.config.themeName}.min.css`),this.config.themeURL&&(t=this.config.themeURL),t}}(function(){try{if(typeof document<"u"){var n=document.createElement("style");n.appendChild(document.createTextNode('.cdx-nested-list{margin:0;padding:0;outline:none;counter-reset:item;list-style:none}.cdx-nested-list__item{line-height:1.6em;display:flex;margin:2px 0}.cdx-nested-list__item [contenteditable]{outline:none}.cdx-nested-list__item-body{flex-grow:2}.cdx-nested-list__item-content,.cdx-nested-list__item-children{flex-basis:100%}.cdx-nested-list__item-content{word-break:break-word;white-space:pre-wrap}.cdx-nested-list__item:before{counter-increment:item;margin-right:5px;white-space:nowrap}.cdx-nested-list--ordered>.cdx-nested-list__item:before{content:counters(item,".") ". "}.cdx-nested-list--unordered>.cdx-nested-list__item:before{content:"•"}.cdx-nested-list__settings{display:flex}.cdx-nested-list__settings .cdx-settings-button{width:50%}')),document.head.appendChild(n)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();function j2(n,t=null,a={}){const o=document.createElement(n);Array.isArray(t)?o.classList.add(...t):t&&o.classList.add(t);for(const c in a)o[c]=a[c];return o}function Sv(n){const t=j2("div");return t.appendChild(n),t.innerHTML}function Wv(n){let t;return n.nodeType!==Node.ELEMENT_NODE?t=n.textContent:(t=n.innerHTML,t=t.replaceAll("<br>","")),t.trim().length===0}class he{constructor(){this.savedFakeCaret=void 0}save(){const t=he.range,a=j2("span");a.hidden=!0,t.insertNode(a),this.savedFakeCaret=a}restore(){if(!this.savedFakeCaret)return;const t=window.getSelection(),a=new Range;a.setStartAfter(this.savedFakeCaret),a.setEndAfter(this.savedFakeCaret),t.removeAllRanges(),t.addRange(a),setTimeout(()=>{this.savedFakeCaret.remove()},150)}static get range(){const t=window.getSelection();return t&&t.rangeCount?t.getRangeAt(0):null}static extractFragmentFromCaretPositionTillTheEnd(){const t=window.getSelection();if(!t.rangeCount)return;const a=t.getRangeAt(0);let o=a.startContainer;o.nodeType!==Node.ELEMENT_NODE&&(o=o.parentNode);const c=o.closest("[contenteditable]");a.deleteContents();const i=a.cloneRange();return i.selectNodeContents(c),i.setStart(a.endContainer,a.endOffset),i.extractContents()}static focus(t,a=!0){const o=document.createRange(),c=window.getSelection();o.selectNodeContents(t),o.collapse(a),c.removeAllRanges(),c.addRange(o)}static isAtStart(){const t=window.getSelection();if(t.focusOffset>0)return!1;const a=t.focusNode;return he.getHigherLevelSiblings(a,"left").every(o=>Wv(o))}static getHigherLevelSiblings(t,a="left"){let o=t;const c=[];for(;o.parentNode&&o.parentNode.contentEditable!=="true";)o=o.parentNode;const i=a==="left"?"previousSibling":"nextSibling";for(;o[i];)o=o[i],c.push(o);return c}}const Cx='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="9" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="9" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 17H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 12H4.99002"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5.00001 7H4.99002"/></svg>',qv='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><line x1="12" x2="19" y1="7" y2="7" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="12" y2="12" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><line x1="12" x2="19" y1="17" y2="17" stroke="currentColor" stroke-linecap="round" stroke-width="2"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M7.79999 14L7.79999 7.2135C7.79999 7.12872 7.7011 7.0824 7.63597 7.13668L4.79999 9.5"/></svg>';let bx=class rv{static get isReadOnlySupported(){return!0}static get enableLineBreaks(){return!0}static get toolbox(){return{icon:qv,title:"List"}}constructor({data:t,config:a,api:o,readOnly:c}){this.nodes={wrapper:null},this.api=o,this.readOnly=c,this.config=a,this.defaultListStyle=this.config.defaultStyle==="ordered"?"ordered":"unordered";const i={style:this.defaultListStyle,items:[]};this.data=t&&Object.keys(t).length?t:i,this.caret=new he}render(){return this.nodes.wrapper=this.makeListWrapper(this.data.style,[this.CSS.baseBlock]),this.data.items.length?this.appendItems(this.data.items,this.nodes.wrapper):this.appendItems([{content:"",items:[]}],this.nodes.wrapper),this.readOnly||this.nodes.wrapper.addEventListener("keydown",t=>{switch(t.key){case"Enter":this.enterPressed(t);break;case"Backspace":this.backspace(t);break;case"Tab":t.shiftKey?this.shiftTab(t):this.addTab(t);break}},!1),this.nodes.wrapper}renderSettings(){return[{name:"unordered",label:this.api.i18n.t("Unordered"),icon:Cx},{name:"ordered",label:this.api.i18n.t("Ordered"),icon:qv}].map(t=>({name:t.name,icon:t.icon,label:t.label,isActive:this.data.style===t.name,closeOnActivate:!0,onActivate:()=>{this.listStyle=t.name}}))}static get pasteConfig(){return{tags:["OL","UL","LI"]}}onPaste(t){const a=t.detail.data;this.data=this.pasteHandler(a);const o=this.nodes.wrapper;o&&o.parentNode.replaceChild(this.render(),o)}pasteHandler(t){const{tagName:a}=t;let o,c;switch(a){case"OL":o="ordered",c="ol";break;case"UL":case"LI":o="unordered",c="ul"}const i={style:o,items:[]},r=h=>Array.from(h.querySelectorAll(":scope > li")).map(d=>{var s;const k=d.querySelector(`:scope > ${c}`),m=k?r(k):[];return{content:((s=d==null?void 0:d.firstChild)==null?void 0:s.textContent)||"",items:m}});return i.items=r(t),i}appendItems(t,a){t.forEach(o=>{const c=this.createItem(o.content,o.items);a.appendChild(c)})}createItem(t,a=[]){const o=j2("li",this.CSS.item),c=j2("div",this.CSS.itemBody),i=j2("div",this.CSS.itemContent,{innerHTML:t,contentEditable:!this.readOnly});return c.appendChild(i),o.appendChild(c),a&&a.length>0&&this.addChildrenList(o,a),o}save(){const t=a=>Array.from(a.querySelectorAll(`:scope > .${this.CSS.item}`)).map(o=>{const c=o.querySelector(`.${this.CSS.itemChildren}`),i=this.getItemContent(o),r=c?t(c):[];return{content:i,items:r}});return{style:this.data.style,items:t(this.nodes.wrapper)}}addChildrenList(t,a){const o=t.querySelector(`.${this.CSS.itemBody}`),c=this.makeListWrapper(void 0,[this.CSS.itemChildren]);this.appendItems(a,c),o.appendChild(c)}makeListWrapper(t=this.listStyle,a=[]){const o=t==="ordered"?"ol":"ul",c=t==="ordered"?this.CSS.wrapperOrdered:this.CSS.wrapperUnordered;return a.push(c),j2(o,[this.CSS.wrapper,...a])}get CSS(){return{baseBlock:this.api.styles.block,wrapper:"cdx-nested-list",wrapperOrdered:"cdx-nested-list--ordered",wrapperUnordered:"cdx-nested-list--unordered",item:"cdx-nested-list__item",itemBody:"cdx-nested-list__item-body",itemContent:"cdx-nested-list__item-content",itemChildren:"cdx-nested-list__item-children",settingsWrapper:"cdx-nested-list__settings",settingsButton:this.api.styles.settingsButton,settingsButtonActive:this.api.styles.settingsButtonActive}}get listStyle(){return this.data.style||this.defaultListStyle}set listStyle(t){const a=Array.from(this.nodes.wrapper.querySelectorAll(`.${this.CSS.wrapper}`));a.push(this.nodes.wrapper),a.forEach(o=>{o.classList.toggle(this.CSS.wrapperUnordered,t==="unordered"),o.classList.toggle(this.CSS.wrapperOrdered,t==="ordered")}),this.data.style=t}get currentItem(){let t=window.getSelection().anchorNode;return t.nodeType!==Node.ELEMENT_NODE&&(t=t.parentNode),t.closest(`.${this.CSS.item}`)}enterPressed(t){const a=this.currentItem;if(t.stopPropagation(),t.preventDefault(),t.isComposing)return;const o=this.getItemContent(a).trim().length===0,c=a.parentNode===this.nodes.wrapper,i=a.nextElementSibling===null;if(c&&i&&o){this.getOutOfList();return}else if(i&&o){this.unshiftItem();return}const r=he.extractFragmentFromCaretPositionTillTheEnd(),h=Sv(r),d=a.querySelector(`.${this.CSS.itemChildren}`),s=this.createItem(h,void 0);d&&Array.from(d.querySelectorAll(`.${this.CSS.item}`)).length>0?d.prepend(s):a.after(s),this.focusItem(s)}unshiftItem(){const t=this.currentItem,a=t.parentNode.closest(`.${this.CSS.item}`);if(!a)return;this.caret.save(),a.after(t),this.caret.restore();const o=a.querySelector(`.${this.CSS.itemChildren}`);o.children.length===0&&o.remove()}getItemContent(t){const a=t.querySelector(`.${this.CSS.itemContent}`);return Wv(a)?"":a.innerHTML}focusItem(t,a=!0){const o=t.querySelector(`.${this.CSS.itemContent}`);he.focus(o,a)}getOutOfList(){this.currentItem.remove(),this.api.blocks.insert(),this.api.caret.setToBlock(this.api.blocks.getCurrentBlockIndex())}backspace(t){if(!he.isAtStart())return;t.preventDefault();const a=this.currentItem,o=a.previousSibling,c=a.parentNode.closest(`.${this.CSS.item}`);if(!o&&!c)return;t.stopPropagation();let i;if(o){const k=o.querySelectorAll(`.${this.CSS.item}`);i=Array.from(k).pop()||o}else i=c;const r=he.extractFragmentFromCaretPositionTillTheEnd(),h=Sv(r),d=i.querySelector(`.${this.CSS.itemContent}`);he.focus(d,!1),this.caret.save(),d.insertAdjacentHTML("beforeend",h);let s=a.querySelectorAll(`.${this.CSS.itemChildren} > .${this.CSS.item}`);s=Array.from(s),s=s.filter(k=>k.parentNode.closest(`.${this.CSS.item}`)===a),s.reverse().forEach(k=>{o?i.after(k):a.after(k)}),a.remove(),this.caret.restore()}addTab(t){t.stopPropagation(),t.preventDefault();const a=this.currentItem,o=a.previousSibling;if(!o)return;const c=o.querySelector(`.${this.CSS.itemChildren}`);if(this.caret.save(),c)c.appendChild(a);else{const i=this.makeListWrapper(void 0,[this.CSS.itemChildren]),r=o.querySelector(`.${this.CSS.itemBody}`);i.appendChild(a),r.appendChild(i)}this.caret.restore()}shiftTab(t){t.stopPropagation(),t.preventDefault(),this.unshiftItem()}static joinRecursive(t){return t.items.map(a=>`${a.content} ${rv.joinRecursive(a)}`).join("")}static get conversionConfig(){return{export:t=>rv.joinRecursive(t),import:t=>({items:[{content:t,items:[]}],style:"unordered"})}}};(function(){try{if(typeof document<"u"){var n=document.createElement("style");n.appendChild(document.createTextNode(".inline-code{background:rgba(250,239,240,.78);color:#b44437;padding:3px 4px;border-radius:5px;margin:0 1px;font-family:inherit;font-size:.86em;font-weight:500;letter-spacing:.3px}")),document.head.appendChild(n)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();const Sx='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M9.5 8L6.11524 11.8683C6.04926 11.9437 6.04926 12.0563 6.11524 12.1317L9.5 16"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M15 8L18.3848 11.8683C18.4507 11.9437 18.4507 12.0563 18.3848 12.1317L15 16"/></svg>';let qx=class $2{static get CSS(){return"inline-code"}constructor({api:t}){this.api=t,this.button=null,this.tag="CODE",this.iconClasses={base:this.api.styles.inlineToolButton,active:this.api.styles.inlineToolButtonActive}}static get isInline(){return!0}render(){return this.button=document.createElement("button"),this.button.type="button",this.button.classList.add(this.iconClasses.base),this.button.innerHTML=this.toolboxIcon,this.button}surround(t){if(!t)return;let a=this.api.selection.findParentTag(this.tag,$2.CSS);a?this.unwrap(a):this.wrap(t)}wrap(t){let a=document.createElement(this.tag);a.classList.add($2.CSS),a.appendChild(t.extractContents()),t.insertNode(a),this.api.selection.expandToTag(a)}unwrap(t){this.api.selection.expandToTag(t);let a=window.getSelection(),o=a.getRangeAt(0),c=o.extractContents();t.parentNode.removeChild(t),o.insertNode(c),a.removeAllRanges(),a.addRange(o)}checkState(){const t=this.api.selection.findParentTag(this.tag,$2.CSS);this.button.classList.toggle(this.iconClasses.active,!!t)}get toolboxIcon(){return Sx}static get sanitize(){return{code:{class:$2.CSS}}}};var Xv=60,Kv=Xv*60,Jv=Kv*24,Ax=Jv*7,Z2=1e3,tv=Xv*Z2,Av=Kv*Z2,Hx=Jv*Z2,zx=Ax*Z2,Mv="millisecond",I2="second",x2="minute",f2="hour",le="day",Nm="week",Q="month",Yv="quarter",se="year",_2="date",Qv="YYYY-MM-DDTHH:mm:ssZ",Hv="Invalid Date",Vx=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Px=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g;const jx={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var a=["th","st","nd","rd"],o=t%100;return"["+t+(a[(o-20)%10]||a[o]||a[0])+"]"}};var dv=function(t,a,o){var c=String(t);return!c||c.length>=a?t:""+Array(a+1-c.length).join(o)+t},_x=function(t){var a=-t.utcOffset(),o=Math.abs(a),c=Math.floor(o/60),i=o%60;return(a<=0?"+":"-")+dv(c,2,"0")+":"+dv(i,2,"0")},Dx=function n(t,a){if(t.date()<a.date())return-n(a,t);var o=(a.year()-t.year())*12+(a.month()-t.month()),c=t.clone().add(o,Q),i=a-c<0,r=t.clone().add(o+(i?-1:1),Q);return+(-(o+(a-c)/(i?c-r:r-c))||0)},Bx=function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},Fx=function(t){var a={M:Q,y:se,w:Nm,d:le,D:_2,h:f2,m:x2,s:I2,ms:Mv,Q:Yv};return a[t]||String(t||"").toLowerCase().replace(/s$/,"")},Tx=function(t){return t===void 0};const Rx={s:dv,z:_x,m:Dx,a:Bx,p:Fx,u:Tx};var ca="en",S2={};S2[ca]=jx;var eg="$isDayjsObject",mv=function(t){return t instanceof ev||!!(t&&t[eg])},Km=function n(t,a,o){var c;if(!t)return ca;if(typeof t=="string"){var i=t.toLowerCase();S2[i]&&(c=i),a&&(S2[i]=a,c=i);var r=t.split("-");if(!c&&r.length>1)return n(r[0])}else{var h=t.name;S2[h]=t,c=h}return!o&&c&&(ca=c),c||!o&&ca},T=function(t,a){if(mv(t))return t.clone();var o=typeof a=="object"?a:{};return o.date=t,o.args=arguments,new ev(o)},Ox=function(t,a){return T(t,{locale:a.$L,utc:a.$u,x:a.$x,$offset:a.$offset})},F=Rx;F.l=Km;F.i=mv;F.w=Ox;var Ux=function(t){var a=t.date,o=t.utc;if(a===null)return new Date(NaN);if(F.u(a))return new Date;if(a instanceof Date)return new Date(a);if(typeof a=="string"&&!/Z$/i.test(a)){var c=a.match(Vx);if(c){var i=c[2]-1||0,r=(c[7]||"0").substring(0,3);return o?new Date(Date.UTC(c[1],i,c[3]||1,c[4]||0,c[5]||0,c[6]||0,r)):new Date(c[1],i,c[3]||1,c[4]||0,c[5]||0,c[6]||0,r)}}return new Date(a)},ev=function(){function n(a){this.$L=Km(a.locale,null,!0),this.parse(a),this.$x=this.$x||a.x||{},this[eg]=!0}var t=n.prototype;return t.parse=function(o){this.$d=Ux(o),this.init()},t.init=function(){var o=this.$d;this.$y=o.getFullYear(),this.$M=o.getMonth(),this.$D=o.getDate(),this.$W=o.getDay(),this.$H=o.getHours(),this.$m=o.getMinutes(),this.$s=o.getSeconds(),this.$ms=o.getMilliseconds()},t.$utils=function(){return F},t.isValid=function(){return this.$d.toString()!==Hv},t.isSame=function(o,c){var i=T(o);return this.startOf(c)<=i&&i<=this.endOf(c)},t.isAfter=function(o,c){return T(o)<this.startOf(c)},t.isBefore=function(o,c){return this.endOf(c)<T(o)},t.$g=function(o,c,i){return F.u(o)?this[c]:this.set(i,o)},t.unix=function(){return Math.floor(this.valueOf()/1e3)},t.valueOf=function(){return this.$d.getTime()},t.startOf=function(o,c){var i=this,r=F.u(c)?!0:c,h=F.p(o),d=function(S,I){var L=F.w(i.$u?Date.UTC(i.$y,I,S):new Date(i.$y,I,S),i);return r?L:L.endOf(le)},s=function(S,I){var L=[0,0,0,0],P=[23,59,59,999];return F.w(i.toDate()[S].apply(i.toDate("s"),(r?L:P).slice(I)),i)},k=this.$W,m=this.$M,p=this.$D,g="set"+(this.$u?"UTC":"");switch(h){case se:return r?d(1,0):d(31,11);case Q:return r?d(1,m):d(0,m+1);case Nm:{var M=this.$locale().weekStart||0,C=(k<M?k+7:k)-M;return d(r?p-C:p+(6-C),m)}case le:case _2:return s(g+"Hours",0);case f2:return s(g+"Minutes",1);case x2:return s(g+"Seconds",2);case I2:return s(g+"Milliseconds",3);default:return this.clone()}},t.endOf=function(o){return this.startOf(o,!1)},t.$set=function(o,c){var i,r=F.p(o),h="set"+(this.$u?"UTC":""),d=(i={},i[le]=h+"Date",i[_2]=h+"Date",i[Q]=h+"Month",i[se]=h+"FullYear",i[f2]=h+"Hours",i[x2]=h+"Minutes",i[I2]=h+"Seconds",i[Mv]=h+"Milliseconds",i)[r],s=r===le?this.$D+(c-this.$W):c;if(r===Q||r===se){var k=this.clone().set(_2,1);k.$d[d](s),k.init(),this.$d=k.set(_2,Math.min(this.$D,k.daysInMonth())).$d}else d&&this.$d[d](s);return this.init(),this},t.set=function(o,c){return this.clone().$set(o,c)},t.get=function(o){return this[F.p(o)]()},t.add=function(o,c){var i=this,r;o=Number(o);var h=F.p(c),d=function(p){var g=T(i);return F.w(g.date(g.date()+Math.round(p*o)),i)};if(h===Q)return this.set(Q,this.$M+o);if(h===se)return this.set(se,this.$y+o);if(h===le)return d(1);if(h===Nm)return d(7);var s=(r={},r[x2]=tv,r[f2]=Av,r[I2]=Z2,r)[h]||1,k=this.$d.getTime()+o*s;return F.w(k,this)},t.subtract=function(o,c){return this.add(o*-1,c)},t.format=function(o){var c=this,i=this.$locale();if(!this.isValid())return i.invalidDate||Hv;var r=o||Qv,h=F.z(this),d=this.$H,s=this.$m,k=this.$M,m=i.weekdays,p=i.months,g=i.meridiem,M=function(L,P,H,$){return L&&(L[P]||L(c,r))||H[P].slice(0,$)},C=function(L){return F.s(d%12||12,L,"0")},f=g||function(I,L,P){var H=I<12?"AM":"PM";return P?H.toLowerCase():H},S=function(L){switch(L){case"YY":return String(c.$y).slice(-2);case"YYYY":return F.s(c.$y,4,"0");case"M":return k+1;case"MM":return F.s(k+1,2,"0");case"MMM":return M(i.monthsShort,k,p,3);case"MMMM":return M(p,k);case"D":return c.$D;case"DD":return F.s(c.$D,2,"0");case"d":return String(c.$W);case"dd":return M(i.weekdaysMin,c.$W,m,2);case"ddd":return M(i.weekdaysShort,c.$W,m,3);case"dddd":return m[c.$W];case"H":return String(d);case"HH":return F.s(d,2,"0");case"h":return C(1);case"hh":return C(2);case"a":return f(d,s,!0);case"A":return f(d,s,!1);case"m":return String(s);case"mm":return F.s(s,2,"0");case"s":return String(c.$s);case"ss":return F.s(c.$s,2,"0");case"SSS":return F.s(c.$ms,3,"0");case"Z":return h}return null};return r.replace(Px,function(I,L){return L||S(I)||h.replace(":","")})},t.utcOffset=function(){return-Math.round(this.$d.getTimezoneOffset()/15)*15},t.diff=function(o,c,i){var r=this,h=F.p(c),d=T(o),s=(d.utcOffset()-this.utcOffset())*tv,k=this-d,m=function(){return F.m(r,d)},p;switch(h){case se:p=m()/12;break;case Q:p=m();break;case Yv:p=m()/3;break;case Nm:p=(k-s)/zx;break;case le:p=(k-s)/Hx;break;case f2:p=k/Av;break;case x2:p=k/tv;break;case I2:p=k/Z2;break;default:p=k;break}return i?p:F.a(p)},t.daysInMonth=function(){return this.endOf(Q).$D},t.$locale=function(){return S2[this.$L]},t.locale=function(o,c){if(!o)return this.$L;var i=this.clone(),r=Km(o,c,!0);return r&&(i.$L=r),i},t.clone=function(){return F.w(this.$d,this)},t.toDate=function(){return new Date(this.valueOf())},t.toJSON=function(){return this.isValid()?this.toISOString():null},t.toISOString=function(){return this.$d.toISOString()},t.toString=function(){return this.$d.toUTCString()},n}(),tg=ev.prototype;T.prototype=tg;[["$ms",Mv],["$s",I2],["$m",x2],["$H",f2],["$W",le],["$M",Q],["$y",se],["$D",_2]].forEach(function(n){tg[n[1]]=function(t){return this.$g(t,n[0],n[1])}});T.extend=function(n,t){return n.$i||(n(t,ev,T),n.$i=!0),T};T.locale=Km;T.isDayjs=mv;T.unix=function(n){return T(n*1e3)};T.en=S2[ca];T.Ls=S2;T.p={};const Ex=function(n,t,a){n=n||{};var o=t.prototype,c={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};a.en.relativeTime=c,o.fromToBase=function(h,d,s,k,m){for(var p=s.$locale().relativeTime||c,g=n.thresholds||[{l:"s",r:44,d:I2},{l:"m",r:89},{l:"mm",r:44,d:x2},{l:"h",r:89},{l:"hh",r:21,d:f2},{l:"d",r:35},{l:"dd",r:25,d:le},{l:"M",r:45},{l:"MM",r:10,d:Q},{l:"y",r:17},{l:"yy",d:se}],M=g.length,C,f,S,I=0;I<M;I+=1){var L=g[I];L.d&&(C=k?a(h).diff(s,L.d,!0):s.diff(h,L.d,!0));var P=(n.rounding||Math.round)(Math.abs(C));if(S=C>0,P<=L.r||!L.r){P<=1&&I>0&&(L=g[I-1]);var H=p[L.l];m&&(P=m(""+P)),typeof H=="string"?f=H.replace("%d",P):f=H(P,d,L.l,S);break}}if(d)return f;var $=S?p.future:p.past;return typeof $=="function"?$(f):$.replace("%s",f)};function i(h,d,s,k){return o.fromToBase(h,d,s,k)}o.to=function(h,d){return i(h,d,this,!0)},o.from=function(h,d){return i(h,d,this)};var r=function(d){return d.$u?a.utc():a()};o.toNow=function(h){return this.to(r(this),h)},o.fromNow=function(h){return this.from(r(this),h)}};var Zx=function(t){return t.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,function(a,o,c){return o||c.slice(1)})},ag={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"},$x=function(t,a){return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,function(o,c,i){var r=i&&i.toUpperCase();return c||a[i]||ag[i]||Zx(a[r])})};const Gx=function(n,t,a){var o=t.prototype,c=o.format;a.en.formats=ag,o.format=function(i){i===void 0&&(i=Qv);var r=this.$locale(),h=r.formats,d=h===void 0?{}:h,s=$x(i,d);return c.call(this,s)}},Nx=function(n,t,a){a.updateLocale=function(o,c){var i=a.Ls,r=i[o];if(r){var h=c?Object.keys(c):[];return h.forEach(function(d){r[d]=c[d]}),r}}},Wx=function(n,t,a){var o=t.prototype;o.isToday=function(){var c="YYYY-MM-DD",i=a();return this.format(c)===i.format(c)}},Xx=function(n,t){t.prototype.isSameOrBefore=function(a,o){return this.isSame(a,o)||this.isBefore(a,o)}},Kx=function(n,t){t.prototype.isSameOrAfter=function(a,o){return this.isSame(a,o)||this.isAfter(a,o)}};T.extend(Nx);T.extend(Ex);T.extend(Gx);T.extend(Wx);T.extend(Xx);T.extend(Kx);(function(){try{if(typeof document<"u"){var n=document.createElement("style");n.appendChild(document.createTextNode('.embed-tool--loading .embed-tool__caption{display:none}.embed-tool--loading .embed-tool__preloader{display:block}.embed-tool--loading .embed-tool__content{display:none}.embed-tool__preloader{display:none;position:relative;height:200px;box-sizing:border-box;border-radius:5px;border:1px solid #e6e9eb}.embed-tool__preloader:before{content:"";position:absolute;z-index:3;left:50%;top:50%;width:30px;height:30px;margin-top:-25px;margin-left:-15px;border-radius:50%;border:2px solid #cdd1e0;border-top-color:#388ae5;box-sizing:border-box;animation:embed-preloader-spin 2s infinite linear}.embed-tool__url{position:absolute;bottom:20px;left:50%;transform:translate(-50%);max-width:250px;color:#7b7e89;font-size:11px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.embed-tool__content{width:100%}.embed-tool__caption{margin-top:7px}.embed-tool__caption[contentEditable=true][data-placeholder]:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.embed-tool__caption[contentEditable=true][data-placeholder]:empty:before{opacity:1}.embed-tool__caption[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}@keyframes embed-preloader-spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}')),document.head.appendChild(n)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();const Jx={vimeo:{regex:/(?:http[s]?:\/\/)?(?:www.)?(?:player.)?vimeo\.co(?:.+\/([^\/]\d+)(?:#t=[\d]+)?s?$)/,embedUrl:"https://player.vimeo.com/video/<%= remote_id %>?title=0&byline=0",html:'<iframe style="width:100%;" height="320" frameborder="0"></iframe>',height:320,width:580},youtube:{regex:/(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=\w*)*)/,embedUrl:"https://www.youtube.com/embed/<%= remote_id %>",html:'<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',height:320,width:580,id:([n,t])=>{if(!t&&n)return n;const a={start:"start",end:"end",t:"start",time_continue:"start",list:"list"};return t=t.slice(1).split("&").map(o=>{const[c,i]=o.split("=");return!n&&c==="v"?(n=i,null):!a[c]||i==="LL"||i.startsWith("RDMM")||i.startsWith("FL")?null:`${a[c]}=${i}`}).filter(o=>!!o),n+"?"+t.join("&")}},coub:{regex:/https?:\/\/coub\.com\/view\/([^\/\?\&]+)/,embedUrl:"https://coub.com/embed/<%= remote_id %>",html:'<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',height:320,width:580},vine:{regex:/https?:\/\/vine\.co\/v\/([^\/\?\&]+)/,embedUrl:"https://vine.co/v/<%= remote_id %>/embed/simple/",html:'<iframe style="width:100%;" height="320" frameborder="0" allowfullscreen></iframe>',height:320,width:580},imgur:{regex:/https?:\/\/(?:i\.)?imgur\.com.*\/([a-zA-Z0-9]+)(?:\.gifv)?/,embedUrl:"http://imgur.com/<%= remote_id %>/embed",html:'<iframe allowfullscreen="true" scrolling="no" id="imgur-embed-iframe-pub-<%= remote_id %>" class="imgur-embed-iframe-pub" style="height: 500px; width: 100%; border: 1px solid #000"></iframe>',height:500,width:540},gfycat:{regex:/https?:\/\/gfycat\.com(?:\/detail)?\/([a-zA-Z]+)/,embedUrl:"https://gfycat.com/ifr/<%= remote_id %>",html:`<iframe frameborder='0' scrolling='no' style="width:100%;" height='436' allowfullscreen ></iframe>`,height:436,width:580},"twitch-channel":{regex:/https?:\/\/www\.twitch\.tv\/([^\/\?\&]*)\/?$/,embedUrl:"https://player.twitch.tv/?channel=<%= remote_id %>",html:'<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',height:366,width:600},"twitch-video":{regex:/https?:\/\/www\.twitch\.tv\/(?:[^\/\?\&]*\/v|videos)\/([0-9]*)/,embedUrl:"https://player.twitch.tv/?video=v<%= remote_id %>",html:'<iframe frameborder="0" allowfullscreen="true" scrolling="no" height="366" style="width:100%;"></iframe>',height:366,width:600},"yandex-music-album":{regex:/https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/?$/,embedUrl:"https://music.yandex.ru/iframe/#album/<%= remote_id %>/",html:'<iframe frameborder="0" style="border:none;width:540px;height:400px;" style="width:100%;" height="400"></iframe>',height:400,width:540},"yandex-music-track":{regex:/https?:\/\/music\.yandex\.ru\/album\/([0-9]*)\/track\/([0-9]*)/,embedUrl:"https://music.yandex.ru/iframe/#track/<%= remote_id %>/",html:'<iframe frameborder="0" style="border:none;width:540px;height:100px;" style="width:100%;" height="100"></iframe>',height:100,width:540,id:n=>n.join("/")},"yandex-music-playlist":{regex:/https?:\/\/music\.yandex\.ru\/users\/([^\/\?\&]*)\/playlists\/([0-9]*)/,embedUrl:"https://music.yandex.ru/iframe/#playlist/<%= remote_id %>/show/cover/description/",html:'<iframe frameborder="0" style="border:none;width:540px;height:400px;" width="540" height="400"></iframe>',height:400,width:540,id:n=>n.join("/")},codepen:{regex:/https?:\/\/codepen\.io\/([^\/\?\&]*)\/pen\/([^\/\?\&]*)/,embedUrl:"https://codepen.io/<%= remote_id %>?height=300&theme-id=0&default-tab=css,result&embed-version=2",html:"<iframe height='300' scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'></iframe>",height:300,width:600,id:n=>n.join("/embed/")},instagram:{regex:/https?:\/\/www\.instagram\.com\/p\/([^\/\?\&]+)\/?.*/,embedUrl:"https://www.instagram.com/p/<%= remote_id %>/embed",html:'<iframe width="400" height="505" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',height:505,width:400},twitter:{regex:/^https?:\/\/(www\.)?(?:twitter\.com|x\.com)\/.+\/status\/(\d+)/,embedUrl:"https://platform.twitter.com/embed/Tweet.html?id=<%= remote_id %>",html:'<iframe width="600" height="600" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',height:300,width:600,id:n=>n[1]},pinterest:{regex:/https?:\/\/([^\/\?\&]*).pinterest.com\/pin\/([^\/\?\&]*)\/?$/,embedUrl:"https://assets.pinterest.com/ext/embed.html?id=<%= remote_id %>",html:"<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 400px; max-height: 1000px;'></iframe>",id:n=>n[1]},facebook:{regex:/https?:\/\/www.facebook.com\/([^\/\?\&]*)\/(.*)/,embedUrl:"https://www.facebook.com/plugins/post.php?href=https://www.facebook.com/<%= remote_id %>&width=500",html:"<iframe scrolling='no' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%; min-height: 500px; max-height: 1000px;'></iframe>",id:n=>n.join("/")},aparat:{regex:/(?:http[s]?:\/\/)?(?:www.)?aparat\.com\/v\/([^\/\?\&]+)\/?/,embedUrl:"https://www.aparat.com/video/video/embed/videohash/<%= remote_id %>/vt/frame",html:'<iframe width="600" height="300" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',height:300,width:600},miro:{regex:/https:\/\/miro.com\/\S+(\S{12})\/(\S+)?/,embedUrl:"https://miro.com/app/live-embed/<%= remote_id %>",html:'<iframe width="700" height="500" style="margin: 0 auto;" allowFullScreen frameBorder="0" scrolling="no"></iframe>'},github:{regex:/https?:\/\/gist.github.com\/([^\/\?\&]*)\/([^\/\?\&]*)/,embedUrl:'data:text/html;charset=utf-8,<head><base target="_blank" /></head><body><script src="https://gist.github.com/<%= remote_id %>" ><\/script></body>',html:'<iframe width="100%" height="350" frameborder="0" style="margin: 0 auto;"></iframe>',height:300,width:600,id:n=>`${n.join("/")}.js`}};function hv(n,t,a){var o,c,i,r,h;t==null&&(t=100);function d(){var k=Date.now()-r;k<t&&k>=0?o=setTimeout(d,t-k):(o=null,a||(h=n.apply(i,c),i=c=null))}var s=function(){i=this,c=arguments,r=Date.now();var k=a&&!o;return o||(o=setTimeout(d,t)),k&&(h=n.apply(i,c),i=c=null),h};return s.clear=function(){o&&(clearTimeout(o),o=null)},s.flush=function(){o&&(h=n.apply(i,c),i=c=null,clearTimeout(o),o=null)},s}hv.debounce=hv;var Yx=hv;class ke{constructor({data:t,api:a,readOnly:o}){this.api=a,this._data={},this.element=null,this.readOnly=o,this.data=t}set data(t){if(!(t instanceof Object))throw Error("Embed Tool data should be object");const{service:a,source:o,embed:c,width:i,height:r,caption:h=""}=t;this._data={service:a||this.data.service,source:o||this.data.source,embed:c||this.data.embed,width:i||this.data.width,height:r||this.data.height,caption:h||this.data.caption||""};const d=this.element;d&&d.parentNode.replaceChild(this.render(),d)}get data(){if(this.element){const t=this.element.querySelector(`.${this.api.styles.input}`);this._data.caption=t?t.innerHTML:""}return this._data}get CSS(){return{baseClass:this.api.styles.block,input:this.api.styles.input,container:"embed-tool",containerLoading:"embed-tool--loading",preloader:"embed-tool__preloader",caption:"embed-tool__caption",url:"embed-tool__url",content:"embed-tool__content"}}render(){if(!this.data.service){const h=document.createElement("div");return this.element=h,h}const{html:t}=ke.services[this.data.service],a=document.createElement("div"),o=document.createElement("div"),c=document.createElement("template"),i=this.createPreloader();a.classList.add(this.CSS.baseClass,this.CSS.container,this.CSS.containerLoading),o.classList.add(this.CSS.input,this.CSS.caption),a.appendChild(i),o.contentEditable=!this.readOnly,o.dataset.placeholder=this.api.i18n.t("Enter a caption"),o.innerHTML=this.data.caption||"",c.innerHTML=t,c.content.firstChild.setAttribute("src",this.data.embed),c.content.firstChild.classList.add(this.CSS.content);const r=this.embedIsReady(a);return a.appendChild(c.content.firstChild),a.appendChild(o),r.then(()=>{a.classList.remove(this.CSS.containerLoading)}),this.element=a,a}createPreloader(){const t=document.createElement("preloader"),a=document.createElement("div");return a.textContent=this.data.source,t.classList.add(this.CSS.preloader),a.classList.add(this.CSS.url),t.appendChild(a),t}save(){return this.data}onPaste(t){const{key:a,data:o}=t.detail,{regex:c,embedUrl:i,width:r,height:h,id:d=m=>m.shift()}=ke.services[a],s=c.exec(o).slice(1),k=i.replace(/<%= remote_id %>/g,d(s));this.data={service:a,source:o,embed:k,width:r,height:h}}static prepare({config:t={}}){const{services:a={}}=t;let o=Object.entries(Jx);const c=Object.entries(a).filter(([r,h])=>typeof h=="boolean"&&h===!0).map(([r])=>r),i=Object.entries(a).filter(([r,h])=>typeof h=="object").filter(([r,h])=>ke.checkServiceConfig(h)).map(([r,h])=>{const{regex:d,embedUrl:s,html:k,height:m,width:p,id:g}=h;return[r,{regex:d,embedUrl:s,html:k,height:m,width:p,id:g}]});c.length&&(o=o.filter(([r])=>c.includes(r))),o=o.concat(i),ke.services=o.reduce((r,[h,d])=>h in r?(r[h]=Object.assign({},r[h],d),r):(r[h]=d,r),{}),ke.patterns=o.reduce((r,[h,d])=>(r[h]=d.regex,r),{})}static checkServiceConfig(t){const{regex:a,embedUrl:o,html:c,height:i,width:r,id:h}=t;let d=a&&a instanceof RegExp&&o&&typeof o=="string"&&c&&typeof c=="string";return d=d&&(h!==void 0?h instanceof Function:!0),d=d&&(i!==void 0?Number.isFinite(i):!0),d=d&&(r!==void 0?Number.isFinite(r):!0),d}static get pasteConfig(){return{patterns:ke.patterns}}static get isReadOnlySupported(){return!0}embedIsReady(t){let a=null;return new Promise((o,c)=>{a=new MutationObserver(Yx.debounce(o,450)),a.observe(t,{childList:!0,subtree:!0})}).then(()=>{a.disconnect()})}}(function(){try{if(typeof document<"u"){var n=document.createElement("style");n.appendChild(document.createTextNode(".cdx-simple-image .cdx-loader{min-height:200px}.cdx-simple-image .cdx-input{margin-top:10px}.cdx-simple-image img{max-width:100%;vertical-align:bottom}.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty:before{position:absolute;content:attr(data-placeholder);color:#707684;font-weight:400;opacity:0}.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty:before{opacity:1}.cdx-simple-image__caption[contentEditable=true][data-placeholder]:empty:focus:before{opacity:0}.cdx-simple-image__picture--with-background{background:#eff2f5;padding:10px}.cdx-simple-image__picture--with-background img{display:block;max-width:60%;margin:0 auto}.cdx-simple-image__picture--with-border{border:1px solid #e8e8eb;padding:1px}.cdx-simple-image__picture--stretched img{max-width:none;width:100%}")),document.head.appendChild(n)}}catch(t){console.error("vite-plugin-css-injected-by-js",t)}})();const Qx='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 19V19C9.13623 19 8.20435 19 7.46927 18.6955C6.48915 18.2895 5.71046 17.5108 5.30448 16.5307C5 15.7956 5 14.8638 5 13V12C5 9.19108 5 7.78661 5.67412 6.77772C5.96596 6.34096 6.34096 5.96596 6.77772 5.67412C7.78661 5 9.19108 5 12 5H13.5C14.8956 5 15.5933 5 16.1611 5.17224C17.4395 5.56004 18.44 6.56046 18.8278 7.83886C19 8.40666 19 9.10444 19 10.5V10.5"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6.5 17.5L17.5 6.5"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 10.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.9919 19H11.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13L13 5"/></svg>',ef='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.9919 9.5H19.0015"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.5 5H14.5096"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M14.625 5H15C17.2091 5 19 6.79086 19 9V9.375"/><path stroke="currentColor" stroke-width="2" d="M9.375 5L9 5C6.79086 5 5 6.79086 5 9V9.375"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 5H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 9.5H5.00957"/><path stroke="currentColor" stroke-width="2" d="M9.375 19H9C6.79086 19 5 17.2091 5 15V14.625"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.3725 19H9.38207"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 14.55H5.00957"/><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M16 13V16M16 19V16M19 16H16M16 16H13"/></svg>',tf='<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9L20 12L17 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 12H20"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 9L4 12L7 15"/><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12H10"/></svg>';class af{constructor({data:t,config:a,api:o,readOnly:c}){this.api=o,this.readOnly=c,this.blockIndex=this.api.blocks.getCurrentBlockIndex()+1,this.CSS={baseClass:this.api.styles.block,loading:this.api.styles.loader,input:this.api.styles.input,wrapper:"cdx-simple-image",imageHolder:"cdx-simple-image__picture",caption:"cdx-simple-image__caption"},this.nodes={wrapper:null,imageHolder:null,image:null,caption:null},this.data={url:t.url||"",caption:t.caption||"",withBorder:t.withBorder!==void 0?t.withBorder:!1,withBackground:t.withBackground!==void 0?t.withBackground:!1,stretched:t.stretched!==void 0?t.stretched:!1},this.tunes=[{name:"withBorder",label:"Add Border",icon:ef},{name:"stretched",label:"Stretch Image",icon:tf},{name:"withBackground",label:"Add Background",icon:Qx}]}render(){const t=this._make("div",[this.CSS.baseClass,this.CSS.wrapper]),a=this._make("div",this.CSS.loading),o=this._make("div",this.CSS.imageHolder),c=this._make("img"),i=this._make("div",[this.CSS.input,this.CSS.caption],{contentEditable:!this.readOnly,innerHTML:this.data.caption||""});return i.dataset.placeholder="Enter a caption",t.appendChild(a),this.data.url&&(c.src=this.data.url),c.onload=()=>{t.classList.remove(this.CSS.loading),o.appendChild(c),t.appendChild(o),t.appendChild(i),a.remove(),this._acceptTuneView()},c.onerror=r=>{console.log("Failed to load an image",r)},this.nodes.imageHolder=o,this.nodes.wrapper=t,this.nodes.image=c,this.nodes.caption=i,t}save(t){const a=t.querySelector("img"),o=t.querySelector("."+this.CSS.input);return a?Object.assign(this.data,{url:a.src,caption:o.innerHTML}):this.data}static get sanitize(){return{url:{},withBorder:{},withBackground:{},stretched:{},caption:{br:!0}}}static get isReadOnlySupported(){return!0}onDropHandler(t){const a=new FileReader;return a.readAsDataURL(t),new Promise(o=>{a.onload=c=>{o({url:c.target.result,caption:t.name})}})}onPaste(t){switch(t.type){case"tag":{const a=t.detail.data;this.data={url:a.src};break}case"pattern":{const{data:a}=t.detail;this.data={url:a};break}case"file":{const{file:a}=t.detail;this.onDropHandler(a).then(o=>{this.data=o});break}}}get data(){return this._data}set data(t){this._data=Object.assign({},this.data,t),this.nodes.image&&(this.nodes.image.src=this.data.url),this.nodes.caption&&(this.nodes.caption.innerHTML=this.data.caption)}static get pasteConfig(){return{patterns:{image:/https?:\/\/\S+\.(gif|jpe?g|tiff|png|webp)$/i},tags:[{img:{src:!0}}],files:{mimeTypes:["image/*"]}}}renderSettings(){return this.tunes.map(t=>ha(z2({},t),{label:this.api.i18n.t(t.label),toggle:!0,onActivate:()=>this._toggleTune(t.name),isActive:!!this.data[t.name]}))}_make(t,a=null,o={}){const c=document.createElement(t);Array.isArray(a)?c.classList.add(...a):a&&c.classList.add(a);for(const i in o)c[i]=o[i];return c}_toggleTune(t){this.data[t]=!this.data[t],this._acceptTuneView()}_acceptTuneView(){this.tunes.forEach(t=>{this.nodes.imageHolder.classList.toggle(this.CSS.imageHolder+"--"+t.name.replace(/([A-Z])/g,a=>`-${a[0].toLowerCase()}`),!!this.data[t.name]),t.name==="stretched"&&this.api.blocks.stretchBlock(this.blockIndex,!!this.data.stretched)})}}function og(n){Lg(z2({position:"bottom-right"},n))}function of(n){return wg(n).value}function YL(n){if(!n)return"";const[t,a]=n.split(":").map(Number),o=new Date(0,0,0,t,a);return new Intl.DateTimeFormat("en-US",{hour:"numeric",minute:"numeric",hour12:!0}).format(o)}function QL(n){return n.toLocaleString("en-IN",{maximumFractionDigits:0})}function ew(n,t){return n?n.toLocaleString("en-IN",{maximumFractionDigits:0,style:"currency",currency:t}):""}function cf(n){return n?n.toLowerCase().split(" ").map(function(t){return t.charAt(0).toUpperCase().concat(t.substr(1))}).join(" "):""}function tw(n){let t=parseInt(n);return t>1048576?(t/1048576).toFixed(2)+"M":t>1024?(t/1024).toFixed(2)+"K":t}function zv(n,t,a,o=null){o||(o=a=="check"?"bg-green-600 text-white rounded-md p-px":"bg-red-600 text-white rounded-md p-px"),og({title:n,text:nf(t),icon:a,iconClasses:o,position:a=="check"?"bottom-right":"top-center",timeout:5})}function aw(n){te(()=>n,t=>{if(t.value.title){if(t.value.title&&t.value.subtitle){document.title=`${t.value.title} | ${t.value.subtitle}`;return}if(t.value.title){document.title=`${t.value.title}`;return}}},{immediate:!0,deep:!0})}function nf(n){const t=document.createElement("div");return t.innerHTML=n,t.textContent||t.innerText||""}function ow(){return{header:gx,quiz:QI,upload:sx,image:af,paragraph:{class:uv,inlineToolbar:!0,config:{preserveBlank:!0}},codeBox:{class:wx,config:{themeURL:"https://cdn.jsdelivr.net/gh/highlightjs/cdn-release@9.18.1/build/styles/dracula.min.css",themeName:"atom-one-dark",useDefaultTheme:"dark"}},list:{class:bx,config:{defaultStyle:"ordered"}},inlineCode:{class:qx,shortcut:"CMD+SHIFT+M"},embed:{class:ke,inlineToolbar:!1,config:{services:{youtube:{regex:/(?:https?:\/\/)?(?:www\.)?(?:(?:youtu\.be\/)|(?:youtube\.com)\/(?:v\/|u\/\w\/|embed\/|watch))(?:(?:\?v=)?([^#&?=]*))?((?:[?&]\w*=\w*)*)/,embedUrl:"https://www.youtube.com/embed/<%= remote_id %>",html:'<iframe style="width:100%; height: 30rem;" frameborder="0" allowfullscreen></iframe>',height:320,width:580,id:([n,t])=>{if(!t&&n)return n;const a={start:"start",end:"end",t:"start",time_continue:"start",list:"list"};let o=t.slice(1).split("&").map(c=>{const[i,r]=c.split("=");return!n&&i==="v"?(n=r,null):!a[i]||r==="LL"||r.startsWith("RDMM")||r.startsWith("FL")?null:`${a[i]}=${r}`}).filter(c=>!!c);return n+"?"+o.join("&")}},vimeo:!0,codepen:!0,aparat:{regex:/(?:http[s]?:\/\/)?(?:www.)?aparat\.com\/v\/([^\/\?\&]+)\/?/,embedUrl:"https://www.aparat.com/video/video/embed/videohash/<%= remote_id %>/vt/frame",html:'<iframe style="margin: 0 auto; width: 100%; height: 25rem;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',height:300,width:600},github:!0,slides:{regex:/https:\/\/docs\.google\.com\/presentation\/d\/([A-Za-z0-9_-]+)\/pub/,embedUrl:"https://docs.google.com/presentation/d/<%= remote_id %>/embed",html:"<iframe style='width: 100%; height: 30rem; border: 1px solid #D3D3D3; border-radius: 12px; margin: 1rem 0' frameborder='0' allowfullscreen='true'></iframe>"},drive:{regex:/https:\/\/drive\.google\.com\/file\/d\/([A-Za-z0-9_-]+)\/view(\?.+)?/,embedUrl:"https://drive.google.com/file/d/<%= remote_id %>/preview",html:"<iframe style='width: 100%; height: 25rem; border: 1px solid #D3D3D3; border-radius: 12px;' frameborder='0' allowfullscreen='true'></iframe>"},docsPublic:{regex:/https:\/\/docs\.google\.com\/document\/d\/([A-Za-z0-9_-]+)\/edit(\?.+)?/,embedUrl:"https://docs.google.com/document/d/<%= remote_id %>/preview",html:"<iframe style='width: 100%; height: 40rem; border: 1px solid #D3D3D3; border-radius: 12px;' frameborder='0' allowfullscreen='true'></iframe>"},sheetsPublic:{regex:/https:\/\/docs\.google\.com\/spreadsheets\/d\/([A-Za-z0-9_-]+)\/edit(\?.+)?/,embedUrl:"https://docs.google.com/spreadsheets/d/<%= remote_id %>/preview",html:"<iframe style='width: 100%; height: 40rem; border: 1px solid #D3D3D3; border-radius: 12px;' frameborder='0' allowfullscreen='true'></iframe>"},slidesPublic:{regex:/https:\/\/docs\.google\.com\/presentation\/d\/([A-Za-z0-9_-]+)\/edit(\?.+)?/,embedUrl:"https://docs.google.com/presentation/d/<%= remote_id %>/embed",html:"<iframe style='width: 100%; height: 30rem; border: 1px solid #D3D3D3; border-radius: 12px; margin: 1rem 0;' frameborder='0' allowfullscreen='true'></iframe>"},codesandbox:{regex:/^https:\/\/codesandbox\.io\/(?:embed\/)?([A-Za-z0-9_-]+)(?:\?[^\/]*)?$/,embedUrl:"https://codesandbox.io/embed/<%= remote_id %>?view=editor+%2B+preview&module=%2Findex.html",html:"<iframe style='width: 100%; height: 500px; border: 0; border-radius: 4px; overflow: hidden;' sandbox='allow-mods allow-forms allow-popups allow-scripts allow-same-origin' frameborder='0' allowfullscreen='true'></iframe>"}}}}}}function cw(){return["Pacific/Midway","Pacific/Pago_Pago","Pacific/Honolulu","America/Anchorage","America/Vancouver","America/Los_Angeles","America/Tijuana","America/Edmonton","America/Denver","America/Phoenix","America/Mazatlan","America/Winnipeg","America/Regina","America/Chicago","America/Mexico_City","America/Guatemala","America/El_Salvador","America/Managua","America/Costa_Rica","America/Montreal","America/New_York","America/Indianapolis","America/Panama","America/Bogota","America/Lima","America/Halifax","America/Puerto_Rico","America/Caracas","America/Santiago","America/St_Johns","America/Montevideo","America/Araguaina","America/Argentina/Buenos_Aires","America/Godthab","America/Sao_Paulo","Atlantic/Azores","Canada/Atlantic","Atlantic/Cape_Verde","UTC","Etc/Greenwich","Europe/Belgrade","CET","Atlantic/Reykjavik","Europe/Dublin","Europe/London","Europe/Lisbon","Africa/Casablanca","Africa/Nouakchott","Europe/Oslo","Europe/Copenhagen","Europe/Brussels","Europe/Berlin","Europe/Helsinki","Europe/Amsterdam","Europe/Rome","Europe/Stockholm","Europe/Vienna","Europe/Luxembourg","Europe/Paris","Europe/Zurich","Europe/Madrid","Africa/Bangui","Africa/Algiers","Africa/Tunis","Africa/Harare","Africa/Nairobi","Europe/Warsaw","Europe/Prague","Europe/Budapest","Europe/Sofia","Europe/Istanbul","Europe/Athens","Europe/Bucharest","Asia/Nicosia","Asia/Beirut","Asia/Damascus","Asia/Jerusalem","Asia/Amman","Africa/Tripoli","Africa/Cairo","Africa/Johannesburg","Europe/Moscow","Asia/Baghdad","Asia/Kuwait","Asia/Riyadh","Asia/Bahrain","Asia/Qatar","Asia/Aden","Asia/Tehran","Africa/Khartoum","Africa/Djibouti","Africa/Mogadishu","Asia/Dubai","Asia/Muscat","Asia/Baku","Asia/Kabul","Asia/Yekaterinburg","Asia/Tashkent","Asia/Calcutta","Asia/Kathmandu","Asia/Novosibirsk","Asia/Almaty","Asia/Dacca","Asia/Krasnoyarsk","Asia/Dhaka","Asia/Bangkok","Asia/Saigon","Asia/Jakarta","Asia/Irkutsk","Asia/Shanghai","Asia/Hong_Kong","Asia/Taipei","Asia/Kuala_Lumpur","Asia/Singapore","Australia/Perth","Asia/Yakutsk","Asia/Seoul","Asia/Tokyo","Australia/Darwin","Australia/Adelaide","Asia/Vladivostok","Pacific/Port_Moresby","Australia/Brisbane","Australia/Sydney","Australia/Hobart","Asia/Magadan","SST","Pacific/Noumea","Asia/Kamchatka","Pacific/Fiji","Pacific/Auckland","Asia/Kolkata","Europe/Kiev","America/Tegucigalpa","Pacific/Apia"]}function cg(){return[{label:"Courses",icon:"BookOpen",to:"Courses",activeFor:["Courses","CourseDetail","Lesson","CourseForm","LessonForm"]},{label:"Batches",icon:"Users",to:"Batches",activeFor:["Batches","BatchDetail","Batch","BatchForm"]},{label:"Certified Participants",icon:"GraduationCap",to:"CertifiedParticipants",activeFor:["CertifiedParticipants"]},{label:"Jobs",icon:"Briefcase",to:"Jobs",activeFor:["Jobs","JobDetail"]},{label:"Statistics",icon:"TrendingUp",to:"Statistics",activeFor:["Statistics"]}]}function nw(n,t,a="DD MMM YYYY"){return n===t?T(n).format(a):`${T(n).format(a)} - ${T(t).format(a)}`}function iw(n){const t={ves:"fe",ies:"y",i:"us",zes:"ze",ses:"s",es:"e",s:""};return n.replace(new RegExp(`(${Object.keys(t).join("|")})$`),a=>t[a])}const rf={class:"w-full"},df=["onClick"],hf={class:"flex items-center"},lf={key:0,class:"overflow-hidden text-ellipsis whitespace-nowrap text-base leading-5"},sf={key:1,class:"text-base leading-5 text-gray-500"},yf={class:"mt-1 rounded-lg bg-white py-1 text-base shadow-2xl"},pf={class:"relative px-1.5 pt-0.5"},kf={key:0,class:"px-2.5 py-1.5 text-sm font-medium text-gray-500"},uf={class:"flex flex-col space-y-1"},Mf=["innerHTML"],mf={key:0,class:"mt-1.5 rounded-md px-2.5 py-1.5 text-base text-gray-600"},vf={key:0,class:"border-t p-1.5 pb-0.5"},gf={__name:"Autocomplete",props:{modelValue:{type:String,default:""},options:{type:Array,default:()=>[]},size:{type:String,default:"md"},variant:{type:String,default:"subtle"},placeholder:{type:String,default:""},disabled:{type:Boolean,default:!1},filterable:{type:Boolean,default:!0}},emits:["update:modelValue","update:query","change"],setup(n,{expose:t,emit:a}){const o=n,c=a,i=q(""),r=q(!1),h=q(null),d=Bv(),s=Cg(),k=G(()=>"value"in d),m=G({get(){return k.value?d.value:o.modelValue},set(I){i.value="",I&&(r.value=!1),c(k.value?"change":"update:modelValue",I)}});function p(){r.value=!1}const g=G(()=>{var L;return!o.options||o.options.length==0?[]:((L=o.options[0])!=null&&L.group?o.options:[{group:"",items:o.options}]).map((P,H)=>({key:H,group:P.group,hideLabel:P.hideLabel||!1,items:o.filterable?M(P.items):P.items})).filter(P=>P.items.length>0)});function M(I){return i.value?I.filter(L=>[L.label,L.value].some(H=>(H||"").toString().toLowerCase().includes(i.value.toLowerCase()))):I}function C(I){if(typeof I=="string"){let P=g.value.flatMap(H=>H.items).find(H=>H.value===I);return(P==null?void 0:P.label)||I}return I==null?void 0:I.label}te(i,I=>{c("update:query",I)}),te(r,I=>{I&&jv(()=>{h.value.el.focus()})});const f=G(()=>o.disabled?"text-gray-600":"text-gray-800"),S=G(()=>{let I={sm:"text-base rounded h-7",md:"text-base rounded h-8",lg:"text-lg rounded-md h-10",xl:"text-xl rounded-md h-10"}[o.size],L={sm:"py-1.5 px-2",md:"py-1.5 px-2.5",lg:"py-1.5 px-3",xl:"py-1.5 px-3"}[o.size],P=o.disabled?"disabled":o.variant,H={subtle:"border border-gray-100 bg-gray-100 placeholder-gray-500 hover:border-gray-200 hover:bg-gray-200 focus:bg-white focus:border-gray-500 focus:shadow-sm focus:ring-0 focus-visible:ring-2 focus-visible:ring-gray-400",outline:"border border-gray-300 bg-white placeholder-gray-500 hover:border-gray-400 hover:shadow-sm focus:bg-white focus:border-gray-500 focus:shadow-sm focus:ring-0 focus-visible:ring-2 focus-visible:ring-gray-400",disabled:["border bg-gray-50 placeholder-gray-400",o.variant==="outline"?"border-gray-300":"border-transparent"]}[P];return[I,L,H,f.value,"transition-colors w-full"]});return t({query:i}),(I,L)=>(y(),A(l(Ag),{modelValue:m.value,"onUpdate:modelValue":L[3]||(L[3]=P=>m.value=P),nullable:""},{default:z(({open:P})=>[b(l(pv),{class:"w-full",show:r.value,"onUpdate:show":L[2]||(L[2]=H=>r.value=H)},{target:z(({open:H,togglePopover:$})=>[ee(I.$slots,"target",G2(N2({open:H,togglePopover:$})),()=>[u("div",rf,[u("button",{class:U(["flex w-full items-center justify-between focus:outline-none",S.value]),onClick:()=>$()},[u("div",hf,[ee(I.$slots,"prefix"),m.value?(y(),v("span",lf,w(C(m.value)),1)):(y(),v("span",sf,w(n.placeholder||""),1))]),b(l(B2),{class:"h-4 w-4 stroke-1.5"})],10,df)])])]),body:z(({isOpen:H})=>{var $;return[na(u("div",null,[u("div",yf,[u("div",pf,[b(l(bg),{ref_key:"search",ref:h,class:"form-input w-full",type:"text",onChange:L[0]||(L[0]=B=>{i.value=B.target.value}),value:i.value,autocomplete:"off",placeholder:"Search"},null,8,["value"]),u("button",{class:"absolute right-1.5 inline-flex h-7 w-7 items-center justify-center",onClick:L[1]||(L[1]=B=>m.value=null)},[b(l(E2),{class:"h-4 w-4 stroke-1.5"})])]),b(l(Sg),{class:"my-1 max-h-[12rem] overflow-y-auto px-1.5",static:""},{default:z(()=>[(y(!0),v(Z,null,X(g.value,B=>na((y(),v("div",{class:"mt-1.5",key:B.key},[B.group&&!B.hideLabel?(y(),v("div",kf,w(B.group),1)):D("",!0),(y(!0),v(Z,null,X(B.items,j=>(y(),A(l(qg),{as:"template",key:j.value,value:j},{default:z(({active:_,selected:x})=>[u("li",{class:U(["flex items-center rounded px-2.5 py-2 text-base",{"bg-gray-100":_}])},[ee(I.$slots,"item-prefix",Lv({ref_for:!0},{active:_,selected:x,option:j})),ee(I.$slots,"item-label",Lv({ref_for:!0},{active:_,selected:x,option:j}),()=>[u("div",uf,[u("div",null,w(j.label),1),j.label!=j.description?(y(),v("div",{key:0,class:"text-xs text-gray-700",innerHTML:j.description},null,8,Mf)):D("",!0)])])],2)]),_:2},1032,["value"]))),128))])),[[ov,B.items.length>0]])),128)),g.value.length==0?(y(),v("li",mf," No results found ")):D("",!0)]),_:3}),l(s).footer?(y(),v("div",vf,[ee(I.$slots,"footer",G2(N2({value:($=h.value)==null?void 0:$.el._value,close:p})))])):D("",!0)])],512),[[ov,H]])]}),_:3},8,["show"])]),_:3},8,["modelValue"]))}},If={class:"space-y-1.5"},ng={__name:"Link",props:{doctype:{type:String,required:!0},filters:{type:Object,default:()=>({})},modelValue:{type:String,default:""}},emits:["update:modelValue","change"],setup(n,{emit:t}){const a=n,o=t,c=Bv(),i=G(()=>"value"in c),r=G({get:()=>i.value?c.value:a.modelValue,set:p=>(p==null?void 0:p.value)&&o(i.value?"change":"update:modelValue",p==null?void 0:p.value)}),h=q(null),d=q("");wv(()=>{var p;return(p=h.value)==null?void 0:p.query},p=>{p=p||"",d.value!==p&&(d.value=p,k(p))},{debounce:300,immediate:!0}),wv(()=>a.doctype,()=>k(""),{debounce:300,immediate:!0});const s=E({url:"frappe.desk.search.search_link",cache:[a.doctype,d.value],method:"POST",params:{txt:d.value,doctype:a.doctype,filters:a.filters},transform:p=>p.map(g=>({label:g.value,value:g.value,description:g.description}))});function k(p){s.update({params:{txt:p,doctype:a.doctype,filters:a.filters}}),s.reload()}const m=G(()=>[{sm:"text-xs",md:"text-base"}[c.size||"sm"],"text-gray-600"]);return(p,g)=>(y(),v("div",If,[l(c).label?(y(),v("label",{key:0,class:U(["block",m.value])},w(l(c).label),3)):D("",!0),b(gf,{ref_key:"autocomplete",ref:h,options:l(s).data,modelValue:r.value,"onUpdate:modelValue":g[0]||(g[0]=M=>r.value=M),size:l(c).size||"sm",variant:l(c).variant,placeholder:l(c).placeholder,filterable:!1},Hg({target:z(({open:M,togglePopover:C})=>[ee(p.$slots,"target",G2(N2({open:M,togglePopover:C})))]),prefix:z(()=>[ee(p.$slots,"prefix")]),"item-prefix":z(({active:M,selected:C,option:f})=>[ee(p.$slots,"item-prefix",G2(N2({active:M,selected:C,option:f})))]),"item-label":z(({active:M,selected:C,option:f})=>[ee(p.$slots,"item-label",G2(N2({active:M,selected:C,option:f})))]),_:2},[l(c).onCreate?{name:"footer",fn:z(({value:M,close:C})=>[u("div",null,[b(l(N),{variant:"ghost",class:"w-full !justify-start",label:"Create New",onClick:f=>l(c).onCreate(M,C)},{prefix:z(()=>[b(l(b2),{class:"h-4 w-4 stroke-1.5"})]),_:2},1032,["onClick"])])]),key:"0"}:void 0]),1032,["options","modelValue","size","variant","placeholder"])]))}},xf={class:"flex flex-col justify-between h-full p-4"},ff={class:"font-semibold mb-1"},Lf={class:"text-xs text-gray-600"},wf={class:"flex space-x-8 my-5"},Cf={class:"flex flex-col space-y-4 w-60"},bf={class:"flex flex-row-reverse mt-auto"},Sf={__name:"SettingDetails",props:{fields:{type:Array,required:!0},data:{type:Object,required:!0},label:{type:String,required:!0},description:{type:String}},setup(n){const t=n,a=G(()=>{const c=[];let i=[];return t.fields.forEach(r=>{r.type==="Column Break"?i.length>0&&(c.push(i),i=[]):(r.type=="checkbox"?r.value=!!t.data.doc[r.name]:r.value=t.data.doc[r.name],i.push(r))}),i.length>0&&c.push(i),c}),o=()=>{t.fields.forEach(c=>{t.data.doc[c.name]=c.value}),t.data.save.submit()};return(c,i)=>(y(),v("div",xf,[u("div",null,[u("div",ff,w(c.__(n.label)),1),u("div",Lf,w(c.__(n.description)),1)]),u("div",wf,[(y(!0),v(Z,null,X(a.value,(r,h)=>(y(),v("div",{key:h},[u("div",Cf,[(y(!0),v(Z,null,X(r,d=>(y(),v("div",null,[d.type=="Link"?(y(),A(ng,{key:0,modelValue:d.value,"onUpdate:modelValue":s=>d.value=s,doctype:d.doctype,label:d.label},null,8,["modelValue","onUpdate:modelValue","doctype","label"])):(y(),A(l(D2),{key:d.name,modelValue:d.value,"onUpdate:modelValue":s=>d.value=s,label:d.label,type:d.type},null,8,["modelValue","onUpdate:modelValue","label","type"]))]))),256))])]))),128))]),u("div",bf,[b(l(N),{variant:"solid",loading:n.data.save.loading,onClick:o},{default:z(()=>[cv(w(c.__("Update")),1)]),_:1},8,["loading"])])]))}},qf={class:"grid h-5 w-6 flex-shrink-0 place-items-center"},Af={key:0,class:"!ml-auto block text-xs text-gray-600"},Hf={key:1,class:"flex items-center space-x-2 !ml-auto block text-xs text-gray-600 group-hover:visible invisible"},Wm={__name:"SidebarLink",props:{link:{type:Object,required:!0},isCollapsed:{type:Boolean,default:!1},showControls:{type:Boolean,default:!1}},emits:["openModal","deletePage"],setup(n,{emit:t}){const a=Ym(),o=t,c=n;function i(){a.hasRoute(c.link.to)?a.push({name:c.link.to}):c.link.to&&(window.location.href=`/${c.link.to}`)}const r=G(()=>{var s,k;return(k=(s=c.link)==null?void 0:s.activeFor)==null?void 0:k.includes(a.currentRoute.value.name)}),h=s=>{o("openModal",s)},d=s=>{o("deletePage",s)};return(s,k)=>n.link&&!n.link.onlyMobile?(y(),v("button",{key:0,class:U(["flex h-7 cursor-pointer items-center rounded text-gray-800 duration-300 ease-in-out focus:outline-none focus:transition-none focus-visible:rounded focus-visible:ring-2 focus-visible:ring-gray-400",r.value?"bg-white shadow-sm":"hover:bg-gray-100"]),onClick:i},[u("div",{class:U(["flex items-center w-full duration-300 ease-in-out group",n.isCollapsed?"p-1":"px-2 py-1"])},[b(l(zg),{text:n.link.label,placement:"right"},{default:z(()=>[ee(s.$slots,"icon",{},()=>[u("span",qf,[(y(),A(C2(g2[n.link.icon]),{class:"h-4 w-4 stroke-1.5 text-gray-800"}))])])]),_:3},8,["text"]),u("span",{class:U(["flex-shrink-0 text-sm duration-300 ease-in-out",n.isCollapsed?"ml-0 w-0 overflow-hidden opacity-0":"ml-2 w-auto opacity-100"])},w(n.link.label),3),n.link.count?(y(),v("span",Af,w(n.link.count),1)):D("",!0),n.showControls&&!n.isCollapsed?(y(),v("div",Hf,[(y(),A(C2(K),{class:"h-3 w-3 stroke-1.5 text-gray-700",onClick:k[0]||(k[0]=av(m=>h(n.link),["stop"]))})),(y(),A(C2(E2),{class:"h-3 w-3 stroke-1.5 text-gray-700",onClick:k[1]||(k[1]=av(m=>d(n.link),["stop"]))}))])):D("",!0)],2)],2)):D("",!0)}},zf={class:"text-base p-4"},Vf={class:"flex items-center justify-between"},Pf={class:"font-semibold mb-1"},jf={class:"text-xs text-gray-600"},_f={class:"flex item-center space-x-2"},Df={class:"my-4"},Bf={key:0,class:"flex items-center space-x-2 mb-4"},Ff={class:"grid grid-cols-5 grid-flow-row py-2 cursor-pointer"},Tf=["onClick"],Rf={class:"text-sm text-gray-700 col-span-2"},Of={class:"text-sm text-gray-700 justify-self-end"},Uf={key:0,class:"flex justify-center"},Ef=Vg({__name:"Members",props:Fv({label:{type:String,required:!0},description:{type:String,default:""},show:{type:Boolean}},{show:{},showModifiers:{}}),emits:["update:show"],setup(n){const t=Ym(),a=Xm(n,"show"),o=q(""),c=q(0),i=q([]),r=q(!1),h=q(!1),d=L2({email:"",first_name:""}),s=E({url:"lms.lms.api.get_members",makeParams:()=>({search:o.value,start:c.value}),onSuccess(M){i.value=i.value.concat(M),c.value=c.value+20,r.value=M.length===20},auto:!0}),k=M=>{a.value=!1,t.push({name:"Profile",params:{username:M}})},m=E({url:"frappe.client.insert",makeParams(M){return{doc:{doctype:"User",first_name:d.first_name,email:d.email}}},auto:!1,onSuccess(M){a.value=!1,t.push({name:"Profile",params:{username:M.username}})}}),p=()=>{m.reload()};te(o,()=>{i.value=[],c.value=0,s.reload()});const g=M=>({"LMS Student":"Student","Course Creator":"Instructor",Moderator:"Moderator","Batch Evaluator":"Evaluator"})[M];return(M,C)=>(y(),v("div",zf,[u("div",Vf,[u("div",null,[u("div",Pf,w(M.__(n.label)),1),u("div",jf,w(M.__(n.description)),1)]),u("div",_f,[b(l(D2),{modelValue:o.value,"onUpdate:modelValue":C[0]||(C[0]=f=>o.value=f),placeholder:M.__("Search"),type:"text",debounce:300},null,8,["modelValue","placeholder"]),b(l(N),{onClick:C[1]||(C[1]=()=>h.value=!0)},{icon:z(()=>[b(l(b2),{class:"h-3 w-3 stroke-1.5"})]),_:1})])]),u("div",Df,[h.value?(y(),v("div",Bf,[b(l(D2),{modelValue:d.email,"onUpdate:modelValue":C[2]||(C[2]=f=>d.email=f),placeholder:M.__("Email"),type:"email",class:"w-full"},null,8,["modelValue","placeholder"]),b(l(D2),{modelValue:d.first_name,"onUpdate:modelValue":C[3]||(C[3]=f=>d.first_name=f),placeholder:M.__("First Name"),type:"test",class:"w-full"},null,8,["modelValue","placeholder"]),b(l(N),{onClick:C[4]||(C[4]=f=>p()),variant:"subtle"},{default:z(()=>[cv(w(M.__("Add")),1)]),_:1})])):D("",!0),(y(!0),v(Z,null,X(i.value,f=>(y(),v("div",Ff,[u("div",{onClick:S=>k(f.username),class:"flex items-center space-x-2 col-span-2"},[b(l(Pg),{image:f.user_image,label:f.full_name,size:"sm"},null,8,["image","label"]),u("div",null,w(f.full_name),1)],8,Tf),u("div",Rf,w(f.name),1),u("div",Of,w(g(f.role)),1)]))),256))]),r.value?(y(),v("div",Uf,[b(l(N),{variant:"solid",onClick:C[5]||(C[5]=f=>l(s).reload())},{prefix:z(()=>[b(l(ta),{class:"h-3 w-3 stroke-1.5"})]),default:z(()=>[cv(" "+w(M.__("Load More")),1)]),_:1})])):D("",!0)]))}}),Zf={class:"flex h-[calc(100vh_-_8rem)]"},$f={class:"flex w-52 shrink-0 flex-col bg-gray-50 p-2"},Gf={class:"mb-3 px-2 pt-2 text-lg font-semibold"},Nf={key:0,class:"mb-2 mt-3 flex cursor-pointer gap-1.5 px-1 text-base font-medium text-gray-600 transition-all duration-300 ease-in-out"},Wf={class:"space-y-1"},Xf={key:0,class:"flex flex-1 flex-col overflow-y-auto"},Kf={__name:"Settings",props:{modelValue:{},modelModifiers:{}},emits:["update:modelValue"],setup(n){const t=Xm(n,"modelValue"),a=q("LMS Settings"),o=q(null),c=jg({doctype:a.value,name:a.value,fields:["*"],cache:a.value,auto:!0}),i=G(()=>[{label:"Settings",hideLabel:!0,items:[{label:"Members",description:"Manage the members of your learning system",icon:"UserRoundPlus"},{label:"Payment Gateway",icon:"DollarSign",description:"Configure the payment gateway and other payment related settings",fields:[{label:"Razorpay Key",name:"razorpay_key",type:"text"},{label:"Razorpay Secret",name:"razorpay_secret",type:"password"},{label:"Default Currency",name:"default_currency",type:"Link",doctype:"Currency"},{type:"Column Break"},{label:"Apply GST for India",name:"apply_gst",type:"checkbox"},{label:"Show USD equivalent amount",name:"show_usd_equivalent",type:"checkbox"},{label:"Apply rounding on equivalent",name:"apply_rounding",type:"checkbox"}]}]},{label:"Settings",hideLabel:!0,items:[{label:"Sidebar",icon:"PanelLeftIcon",description:"Customize the sidebar as per your needs",fields:[{label:"Courses",name:"courses",type:"checkbox"},{label:"Batches",name:"batches",type:"checkbox"},{label:"Certified Participants",name:"certified_participants",type:"checkbox"},{type:"Column Break"},{label:"Jobs",name:"jobs",type:"checkbox"},{label:"Statistics",name:"statistics",type:"checkbox"},{label:"Notifications",name:"notifications",type:"checkbox"}]}]},{label:"Settings",hideLabel:!0,items:[{label:"Email Templates",icon:"MailPlus",description:"Create email templates with the content you want",fields:[{label:"Batch Confirmation Template",name:"batch_confirmation_template",doctype:"Email Template",type:"Link"},{label:"Certification Template",name:"certification_template",doctype:"Email Template",type:"Link"},{label:"Assignment Submission Template",name:"assignment_submission_template",doctype:"Email Template",type:"Link"}]}]},{label:"Settings",hideLabel:!0,items:[{label:"Signup",icon:"LogIn",description:"Customize the signup page to inform users about your terms and policies",fields:[{label:"Show terms of use on signup",name:"terms_of_use",type:"checkbox"},{label:"Terms of Use Page",name:"terms_page",type:"Link",doctype:"Web Page"},{label:"Show privacy policy on signup",name:"privacy_policy",type:"checkbox"},{label:"Privacy Policy Page",name:"privacy_policy_page",type:"Link",doctype:"Web Page"},{type:"Column Break"},{label:"Show cookie policy on signup",name:"cookie_policy",type:"checkbox"},{label:"Cookie Policy Page",name:"cookie_policy_page",type:"Link",doctype:"Web Page"},{label:"Ask user category during signup",name:"user_category",type:"checkbox"}]}]}].map(h=>(h.items=h.items.filter(d=>d.condition?d.condition():!0),h)));return te(t,()=>{t.value?o.value=i.value[0].items[0]:o.value=null}),(r,h)=>(y(),A(l(sv),{modelValue:t.value,"onUpdate:modelValue":h[1]||(h[1]=d=>t.value=d),options:{size:"3xl"}},{body:z(()=>[u("div",Zf,[u("div",$f,[u("h1",Gf,w(r.__("Settings")),1),(y(!0),v(Z,null,X(i.value,d=>(y(),v("div",null,[d.hideLabel?D("",!0):(y(),v("div",Nf,[u("span",null,w(r.__(d.label)),1)])),u("nav",Wf,[(y(!0),v(Z,null,X(d.items,s=>{var k;return y(),A(Wm,{link:s,class:U(["w-full",((k=o.value)==null?void 0:k.label)==s.label?"bg-white shadow-sm":"hover:bg-gray-100"]),onClick:m=>o.value=s},null,8,["link","class","onClick"])}),256))])]))),256))]),o.value&&l(c).doc?(y(),v("div",Xf,[o.value.label==="Members"?(y(),A(Ef,{key:0,label:o.value.label,description:o.value.description,show:t.value,"onUpdate:show":h[0]||(h[0]=d=>t.value=d)},null,8,["label","description","show"])):(y(),A(Sf,{key:1,fields:o.value.fields,label:o.value.label,description:o.value.description,data:l(c)},null,8,["fields","label","description","data"]))])):D("",!0)])]),_:1},8,["modelValue"]))}},Jf=["innerHTML"],Yf={class:"text-base font-medium text-gray-900 leading-none"},Qf={key:0},eL={key:1},tL={key:0,class:"mt-1 text-sm text-gray-700 leading-none"},aL={__name:"UserDropdown",props:{isCollapsed:{type:Boolean,default:!1}},setup(n){const t=Ym(),a=q(!1),{logout:o,branding:c}=q2();let{userResource:i}=H2(),{isLoggedIn:r}=q2();const h=[{icon:oa,label:"My Profile",onClick:()=>{var d;t.push(`/user/${(d=i.data)==null?void 0:d.username}`)},condition:()=>r},{component:lv(vI),condition:()=>new URLSearchParams(document.cookie.split("; ").join("&")).get("system_user")==="yes"},{icon:aa,label:"Settings",onClick:()=>{a.value=!0},condition:()=>{var d;return(d=i.data)==null?void 0:d.is_moderator}},{icon:Q2,label:"Log out",onClick:()=>{o.submit().then(()=>{r=!1})},condition:()=>r},{icon:Y2,label:"Log in",onClick:()=>{window.location.href="/login"},condition:()=>!r}];return(d,s)=>{var k;return y(),v(Z,null,[b(l(_g),{class:"p-2",options:h},{default:z(({open:m})=>{var p,g,M,C,f,S;return[u("button",{class:U(["flex h-12 py-2 items-center rounded-md duration-300 ease-in-out",n.isCollapsed?"px-0 w-auto":m?"bg-white shadow-sm px-2 w-52":"hover:bg-gray-200 px-2 w-52"])},[(p=l(c).data)!=null&&p.brand_html?(y(),v("span",{key:0,innerHTML:(g=l(c).data)==null?void 0:g.brand_html,class:"w-8 h-8 rounded flex-shrink-0"},null,8,Jf)):(y(),A(rI,{key:1,class:"w-8 h-8 rounded flex-shrink-0"})),u("div",{class:U(["flex flex-1 flex-col text-left duration-300 ease-in-out",n.isCollapsed?"opacity-0 ml-0 w-0 overflow-hidden":"opacity-100 ml-2 w-auto"])},[u("div",Yf,[(M=l(c).data)!=null&&M.brand_name&&((C=l(c).data)==null?void 0:C.brand_name)!="Frappe"?(y(),v("span",Qf,w((f=l(c).data)==null?void 0:f.brand_name),1)):(y(),v("span",eL," Learning "))]),l(i)?(y(),v("div",tL,w(l(cf)((S=l(i).data)==null?void 0:S.full_name)),1)):D("",!0)],2),u("div",{class:U(["duration-300 ease-in-out",n.isCollapsed?"opacity-0 ml-0 w-0 overflow-hidden":"opacity-100 ml-2 w-auto"])},[b(l(B2),{class:"h-4 w-4 text-gray-700"})],2)],2)]}),_:1}),(k=l(i).data)!=null&&k.is_moderator?(y(),A(Kf,{key:0,modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=m=>a.value=m)},null,8,["modelValue"])):D("",!0)],64)}}},oL={},cL={width:"18",height:"18",viewBox:"0 0 18 18",fill:"none",xmlns:"http://www.w3.org/2000/svg"},nL=u("path",{d:"M10.875 9.06223L3 9.06232",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),iL=u("path",{d:"M6.74537 5.31699L3 9.06236L6.74527 12.8076",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"},null,-1),rL=u("path",{d:"M14.1423 4L14.1423 14.125",stroke:"currentColor","stroke-linecap":"round"},null,-1),dL=[nL,iL,rL];function hL(n,t){return y(),v("svg",cL,dL)}const lL=yv(oL,[["render",hL]]),sL={class:"space-y-1.5"},yL={class:"block text-xs text-gray-600"},pL={class:"w-full"},kL=["onClick"],uL={key:2},ML={key:3,class:"text-gray-600"},mL={class:"p-3 max-h-56 overflow-auto w-full"},vL={class:"grid grid-cols-10 gap-4 mt-4"},gL={__name:"IconPicker",props:{label:{type:String,default:"Icon"},modelValue:{type:String,default:""}},emits:["update:modelValue","change"],setup(n,{emit:t}){const a=q(""),o=q(""),c=q(null),i=t,r=q(Object.keys(g2).sort(()=>.5-Math.random()).slice(0,100).reduce((m,p)=>(m[p]=g2[p],m),{})),h=n;A2(()=>{o.value=h.modelValue});const d=(m,p)=>{i("update:modelValue",m),o.value=m,a.value="",p()},s=G(()=>a.value?Object.keys(g2).filter(m=>m.toLowerCase().includes(a.value.toLowerCase())).reduce((m,p)=>(m[p]=g2[p],m),{}):r.value),k=m=>{m()};return(m,p)=>(y(),v("div",sL,[u("label",yL,w(n.label),1),u("div",pL,[b(l(pv),null,{target:z(({togglePopover:g})=>[u("button",{onClick:M=>k(g),class:"flex w-full items-center space-x-2 focus:outline-none bg-gray-100 rounded h-7 py-1.5 px-2 hover:bg-gray-200 focus:bg-white border border-gray-100 hover:border-gray-200 focus:border-gray-500"},[o.value?(y(),A(C2(g2[o.value]),{key:0,class:"w-4 h-4 text-gray-700 stroke-1.5"})):(y(),A(C2(K2),{key:1,class:"w-4 h-4 text-gray-700 stroke-1.5"})),o.value?(y(),v("span",uL,w(o.value),1)):(y(),v("span",ML,w(m.__("Choose an icon")),1))],8,kL)]),"body-main":z(({close:g,isOpen:M})=>[u("div",mL,[b(l(D2),{ref_key:"search",ref:c,modelValue:a.value,"onUpdate:modelValue":p[0]||(p[0]=C=>a.value=C),placeholder:m.__("Search for an icon"),autocomplete:"off"},null,8,["modelValue","placeholder"]),u("div",vL,[(y(!0),v(Z,null,X(s.value,(C,f)=>(y(),v("div",null,[(y(),A(C2(C),{class:"h-4 w-4 stroke-1.5 text-gray-700 cursor-pointer",onClick:S=>d(f,g)},null,8,["onClick"]))]))),256))])])]),_:1})])]))}},IL={__name:"PageModal",props:Fv({page:{type:Object,default:null}},{reloadSidebar:{},reloadSidebarModifiers:{},modelValue:{},modelModifiers:{}}),emits:["update:reloadSidebar","update:modelValue"],setup(n){const t=Xm(n,"reloadSidebar"),a=Xm(n,"modelValue"),o=L2({icon:"",webpage:""}),c=n,i=E({url:"lms.lms.api.update_sidebar_item",makeParams(h){return{webpage:o.webpage,icon:o.icon}}});te(()=>c.page,h=>{h&&(o.icon=h.icon,o.webpage=h.web_page)},{immediate:!0});const r=h=>{i.submit({},{onSuccess(){t.value.reload(),h(),zv("Success","Web page added to sidebar","check")},onError(d){zv("Error",d.message[0]||d,"x"),h()}})};return(h,d)=>(y(),A(l(sv),{modelValue:a.value,"onUpdate:modelValue":d[2]||(d[2]=s=>a.value=s),class:"text-base",options:{title:h.__("Add web page to sidebar"),size:"lg",actions:[{label:"Add",variant:"solid",onClick:s=>{r(s)}}]}},{"body-content":z(()=>[b(ng,{modelValue:o.webpage,"onUpdate:modelValue":d[0]||(d[0]=s=>o.webpage=s),doctype:"Web Page",label:h.__("Web Page"),filters:{published:1}},null,8,["modelValue","label"]),b(gL,{modelValue:o.icon,"onUpdate:modelValue":d[1]||(d[1]=s=>o.icon=s),label:h.__("Icon"),class:"mt-4"},null,8,["modelValue","label"])]),_:1},8,["modelValue","options"]))}},xL={key:0,class:"flex flex-col"},fL={key:1,class:"mt-4"},LL={key:0,class:"flex items-center text-sm text-gray-600 my-1"},wL={class:"grid h-5 w-6 flex-shrink-0 place-items-center"},CL={class:"ml-2"},bL={class:"grid h-5 w-6 flex-shrink-0 place-items-center"},SL={__name:"AppSidebar",setup(n){const{user:t,sidebarSettings:a}=q2(),{userResource:o}=H2(),c=Jm("$socket"),i=q(0),r=q(cg()),h=q(!1),d=q(!1),s=q(null),k=q(!1);A2(()=>{c.on("publish_lms_notifications",S=>{m.reload()}),p(),a.reload({},{onSuccess(S){Object.keys(S).forEach(I=>{parseInt(S[I])||(r.value=r.value.filter(L=>L.label.toLowerCase().split(" ").join("_")!==I))})}})});const m=E({cache:"Unread Notifications Count",url:"frappe.client.get_count",makeParams(S){return{doctype:"Notification Log",filters:{for_user:t,read:0}}},onSuccess(S){i.value=S,r.value=r.value.map(I=>(I.label==="Notifications"&&(I.count=S),I))},auto:!!t}),p=()=>{t&&r.value.push({label:"Notifications",icon:"Bell",to:"Notifications",activeFor:["Notifications"],count:i.value})},g=S=>{h.value=!0,s.value=S},M=S=>{E({url:"lms.lms.api.delete_sidebar_item",makeParams(I){return{webpage:S.web_page}}}).submit({},{onSuccess(){a.reload()}})},C=()=>Tv("sidebar_is_collapsed",!1);te(o,()=>{o.data&&(d.value=o.data.is_moderator)});let f=q(C());return(S,I)=>{var L,P,H,$;return y(),v(Z,null,[u("div",{class:U(["flex h-full flex-col justify-between transition-all duration-300 ease-in-out bg-gray-50",l(f)?"w-14":"w-56"])},[u("div",{class:U(["flex flex-col overflow-hidden",l(f)?"items-center":""])},[b(aL,{isCollapsed:l(f)},null,8,["isCollapsed"]),l(a).data?(y(),v("div",xL,[(y(!0),v(Z,null,X(r.value,B=>(y(),A(Wm,{link:B,isCollapsed:l(f),class:"mx-2 my-0.5"},null,8,["link","isCollapsed"]))),256))])):D("",!0),(P=(L=l(a).data)==null?void 0:L.web_pages)!=null&&P.length||d.value?(y(),v("div",fL,[u("div",{class:U(["flex items-center justify-between pr-2 cursor-pointer",l(f)?"pl-3":"pl-4"]),onClick:I[1]||(I[1]=B=>k.value=!k.value)},[l(f)?D("",!0):(y(),v("div",LL,[u("span",wL,[b(l(F2),{class:U(["h-4 w-4 stroke-1.5 text-gray-900 transition-all duration-300 ease-in-out",{"rotate-90":k.value}])},null,8,["class"])]),u("span",CL,w(S.__("More")),1)])),d.value?(y(),A(l(N),{key:1,variant:"ghost",onClick:I[0]||(I[0]=B=>g())},{icon:z(()=>[b(l(b2),{class:"h-4 w-4 text-gray-700 stroke-1.5"})]),_:1})):D("",!0)],2),($=(H=l(a).data)==null?void 0:H.web_pages)!=null&&$.length?(y(),v("div",{key:0,class:U(["flex flex-col transition-all duration-300 ease-in-out",k.value?"block":"hidden"])},[(y(!0),v(Z,null,X(l(a).data.web_pages,B=>(y(),A(Wm,{link:B,isCollapsed:l(f),class:"mx-2 my-0.5",showControls:!!d.value,onOpenModal:g,onDeletePage:M},null,8,["link","isCollapsed","showControls"]))),256))],2)):D("",!0)])):D("",!0)],2),b(Wm,{link:{label:l(f)?"Expand":"Collapse"},isCollapsed:l(f),onClick:I[2]||(I[2]=B=>ue(f)?f.value=!l(f):f=!l(f)),class:"m-2"},{icon:z(()=>[u("span",bL,[b(lL,{class:U(["h-4.5 w-4.5 text-gray-700 duration-300 ease-in-out",{"[transform:rotateY(180deg)]":l(f)}])},null,8,["class"])])]),_:1},8,["link","isCollapsed"])],2),b(IL,{modelValue:h.value,"onUpdate:modelValue":I[3]||(I[3]=B=>h.value=B),reloadSidebar:l(a),"onUpdate:reloadSidebar":I[4]||(I[4]=B=>ue(a)?a.value=B:null),page:s.value},null,8,["modelValue","reloadSidebar","page"])],64)}}},qL={class:"relative flex h-full flex-col"},AL={class:"h-full flex-1"},HL={class:"flex h-screen text-base"},zL={class:"relative block min-h-0 flex-shrink-0 overflow-hidden hover:overflow-auto"},VL={class:"w-full overflow-auto",id:"scrollContainer"},PL={__name:"DesktopLayout",setup(n){return(t,a)=>(y(),v("div",qL,[u("div",AL,[u("div",HL,[u("div",zL,[b(SL)]),u("div",VL,[ee(t.$slots,"default")])])])]))}},jL={class:"flex h-full flex-col"},_L={class:"h-full pb-10",id:"scrollContainer"},DL=["onClick"],BL={__name:"MobileLayout",setup(n){const{logout:t,user:a,sidebarSettings:o}=q2();let{isLoggedIn:c}=q2();const i=Ym();let{userResource:r}=H2();const h=q(cg());A2(()=>{o.reload({},{onSuccess(p){Object.keys(p).forEach(g=>{parseInt(p[g])||(h.value=h.value.filter(M=>M.label.toLowerCase().split(" ").join("_")!==g))}),d()}})});const d=()=>{a?(h.value.push({label:"Profile",icon:"UserRound",activeFor:["Profile","ProfileAbout","ProfileCertification","ProfileEvaluator","ProfileRoles"]}),h.value.push({label:"Log out",icon:"LogOut"})):h.value.push({label:"Log in",icon:"LogIn"})};let s=p=>{var g;return(g=p.activeFor)==null?void 0:g.includes(i.currentRoute.value.name)};const k=p=>{var g;p.label=="Log in"?window.location.href="/login":p.label=="Log out"?t.submit().then(()=>{c=!1}):p.label=="Profile"?i.push({name:"Profile",params:{username:(g=r.data)==null?void 0:g.username}}):i.push({name:p.to})},m=p=>p.label=="Log in"?!c:p.label=="Log out"?c:!0;return(p,g)=>(y(),v("div",jL,[u("div",_L,[ee(p.$slots,"default")]),l(o).data?(y(),v("div",{key:0,class:"fixed flex justify-around border-t border-gray-300 bottom-0 z-10 w-full bg-white standalone:pb-4",style:Dg({gridTemplateColumns:`repeat(${h.value.length}, minmax(0, 1fr))`})},[(y(!0),v(Z,null,X(h.value,M=>(y(),v("button",{key:M.label,class:U([m(M)?"block":"hidden","flex flex-col items-center justify-center py-3 transition active:scale-95"]),onClick:C=>k(M)},[(y(),A(C2(g2[M.icon]),{class:U(["h-6 w-6 stroke-1.5",[l(s)(M)?"text-gray-900":"text-gray-600"]])},null,8,["class"]))],10,DL))),128))],4)):D("",!0)]))}};(function(n,t){var a,o,c,i;t.__SV||(window.posthog=t,t._i=[],t.init=function(r,h,d){function s(m,p){var g=p.split(".");g.length==2&&(m=m[g[0]],p=g[1]),m[p]=function(){m.push([p].concat(Array.prototype.slice.call(arguments,0)))}}(c=n.createElement("script")).type="text/javascript",c.async=!0,c.src=h.api_host+"/static/array.js",(i=n.getElementsByTagName("script")[0]).parentNode.insertBefore(c,i);var k=t;for(d!==void 0?k=t[d]=[]:d="posthog",k.people=k.people||[],k.toString=function(m){var p="posthog";return d!=="posthog"&&(p+="."+d),m||(p+=" (stub)"),p},k.people.toString=function(){return k.toString(1)+".people (stub)"},a="capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags".split(" "),o=0;o<a.length;o++)s(k,a[o]);t._i.push([r,h,d])},t.__SV=1)})(document,window.posthog||[]);const FL="lms",TL=window.location.hostname,Y=Tv("telemetry",{enabled:!1,project_id:"",host:""});function RL(){return V2(this,null,function*(){if(yield OL(),!!Y.value.enabled)try{yield UL(),window.posthog.init(Y.value.project_id,{api_host:Y.value.host,autocapture:!1,person_profiles:"always",capture_pageview:!0,capture_pageleave:!0,disable_session_recording:!1,session_recording:{maskAllInputs:!1,maskInputOptions:{password:!0}},loaded:n=>{window.posthog=n,window.posthog.identify(TL)}})}catch(n){console.trace("Failed to initialize telemetry",n),Y.value.enabled=!1}})}function OL(){return V2(this,null,function*(){Y.value.enabled||(yield Rv("lms.lms.telemetry.is_enabled").then(n=>{Y.value.enabled=n}))})}function UL(){return V2(this,null,function*(){Y.value.enabled&&(Y.value.project_id&&Y.value.host||(yield Rv("lms.lms.telemetry.get_credentials").then(n=>{Y.value.project_id=n.project_id,Y.value.host=n.telemetry_host})))})}function rw(n,t={data:{user:""}}){Y.value.enabled&&window.posthog.capture(`${FL}_${n}`,t)}function EL(){Y.value.enabled&&window.posthog&&window.posthog.__loaded&&window.posthog.sessionRecordingStarted()&&window.posthog.stopSessionRecording()}const ZL={__name:"App",setup(n){const t=tI(),a=G(()=>t.width<640?BL:PL);return A2(()=>V2(this,null,function*(){yield RL()})),_v(()=>{EL()}),(o,c)=>{const i=Bg("router-view");return y(),v(Z,null,[b(l(a),null,{default:z(()=>[b(i)]),_:1}),b(l(eI)),b(l(Fg))],64)}}},$L=9e3;function GL(){let n=window.location.hostname,t=window.site_name||n,a=window.location.port?`:${$L}`:"",c=`${a?"http":"https"}://${n}${a}/${t}`,i=Tg(c,{withCredentials:!0,reconnectionAttempts:5});return i.on("refetch_resource",r=>{if(r.cache_key){let h=Rg(r.cache_key)||Og(r.cache_key);h&&h.reload()}}),i}let NL=Gg(),ae=ia(ZL);Zg("resourceFetcher",$g);ae.use(Ug);ae.use(NL);ae.use(kv);ae.use(Nv);ae.use(Eg);ae.provide("$dayjs",T);ae.provide("$socket",GL());ae.mount("#app");const{userResource:ig,allUsers:WL}=H2();q2();ae.provide("$user",ig);ae.provide("$allUsers",WL);ae.config.globalProperties.$user=ig;export{Sn as $,Dh as A,j0 as B,pi as C,Ml as D,m1 as E,Bh as F,My as G,tw as H,cf as I,K as J,Ik as K,ak as L,lu as M,HM as N,di as O,b2 as P,_5 as Q,at as R,h8 as S,kM as T,QM as U,lm as V,un as W,E2 as X,c4 as Y,Gi as Z,JI as _,F7 as a,t2 as a0,rw as a1,cu as a2,We as a3,Cp as a4,F2 as b,og as c,rr as d,ew as e,YL as f,ow as g,Tn as h,s2 as i,ng as j,zv as k,cw as l,p1 as m,V0 as n,Xp as o,e4 as p,b4 as q,y8 as r,q2 as s,of as t,aw as u,iw as v,F4 as w,nw as x,QL as y,Y2 as z};
//# sourceMappingURL=index-5_0ocoxz.js.map
