(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["97402196"],{97402196:function(e,t,o){"use strict";o.d(t,"__esModule",{value:!0}),o.d(t,"default",{enumerable:!0,get:function(){return c;}});var l=o("e52de471");o("b52f9e8d");var n=o("9959ceb9"),r=o("0d1c854e");let s=Array.from({length:20}).map((e,t)=>({key:t.toString(),title:`content${t+1}`,description:`description of content${t+1}`})),a=s.filter(e=>Number(e.key)>10).map(e=>e.key);var c=()=>{let[e,t]=(0,n.useState)(a),[o,c]=(0,n.useState)([]);return(0,l.jsx)(r.Transfer,{dataSource:s,titles:["Source","Target"],targetKeys:e,selectedKeys:o,onChange:(e,o,l)=>{console.log("targetKeys:",e),console.log("direction:",o),console.log("moveKeys:",l),t(e);},onSelectChange:(e,t)=>{console.log("sourceSelectedKeys:",e),console.log("targetSelectedKeys:",t),c([...e,...t]);},onScroll:(e,t)=>{console.log("direction:",e),console.log("target:",t.target);},render:e=>e.title});};}}]);