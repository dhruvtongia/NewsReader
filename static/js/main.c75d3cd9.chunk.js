(this.webpackJsonpnewsreader=this.webpackJsonpnewsreader||[]).push([[0],{145:function(e,t,n){"use strict";n.r(t);var i=n(0),a=n(10),c=n.n(a),r=(n(86),n(14)),s=n(163),o=n(73),l=n.n(o),d=n(38),j=n.n(d),h=n(168),b=n(167),x=n(169),m=n(161),p=n(162),g=n(164),f=n(165),u=n(166),O=n(159),y=Object(O.a)({media:{height:250},border:{border:"solid"},fullHeightCard:{height:"100%"},card:{display:"flex",flexDirection:"column",justifyContent:"space-between",borderBottom:"10px solid white"},activeCard:{borderBottom:"10px solid #22289a"},grid:{display:"flex"},details:{display:"flex",justifyContent:"space-between",margin:"20px"},title:{padding:"0 16px"},cardActions:{padding:"0 16px 8px 16px",display:"flex",justifyContent:"space-between"}}),w=n(2),v=function(e){var t=e.article,n=t.description,a=t.publishedAt,c=t.source,o=t.title,l=t.url,d=t.urlToImage,j=e.activeArticle,h=e.i,b=y(),O=Object(i.useState)([]),v=Object(r.a)(O,2),C=v[0],N=v[1];return Object(i.useEffect)((function(){window.scroll(0,0),N((function(e){return Array(20).fill().map((function(t,n){return e[n]||Object(i.createRef)()}))}))}),[]),Object(i.useEffect)((function(){var e;h===j&&C[j]&&(e=C[j],window.scroll(0,e.current.offsetTop-50))}),[h,j,C]),Object(w.jsxs)(x.a,{ref:C[h],className:j===h?b.activeCard:b.card,children:[Object(w.jsxs)(m.a,{href:l,target:"_blank",children:[Object(w.jsx)(p.a,{className:b.media,image:d||"https://www.industry.gov.au/sites/default/files/August%202018/image/news-placeholder-738.png",title:o}),Object(w.jsxs)("div",{className:b.details,children:[Object(w.jsx)(s.a,{variant:"body2",color:"textSecondary",component:"h2",children:new Date(a).toDateString()}),Object(w.jsx)(s.a,{variant:"body2",color:"textSecondary",component:"h2",children:c.name})]}),Object(w.jsx)(s.a,{className:b.title,gutterBottom:!0,variant:"h5",component:"h2",children:o}),Object(w.jsx)(g.a,{children:Object(w.jsx)(s.a,{variant:"body2",color:"textSecondary",component:"p",children:n})})]}),Object(w.jsxs)(f.a,{className:b.cardActions,children:[Object(w.jsx)(u.a,{size:"small",color:"primary",href:l,children:"Learn More"}),Object(w.jsx)(s.a,{variant:"h5",color:"textSecondary",component:"h2",children:h+1})]})]})},C=Object(O.a)({card:{display:"flex",flexDirection:"column",justifyContent:"space-between",alignItems:"center",width:"100%",height:"45vh",padding:"10%",borderRadius:10,color:"white"},infoCard:{display:"flex",textAlign:"center"},container:{padding:"0 5%",width:"100%",margin:0}}),N=[{color:"#FF3131",title:"Latest News",text:"Give me the latest news"},{color:"#FF4433",title:"News by Categories",info:"Business, Entertainment, General, Health, Science, Sports, Technology",text:"Give me the latest Technology news"},{color:"#DC143C",title:"News by Terms",info:"Bitcoin, Cryptocurrency, Microsoft, Elon Musk...",text:"What's up with Cryptocurrency"}],k=function(e){var t=e.articles,n=e.activeArticle,i=C();return t.length?Object(w.jsx)(h.a,{in:!0,children:Object(w.jsx)(b.a,{className:i.container,container:!0,alignItems:"stretch",spacing:3,children:t.map((function(e,t){return Object(w.jsx)(b.a,{item:!0,xs:12,sm:6,md:4,lg:3,style:{display:"flex"},children:Object(w.jsx)(v,{activeArticle:n,i:t,article:e})})}))})}):Object(w.jsx)(h.a,{in:!0,children:Object(w.jsx)(b.a,{className:i.container,container:!0,alignItems:"stretch",spacing:6,children:N.map((function(e){return Object(w.jsx)(b.a,{item:!0,xs:12,sm:6,md:6,lg:4,className:i.infoCard,children:Object(w.jsxs)("div",{className:i.card,style:{backgroundColor:e.color},children:[Object(w.jsx)(s.a,{variant:"h5",component:"h5",children:e.title}),e.info?Object(w.jsxs)(s.a,{variant:"h6",component:"h6",children:[Object(w.jsx)("strong",{children:e.title.split(" ")[2]}),": ",Object(w.jsx)("br",{}),e.info]}):null,Object(w.jsxs)(s.a,{variant:"h6",component:"h6",children:["Try saying: ",Object(w.jsx)("br",{})," ",Object(w.jsx)("i",{children:e.text})]})]})})}))})})},T=n(11),A=Object(O.a)((function(e){return{footer:{textAlign:"center",left:0,bottom:0,color:"black",width:"100%",display:"flex",alignItems:"center",justifyContent:"center",height:"120px"},link:{textDecoration:"none",color:"rgba(21, 101, 192)"},image:{height:"50%",width:"50%",borderRadius:"50%",marginLeft:20},card:Object(T.a)({display:"flex",justifyContent:"center",alignItems:"center",width:"50%",padding:"3%",borderRadius:10,color:"white",backgroundColor:"#FA5F55",margin:"0 12px",textAlign:"center",height:"25vmin"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center",width:"100%",height:"initial","&:nth-of-type(1)":{marginBottom:"12px"}}),infoContainer:Object(T.a)({marginTop:"10px",display:"flex",alignItems:"center",justifyContent:"space-around"},e.breakpoints.down("sm"),{flexDirection:"column"}),logoContainer:Object(T.a)({padding:"0 5%",display:"flex",justifyContent:"space-around",alignItems:"center",width:"100%"},e.breakpoints.down("sm"),{flexDirection:"column-reverse",textAlign:"center"}),header:Object(T.a)({marginTop:"10px",display:"flex",alignItems:"center",justifyContent:"space-between"},e.breakpoints.down("sm"),{flexDirection:"column"})}}));var D=function(){var e=Object(i.useState)(0),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(i.useState)([]),o=Object(r.a)(c,2),d=o[0],h=o[1],b=A();return Object(i.useEffect)((function(){j()({key:"4af5c7571cd49448971c94a2304c598f2e956eca572e1d8b807a3e2338fdd0dc/stage",onCommand:function(e){var t=e.command,n=e.articles,i=e.number;if("newHeadlines"===t)h(n),a(-1);else if("highlight"===t)a((function(e){return e+1}));else if("open"===t){var c=i.length>2?l()(i,{fuzzy:!0}):i,r=n[c-1];c>n.length||c<=0?j()().playText("Please try that again..."):r?(window.open(r.url,"_blank"),j()().playText("Opening...")):j()().playText("Please try that again...")}}})}),[]),Object(w.jsxs)("div",{children:[Object(w.jsxs)("div",{className:b.header,children:[Object(w.jsx)("div",{children:Object(w.jsx)("img",{className:b.image,src:"logo192.png",alt:"logo"})}),Object(w.jsx)("div",{className:b.logoContainer,children:d.length?Object(w.jsxs)("div",{className:b.infoContainer,children:[Object(w.jsx)("div",{className:b.card,children:Object(w.jsxs)(s.a,{variant:"h5",component:"h2",children:["Try saying: ",Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),"Open article number [4]"]})}),Object(w.jsx)("div",{className:b.card,children:Object(w.jsxs)(s.a,{variant:"h5",component:"h2",children:["Try saying: ",Object(w.jsx)("br",{}),Object(w.jsx)("br",{}),"Go back"]})})]}):Object(w.jsx)("div",{className:b.card,children:Object(w.jsx)(s.a,{variant:"h6",component:"h6",children:"Speak to this app and it will follow you. Try saying different commands shown in the cards below."})})})]}),Object(w.jsx)(k,{articles:d,activeArticle:n}),Object(w.jsx)("div",{className:b.footer,children:Object(w.jsxs)(s.a,{variant:"body1",component:"h2",children:["Copyright \xa92021",Object(w.jsx)("a",{className:b.link,href:"https://www.linkedin.com/in/dhruvtongia",children:" Dhruv Tongia "})]})})]})},S=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,171)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),i(e),a(e),c(e),r(e)}))};c.a.render(Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(D,{})}),document.getElementById("root")),S()},86:function(e,t,n){}},[[145,1,2]]]);
//# sourceMappingURL=main.c75d3cd9.chunk.js.map