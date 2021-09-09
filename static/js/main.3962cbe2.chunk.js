(this.webpackJsonppartisan_patterns=this.webpackJsonppartisan_patterns||[]).push([[0],{47:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),i=n(36),r=n.n(i),s=(n(47),n(8)),j=n(37),a=n(21),l=n(72),b=n(69),h=n(38),O=n(71),d=n(1),u=function(e){var t=e.setYear;return Object(d.jsx)(O.a,{children:Object(d.jsxs)(O.a.Group,{children:[Object(d.jsx)(O.a.Label,{children:"Custom select"}),Object(d.jsxs)(O.a.Control,{as:"select",custom:!0,onChange:function(e){t(e.target.value)},children:[Object(d.jsx)("option",{children:"1948 - 1952"}),Object(d.jsx)("option",{children:"1952 - 1956"}),Object(d.jsx)("option",{children:"1956 - 1960"}),Object(d.jsx)("option",{children:"1960 - 1964"}),Object(d.jsx)("option",{children:"1964 - 1972"}),Object(d.jsx)("option",{children:"1972 - 1976"}),Object(d.jsx)("option",{children:"1976 - 1980"}),Object(d.jsx)("option",{children:"1980 - 1984"}),Object(d.jsx)("option",{children:"1984 - 1988"}),Object(d.jsx)("option",{children:"1988 - 1992"}),Object(d.jsx)("option",{children:"1992 - 1996"}),Object(d.jsx)("option",{children:"1996 - 2000"}),Object(d.jsx)("option",{children:"2000 - 2004"}),Object(d.jsx)("option",{children:"2004 - 2008"}),Object(d.jsx)("option",{children:"2008 - 2012"}),Object(d.jsx)("option",{children:"2012 - 2016"}),Object(d.jsx)("option",{children:"2016 - 2020"})]})]})})},x=function(e){var t=e.low,n=e.high,o=e.setLow,c=e.setHigh;return Object(d.jsxs)(O.a,{children:[Object(d.jsxs)(O.a.Group,{children:[Object(d.jsx)(O.a.Label,{children:"Low"}),Object(d.jsx)(O.a.Control,{type:"number",defaultValue:t,onChange:function(e){return o(e.target.value)}})]}),Object(d.jsxs)(O.a.Group,{children:[Object(d.jsx)(O.a.Label,{children:"High"}),Object(d.jsx)(O.a.Control,{type:"number",defaultValue:n,onChange:function(e){return c(e.target.value)}})]})]})},p=n(22),f=n(70),g=function(e){var t=e.setTooltipContent,n=e.low,o=e.high,c=e.position,i=e.handleMoveEnd,r=e.stateData,j=Object(f.a)().domain([n,0,o]).range(["red","white","blue"]),a=Object(s.a)(r,2),l=a[0],b=a[1];return Object(d.jsx)(p.ComposableMap,{"data-tip":"",projection:"geoAlbersUsa",children:Object(d.jsx)(p.ZoomableGroup,{zoom:c.zoom,center:c.coordinates,onMoveEnd:i,children:Object(d.jsx)(p.Geographies,{geography:"https://cdn.jsdelivr.net/npm/us-atlas@3/counties-10m.json",children:function(e){return e.geographies.map((function(e){var n=l.find((function(t){return parseInt(t.fips)===parseInt(e.id)}))||b.find((function(t){return parseInt(t.fips)===parseInt(e.id)}));return Object(d.jsx)(p.Geography,{geography:e,fill:j(n?n.X:"#0000FF"),onMouseEnter:function(){t(""),t("".concat(e.properties.name," : ").concat(n&&n.X))},onMouseLeave:function(){t("")},style:{hover:{fill:"#F53",outline:"none"},pressed:{fill:"#E42",outline:"none"}}},e.rsmKey)}))}})})})},m=function(e){var t=e.setTooltipContent,n=Object(o.useState)([]),c=Object(s.a)(n,2),i=c[0],r=c[1],j=Object(o.useState)([]),O=Object(s.a)(j,2),p=O[0],f=O[1],m=Object(o.useState)("1948 - 1952"),v=Object(s.a)(m,2),w=v[0],C=v[1],y=Object(o.useState)(-100),z=Object(s.a)(y,2),k=z[0],S=z[1],E=Object(o.useState)(100),L=Object(s.a)(E,2),M=L[0],G=L[1];Object(o.useEffect)((function(){r([]),f([]),Object(l.a)("Alabama/President/".concat(w,".csv")).then((function(e){r(e)})),Object(l.a)("Iowa/President/".concat(w,".csv")).then((function(e){f(e)}))}),[w]);var I=Object(o.useState)({coordinates:[0,0],zoom:1}),F=Object(s.a)(I,2),T=F[0],A=F[1];var B=[i,p];return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(b.a,{children:[Object(d.jsx)(h.a,{md:10,style:{outlineColor:"red",outline:"1px"},children:Object(d.jsx)(g,{setTooltipContent:t,low:k,high:M,position:T,handleMoveEnd:function(e){A(e)},stateData:B})}),Object(d.jsxs)(h.a,{md:2,children:[Object(d.jsx)("h2",{style:{textAlign:"center"},children:w}),Object(d.jsx)(u,{setYear:C}),Object(d.jsx)(x,{low:k,high:M,setLow:S,setHigh:G}),Object(d.jsx)(b.a,{children:Object(d.jsx)("button",{onClick:function(){T.zoom>=4||A((function(e){return Object(a.a)(Object(a.a)({},e),{},{zoom:2*e.zoom})}))},children:Object(d.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"3",children:[Object(d.jsx)("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),Object(d.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})]})})}),Object(d.jsx)(b.a,{children:Object(d.jsx)("button",{onClick:function(){T.zoom<=1||A((function(e){return Object(a.a)(Object(a.a)({},e),{},{zoom:e.zoom/2})}))},children:Object(d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:"3",children:Object(d.jsx)("line",{x1:"5",y1:"12",x2:"19",y2:"12"})})})})]})]})})};var v=function(){var e=Object(o.useState)(""),t=Object(s.a)(e,2),n=t[0],c=t[1];return Object(d.jsxs)("div",{children:[Object(d.jsx)(m,{setTooltipContent:c}),Object(d.jsx)(j.a,{children:n})]})};n(54);r.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(v,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.3962cbe2.chunk.js.map