(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["21fefe91"],{"21fefe91":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return d;}});var l=a("777fffbe"),s=a("e52de471");a("3c035c73");var n=a("9959ceb9"),r=a("0d1c854e"),i=l._(a("45e9864c")),d=()=>{let[e,t]=(0,n.useState)(!1),[a,l]=(0,n.useState)([]),d=()=>{e||(t(!0),fetch("https://randomuser.me/api/?results=10&inc=name,gender,email,nat,picture&noinfo").then(e=>e.json()).then(e=>{l([...a,...e.results]),t(!1);}).catch(()=>{t(!1);}));};return(0,n.useEffect)(()=>{d();},[]),(0,s.jsx)("div",{id:"scrollableDiv",style:{height:400,overflow:"auto",padding:"0 16px",border:"1px solid rgba(140, 140, 140, 0.35)"},children:(0,s.jsx)(i.default,{dataLength:a.length,next:d,hasMore:a.length<50,loader:(0,s.jsx)(r.Skeleton,{avatar:!0,paragraph:{rows:1},active:!0}),endMessage:(0,s.jsx)(r.Divider,{plain:!0,children:"It is all, nothing more \u{1F910}"}),scrollableTarget:"scrollableDiv",children:(0,s.jsx)(r.List,{dataSource:a,renderItem:e=>(0,s.jsxs)(r.List.Item,{children:[(0,s.jsx)(r.List.Item.Meta,{avatar:(0,s.jsx)(r.Avatar,{src:e.picture.large}),title:(0,s.jsx)("a",{href:"https://ant.design",children:e.name.last}),description:e.email}),(0,s.jsx)("div",{children:"Content"})]},e.email)})})});};}}]);