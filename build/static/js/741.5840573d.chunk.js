"use strict";(self.webpackChunkdefence_post=self.webpackChunkdefence_post||[]).push([[741,740],{1569:(e,n,a)=>{a.d(n,{F:()=>t});const t="https://backend.defencepost.in"},4227:(e,n,a)=>{a.r(n),a.d(n,{default:()=>g});var t=a(5294),s=a(824),o=a(2715),l=a(9055),i=a(2791),r=a(1332),c=a(1569),x=a(1087),d=a(3980),p=a(184);const u=(0,i.lazy)((()=>a.e(881).then(a.bind(a,4881))));const g=function(){var e;let n=null===(e=JSON.parse(localStorage.getItem("DefencePostUserDetails")))||void 0===e?void 0:e.token;const a={token:n,"Content-Type":"application/json"};let[g,h]=(0,i.useState)([]),[m,j]=(0,i.useState)(!1);return(0,i.useEffect)((()=>{!async function(){try{var e;j(!0);let n=await t.Z.get("".concat(c.F,"/mycourse/"),{headers:a});h(null===n||void 0===n||null===(e=n.data)||void 0===e?void 0:e.data),j(!1)}catch(n){j(!1),console.log(n)}}()}),[]),m?(0,p.jsx)(p.Fragment,{children:(0,p.jsx)(r.E,{})}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(d.default,{}),0!==(null===g||void 0===g?void 0:g.length)&&n?(0,p.jsx)(s.xu,{display:"grid",gridTemplateColumns:{base:"repeat(1, 1fr)",sm:"repeat(1, 1fr)",md:"repeat(2, 1fr)",lg:"repeat(3, 1fr)"},gap:"50px",margin:{base:"30px 20px",sm:"100px 60px"},fontFamily:"Barlow",children:null===g||void 0===g?void 0:g.map(((e,n)=>(0,p.jsx)(i.Suspense,{fallback:(0,p.jsx)(r.E,{}),children:(0,p.jsx)(u,{data:e},n)})))}):(0,p.jsxs)(s.xu,{children:[(0,p.jsx)(o.x,{fontWeight:"bold",fontSize:"20px",fontFamily:"Barlow",textAlign:"center",marginTop:"160px",children:"Start your CDS journey with our interactive Booklets."}),(0,p.jsx)(x.rU,{to:"/course",children:(0,p.jsx)(l.z,{mt:"4",bg:"#28a4de",size:"lg",fontFamily:"Barlow",color:"white",children:"Explore Courses"})})]})]})}},3980:(e,n,a)=>{a.r(n),a.d(n,{default:()=>S});var t=a(7689),s=a(1087),o=a(824),l=a(6640),i=a(2715),r=a(9055);const c=a.p+"static/media/Logo-black.39a7ee205721d782af4e.jpeg";var x=a(4368),d=a(4373),p=(a(1752),a(1274),a(4651)),u=a(1022),g=a(5672),h=a(8874),m=a(7849),j=a(634),f=a(6241),v=a(7685),k=a(2791),y=a(5294),C=a(184);var b=a(1569);const S=function(){var e,n,a;const S=(0,t.s0)(),{isOpen:w,onClose:N,onToggle:L}=(0,u.q)(),[O,D]=(0,k.useState)(!1),[z,F]=(0,k.useState)(!1),[I,E]=(0,k.useState)([]),[U,_]=(0,k.useState)([]),[B,M]=(0,k.useState)(!0);let[P,T]=(0,k.useState)(!1),[A,J]=(0,k.useState)(null===(e=JSON.parse(localStorage.getItem("DefencePostUserDetails")))||void 0===e?void 0:e.token),[R,Z]=(0,k.useState)(null===(n=JSON.parse(localStorage.getItem("DefencePostUserDetails")))||void 0===n?void 0:n.userName),[H,W]=(0,k.useState)(null===(a=JSON.parse(localStorage.getItem("DefencePostUserDetails")))||void 0===a?void 0:a.email),q=()=>{let e={token:null,userName:null,email:null};window.confirm("Are you sure you want to logout?")&&(localStorage.setItem("DefencePostUserDetails",JSON.stringify(e)),S("/"))};return(0,k.useEffect)((()=>{(async()=>{try{let e=await y.Z.get("".concat(b.F,"/post/"));const n=Array.from(new Map(e.data.map((e=>[e.category,e]))).values());_(n)}catch(e){alert(e)}})(),(async()=>{try{let e=await y.Z.get("".concat(b.F,"/course/"));E(e.data)}catch(e){alert(e)}})()}),[]),(0,C.jsxs)(C.Fragment,{children:[(0,C.jsxs)(o.xu,{className:"header",display:{base:"none",lg:"grid"},gridTemplateColumns:A?"30% 1fr":"30% 1fr 10%",alignItems:"center",backgroundColor:"white",color:"black",boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",fontFamily:"Barlow",height:"70px",position:"fixed",width:"100%",top:"0px",marginBottom:"50px",zIndex:1e3,paddingRight:"30px",children:[(0,C.jsx)(s.OL,{className:"logo nav-link",to:"/",children:(0,C.jsx)(l.E,{src:c,width:"200px",height:"100%"})}),(0,C.jsxs)(o.xu,{className:"nav",display:"flex",justifyContent:"flex-end",fontSize:"18px",alignItems:"center",children:[(0,C.jsx)(s.OL,{className:"navContent nav-link",to:"/",children:"Home"}),(0,C.jsxs)(o.xu,{display:"flex",className:"navContent",onMouseEnter:()=>{D(!0)},onMouseLeave:()=>{D(!1)},children:[(0,C.jsx)(s.OL,{className:"nav-link",to:"/posts",children:"Posts"})," ",(0,C.jsx)(x.v,{style:{position:"relative",top:"5px",marginLeft:"5px"}}),O&&(0,C.jsx)(o.xu,{className:"dropdown ".concat(B?"animate_animated animate_zoomIn":""),position:"absolute",top:"45px",display:"flex",flexDirection:"column",backgroundColor:"white",textAlign:"left",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",padding:"10px 20px",borderRadius:"10px",children:U.map(((e,n)=>(0,C.jsx)(s.OL,{to:"/singlepostpage/".concat(e._id,"/").concat(n,"/").concat(e.category),children:e.category})))})]}),(0,C.jsxs)(o.xu,{display:"flex",className:"navContent",onMouseEnter:()=>{F(!0)},onMouseLeave:()=>{F(!1)},children:[(0,C.jsx)(s.OL,{to:"/course",className:"nav-link",children:"Course"})," ",(0,C.jsx)(x.v,{style:{position:"relative",top:"5px",marginLeft:"5px"}}),z&&(0,C.jsx)(o.xu,{className:"dropdown ".concat(B?"animate_animated animate_zoomIn":""),position:"absolute",top:"45px",display:"flex",flexDirection:"column",backgroundColor:"white",textAlign:"left",padding:"10px 20px",borderRadius:"10px",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",children:z&&I.map(((e,n)=>(0,C.jsx)(s.OL,{to:"/viewdetails/".concat(e._id),className:"nav-link",children:e.name})))})]}),A&&(0,C.jsx)(s.OL,{className:"navContent nav-link",to:"/mycourse",children:"My Course"}),(0,C.jsx)(s.OL,{className:"navContent nav-link",to:"/free",children:"Free"}),"masaieducation17@gmail.com"==H&&(0,C.jsx)(s.OL,{className:"navContent nav-link",to:"/datahub",children:"DataHub"}),!A&&(0,C.jsx)(s.OL,{className:"navContent nav-link",to:"/login",children:"Login"}),A&&(0,C.jsx)(i.x,{backgroundColor:"green.300",borderRadius:"50%",width:"40px",h:"40px",color:"white",ml:"20px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",onClick:()=>{T(!P)},children:R[0].toUpperCase()})]}),(0,C.jsxs)(o.xu,{display:"flex",gap:"10px",children:[!A&&(0,C.jsx)(s.OL,{className:"navContent",style:{marginLeft:"0px"},to:"/signup",children:(0,C.jsx)(r.z,{marginLeft:"30px",backgroundColor:"#28a4de",color:"white",fontWeight:"500",children:"Sign Up"})}),P&&(0,C.jsxs)(o.xu,{boxShadow:" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",position:"absolute",top:"75px",right:"20px",padding:"10px 40px",backgroundColor:"white",children:[(0,C.jsx)(i.x,{fontSize:"15px",children:H}),(0,C.jsxs)(o.xu,{display:"flex",alignItems:"center",gap:"10px",fontSize:"20px",cursor:"pointer",onClick:q,children:[(0,C.jsx)(i.x,{children:"Logout"}),(0,C.jsx)(d.AGD,{color:"red"})]})]})]})]}),(0,C.jsxs)(o.xu,{display:{base:"flex",lg:"none"},justifyContent:"space-between",color:"#28a4de",marginBottom:"50px",marginTop:"10px",boxShadow:"rgba(17, 17, 26, 0.1) 0px 1px 0px",children:[(0,C.jsx)(l.E,{src:c,width:"180px"}),(0,C.jsx)(o.xu,{className:"ThreeLines",cursor:"pointer",children:(0,C.jsx)(p.QEj,{style:{height:"40px",width:"30px"},onClick:()=>{L()}})})]}),(0,C.jsxs)(g.d,{isOpen:w,placement:"right",onClose:()=>{},children:[(0,C.jsx)(h.Z,{}),(0,C.jsxs)(m.s,{children:[(0,C.jsx)(j.o,{onClick:N}),(0,C.jsx)(f.f,{children:(0,C.jsxs)(o.xu,{display:"grid",gap:"15px",fontSize:"20px",children:[(0,C.jsx)(i.x,{fontSize:"14px",textDecoration:"underline",children:H}),(0,C.jsx)(s.OL,{className:"nav-link",to:"/",onClick:N,children:"Home"}),(0,C.jsxs)(o.xu,{display:"flex",children:[(0,C.jsx)(s.OL,{to:"/posts",className:"nav-link",children:"Posts"})," "]}),(0,C.jsxs)(o.xu,{display:"flex",children:[(0,C.jsx)(s.OL,{to:"/course",className:"nav-link",children:"Course"})," "]}),A&&(0,C.jsx)(s.OL,{to:"/mycourse",onClick:N,className:"nav-link",children:"My Course"}),(0,C.jsx)(s.OL,{to:"/free",onClick:N,className:"nav-link",children:"Free Resources"}),A?(0,C.jsx)(i.x,{onClick:q,className:"nav-link",children:"Logout"}):(0,C.jsx)(s.OL,{to:"/login",onClick:N,className:"nav-link",children:"Login"}),(0,C.jsx)(s.OL,{to:"/signup",onClick:N,className:"nav-link",children:"Sign Up"})]})}),(0,C.jsx)(v.m,{children:(0,C.jsx)(r.z,{variant:"outline",mr:3,onClick:N,children:"Cancel"})})]})]})]})}},1752:()=>{}}]);
//# sourceMappingURL=741.5840573d.chunk.js.map