"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[72461],{72461:(e,s,t)=>{t.r(s),t.d(s,{Component:()=>ss,default:()=>ts});var n=t(98139),a=t.n(n),i=t(65043),o=t(73216),l=t(5449),r=t(22378),c=t(3554),d=t(83937),m=t(48258),p=t(11782),u=t(74273),h=t(14888),x=t(30300),g=t(50580),b=t(4173),A=t(38846),E=t(29130),y=t(11930),v=t(25078),j=t(84671),C=t(99361),N=t(83243),T=t(35475),S=t(54764),I=t(57915),R=t(36462),O=t(29678),w=t(48664),f=t(70233),P=t(41186);const D=e=>e.charAt(0).toUpperCase()+e.slice(1),L=()=>{const e=localStorage.getItem("MissionEditingAssessmentSA");return e?JSON.parse(e):null},k=e=>{localStorage.setItem("MissionEditingAssessmentSA",JSON.stringify(e))},M=e=>{localStorage.setItem("MissionEditingOverviewSA",JSON.stringify(e))},q=(e,s)=>{const t=e.CONTENT.TASK[0],n=t.$;return{type:D(n.kind),isManuallyGraded:!0,isPublished:!1,closeAt:n.duedate,coverImage:n.coverimage,id:-1,maxXp:s,earlySubmissionXp:0,number:n.number||"",openAt:n.startdate,title:n.title,reading:t.READING?t.READING[0]:"",shortSummary:t.WEBSUMMARY?t.WEBSUMMARY[0]:"",status:d.bf.attempting,story:n.story,isGradingPublished:!1,xp:0,maxTeamSize:1,hasVotingFeatures:!1,hoursBeforeEarlyXpDecay:0}},W=e=>{const s=e.CONTENT.TASK[0],t=s.$,n=B(s);return[{type:D(t.kind),id:-1,globalDeployment:U(s.DEPLOYMENT),graderDeployment:U(s.GRADERDEPLOYMENT),longSummary:s.TEXT[0],missionPDF:"google.com",questions:n[0],title:t.title},n[1]]},U=e=>{if(void 0===e)return(0,d.Ru)();{const s=e[0],t=s.IMPORT||s.EXTERNAL,n=t?t[0].$.name:"NONE",a=t&&t[0].SYMBOL||[],i=s.GLOBAL?s.GLOBAL.map((e=>{return[e.IDENTIFIER[0],(s=e.VALUE[0],Function('"use strict";return ('+s+")")()),e.VALUE[0]];var s})):[];return{chapter:parseInt(s.$.interpreter,10),external:{name:n,symbols:a},globals:i}}},B=e=>{let s=0;const t=[];return e.PROBLEMS[0].PROBLEM.forEach(((e,n)=>{const a=e.$.maxxp?parseInt(e.$.maxxp,10):0,i={answer:null,content:e.TEXT[0],id:n,library:U(e.DEPLOYMENT),graderLibrary:U(e.GRADERDEPLOYMENT),type:e.$.type,xp:0,maxXp:a};s+=a,"programming"===i.type&&t.push($(e,i)),"mcq"===i.type&&t.push(V(e,i))})),[t,s]},V=(e,s)=>{const t=[],n=e.SNIPPET,a=n?n[0].SOLUTION:void 0;let i=0;return e.CHOICE.forEach(((e,s)=>{t.push({content:e.TEXT[0],hint:null}),i="true"===e.$.correct?s:i})),{...s,type:"mcq",answer:a?parseInt(a[0],10):0,choices:t,solution:i}},$=(e,s)=>{const t=e.SNIPPET[0].TESTCASES,n=t&&t[0].PUBLIC||[],a=t&&t[0].PRIVATE||[],i=e.SNIPPET[0].PREPEND,o=e.SNIPPET[0].POSTPEND,l=e.SNIPPET[0].SOLUTION,r={...s,autogradingResults:[],prepend:i?i[0].trim():"",solutionTemplate:e.SNIPPET[0].TEMPLATE[0].trim(),postpend:o?o[0].trim():"",testcases:n.map((e=>H(e))),testcasesPrivate:a.map((e=>H(e))),answer:l?l[0].trim():"",lastModifiedAt:(new Date).toISOString(),type:"programming"};return e.SNIPPET[0].GRADER&&(r.graderTemplate=e.SNIPPET[0].GRADER[0]),r},H=e=>({type:d.kG.public,answer:e.$.answer,score:parseInt(e.$.score,10),program:e._}),G=(e,s)=>{const t=document.createElement("a");t.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(s)),t.setAttribute("download",e),t.style.display="none",document.body.appendChild(t),t.click(),document.body.removeChild(t)},F=e=>{const s={$:{interpreter:e.chapter.toString()},EXTERNAL:{$:{name:e.external.name}}};return 0!==e.external.symbols.length&&(s.EXTERNAL.SYMBOL=e.external.symbols),0!==e.globals.length&&(s.GLOBAL=e.globals.map((e=>({IDENTIFIER:e[0],VALUE:e[2]})))),s},_=(e,s)=>{const t={},n={coverimage:s.coverImage,duedate:s.closeAt,kind:s.type.toLowerCase(),number:s.number||"",startdate:s.openAt,story:s.story,title:s.title};return t.$=n,s.reading&&""!==s.reading&&(t.READING=s.reading),t.WEBSUMMARY=s.shortSummary,t.TEXT=e.longSummary,t.PROBLEMS={PROBLEM:[]},t.DEPLOYMENT=F(e.globalDeployment),-1!==e.graderDeployment.chapter&&(t.GRADERDEPLOYMENT=F(e.graderDeployment)),e.questions.forEach((e=>{const s={$:{type:e.type},SNIPPET:{SOLUTION:e.answer},TEXT:e.content,CHOICE:[]};if(-1!==e.library.chapter&&(s.$.DEPLOYMENT=F(e.library)),-1!==e.graderLibrary.chapter&&(s.$.GRADERDEPLOYMENT=F(e.graderLibrary)),e.maxXp&&(s.$.maxxp=e.maxXp),"programming"===e.type){e.graderTemplate&&(s.SNIPPET.GRADER=e.graderTemplate);const t={...s.SNIPPET,TEMPLATE:e.solutionTemplate,PREPEND:e.prepend,POSTPEND:e.postpend,TESTCASES:""};if(e.testcases.length||e.testcasesPrivate.length){if(t.TESTCASES={},e.testcases.length){const s=e.testcases.map((e=>({$:{answer:e.answer,score:e.score},_:e.program})));t.TESTCASES.PUBLIC=s}if(e.testcasesPrivate&&e.testcasesPrivate.length){const s=e.testcasesPrivate.map((e=>({$:{answer:e.answer,score:e.score},_:e.program})));t.TESTCASES.PRIVATE=s}}s.SNIPPET=t}"mcq"===e.type&&e.choices.forEach(((t,n)=>{s.CHOICE.push({$:{correct:e.solution===n?"true":"false"},TEXT:t.content})})),t.PROBLEMS.PROBLEM.push(s)})),t};var X=t(70579);const Q=e=>{const[s,t]=(0,i.useState)(""),[n,a]=(0,i.useState)(""),[o,l]=(0,i.useState)(!1),r=s=>i=>{const o={...e.overview,[s]:n};t(""),a(""),M(o),e.updateEditingOverview(o)},c=e=>{a(e.target.value)},d=n=>i=>{s!==n&&(t(n),a(e.overview[n]))},m=()=>{l(!o)},j=e=>{(()=>{const e=localStorage.getItem("MissionEditingAssessmentSA"),s=localStorage.getItem("MissionEditingOverviewSA");if(e&&s){const t=JSON.parse(e),n=JSON.parse(s),a=n.fileName||n.title,i=new P.Builder,o={CONTENT:{$:{"xmlns:xsi":"http://www.w3.org/2001/XMLSchema-instance"},TASK:_(t,n)}};let l=i.buildObject(o);l=l.replace(/(&#xD;)+/g,""),G(a+".xml",l)}})()},N=e=>(0,X.jsx)(S.A,{autoFocus:!0,className:"editing-textarea",onChange:c,onBlur:r(e),value:n}),D=(e,t)=>(0,X.jsxs)("div",{className:"row listing-title",children:[(0,X.jsx)(x.E,{ellipsize:!0,className:"col-xs-10",children:(0,X.jsx)(h.H4,{onClick:d("title"),children:"title"===s?N("title"):J(t)})}),(0,X.jsx)("div",{className:"col-xs-2",children:L(e)})]}),L=e=>(0,X.jsx)(b.$,{icon:C.W.EXPORT,intent:A.J.DANGER,minimal:!0,onClick:j,children:"Save as XML"}),k=(s,t)=>{const n={...e.overview,category:s};M(n),e.updateEditingOverview(n)},q=(s,t=(e,s)=>{})=>(0,X.jsx)(Y,{className:v.MINIMAL,items:e.assessmentTypes,onItemSelect:t,itemRenderer:K,filterable:!1,children:(0,X.jsx)(b.$,{minimal:!0,text:s,rightIcon:C.W.DOUBLE_CARET_VERTICAL})});return(0,X.jsxs)("div",{children:[(0,X.jsx)(E.l,{canOutsideClickClose:!1,className:"assessment-reset",icon:C.W.WRENCH,isCloseButtonShown:!0,isOpen:o,onClose:m,title:"Other options",children:(0,X.jsxs)(y.R,{children:[(0,X.jsx)(h.H3,{children:"Assessment Type"}),q(e.overview.type,k),(0,X.jsx)(h.H3,{children:"Number"}),(0,X.jsx)("div",{onClick:d("number"),children:"number"===s?N("number"):J(e.overview.number||"")}),(0,X.jsx)(h.H3,{children:"Story"}),(0,X.jsx)("div",{onClick:d("story"),children:"story"===s?N("story"):J(e.overview.story||"")}),(0,X.jsx)("br",{}),(0,X.jsx)(h.H3,{children:"Filename"}),(0,X.jsx)("div",{onClick:d("fileName"),children:"fileName"===s?N("fileName"):J(e.overview.fileName||"")})]})}),(W=e.overview,(0,X.jsx)("div",{children:(0,X.jsxs)(p.Z,{className:"row listing",elevation:u.e.ONE,children:[(0,X.jsx)("div",{className:"col-xs-3 listing-picture",onClick:d("coverImage"),children:"coverImage"===s?N("coverImage"):(0,X.jsx)("img",{alt:"Assessment cover",className:`cover-image-${W.status}`,src:W.coverImage?W.coverImage:I})}),(0,X.jsxs)("div",{className:"col-xs-9 listing-text",children:[D(W,W.title),(0,X.jsx)("div",{className:"row listing-xp",children:(0,X.jsxs)(h.H6,{children:[" ",`Max XP: ${W.maxXp}`," "]})}),(0,X.jsx)("div",{className:"row listing-description",onClick:d("shortSummary"),children:"shortSummary"===s?N("shortSummary"):(0,X.jsx)(O.A,{content:J(W.shortSummary)})}),(0,X.jsxs)("div",{className:"listing-controls",children:[(0,X.jsxs)(x.E,{className:"listing-due-date",children:[(0,X.jsx)(g.I,{className:"listing-due-icon",iconSize:12,icon:C.W.TIME}),(0,X.jsx)("div",{className:"date-container",children:"Opens at:\xa0"}),(0,X.jsx)("div",{className:"date-container",onClick:d("openAt"),children:"openAt"===s?N("openAt"):`${(0,f.Hw)(W.openAt)}`}),(0,X.jsx)("div",{className:"date-container",children:"\xa0\xa0Due:\xa0"}),(0,X.jsx)("div",{className:"date-container",onClick:d("closeAt"),children:"closeAt"===s?N("closeAt"):`${(0,f.Hw)(W.closeAt)}`})]}),(0,X.jsx)(b.$,{icon:C.W.WRENCH,minimal:!0,onClick:m,children:"Other Options"}),(0,X.jsx)(T.k2,{to:`${e.listingPath}/${W.id.toString()}/${w.A.defaultQuestionId}`,children:(0,X.jsx)(R.A,{label:"Edit mission",icon:C.W.EDIT})})]})]})]})}))]});var W},J=e=>e.match("^(\n| )*$")?"Enter Value Here (If Applicable)":e,Y=N.l.ofType(),K=(e,{handleClick:s,modifiers:t,query:n})=>(0,X.jsx)(j.D,{active:!1,onClick:s,text:e},e);var z=t(7290),Z=t(79076),ee=t(54713),se=t(84365),te=t(22166),ne=t(88443),ae=t(42448),ie=t(39532),oe=t(34828),le=t(44277),re=t(50289),ce=t(91969),de=t(68683),me=t(48637),pe=t(212);const ue=({toggleEditMode:e,editingMode:s})=>{const t="question"===s?"Global":"Question Specific";return(0,X.jsx)(pe.m,{content:"Switch to "+t+" Editing Mode",children:(0,X.jsx)(R.A,{label:t+" Editing Mode",icon:C.W.REFRESH,onClick:e})})},he=(e,s)=>{for(const t of e)s=s[t];return s},xe=(e,s,t)=>{let n=0;for(n=0;n<e.length-1;n++)t=t[e[n]];t[e[n]]=s},ge=(e=0,s=null)=>t=>{let n;return t="string"===typeof t?parseInt(t,10):t,n=null!==e&&t<e?e:null!==s&&t>s?s:t,n},be=e=>{const s=e.isNumber||!1,[t,n]=(0,i.useState)(!1),[a]=(0,i.useState)(s),[o,l]=(0,i.useState)(""),[r]=(0,i.useState)(e.useRawValue||s),c=s=>{let t;a?(t=parseInt(o,10),isNaN(t)&&(t=he(e.path,e.assessment))):t=o;const i=he(e.path,e.assessment);if(e.processResults&&(t=e.processResults(t)),t!==i){const s=e.assessment;xe(e.path,t,s),e.updateAssessment(s)}n(!1)},d=e=>{l(e.target.value)};let m;if(t)m=(0,X.jsx)(S.A,{autoFocus:!0,className:"editing-textarea",onChange:d,onBlur:c,value:o});else{const s="Please enter value (if applicable)";let t=he(e.path,e.assessment);e.isNumber||(t=t||"",t=t.match(/^\s*$/)?s:t),m=r?t:(0,X.jsx)(O.A,{content:t})}return(0,X.jsx)("div",{onClick:s=>{if(!t){const s=he(e.path,e.assessment)||"";n(!0),l("string"===typeof s?s:s.toString())}},children:m})},Ae=be,Ee=e=>{const s=s=>()=>{s.push((0,d.bM)()),e.updateAssessment(e.assessment)},t=(s,t)=>{const n=he(s,e.assessment),a=n[t];return(0,X.jsx)("div",{children:(0,X.jsx)(p.Z,{className:"row listing",elevation:u.e.ONE,children:(0,X.jsxs)("div",{className:"col-xs-9 listing-text",children:[(0,X.jsx)("div",{className:"row listing-program",children:(0,X.jsxs)(h.H6,{children:["Test Program:",(0,X.jsx)(Ae,{assessment:e.assessment,path:s.concat([t,"program"]),useRawValue:!0,updateAssessment:e.updateAssessment})]})}),(0,X.jsx)("div",{className:"row listing-expected",children:(0,X.jsxs)(h.H6,{children:["Score:",(0,X.jsx)(Ae,{assessment:e.assessment,isNumber:!0,path:s.concat([t,"score"]),updateAssessment:e.updateAssessment})]})}),(0,X.jsx)("div",{className:"row listing-expected",children:(0,X.jsxs)(h.H6,{children:["Expected Answer:",(0,X.jsx)(Ae,{assessment:e.assessment,path:s.concat([t,"answer"]),useRawValue:!0,updateAssessment:e.updateAssessment})]})}),(0,X.jsx)("div",{className:"listing-controls",children:(0,X.jsxs)("div",{children:[(0,X.jsx)(R.A,{label:"Test",icon:C.W.PLAY,onClick:()=>e.handleTestcaseEval(a)}),(0,X.jsx)(R.A,{label:"Delete",icon:C.W.DELETE,onClick:()=>((s,t)=>{s.splice(t,1),e.updateAssessment(e.assessment)})(n,t)})]})})]})})})},n=e.assessment.questions[e.questionId],a=["questions",e.questionId,"testcases"],i=n.testcases.map(((e,s)=>(0,X.jsx)("div",{children:t(a,s)},s))),o=["questions",e.questionId,"testcasesPrivate"],l=n.testcasesPrivate.map(((e,s)=>(0,X.jsx)("div",{children:t(o,s)},s)));return(0,X.jsxs)("div",{children:["Public Testcases",i,(0,X.jsx)(R.A,{label:"New public testcase",icon:C.W.PLUS,onClick:s(n.testcases)}),(0,X.jsx)("br",{}),(0,X.jsx)("br",{}),"Private Testcases",l,(0,X.jsx)(R.A,{label:"New private testcase",icon:C.W.PLUS,onClick:s(n.testcasesPrivate)})]})};var ye=t(67452),ve=t(71965),je=t(83023),Ce=t(64664);const Ne=e=>"string"===typeof e?e.replace(/\s+/g,""):e,Te=e=>Function('"use strict";return ('+e+")")(),Se=(e,s=se.Variant.DEFAULT,t=(e,s)=>{})=>(0,X.jsx)(Ie,{className:v.MINIMAL,items:je.ph,onItemSelect:t,itemRenderer:Re,filterable:!1,children:(0,X.jsx)(b.$,{minimal:!0,text:(0,je.Kl)(e,s),rightIcon:C.W.DOUBLE_CARET_VERTICAL})}),Ie=N.l.ofType(),Re=(e,{handleClick:s,modifiers:t,query:n})=>(0,X.jsx)(j.D,{active:!1,onClick:s,text:e.displayName},e.displayName),Oe=Array.from(Ce.r.entries()).map(((e,s)=>({name:e[0],key:s,symbols:e[1]}))),we=(e,s)=>(0,X.jsx)(fe,{className:v.MINIMAL,items:Oe,onItemSelect:s,itemRenderer:Pe,filterable:!1,children:(0,X.jsx)(b.$,{minimal:!0,text:e,rightIcon:C.W.DOUBLE_CARET_VERTICAL})}),fe=N.l.ofType(),Pe=(e,{handleClick:s,modifiers:t,query:n})=>(0,X.jsx)(j.D,{active:!1,onClick:s,text:e.name},e.key),De=e=>{const s=()=>{const s=e.pathToLibrary,a=he(s,e.assessment),d=a.external.symbols.map(((e,n)=>(0,X.jsxs)("tr",{children:[(0,X.jsx)("td",{children:t(s.concat(["external","symbols",n]))}),(0,X.jsx)("td",{style:{width:"100px"},children:(0,X.jsx)(R.A,{label:"Delete",icon:C.W.MINUS,onClick:o(n)})})]},n))),u=a.globals.map(((e,a)=>(0,X.jsxs)("tr",{children:[(0,X.jsx)("td",{style:{width:"170px"},children:t(s.concat(["globals",a,0]))}),(0,X.jsx)("td",{children:n(a)}),(0,X.jsx)("td",{style:{width:"90px"},children:(0,X.jsx)(R.A,{label:"Delete",icon:C.W.MINUS,onClick:r(a)})})]},a))),h=(0,X.jsx)(R.A,{label:"Use this Library",icon:C.W.REFRESH,onClick:()=>e.handleRefreshLibrary(a)}),x=(0,X.jsxs)(i.Fragment,{children:["External Library:",(0,X.jsx)("br",{}),we(a.external.name,p),(0,X.jsx)(ye.c,{}),(0,X.jsx)("div",{children:"Symbols:"}),(0,X.jsx)("br",{}),(0,X.jsx)("table",{style:{width:"100%"},children:(0,X.jsx)("tbody",{children:d})}),(0,X.jsx)(R.A,{label:"New Symbol",icon:C.W.PLUS,onClick:l})]}),g=(0,X.jsxs)(i.Fragment,{children:[(0,X.jsx)("div",{children:"Globals:"}),(0,X.jsx)("br",{}),(0,X.jsx)("table",{style:{width:"100%",borderSpacing:"5px"},children:(0,X.jsx)("tbody",{children:u})}),(0,X.jsx)(R.A,{label:"New Global",icon:C.W.PLUS,onClick:c})]});return(0,X.jsxs)("div",{children:[(0,X.jsx)(ye.c,{}),h,(0,X.jsx)(ye.c,{}),"Interpreter:",(0,X.jsx)("br",{}),Se(a.chapter,a.variant,m),(0,X.jsx)(ye.c,{}),x,(0,X.jsx)(ye.c,{}),g]})},t=s=>(0,X.jsx)(Ae,{assessment:e.assessment,path:s,processResults:Ne,updateAssessment:e.updateAssessment,useRawValue:!0}),n=s=>{const t=e.pathToLibrary.concat(["globals",s,2]);return(0,X.jsx)(Ae,{assessment:e.assessment,path:t,updateAssessment:a(s),useRawValue:!0})},a=s=>t=>{const n=he(e.pathToLibrary,e.assessment).globals[s];try{n[1]=Te(n[2]),e.updateAssessment(t)}catch(a){n[2]='"Invalid Expression"'}},o=s=>()=>{const t=e.assessment;he(e.pathToLibrary,t).external.symbols.splice(s,1),e.updateAssessment(t)},l=()=>{const s=e.assessment;he(e.pathToLibrary,s).external.symbols.push("new_symbol"),e.updateAssessment(s)},r=s=>()=>{const t=e.assessment;he(e.pathToLibrary,t).globals.splice(s,1),e.updateAssessment(t)},c=()=>{const s=e.assessment;he(e.pathToLibrary,s).globals.push(["new_global",null,"null"]),e.updateAssessment(s)},m=(s,t)=>{const n=e.assessment;he(e.pathToLibrary,n).chapter=s.chapter,e.updateAssessment(n)},p=(s,t)=>{const n=e.assessment,a=he(e.pathToLibrary,n);a.external.name=s.name,a.external.symbols=JSON.parse(JSON.stringify(Ce.r.get(s.name))),e.updateAssessment(n)},u=()=>{const s=e.assessment;if(h()){let t=he(e.pathToCopy||["globalDeployment"],s);-1===t.chapter&&(t=s.globalDeployment),t=JSON.parse(JSON.stringify(t)),xe(e.pathToLibrary,t,s)}else xe(e.pathToLibrary,(0,d.Ru)(),s);e.updateAssessment(s)},h=(s=e.pathToLibrary)=>-1===he(s.concat(["chapter"]),e.assessment);return e.isOptionalDeployment?(0,X.jsxs)("div",{children:[(0,X.jsx)(ve.dO,{checked:!h(),label:"Enable "+e.label+" Deployment",onChange:u}),h()?null:s()]}):(0,X.jsxs)("div",{children:[e.label+" Deployment",(0,X.jsx)("br",{}),s()]})},Le=e=>{return(0,X.jsxs)("div",{children:["Max Xp:",(s=e.path.concat(["maxXp"]),(0,X.jsx)(Ae,{assessment:e.assessment,isNumber:!0,path:s,processResults:ge(0),updateAssessment:e.updateAssessment}))]});var s},ke=e=>JSON.parse(JSON.stringify(e)),Me=e=>{const s=(0,o.Zp)(),[t,n]=(0,i.useState)(!1),[a,l]=(0,i.useState)((()=>{})),r=s=>(0,X.jsxs)("div",{children:[(0,X.jsx)(R.A,{label:"Clone",icon:C.W.DOCUMENT,onClick:u(m((()=>ke(e.assessment.questions[s])),s))}),(0,X.jsx)(R.A,{label:"Delete",icon:C.W.REMOVE,onClick:u(p(s))}),(0,X.jsx)(R.A,{label:"Shift Up",icon:C.W.CARET_UP,onClick:u(c(-1,s)),isDisabled:0===s}),(0,X.jsx)(R.A,{label:"Shift Down",icon:C.W.CARET_DOWN,onClick:u(c(1,s)),isDisabled:s>=e.assessment.questions.length-1}),(0,X.jsx)("br",{}),(0,X.jsx)(R.A,{label:"Insert Programming Question",icon:C.W.FONT,onClick:u(m(d.S2,s))}),(0,X.jsx)(R.A,{label:"Insert MCQ Question",icon:C.W.CONFIRM,onClick:u(m(d.Kh,s))})]}),c=(t,n)=>()=>{const a=e.assessment,i=n+t;if(i>=0&&i<a.questions.length){const t=a.questions[n],o=a.questions;o[n]=o[i],o[i]=t,a.questions=o,e.updateAssessment(a),s("/mission-control/-1/"+i.toString())}},m=(t,n)=>()=>{const a=e.assessment;n+=1;const i=a.questions;i.splice(n,0,t()),a.questions=i,e.updateAssessment(a),s("/mission-control/-1/"+n.toString())},p=s=>()=>{const t=e.assessment;let n=t.questions;n.length>1&&(n=n.slice(0,s).concat(n.slice(s+1))),t.questions=n,e.updateAssessment(t)},u=s=>()=>{e.hasUnsavedChanges?(n(!0),l(s)):s()},h=(0,X.jsxs)(E.l,{className:"assessment-reset",icon:C.W.ERROR,isCloseButtonShown:!0,isOpen:t,title:"Confirmation: Save unsaved changes?",children:[(0,X.jsx)(y.R,{children:(0,X.jsx)(O.A,{content:"Are you sure you want to save over your unsaved changes?"})}),(0,X.jsx)(ee.E,{actions:(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(R.A,{label:"Cancel",onClick:()=>n(!1),options:{minimal:!1}}),(0,X.jsx)(R.A,{label:"Confirm",onClick:()=>{a(),n(!1)},options:{minimal:!1,intent:A.J.DANGER}})]})})]});return(0,X.jsxs)("div",{children:[h,e.assessment.questions.map(((e,s)=>(0,X.jsxs)("div",{children:["Question ",s+1,(0,X.jsx)("br",{}),(0,X.jsx)(b.$,{className:"mcq-option col-xs-12",minimal:!0,children:(0,X.jsx)(O.A,{content:e.content.length>200?e.content.substring(0,300)+"...":e.content})}),r(s),(0,X.jsx)("br",{}),(0,X.jsx)("br",{})]},s)))]})},qe=e=>{const s=(s,t=!1,n=[0])=>t?(0,X.jsx)(Ae,{assessment:e.assessment,isNumber:!0,path:s,processResults:ge(n[0],n[1]),updateAssessment:e.updateAssessment}):(0,X.jsx)(Ae,{assessment:e.assessment,path:s,updateAssessment:e.updateAssessment}),{questionId:t}=e,n=e.assessment.questions[t],a=n.choices.map(((e,n)=>(0,X.jsxs)("div",{className:"mcq-option col-xs-12",children:["Option ",n,":",s(["questions",t,"choices",n,"content"]),(0,X.jsx)("br",{}),"Hint:",s(["questions",t,"choices",n,"hint"])]},n))),i=(0,X.jsx)(R.A,{label:"Delete Option",icon:C.W.REMOVE,onClick:()=>{const{assessment:s,questionId:t}=e,n=s.questions[t],a=n.choices.slice(0,n.choices.length-1);n.choices=a,s.questions[t]=n,e.updateAssessment(s)}});return(0,X.jsx)("div",{className:"MCQChooser row",children:(0,X.jsx)(p.Z,{className:"mcq-content-parent col-xs-12 middle-xs",children:(0,X.jsxs)("div",{className:"row mcq-options-parent between-xs",children:[a,"Solution:",s(["questions",t,"solution"],!0,[0,n.choices.length]),(0,X.jsx)("br",{}),(0,X.jsx)(R.A,{label:"Add Option",icon:C.W.CONFIRM,onClick:()=>{const{assessment:s,questionId:t}=e,n=s.questions[t],a=n.choices.concat([{content:"A",hint:null}]);n.choices=a,s.questions[t]=n,e.updateAssessment(s)}}),n.choices.length>0?i:void 0]})})})};var We=t(51869);const Ue=N.l.ofType(),Be=[{label:"Prepend",icon:C.W.CHEVRON_UP,id:"prepend"},{label:"Postpend",icon:C.W.CHEVRON_DOWN,id:"postpend"},{label:"Solution Template",icon:C.W.MANUAL,id:"solutionTemplate"},{label:"Suggested Answer",icon:C.W.TICK,id:"answer"}],Ve=e=>{const[s,t]=(0,i.useState)(Be[0]),[n,a]=(0,i.useState)(""),[o,l]=(0,i.useState)(!1),r=s=>{const t=o?n:he(s,e.assessment);return(0,X.jsx)("div",{onClick:c(s),onBlur:d(s),children:(0,X.jsx)(We.Ay,{className:"react-ace",editorProps:{$blockScrolling:1/0},fontSize:14,highlightActiveLine:!1,mode:"javascript",onChange:a,theme:"source",value:t,width:"100%"})})},c=s=>t=>{o||(a(he(s,e.assessment)),l(!0))},d=t=>i=>{if(o){if(he(t,e.assessment)!==n){const s=e.assessment;xe(t,n,s),e.updateAssessment(s)}if("prepend"===s.id){const s=n;e.handleUpdateWorkspace({programPrependValue:s})}else if("postpend"===s.id){const s=n;e.handleUpdateWorkspace({programPostpendValue:s})}a(""),l(!1)}},m=s=>()=>{const t=e.assessment;xe(s,e.editorValue,t),e.updateAssessment(t)},u=s=>()=>{const t=he(s,e.assessment);e.handleEditorValueChange(t)};return(()=>{const n=["questions",e.questionId].concat(s.id),a=(0,X.jsx)(R.A,{label:"Copy from Editor",icon:C.W.IMPORT,onClick:m(n)}),i=(0,X.jsx)(R.A,{label:"Copy to Editor",icon:C.W.EXPORT,onClick:u(n)}),o=(0,X.jsxs)("div",{children:[a,i,(0,X.jsx)(ye.c,{}),r(n)]}),l=(e,{handleClick:s})=>(0,X.jsx)(j.D,{active:!1,onClick:s,text:e.label,icon:e.icon},e.id);return(0,X.jsx)("div",{className:"side-content",children:(0,X.jsxs)(p.Z,{children:[(c=s,d=t,(0,X.jsx)(Ue,{className:v.MINIMAL,items:Be,itemRenderer:l,onItemSelect:d,filterable:!1,children:(0,X.jsx)(b.$,{minimal:!0,text:c.label,icon:C.W.EDIT,rightIcon:C.W.DOUBLE_CARET_VERTICAL})})),(0,X.jsx)(ye.c,{}),(0,X.jsx)("div",{className:"side-content-text",children:o})]})});var c,d})()};var $e=t(77309),He=t(13706),Ge=t(51025),Fe=t(32327),_e=t(36273),Xe=t(5709);const Qe="assessment";function Je(e){const s={};return e.filter((e=>!s.hasOwnProperty(e)&&(s[e]=!0)))}const Ye=e=>{var s,t,n;const[r,c]=(0,i.useState)(L()),[m,p]=(0,i.useState)("question"),[u,h]=(0,i.useState)(!1),[x,g]=(0,i.useState)(!1),[b,j]=(0,i.useState)(0),N=(0,o.Zp)(),{isFolderModeEnabled:T,activeEditorTabIndex:S,editorTabs:I,isRunning:w,output:f,replValue:P,currentAssessment:D,currentQuestion:q}=(0,l.N4)((e=>e.workspaces[Qe]));(0,i.useEffect)((()=>{r&&(Te(),j(Oe()))}),[]),(0,i.useEffect)((()=>function(){if(void 0===r)return;const e=-1,s=Ce();D===e&&q===s||(Te(),ge(e,s),xe(!1),u&&(c(L()),h(!1)),Ne())}()));const W=(0,te.wA)(),{handleBrowseHistoryDown:U,handleBrowseHistoryUp:B,handleClearContext:V,handleDeclarationNavigate:$,handleEditorEval:H,handleEditorValueChange:G,handleEditorUpdateBreakpoints:F,handleReplEval:_,handleReplOutputClear:Q,handleReplValueChange:J,handleResetWorkspace:Y,handleUpdateWorkspace:K,handleSubmitAnswer:pe,handleSideContentHeightChange:he,handleUpdateHasUnsavedChanges:xe,handleUpdateCurrentAssessmentId:ge,handlePromptAutocomplete:Ae,setActiveEditorTabIndex:ye,removeEditorTabByIndex:ve}=(0,i.useMemo)((()=>({handleBrowseHistoryDown:()=>W(Xe.Ay.browseReplHistoryDown(Qe)),handleBrowseHistoryUp:()=>W(Xe.Ay.browseReplHistoryUp(Qe)),handleClearContext:(e,s)=>W(Xe.Ay.beginClearContext(Qe,e,s)),handleDeclarationNavigate:e=>W(Xe.Ay.navigateToDeclaration(Qe,e)),handleEditorEval:()=>W(Xe.Ay.evalEditor(Qe)),handleEditorValueChange:(e,s)=>W(Xe.Ay.updateEditorValue(Qe,e,s)),handleEditorUpdateBreakpoints:(e,s)=>W(Xe.Ay.setEditorBreakpoint(Qe,e,s)),handleReplEval:()=>W(Xe.Ay.evalRepl(Qe)),handleReplOutputClear:()=>W(Xe.Ay.clearReplOutput(Qe)),handleReplValueChange:e=>W(Xe.Ay.updateReplValue(e,Qe)),handleResetWorkspace:e=>W(Xe.Ay.resetWorkspace(Qe,e)),handleUpdateWorkspace:e=>W(Xe.Ay.updateWorkspace(Qe,e)),handleSubmitAnswer:(e,s)=>W(ne.A.submitAnswer(e,s)),handleSideContentHeightChange:e=>W((0,Ge.k1)(e,Qe)),handleUpdateHasUnsavedChanges:e=>W(Xe.Ay.updateHasUnsavedChanges(Qe,e)),handleUpdateCurrentAssessmentId:(e,s)=>W(Xe.Ay.updateCurrentAssessmentId(e,s)),handlePromptAutocomplete:(e,s,t)=>W(Xe.Ay.promptAutocomplete(Qe,e,s,t)),setActiveEditorTabIndex:e=>W(Xe.Ay.updateActiveEditorTabIndex(Qe,e)),removeEditorTabByIndex:e=>W(Xe.Ay.removeEditorTab(Qe,e))})),[W]),je=(0,i.useCallback)((e=>G(0,e)),[G]);if(null===r||0===r.questions.length)return(0,X.jsx)(z.I,{className:a()("WorkspaceParent",v.DARK),description:"Getting mission ready...",icon:(0,X.jsx)(Z.y,{size:Z.H.LARGE})});const Ce=()=>{let s=e.questionId;return s<0?s=0:s>=r.questions.length&&(s=r.questions.length-1),s};const Ne=(e=void 0)=>{const s=r.questions[Ce()];if(e||(e=-1===s.library.chapter?r.globalDeployment:s.library),e&&e.globals.length>0){const s=e.globals.map((e=>e[0])),t=e.external.symbols.concat(s);e={...e,external:{name:e.external.name,symbols:Je(t)}}}V(e,!0)},Te=()=>{const e=r.questions[Ce()];let s,t="",n="";e.type===d.OH.programming?(s=e.editorValue?e.editorValue:e.solutionTemplate,t=e.prepend,n=e.postpend):s="//If you see this, this is a bug. Please report bug.",Y({editorTabs:[{value:s,highlightedLines:[],breakpoints:[]}],programPrependValue:t,programPostpendValue:n}),G(0,s)},Se=e=>{K({editorTestcases:[e]}),W(Xe.Ay.evalTestcase(Qe,0))},Ie=()=>{r.questions[Ce()].editorValue=I[0].value,c(r),h(!1),k(r),Re()},Re=()=>{const s=Oe(),t=s-b;if(0!==t){const n=e.assessmentOverview;0!==t&&(n.maxXp=s),j(s),e.updateAssessmentOverview(n),M(n)}},Oe=()=>{let e=0;const s=r.questions;for(const t of s)e+=t.maxXp;return e},we=e=>{c(e),h(!0)},fe=e=>{c(e),Ne(),Ie(),Te()},Pe=()=>{p("question"===m?"global":"question")};const ke=Ce(),We=r.questions[ke],Ue={controlBarProps:(e=>{const s="/mission-control",t=s+`/${r.id.toString()}`,n=[e+1,r.questions.length],a=(0,X.jsx)(oe.G,{onClickNext:()=>N(t+`/${(e+1).toString()}`),onClickReturn:()=>N(s),questionProgress:n},"next_question"),i=(0,X.jsx)(le.S,{onClick:()=>N(t+`/${(e-1).toString()}`),questionProgress:n},"previous_question"),o=(0,X.jsx)(re.Y,{questionProgress:n},"question_view"),l=(0,X.jsx)(ce.a,{onClick:()=>{g((()=>u))}},"reset_template");return{editorButtons:[(0,X.jsx)(de.w,{isEntrypointFileDefined:null!==S,handleEditorEval:H},"run"),(0,X.jsx)(me.z,{hasUnsavedChanges:u,onClickSave:Ie},"save"),l],flowButtons:[i,o,a],editingWorkspaceButtons:[(0,X.jsx)(ue,{editingMode:m,toggleEditMode:Pe},"toggle_edit_mode")]}})(ke),editorContainerProps:We.type===d.OH.programming?{editorVariant:"normal",isFolderModeEnabled:T,activeEditorTabIndex:S,setActiveEditorTabIndex:ye,removeEditorTabByIndex:ve,editorTabs:I.map($e.U).map(((e,s)=>0!==s?e:{...e,editorValue:e.editorValue||We.editorValue||We.solutionTemplate})),editorSessionId:"",sessionDetails:null,handleDeclarationNavigate:$,handleEditorEval:H,handleEditorValueChange:G,handleEditorUpdateBreakpoints:F,handleUpdateHasUnsavedChanges:xe,handlePromptAutocomplete:Ae,isEditorAutorun:!1}:void 0,handleSideContentHeightChange:he,hasUnsavedChanges:u,mcqProps:{mcq:We,handleMCQSubmit:e=>pe(r.questions[ke].id,e)},sideBarProps:{tabs:[]},sideContentProps:((e,s)=>{const t=r;let n;if("question"===m){const a=t.questions[e.questionId].type,i="mcq"===a?(0,X.jsx)(qe,{assessment:t,questionId:s,updateAssessment:we}):(0,X.jsx)(Ve,{assessment:t,questionId:s,updateAssessment:we,editorValue:I[0].value,handleEditorValueChange:je,handleUpdateWorkspace:K});n=[{label:`Question ${s+1}`,iconName:C.W.NINJA,body:(0,X.jsx)(be,{assessment:t,path:["questions",s,"content"],updateAssessment:we}),id:Fe.h.editorQuestionOverview},{label:"Question Template",iconName:C.W.DOCUMENT,body:i,id:Fe.h.editorQuestionTemplate},{label:"Manage Local Deployment",iconName:C.W.HOME,body:(0,X.jsx)(De,{assessment:t,label:"Question Specific",handleRefreshLibrary:Ne,pathToLibrary:["questions",s,"library"],updateAssessment:we,isOptionalDeployment:!0}),id:Fe.h.editorLocalDeployment},{label:"Manage Local Grader Deployment",iconName:C.W.CONFIRM,body:(0,X.jsx)(De,{assessment:t,label:"Question Specific Grader",handleRefreshLibrary:Ne,pathToLibrary:["questions",s,"graderLibrary"],pathToCopy:["questions",s,"library"],updateAssessment:we,isOptionalDeployment:!0}),id:Fe.h.editorLocalGraderDeployment},{label:"Grading",iconName:C.W.TICK,body:(0,X.jsx)(Le,{assessment:t,path:["questions",s],updateAssessment:we}),id:Fe.h.editorGrading}],"programming"===a&&n.push({label:"Autograder",iconName:C.W.AIRPLANE,body:(0,X.jsx)(Ee,{assessment:t,questionId:s,handleTestcaseEval:Se,updateAssessment:we}),id:Fe.h.editorAutograder});t.globalDeployment.external.symbols.includes("get_matrix")&&n.push({label:"Tone Matrix",iconName:C.W.GRID_VIEW,body:(0,X.jsx)(He.A,{}),id:Fe.h.toneMatrix})}else n=[{label:`${t.type} Briefing`,iconName:C.W.BRIEFCASE,body:(0,X.jsx)(be,{assessment:t,path:["longSummary"],updateAssessment:we}),id:Fe.h.editorBriefing},{label:"Manage Question",iconName:C.W.WRENCH,body:(0,X.jsx)(Me,{assessment:t,hasUnsavedChanges:u,questionId:s,updateAssessment:fe}),id:Fe.h.editorManageQuestion},{label:"Manage Global Deployment",iconName:C.W.GLOBE,body:(0,X.jsx)(De,{assessment:t,label:"Global",handleRefreshLibrary:Ne,pathToLibrary:["globalDeployment"],updateAssessment:we,isOptionalDeployment:!1}),id:Fe.h.editorGlobalDeployment},{label:"Manage Global Grader Deployment",iconName:C.W.CONFIRM,body:(0,X.jsx)(De,{assessment:t,label:"Global Grader",handleRefreshLibrary:Ne,pathToLibrary:["graderDeployment"],updateAssessment:we,isOptionalDeployment:!0}),id:Fe.h.editorGlobalGraderDeployment}];return{tabs:{beforeDynamicTabs:n,afterDynamicTabs:[]},workspaceLocation:Qe}})(e,ke),replProps:{handleBrowseHistoryDown:U,handleBrowseHistoryUp:B,handleReplEval:_,handleReplValueChange:J,output:f,replValue:P,sourceChapter:(null===We||void 0===We||null===(s=We.library)||void 0===s?void 0:s.chapter)||se.Chapter.SOURCE_4,sourceVariant:se.Variant.DEFAULT,externalLibrary:(null===We||void 0===We||null===(t=We.library)||void 0===t||null===(n=t.external)||void 0===n?void 0:n.name)||"NONE",replButtons:function(){const e=(0,X.jsx)(ae.g,{handleReplOutputClear:Q},"clear_repl");return[(0,X.jsx)(ie.T,{handleReplEval:_,isRunning:w},"eval_repl"),e]}()}};return(0,X.jsxs)("div",{className:a()("WorkspaceParent",v.DARK),children:[(0,X.jsxs)(E.l,{className:"assessment-reset",icon:C.W.ERROR,isCloseButtonShown:!0,isOpen:x,title:"Confirmation: Reset editor?",children:[(0,X.jsx)(y.R,{children:(0,X.jsx)(O.A,{content:"Are you sure you want to reset to your last save?"})}),(0,X.jsx)(ee.E,{actions:(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(R.A,{label:"Cancel",onClick:()=>g(!1),options:{minimal:!1}}),(0,X.jsx)(R.A,{label:"Confirm",onClick:()=>{const e=L();c(e),h(!1),g(!1),j(Oe()),Ne(),Te()},options:{minimal:!1,intent:A.J.DANGER}})]})})]}),(0,X.jsx)(_e.A,{...Ue})]})};var Ke=t(78501);const ze=e=>{const[s,t]=(0,i.useState)("Import XML");let n;const a=(0,te.wA)(),o=(0,i.useCallback)((e=>a(ne.A.updateAssessment(e))),[a]);(0,i.useEffect)((()=>{const e=L();e&&o(e)}),[o]);const l=s=>a=>{if(!n)return;const i=n.result;i&&(0,P.parseString)(i,((n,a)=>{try{const n=(e=>{const s=W(e);return[q(e,s[1]),s[0]]})(a);n[0].fileName=s.name.slice(0,-4),M(n[0]),e.updateEditingOverview(n[0]),k(n[1]),o(n[1]),t("Success!")}catch(n){t("Invalid XML!")}}))};return(0,X.jsxs)("div",{children:[(0,X.jsx)("div",{children:"Please ensure that the xml uploaded is trustable."}),(0,X.jsx)("div",{children:(0,X.jsx)(Ke.z,{text:s,inputProps:{accept:".xml"},onChange:e=>{const s=e.target.files;e.target.files&&(n=new FileReader,n.onloadend=l(s[0]),n.readAsText(s[0]))}})}),(0,X.jsx)("div",{children:(0,X.jsx)(R.A,{label:"Make New Mission",icon:C.W.NEW_OBJECT,onClick:()=>{M((0,d.yI)()),e.updateEditingOverview((0,d.yI)()),k((0,d.VK)()),o((0,d.VK)())}})})]})};var Ze=t(62973);const es=()=>{var e,s;const{assessmentConfigurations:t}=(0,l.wV)(),n=(null===t||void 0===t?void 0:t.map((e=>e.type)))||[],[p,u]=(0,i.useState)((()=>{const e=localStorage.getItem("MissionEditingOverviewSA");return e?JSON.parse(e):null})()),h=(0,o.g)();if(h.assessmentId&&(null===(e=h.assessmentId)||void 0===e||!e.match(r.F0))||h.questionId&&(null===(s=h.questionId)||void 0===s||!s.match(r.F0)))return(0,X.jsx)(o.C5,{to:"/mission-control"});const x=(0,Ze.hM)(h.assessmentId),g=(0,Ze.hM)(h.questionId)||w.A.defaultQuestionId;if(-1===x&&p){const e=p,s={assessmentId:x,questionId:g,assessmentOverview:e,updateAssessmentOverview:u,notAttempted:e.status===d.bf.not_attempted,closeDate:e.closeAt};return(0,X.jsx)("div",{className:c.A.Academy,children:(0,X.jsx)(Ye,{...s})})}const b=(0,X.jsxs)(X.Fragment,{children:[(0,X.jsx)(ze,{updateEditingOverview:u}),p&&(0,X.jsx)(Q,{overview:p,updateEditingOverview:u,listingPath:"/mission-control",assessmentTypes:n})]});return(0,X.jsx)("div",{className:a()("Assessment",c.A.Academy),children:(0,X.jsx)(m.A,{display:b})})},ss=es;ss.displayName="MissionControl";const ts=es}}]);
//# sourceMappingURL=72461.bf3270f2.chunk.js.map