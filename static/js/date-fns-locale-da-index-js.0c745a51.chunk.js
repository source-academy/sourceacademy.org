"use strict";(globalThis.webpackChunkfrontend=globalThis.webpackChunkfrontend||[]).push([[11123,21209,55976,44514,54026,94356],{25029:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lessThanXSeconds:{one:"mindre end \xe9t sekund",other:"mindre end {{count}} sekunder"},xSeconds:{one:"1 sekund",other:"{{count}} sekunder"},halfAMinute:"\xe9t halvt minut",lessThanXMinutes:{one:"mindre end \xe9t minut",other:"mindre end {{count}} minutter"},xMinutes:{one:"1 minut",other:"{{count}} minutter"},aboutXHours:{one:"cirka 1 time",other:"cirka {{count}} timer"},xHours:{one:"1 time",other:"{{count}} timer"},xDays:{one:"1 dag",other:"{{count}} dage"},aboutXWeeks:{one:"cirka 1 uge",other:"cirka {{count}} uger"},xWeeks:{one:"1 uge",other:"{{count}} uger"},aboutXMonths:{one:"cirka 1 m\xe5ned",other:"cirka {{count}} m\xe5neder"},xMonths:{one:"1 m\xe5ned",other:"{{count}} m\xe5neder"},aboutXYears:{one:"cirka 1 \xe5r",other:"cirka {{count}} \xe5r"},xYears:{one:"1 \xe5r",other:"{{count}} \xe5r"},overXYears:{one:"over 1 \xe5r",other:"over {{count}} \xe5r"},almostXYears:{one:"n\xe6sten 1 \xe5r",other:"n\xe6sten {{count}} \xe5r"}},n=function(e,t,n){var r,i=a[e];return r="string"===typeof i?i:1===t?i.one:i.other.replace("{{count}}",String(t)),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"om "+r:r+" siden":r};t.default=n,e.exports=t.default},85136:(e,t,a)=>{var n=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(118)),i={date:(0,r.default)({formats:{full:"EEEE 'den' d. MMMM y",long:"d. MMMM y",medium:"d. MMM y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} 'kl'. {{time}}",long:"{{date}} 'kl'. {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},49314:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={lastWeek:"'sidste' eeee 'kl.' p",yesterday:"'i g\xe5r kl.' p",today:"'i dag kl.' p",tomorrow:"'i morgen kl.' p",nextWeek:"'p\xe5' eeee 'kl.' p",other:"P"},n=function(e,t,n,r){return a[e]};t.default=n,e.exports=t.default},13210:(e,t,a)=>{var n=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(23500)),i={ordinalNumber:function(e,t){return Number(e)+"."},era:(0,r.default)({values:{narrow:["fvt","vt"],abbreviated:["f.v.t.","v.t."],wide:["f\xf8r vesterlandsk tidsregning","vesterlandsk tidsregning"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["1. kvt.","2. kvt.","3. kvt.","4. kvt."],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["jan.","feb.","mar.","apr.","maj","jun.","jul.","aug.","sep.","okt.","nov.","dec."],wide:["januar","februar","marts","april","maj","juni","juli","august","september","oktober","november","december"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["S","M","T","O","T","F","L"],short:["s\xf8","ma","ti","on","to","fr","l\xf8"],abbreviated:["s\xf8n.","man.","tir.","ons.","tor.","fre.","l\xf8r."],wide:["s\xf8ndag","mandag","tirsdag","onsdag","torsdag","fredag","l\xf8rdag"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"a",pm:"p",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"},abbreviated:{am:"AM",pm:"PM",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnat",noon:"middag",morning:"morgen",afternoon:"eftermiddag",evening:"aften",night:"nat"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"},abbreviated:{am:"AM",pm:"PM",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnat",noon:"middag",morning:"om morgenen",afternoon:"om eftermiddagen",evening:"om aftenen",night:"om natten"}},defaultFormattingWidth:"wide"})};t.default=i,e.exports=t.default},53566:(e,t,a)=>{var n=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(22308)),i={ordinalNumber:(0,n(a(64010)).default)({matchPattern:/^(\d+)(\.)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(fKr|fvt|eKr|vt)/i,abbreviated:/^(f\.Kr\.?|f\.v\.t\.?|e\.Kr\.?|v\.t\.)/i,wide:/^(f.Kr.|f\xf8r vesterlandsk tidsregning|e.Kr.|vesterlandsk tidsregning)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^f/i,/^(v|e)/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^[1234]. kvt\./i,wide:/^[1234]\.? kvartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan.|feb.|mar.|apr.|maj|jun.|jul.|aug.|sep.|okt.|nov.|dec.)/i,wide:/^(januar|februar|marts|april|maj|juni|juli|august|september|oktober|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^maj/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[smtofl]/i,short:/^(s\xf8n.|man.|tir.|ons.|tor.|fre.|l\xf8r.)/i,abbreviated:/^(s\xf8n|man|tir|ons|tor|fre|l\xf8r)/i,wide:/^(s\xf8ndag|mandag|tirsdag|onsdag|torsdag|fredag|l\xf8rdag)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^o/i,/^t/i,/^f/i,/^l/i],any:[/^s/i,/^m/i,/^ti/i,/^o/i,/^to/i,/^f/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(a|p|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i,any:/^([ap]\.?\s?m\.?|midnat|middag|(om) (morgenen|eftermiddagen|aftenen|natten))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/midnat/i,noon:/middag/i,morning:/morgen/i,afternoon:/eftermiddag/i,evening:/aften/i,night:/nat/i}},defaultParseWidth:"any"})};t.default=i,e.exports=t.default},63235:(e,t,a)=>{var n=a(24994).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(25029)),i=n(a(85136)),d=n(a(49314)),o=n(a(13210)),m=n(a(53566)),u={code:"da",formatDistance:r.default,formatLong:i.default,formatRelative:d.default,localize:o.default,match:m.default,options:{weekStartsOn:1,firstWeekContainsDate:4}};t.default=u,e.exports=t.default}}]);
//# sourceMappingURL=date-fns-locale-da-index-js.0c745a51.chunk.js.map