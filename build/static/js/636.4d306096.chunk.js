(self.webpackChunkdefence_post=self.webpackChunkdefence_post||[]).push([[636],{7636:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>D});var o=n(824),r=n(2715),i=n(9055),s=n(1087),a=(n(1274),n(2791)),l=n(2007),c=n.n(l),u=n(4164),p=n(3881),d=n.n(p),h=["accept","acceptCharset","accessKey","action","allowFullScreen","allowTransparency","alt","async","autoComplete","autoFocus","autoPlay","capture","cellPadding","cellSpacing","challenge","charSet","checked","cite","classID","className","colSpan","cols","content","contentEditable","contextMenu","controls","controlsList","coords","crossOrigin","data","dateTime","default","defer","dir","disabled","download","draggable","encType","form","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","headers","height","hidden","high","href","hrefLang","htmlFor","httpEquiv","icon","id","inputMode","integrity","is","keyParams","keyType","kind","label","lang","list","loop","low","manifest","marginHeight","marginWidth","max","maxLength","media","mediaGroup","method","min","minLength","multiple","muted","name","noValidate","nonce","open","optimum","pattern","placeholder","poster","preload","profile","radioGroup","readOnly","rel","required","reversed","role","rowSpan","rows","sandbox","scope","scoped","scrolling","seamless","selected","shape","size","sizes","span","spellCheck","src","srcDoc","srcLang","srcSet","start","step","style","summary","tabIndex","target","title","type","useMap","value","width","wmode","wrap"],f=["about","datatype","inlist","prefix","property","resource","typeof","vocab"],m=["onCopy","onCut","onPaste","onCompositionEnd","onCompositionStart","onCompositionUpdate","onKeyDown","onKeyPress","onKeyUp","onFocus","onBlur","onChange","onInput","onInvalid","onReset","onSubmit","onClick","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onPointerDown","onPointerMove","onPointerUp","onPointerCancel","onGotPointerCapture","onLostPointerCapture","onPointerEnter","onPointerLeave","onPointerOver","onPointerOut","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onScroll","onWheel","onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting","onLoad","onError","onAnimationStart","onAnimationEnd","onAnimationIteration","onTransitionEnd","onToggle"],g=/data-([a-zA-Z0-9\-]*)/,y=/aria-([a-zA-Z0-9\-]*)/;const v=function(e,t,n){void 0===e&&(e={}),void 0===t&&(t=[]),void 0===n&&(n=[]);var o=Object.assign({},e),r=Object.keys(o).filter((function(e){return-1===t.indexOf(e)&&(n.indexOf(e)>-1||(-1!==h.indexOf(e)||(-1!==f.indexOf(e)||(!!g.test(e)||(!!y.test(e)||-1!==m.indexOf(e))))))}));return Object.keys(o).forEach((function(e){-1===r.indexOf(e)&&delete o[e]})),o};function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function S(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function x(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function T(e,t){return T=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},T(e,t)}var E=function(e){var t,n;function o(t){var n;return(n=e.call(this,t)||this).onScrollThrottled=d()(n.onScroll.bind(x(n)),t.throttleScroll,{trailing:!1}),n.onResizeThrottled=d()(n.onResize.bind(x(n)),t.throttleResize,{trailing:!1}),n.state={inViewport:!1,progress:0,lastScrollPosition:null,lastScrollTime:null},n}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,T(t,n);var r=o.prototype;return r.componentDidMount=function(){addEventListener("resize",this.onResizeThrottled),addEventListener("scroll",this.onScrollThrottled),this.props.triggerOnLoad&&this.checkStatus()},r.componentDidUpdate=function(e,t){e.throttleScroll!==this.props.throttleScroll&&(removeEventListener("scroll",this.onScrollThrottled),this.onScrollThrottled=d()(this.onScroll.bind(this),this.props.throttleScroll,{trailing:!1}),addEventListener("scroll",this.onScrollThrottled)),e.throttleResize!==this.props.throttleResize&&(removeEventListener("resize",this.onResizeThrottled),this.onResizeThrottled=d()(this.onResize.bind(this),this.props.throttleResize,{trailing:!1}),addEventListener("resize",this.onResizeThrottled))},r.componentWillUnmount=function(){removeEventListener("resize",this.onResizeThrottled),removeEventListener("scroll",this.onScrollThrottled)},r.onResize=function(){this.checkStatus()},r.onScroll=function(){this.checkStatus()},r.checkStatus=function(){var e=this.props,t=e.containerRef,n=e.onEnter,o=e.onExit,r=e.onProgress,i=this.state,s=i.lastScrollPosition,a=i.lastScrollTime,l=u.findDOMNode(this.element).getBoundingClientRect(),c="string"===typeof t?document.querySelector(t):t,p=t===document.documentElement?Math.max(t.clientHeight,window.innerHeight||0):c.clientHeight,d=l.top<=p&&l.bottom>=0,h=window.scrollY,f=s&&a?Math.abs((s-h)/(a-Date.now())):null;if(d){var m=Math.max(0,Math.min(1,1-l.bottom/(p+l.height)));return this.state.inViewport||(this.setState({inViewport:d}),n({progress:m,velocity:f},this)),r({progress:m,velocity:f},this),void this.setState({lastScrollPosition:h,lastScrollTime:Date.now()})}if(this.state.inViewport){var g=l.top<=p?1:0;this.setState({lastScrollPosition:h,lastScrollTime:Date.now(),inViewport:d,progress:g}),r({progress:g,velocity:f},this),o({progress:g,velocity:f},this)}},r.render=function(){var e=this,t=this.props,n=t.children,o=t.component;return a[a.isValidElement(o)?"cloneElement":"createElement"](o,S(S({},v(this.props,["onProgress"])),{},{ref:function(t){e.element=t}}),n)},o}(a.Component);E.propTypes={component:c().oneOfType([c().element,c().node]),containerRef:c().oneOfType([c().object,c().string]),throttleResize:c().number,throttleScroll:c().number,triggerOnLoad:c().bool,onEnter:c().func,onExit:c().func,onProgress:c().func},E.defaultProps={component:"div",containerRef:"undefined"!==typeof document?document.documentElement:"html",throttleResize:100,throttleScroll:100,triggerOnLoad:!0,onEnter:function(){},onExit:function(){},onProgress:function(){}};const P=E;var w=n(1332),j=n(184);const C=(0,a.lazy)((()=>n.e(403).then(n.bind(n,1403))));const D=function(e){let{allCourseData:t}=e;const n=t.sort(((e,t)=>t.rating-e.rating)).slice(0,3),[l,c]=(0,a.useState)(!1),[u,p]=(0,a.useState)(!1);return(0,j.jsx)(P,{onEnter:()=>{c(!0)},onExit:()=>{c(!1)},children:(0,j.jsxs)(o.xu,{onMouseEnter:()=>{p(!0)},onMouseLeave:()=>{p(!1)},marginBottom:"50px",fontFamily:"Barlow",children:[(0,j.jsx)(o.xu,{className:"heading",textAlign:{base:"center",lg:"left"},children:(0,j.jsxs)(r.x,{fontSize:{base:"25px",sm:"30px"},fontWeight:"bold",children:["Our Popular ",(0,j.jsx)("span",{style:{color:"#28a4de"},children:"Courses"})]})}),(0,j.jsx)(o.xu,{display:"grid",gridTemplateColumns:{base:"repeat(1,1fr)",sm:"repeat(2,1fr)",md:"repeat(3,1fr)"},gap:{base:"30px",md:"25px",lg:"50px"},marginTop:"30px",children:n.map(((e,t)=>(0,j.jsx)(a.Suspense,{fallback:(0,j.jsx)(w.E,{}),children:(0,j.jsx)(C,{data:e})})))}),(0,j.jsx)(i.z,{textAlign:"center",marginTop:"50px",backgroundColor:"#28a4de",color:"white",fontWeight:"500",children:(0,j.jsx)(s.rU,{to:"/course",children:"View All Courses"})})]})})}},3881:(e,t,n)=>{var o="Expected a function",r=NaN,i="[object Symbol]",s=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,c=/^0o[0-7]+$/i,u=parseInt,p="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g,d="object"==typeof self&&self&&self.Object===Object&&self,h=p||d||Function("return this")(),f=Object.prototype.toString,m=Math.max,g=Math.min,y=function(){return h.Date.now()};function v(e,t,n){var r,i,s,a,l,c,u=0,p=!1,d=!1,h=!0;if("function"!=typeof e)throw new TypeError(o);function f(t){var n=r,o=i;return r=i=void 0,u=t,a=e.apply(o,n)}function v(e){var n=e-c;return void 0===c||n>=t||n<0||d&&e-u>=s}function O(){var e=y();if(v(e))return x(e);l=setTimeout(O,function(e){var n=t-(e-c);return d?g(n,s-(e-u)):n}(e))}function x(e){return l=void 0,h&&r?f(e):(r=i=void 0,a)}function T(){var e=y(),n=v(e);if(r=arguments,i=this,c=e,n){if(void 0===l)return function(e){return u=e,l=setTimeout(O,t),p?f(e):a}(c);if(d)return l=setTimeout(O,t),f(c)}return void 0===l&&(l=setTimeout(O,t)),a}return t=S(t)||0,b(n)&&(p=!!n.leading,s=(d="maxWait"in n)?m(S(n.maxWait)||0,t):s,h="trailing"in n?!!n.trailing:h),T.cancel=function(){void 0!==l&&clearTimeout(l),u=0,r=c=i=l=void 0},T.flush=function(){return void 0===l?a:x(y())},T}function b(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function S(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&f.call(e)==i}(e))return r;if(b(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=b(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(s,"");var n=l.test(e);return n||c.test(e)?u(e.slice(2),n?2:8):a.test(e)?r:+e}e.exports=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return b(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),v(e,t,{leading:r,maxWait:t,trailing:i})}},888:(e,t,n)=>{"use strict";var o=n(9047);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,i,s){if(s!==o){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return n.PropTypes=n,n}},2007:(e,t,n)=>{e.exports=n(888)()},9047:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=636.4d306096.chunk.js.map