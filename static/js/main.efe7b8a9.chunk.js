(this.webpackJsonppartisan_patterns=this.webpackJsonppartisan_patterns||[]).push([[0],{47:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(36),i=n.n(o),r=(n(47),n(4)),s=n(37),u=n(3),j=n(80),l=n(78),b=n(77),f=n(38),d=(n(50),n(81)),O=n(1),h=[1948,1952,1956,1960,1964,1968,1972,1976,1980,1984,1988,1992,1996,2e3,2004,2008,2012,2016,2020],m=function(e){e.year;var t=e.setYear;return Object(O.jsx)(b.a,{md:4,children:h.map((function(e){return Object(O.jsx)(l.a,{children:Object(O.jsx)(d.a,{onClick:function(){t(e)},children:e})},e)}))})},p=n(32),x=n.n(p),g=(n(55),function(e){var t=e.low,n=e.high,a=e.setLow,c=e.setHigh;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("div",{className:"red",children:Object(O.jsx)(x.a,{min:0,max:200,value:-t,onChange:function(e){return a(-e)}})}),Object(O.jsx)("div",{className:"blue",children:Object(O.jsx)(x.a,{min:0,max:200,value:n,onChange:function(e){return c(e)}})}),Object(O.jsx)(d.a,{onClick:function(){c(100),a(-100)},children:"Reset"})]})}),v=n(25),w=n(79),C=function(e){if("0"===e[0]){if("1"===e[1])return"Alabama";if("2"===e[1])return"Alaska";if("4"===e[1])return"Arizona";if("5"===e[1])return"Arkansas";if("6"===e[1])return"California";if("8"===e[1])return"Colorado";if("9"===e[1])return"Connecticut"}else if("1"===e[0]){if("0"===e[1])return"Delaware";if("2"===e[1])return"Florida";if("3"===e[1])return"Georgia";if("5"===e[1])return"Hawaii";if("6"===e[1])return"Idaho";if("7"===e[1])return"Illinois";if("8"===e[1])return"Indiana";if("9"===e[1])return"Iowa"}else if("2"===e[0]){if("2"===e[1])return"Louisiana";if("8"===e[1])return"Mississippi"}return"".concat(e[0]).concat(e[1])},y=function(e,t){if(e)return e.find((function(e){return parseInt(e.fips)===parseInt(t)}))},S=function(e,t){if(e)if("0"===t[0]){if("1"===t[1])return y(e[0].alabama,t)}else if("1"===t[0]&&"9"===t[1])return y(e[0].iowa,t)},k={hover:{fill:"#F53",outline:"none"},pressed:{fill:"#E42",outline:"none"}},z=function(e){var t=e.setTooltipContent,n=e.low,a=e.high,c=e.position,o=e.handleMoveEnd,i=e.stateData,s=e.showShifts,u=Object(w.a)().domain([n,0,a]).range(["red","white","blue"]),j=Object(r.a)(i,2),l=j[0],b=j[1];return Object(O.jsx)(v.ComposableMap,{"data-tip":"",projection:"geoAlbersUsa",children:Object(O.jsx)(v.ZoomableGroup,{zoom:c.zoom,center:c.coordinates,onMoveEnd:o,children:Object(O.jsx)(v.Geographies,{geography:"https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json",children:function(e){return e.geographies.map((function(e){var n=e.properties.name,a=C(e.id),c=S(l,e.id),o=S(b,e.id),i=s?c&&o?o.data-c.data:void 0:c?c.data:void 0;return Object(O.jsx)(v.Geography,{geography:e,fill:u(i||"#0000FF"),onMouseEnter:function(){t(""),t("".concat(n,", ").concat(a," : ").concat(i&&i))},onMouseLeave:function(){t("")},style:k},e.rsmKey)}))}})})})},I=function(e){var t=e.setTooltipContent,n=Object(a.useState)({}),c=Object(r.a)(n,2),o=c[0],i=c[1],s=Object(a.useState)({}),d=Object(r.a)(s,2),h=d[0],p=d[1],x=Object(a.useState)(!0),v=Object(r.a)(x,2),w=v[0],C=v[1],y=Object(a.useState)("1948"),S=Object(r.a)(y,2),k=S[0],I=S[1],A=Object(a.useState)("1952"),M=Object(r.a)(A,2),N=M[0],E=M[1],F=Object(a.useState)(-100),T=Object(r.a)(F,2),G=T[0],L=T[1],P=Object(a.useState)(100),D=Object(r.a)(P,2),H=D[0],R=D[1];Object(a.useEffect)((function(){i([{}]),p([{}]),Object(j.a)("Alabama/President/".concat(k,".csv")).then((function(e){i((function(t){return[Object(u.a)(Object(u.a)({},t[0]),{},{alabama:e})]}))})),k!==N&&Object(j.a)("Alabama/President/".concat(N,".csv")).then((function(e){p((function(t){return[Object(u.a)(Object(u.a)({},t[0]),{},{alabama:e})]}))})),Object(j.a)("Iowa/President/".concat(k,".csv")).then((function(e){i((function(t){return[Object(u.a)(Object(u.a)({},t[0]),{},{iowa:e})]}))})),k!==N&&Object(j.a)("Iowa/President/".concat(N,".csv")).then((function(e){p((function(t){return[Object(u.a)(Object(u.a)({},t[0]),{},{iowa:e})]}))}))}),[k,N]);var Y=Object(a.useState)({coordinates:[0,0],zoom:1}),J=Object(r.a)(Y,2),_=J[0],B=J[1];var K=[o,h];return Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(l.a,{className:"layoutRow",children:[Object(O.jsx)(b.a,{md:10,style:{outlineColor:"red",outline:"1px"},className:"layoutColumn",children:Object(O.jsx)(z,{setTooltipContent:t,low:G,high:H,position:_,handleMoveEnd:function(e){B(e)},stateData:K,showShifts:w})}),Object(O.jsxs)(b.a,{md:2,style:{backgroundColor:"lightgrey"},className:"layoutColumn",children:[Object(O.jsxs)("h2",{style:{textAlign:"center",paddingTop:"25px"},children:[k," ",w&&"- ".concat(N)]}),Object(O.jsx)(f.a,{checked:w,onChange:function(){return C(!w)},children:"Shifts?"}),Object(O.jsx)(g,{low:G,high:H,setLow:L,setHigh:R}),Object(O.jsx)("button",{onClick:function(){_.zoom>=4||B((function(e){return Object(u.a)(Object(u.a)({},e),{},{zoom:2*e.zoom})}))},children:Object(O.jsx)("i",{className:"fas fa-plus"})}),Object(O.jsx)("button",{onClick:function(){_.zoom<=1||B((function(e){return Object(u.a)(Object(u.a)({},e),{},{zoom:e.zoom/2})}))},children:Object(O.jsx)("i",{className:"fas fa-minus"})}),Object(O.jsx)("div",{style:{paddingTop:"10px"}}),Object(O.jsxs)(l.a,{className:"layoutRow",children:[Object(O.jsx)(m,{year:k,setYear:I}),w&&Object(O.jsx)(m,{year:N,setYear:E})]})]})]})})};var A=function(){var e=Object(a.useState)(""),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)(I,{setTooltipContent:c}),Object(O.jsx)(s.a,{children:n})]})};n(57),n(58),n(62);i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(A,{})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.efe7b8a9.chunk.js.map