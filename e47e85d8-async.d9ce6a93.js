(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["e47e85d8"],{e47e85d8:function(e,t,n){"use strict";n.d(t,"__esModule",{value:!0}),n.d(t,"default",{enumerable:!0,get:function(){return c;}});var l=n("e52de471");n("2673ce7d");var a=n("9959ceb9"),i=n("f579133b"),r=n("0d1c854e");let d=[{value:"parent 1",title:"parent 1",icon:(0,l.jsx)(i.CarryOutOutlined,{}),children:[{value:"parent 1-0",title:"parent 1-0",icon:(0,l.jsx)(i.CarryOutOutlined,{}),children:[{value:"leaf1",title:"leaf1",icon:(0,l.jsx)(i.CarryOutOutlined,{})},{value:"leaf2",title:"leaf2",icon:(0,l.jsx)(i.CarryOutOutlined,{})}]},{value:"parent 1-1",title:"parent 1-1",icon:(0,l.jsx)(i.CarryOutOutlined,{}),children:[{value:"sss",title:"sss",icon:(0,l.jsx)(i.CarryOutOutlined,{})}]}]}];var c=()=>{let[e,t]=(0,a.useState)(!0),[n,i]=(0,a.useState)(!1),[c,u]=(0,a.useState)(!1);return(0,l.jsxs)(r.Space,{direction:"vertical",children:[(0,l.jsx)(r.Switch,{checkedChildren:"showIcon",unCheckedChildren:"showIcon",checked:c,onChange:()=>u(!c)}),(0,l.jsx)(r.Switch,{checkedChildren:"treeLine",unCheckedChildren:"treeLine",checked:e,onChange:()=>t(!e)}),(0,l.jsx)(r.Switch,{disabled:!e,checkedChildren:"showLeafIcon",unCheckedChildren:"showLeafIcon",checked:n,onChange:()=>i(!n)}),(0,l.jsx)(r.TreeSelect,{treeLine:e&&{showLeafIcon:n},style:{width:300},treeData:d,treeIcon:c})]});};}}]);