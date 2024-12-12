import{d as $,k as M,x as r,y as l,C as t,J as o,I as n,K as x,L,M as y,H as c,B as _,a9 as v,N as w,P as B}from"./frappe-ui-CfOnYHud.js";import{s as C,X as D,K as I,N}from"./index-5_0ocoxz.js";const Y={class:"mt-7 mb-10"},T={class:"mb-3 text-lg font-semibold text-gray-900"},j=["innerHTML"],A={key:1,class:"text-gray-700 text-sm italic"},S={key:0,class:"mt-7 mb-10"},P={class:"mb-3 text-lg font-semibold text-gray-900"},V={class:"grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4"},H={class:"relative"},O=["src","alt"],z={key:0,class:"flex items-end bg-gray-100 p-2 text-xs font-semibold rounded-full absolute right-0 bottom-0"},K={class:"w-[250px] text-base"},R=["src","alt"],U={class:"p-5"},q={class:"text-2xl font-semibold mb-2"},E={class:"leading-5 mb-4"},F={class:"flex flex-col mb-4"},J={class:"text-xs text-gray-700 font-medium mb-1"},X={class:"flex flex-col"},G={class:"text-xs text-gray-700 font-medium mb-1"},Q={class:"flex items-center space-x-2"},W={class:"text-xs"},Z={class:"text-xs"},se={__name:"ProfileAbout",props:{profile:{type:Object,required:!0}},setup(m){const p=$("$dayjs"),{branding:k}=C(),u=m,h=M({url:"frappe.client.get_list",params:{doctype:"LMS Badge Assignment",fields:["name","badge","badge_image","badge_description","issued_on"],filters:{member:u.profile.data.name}},auto:!0,transform(s){let d=[],a=Object.groupBy(s,({badge:e})=>e);for(let e in a){let i=a[e][0];i.count=a[e].length,d.push(i)}return d}}),g=(s,d)=>{var b,f;let a;const e=encodeURIComponent(`${window.location.origin}/lms/badges/${s.badge}/${(b=u.profile.data)==null?void 0:b.email}`),i=`I am happy to announce that I earned the ${s.badge} badge on ${p(s.issued_on).format("DD MMM YYYY")} at ${(f=k.data)==null?void 0:f.brand_name}.`;d=="LinkedIn"?a=`https://www.linkedin.com/shareArticle?mini=true&url=${e}&text=${i}`:d=="Twitter"&&(a=`https://twitter.com/intent/tweet?text=${i}&url=${e}`),window.open(a,"_blank")};return(s,d)=>{var a;return r(),l(x,null,[t("div",Y,[t("h2",T,o(s.__("About")),1),m.profile.data.bio?(r(),l("div",{key:0,innerHTML:m.profile.data.bio,class:"ProseMirror prose prose-table:table-fixed prose-td:p-2 prose-th:p-2 prose-td:border prose-th:border prose-td:border-gray-300 prose-th:border-gray-300 prose-td:relative prose-th:relative prose-th:bg-gray-100 prose-sm max-w-none !whitespace-normal"},null,8,j)):(r(),l("div",A,o(s.__("No introduction")),1))]),(a=n(h).data)!=null&&a.length?(r(),l("div",S,[t("h2",P,o(s.__("Achievements")),1),t("div",V,[(r(!0),l(x,null,L(n(h).data,e=>(r(),l("div",null,[c(n(B),{trigger:"hover",leaveDelay:.01},{target:_(()=>[t("div",H,[t("img",{src:e.badge_image,alt:e.badge,class:"h-[80px]"},null,8,O),e.count>1?(r(),l("div",z,[t("span",null,[c(n(D),{class:"w-3 h-3"})]),v(" "+o(e.count),1)])):y("",!0)])]),"body-main":_(()=>[t("div",K,[t("img",{src:e.badge_image,alt:e.badge,class:"bg-gray-100 rounded-t-md"},null,8,R),t("div",U,[t("div",q,o(e.badge),1),t("div",E,o(e.badge_description),1),t("div",F,[t("span",J,o(s.__("Issued on"))+": ",1),v(" "+o(n(p)(e.issued_on).format("DD MMM YYYY")),1)]),t("div",X,[t("span",G,o(s.__("Share on"))+": ",1),t("div",Q,[c(n(w),{variant:"outline",size:"sm",onClick:i=>g(e,"LinkedIn")},{prefix:_(()=>[c(n(I),{class:"h-3 w-3 text-gray-700"})]),default:_(()=>[t("span",W,o(s.__("LinkedIn")),1)]),_:2},1032,["onClick"]),c(n(w),{variant:"outline",size:"sm",onClick:i=>g(e,"Twitter")},{prefix:_(()=>[c(n(N),{class:"h-3 w-3 text-gray-700"})]),default:_(()=>[t("span",Z,o(s.__("Twitter")),1)]),_:2},1032,["onClick"])])])])])]),_:2},1032,["leaveDelay"])]))),256))])])):y("",!0)],64)}}};export{se as default};
//# sourceMappingURL=ProfileAbout-pj1d_uPK.js.map