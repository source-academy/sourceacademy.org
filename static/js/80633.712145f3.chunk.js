"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[80633],{80633:(e,a,s)=>{s.r(a),s.d(a,{Component:()=>_,default:()=>v});s(73251);var l=s(4173),o=s(65043),n=s(36381),t=s(22166),i=s(73216),r=s(35475),m=s(72064),d=s(88443),c=s(5449),f=s(54888),u=s(70579);const h=()=>{const e=(0,i.Zp)(),a=(0,t.wA)(),[s,h]=(0,o.useState)(null),{courseId:_,students:v}=(0,c.N4)((e=>e.session)),p=(0,c.N4)((e=>e.session.assessmentOverviews)),[x,b]=(0,o.useState)(void 0);let j=x?x.maxTeamSize:0;return(0,u.jsx)("div",{className:f.A["form-container"],children:(0,u.jsxs)(r.lV,{children:[(0,u.jsx)("h2",{children:"Import Team"}),(0,u.jsxs)("div",{className:f.A["form-field-row"],children:[(0,u.jsxs)("div",{className:f.A["form-field"],children:[(0,u.jsx)("label",{htmlFor:"assessment",className:f.A["form-label"],children:"Assessment"}),(0,u.jsx)(m.Ay,{id:"assessment",options:null===p||void 0===p?void 0:p.map((e=>({label:e.title,value:e}))),value:x?{label:x.title,value:x}:null,onChange:e=>{return a=null===e||void 0===e?void 0:e.value,b(a),void(j=null===a||void 0===a?void 0:a.maxTeamSize);var a},isSearchable:!0,className:f.A["form-select"]})]}),x&&(0,u.jsxs)("div",{className:f.A["form-field"],children:[(0,u.jsx)("label",{className:f.A["form-label"],children:"Max No. Student:"}),(0,u.jsx)("input",{type:"text",className:f.A["form-select"],value:j,readOnly:!0,disabled:!0})]})]}),(0,u.jsx)(n.l,{multiple:!1,handleChange:e=>{h(e)},name:"file",types:["XLSX","XLS"]}),(0,u.jsx)("p",{children:s?`File name: ${s.name}`:"No file uploaded"}),(0,u.jsxs)("div",{className:f.A["form-footer"],children:[(0,u.jsx)(l.$,{intent:"danger",onClick:()=>{e(`/courses/${_}/teamformation`)},children:"Back"}),(0,u.jsx)("div",{children:(0,u.jsx)(l.$,{intent:"success",onClick:()=>{x?s?(a(d.A.bulkUploadTeam(x,s,v)),e(`/courses/${_}/teamformation`)):alert("Please upload the teams."):alert("Please select an assessment.")},children:"Submit"})})]})]})})},_=h;_.displayName="TeamFormationImport";const v=h},54888:(e,a,s)=>{s.d(a,{A:()=>l});const l={"form-container":"TeamFormation_form-container__p8c9Y","form-field":"TeamFormation_form-field__256xR","student-form-field":"TeamFormation_student-form-field__H4-mk","input-container":"TeamFormation_input-container__tniYE","form-label":"TeamFormation_form-label__X8JzA","form-select":"TeamFormation_form-select__aTuX-","form-footer":"TeamFormation_form-footer__+Y5OJ","form-field-row":"TeamFormation_form-field-row__m8nyJ"}}}]);
//# sourceMappingURL=80633.712145f3.chunk.js.map