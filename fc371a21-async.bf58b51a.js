(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["fc371a21"],{fc371a21:function(e,a,l){"use strict";l.d(a,"__esModule",{value:!0}),l.d(a,"default",{enumerable:!0,get:function(){return s;}});var n=l("e52de471");l("fd511f60");var o=l("0d1c854e");let d=e=>{console.log(`selected ${e}`);},i=[{label:"China",value:"china",emoji:"\u{1F1E8}\u{1F1F3}",desc:"China (\u4E2D\u56FD)"},{label:"USA",value:"usa",emoji:"\u{1F1FA}\u{1F1F8}",desc:"USA (\u7F8E\u56FD)"},{label:"Japan",value:"japan",emoji:"\u{1F1EF}\u{1F1F5}",desc:"Japan (\u65E5\u672C)"},{label:"Korea",value:"korea",emoji:"\u{1F1F0}\u{1F1F7}",desc:"Korea (\u97E9\u56FD)"}];var s=()=>(0,n.jsx)(o.Select,{mode:"multiple",style:{width:"100%"},placeholder:"select one country",defaultValue:["china"],onChange:d,options:i,optionRender:e=>(0,n.jsxs)(o.Space,{children:[(0,n.jsx)("span",{role:"img","aria-label":e.data.label,children:e.data.emoji}),e.data.desc]})});}}]);