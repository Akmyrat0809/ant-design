(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["53137dde"],{"53137dde":function(e,a,t){"use strict";t.d(a,"__esModule",{value:!0}),t.d(a,"default",{enumerable:!0,get:function(){return u;}});var n=t("852bbaa9"),d=t("e52de471");t("93b008a1");var l=n._(t("9959ceb9")),r=t("0d1c854e");let i=l.default.createContext(null),o=({index:e,...a})=>{let[t]=r.Form.useForm();return(0,d.jsx)(r.Form,{form:t,component:!1,children:(0,d.jsx)(i.Provider,{value:t,children:(0,d.jsx)("tr",{...a})})});},s=({title:e,editable:a,children:t,dataIndex:n,record:o,handleSave:s,...u})=>{let[c,m]=(0,l.useState)(!1),f=(0,l.useRef)(null),x=(0,l.useContext)(i);(0,l.useEffect)(()=>{if(c){var e;null===(e=f.current)||void 0===e||e.focus();}},[c]);let g=()=>{m(!c),x.setFieldsValue({[n]:o[n]});},h=async()=>{try{let e=await x.validateFields();g(),s({...o,...e});}catch(e){console.log("Save failed:",e);}},b=t;return a&&(b=c?(0,d.jsx)(r.Form.Item,{style:{margin:0},name:n,rules:[{required:!0,message:`${e} is required.`}],children:(0,d.jsx)(r.Input,{ref:f,onPressEnter:h,onBlur:h})}):(0,d.jsx)("div",{className:"editable-cell-value-wrap",style:{paddingInlineEnd:24},onClick:g,children:t})),(0,d.jsx)("td",{...u,children:b});};var u=()=>{let[e,a]=(0,l.useState)([{key:"0",name:"Edward King 0",age:"32",address:"London, Park Lane no. 0"},{key:"1",name:"Edward King 1",age:"32",address:"London, Park Lane no. 1"}]),[t,n]=(0,l.useState)(2),i=t=>{let n=e.filter(e=>e.key!==t);a(n);},u=[{title:"name",dataIndex:"name",width:"30%",editable:!0},{title:"age",dataIndex:"age"},{title:"address",dataIndex:"address"},{title:"operation",dataIndex:"operation",render:(a,t)=>e.length>=1?(0,d.jsx)(r.Popconfirm,{title:"Sure to delete?",onConfirm:()=>i(t.key),children:(0,d.jsx)("a",{children:"Delete"})}):null}],c=t=>{let n=[...e],d=n.findIndex(e=>t.key===e.key),l=n[d];n.splice(d,1,{...l,...t}),a(n);},m=u.map(e=>e.editable?{...e,onCell:a=>({record:a,editable:e.editable,dataIndex:e.dataIndex,title:e.title,handleSave:c})}:e);return(0,d.jsxs)("div",{children:[(0,d.jsx)(r.Button,{onClick:()=>{let d={key:t,name:`Edward King ${t}`,age:"32",address:`London, Park Lane no. ${t}`};a([...e,d]),n(t+1);},type:"primary",style:{marginBottom:16},children:"Add a row"}),(0,d.jsx)(r.Table,{components:{body:{row:o,cell:s}},rowClassName:()=>"editable-row",bordered:!0,dataSource:e,columns:m})]});};}}]);