(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["1ea0ba34"],{"1ea0ba34":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return d;}});var n=l("e52de471");l("6975a9f1");var a=l("9959ceb9"),s=l("0d1c854e");let r={},o={},i={};[8,16,24,32,40,48].forEach((e,t)=>{r[t]=e;}),[8,16,24,32,40,48].forEach((e,t)=>{o[t]=e;}),[2,3,4,6,8,12].forEach((e,t)=>{i[t]=e;});var d=()=>{let[e,t]=(0,a.useState)(1),[l,d]=(0,a.useState)(1),[h,u]=(0,a.useState)(2),c=[],m=i[h],x="";for(let e=0;e<m;e++)c.push((0,n.jsx)(s.Col,{span:24/m,children:(0,n.jsx)("div",{children:"Column"})},e.toString())),x+=`  <Col span={${24/m}} />
`;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{children:"Horizontal Gutter (px): "}),(0,n.jsx)("div",{style:{width:"50%"},children:(0,n.jsx)(s.Slider,{min:0,max:Object.keys(r).length-1,value:e,onChange:t,marks:r,step:null,tooltip:{formatter:e=>r[e]}})}),(0,n.jsx)("span",{children:"Vertical Gutter (px): "}),(0,n.jsx)("div",{style:{width:"50%"},children:(0,n.jsx)(s.Slider,{min:0,max:Object.keys(o).length-1,value:l,onChange:d,marks:o,step:null,tooltip:{formatter:e=>o[e]}})}),(0,n.jsx)("span",{children:"Column Count:"}),(0,n.jsx)("div",{style:{width:"50%",marginBottom:48},children:(0,n.jsx)(s.Slider,{min:0,max:Object.keys(i).length-1,value:h,onChange:u,marks:i,step:null,tooltip:{formatter:e=>i[e]}})}),(0,n.jsxs)(s.Row,{gutter:[r[e],o[l]],children:[c,c]}),"Another Row:",(0,n.jsx)(s.Row,{gutter:[r[e],o[l]],children:c}),(0,n.jsx)("pre",{className:"demo-code",children:`<Row gutter={[${r[e]}, ${o[l]}]}>
${x}
${x}</Row>`}),(0,n.jsx)("pre",{className:"demo-code",children:`<Row gutter={[${r[e]}, ${o[l]}]}>
${x}</Row>`})]});};}}]);