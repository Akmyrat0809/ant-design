(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["9b697fc8"],{"9b697fc8":function(e,a,l){"use strict";l.d(a,"__esModule",{value:!0}),l.d(a,"default",{enumerable:!0,get:function(){return b;}});var n=l("e52de471");l("8db30eaa");var r=l("0d1c854e"),t=l("e6168191");let d=(0,t.createStyles)(({css:e,token:a})=>{let{antCls:l}=a;return{customTable:e`
      ${l}-table {
        ${l}-table-container {
          ${l}-table-body,
          ${l}-table-content {
            scrollbar-width: thin;
            scrollbar-color: unset;
          }
        }
      }
    `};}),{Text:i}=r.Typography,m=[{title:"Name",dataIndex:"name"},{title:"Borrow",dataIndex:"borrow"},{title:"Repayment",dataIndex:"repayment"}],o=[{key:"1",name:"John Brown",borrow:10,repayment:33},{key:"2",name:"Jim Green",borrow:100,repayment:0},{key:"3",name:"Joe Black",borrow:10,repayment:10},{key:"4",name:"Jim Red",borrow:75,repayment:45}],s=[{title:"Name",dataIndex:"name",fixed:!0,width:100},{title:"Description",dataIndex:"description"}],c=Array.from({length:20}).map((e,a)=>({key:a,name:["Light","Bamboo","Little"][a%3],description:"Everything that has a beginning, has an end."}));var b=()=>{let{styles:e}=d();return(0,n.jsxs)(r.Flex,{vertical:!0,gap:"small",children:[(0,n.jsx)(r.Table,{bordered:!0,className:e.customTable,columns:m,dataSource:o,pagination:!1,summary:e=>{let a=0,l=0;return e.forEach(({borrow:e,repayment:n})=>{a+=e,l+=n;}),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.Table.Summary.Row,{children:[(0,n.jsx)(r.Table.Summary.Cell,{index:0,children:"Total"}),(0,n.jsx)(r.Table.Summary.Cell,{index:1,children:(0,n.jsx)(i,{type:"danger",children:a})}),(0,n.jsx)(r.Table.Summary.Cell,{index:2,children:(0,n.jsx)(i,{children:l})})]}),(0,n.jsxs)(r.Table.Summary.Row,{children:[(0,n.jsx)(r.Table.Summary.Cell,{index:0,children:"Balance"}),(0,n.jsx)(r.Table.Summary.Cell,{index:1,colSpan:2,children:(0,n.jsx)(i,{type:"danger",children:a-l})})]})]});}}),(0,n.jsx)(r.Table,{className:e.customTable,columns:s,dataSource:c,pagination:!1,scroll:{x:2e3,y:500},bordered:!0,summary:()=>(0,n.jsx)(r.Table.Summary,{fixed:!0,children:(0,n.jsxs)(r.Table.Summary.Row,{children:[(0,n.jsx)(r.Table.Summary.Cell,{index:0,children:"Summary"}),(0,n.jsx)(r.Table.Summary.Cell,{index:1,children:"This is a summary content"})]})})})]});};}}]);