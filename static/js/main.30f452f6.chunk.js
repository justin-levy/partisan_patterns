(this.webpackJsonppartisan_patterns=this.webpackJsonppartisan_patterns||[]).push([[0],{45:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n.n(c),r=n(34),s=n.n(r),i=(n(45),n(11)),j=n(35),a=n(20),l=n(21),b=n(67),h=n(69),u=n(68),O=n(1),d=function(e){var t=e.setYear;return Object(O.jsx)(u.a,{children:Object(O.jsxs)(u.a.Group,{children:[Object(O.jsx)(u.a.Label,{children:"Custom select"}),Object(O.jsxs)(u.a.Control,{as:"select",custom:!0,onChange:function(e){t(e.target.value)},children:[Object(O.jsx)("option",{children:"1948 - 1952"}),Object(O.jsx)("option",{children:"1952 - 1956"}),Object(O.jsx)("option",{children:"1956 - 1960"}),Object(O.jsx)("option",{children:"1960 - 1964"}),Object(O.jsx)("option",{children:"1964 - 1972"}),Object(O.jsx)("option",{children:"1972 - 1976"}),Object(O.jsx)("option",{children:"1976 - 1980"}),Object(O.jsx)("option",{children:"1980 - 1984"}),Object(O.jsx)("option",{children:"1984 - 1988"}),Object(O.jsx)("option",{children:"1988 - 1992"}),Object(O.jsx)("option",{children:"1992 - 1996"}),Object(O.jsx)("option",{children:"1996 - 2000"}),Object(O.jsx)("option",{children:"2000 - 2004"}),Object(O.jsx)("option",{children:"2004 - 2008"}),Object(O.jsx)("option",{children:"2008 - 2012"}),Object(O.jsx)("option",{children:"2012 - 2016"}),Object(O.jsx)("option",{children:"2016 - 2020"})]})]})})},x=function(e){var t=e.low,n=e.high,c=e.setLow,o=e.setHigh;return Object(O.jsxs)(u.a,{children:[Object(O.jsxs)(u.a.Group,{children:[Object(O.jsx)(u.a.Label,{children:"Low"}),Object(O.jsx)(u.a.Control,{type:"number",defaultValue:t,onChange:function(e){return c(e.target.value)}})]}),Object(O.jsxs)(u.a.Group,{children:[Object(O.jsx)(u.a.Label,{children:"High"}),Object(O.jsx)(u.a.Control,{type:"number",defaultValue:n,onChange:function(e){return o(e.target.value)}})]})]})},p=function(e){var t=e.setTooltipContent,n=Object(c.useState)([]),o=Object(i.a)(n,2),r=o[0],s=o[1],j=Object(c.useState)([]),u=Object(i.a)(j,2),p=u[0],f=u[1],g=Object(c.useState)("1948 - 1952"),m=Object(i.a)(g,2),v=m[0],w=m[1],y=Object(c.useState)(-100),C=Object(i.a)(y,2),z=C[0],k=C[1],S=Object(c.useState)(100),L=Object(i.a)(S,2),G=L[0],I=L[1];Object(c.useEffect)((function(){s([]),f([]),Object(h.a)("Alabama/President/".concat(v,".csv")).then((function(e){s(e)})),Object(h.a)("Iowa/President/".concat(v,".csv")).then((function(e){f(e)}))}),[v]);var E=Object(b.a)().domain([z,0,G]).range(["red","white","blue"]),M=Object(c.useState)({coordinates:[0,0],zoom:1}),F=Object(i.a)(M,2),B=F[0],H=F[1];return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(d,{setYear:w}),Object(O.jsx)(x,{low:z,high:G,setLow:k,setHigh:I}),Object(O.jsx)("div",{children:v}),Object(O.jsx)(l.ComposableMap,{"data-tip":"",projection:"geoAlbersUsa",children:Object(O.jsx)(l.ZoomableGroup,{zoom:B.zoom,center:B.coordinates,onMoveEnd:function(e){H(e)},children:Object(O.jsx)(l.Geographies,{geography:"https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json",children:function(e){return e.geographies.map((function(e){var n=r.find((function(t){return parseInt(t.fips)===parseInt(e.id)}))||p.find((function(t){return parseInt(t.fips)===parseInt(e.id)}));return Object(O.jsx)(l.Geography,{geography:e,fill:E(n?n.X:"#0000FF"),onMouseEnter:function(){t(""),t("".concat(e.properties.name," : ").concat(n&&n.X))},onMouseLeave:function(){t("")},style:{hover:{fill:"#F53",outline:"none"},pressed:{fill:"#E42",outline:"none"}}},e.rsmKey)}))}})})}),Object(O.jsxs)("div",{className:"controls",children:[Object(O.jsx)("button",{onClick:function(){B.zoom>=4||H((function(e){return Object(a.a)(Object(a.a)({},e),{},{zoom:2*e.zoom})}))},children:Object(O.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"3",children:[Object(O.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),Object(O.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})}),Object(O.jsx)("button",{onClick:function(){B.zoom<=1||H((function(e){return Object(a.a)(Object(a.a)({},e),{},{zoom:e.zoom/2})}))},children:Object(O.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"3",children:Object(O.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})})})]})]})};var f=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],o=t[1];return Object(O.jsxs)("div",{children:[Object(O.jsx)(p,{setTooltipContent:o}),Object(O.jsx)(j.a,{children:n})]})};n(52);s.a.render(Object(O.jsx)(o.a.StrictMode,{children:Object(O.jsx)(f,{})}),document.getElementById("root"))}},[[56,1,2]]]);
//# sourceMappingURL=main.30f452f6.chunk.js.map