(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["b21c7f74"],{b21c7f74:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return u;}});var o=l("e52de471");l("15b041ce");var n=l("9959ceb9"),a=l("0d1c854e");let s=(e,t=1)=>({value:e.repeat(t)});var u=()=>{let[e,t]=(0,n.useState)(""),[l,u]=(0,n.useState)([]),[r,c]=(0,n.useState)([]),d=e=>e?[s(e),s(e,2),s(e,3)]:[],h=e=>{console.log("onSelect",e);};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(a.AutoComplete,{options:l,style:{width:200},onSelect:h,onSearch:e=>u(d(e)),placeholder:"input here"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)(a.AutoComplete,{value:e,options:r,style:{width:200},onSelect:h,onSearch:e=>c(d(e)),onChange:e=>{t(e);},placeholder:"control mode"})]});};}}]);