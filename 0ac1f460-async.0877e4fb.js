(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["0ac1f460"],{"0ac1f460":function(e,a,d){"use strict";d.d(a,"__esModule",{value:!0}),d.d(a,"default",{enumerable:!0,get:function(){return i;}});var n=d("e52de471");d("b6dec6d7");var s=d("9959ceb9"),o=d("0d1c854e");let l=[{title:"Name",dataIndex:"name",render:e=>(0,n.jsx)("a",{children:e})},{title:"Age",dataIndex:"age"},{title:"Address",dataIndex:"address"}],r=[{key:"1",name:"John Brown",age:32,address:"New York No. 1 Lake Park"},{key:"2",name:"Jim Green",age:42,address:"London No. 1 Lake Park"},{key:"3",name:"Joe Black",age:32,address:"Sydney No. 1 Lake Park"},{key:"4",name:"Disabled User",age:99,address:"Sydney No. 1 Lake Park"}],t={onChange:(e,a)=>{console.log(`selectedRowKeys: ${e}`,"selectedRows: ",a);},getCheckboxProps:e=>({disabled:"Disabled User"===e.name,name:e.name})};var i=()=>{let[e,a]=(0,s.useState)("checkbox");return(0,n.jsxs)("div",{children:[(0,n.jsxs)(o.Radio.Group,{onChange:e=>a(e.target.value),value:e,children:[(0,n.jsx)(o.Radio,{value:"checkbox",children:"Checkbox"}),(0,n.jsx)(o.Radio,{value:"radio",children:"radio"})]}),(0,n.jsx)(o.Divider,{}),(0,n.jsx)(o.Table,{rowSelection:{type:e,...t},columns:l,dataSource:r})]});};}}]);