"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[21124],{70666:(e,t,a)=>{var r=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,a){(0,l.default)(2,arguments);var r=(0,o.default)(e,a),n=(0,o.default)(t,a);return r.getTime()===n.getTime()};var l=r(a(40230)),o=r(a(55419));e.exports=t.default},85856:(e,t,a)=>{var r=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=r(a(70666)),o=["domenica","luned\xec","marted\xec","mercoled\xec","gioved\xec","venerd\xec","sabato"];function n(e){return"'"+o[e]+" alle' p"}var u={lastWeek:function(e,t,a){var r=e.getUTCDay();return(0,l.default)(e,t,a)?n(r):function(e){return 0===e?"'domenica scorsa alle' p":"'"+o[e]+" scorso alle' p"}(r)},yesterday:"'ieri alle' p",today:"'oggi alle' p",tomorrow:"'domani alle' p",nextWeek:function(e,t,a){var r=e.getUTCDay();return(0,l.default)(e,t,a)?n(r):function(e){return 0===e?"'domenica prossima alle' p":"'"+o[e]+" prossimo alle' p"}(r)},other:"P"},d=function(e,t,a,r){var l=u[e];return"function"===typeof l?l(t,a,r):l};t.default=d,e.exports=t.default}}]);
//# sourceMappingURL=date-fns-locale-it-_lib-formatRelative-index-js.99301969.chunk.js.map