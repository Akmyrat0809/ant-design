(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["3e20b180"],{"3e20b180":function(e,l,r){"use strict";r.d(l,"__esModule",{value:!0}),r.d(l,"default",{enumerable:!0,get:function(){return a;}});var s=r("e52de471");r("46964ddc");var n=r("0d1c854e");let{Option:i}=n.Select,t=e=>{console.log("Received values of form: ",e);};var a=()=>(0,s.jsxs)(n.Form,{name:"complex-form",onFinish:t,labelCol:{span:8},wrapperCol:{span:16},style:{maxWidth:600},children:[(0,s.jsx)(n.Form.Item,{label:"Username",children:(0,s.jsxs)(n.Space,{children:[(0,s.jsx)(n.Form.Item,{name:"username",noStyle:!0,rules:[{required:!0,message:"Username is required"}],children:(0,s.jsx)(n.Input,{style:{width:160},placeholder:"Please input"})}),(0,s.jsx)(n.Tooltip,{title:"Useful information",children:(0,s.jsx)(n.Typography.Link,{href:"#API",children:"Need Help?"})})]})}),(0,s.jsx)(n.Form.Item,{label:"Address",children:(0,s.jsxs)(n.Space.Compact,{children:[(0,s.jsx)(n.Form.Item,{name:["address","province"],noStyle:!0,rules:[{required:!0,message:"Province is required"}],children:(0,s.jsxs)(n.Select,{placeholder:"Select province",children:[(0,s.jsx)(i,{value:"Zhejiang",children:"Zhejiang"}),(0,s.jsx)(i,{value:"Jiangsu",children:"Jiangsu"})]})}),(0,s.jsx)(n.Form.Item,{name:["address","street"],noStyle:!0,rules:[{required:!0,message:"Street is required"}],children:(0,s.jsx)(n.Input,{style:{width:"50%"},placeholder:"Input street"})})]})}),(0,s.jsxs)(n.Form.Item,{label:"BirthDate",style:{marginBottom:0},children:[(0,s.jsx)(n.Form.Item,{name:"year",rules:[{required:!0}],style:{display:"inline-block",width:"calc(50% - 8px)"},children:(0,s.jsx)(n.Input,{placeholder:"Input birth year"})}),(0,s.jsx)(n.Form.Item,{name:"month",rules:[{required:!0}],style:{display:"inline-block",width:"calc(50% - 8px)",margin:"0 8px"},children:(0,s.jsx)(n.Input,{placeholder:"Input birth month"})})]}),(0,s.jsx)(n.Form.Item,{label:" ",colon:!1,children:(0,s.jsx)(n.Button,{type:"primary",htmlType:"submit",children:"Submit"})})]});}}]);