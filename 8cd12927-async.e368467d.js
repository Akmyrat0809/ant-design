(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["8cd12927"],{"8cd12927":function(e,l,t){"use strict";t.d(l,"__esModule",{value:!0}),t.d(l,"default",{enumerable:!0,get:function(){return u;}});var a=t("e52de471");t("14f3e475");var d=t("0d1c854e");let n=[];for(let e=0;e<100;e+=1){let l=[];for(let t=0;t<100;t+=1)l.push({title:`child ${e}-${t}`,key:`l-${e}-${t}`});n.push({title:`parent ${e}`,key:`l-${e}`,children:l});}var u=()=>(0,a.jsx)(d.Tree,{defaultExpandAll:!0,height:400,treeData:n});}}]);