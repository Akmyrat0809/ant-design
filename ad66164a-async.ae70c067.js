(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["ad66164a"],{ad66164a:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return c;}});var n=l("777fffbe"),o=l("e52de471");l("07cc1ccd");var a=n._(l("9959ceb9")),i=l("f579133b"),d=l("0d1c854e");let s=["https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg","https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg"];var c=()=>{let[e,t]=a.default.useState(0),l=()=>{let t=s[e],l=t.slice(t.lastIndexOf(".")),n=Date.now()+l;fetch(t).then(e=>e.blob()).then(e=>{let t=URL.createObjectURL(new Blob([e])),l=document.createElement("a");l.href=t,l.download=n,document.body.appendChild(l),l.click(),URL.revokeObjectURL(t),l.remove();});};return(0,o.jsx)(d.Image.PreviewGroup,{preview:{toolbarRender:(e,{transform:{scale:t},actions:{onActive:n,onFlipY:a,onFlipX:s,onRotateLeft:c,onRotateRight:u,onZoomOut:r,onZoomIn:f,onReset:h}})=>(0,o.jsxs)(d.Space,{size:12,className:"toolbar-wrapper",children:[(0,o.jsx)(i.LeftOutlined,{onClick:()=>null==n?void 0:n(-1)}),(0,o.jsx)(i.RightOutlined,{onClick:()=>null==n?void 0:n(1)}),(0,o.jsx)(i.DownloadOutlined,{onClick:l}),(0,o.jsx)(i.SwapOutlined,{rotate:90,onClick:a}),(0,o.jsx)(i.SwapOutlined,{onClick:s}),(0,o.jsx)(i.RotateLeftOutlined,{onClick:c}),(0,o.jsx)(i.RotateRightOutlined,{onClick:u}),(0,o.jsx)(i.ZoomOutOutlined,{disabled:1===t,onClick:r}),(0,o.jsx)(i.ZoomInOutlined,{disabled:50===t,onClick:f}),(0,o.jsx)(i.UndoOutlined,{onClick:h})]}),onChange:e=>{t(e);}},children:s.map(e=>(0,o.jsx)(d.Image,{src:e,width:200},e))});};}}]);