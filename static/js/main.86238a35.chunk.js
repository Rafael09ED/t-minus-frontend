(this["webpackJsonpt-minus-frontend"]=this["webpackJsonpt-minus-frontend"]||[]).push([[0],{103:function(e,t,a){e.exports=a(134)},108:function(e,t,a){},134:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(9),c=a.n(l),o=a(28),m=a(11),i=(a(108),a(162)),u=a(166),s=a(164),p=a(48),E=r.a.forwardRef((function(e,t){return r.a.createElement(o.b,Object.assign({innerRef:t},e))})),f=Object(i.a)((function(e){return{button:{margin:e.spacing(1)},input:{display:"none"}}}));var h=function(){var e=f();return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(s.a,{maxWidth:"sm"},r.a.createElement(p.a,{variant:"h2",component:"h3"},"t-min.us"),r.a.createElement("br",null),r.a.createElement(p.a,{variant:"body1"},"A tool for generating countdowns"),r.a.createElement("br",null),r.a.createElement(u.a,{component:E,to:"/list",variant:"contained",className:e.button},"List"),r.a.createElement(u.a,{component:E,to:"/create",variant:"contained",color:"primary",className:e.button},"Create")))},d=a(167);var b=function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(s.a,{maxWidth:"sm"},r.a.createElement(p.a,{variant:"h4"},"About ",r.a.createElement("span",{style:{whiteSpace:"nowrap"}},"t-min.us")),r.a.createElement("br",null),r.a.createElement(p.a,{variant:"body1"},"t-min.us is the personal project of ",r.a.createElement(d.a,{href:"http://rafaeldejesus.com"},"Rafael DeJesus"),", a CS student at Clemson University."),r.a.createElement(p.a,{variant:"body1"},"The site is inspired from the ",r.a.createElement(d.a,{href:"http://archive.is/QOHKV"},'"Survivor 2299" Fallout release hoax')," where a countdown hinting at a release annoucement to the Fallout video game series.  As the time ticked down, the website gave different messages causing hysteria as fans tried to figure out what the messages meant."),r.a.createElement(p.a,{variant:"body1"},"This site is a work in progress. Feel free to contact me with any feedback."),r.a.createElement(p.a,{variant:"body1"},r.a.createElement(d.a,{href:"https://github.com/Rafael09ED/t-minus-frontend"},"Github"))))},v=a(27),g=a(21),y=a.n(g),w=a(81),j=a.n(w),k=a(59),x=a.n(k),O="http://t-min-dot-us.herokuapp.com",S=a(168);j()(y.a);var C=Object(i.a)((function(e){return{paper:{padding:e.spacing(1,2)}}}));var N=function(e){var t=C(),a=r.a.useState(r.a.createElement("p",null,"loading...")),n=Object(v.a)(a,2),l=n[0],c=n[1],m=r.a.useState({}),i=Object(v.a)(m,2),u=i[0],s=i[1],E=r.a.useState(y()()),f=Object(v.a)(E,2),h=f[0],d=f[1];return r.a.useEffect((function(){(function(e){var t=O+"/countdown/"+e;return x.a.get(t)})(e.match.params.id).then((function(e){s(e.data)}))}),[e.match.params.id,e.history.length]),r.a.useEffect((function(){c((function(e){var t=y()(u.time),a=h.diff(t),n=y.a.duration(a).format("y [years], w [weeks], d [days], h [hours], m [minutes], s [seconds]"),l=!1;return"-"===n[0]&&(l=!0,n=n.substring(1)),r.a.createElement("div",{className:"countdown_timer"},r.a.createElement("br",null),r.a.createElement(p.a,{variant:"h2"},"T",l?" - ":" + ",n.replace(/,/gi,",/").split("/").map((function(e){return r.a.createElement("span",{style:{whiteSpace:"nowrap"}},e)}))),r.a.createElement("p",null,u.event_text))}))}),[u,h]),r.a.useEffect((function(){setTimeout((function(){d(y()())}),1e3-Date.now()%1e3)}),[h]),r.a.createElement("div",{className:"cdtp_header"},r.a.createElement(S.a,{elevation:0,className:t.paper,style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(p.a,{className:"countdown_timer_name"},u.name),r.a.createElement(p.a,null,r.a.createElement(o.b,{to:"/",style:{textDecoration:"none",color:"grey"}},"t-min.us"))),l)},D=a(56),W=a(63),L=a(172),R=a(173);function T(e){return{name:e.name,key:e.key,time:e.time.format()}}var _=function(e){var t=r.a.useState({name:"",time:y()(),key:"key"}),a=Object(v.a)(t,2),n=a[0],l=a[1],c=r.a.useState(),o=Object(v.a)(c,2),i=o[0],s=o[1],p=function(e,t){var a=Object(W.a)(Object(W.a)({},n),{},Object(D.a)({},e,t));l(a)},E=function(e){var t=e.data.id;s(null),console.log(e.data);var a="/-/"+t;s(r.a.createElement(m.a,{to:a}))},f=function(e){e.response?s(r.a.createElement("div",null,r.a.createElement("h3",null,"Errors:"),r.a.createElement("pre",null,JSON.stringify(e.response.data,null,2)))):s(r.a.createElement("div",null,r.a.createElement("h3",null,"Errors:"),r.a.createElement("p",null,"No Connection To Server")))},h=function(e){var t;e&&e.preventDefault(),console.log(T(n)),(t=T(n),x.a.post("http://t-min-dot-us.herokuapp.com/countdown/",t)).then(E).catch(f)};return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:h},r.a.createElement(R.a,{margin:"normal",label:"Title",value:n.name,onChange:function(e){return p("name",e.target.value)},fullWidth:!0}),r.a.createElement("br",null),r.a.createElement(L.a,{margin:"normal",label:"Epoch",format:"MM/DD/YYYY @ hh:mm a",value:n.time,onChange:function(e){return p("time",e)},fullWidth:!0}),r.a.createElement("br",null),i,r.a.createElement(u.a,{type:"submit",variant:"contained",color:"primary",onClick:h},"Submit")))};var A=function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(s.a,{maxWidth:"sm"},r.a.createElement(p.a,{variant:"h4",component:"h3"},"Create Countdown"),r.a.createElement(_,null)))},B=a(170),F=a(171),J=a(169);var Y=function(e){var t=r.a.useState(r.a.createElement("p",null,"loading...")),a=Object(v.a)(t,2),n=a[0],l=a[1];return r.a.useEffect((function(){x.a.get("http://t-min-dot-us.herokuapp.com/countdown/").then((function(t){var a=t.data.map((function(t){return r.a.createElement(B.a,{button:!0,onClick:function(a){e.history.push("/-/".concat(t.id))}},r.a.createElement(F.a,{key:t.id,primary:t.name,secondary:y()(t.time).format("LLLL")}))}));l(r.a.createElement(J.a,{dense:!0},a))}))}),[e.history,e.history.length]),r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement(s.a,{maxWidth:"sm"},r.a.createElement(p.a,{variant:"h4"},"Latest Countdowns"),r.a.createElement("br",null),n))},z=a(175),M=a(64),G=a.n(M),H=a(47),I=r.a.forwardRef((function(e,t){return r.a.createElement(o.b,Object.assign({innerRef:t},e))})),K=[{url:"about",name:"About"},{url:"list",name:"Countdowns"},{url:"create",name:"Create"}],P=Object(i.a)((function(e){return{root:{justifyContent:"center",flexWrap:"wrap"},paper:{padding:e.spacing(1,2)}}}));function Q(e){return r.a.createElement(d.a,{component:I,color:"inherit",to:e.url},e.name)}var U=function(e){var t=P(),a=r.a.useState([]),n=Object(v.a)(a,2),l=n[0],c=n[1];return r.a.useEffect((function(){for(var t=[],a=0;a<K.length;a++){var n=K[a];e.match.params.path===n.url&&t.push(Q(n))}c(t)}),[e.match.params.path]),"-"===e.match.params.path?null:r.a.createElement("header",{style:{display:"flex",justifyContent:"space-between"}},r.a.createElement(S.a,{elevation:0,className:t.paper},r.a.createElement(H.Breakpoint,{small:!0,up:!0},r.a.createElement(z.a,{separator:r.a.createElement(G.a,{fontSize:"small"}),"aria-label":"breadcrumb"},r.a.createElement(d.a,{component:I,color:"inherit",to:"/"},"t-min.us"),l)),r.a.createElement(H.Breakpoint,{xsmall:!0,only:!0},r.a.createElement(z.a,{separator:r.a.createElement(G.a,{fontSize:"small"}),"aria-label":"breadcrumb"},r.a.createElement(d.a,{component:I,color:"inherit",to:"/"},"t-min.us")))),r.a.createElement("nav",null,r.a.createElement(S.a,{elevation:0,className:t.paper},r.a.createElement(z.a,{separator:r.a.createElement("div",null),"aria-label":"breadcrumb"},function(){for(var e=[],t=0;t<K.length;t++){var a=K[t];e.push(Q(a))}return e}()))))};var V=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(m.b,{path:"/",exact:!0,component:U}),r.a.createElement(m.b,{path:"/:path",component:U}),r.a.createElement(m.b,{path:"/",exact:!0,component:h}),r.a.createElement(m.b,{path:"/list",exact:!0,component:Y}),r.a.createElement(m.b,{path:"/about",exact:!0,component:b}),r.a.createElement(m.b,{path:"/create",exact:!0,component:A}),r.a.createElement(m.b,{path:"/-/:id",exact:!0,component:N}))},q=a(13),X=a(84),Z=r.a.createElement(o.a,null,r.a.createElement(q.a,{utils:X.a},r.a.createElement(H.BreakpointProvider,null,r.a.createElement(m.b,{component:V}))));c.a.render(Z,document.getElementById("root"))}},[[103,1,2]]]);
//# sourceMappingURL=main.86238a35.chunk.js.map