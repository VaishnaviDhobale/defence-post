"use strict";(self.webpackChunkdefence_post=self.webpackChunkdefence_post||[]).push([[46,740],{1569:(e,t,n)=>{n.d(t,{F:()=>o});const o="https://backend.defencepost.in"},7392:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});var o=n(1986),a=n(824),s=n(2715),l=n(2791),i=n(8820),r=n(7689),c=n(1087),d=n(5294),x=n(1569),p=n(1332),u=n(3980),m=n(184);const g=(0,l.lazy)((()=>n.e(612).then(n.bind(n,2612))));const h=function(){const e=(0,r.s0)(),t=(0,o.p)();let[n,h]=(0,l.useState)(!1),[f,j]=(0,l.useState)(!1),[v,y]=(0,l.useState)(!1),[b,k]=(0,l.useState)({}),[S,C]=(0,l.useState)([]),[w,L]=(0,l.useState)(""),[N,O]=(0,l.useState)(""),[z,P]=(0,l.useState)([]),[F,I]=(0,l.useState)("notPresent"),[D,B]=(0,l.useState)("notBlocked");const E={border:"1.5px solid #29a4de",marginBottom:"20px",marginTop:"7px",outline:"none",padding:"10px",width:"100%",fontSize:"16px",borderRadius:"10px",color:"#29a4de"},U=n=>{n.preventDefault(),L((e=>{var t;return(null===b||void 0===b||null===(t=b.password)||void 0===t?void 0:t.length)>=6?"noErr":"err"})),O((e=>b.password===(null===b||void 0===b?void 0:b.confirmPass)?"noErr":"err"));if(null===z||void 0===z?void 0:z.some((e=>(null===e||void 0===e?void 0:e.email)===(null===b||void 0===b?void 0:b.email))))return void I("present");I("notPresent");(null===S||void 0===S?void 0:S.some((e=>(null===e||void 0===e?void 0:e.email)===(null===b||void 0===b?void 0:b.email)||(null===e||void 0===e?void 0:e.contact)===(null===b||void 0===b?void 0:b.contact))))?B("blocked"):(B("notBlocked"),"noErr"===w&&"noErr"===N&&"notPresent"===F&&"notBlocked"===D&&(async()=>{y(!0);try{let e=await d.Z.post("".concat(x.F,"/user/add"),b);200===(null===e||void 0===e?void 0:e.status)?t({title:e.data.msg,description:"Have a great day",status:"success",duration:2e3,isClosable:!0,position:"top"}):alert("Something went wrong, please try again")}catch(w){alert(w)}e("/login")})())},A=e=>{let t=e.target.name,n=e.target.value;k({...b,[t]:n})};return(0,l.useEffect)((()=>{sessionStorage.setItem("prevPage",null),async function(){let e=await d.Z.get("".concat(x.F,"/user/"));P(null===e||void 0===e?void 0:e.data)}(),async function(){try{let e=await d.Z.get("".concat(x.F,"/block/"));C(null===e||void 0===e?void 0:e.data)}catch(w){alert(w)}}()}),[]),(0,m.jsxs)(a.xu,{mt:"100px",children:[(0,m.jsx)(u.default,{}),(0,m.jsxs)(s.x,{textAlign:{base:"Center",lg:"left"},marginLeft:{base:"0",lg:"50px"},marginBottom:"20px",fontSize:"20px",color:"#27395F",cursor:"Pointer",display:{base:"none",md:"flex"},fontFamily:"Barlow",children:[(0,m.jsx)(i.CF5,{style:{position:"relative",top:"6px",fontSize:"17px"}}),(0,m.jsx)(c.rU,{to:"/",children:"Back"})]}),(0,m.jsxs)(a.xu,{width:{base:"100%",md:"50%",lg:"40%"},margin:"auto",boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"30px",marginBottom:"100px",borderRadius:"20px",position:"relative",fontFamily:"Barlow",children:[(0,m.jsx)(s.x,{fontSize:"30px",fontWeight:"Bold",marginBottom:"30px",children:"Personal Details"}),(0,m.jsxs)("form",{onSubmit:U,style:{textAlign:"left"},children:[(0,m.jsx)("label",{htmlFor:"",style:{alignItems:"left",fontSize:"20px",marginLeft:"2px"},children:"Full Name*"}),(0,m.jsx)("input",{required:!0,style:E,type:"text",placeholder:"Full Name",name:"name",onChange:A}),(0,m.jsx)("label",{htmlFor:"",style:{alignItems:"left",fontSize:"20px",marginLeft:"2px"},children:"Phone Number*"}),(0,m.jsx)("input",{type:"phone",required:!0,style:E,placeholder:"Phone Number",onChange:A,name:"contact"}),(0,m.jsx)("label",{htmlFor:"",style:{alignItems:"left",fontSize:"20px",marginLeft:"2px"},children:"Email*"}),(0,m.jsx)("input",{required:!0,style:E,placeholder:"Email",onChange:A,name:"email"}),(0,m.jsx)("label",{htmlFor:"",style:{alignItems:"left",fontSize:"20px",marginLeft:"2px"},children:"Password*"}),(0,m.jsx)("input",{type:n?"password":"text",style:E,placeholder:"Password",required:!0,name:"password",onChange:A}),(0,m.jsx)("label",{htmlFor:"",style:{alignItems:"left",fontSize:"20px",marginLeft:"2px"},children:"Confirm Password*"}),(0,m.jsx)("input",{type:f?"password":"text",style:E,placeholder:"Confirm Password",required:!0,name:"confirmPass",onChange:A}),(0,m.jsx)("button",{onClick:U,disabled:v,style:{outline:"none",padding:"10px",width:"100%",backgroundColor:"#29a4de",cursor:"pointer",color:"white",fontSize:"17.5px"},children:"Sign Up"})]}),(0,m.jsxs)(s.x,{fontSize:"17.5px",marginTop:"20px",children:["Already have an account?"," ",(0,m.jsx)(c.rU,{style:{textDecoration:"underline",color:"#27395F"},to:"/login",children:"Login"})]}),(0,m.jsx)(a.xu,{fontSize:"25px",position:"absolute",right:"40px",top:"465px",cursor:"pointer",children:n?(0,m.jsx)(i.w8I,{onClick:()=>{h(!1)}}):(0,m.jsx)(i.p3W,{onClick:()=>{h(!0)}})}),(0,m.jsx)(a.xu,{fontSize:"25px",position:"absolute",right:"40px",top:"570px",cursor:"pointer",children:f?(0,m.jsx)(i.w8I,{onClick:()=>{j(!1)}}):(0,m.jsx)(i.p3W,{onClick:()=>{j(!0)}})}),(0,m.jsx)(l.Suspense,{fallback:(0,m.jsx)(p.E,{}),children:"blocked"===D?(0,m.jsx)(g,{data:{type:"error",msg:"You are blocked"}}):"present"===F?(0,m.jsx)(g,{data:{type:"error",msg:"You are already our user. Please go to login."}}):"err"===w?(0,m.jsx)(g,{data:{type:"error",msg:"Password should have a minimum of 6 characters."}}):"err"===N?(0,m.jsx)(g,{data:{type:"error",msg:"Password and Confirm password should match."}}):null})]})]})}},3980:(e,t,n)=>{n.r(t),n.d(t,{default:()=>C});var o=n(7689),a=n(1087),s=n(824),l=n(6640),i=n(2715),r=n(9055);const c=n.p+"static/media/Logo-black.39a7ee205721d782af4e.jpeg";var d=n(4368),x=n(4373),p=(n(1752),n(1274),n(4651)),u=n(1022),m=n(5672),g=n(8874),h=n(7849),f=n(634),j=n(6241),v=n(7685),y=n(2791),b=n(5294),k=n(184);var S=n(1569);const C=function(){var e,t,n;const C=(0,o.s0)(),{isOpen:w,onClose:L,onToggle:N}=(0,u.q)(),[O,z]=(0,y.useState)(!1),[P,F]=(0,y.useState)(!1),[I,D]=(0,y.useState)([]),[B,E]=(0,y.useState)([]),[U,A]=(0,y.useState)(!0);let[M,_]=(0,y.useState)(!1),[R,q]=(0,y.useState)(null===(e=JSON.parse(localStorage.getItem("DefencePostUserDetails")))||void 0===e?void 0:e.token),[T,Z]=(0,y.useState)(null===(t=JSON.parse(localStorage.getItem("DefencePostUserDetails")))||void 0===t?void 0:t.userName),[H,J]=(0,y.useState)(null===(n=JSON.parse(localStorage.getItem("DefencePostUserDetails")))||void 0===n?void 0:n.email),W=()=>{let e={token:null,userName:null,email:null};window.confirm("Are you sure you want to logout?")&&(localStorage.setItem("DefencePostUserDetails",JSON.stringify(e)),C("/"))};return(0,y.useEffect)((()=>{(async()=>{try{let e=await b.Z.get("".concat(S.F,"/post/"));const t=Array.from(new Map(e.data.map((e=>[e.category,e]))).values());E(t)}catch(e){alert(e)}})(),(async()=>{try{let e=await b.Z.get("".concat(S.F,"/course/"));D(e.data)}catch(e){alert(e)}})()}),[]),(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(s.xu,{className:"header",display:{base:"none",lg:"grid"},gridTemplateColumns:R?"30% 1fr":"30% 1fr 10%",alignItems:"center",backgroundColor:"white",color:"black",boxShadow:"rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",fontFamily:"Barlow",height:"70px",position:"fixed",width:"100%",top:"0px",marginBottom:"50px",zIndex:1e3,paddingRight:"30px",children:[(0,k.jsx)(a.OL,{className:"logo nav-link",to:"/",children:(0,k.jsx)(l.E,{src:c,width:"200px",height:"100%"})}),(0,k.jsxs)(s.xu,{className:"nav",display:"flex",justifyContent:"flex-end",fontSize:"18px",alignItems:"center",children:[(0,k.jsx)(a.OL,{className:"navContent nav-link",to:"/",children:"Home"}),(0,k.jsxs)(s.xu,{display:"flex",className:"navContent",onMouseEnter:()=>{z(!0)},onMouseLeave:()=>{z(!1)},children:[(0,k.jsx)(a.OL,{className:"nav-link",to:"/posts",children:"Posts"})," ",(0,k.jsx)(d.v,{style:{position:"relative",top:"5px",marginLeft:"5px"}}),O&&(0,k.jsx)(s.xu,{className:"dropdown ".concat(U?"animate_animated animate_zoomIn":""),position:"absolute",top:"45px",display:"flex",flexDirection:"column",backgroundColor:"white",textAlign:"left",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",padding:"10px 20px",borderRadius:"10px",children:B.map(((e,t)=>(0,k.jsx)(a.OL,{to:"/singlepostpage/".concat(e._id,"/").concat(t,"/").concat(e.category),children:e.category})))})]}),(0,k.jsxs)(s.xu,{display:"flex",className:"navContent",onMouseEnter:()=>{F(!0)},onMouseLeave:()=>{F(!1)},children:[(0,k.jsx)(a.OL,{to:"/course",className:"nav-link",children:"Course"})," ",(0,k.jsx)(d.v,{style:{position:"relative",top:"5px",marginLeft:"5px"}}),P&&(0,k.jsx)(s.xu,{className:"dropdown ".concat(U?"animate_animated animate_zoomIn":""),position:"absolute",top:"45px",display:"flex",flexDirection:"column",backgroundColor:"white",textAlign:"left",padding:"10px 20px",borderRadius:"10px",boxShadow:"rgba(0, 0, 0, 0.16) 0px 1px 4px",children:P&&I.map(((e,t)=>(0,k.jsx)(a.OL,{to:"/viewdetails/".concat(e._id),className:"nav-link",children:e.name})))})]}),R&&(0,k.jsx)(a.OL,{className:"navContent nav-link",to:"/mycourse",children:"My Course"}),(0,k.jsx)(a.OL,{className:"navContent nav-link",to:"/free",children:"Free"}),"masaieducation17@gmail.com"==H&&(0,k.jsx)(a.OL,{className:"navContent nav-link",to:"/datahub",children:"DataHub"}),!R&&(0,k.jsx)(a.OL,{className:"navContent nav-link",to:"/login",children:"Login"}),R&&(0,k.jsx)(i.x,{backgroundColor:"green.300",borderRadius:"50%",width:"40px",h:"40px",color:"white",ml:"20px",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",onClick:()=>{_(!M)},children:T[0].toUpperCase()})]}),(0,k.jsxs)(s.xu,{display:"flex",gap:"10px",children:[!R&&(0,k.jsx)(a.OL,{className:"navContent",style:{marginLeft:"0px"},to:"/signup",children:(0,k.jsx)(r.z,{marginLeft:"30px",backgroundColor:"#28a4de",color:"white",fontWeight:"500",children:"Sign Up"})}),M&&(0,k.jsxs)(s.xu,{boxShadow:" rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",position:"absolute",top:"75px",right:"20px",padding:"10px 40px",backgroundColor:"white",children:[(0,k.jsx)(i.x,{fontSize:"15px",children:H}),(0,k.jsxs)(s.xu,{display:"flex",alignItems:"center",gap:"10px",fontSize:"20px",cursor:"pointer",onClick:W,children:[(0,k.jsx)(i.x,{children:"Logout"}),(0,k.jsx)(x.AGD,{color:"red"})]})]})]})]}),(0,k.jsxs)(s.xu,{display:{base:"flex",lg:"none"},justifyContent:"space-between",color:"#28a4de",marginBottom:"50px",marginTop:"10px",boxShadow:"rgba(17, 17, 26, 0.1) 0px 1px 0px",children:[(0,k.jsx)(l.E,{src:c,width:"180px"}),(0,k.jsx)(s.xu,{className:"ThreeLines",cursor:"pointer",children:(0,k.jsx)(p.QEj,{style:{height:"40px",width:"30px"},onClick:()=>{N()}})})]}),(0,k.jsxs)(m.d,{isOpen:w,placement:"right",onClose:()=>{},children:[(0,k.jsx)(g.Z,{}),(0,k.jsxs)(h.s,{children:[(0,k.jsx)(f.o,{onClick:L}),(0,k.jsx)(j.f,{children:(0,k.jsxs)(s.xu,{display:"grid",gap:"15px",fontSize:"20px",children:[(0,k.jsx)(i.x,{fontSize:"14px",textDecoration:"underline",children:H}),(0,k.jsx)(a.OL,{className:"nav-link",to:"/",onClick:L,children:"Home"}),(0,k.jsxs)(s.xu,{display:"flex",children:[(0,k.jsx)(a.OL,{to:"/posts",className:"nav-link",children:"Posts"})," "]}),(0,k.jsxs)(s.xu,{display:"flex",children:[(0,k.jsx)(a.OL,{to:"/course",className:"nav-link",children:"Course"})," "]}),R&&(0,k.jsx)(a.OL,{to:"/mycourse",onClick:L,className:"nav-link",children:"My Course"}),(0,k.jsx)(a.OL,{to:"/free",onClick:L,className:"nav-link",children:"Free Resources"}),R?(0,k.jsx)(i.x,{onClick:W,className:"nav-link",children:"Logout"}):(0,k.jsx)(a.OL,{to:"/login",onClick:L,className:"nav-link",children:"Login"}),(0,k.jsx)(a.OL,{to:"/signup",onClick:L,className:"nav-link",children:"Sign Up"})]})}),(0,k.jsx)(v.m,{children:(0,k.jsx)(r.z,{variant:"outline",mr:3,onClick:L,children:"Cancel"})})]})]})]})}},1752:()=>{},1986:(e,t,n)=>{n.d(t,{p:()=>i});var o=n(3225),a=n(4635),s=n(2884),l=n(2791);function i(e){const{theme:t}=(0,s.uP)(),n=(0,o.OX)();return(0,l.useMemo)((()=>(0,a.Cj)(t.direction,{...n,...e})),[e,t.direction,n])}}}]);
//# sourceMappingURL=46.033fd32c.chunk.js.map