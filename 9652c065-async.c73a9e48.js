(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["9652c065"],{"9652c065":function(e,l,a){"use strict";a.d(l,"__esModule",{value:!0}),a.d(l,"default",{enumerable:!0,get:function(){return u;}});var t=a("e52de471");a("9ff8bac6");var n=a("9959ceb9"),i=a("0d1c854e");let d=["U","Lucy","Tom","Edward"],s=["#f56a00","#7265e6","#ffbf00","#00a2ae"],r=[4,3,2,1];var u=()=>{let[e,l]=(0,n.useState)(d[0]),[a,u]=(0,n.useState)(s[0]),[c,o]=(0,n.useState)(r[0]);return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.Avatar,{style:{backgroundColor:a,verticalAlign:"middle"},size:"large",gap:c,children:e}),(0,t.jsx)(i.Button,{size:"small",style:{margin:"0 16px",verticalAlign:"middle"},onClick:()=>{let a=d.indexOf(e);l(a<d.length-1?d[a+1]:d[0]),u(a<s.length-1?s[a+1]:s[0]);},children:"ChangeUser"}),(0,t.jsx)(i.Button,{size:"small",style:{verticalAlign:"middle"},onClick:()=>{let e=r.indexOf(c);o(e<r.length-1?r[e+1]:r[0]);},children:"changeGap"})]});};}}]);