(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[87539],{27049:(e,t,n)=>{"use strict";n.d(t,{O:()=>i});var o=n(65043),r=n(30286);function i(e,t=["INPUT","TEXTAREA","SELECT"],n=!1){(0,o.useEffect)((()=>{const o=o=>{e.forEach((([e,i,a={preventDefault:!0}])=>{(0,r.vX)(e)(o)&&function(e,t,n=!1){return!(e.target instanceof HTMLElement)||(n||!e.target.isContentEditable)&&!t.includes(e.target.tagName)}(o,t,n)&&(a.preventDefault&&o.preventDefault(),i(o))}))};return document.documentElement.addEventListener("keydown",o),()=>document.documentElement.removeEventListener("keydown",o)}),[e])}},8002:(e,t,n)=>{"use strict";n.d(t,{k:()=>b});var o=n(65043),r=n(97950),i=n(70579),a=n(60996),c=n(75495),s=n(5808);const l=({className:e,containerRef:t,containerProps:n,children:r,isOpen:l,theming:u,transition:f,onClose:d})=>{const p=(0,a.kf)(f,"item");return(0,i.jsx)("div",{...(0,a.v6)({onKeyDown:({key:e})=>{if(e===s.D$.ESC)(0,a.UF)(d,{key:e,reason:s.fi.CANCEL})},onBlur:e=>{l&&!e.currentTarget.contains(e.relatedTarget)&&(0,a.UF)(d,{reason:s.fi.BLUR})}},n),className:(0,c.K)({block:s.TY,modifiers:(0,o.useMemo)((()=>({theme:u,itemTransition:p})),[u,p]),className:e}),style:{position:"absolute",...null==n?void 0:n.style},ref:t,children:r})},u=()=>{let e,t=0;return{toggle:e=>{e?t++:t--,t=Math.max(t,0)},on:(n,o,r)=>{t?e||(e=setTimeout((()=>{e=0,o()}),n)):null==r||r()},off:()=>{e&&(clearTimeout(e),e=0)}}},f=({anchorRect:e,containerRect:t,menuRect:n,placeLeftorRightY:o,placeLeftX:r,placeRightX:i,getLeftOverflow:a,getRightOverflow:c,confineHorizontally:s,confineVertically:l,arrowRef:u,arrow:f,direction:d,position:p})=>{let m,h,b,y=d,g=o;"initial"!==p&&(g=l(g),"anchor"===p&&(g=Math.min(g,e.bottom-t.top),g=Math.max(g,e.top-t.top-n.height))),"left"===y?(m=r,"initial"!==p&&(h=a(m),h<0&&(b=c(i),(b<=0||-h>b)&&(m=i,y="right")))):(m=i,"initial"!==p&&(b=c(m),b>0&&(h=a(r),(h>=0||-h<b)&&(m=r,y="left")))),"auto"===p&&(m=s(m));const v=f?(({arrowRef:e,menuY:t,anchorRect:n,containerRect:o,menuRect:r})=>{let i=n.top-o.top-t+n.height/2;const a=1.25*e.current.offsetHeight;return i=Math.max(a,i),i=Math.min(i,r.height-a),i})({menuY:g,arrowRef:u,anchorRect:e,containerRect:t,menuRect:n}):void 0;return{arrowY:v,x:m,y:g,computedDirection:y}},d=({anchorRect:e,containerRect:t,menuRect:n,placeToporBottomX:o,placeTopY:r,placeBottomY:i,getTopOverflow:a,getBottomOverflow:c,confineHorizontally:s,confineVertically:l,arrowRef:u,arrow:f,direction:d,position:p})=>{let m,h,b,y="top"===d?"top":"bottom",g=o;"initial"!==p&&(g=s(g),"anchor"===p&&(g=Math.min(g,e.right-t.left),g=Math.max(g,e.left-t.left-n.width))),"top"===y?(m=r,"initial"!==p&&(h=a(m),h<0&&(b=c(i),(b<=0||-h>b)&&(m=i,y="bottom")))):(m=i,"initial"!==p&&(b=c(m),b>0&&(h=a(r),(h>=0||-h<b)&&(m=r,y="top")))),"auto"===p&&(m=l(m));const v=f?(({arrowRef:e,menuX:t,anchorRect:n,containerRect:o,menuRect:r})=>{let i=n.left-o.left-t+n.width/2;const a=1.25*e.current.offsetWidth;return i=Math.max(a,i),i=Math.min(i,r.width-a),i})({menuX:g,arrowRef:u,anchorRect:e,containerRect:t,menuRect:n}):void 0;return{arrowX:v,x:g,y:m,computedDirection:y}};var p=n(72465),m=n(66251);const h=({ariaLabel:e,menuClassName:t,menuStyle:n,arrow:h,arrowProps:b={},anchorPoint:y,anchorRef:g,containerRef:v,containerProps:w,focusProps:R,externalRef:E,parentScrollingRef:x,align:C="start",direction:O="bottom",position:S="auto",overflow:k="visible",setDownOverflow:T,repositionFlag:D,captureFocus:P=!0,state:N,endTransition:j,isDisabled:A,menuItemFocus:L,gap:I=0,shift:M=0,children:Y,onClose:U,...B})=>{const[F,G]=(0,o.useState)({x:-9999,y:-9999}),[X,_]=(0,o.useState)({}),[z,H]=(0,o.useState)(),[$,K]=(0,o.useState)(O),[W]=(0,o.useState)(u),[q,V]=(0,o.useReducer)((e=>e+1),1),{transition:J,boundingBoxRef:Q,boundingBoxPadding:Z,rootMenuRef:ee,rootAnchorRef:te,scrollNodesRef:ne,reposition:oe,viewScroll:re,submenuCloseDelay:ie}=(0,o.useContext)(s.lj),{submenuCtx:ae,reposSubmenu:ce=D}=(0,o.useContext)(s.VU),se=(0,o.useRef)(null),le=(0,o.useRef)(),ue=(0,o.useRef)(),fe=(0,o.useRef)(!1),de=(0,o.useRef)({width:0,height:0}),pe=(0,o.useRef)((()=>{})),{hoverItem:me,dispatch:he,updateItems:be}=((e,t)=>{const[n,r]=(0,o.useState)(),i=(0,o.useRef)({items:[],hoverIndex:-1,sorted:!1}).current,c=(0,o.useCallback)(((e,n)=>{const{items:o}=i;if(e)if(n)o.push(e);else{const n=o.indexOf(e);n>-1&&(o.splice(n,1),e.contains(document.activeElement)&&(t.current.focus(),r()))}else i.items=[];i.hoverIndex=-1,i.sorted=!1}),[i,t]);return{hoverItem:n,dispatch:(0,o.useCallback)(((t,n,o)=>{const{items:c,hoverIndex:l}=i,u=()=>{if(i.sorted)return;const t=e.current.querySelectorAll(".szh-menu__item");c.sort(((e,n)=>(0,a.G1)(t,e)-(0,a.G1)(t,n))),i.sorted=!0};let f,d=-1;switch(t){case s.GY.RESET:break;case s.GY.SET:f=n;break;case s.GY.UNSET:f=e=>e===n?void 0:e;break;case s.GY.FIRST:u(),d=0,f=c[d];break;case s.GY.LAST:u(),d=c.length-1,f=c[d];break;case s.GY.SET_INDEX:u(),d=o,f=c[d];break;case s.GY.INCREASE:u(),d=l,d<0&&(d=c.indexOf(n)),d++,d>=c.length&&(d=0),f=c[d];break;case s.GY.DECREASE:u(),d=l,d<0&&(d=c.indexOf(n)),d--,d<0&&(d=c.length-1),f=c[d]}f||(d=-1),r(f),i.hoverIndex=d}),[e,i]),updateItems:c}})(se,le),ye=(0,a.KJ)(N),ge=(0,a.kf)(J,"open"),ve=(0,a.kf)(J,"close"),we=ne.current,Re=(0,o.useCallback)((e=>{var t;const n=g?null==(t=g.current)?void 0:t.getBoundingClientRect():y?{left:y.x,right:y.x,top:y.y,bottom:y.y,width:0,height:0}:null;if(!n)return void 0;we.menu||(we.menu=(Q?Q.current:(0,a.xd)(ee.current))||window);const o=((e,t,n,o)=>{const r=t.current.getBoundingClientRect(),i=e.current.getBoundingClientRect(),c=n===window?{left:0,top:0,right:document.documentElement.clientWidth,bottom:window.innerHeight}:n.getBoundingClientRect(),s=(0,a.F6)(o),l=e=>e+i.left-c.left-s.left,u=e=>e+i.left+r.width-c.right+s.right,f=e=>e+i.top-c.top-s.top,d=e=>e+i.top+r.height-c.bottom+s.bottom;return{menuRect:r,containerRect:i,getLeftOverflow:l,getRightOverflow:u,getTopOverflow:f,getBottomOverflow:d,confineHorizontally:e=>{let t=l(e);if(t<0)e-=t;else{const n=u(e);n>0&&(t=l(e-=n),t<0&&(e-=t))}return e},confineVertically:e=>{let t=f(e);if(t<0)e-=t;else{const n=d(e);n>0&&(t=f(e-=n),t<0&&(e-=t))}return e}}})(v,se,we.menu,Z);let{arrowX:r,arrowY:i,x:c,y:s,computedDirection:l}=(({arrow:e,align:t,direction:n,gap:o,shift:r,position:i,anchorRect:a,arrowRef:c,positionHelpers:s})=>{const{menuRect:l,containerRect:u}=s,p="left"===n||"right"===n;let m=p?o:r,h=p?r:o;if(e){const e=c.current;p?m+=e.offsetWidth:h+=e.offsetHeight}const b=a.left-u.left-l.width-m,y=a.right-u.left+m,g=a.top-u.top-l.height-h,v=a.bottom-u.top+h;let w,R;"end"===t?(w=a.right-u.left-l.width,R=a.bottom-u.top-l.height):"center"===t?(w=a.left-u.left-(l.width-a.width)/2,R=a.top-u.top-(l.height-a.height)/2):(w=a.left-u.left,R=a.top-u.top),w+=m,R+=h;const E={...s,anchorRect:a,placeLeftX:b,placeRightX:y,placeLeftorRightY:R,placeTopY:g,placeBottomY:v,placeToporBottomX:w,arrowRef:c,arrow:e,direction:n,position:i};switch(n){case"left":case"right":return f(E);default:return d(E)}})({arrow:h,align:C,direction:O,gap:I,shift:M,position:S,anchorRect:n,arrowRef:ue,positionHelpers:o});const{menuRect:u}=o;let p=u.height;if(!e&&"visible"!==k){const{getTopOverflow:e,getBottomOverflow:t}=o;let n,r;const i=de.current.height,c=t(s);if(c>0||(0,a.xX)(c,0)&&(0,a.xX)(p,i))n=p-c,r=c;else{const t=e(s);(t<0||(0,a.xX)(t,0)&&(0,a.xX)(p,i))&&(n=p+t,r=0-t,n>=0&&(s-=t))}n>=0?(p=n,H({height:n,overflowAmt:r})):H()}h&&_({x:r,y:i}),G({x:c,y:s}),K(l),de.current={width:u.width,height:p}}),[h,C,Z,O,I,M,S,k,y,g,v,Q,ee,we]);(0,p.N)((()=>{ye&&(Re(),fe.current&&V()),fe.current=ye,pe.current=Re}),[ye,Re,ce]),(0,p.N)((()=>{z&&!T&&(se.current.scrollTop=0)}),[z,T]),(0,p.N)((()=>be),[be]),(0,o.useEffect)((()=>{let{menu:e}=we;if(!ye||!e)return;if(e=e.addEventListener?e:window,!we.anchors){we.anchors=[];let t=(0,a.xd)(te&&te.current);for(;t&&t!==e;)we.anchors.push(t),t=(0,a.xd)(t)}let t=re;if(we.anchors.length&&"initial"===t&&(t="auto"),"initial"===t)return;const n=()=>{"auto"===t?(0,a.iS)((()=>Re(!0))):(0,a.UF)(U,{reason:s.fi.SCROLL})},o=we.anchors.concat("initial"!==re?e:[]);return o.forEach((e=>e.addEventListener("scroll",n))),()=>o.forEach((e=>e.removeEventListener("scroll",n)))}),[te,we,ye,U,re,Re]);const Ee=!!z&&z.overflowAmt>0;(0,o.useEffect)((()=>{if(Ee||!ye||!x)return;const e=()=>(0,a.iS)(Re),t=x.current;return t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)}),[ye,Ee,x,Re]),(0,o.useEffect)((()=>{if("function"!==typeof ResizeObserver||"initial"===oe)return;const e=new ResizeObserver((([e])=>{const{borderBoxSize:t,target:n}=e;let o,i;if(t){const{inlineSize:e,blockSize:n}=t[0]||t;o=e,i=n}else{const e=n.getBoundingClientRect();o=e.width,i=e.height}0!==o&&0!==i&&((0,a.xX)(o,de.current.width,1)&&(0,a.xX)(i,de.current.height,1)||(0,r.flushSync)((()=>{pe.current(),V()})))})),t=se.current;return e.observe(t,{box:"border-box"}),()=>e.unobserve(t)}),[oe]),(0,o.useEffect)((()=>{if(!ye)return he(s.GY.RESET),void(ve||H());const{position:e,alwaysUpdate:t}=L||{},n=()=>{e===s.Pl.FIRST?he(s.GY.FIRST):e===s.Pl.LAST?he(s.GY.LAST):e>=-1&&he(s.GY.SET_INDEX,void 0,e)};if(t)n();else if(P){const e=setTimeout((()=>{const e=se.current;e&&!e.contains(document.activeElement)&&(le.current.focus(),n())}),ge?170:100);return()=>clearTimeout(e)}}),[ye,ge,ve,P,L,he]);const xe=(0,o.useMemo)((()=>({isParentOpen:ye,submenuCtx:W,dispatch:he,updateItems:be})),[ye,W,he,be]);let Ce,Oe;z&&(T?Oe=z.overflowAmt:Ce=z.height);const Se=(0,o.useMemo)((()=>({reposSubmenu:q,submenuCtx:W,overflow:k,overflowAmt:Oe,parentMenuRef:se,parentDir:$})),[q,W,k,Oe,$]),ke=Ce>=0?{maxHeight:Ce,overflow:k}:void 0,Te=(0,o.useMemo)((()=>({state:N,dir:$})),[N,$]),De=(0,o.useMemo)((()=>({dir:$})),[$]),Pe=(0,c.K)({block:s.qD,element:s.lO,modifiers:De,className:b.className}),Ne=(0,i.jsxs)("ul",{role:"menu","aria-label":e,...(0,a.Wf)(A),...(0,a.v6)({onPointerEnter:null==ae?void 0:ae.off,onPointerMove:e=>{e.stopPropagation(),W.on(ie,(()=>{he(s.GY.RESET),le.current.focus()}))},onPointerLeave:e=>{e.target===e.currentTarget&&W.off()},onKeyDown:e=>{switch(e.key){case s.D$.HOME:he(s.GY.FIRST);break;case s.D$.END:he(s.GY.LAST);break;case s.D$.UP:he(s.GY.DECREASE,me);break;case s.D$.DOWN:he(s.GY.INCREASE,me);break;case s.D$.SPACE:return void(e.target&&-1!==e.target.className.indexOf(s.qD)&&e.preventDefault());default:return}e.preventDefault(),e.stopPropagation()},onAnimationEnd:()=>{"closing"===N&&H(),(0,a.UF)(j)}},B),ref:(0,m.U)(E,se),className:(0,c.K)({block:s.qD,modifiers:Te,className:t}),style:{...n,...ke,margin:0,display:"closed"===N?"none":void 0,position:s.DY,left:F.x,top:F.y},children:[(0,i.jsx)("li",{tabIndex:-1,style:{position:s.DY,left:0,top:0,display:"block",outline:"none"},ref:le,...s.ud,...R}),h&&(0,i.jsx)("li",{...s.ud,...b,className:Pe,style:{display:"block",position:s.DY,left:X.x,top:X.y,...b.style},ref:ue}),(0,i.jsx)(s.VU.Provider,{value:Se,children:(0,i.jsx)(s.st.Provider,{value:xe,children:(0,i.jsx)(s.zl.Provider,{value:me,children:(0,a.UF)(Y,Te)})})})]});return w?(0,i.jsx)(l,{...w,isOpen:ye,children:Ne}):Ne},b=(0,o.forwardRef)((function({"aria-label":e,className:t,containerProps:n,initialMounted:c,unmountOnClose:l,transition:u,transitionTimeout:f,boundingBoxRef:d,boundingBoxPadding:p,reposition:m="auto",submenuOpenDelay:b=300,submenuCloseDelay:y=150,viewScroll:g="initial",portal:v,theming:w,onItemClick:R,...E},x){const C=(0,o.useRef)(null),O=(0,o.useRef)({}),{anchorRef:S,state:k,onClose:T}=E,D=(0,o.useMemo)((()=>({initialMounted:c,unmountOnClose:l,transition:u,transitionTimeout:f,boundingBoxRef:d,boundingBoxPadding:p,rootMenuRef:C,rootAnchorRef:S,scrollNodesRef:O,reposition:m,viewScroll:g,submenuOpenDelay:b,submenuCloseDelay:y})),[c,l,u,f,S,d,p,m,g,b,y]),P=(0,o.useMemo)((()=>({handleClick(e,t){e.stopPropagation||(0,a.UF)(R,e);let n=e.keepOpen;void 0===n&&(n=t&&e.key===s.D$.SPACE),n||(0,a.UF)(T,{value:e.value,key:e.key,reason:s.fi.CLICK})},handleClose(e){(0,a.UF)(T,{key:e,reason:s.fi.CLICK})}})),[R,T]);if(!k)return null;const N=(0,i.jsx)(s.lj.Provider,{value:D,children:(0,i.jsx)(s.pI.Provider,{value:P,children:(0,i.jsx)(h,{...E,ariaLabel:e||"Menu",externalRef:x,containerRef:C,containerProps:{className:t,containerRef:C,containerProps:n,theming:w,transition:u,onClose:T}})})});return!0===v&&"undefined"!==typeof document?(0,r.createPortal)(N,document.body):v?v.target?(0,r.createPortal)(N,v.target):v.stablePosition?null:N:N}))},85620:(e,t,n)=>{"use strict";n.d(t,{D:()=>d});var o=n(65043),r=n(70579),i=n(72465);var a=n(5808);const c=(e,t,n,r)=>{const{submenuCloseDelay:c}=(0,o.useContext)(a.lj),{isParentOpen:s,submenuCtx:l,dispatch:u,updateItems:f}=(0,o.useContext)(a.st),d=()=>{!n&&!r&&u(a.GY.SET,e.current)},p=()=>{!r&&u(a.GY.UNSET,e.current)};return((e,t,n)=>{(0,i.N)((()=>{if(e)return;const o=t.current;return n(o,!0),()=>{n(o)}}),[e,t,n])})(r,e,f),(0,o.useEffect)((()=>{n&&s&&t.current&&t.current.focus()}),[t,n,s]),{setHover:d,onBlur:e=>{n&&!e.currentTarget.contains(e.relatedTarget)&&p()},onPointerMove:e=>{r||(e.stopPropagation(),l.on(c,d,d))},onPointerLeave:(e,t)=>{l.off(),!t&&p()}}};var s=n(66251),l=n(75495);const u=(e,t)=>{const n=(0,o.memo)(t),i=(0,o.forwardRef)(((e,t)=>{const i=(0,o.useRef)(null);return(0,r.jsx)(n,{...e,itemRef:i,externalRef:t,isHovering:(0,o.useContext)(a.zl)===i.current})}));return i.displayName=`WithHovering(${e})`,i};var f=n(60996);const d=u("MenuItem",(function({className:e,value:t,href:n,type:i,checked:u,disabled:d,children:p,onClick:m,isHovering:h,itemRef:b,externalRef:y,...g}){const v=!!d,{setHover:w,...R}=c(b,b,h,v),E=(0,o.useContext)(a.pI),x=(0,o.useContext)(a._5),C="radio"===i,O="checkbox"===i,S=!!n&&!v&&!C&&!O,k=C?x.value===t:!!O&&!!u,T=e=>{if(v)return e.stopPropagation(),void e.preventDefault();const n={value:t,syntheticEvent:e};void 0!==e.key&&(n.key=e.key),O&&(n.checked=!k),C&&(n.name=x.name),(0,f.UF)(m,n),C&&(0,f.UF)(x.onRadioChange,n),E.handleClick(n,O||C)},D=(0,o.useMemo)((()=>({type:i,disabled:v,hover:h,checked:k,anchor:S})),[i,v,h,k,S]),P=(0,f.v6)({...R,onPointerDown:w,onKeyDown:e=>{if(h)switch(e.key){case a.D$.ENTER:e.preventDefault();case a.D$.SPACE:S?b.current.click():T(e)}},onClick:T},g),N={role:C?"menuitemradio":O?"menuitemcheckbox":a.Nq,"aria-checked":C||O?k:void 0,...(0,f.Wf)(v,h),...P,ref:(0,s.U)(y,b),className:(0,l.K)({block:a.qD,element:a.hV,modifiers:D,className:e}),children:(0,o.useMemo)((()=>(0,f.UF)(p,D)),[p,D])};return S?(0,r.jsx)("li",{role:a.RB,children:(0,r.jsx)("a",{href:n,...N})}):(0,r.jsx)("li",{...N})}))},75495:(e,t,n)=>{"use strict";n.d(t,{K:()=>r});var o=n(65043);const r=({block:e,element:t,modifiers:n,className:r})=>(0,o.useMemo)((()=>{const o=t?`${e}__${t}`:e;let i=o;n&&Object.keys(n).forEach((e=>{const t=n[e];t&&(i+=` ${o}--${!0===t?e:`${e}-${t}`}`)}));let a="function"===typeof r?r(n):r;return"string"===typeof a&&(a=a.trim(),a&&(i+=` ${a}`)),i}),[e,t,n,r])},66251:(e,t,n)=>{"use strict";n.d(t,{U:()=>i});var o=n(65043);function r(e,t){"function"===typeof e?e(t):e.current=t}const i=(e,t)=>(0,o.useMemo)((()=>e?t?n=>{r(e,n),r(t,n)}:e:t),[e,t])},72465:(e,t,n)=>{"use strict";n.d(t,{N:()=>r});var o=n(65043);const r="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement?o.useLayoutEffect:o.useEffect},51128:(e,t,n)=>{"use strict";n.d(t,{E:()=>f});var o=n(65043);const r=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],i=e=>({_s:e,status:r[e],isEnter:e<3,isMounted:6!==e,isResolved:2===e||e>4}),a=e=>e?6:5,c=(e,t,n,o,r)=>{clearTimeout(o.current);const a=i(e);t(a),n.current=a,r&&r({current:a})},s=({enter:e=!0,exit:t=!0,preEnter:n,preExit:r,timeout:s,initialEntered:l,mountOnEnter:u,unmountOnExit:f,onStateChange:d}={})=>{const[p,m]=(0,o.useState)((()=>i(l?2:a(u)))),h=(0,o.useRef)(p),b=(0,o.useRef)(),[y,g]=(e=>"object"===typeof e?[e.enter,e.exit]:[e,e])(s),v=(0,o.useCallback)((()=>{const e=((e,t)=>{switch(e){case 1:case 0:return 2;case 4:case 3:return a(t)}})(h.current._s,f);e&&c(e,m,h,b,d)}),[d,f]),w=(0,o.useCallback)((o=>{const i=e=>{switch(c(e,m,h,b,d),e){case 1:y>=0&&(b.current=setTimeout(v,y));break;case 4:g>=0&&(b.current=setTimeout(v,g));break;case 0:case 3:b.current=((e,t)=>setTimeout((()=>{isNaN(document.body.offsetTop)||e(t+1)}),0))(i,e)}},s=h.current.isEnter;"boolean"!==typeof o&&(o=!s),o?!s&&i(e?n?0:1:2):s&&i(t?r?3:4:a(f))}),[v,d,e,t,n,r,y,g,f]);return(0,o.useEffect)((()=>()=>clearTimeout(b.current)),[]),[p,w,v]};var l=n(60996),u=n(5808);const f=({initialOpen:e,initialMounted:t,unmountOnClose:n,transition:o,transitionTimeout:r=500}={})=>{const[{status:i},a,c]=s({initialEntered:e,mountOnEnter:!t,unmountOnExit:n,timeout:r,enter:(0,l.kf)(o,"open"),exit:(0,l.kf)(o,"close")});return[{state:u.rQ[i],endTransition:c},a]}},5808:(e,t,n)=>{"use strict";n.d(t,{D$:()=>m,DY:()=>v,GY:()=>h,Nq:()=>R,Pl:()=>y,RB:()=>w,TY:()=>r,VU:()=>u,_5:()=>d,fi:()=>b,hV:()=>c,lO:()=>a,lj:()=>p,pI:()=>f,qD:()=>i,rQ:()=>g,st:()=>l,ud:()=>E,zl:()=>s});var o=n(65043);const r="szh-menu-container",i="szh-menu",a="arrow",c="item",s=(0,o.createContext)(),l=(0,o.createContext)({}),u=(0,o.createContext)({}),f=(0,o.createContext)({}),d=(0,o.createContext)({}),p=(0,o.createContext)({}),m=Object.freeze({ENTER:"Enter",ESC:"Escape",SPACE:" ",HOME:"Home",END:"End",LEFT:"ArrowLeft",RIGHT:"ArrowRight",UP:"ArrowUp",DOWN:"ArrowDown"}),h=Object.freeze({RESET:0,SET:1,UNSET:2,INCREASE:3,DECREASE:4,FIRST:5,LAST:6,SET_INDEX:7}),b=Object.freeze({CLICK:"click",CANCEL:"cancel",BLUR:"blur",SCROLL:"scroll"}),y=Object.freeze({FIRST:"first",LAST:"last"}),g=Object.freeze({entering:"opening",entered:"open",exiting:"closing",exited:"closed"}),v="absolute",w="presentation",R="menuitem",E={"aria-hidden":!0,role:R}},60996:(e,t,n)=>{"use strict";n.d(t,{F6:()=>u,G1:()=>p,KJ:()=>r,UF:()=>s,Wf:()=>d,iS:()=>i,kf:()=>c,v6:()=>l,xX:()=>a,xd:()=>f});var o=n(97950);const r=e=>!!e&&"o"===e[0],i=o.unstable_batchedUpdates||(e=>e()),a=(Object.values,(e,t,n=1e-4)=>Math.abs(e-t)<n),c=(e,t)=>!0===e||!(!e||!e[t]),s=(e,t)=>"function"===typeof e?e(t):e,l=(e,t)=>(t&&Object.keys(t).forEach((n=>{const o=e[n],r=t[n];e[n]="function"===typeof r&&o?(...e)=>{r(...e),o(...e)}:r})),e),u=e=>{if("string"!==typeof e)return{top:0,right:0,bottom:0,left:0};const t=e.trim().split(/\s+/,4).map(parseFloat),n=isNaN(t[0])?0:t[0],o=isNaN(t[1])?n:t[1];return{top:n,right:o,bottom:isNaN(t[2])?n:t[2],left:isNaN(t[3])?o:t[3]}},f=e=>{for(;e;){if(!(e=e.parentNode)||e===document.body||!e.parentNode)return;const{overflow:t,overflowX:n,overflowY:o}=getComputedStyle(e);if(/auto|scroll|overlay|hidden/.test(t+o+n))return e}};function d(e,t){return{"aria-disabled":e||void 0,tabIndex:t?0:-1}}function p(e,t){for(let n=0;n<e.length;n++)if(e[n]===t)return n;return-1}},75270:(e,t,n)=>{"use strict";var o=n(40139),r={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,a,c,s,l,u=!1;t||(t={}),n=t.debug||!1;try{if(a=o(),c=document.createRange(),s=document.getSelection(),(l=document.createElement("span")).textContent=e,l.ariaHidden="true",l.style.all="unset",l.style.position="fixed",l.style.top=0,l.style.clip="rect(0, 0, 0, 0)",l.style.whiteSpace="pre",l.style.webkitUserSelect="text",l.style.MozUserSelect="text",l.style.msUserSelect="text",l.style.userSelect="text",l.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=r[t.format]||r.default;window.clipboardData.setData(i,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(l),c.selectNodeContents(l),s.addRange(c),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(f){n&&console.error("unable to copy using execCommand: ",f),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(f){n&&console.error("unable to copy using clipboardData: ",f),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(c):s.removeAllRanges()),l&&document.body.removeChild(l),a()}return u}},2099:(e,t,n)=>{"use strict";function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=c(n(65043)),i=c(n(75270)),a=["text","onCopy","options","children"];function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e,t){return d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},d(e,t)}function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=h(e);if(t){var i=h(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return m(e)}(this,n)}}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function h(e){return h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},h(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(s,e);var t,n,o,c=p(s);function s(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,s);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++)n[o]=arguments[o];return b(m(e=c.call.apply(c,[this].concat(n))),"onClick",(function(t){var n=e.props,o=n.text,a=n.onCopy,c=n.children,s=n.options,l=r.default.Children.only(c),u=(0,i.default)(o,s);a&&a(o,u),l&&l.props&&"function"===typeof l.props.onClick&&l.props.onClick(t)})),e}return t=s,(n=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=u(e,a),o=r.default.Children.only(t);return r.default.cloneElement(o,l(l({},n),{},{onClick:this.onClick}))}}])&&f(t.prototype,n),o&&f(t,o),Object.defineProperty(t,"prototype",{writable:!1}),s}(r.default.PureComponent);t.CopyToClipboard=y,b(y,"defaultProps",{onCopy:void 0,options:void 0})},61476:(e,t,n)=>{"use strict";var o=n(2099).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},40139:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],o=0;o<e.rangeCount;o++)n.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=87539.0f84b29f.chunk.js.map