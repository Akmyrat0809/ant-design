(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["07fd1ddc"],{"07fd1ddc":function(e,l,s){"use strict";s.d(l,"__esModule",{value:!0}),s.d(l,"default",{enumerable:!0,get:function(){return h;}});var t=s("e52de471");s("63028353");var n=s("9959ceb9"),d=s("f579133b"),i=s("0d1c854e");let{Header:a,Content:r,Footer:u,Sider:o}=i.Layout;function c(e,l,s,t){return{key:l,icon:s,children:t,label:e};}let m=[c("Option 1","1",(0,t.jsx)(d.PieChartOutlined,{})),c("Option 2","2",(0,t.jsx)(d.DesktopOutlined,{})),c("User","sub1",(0,t.jsx)(d.UserOutlined,{}),[c("Tom","3"),c("Bill","4"),c("Alex","5")]),c("Team","sub2",(0,t.jsx)(d.TeamOutlined,{}),[c("Team 1","6"),c("Team 2","8")]),c("Files","9",(0,t.jsx)(d.FileOutlined,{}))];var h=()=>{let[e,l]=(0,n.useState)(!1),{token:{colorBgContainer:s,borderRadiusLG:d}}=i.theme.useToken();return(0,t.jsxs)(i.Layout,{style:{minHeight:"100vh"},children:[(0,t.jsxs)(o,{collapsible:!0,collapsed:e,onCollapse:e=>l(e),children:[(0,t.jsx)("div",{className:"demo-logo-vertical"}),(0,t.jsx)(i.Menu,{theme:"dark",defaultSelectedKeys:["1"],mode:"inline",items:m})]}),(0,t.jsxs)(i.Layout,{children:[(0,t.jsx)(a,{style:{padding:0,background:s}}),(0,t.jsxs)(r,{style:{margin:"0 16px"},children:[(0,t.jsxs)(i.Breadcrumb,{style:{margin:"16px 0"},children:[(0,t.jsx)(i.Breadcrumb.Item,{children:"User"}),(0,t.jsx)(i.Breadcrumb.Item,{children:"Bill"})]}),(0,t.jsx)("div",{style:{padding:24,minHeight:360,background:s,borderRadius:d},children:"Bill is a cat."})]}),(0,t.jsxs)(u,{style:{textAlign:"center"},children:["Ant Design \xa9",new Date().getFullYear()," Created by Ant UED"]})]})]});};}}]);