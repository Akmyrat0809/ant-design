(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["97be78a7"],{"97be78a7":function(e,r,o){"use strict";o.d(r,"__esModule",{value:!0}),o.d(r,"default",{enumerable:!0,get:function(){return l;}});var t=o("e52de471");o("10da73ee");var n=o("9959ceb9"),d=o("0d1c854e"),a=o("e6168191");let s=(0,a.createStyles)(({token:e})=>({"my-drawer-body":{background:e.blue1},"my-drawer-mask":{boxShadow:"inset 0 0 15px #fff"},"my-drawer-header":{background:e.green1},"my-drawer-footer":{color:e.colorPrimary},"my-drawer-content":{borderLeft:"2px dotted #333"}}));var l=()=>{let[e,r]=(0,n.useState)([!1,!1]),{styles:o}=s(),l=(0,a.useTheme)(),c=(e,o)=>{r(r=>(r[e]=o,[...r]));},i={body:o["my-drawer-body"],mask:o["my-drawer-mask"],header:o["my-drawer-header"],footer:o["my-drawer-footer"],content:o["my-drawer-content"]},m={mask:{backdropFilter:"blur(10px)"},content:{boxShadow:"-10px 0 10px #666"},header:{borderBottom:`1px solid ${l.colorPrimary}`},body:{fontSize:l.fontSizeLG},footer:{borderTop:`1px solid ${l.colorBorder}`}};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(d.Space,{children:[(0,t.jsx)(d.Button,{type:"primary",onClick:()=>c(0,!0),children:"Open"}),(0,t.jsx)(d.Button,{type:"primary",onClick:()=>c(1,!0),children:"ConfigProvider"})]}),(0,t.jsxs)(d.Drawer,{title:"Basic Drawer",placement:"right",footer:"Footer",onClose:()=>c(0,!1),open:e[0],classNames:i,styles:m,children:[(0,t.jsx)("p",{children:"Some contents..."}),(0,t.jsx)("p",{children:"Some contents..."}),(0,t.jsx)("p",{children:"Some contents..."})]}),(0,t.jsx)(d.ConfigProvider,{drawer:{classNames:i,styles:m},children:(0,t.jsxs)(d.Drawer,{title:"Basic Drawer",placement:"right",footer:"Footer",onClose:()=>c(1,!1),open:e[1],children:[(0,t.jsx)("p",{children:"Some contents..."}),(0,t.jsx)("p",{children:"Some contents..."}),(0,t.jsx)("p",{children:"Some contents..."})]})})]});};}}]);