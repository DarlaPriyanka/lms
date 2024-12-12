var W=Object.defineProperty;var T=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var E=(r,n,e)=>n in r?W(r,n,{enumerable:!0,configurable:!0,writable:!0,value:e}):r[n]=e,j=(r,n)=>{for(var e in n||(n={}))J.call(n,e)&&E(r,e,n[e]);if(T)for(var e of T(n))K.call(n,e)&&E(r,e,n[e]);return r};import{aa as Q,d as O,j as V,k as R,am as A,x as o,y as p,M as y,C as a,J as l,A as x,B as h,H as i,I as t,N as k,a9 as z,r as F,K as $,L as N,F as B,ae as X,af as M,a as Y,ax as Z,D as ee,b as D,av as te,ac as P,S as se}from"./frappe-ui-CfOnYHud.js";import{B as ae,U as H,a as S,c as L,u as re}from"./index-5_0ocoxz.js";import{_ as oe}from"./CourseOutline-CUa4yH_C.js";import{_ as G}from"./UserAvatar-NO3477wF.js";import{_ as le}from"./CourseInstructors-CGxRrteV.js";const ne={class:"shadow rounded-md min-w-80"},ie=["src"],ue={class:"p-5"},ce={key:0,class:"text-2xl font-semibold mb-3"},de={key:3,class:"bg-blue-100 text-blue-900 text-sm rounded-md py-1 px-3"},me={class:"mt-8 mb-4 font-medium"},_e={class:"flex items-center mb-3"},fe={class:"ml-2"},ve={class:"flex items-center mb-3"},pe={class:"ml-2"},he={class:"flex items-center"},ge={class:"ml-2"},q={__name:"CourseCardOverlay",props:{course:{type:Object,default:null}},setup(r){const n=Q(),e=O("$user"),d=r,u=V(()=>d.course.data.video_link?"https://www.youtube.com/embed/"+d.course.data.video_link:null);function _(){e.data?R({url:"lms.lms.doctype.lms_enrollment.lms_enrollment.create_membership"}).submit({course:d.course.data.name}).then(()=>{L({title:"Enrolled Successfully",icon:"check",iconClasses:"text-green-600 bg-green-100"}),setTimeout(()=>{n.push({name:"Lesson",params:{courseName:d.course.data.name,chapterNumber:1,lessonNumber:1}})},3e3)}):(L({title:"Please Login",icon:"alert-circle",iconClasses:"text-yellow-600 bg-yellow-100"}),setTimeout(()=>{window.location.href=`/login?redirect-to=${window.location.pathname}`},2e3))}const g=()=>{let s=!1;return d.course.data.instructors.forEach(c=>{var b;!s&&c.name==((b=e.data)==null?void 0:b.name)&&(s=!0)}),s},m=V(()=>{var s,c,b;return!!((s=d.course.data)!=null&&s.enable_certification&&((b=(c=d.course.data)==null?void 0:c.membership)==null?void 0:b.progress)==100)}),w=R({url:"lms.lms.doctype.lms_certificate.lms_certificate.create_certificate",makeParams(s){return{course:s.course}},onSuccess(s){console.log(s),window.open(`/api/method/frappe.utils.print_format.download_pdf?doctype=LMS+Certificate&name=${s.name}&format=${encodeURIComponent(s.template)}`,"_blank")}}),v=()=>{var s,c;w.submit({course:(s=d.course.data)==null?void 0:s.name,member:(c=e.data)==null?void 0:c.name})};return(s,c)=>{var C,f;const b=A("router-link");return o(),p("div",ne,[r.course.data.video_link?(o(),p("iframe",{key:0,src:u.value,class:"rounded-t-md min-h-56 w-full"},null,8,ie)):y("",!0),a("div",ue,[r.course.data.price?(o(),p("div",ce,l(r.course.data.price),1)):y("",!0),r.course.data.membership?(o(),x(b,{key:1,to:{name:"Lesson",params:{courseName:r.course.name,chapterNumber:r.course.data.current_lesson?r.course.data.current_lesson.split("-")[0]:1,lessonNumber:r.course.data.current_lesson?r.course.data.current_lesson.split("-")[1]:1}}},{default:h(()=>[i(t(k),{variant:"solid",size:"md",class:"w-full"},{default:h(()=>[a("span",null,l(s.__("Continue Learning")),1)]),_:1})]),_:1},8,["to"])):r.course.data.paid_course?(o(),x(b,{key:2,to:{name:"Billing",params:{type:"course",name:r.course.data.name}}},{default:h(()=>[i(t(k),{variant:"solid",size:"md",class:"w-full"},{default:h(()=>[a("span",null,l(s.__("Buy this course")),1)]),_:1})]),_:1},8,["to"])):r.course.data.disable_self_learning?(o(),p("div",de,l(s.__("Contact the Administrator to enroll for this course.")),1)):(o(),x(t(k),{key:4,onClick:c[0]||(c[0]=U=>_()),variant:"solid",class:"w-full",size:"md"},{default:h(()=>[a("span",null,l(s.__("Start Learning")),1)]),_:1})),m.value?(o(),x(t(k),{key:5,onClick:c[1]||(c[1]=U=>v()),variant:"subtle",class:"w-full mt-2",size:"md"},{default:h(()=>[z(l(s.__("Get Certificate")),1)]),_:1})):y("",!0),(f=(C=t(e))==null?void 0:C.data)!=null&&f.is_moderator||g()?(o(),x(b,{key:6,to:{name:"CourseForm",params:{courseName:r.course.data.name}}},{default:h(()=>[i(t(k),{variant:"subtle",class:"w-full mt-2",size:"md"},{default:h(()=>[a("span",null,l(s.__("Edit")),1)]),_:1})]),_:1},8,["to"])):y("",!0),a("div",me,l(s.__("This course has:")),1),a("div",_e,[i(t(ae),{class:"h-5 w-5 stroke-1.5 text-gray-600"}),a("span",fe,l(r.course.data.lesson_count)+" "+l(s.__("Lessons")),1)]),a("div",ve,[i(t(H),{class:"h-5 w-5 stroke-1.5 text-gray-600"}),a("span",pe,l(r.course.data.enrollment_count_formatted)+" "+l(s.__("Enrolled Students")),1)]),a("div",he,[i(t(S),{class:"h-5 w-5 stroke-1.5 fill-orange-500 text-gray-50"}),a("span",ge,l(r.course.data.avg_rating)+" "+l(s.__("Rating")),1)])])])}}},we={class:"flex text-center"},be={__name:"Rating",props:{id:{type:String,default:""},modelValue:{type:Number,default:0}},emits:["update:modelValue"],setup(r,{emit:n}){const e=r,d=n;let u=F(e.modelValue),_=m=>{d("update:modelValue",m)};function g(m){_(m),u.value=m}return(m,w)=>(o(),p("div",we,[(o(),p($,null,N(5,v=>a("div",null,[i(t(S),{class:B([v<=t(u)?"fill-orange-500":"","h-6 w-6 fill-gray-400 text-gray-50 mr-1 cursor-pointer"]),onClick:s=>g(v)},null,8,["class","onClick"])])),64))]))}},ye={class:"flex flex-col gap-4"},xe={class:"mb-1.5 text-sm text-gray-600"},ke={class:"mb-1.5 text-sm text-gray-600"},$e={__name:"ReviewModal",props:X({courseName:{type:String,required:!0}},{modelValue:{},modelModifiers:{},reloadReviews:{},reloadReviewsModifiers:{},hasReviewed:{},hasReviewedModifiers:{}}),emits:["update:modelValue","update:reloadReviews","update:hasReviewed"],setup(r){const n=M(r,"modelValue"),e=M(r,"reloadReviews"),d=M(r,"hasReviewed");let u=Y({review:"",rating:0});const _=r,g=R({url:"frappe.client.insert",makeParams(w){return{doc:j({doctype:"LMS Course Review",course:_.courseName},w)}}});function m(w){u.rating=u.rating/5,g.submit(u,{validate(){if(!u.rating)return"Please enter a rating."},onSuccess(){e.value.reload(),d.value.reload()},onError(v){var s;L({text:((s=v.messages)==null?void 0:s[0])||v,icon:"x",iconClasses:"text-red-600 bg-red-300"})}}),w()}return(w,v)=>(o(),x(t(ee),{modelValue:n.value,"onUpdate:modelValue":v[2]||(v[2]=s=>n.value=s),options:{title:w.__("Write a Review"),size:"xl",actions:[{label:"Submit",variant:"solid",onClick:s=>m(s)}]}},{"body-content":h(()=>[a("div",ye,[a("div",null,[a("div",xe,l(w.__("Rating")),1),i(be,{modelValue:t(u).rating,"onUpdate:modelValue":v[0]||(v[0]=s=>t(u).rating=s)},null,8,["modelValue"])]),a("div",null,[a("div",ke,l(w.__("Review")),1),i(t(Z),{type:"text",size:"md",rows:"5",modelValue:t(u).review,"onUpdate:modelValue":v[1]||(v[1]=s=>t(u).review=s)},null,8,["modelValue"])])])]),_:1},8,["modelValue","options"]))}},Re={key:0,class:"mt-20 mb-10"},Ce={class:"flex items-center font-semibold text-2xl"},Ne={class:"grid gap-8 mt-10"},Ve={class:"flex items-center"},Se={class:"mx-4"},Me={class:"text-lg font-medium mr-4"},Le={class:"flex mt-2"},ze={key:0,class:"mt-4 leading-5"},Be={__name:"CourseReviews",props:{courseName:{type:String,required:!0},avg_rating:{type:Number,required:!0},membership:{type:Object,required:!1}},setup(r){var m,w,v;const n=O("$user"),e=r,d=R({url:"frappe.client.get_count",cache:["eligible_to_review",e.courseName,(m=e.membership)==null?void 0:m.member],params:{doctype:"LMS Course Review",filters:{course:e.courseName,owner:(w=e.membership)==null?void 0:w.member}},auto:!!((v=n.data)!=null&&v.name)}),u=R({url:"lms.lms.utils.get_reviews",cache:["course_reviews",e.courseName],params:{course:e.courseName},auto:!0}),_=F(!1);function g(){_.value=!0}return(s,c)=>{var C;const b=A("router-link");return o(),p($,null,[(C=t(u).data)!=null&&C.length||r.membership?(o(),p("div",Re,[r.membership&&!t(d).data?(o(),x(t(k),{key:0,onClick:c[0]||(c[0]=f=>g()),class:"float-right"},{default:h(()=>[z(l(s.__("Write a Review")),1)]),_:1})):y("",!0),a("div",Ce,l(s.__("Student Reviews")),1),a("div",Ne,[(o(!0),p($,null,N(t(u).data,(f,U)=>(o(),p("div",null,[a("div",Ve,[i(b,{to:{name:"Profile",params:{username:f.owner_details.username}}},{default:h(()=>[i(G,{user:f.owner_details,size:"2xl"},null,8,["user"])]),_:2},1032,["to"]),a("div",Se,[i(b,{to:{name:"Profile",params:{username:f.owner_details.username}}},{default:h(()=>[a("span",Me,l(f.owner_details.full_name),1)]),_:2},1032,["to"]),a("span",null,l(f.creation),1),a("div",Le,[(o(),p($,null,N(5,I=>i(t(S),{class:B(["h-5 w-5 text-gray-100 bg-gray-200 rounded-sm mr-2",I<=Math.ceil(f.rating)?"fill-orange-500":"fill-gray-600"])},null,8,["class"])),64))])])]),f.review?(o(),p("div",ze,l(f.review),1)):y("",!0)]))),256))])])):y("",!0),i($e,{modelValue:_.value,"onUpdate:modelValue":c[1]||(c[1]=f=>_.value=f),reloadReviews:t(u),"onUpdate:reloadReviews":c[2]||(c[2]=f=>D(u)?u.value=f:null),hasReviewed:t(d),"onUpdate:hasReviewed":c[3]||(c[3]=f=>D(d)?d.value=f:null),courseName:r.courseName},null,8,["modelValue","reloadReviews","hasReviewed","courseName"])],64)}}},Ue={key:0},Te={class:"sticky top-0 z-10 flex items-center justify-between border-b bg-white px-3 py-2.5 sm:px-5"},Ee={class:"m-5"},je={class:"flex justify-between w-full"},De={class:"md:w-2/3"},Pe={class:"text-3xl font-semibold"},qe={class:"my-3 leading-6"},Oe={class:"flex items-center"},Ae={class:"ml-1"},Fe={key:1,class:"mx-3"},He={class:"ml-1"},Ge={key:3,class:"mx-3"},Ie={class:"flex items-center"},We={class:"flex mt-3 mb-4 w-fit"},Je=["innerHTML"],Ke={class:"mt-10"},Qe={class:"hidden md:block"},at={__name:"CourseDetail",props:{courseName:{type:String,required:!0}},setup(r){const n=r,e=R({url:"lms.lms.utils.get_course_details",cache:["course",n.courseName],params:{course:n.courseName},auto:!0}),d=V(()=>{var g,m;let _=[{label:"All Courses",route:{name:"Courses"}}];return _.push({label:(g=e==null?void 0:e.data)==null?void 0:g.title,route:{name:"CourseDetail",params:{course:(m=e==null?void 0:e.data)==null?void 0:m.name}}}),_}),u=V(()=>{var _,g;return{title:(_=e==null?void 0:e.data)==null?void 0:_.title,description:(g=e==null?void 0:e.data)==null?void 0:g.short_introduction}});return re(u),(_,g)=>t(e).data?(o(),p("div",Ue,[a("header",Te,[i(t(te),{class:"h-7",items:d.value},null,8,["items"])]),a("div",Ee,[a("div",je,[a("div",De,[a("div",Pe,l(t(e).data.title),1),a("div",qe,l(t(e).data.short_introduction),1),a("div",Oe,[t(e).data.avg_rating?(o(),x(t(P),{key:0,text:_.__("Average Rating"),class:"flex items-center"},{default:h(()=>[i(t(S),{class:"h-5 w-5 text-gray-100 fill-orange-500"}),a("span",Ae,l(t(e).data.avg_rating),1)]),_:1},8,["text"])):y("",!0),t(e).data.avg_rating?(o(),p("span",Fe,"·")):y("",!0),t(e).data.enrollment_count?(o(),x(t(P),{key:2,text:_.__("Enrolled Students"),class:"flex items-center"},{default:h(()=>[i(t(H),{class:"h-4 w-4 text-gray-700"}),a("span",He,l(t(e).data.enrollment_count_formatted),1)]),_:1},8,["text"])):y("",!0),t(e).data.enrollment_count?(o(),p("span",Ge,"·")):y("",!0),a("div",Ie,[a("span",{class:B(["h-6 mr-1",{"avatar-group overlap":t(e).data.instructors.length>1}])},[(o(!0),p($,null,N(t(e).data.instructors,m=>(o(),x(G,{user:m},null,8,["user"]))),256))],2),i(le,{instructors:t(e).data.instructors},null,8,["instructors"])])]),a("div",We,[(o(!0),p($,null,N(t(e).data.tags,m=>(o(),x(t(se),{theme:"gray",size:"lg",class:"mr-2"},{default:h(()=>[z(l(m),1)]),_:2},1024))),256))]),i(q,{course:t(e),class:"md:hidden mb-4"},null,8,["course"]),a("div",{innerHTML:t(e).data.description,class:"course-description"},null,8,Je),a("div",Ke,[i(oe,{courseName:t(e).data.name,showOutline:!0},null,8,["courseName"])]),i(Be,{courseName:t(e).data.name,avg_rating:t(e).data.avg_rating,membership:t(e).data.membership},null,8,["courseName","avg_rating","membership"])]),a("div",Qe,[i(q,{course:t(e)},null,8,["course"])])])])])):y("",!0)}};export{at as default};
//# sourceMappingURL=CourseDetail-Cp8bzqWi.js.map