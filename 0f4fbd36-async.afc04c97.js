(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["0f4fbd36"],{"0f4fbd36":function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return f;}});var n=l("777fffbe"),d=l("e52de471");l("137d0504");var s=n._(l("9959ceb9")),a=l("f579133b"),i=l("0d1c854e");let{Header:r,Content:u,Footer:o,Sider:c}=i.Layout,h=["1","2","3"].map(e=>({key:e,label:`nav ${e}`})),m=[a.UserOutlined,a.LaptopOutlined,a.NotificationOutlined].map((e,t)=>{let l=String(t+1);return{key:`sub${l}`,icon:s.default.createElement(e),label:`subnav ${l}`,children:[,,,,].fill(null).map((e,l)=>{let n=4*t+l+1;return{key:n,label:`option${n}`};})};});var f=()=>{let{token:{colorBgContainer:e,borderRadiusLG:t}}=i.theme.useToken();return(0,d.jsxs)(i.Layout,{children:[(0,d.jsxs)(r,{style:{display:"flex",alignItems:"center"},children:[(0,d.jsx)("div",{className:"demo-logo"}),(0,d.jsx)(i.Menu,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],items:h,style:{flex:1,minWidth:0}})]}),(0,d.jsxs)(u,{style:{padding:"0 48px"},children:[(0,d.jsxs)(i.Breadcrumb,{style:{margin:"16px 0"},children:[(0,d.jsx)(i.Breadcrumb.Item,{children:"Home"}),(0,d.jsx)(i.Breadcrumb.Item,{children:"List"}),(0,d.jsx)(i.Breadcrumb.Item,{children:"App"})]}),(0,d.jsxs)(i.Layout,{style:{padding:"24px 0",background:e,borderRadius:t},children:[(0,d.jsx)(c,{style:{background:e},width:200,children:(0,d.jsx)(i.Menu,{mode:"inline",defaultSelectedKeys:["1"],defaultOpenKeys:["sub1"],style:{height:"100%"},items:m})}),(0,d.jsx)(u,{style:{padding:"0 24px",minHeight:280},children:"Content"})]})]}),(0,d.jsxs)(o,{style:{textAlign:"center"},children:["Ant Design \xa9",new Date().getFullYear()," Created by Ant UED"]})]});};}}]);