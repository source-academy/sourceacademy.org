(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([["40438"],{20640:function(e,t,r){"use strict";var n=r(11742),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,i,a,l,c,u,s,f,d=!1;t||(t={}),a=t.debug||!1;try{if(c=n(),u=document.createRange(),s=document.getSelection(),(f=document.createElement("span")).textContent=e,f.ariaHidden="true",f.style.all="unset",f.style.position="fixed",f.style.top=0,f.style.clip="rect(0, 0, 0, 0)",f.style.whiteSpace="pre",f.style.webkitUserSelect="text",f.style.MozUserSelect="text",f.style.msUserSelect="text",f.style.userSelect="text",f.addEventListener("copy",function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){a&&console.warn("unable to use e.clipboardData"),a&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var n=o[t.format]||o.default;window.clipboardData.setData(n,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))}),document.body.appendChild(f),u.selectNodeContents(f),s.addRange(u),!document.execCommand("copy"))throw Error("copy command was unsuccessful");d=!0}catch(n){a&&console.error("unable to copy using execCommand: ",n),a&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),d=!0}catch(n){a&&console.error("unable to copy using clipboardData: ",n),a&&console.error("falling back to prompt"),r="message"in t?t.message:"Copy to clipboard: #{key}, Enter",i=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C",l=r.replace(/#{\s*key\s*}/g,i),window.prompt(l,e)}}finally{s&&("function"==typeof s.removeRange?s.removeRange(u):s.removeAllRanges()),f&&document.body.removeChild(f),c()}return d}},74300:function(e,t,r){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var o=l(r(67294)),i=l(r(20640)),a=["text","onCopy","options","children"];function l(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach(function(t){p(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var m=function(e){if("function"!=typeof e&&null!==e)throw TypeError("Super expression must either be null or a function");c.prototype=Object.create(e&&e.prototype,{constructor:{value:c,writable:!0,configurable:!0}}),Object.defineProperty(c,"prototype",{writable:!1}),e&&s(c,e);var t,r,l=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,r=d(c);return e=t?Reflect.construct(r,arguments,d(this).constructor):r.apply(this,arguments),function(e,t){if(t&&("object"===n(t)||"function"==typeof t))return t;if(void 0!==t)throw TypeError("Derived constructors may only return object or undefined");return f(e)}(this,e)});function c(){var e;if(!(this instanceof c))throw TypeError("Cannot call a class as a function");for(var t=arguments.length,r=Array(t),n=0;n<t;n++)r[n]=arguments[n];return p(f(e=l.call.apply(l,[this].concat(r))),"onClick",function(t){var r=e.props,n=r.text,a=r.onCopy,l=r.children,c=r.options,u=o.default.Children.only(l),s=(0,i.default)(n,c);a&&a(n,s),u&&u.props&&"function"==typeof u.props.onClick&&u.props.onClick(t)}),e}return r=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=function(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(e,a),n=o.default.Children.only(t);return o.default.cloneElement(n,u(u({},r),{},{onClick:this.onClick}))}}],function(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}(c.prototype,r),Object.defineProperty(c,"prototype",{writable:!1}),c}(o.default.PureComponent);t.CopyToClipboard=m,p(m,"defaultProps",{onCopy:void 0,options:void 0})},74855:function(e,t,r){"use strict";var n=r(74300).CopyToClipboard;n.CopyToClipboard=n,e.exports=n},11742:function(e){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],n=0;n<e.rangeCount;n++)r.push(e.getRangeAt(n));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach(function(t){e.addRange(t)}),t&&t.focus()}}},33232:function(e,t,r){"use strict";r.d(t,{A:()=>i});var n=r(67294),o=r(5860);function i(e,t=["INPUT","TEXTAREA","SELECT"],r=!1){(0,n.useEffect)(()=>{let n=n=>{e.forEach(([e,i,a={preventDefault:!0,usePhysicalKeys:!1}])=>{(0,o.k)(e,a.usePhysicalKeys)(n)&&function(e,t,r=!1){return!(e.target instanceof HTMLElement)||(r?!t.includes(e.target.tagName):!e.target.isContentEditable&&!t.includes(e.target.tagName))}(n,t,r)&&(a.preventDefault&&n.preventDefault(),i(n))})};return document.documentElement.addEventListener("keydown",n),()=>document.documentElement.removeEventListener("keydown",n)},[e])}},37648:function(e,t,r){"use strict";r.d(t,{B:()=>h});var n=r(67294),o=r(73935),i=r(85893),a=r(14117),l=r(63918),c=r(63585);let u=({className:e,containerRef:t,containerProps:r,children:o,isOpen:u,theming:s,transition:f,onClose:d})=>{let p=(0,l.us)(f,"item");return(0,i.jsx)("div",{...(0,l.dG)({onKeyDown:({key:e})=>{e===c.R8.ESC&&(0,l.Dx)(d,{key:e,reason:c.GB.CANCEL})},onBlur:e=>{u&&!e.currentTarget.contains(e.relatedTarget)&&(0,l.Dx)(d,{reason:c.GB.BLUR})}},r),className:(0,a.l)({block:c.Kk,modifiers:(0,n.useMemo)(()=>({theme:s,itemTransition:p}),[s,p]),className:e}),style:{position:"absolute",...r?.style},ref:t,children:o})},s=()=>{let e,t=0;return{toggle:e=>{e?t++:t--,t=Math.max(t,0)},on:(r,n,o)=>{t?e||(e=setTimeout(()=>{e=0,n()},r)):o?.()},off:()=>{e&&(clearTimeout(e),e=0)}}},f=(e,t)=>Math.round(e)===t?e:t;var d=r(16812),p=r(99087);let m=({ariaLabel:e,menuClassName:t,menuStyle:r,arrow:m,arrowProps:h={},anchorPoint:b,anchorRef:y,containerRef:g,containerProps:v,externalRef:E,parentScrollingRef:C,align:x="start",direction:w="bottom",position:R="auto",overflow:S="visible",setDownOverflow:k,repositionFlag:O,captureFocus:T=!0,state:D,endTransition:P,isDisabled:j,menuItemFocus:A,gap:N=0,shift:M=0,children:U,onClose:L,focusProps:$,..._})=>{let I,B,[H,G]=(0,n.useState)({x:-9999,y:-9999}),[K,z]=(0,n.useState)({}),[X,J]=(0,n.useState)(),[W,F]=(0,n.useState)(w),[Y]=(0,n.useState)(s),[Z,Q]=(0,n.useReducer)(e=>e+1,1),{transition:q,boundingBoxRef:V,boundingBoxPadding:ee,rootMenuRef:et,rootAnchorRef:er,scrollNodesRef:en,reposition:eo,viewScroll:ei,submenuCloseDelay:ea}=(0,n.useContext)(c.J6),{submenuCtx:el,reposSubmenu:ec=O}=(0,n.useContext)(c.b7),eu=(0,n.useRef)(),es=(0,n.useRef)(),ef=(0,n.useRef)(!1),{hoverItem:ed,dispatch:ep,updateItems:em}=(e=>{let[t,r]=(0,n.useState)(),o=(0,n.useRef)({items:[],hoverIndex:-1,sorted:!1}).current,i=(0,n.useCallback)((t,n)=>{let{items:i}=o;if(t)if(n)i.push(t);else{let n=i.indexOf(t);n>-1&&(i.splice(n,1),t.contains(document.activeElement)&&(e.current.focus(c.Ym),r()))}else o.items=[];o.hoverIndex=-1,o.sorted=!1},[o,e]);return{hoverItem:t,dispatch:(0,n.useCallback)((t,n,i)=>{let{items:a,hoverIndex:u}=o,s=()=>{if(o.sorted)return;let t=e.current.querySelectorAll(".szh-menu__item");a.sort((e,r)=>(0,l.O)(t,e)-(0,l.O)(t,r)),o.sorted=!0},f=-1,d;switch(t){case c.$U.RESET:break;case c.$U.SET:d=n;break;case c.$U.UNSET:d=e=>e===n?void 0:e;break;case c.$U.FIRST:s(),d=a[f=0];break;case c.$U.LAST:s(),f=a.length-1,d=a[f];break;case c.$U.SET_INDEX:s(),d=a[f=i];break;case c.$U.INCREASE:s(),(f=u)<0&&(f=a.indexOf(n)),++f>=a.length&&(f=0),d=a[f];break;case c.$U.DECREASE:s(),(f=u)<0&&(f=a.indexOf(n)),--f<0&&(f=a.length-1),d=a[f]}d||(f=-1),r(d),o.hoverIndex=f},[e,o]),updateItems:i}})(eu),eh=(0,l.tr)(D),eb=(0,l.us)(q,"open"),ey=(0,l.us)(q,"close"),eg=en.current,ev=(0,n.useCallback)(e=>{let t=eu.current,r=g.current;if(!t||!r)return;let n=y?y.current?.getBoundingClientRect():b?{left:b.x,right:b.x,top:b.y,bottom:b.y,width:0,height:0}:null;if(!n)return;eg.menu||(eg.menu=(V?V.current:(0,l.GZ)(et.current))||window);let o=((e,t,r,n)=>{let o=(e=>{let t=e.getBoundingClientRect();return t.width=f(t.width,e.offsetWidth),t.height=f(t.height,e.offsetHeight),t})(t),i=e.getBoundingClientRect(),a=r===window?{left:0,top:0,right:document.documentElement.clientWidth,bottom:window.innerHeight}:r.getBoundingClientRect(),c=(0,l.dj)(n),u=e=>e+i.left-a.left-c.left,s=e=>e+i.left+o.width-a.right+c.right,d=e=>e+i.top-a.top-c.top,p=e=>e+i.top+o.height-a.bottom+c.bottom;return{menuRect:o,containerRect:i,getLeftOverflow:u,getRightOverflow:s,getTopOverflow:d,getBottomOverflow:p,confineHorizontally:e=>{let t=u(e);if(t<0)e-=t;else{let r=s(e);r>0&&(e-=r,(t=u(e))<0&&(e-=t))}return e},confineVertically:e=>{let t=d(e);if(t<0)e-=t;else{let r=p(e);r>0&&(e-=r,(t=d(e))<0&&(e-=t))}return e}}})(r,t,eg.menu,ee),{arrowX:i,arrowY:a,x:c,y:u,computedDirection:s}=(({arrow:e,align:t,direction:r,gap:n,shift:o,position:i,anchorRect:a,arrowRef:l,positionHelpers:c})=>{let u,s,{menuRect:f,containerRect:d}=c,p="left"===r||"right"===r,m=p?n:o,h=p?o:n;if(e){let e=l.current;p?m+=e.offsetWidth:h+=e.offsetHeight}let b=a.left-d.left-f.width-m,y=a.right-d.left+m,g=a.top-d.top-f.height-h,v=a.bottom-d.top+h;"end"===t?(u=a.right-d.left-f.width,s=a.bottom-d.top-f.height):"center"===t?(u=a.left-d.left-(f.width-a.width)/2,s=a.top-d.top-(f.height-a.height)/2):(u=a.left-d.left,s=a.top-d.top),u+=m,s+=h;let E={...c,anchorRect:a,placeLeftX:b,placeRightX:y,placeLeftorRightY:s,placeTopY:g,placeBottomY:v,placeToporBottomX:u,arrowRef:l,arrow:e,direction:r,position:i};switch(r){case"left":case"right":return(({anchorRect:e,containerRect:t,menuRect:r,placeLeftorRightY:n,placeLeftX:o,placeRightX:i,getLeftOverflow:a,getRightOverflow:l,confineHorizontally:c,confineVertically:u,arrowRef:s,arrow:f,direction:d,position:p})=>{let m,h,b,y=d,g=n;return"initial"!==p&&(g=u(g),"anchor"===p&&(g=Math.max(g=Math.min(g,e.bottom-t.top),e.top-t.top-r.height))),"left"===y?(m=o,"initial"!==p&&(h=a(m))<0&&((b=l(i))<=0||-h>b)&&(m=i,y="right")):(m=i,"initial"!==p&&(b=l(m))>0&&((h=a(o))>=0||-h<b)&&(m=o,y="left")),"auto"===p&&(m=c(m)),{arrowY:f?(({arrowRef:e,menuY:t,anchorRect:r,containerRect:n,menuRect:o})=>{let i=r.top-n.top-t+r.height/2,a=1.25*e.current.offsetHeight;return Math.min(i=Math.max(a,i),o.height-a)})({menuY:g,arrowRef:s,anchorRect:e,containerRect:t,menuRect:r}):void 0,x:m,y:g,computedDirection:y}})(E);default:return(({anchorRect:e,containerRect:t,menuRect:r,placeToporBottomX:n,placeTopY:o,placeBottomY:i,getTopOverflow:a,getBottomOverflow:l,confineHorizontally:c,confineVertically:u,arrowRef:s,arrow:f,direction:d,position:p})=>{let m,h,b,y="top"===d?"top":"bottom",g=n;return"initial"!==p&&(g=c(g),"anchor"===p&&(g=Math.max(g=Math.min(g,e.right-t.left),e.left-t.left-r.width))),"top"===y?(m=o,"initial"!==p&&(h=a(m))<0&&((b=l(i))<=0||-h>b)&&(m=i,y="bottom")):(m=i,"initial"!==p&&(b=l(m))>0&&((h=a(o))>=0||-h<b)&&(m=o,y="top")),"auto"===p&&(m=u(m)),{arrowX:f?(({arrowRef:e,menuX:t,anchorRect:r,containerRect:n,menuRect:o})=>{let i=r.left-n.left-t+r.width/2,a=1.25*e.current.offsetWidth;return Math.min(i=Math.max(a,i),o.width-a)})({menuX:g,arrowRef:s,anchorRect:e,containerRect:t,menuRect:r}):void 0,x:g,y:m,computedDirection:y}})(E)}})({arrow:m,align:x,direction:w,gap:N,shift:M,position:R,anchorRect:n,arrowRef:es,positionHelpers:o}),{menuRect:d}=o,p=d.height;if(!e&&"visible"!==S){let e,t,{getTopOverflow:r,getBottomOverflow:n}=o,i=n(u);if(i>0)e=p-i,t=i;else{let n=r(u);n<0&&(e=p+n,t=0-n,e>=0&&(u-=n))}e>=0&&J({height:e,overflowAmt:t})}m&&z({x:i,y:a}),G({x:c,y:u}),F(s)},[m,x,ee,w,N,M,R,S,b,y,g,V,et,eg]);(0,d.b)(()=>{eh&&(ev(),ef.current&&Q()),ef.current=eh},[eh,ev,ec]),(0,d.b)(()=>{X&&!k&&(eu.current.scrollTop=0)},[X,k]),(0,d.b)(()=>em,[em]),(0,n.useEffect)(()=>{let{menu:e}=eg;if(!eh||!e)return;if(e=e.addEventListener?e:window,!eg.anchors){eg.anchors=[];let t=(0,l.GZ)(er&&er.current);for(;t&&t!==e;)eg.anchors.push(t),t=(0,l.GZ)(t)}let t=ei;if(eg.anchors.length&&"initial"===t&&(t="auto"),"initial"===t)return;let r=()=>{"auto"===t?(0,l.MA)(()=>ev(!0)):(0,l.Dx)(L,{reason:c.GB.SCROLL})},n=eg.anchors.concat("initial"!==ei?e:[]);return n.forEach(e=>e.addEventListener("scroll",r)),()=>n.forEach(e=>e.removeEventListener("scroll",r))},[er,eg,eh,L,ei,ev]);let eE=!!X&&X.overflowAmt>0;(0,n.useEffect)(()=>{if(eE||!eh||!C)return;let e=()=>(0,l.MA)(ev),t=C.current;return t.addEventListener("scroll",e),()=>t.removeEventListener("scroll",e)},[eh,eE,C,ev]),(0,n.useEffect)(()=>{if(!eh||"function"!=typeof ResizeObserver||"initial"===eo)return;let e=[],t=new ResizeObserver(t=>t.forEach(({target:t})=>{0>e.indexOf(t)?e.push(t):(0,o.flushSync)(()=>{ev(),Q()})})),r={box:"border-box"};t.observe(eu.current,r);let n=y?.current;return n&&t.observe(n,r),()=>t.disconnect()},[eh,eo,y,ev]),(0,n.useEffect)(()=>{if(!eh){ep(c.$U.RESET),ey||J();return}let{position:e,alwaysUpdate:t}=A||{},r=()=>{e===c.td.FIRST?ep(c.$U.FIRST):e===c.td.LAST?ep(c.$U.LAST):e>=-1&&ep(c.$U.SET_INDEX,void 0,e)};if(t)r();else if(T){let e=setTimeout(()=>{let e=eu.current;e&&!e.contains(document.activeElement)&&(e.focus(c.Ym),r())},eb?170:100);return()=>clearTimeout(e)}},[eh,eb,ey,T,A,ep]);let eC=(0,n.useMemo)(()=>({isParentOpen:eh,submenuCtx:Y,dispatch:ep,updateItems:em}),[eh,Y,ep,em]);X&&(k?B=X.overflowAmt:I=X.height);let ex=(0,n.useMemo)(()=>({reposSubmenu:Z,submenuCtx:Y,overflow:S,overflowAmt:B,parentMenuRef:eu,parentDir:W}),[Z,Y,S,B,W]),ew=I>=0?{maxHeight:I,overflow:S}:void 0,eR=(0,n.useMemo)(()=>({state:D,align:x,dir:W}),[D,x,W]),eS=(0,n.useMemo)(()=>({dir:W}),[W]),ek=(0,a.l)({block:c.nJ,element:c.fM,modifiers:eS,className:h.className}),eO=(0,i.jsxs)("ul",{role:"menu","aria-label":e,...(0,l.$7)(j),...(0,l.dG)({onPointerEnter:el?.off,onPointerMove:e=>{e.stopPropagation(),Y.on(ea,()=>{ep(c.$U.RESET),eu.current.focus(c.Ym)})},onPointerLeave:e=>{e.target===e.currentTarget&&Y.off()},onKeyDown:e=>{switch(e.key){case c.R8.HOME:ep(c.$U.FIRST);break;case c.R8.END:ep(c.$U.LAST);break;case c.R8.UP:ep(c.$U.DECREASE,ed);break;case c.R8.DOWN:ep(c.$U.INCREASE,ed);break;case c.R8.SPACE:e.target&&-1!==e.target.className.indexOf(c.nJ)&&e.preventDefault();return;default:return}e.preventDefault(),e.stopPropagation()},onAnimationEnd:()=>{"closing"===D&&J(),(0,l.Dx)(P)}},_),ref:(0,p.Q)(E,eu),className:(0,a.l)({block:c.nJ,modifiers:eR,className:t}),style:{...r,...ew,margin:0,display:"closed"===D?"none":void 0,position:c.vK,left:H.x,top:H.y},children:[m&&(0,i.jsx)("li",{"aria-hidden":!0,...h,className:ek,style:{display:"block",position:c.vK,left:K.x,top:K.y,...h.style},ref:es}),(0,i.jsx)(c.b7.Provider,{value:ex,children:(0,i.jsx)(c._X.Provider,{value:eC,children:(0,i.jsx)(c.c9.Provider,{value:ed,children:(0,l.Dx)(U,eR)})})})]});return v?(0,i.jsx)(u,{...v,isOpen:eh,children:eO}):eO},h=(0,n.forwardRef)(function({"aria-label":e,className:t,containerProps:r,initialMounted:a,unmountOnClose:u,transition:s,transitionTimeout:f,boundingBoxRef:d,boundingBoxPadding:p,reposition:h="auto",submenuOpenDelay:b=300,submenuCloseDelay:y=150,viewScroll:g="initial",portal:v,theming:E,onItemClick:C,...x},w){let R=(0,n.useRef)(null),S=(0,n.useRef)({}),{anchorRef:k,state:O,onClose:T}=x,D=(0,n.useMemo)(()=>({initialMounted:a,unmountOnClose:u,transition:s,transitionTimeout:f,boundingBoxRef:d,boundingBoxPadding:p,rootMenuRef:R,rootAnchorRef:k,scrollNodesRef:S,reposition:h,viewScroll:g,submenuOpenDelay:b,submenuCloseDelay:y}),[a,u,s,f,k,d,p,h,g,b,y]),P=(0,n.useMemo)(()=>({handleClick(e,t){e.stopPropagation||(0,l.Dx)(C,e);let r=e.keepOpen;void 0===r&&(r=t&&e.key===c.R8.SPACE),r||(0,l.Dx)(T,{value:e.value,key:e.key,reason:c.GB.CLICK})},handleClose(e){(0,l.Dx)(T,{key:e,reason:c.GB.CLICK})}}),[C,T]);if(!O)return null;let j=(0,i.jsx)(c.J6.Provider,{value:D,children:(0,i.jsx)(c.AH.Provider,{value:P,children:(0,i.jsx)(m,{...x,ariaLabel:e||"Menu",externalRef:w,containerRef:R,containerProps:{className:t,containerRef:R,containerProps:r,theming:E,transition:s,onClose:T}})})});return!0===v&&"undefined"!=typeof document?(0,o.createPortal)(j,document.body):v?v.target?(0,o.createPortal)(j,v.target):v.stablePosition?null:j:j})},14255:function(e,t,r){"use strict";r.d(t,{s:()=>s});var n=r(67294),o=r(85893),i=r(16812),a=r(63585),l=r(14117),c=r(99087),u=r(63918);let s=((e,t)=>{let r=(0,n.memo)(t),i=(0,n.forwardRef)((e,t)=>{let i=(0,n.useRef)(null);return(0,o.jsx)(r,{...e,itemRef:i,externalRef:t,isHovering:(0,n.useContext)(a.c9)===i.current})});return i.displayName=`WithHovering(${e})`,i})("MenuItem",function({className:e,value:t,href:r,type:s,checked:f,disabled:d,children:p,onClick:m,isHovering:h,itemRef:b,externalRef:y,...g}){let v=!!d,{mouseOver:E,setHover:C,...x}=((e,t,r,o)=>{let[l,c,u]=(e=>{let[t,r]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{e||r(!1)},[e]),[t,()=>!t&&r(!0),()=>r(!1)]})(r),{submenuCloseDelay:s}=(0,n.useContext)(a.J6),{isParentOpen:f,submenuCtx:d,dispatch:p,updateItems:m}=(0,n.useContext)(a._X),h=()=>{r||o||p(a.$U.SET,e.current)},b=()=>{o||p(a.$U.UNSET,e.current)};return(0,i.b)(()=>{if(o)return;let t=e.current;return m(t,!0),()=>{m(t)}},[o,e,m]),(0,n.useEffect)(()=>{r&&f&&t.current&&t.current.focus()},[t,r,f]),{mouseOver:l,setHover:h,onBlur:e=>{r&&!e.currentTarget.contains(e.relatedTarget)&&b()},onPointerMove:e=>{o||(e.stopPropagation(),c(),d.on(s,h,h))},onPointerLeave:(e,t)=>{u(),d.off(),t||b()}}})(b,b,h,v),w=(0,n.useContext)(a.AH),R=(0,n.useContext)(a.L1),S="radio"===s,k="checkbox"===s,O=!!r&&!v&&!S&&!k,T=S?R.value===t:!!k&&!!f,D=e=>{if(v){e.stopPropagation(),e.preventDefault();return}let r={value:t,syntheticEvent:e};void 0!==e.key&&(r.key=e.key),k&&(r.checked=!T),S&&(r.name=R.name),(0,u.Dx)(m,r),S&&(0,u.Dx)(R.onRadioChange,r),w.handleClick(r,k||S)},P=(0,n.useMemo)(()=>({type:s,disabled:v,hover:E||h,checked:T,anchor:O}),[s,v,E,h,T,O]),j=(0,u.dG)({...x,onPointerDown:C,onKeyDown:e=>{if(h)switch(e.key){case a.R8.ENTER:e.preventDefault();case a.R8.SPACE:O?b.current.click():D(e)}},onClick:D},g),A={role:S?"menuitemradio":k?"menuitemcheckbox":a.CM,"aria-checked":S||k?T:void 0,...(0,u.$7)(v,h),...j,ref:(0,c.Q)(y,b),className:(0,l.l)({block:a.nJ,element:a.np,modifiers:P,className:e}),children:(0,n.useMemo)(()=>(0,u.Dx)(p,P),[p,P])};return O?(0,o.jsx)("li",{role:a.dW,children:(0,o.jsx)("a",{href:r,...A})}):(0,o.jsx)("li",{...A})})},14117:function(e,t,r){"use strict";r.d(t,{l:()=>o});var n=r(67294);let o=({block:e,element:t,modifiers:r,className:o})=>(0,n.useMemo)(()=>{let n=t?`${e}__${t}`:e,i=n;r&&Object.keys(r).forEach(e=>{let t=r[e];t&&(i+=` ${n}--${!0===t?e:`${e}-${t}`}`)});let a="function"==typeof o?o(r):o;return"string"==typeof a&&(a=a.trim())&&(i+=` ${a}`),i},[e,t,r,o])},99087:function(e,t,r){"use strict";r.d(t,{Q:()=>i});var n=r(67294);function o(e,t){"function"==typeof e?e(t):e.current=t}let i=(e,t)=>(0,n.useMemo)(()=>e?t?r=>{o(e,r),o(t,r)}:e:t,[e,t])},16812:function(e,t,r){"use strict";r.d(t,{b:()=>o});var n=r(67294);let o="undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement?n.useLayoutEffect:n.useEffect},34545:function(e,t,r){"use strict";r.d(t,{w:()=>s});var n=r(67294);let o=["preEnter","entering","entered","preExit","exiting","exited","unmounted"],i=e=>({_s:e,status:o[e],isEnter:e<3,isMounted:6!==e,isResolved:2===e||e>4}),a=e=>e?6:5,l=(e,t,r,n,o)=>{clearTimeout(n.current);let a=i(e);t(a),r.current=a,o&&o({current:a})};var c=r(63918),u=r(63585);let s=({initialOpen:e,initialMounted:t,unmountOnClose:r,transition:o,transitionTimeout:s=500,onMenuChange:f}={})=>{let d=(0,c.us)(o,"open"),p=(0,c.us)(o,"close"),[{status:m},h,b]=(({enter:e=!0,exit:t=!0,preEnter:r,preExit:o,timeout:c,initialEntered:u,mountOnEnter:s,unmountOnExit:f,onStateChange:d}={})=>{let[p,m]=(0,n.useState)(()=>i(u?2:a(s))),h=(0,n.useRef)(p),b=(0,n.useRef)(),[y,g]="object"==typeof c?[c.enter,c.exit]:[c,c],v=(0,n.useCallback)(()=>{let e=((e,t)=>{switch(e){case 1:case 0:return 2;case 4:case 3:return a(t)}})(h.current._s,f);e&&l(e,m,h,b,d)},[d,f]);return[p,(0,n.useCallback)(n=>{let i=e=>{switch(l(e,m,h,b,d),e){case 1:y>=0&&(b.current=setTimeout(v,y));break;case 4:g>=0&&(b.current=setTimeout(v,g));break;case 0:case 3:b.current=setTimeout(()=>{isNaN(document.body.offsetTop)||i(e+1)},0)}},c=h.current.isEnter;"boolean"!=typeof n&&(n=!c),n?c||i(e?+!r:2):c&&i(t?o?3:4:a(f))},[v,d,e,t,r,o,y,g,f]),v]})({initialEntered:e,mountOnEnter:!t,unmountOnExit:r,timeout:s,enter:d,exit:p,onStateChange:(0,n.useCallback)(({current:{isEnter:e,isResolved:t}})=>{!f||e&&d&&t||!e&&p&&t||f({open:e})},[f,d,p])});return[{state:u._f[m],endTransition:b},h]}},63585:function(e,t,r){"use strict";r.d(t,{$U:()=>h,AH:()=>f,CM:()=>C,GB:()=>b,J6:()=>p,Kk:()=>o,L1:()=>d,R8:()=>m,Ym:()=>x,_X:()=>u,_f:()=>g,b7:()=>s,c9:()=>c,dW:()=>E,fM:()=>a,nJ:()=>i,np:()=>l,td:()=>y,vK:()=>v});var n=r(67294);let o="szh-menu-container",i="szh-menu",a="arrow",l="item",c=(0,n.createContext)(),u=(0,n.createContext)({}),s=(0,n.createContext)({}),f=(0,n.createContext)({}),d=(0,n.createContext)({}),p=(0,n.createContext)({}),m=Object.freeze({ENTER:"Enter",ESC:"Escape",SPACE:" ",HOME:"Home",END:"End",LEFT:"ArrowLeft",RIGHT:"ArrowRight",UP:"ArrowUp",DOWN:"ArrowDown"}),h=Object.freeze({RESET:0,SET:1,UNSET:2,INCREASE:3,DECREASE:4,FIRST:5,LAST:6,SET_INDEX:7}),b=Object.freeze({CLICK:"click",CANCEL:"cancel",BLUR:"blur",SCROLL:"scroll"}),y=Object.freeze({FIRST:"first",LAST:"last"}),g=Object.freeze({entering:"opening",entered:"open",exiting:"closing",exited:"closed"}),v="absolute",E="none",C="menuitem",x={preventScroll:!0}},63918:function(e,t,r){"use strict";r.d(t,{$7:()=>f,Dx:()=>l,GZ:()=>s,MA:()=>i,O:()=>d,dG:()=>c,dj:()=>u,tr:()=>o,us:()=>a});var n=r(73935);let o=e=>!!e&&"o"===e[0],i=n.unstable_batchedUpdates,a=(e,t)=>!0===e||!!(e&&e[t]),l=(e,t)=>"function"==typeof e?e(t):e,c=(e,t)=>(t&&Object.keys(t).forEach(r=>{let n=e[r],o=t[r];"function"==typeof o&&n?e[r]=(...e)=>{o(...e),n(...e)}:e[r]=o}),e),u=e=>{if("string"!=typeof e)return{top:0,right:0,bottom:0,left:0};let t=e.trim().split(/\s+/,4).map(parseFloat),r=isNaN(t[0])?0:t[0],n=isNaN(t[1])?r:t[1];return{top:r,right:n,bottom:isNaN(t[2])?r:t[2],left:isNaN(t[3])?n:t[3]}},s=e=>{for(;e;){if(!(e=e.parentNode)||e===document.body||!e.parentNode)return;let{overflow:t,overflowX:r,overflowY:n}=getComputedStyle(e);if(/auto|scroll|overlay|hidden/.test(t+n+r))return e}};function f(e,t){return{"aria-disabled":e||void 0,tabIndex:t?0:-1}}function d(e,t){for(let r=0;r<e.length;r++)if(e[r]===t)return r;return -1}}}]);