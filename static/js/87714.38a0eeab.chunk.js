"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[87714],{87714:(e,t,n)=>{n.d(t,{EditStoryComponent:()=>S,ViewStoryComponent:()=>w});n(18586);var s=n(25078),r=n(72142),o=n(98139),l=n.n(o),i=n(65043),a=n(51869),c=n(22166),d=n(73216),y=n(22870),h=n(48637),u=n(5449),g=n(77588),x=n(24944),m=n(23991),p=n(70579);const C=({isViewOnly:e=!1})=>{const t=(0,c.wA)(),[n,o]=(0,i.useState)(!1),{currentStory:C,currentStoryId:S}=(0,u.N4)((e=>e.stories)),{id:w}=(0,d.g)();if((0,i.useEffect)((()=>{t(x.A.setCurrentStory(null)),t(x.A.setCurrentStoryId(w?parseInt(w):null))}),[t,w]),!C)return(0,p.jsx)(p.Fragment,{});const{title:v,content:j}=C,A={editorButtons:[e?(0,p.jsx)(p.Fragment,{children:v}):(0,p.jsx)(r.ks,{maxWidth:"max-w-xl",placeholder:"Enter story title",value:v,onChange:e=>{const n=e.target.value;t(x.A.setCurrentStory({...C,title:n})),o(!0)}}),e?null:(0,p.jsx)(h.z,{onClickSave:()=>{t(S?x.A.saveStory(C,S):x.A.createStory(C))},hasUnsavedChanges:n},"save_story")]};return(0,p.jsxs)("div",{style:{display:"flex",flexDirection:"column"},className:l()(s.DARK),children:[(0,p.jsx)(y.A,{...A}),(0,p.jsxs)("div",{style:{width:"100vw",height:"100%",display:"flex"},children:[!e&&(0,p.jsx)(a.Ay,{className:"repl-react-ace react-ace",width:"100%",height:"100%",theme:"source",value:j,onChange:e=>{o(!0),t(x.A.setCurrentStory({...C,content:e}))},onScroll:e=>{const t=document.getElementById("userblogContainer");t&&(0,g.pT)(e,t)},fontSize:17,highlightActiveLine:!1,showPrintMargin:!1,wrapEnabled:!0,setOptions:{fontFamily:"'Inconsolata', 'Consolas', monospace"}}),(0,p.jsx)("div",{className:"newUserblog",id:"userblogContainer",children:(0,p.jsx)(m.Ay,{fileContent:j})})]})]})},S=()=>(0,p.jsx)(C,{isViewOnly:!1});S.displayName="EditStory";const w=()=>(0,p.jsx)(C,{isViewOnly:!0});w.displayName="ViewStory"}}]);
//# sourceMappingURL=87714.38a0eeab.chunk.js.map