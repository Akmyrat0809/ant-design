(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["3b42410c"],{"3b42410c":function(e,l,t){"use strict";t.d(l,"__esModule",{value:!0}),t.d(l,"default",{enumerable:!0,get:function(){return s;}});var n=t("e52de471");t("fe49af28");var r=t("9959ceb9"),o=t("0d1c854e");let a=[],d=(e,l,t)=>{let n=l||"0",r=t||a,o=[];for(let e=0;e<3;e++){let l=`${n}-${e}`;r.push({title:l,key:l}),e<2&&o.push(l);}if(e<0)return r;let s=e-1;o.forEach((e,l)=>(r[l].children=[],d(s,e,r[l].children)));};d(1);var s=()=>{let[e,l]=(0,r.useState)(a),[t]=(0,r.useState)(["0-0","0-0-0","0-0-0-0"]);return(0,n.jsx)(o.Tree,{className:"draggable-tree",defaultExpandedKeys:t,draggable:!0,blockNode:!0,onDragEnter:e=>{console.log(e);},onDrop:t=>{let n;console.log(t);let r=t.node.key,o=t.dragNode.key,a=t.node.pos.split("-"),d=t.dropPosition-Number(a[a.length-1]),s=(e,l,t)=>{for(let n=0;n<e.length;n++){if(e[n].key===l)return t(e[n],n,e);e[n].children&&s(e[n].children,l,t);}},i=[...e];if(s(i,o,(e,l,t)=>{t.splice(l,1),n=e;}),t.dropToGap){let e,l=[];s(i,r,(t,n,r)=>{l=r,e=n;}),-1===d?l.splice(e,0,n):l.splice(e+1,0,n);}else s(i,r,e=>{e.children=e.children||[],e.children.unshift(n);});l(i);},treeData:e});};}}]);