(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["06a9f215"],{"06a9f215":function(e,t,a){"use strict";a.d(t,"__esModule",{value:!0}),a.d(t,"default",{enumerable:!0,get:function(){return n;}});var l=a("e52de471");a("6b8ab037");var o=a("9959ceb9"),d=a("0d1c854e"),n=()=>{let[e,t]=(0,o.useState)(),[a,n]=(0,o.useState)([{id:1,pId:0,value:"1",title:"Expand to load"},{id:2,pId:0,value:"2",title:"Expand to load"},{id:3,pId:0,value:"3",title:"Tree Node",isLeaf:!0}]),i=(e,t=!1)=>{let a=Math.random().toString(36).substring(2,6);return{id:a,pId:e,value:a,title:t?"Tree Node":"Expand to load",isLeaf:t};};return(0,l.jsx)(d.TreeSelect,{treeDataSimpleMode:!0,style:{width:"100%"},value:e,dropdownStyle:{maxHeight:400,overflow:"auto"},placeholder:"Please select",onChange:e=>{console.log(e),t(e);},loadData:({id:e})=>new Promise(t=>{setTimeout(()=>{n(a.concat([i(e,!1),i(e,!0),i(e,!0)])),t(void 0);},300);}),treeData:a});};}}]);