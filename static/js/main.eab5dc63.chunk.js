(this.webpackJsonppartisan_patterns=this.webpackJsonppartisan_patterns||[]).push([[0],{47:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(36),o=n.n(i),c=(n(47),n(4)),s=n(37),u=n(3),f=n(80),j=n(78),l=n(77),b=n(38),d=(n(50),n(81)),O=n(1),h=[1948,1952,1956,1960,1964,1968,1972,1976,1980,1984,1988,1992,1996,2e3,2004,2008,2012,2016,2020],m=function(e){var t=e.year,n=e.setYear;return Object(O.jsx)(l.a,{md:4,children:h.map((function(e){return Object(O.jsx)(j.a,{children:Object(O.jsx)(d.a,{disabled:t===e,onClick:function(){n(e)},children:e})},e)}))})},p=n(32),x=n.n(p),g=(n(55),function(e){var t=e.low,n=e.high,r=e.setLow,a=e.setHigh;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"red",children:Object(O.jsx)(x.a,{min:0,max:200,value:-t,onChange:function(e){return r(-e)}})}),Object(O.jsx)("div",{className:"blue",children:Object(O.jsx)(x.a,{min:0,max:200,value:n,onChange:function(e){return a(e)}})}),Object(O.jsx)(d.a,{onClick:function(){a(100),r(-100)},children:"Reset"})]})}),v=n(25),w=n(79),y=function(e){if("0"===e[0]){if("1"===e[1])return"Alabama";if("2"===e[1])return"Alaska";if("4"===e[1])return"Arizona";if("5"===e[1])return"Arkansas";if("6"===e[1])return"California";if("8"===e[1])return"Colorado";if("9"===e[1])return"Connecticut"}else if("1"===e[0]){if("0"===e[1])return"Delaware";if("2"===e[1])return"Florida";if("3"===e[1])return"Georgia";if("5"===e[1])return"Hawaii";if("6"===e[1])return"Idaho";if("7"===e[1])return"Illinois";if("8"===e[1])return"Indiana";if("9"===e[1])return"Iowa"}else if("2"===e[0]){if("0"===e[1])return"Kansas";if("1"===e[1])return"Kentucky";if("2"===e[1])return"Louisiana";if("3"===e[1])return"Maine";if("4"===e[1])return"Maryland";if("5"===e[1])return"Massachusetts";if("6"===e[1])return"Michigan";if("7"===e[1])return"Minnesota";if("8"===e[1])return"Mississippi";if("9"===e[1])return"Missouri"}else if("3"===e[0]){if("0"===e[1])return"Montana";if("1"===e[1])return"Nebraska";if("2"===e[1])return"Nevada";if("3"===e[1])return"New Hampshire";if("4"===e[1])return"New Jersey";if("5"===e[1])return"New Mexico";if("6"===e[1])return"New York";if("7"===e[1])return"North Carolina";if("8"===e[1])return"North Dakota";if("9"===e[1])return"Ohio"}else if("4"===e[0]){if("0"===e[1])return"Oklahoma";if("1"===e[1])return"Oregon";if("2"===e[1])return"Pennsylvania";if("4"===e[1])return"Rhode Island";if("5"===e[1])return"South Carolina";if("6"===e[1])return"South Dakota";if("7"===e[1])return"Tennessee";if("8"===e[1])return"Texas";if("9"===e[1])return"Utah"}else if("5"===e[0]){if("0"===e[1])return"Vermont";if("1"===e[1])return"Virginia";if("3"===e[1])return"Washington";if("4"===e[1])return"West Virginia";if("5"===e[1])return"Wisconsin";if("6"===e[1])return"Wyoming"}return"".concat(e[0]).concat(e[1])},C=function(e,t){if(e)return e.find((function(e){return parseInt(e.fips)===parseInt(t)}))},k=function(e,t){if(e)if("0"===t[0]){if("1"===t[1])return C(e[0].alabama,t)}else if("1"===t[0]&&"9"===t[1])return C(e[0].iowa,t)},M={hover:{fill:"#F53",outline:"none"},pressed:{fill:"#E42",outline:"none"}},N=function(e){var t=e.setTooltipContent,n=e.low,r=e.high,a=e.position,i=e.handleMoveEnd,o=e.stateData,s=e.showShifts,u=Object(w.a)().domain([n,0,r]).range(["red","white","blue"]),f=Object(c.a)(o,2),j=f[0],l=f[1];return Object(O.jsx)(v.ComposableMap,{"data-tip":"",projection:"geoAlbersUsa",children:Object(O.jsx)(v.ZoomableGroup,{zoom:a.zoom,center:a.coordinates,onMoveEnd:i,children:Object(O.jsx)(v.Geographies,{geography:"https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json",children:function(e){return e.geographies.map((function(e){var n=e.properties.name,r=y(e.id),a=k(j,e.id),i=k(l,e.id),o=s?a&&i?i.data-a.data:void 0:a?a.data:void 0;return Object(O.jsx)(v.Geography,{geography:e,fill:u(o||"#0000FF"),onMouseEnter:function(){t(""),t("".concat(n,", ").concat(r," : ").concat(o&&o))},onMouseLeave:function(){t("")},style:M},e.rsmKey)}))}})})})},S=function(e){var t=e.setTooltipContent,n=Object(r.useState)({}),a=Object(c.a)(n,2),i=a[0],o=a[1],s=Object(r.useState)({}),d=Object(c.a)(s,2),h=d[0],p=d[1],x=Object(r.useState)(!0),v=Object(c.a)(x,2),w=v[0],y=v[1],C=Object(r.useState)(1948),k=Object(c.a)(C,2),M=k[0],S=k[1],z=Object(r.useState)(1952),I=Object(c.a)(z,2),A=I[0],T=I[1],E=Object(r.useState)(-100),F=Object(c.a)(E,2),D=F[0],P=F[1],G=Object(r.useState)(100),H=Object(c.a)(G,2),L=H[0],R=H[1];Object(r.useEffect)((function(){o([{}]),p([{}]),Object(f.a)("Alabama/President/".concat(M,".csv")).then((function(e){o((function(t){return[Object(u.a)(Object(u.a)({},t[0]),{},{alabama:e})]}))})),M!==A&&Object(f.a)("Alabama/President/".concat(A,".csv")).then((function(e){p((function(t){return[Object(u.a)(Object(u.a)({},t[0]),{},{alabama:e})]}))})),Object(f.a)("Iowa/President/".concat(M,".csv")).then((function(e){o((function(t){return[Object(u.a)(Object(u.a)({},t[0]),{},{iowa:e})]}))})),M!==A&&Object(f.a)("Iowa/President/".concat(A,".csv")).then((function(e){p((function(t){return[Object(u.a)(Object(u.a)({},t[0]),{},{iowa:e})]}))}))}),[M,A]);var W=Object(r.useState)({coordinates:[0,0],zoom:1}),Y=Object(c.a)(W,2),J=Y[0],K=Y[1];var V=[i,h];return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(j.a,{className:"layoutRow",children:[Object(O.jsx)(l.a,{md:10,style:{outlineColor:"red",outline:"1px"},className:"layoutColumn",children:Object(O.jsx)(N,{setTooltipContent:t,low:D,high:L,position:J,handleMoveEnd:function(e){K(e)},stateData:V,showShifts:w})}),Object(O.jsxs)(l.a,{md:2,style:{backgroundColor:"lightgrey"},className:"layoutColumn",children:[Object(O.jsxs)("h2",{style:{textAlign:"center",paddingTop:"25px"},children:[M," ",w&&"- ".concat(A)]}),Object(O.jsx)(b.a,{checked:w,onChange:function(){return y(!w)},children:"Shifts?"}),Object(O.jsx)(g,{low:D,high:L,setLow:P,setHigh:R}),Object(O.jsx)("button",{onClick:function(){J.zoom>=4||K((function(e){return Object(u.a)(Object(u.a)({},e),{},{zoom:2*e.zoom})}))},children:Object(O.jsx)("i",{className:"fas fa-plus"})}),Object(O.jsx)("button",{onClick:function(){J.zoom<=1||K((function(e){return Object(u.a)(Object(u.a)({},e),{},{zoom:e.zoom/2})}))},children:Object(O.jsx)("i",{className:"fas fa-minus"})}),Object(O.jsx)("div",{style:{paddingTop:"10px"}}),Object(O.jsxs)(j.a,{className:"layoutRow",children:[Object(O.jsx)(m,{year:M,setYear:S}),w&&Object(O.jsx)(m,{year:A,setYear:T})]})]})]})})};var z=function(){var e=Object(r.useState)(""),t=Object(c.a)(e,2),n=t[0],a=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)(S,{setTooltipContent:a}),Object(O.jsx)(s.a,{children:n})]})};n(57),n(58),n(62);o.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(z,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.eab5dc63.chunk.js.map