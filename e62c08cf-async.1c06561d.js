(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["e62c08cf"],{e62c08cf:function(e,l,t){"use strict";t.d(l,"__esModule",{value:!0}),t.d(l,"default",{enumerable:!0,get:function(){return c;}});var a=t("e52de471");t("58ff40ca");var n=t("9959ceb9"),o=t("0d1c854e");let s=[];for(let e=10;e<36;e++){let l=e.toString(36)+e;s.push({label:`Long Label: ${l}`,value:l});}let i={mode:"multiple",style:{width:"100%"},options:s,placeholder:"Select Item...",maxTagCount:"responsive"};var c=()=>{let[e,l]=(0,n.useState)(["a10","c12","h17","j19","k20"]),t={value:e,onChange:l};return(0,a.jsxs)(o.Space,{direction:"vertical",style:{width:"100%"},children:[(0,a.jsx)(o.Select,{...i,...t}),(0,a.jsx)(o.Select,{...i,disabled:!0}),(0,a.jsx)(o.Select,{...i,...t,maxTagPlaceholder:e=>(0,a.jsx)(o.Tooltip,{overlayStyle:{pointerEvents:"none"},title:e.map(({label:e})=>e).join(", "),children:(0,a.jsx)("span",{children:"Hover Me"})})})]});};}}]);