(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[76585],{30708:(e,t,r)=>{"use strict";r.r(t),r.d(t,{Component:()=>V,default:()=>H});var o=r(14888),n=r(25078),a=r(99361),l=r(98139),i=r.n(l),c=r(84365),s=r(65043),u=r(22166),d=r(73216),p=r(91669),y=r(51025),h=r(97332),f=r(5449),b=r(5709),g=r(47120),m=r(2352),v=r(94269),E=r(52479),C=r(42448),S=r(39532),D=r(77309),A=r(14630),w=r(96812),T=r(18502),x=r(32327),P=r(31842),R=r(62978),O=r(36273),j=r(35994),k=r(70579);const I="sourcecast",B=()=>{const{isMobileBreakpoint:e}=(0,f.Qs)(),t=(0,d.g)(),{audioUrl:r,currentPlayerTime:l,codeDeltasToApply:B,title:V,description:H,externalLibrary:M,isEditorAutorun:_,isEditorReadonly:N,inputToApply:L,isRunning:F,isDebugging:z,output:W,playbackDuration:X,playbackData:J,playbackStatus:K,replValue:Q,sourcecastIndex:Y,context:{chapter:q,variant:G},uid:Z,isFolderModeEnabled:$,activeEditorTabIndex:ee,editorTabs:te}=(0,f.N4)((e=>e.workspaces[I])),re=(0,f.N4)((e=>e.session.courseId)),oe=(0,u.wA)(),{handleFetchSourcecastIndex:ne,handleChapterSelect:ae,handleEditorEval:le,handleEditorValueChange:ie,handleExternalSelect:ce,handleReplEval:se,handleSetSourcecastData:ue,handleSetSourcecastStatus:de,handleReplOutputClear:pe,handleSideContentHeightChange:ye}=(0,s.useMemo)((()=>({handleFetchSourcecastIndex:()=>oe((0,g.p3)(I)),handleChapterSelect:e=>oe(b.Ay.chapterSelect(e,c.Variant.DEFAULT,I)),handleEditorEval:()=>oe(b.Ay.evalEditor(I)),handleEditorValueChange:e=>oe(b.Ay.updateEditorValue(I,0,e)),handleExternalSelect:e=>oe(b.Ay.externalLibrarySelect(e,I)),handleReplEval:()=>oe(b.Ay.evalRepl(I)),handleSetSourcecastData:(e,t,r,o,n)=>oe((0,m.Hr)(e,t,r,o,n,I)),handleSetSourcecastStatus:e=>oe((0,m.PI)(e,I)),handleReplOutputClear:()=>oe(b.Ay.clearReplOutput(I)),handleSideContentHeightChange:e=>oe((0,y.k1)(e,I))})),[oe]),{selectedTab:he,setSelectedTab:fe}=(0,h.k9)(I,x.h.introduction),be=()=>{const e=t.sourcecastId;if(e&&e!==Z&&Y){const t=Y.find((t=>t.uid===e));t&&ue(t.title,t.description,t.uid,t.url,JSON.parse(t.playbackData))}};(0,s.useEffect)((()=>{ne()}),[]),(0,s.useEffect)((()=>{if(be(),L)switch(L.type){case"activeTabChange":fe(L.data);break;case"chapterSelect":ae(L.data);break;case"externalLibrarySelect":ce(L.data);break;case"forcePause":de(j.ip.forcedPaused)}}),[be,L]),(0,s.useEffect)((()=>{e||he!==x.h.mobileEditor&&he!==x.h.mobileEditorRun||fe(x.h.introduction)}),[e,he,fe]);const ge=(0,s.useMemo)((()=>({handleDebuggerPause:()=>oe(p.A.beginDebuggerPause(I)),handleDebuggerReset:()=>oe(p.A.debuggerReset(I)),handleDebuggerResume:()=>oe(p.A.debuggerResume(I)),handleInterruptEval:()=>oe(p.A.beginInterruptExecution(I)),handleToggleEditorAutorun:()=>oe(b.Ay.toggleEditorAutorun(I))})),[oe]),me=(0,k.jsx)(v.g,{handleDebuggerPause:ge.handleDebuggerPause,handleDebuggerReset:ge.handleDebuggerReset,handleDebuggerResume:ge.handleDebuggerResume,handleEditorEval:le,handleInterruptEval:ge.handleInterruptEval,handleToggleEditorAutorun:ge.handleToggleEditorAutorun,isEntrypointFileDefined:null!==ee,isDebugging:z,isEditorAutorun:_,isRunning:F},"autorun"),ve=(0,k.jsx)(E.e,{handleChapterSelect:({chapter:e},t)=>ae(e),isFolderModeEnabled:$,sourceChapter:q,sourceVariant:G},"chapter"),Ee=(0,k.jsx)(C.g,{handleReplOutputClear:pe},"clear_repl"),Ce=(0,k.jsx)(S.T,{handleReplEval:se,isRunning:F},"eval_repl"),Se=(0,T.A)(I),De=(0,w.A)(I),Ae=[{label:"Sourcecast Table",iconName:a.W.HOME,body:(0,k.jsxs)("div",{children:[(0,k.jsx)("span",{className:"Multi-line",children:(0,k.jsx)(o.AC,{children:V?"Title: "+V+"\nDescription: "+H:U})}),(0,k.jsx)(R.A,{handleSetSourcecastData:ue,sourcecastIndex:Y,courseId:re})]}),id:x.h.introduction},Se,De],we=(e,t,r)=>{e!==t&&fe(e)},Te=(0,s.useMemo)((()=>({handleDeclarationNavigate:e=>oe(b.Ay.navigateToDeclaration(I,e)),handleEditorUpdateBreakpoints:e=>oe(b.Ay.setEditorBreakpoint(I,0,e)),setActiveEditorTabIndex:e=>oe(b.Ay.updateActiveEditorTabIndex(I,e)),removeEditorTabByIndex:e=>oe(b.Ay.removeEditorTab(I,e))})),[oe]),xe={editorVariant:"sourcecast",isFolderModeEnabled:$,activeEditorTabIndex:ee,setActiveEditorTabIndex:Te.setActiveEditorTabIndex,removeEditorTabByIndex:Te.removeEditorTabByIndex,editorTabs:te.map(D.U),codeDeltasToApply:B,isEditorReadonly:N,editorSessionId:"",handleDeclarationNavigate:Te.handleDeclarationNavigate,handleEditorEval:le,handleEditorValueChange:ie,isEditorAutorun:_,inputToApply:L,isPlaying:K===j.ip.playing,handleEditorUpdateBreakpoints:Te.handleEditorUpdateBreakpoints},Pe=(0,s.useMemo)((()=>({handleBrowseHistoryDown:()=>oe(b.Ay.browseReplHistoryDown(I)),handleBrowseHistoryUp:()=>oe(b.Ay.browseReplHistoryUp(I)),handleReplValueChange:e=>oe(b.Ay.updateReplValue(e,I))})),[oe]),Re={output:W,replValue:Q,handleBrowseHistoryDown:Pe.handleBrowseHistoryDown,handleBrowseHistoryUp:Pe.handleBrowseHistoryUp,handleReplEval:se,handleReplValueChange:Pe.handleReplValueChange,sourceChapter:q,sourceVariant:G,externalLibrary:M,replButtons:[Ce,Ee]},Oe={tabs:[]},je={controlBarProps:{editorButtons:[me,ve]},editorContainerProps:xe,handleSideContentHeightChange:ye,replProps:Re,sideBarProps:Oe,sideContentProps:{selectedTabId:he,onChange:we,tabs:{beforeDynamicTabs:Ae,afterDynamicTabs:[]},workspaceLocation:I}},ke={editorContainerProps:xe,replProps:Re,sideBarProps:Oe,mobileSideContentProps:{mobileControlBarProps:{editorButtons:[me,ve]},selectedTabId:he,onChange:we,tabs:{beforeDynamicTabs:Ae,afterDynamicTabs:[]},workspaceLocation:I}},Ie=(0,s.useMemo)((()=>({handlePromptAutocomplete:(e,t,r)=>oe(b.Ay.promptAutocomplete(I,e,t,r)),handleSetCurrentPlayerTime:e=>oe((0,m.Yz)(e,I)),handleSetCodeDeltasToApply:e=>oe((0,m.ie)(e,I)),handleSetIsEditorReadonly:e=>oe(b.Ay.setIsEditorReadonly(I,e)),handleSetInputToApply:e=>oe((0,m.eS)(e,I)),handleSetSourcecastDuration:e=>oe((0,m.PX)(e,I))})),[oe]),Be={handleEditorValueChange:ie,handlePromptAutocomplete:Ie.handlePromptAutocomplete,handleSetCurrentPlayerTime:Ie.handleSetCurrentPlayerTime,handleSetCodeDeltasToApply:Ie.handleSetCodeDeltasToApply,handleSetIsEditorReadonly:Ie.handleSetIsEditorReadonly,handleSetInputToApply:Ie.handleSetInputToApply,handleSetSourcecastDuration:Ie.handleSetSourcecastDuration,handleSetSourcecastStatus:de,audioUrl:r,currentPlayerTime:l,duration:X,playbackData:J,playbackStatus:K,handleChapterSelect:ae,handleExternalSelect:ce,setSelectedTab:fe};return(0,k.jsxs)("div",{className:i()("Sourcecast",n.DARK),children:[(0,k.jsx)(P.A,{...Be}),e?(0,k.jsx)(A.A,{...ke}):(0,k.jsx)(O.A,{...je})]})},U="Welcome to Sourcecast!",V=B;V.displayName="Sourcecast";const H=B},75270:(e,t,r)=>{"use strict";var o=r(40139),n={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var r,a,l,i,c,s,u=!1;t||(t={}),r=t.debug||!1;try{if(l=o(),i=document.createRange(),c=document.getSelection(),(s=document.createElement("span")).textContent=e,s.ariaHidden="true",s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(o){if(o.stopPropagation(),t.format)if(o.preventDefault(),"undefined"===typeof o.clipboardData){r&&console.warn("unable to use e.clipboardData"),r&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=n[t.format]||n.default;window.clipboardData.setData(a,e)}else o.clipboardData.clearData(),o.clipboardData.setData(t.format,e);t.onCopy&&(o.preventDefault(),t.onCopy(o.clipboardData))})),document.body.appendChild(s),i.selectNodeContents(s),c.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");u=!0}catch(d){r&&console.error("unable to copy using execCommand: ",d),r&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),u=!0}catch(d){r&&console.error("unable to copy using clipboardData: ",d),r&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(i):c.removeAllRanges()),s&&document.body.removeChild(s),l()}return u}},2099:(e,t,r)=>{"use strict";function o(e){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var n=i(r(65043)),a=i(r(75270)),l=["text","onCopy","options","children"];function i(e){return e&&e.__esModule?e:{default:e}}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){b(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function d(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e,t){return p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},p(e,t)}function y(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=f(e);if(t){var a=f(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===o(t)||"function"===typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}(this,r)}}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function b(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&p(e,t)}(c,e);var t,r,o,i=y(c);function c(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return b(h(e=i.call.apply(i,[this].concat(r))),"onClick",(function(t){var r=e.props,o=r.text,l=r.onCopy,i=r.children,c=r.options,s=n.default.Children.only(i),u=(0,a.default)(o,c);l&&l(o,u),s&&s.props&&"function"===typeof s.props.onClick&&s.props.onClick(t)})),e}return t=c,(r=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),r=u(e,l),o=n.default.Children.only(t);return n.default.cloneElement(o,s(s({},r),{},{onClick:this.onClick}))}}])&&d(t.prototype,r),o&&d(t,o),Object.defineProperty(t,"prototype",{writable:!1}),c}(n.default.PureComponent);t.CopyToClipboard=g,b(g,"defaultProps",{onCopy:void 0,options:void 0})},61476:(e,t,r)=>{"use strict";var o=r(2099).CopyToClipboard;o.CopyToClipboard=o,e.exports=o},40139:e=>{e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,r=[],o=0;o<e.rangeCount;o++)r.push(e.getRangeAt(o));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||r.forEach((function(t){e.addRange(t)})),t&&t.focus()}}}}]);
//# sourceMappingURL=76585.03b64cdb.chunk.js.map