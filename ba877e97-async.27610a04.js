(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["ba877e97"],{ba877e97:function(l,n,e){"use strict";e.d(n,"__esModule",{value:!0}),e.d(n,"default",{enumerable:!0,get:function(){return d;}});var o=e("e52de471");e("1fb1cc20");var g=e("9959ceb9"),r=e("f579133b"),s=e("0d1c854e");let{Option:t}=s.Select,i=()=>{let{token:l}=s.theme.useToken(),[n]=s.Form.useForm(),[e,i]=(0,g.useState)(!1),d={maxWidth:"none",background:l.colorFillAlter,borderRadius:l.borderRadiusLG,padding:24};return(0,o.jsxs)(s.Form,{form:n,name:"advanced_search",style:d,onFinish:l=>{console.log("Received values of form: ",l);},children:[(0,o.jsx)(s.Row,{gutter:24,children:(()=>{let l=e?10:6,n=[];for(let e=0;e<l;e++)n.push((0,o.jsx)(s.Col,{span:8,children:e%3!=1?(0,o.jsx)(s.Form.Item,{name:`field-${e}`,label:`Field ${e}`,rules:[{required:!0,message:"Input something!"}],children:(0,o.jsx)(s.Input,{placeholder:"placeholder"})}):(0,o.jsx)(s.Form.Item,{name:`field-${e}`,label:`Field ${e}`,rules:[{required:!0,message:"Select something!"}],initialValue:"1",children:(0,o.jsxs)(s.Select,{children:[(0,o.jsx)(t,{value:"1",children:"longlonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglonglong"}),(0,o.jsx)(t,{value:"2",children:"222"})]})})},e));return n;})()}),(0,o.jsx)("div",{style:{textAlign:"right"},children:(0,o.jsxs)(s.Space,{size:"small",children:[(0,o.jsx)(s.Button,{type:"primary",htmlType:"submit",children:"Search"}),(0,o.jsx)(s.Button,{onClick:()=>{n.resetFields();},children:"Clear"}),(0,o.jsxs)("a",{style:{fontSize:12},onClick:()=>{i(!e);},children:[(0,o.jsx)(r.DownOutlined,{rotate:e?180:0})," Collapse"]})]})})]});};var d=()=>{let{token:l}=s.theme.useToken(),n={lineHeight:"200px",textAlign:"center",background:l.colorFillAlter,borderRadius:l.borderRadiusLG,marginTop:16};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i,{}),(0,o.jsx)("div",{style:n,children:"Search Result List"})]});};}}]);