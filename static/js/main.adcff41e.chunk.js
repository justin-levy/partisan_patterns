(this.webpackJsonppartisan_patterns=this.webpackJsonppartisan_patterns||[]).push([[0],{47:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var i=n(0),r=n.n(i),a=n(36),c=n.n(a),o=(n(47),n(4)),s=n(37),u=n(2),f=n(80),l=n(78),j=n(77),b=n(38),O=(n(50),n(81)),d=n(1),h=[1924,1928,1932,1936,1940,1944,1948,1952,1956,1960,1964,1968,1972,1976,1980,1984,1988,1992,1996,2e3,2004,2008,2012,2016,2020],m=function(e){var t=e.year,n=e.setYear;return Object(d.jsx)(j.a,{md:4,children:h.map((function(e){return Object(d.jsx)(l.a,{children:Object(d.jsx)(O.a,{disabled:t===e,onClick:function(){n(e)},children:e})},e)}))})},p=n(32),v=n.n(p),x=(n(55),function(e){var t=e.low,n=e.high,i=e.setLow,r=e.setHigh;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"red",children:Object(d.jsx)(v.a,{min:0,max:200,value:-t,onChange:function(e){return i(-e)}})}),Object(d.jsx)("div",{className:"blue",children:Object(d.jsx)(v.a,{min:0,max:200,value:n,onChange:function(e){return r(e)}})}),Object(d.jsx)(O.a,{onClick:function(){r(100),i(-100)},children:"Reset"})]})}),g=n(25),w=n(79),y=function(e){if("0"===e[0]){if("1"===e[1])return"Alabama";if("2"===e[1])return"Alaska";if("4"===e[1])return"Arizona";if("5"===e[1])return"Arkansas";if("6"===e[1])return"California";if("8"===e[1])return"Colorado";if("9"===e[1])return"Connecticut"}else if("1"===e[0]){if("0"===e[1])return"Delaware";if("2"===e[1])return"Florida";if("3"===e[1])return"Georgia";if("5"===e[1])return"Hawaii";if("6"===e[1])return"Idaho";if("7"===e[1])return"Illinois";if("8"===e[1])return"Indiana";if("9"===e[1])return"Iowa"}else if("2"===e[0]){if("0"===e[1])return"Kansas";if("1"===e[1])return"Kentucky";if("2"===e[1])return"Louisiana";if("3"===e[1])return"Maine";if("4"===e[1])return"Maryland";if("5"===e[1])return"Massachusetts";if("6"===e[1])return"Michigan";if("7"===e[1])return"Minnesota";if("8"===e[1])return"Mississippi";if("9"===e[1])return"Missouri"}else if("3"===e[0]){if("0"===e[1])return"Montana";if("1"===e[1])return"Nebraska";if("2"===e[1])return"Nevada";if("3"===e[1])return"New Hampshire";if("4"===e[1])return"New Jersey";if("5"===e[1])return"New Mexico";if("6"===e[1])return"New York";if("7"===e[1])return"North Carolina";if("8"===e[1])return"North Dakota";if("9"===e[1])return"Ohio"}else if("4"===e[0]){if("0"===e[1])return"Oklahoma";if("1"===e[1])return"Oregon";if("2"===e[1])return"Pennsylvania";if("4"===e[1])return"Rhode Island";if("5"===e[1])return"South Carolina";if("6"===e[1])return"South Dakota";if("7"===e[1])return"Tennessee";if("8"===e[1])return"Texas";if("9"===e[1])return"Utah"}else if("5"===e[0]){if("0"===e[1])return"Vermont";if("1"===e[1])return"Virginia";if("3"===e[1])return"Washington";if("4"===e[1])return"West Virginia";if("5"===e[1])return"Wisconsin";if("6"===e[1])return"Wyoming"}return"".concat(e[0]).concat(e[1])},C=function(e,t){if(e)return e.find((function(e){return parseInt(e.fips)===parseInt(t)}))},M=function(e,t){if(e){if("0"===t[0]){if("1"===t[1])return C(e[0].alabama,t)}else if("1"===t[0]){if("9"===t[1])return C(e[0].iowa,t)}else if("2"===t[0]){if("2"===t[1])return C(e[0].louisiana,t)}else if("5"===t[0]&&"1"===t[1])return C(e[0].virginia,t);return C(e[0].allPresidential,t)}},N=function(e){if(e){if(e.data)return e.data;if(e.REPUBLICAN&&e.DEMOCRAT){var t=parseInt(e.REPUBLICAN),n=parseInt(e.DEMOCRAT);return 100*(n-t)/(n+t)}}},S={hover:{fill:"#F53",outline:"none"},pressed:{fill:"#E42",outline:"none"}},k=function(e){var t=e.setTooltipContent,n=e.low,i=e.high,r=e.position,a=e.handleMoveEnd,c=e.stateData,s=e.showShifts,u=e.limitState,f=void 0!==u&&u,l=Object(w.a)().domain([n,0,i]).range(["red","white","blue"]),j=Object(o.a)(c,2),b=j[0],O=j[1];return Object(d.jsx)(g.ComposableMap,{"data-tip":"",projection:"geoAlbersUsa",children:Object(d.jsx)(g.ZoomableGroup,{zoom:r.zoom,center:r.coordinates,onMoveEnd:a,children:Object(d.jsx)(g.Geographies,{geography:"https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json",children:function(e){return e.geographies.map((function(e){var n=e.properties.name,i=y(e.id);if(!f||i===f){var r=M(b,e.id),a=M(O,e.id),c=s?r&&a?N(a)-N(r):void 0:r?N(r):void 0;return Object(d.jsx)(g.Geography,{geography:e,fill:l(c||"#0000FF"),onMouseEnter:function(){t("".concat(n,", ").concat(i," : ").concat(c&&c))},onMouseLeave:function(){t("")},style:S},e.rsmKey)}}))}})})})},P=function(e){var t=e.setTooltipContent,n=Object(i.useState)({}),r=Object(o.a)(n,2),a=r[0],c=r[1],s=Object(i.useState)({}),O=Object(o.a)(s,2),h=O[0],p=O[1],v=Object(i.useState)(!0),g=Object(o.a)(v,2),w=g[0],y=g[1],C=Object(i.useState)(1948),M=Object(o.a)(C,2),N=M[0],S=M[1],P=Object(i.useState)(1952),I=Object(o.a)(P,2),A=I[0],E=I[1],z=Object(i.useState)(-100),T=Object(o.a)(z,2),L=T[0],R=T[1],D=Object(i.useState)(100),F=Object(o.a)(D,2),V=F[0],Y=F[1];Object(i.useEffect)((function(){if(w&&N>A){var e=N;S(A),E(e)}}),[N,A,w]),Object(i.useEffect)((function(){c([{}]),p([{}]),Object(f.a)("Alabama/President/".concat(N,".csv")).then((function(e){c((function(t){return[Object(u.a)(Object(u.a)({},t[0]),{},{alabama:e})]}))})),N!==A&&Object(f.a)("Alabama/President/".concat(A,".csv")).then((function(e){p((function(t){return[Object(u.a)(Object(u.a)({},t[0]),{},{alabama:e})]}))})),Object(f.a)("Iowa/President/".concat(N,".csv")).then((function(e){c((function(t){return[Object(u.a)(Object(u.a)({},t[0]),{},{iowa:e})]}))})),N!==A&&Object(f.a)("Iowa/President/".concat(A,".csv")).then((function(e){p((function(t){return[Object(u.a)(Object(u.a)({},t[0]),{},{iowa:e})]}))})),Object(f.a)("Louisiana/President/".concat(N,".csv")).then((function(e){c((function(t){return[Object(u.a)(Object(u.a)({},t[0]),{},{louisiana:e})]}))})),N!==A&&Object(f.a)("Louisiana/President/".concat(A,".csv")).then((function(e){p((function(t){return[Object(u.a)(Object(u.a)({},t[0]),{},{louisiana:e})]}))})),Object(f.a)("Virginia/President/".concat(N,".csv")).then((function(e){c((function(t){return[Object(u.a)(Object(u.a)({},t[0]),{},{virginia:e})]}))})),N!==A&&Object(f.a)("Virginia/President/".concat(A,".csv")).then((function(e){p((function(t){return[Object(u.a)(Object(u.a)({},t[0]),{},{virginia:e})]}))})),Object(f.a)("President2000s/".concat(N,".csv")).then((function(e){c((function(t){return[Object(u.a)(Object(u.a)({},t[0]),{},{allPresidential:e})]}))})),N!==A&&Object(f.a)("President2000s/".concat(A,".csv")).then((function(e){p((function(t){return[Object(u.a)(Object(u.a)({},t[0]),{},{allPresidential:e})]}))}))}),[N,A]);var G=Object(i.useState)({coordinates:[0,0],zoom:1}),H=Object(o.a)(G,2),U=H[0],W=H[1];var B=[a,h];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(l.a,{className:"layoutRow",style:{overflow:"hidden"},children:[Object(d.jsx)(j.a,{md:10,style:{outlineColor:"red",outline:"1px",overflow:"hidden"},className:"layoutColumn",children:Object(d.jsx)(k,{setTooltipContent:t,low:L,high:V,position:U,handleMoveEnd:function(e){W(e)},stateData:B,showShifts:w,limitState:!1})}),Object(d.jsxs)(j.a,{md:2,style:{backgroundColor:"lightgrey",overflowY:"auto"},className:"layoutColumn",children:[Object(d.jsxs)("h2",{style:{textAlign:"center",paddingTop:"25px"},children:[N," ",w&&"- ".concat(A)]}),Object(d.jsx)(b.a,{checked:w,onChange:function(){return y(!w)},children:"Shifts?"}),Object(d.jsx)(x,{low:L,high:V,setLow:R,setHigh:Y}),Object(d.jsx)("button",{onClick:function(){U.zoom>=4||W((function(e){return Object(u.a)(Object(u.a)({},e),{},{zoom:2*e.zoom})}))},children:Object(d.jsx)("i",{className:"fas fa-plus"})}),Object(d.jsx)("button",{onClick:function(){U.zoom<=1||W((function(e){return Object(u.a)(Object(u.a)({},e),{},{zoom:e.zoom/2})}))},children:Object(d.jsx)("i",{className:"fas fa-minus"})}),Object(d.jsx)("div",{style:{paddingTop:"10px"}}),Object(d.jsxs)(l.a,{className:"layoutRow",children:[Object(d.jsx)(m,{year:N,setYear:S}),w&&Object(d.jsx)(m,{year:A,setYear:E})]})]})]})})};var I=function(){var e=Object(i.useState)(""),t=Object(o.a)(e,2),n=t[0],r=t[1];return Object(d.jsxs)("div",{style:{overflow:"hidden"},children:[Object(d.jsx)(P,{setTooltipContent:r}),Object(d.jsx)(s.a,{delayShow:500,children:n})]})};n(57),n(58),n(62);c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(I,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.adcff41e.chunk.js.map