(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["65b5ea45"],{"65b5ea45":function(e,n,a){"use strict";a.d(n,"__esModule",{value:!0}),a.d(n,"default",{enumerable:!0,get:function(){return s;}});var r=a("e52de471");a("23c0db7a");var t=a("0d1c854e"),l=a("e6168191");let o=(0,l.createStyles)(({token:e,css:n})=>{let a=".ant-tabs";return n`
    ${a}${a}-card {
      ${a}-content {
        padding: ${e.padding}px;
        background: ${e.colorBgContainer};
      }

      ${a}-nav {
        margin: 0;

        ${a}-nav-wrap > ${a}-nav-list > ${a}-tab {
          background: transparent;
          border-color: transparent;

          &-active {
            border-color: ${e.colorBorderBg};
            background: ${e.colorBgContainer};
          }
        }

        &::before {
          display: none;
        }
      }
    }
  `;}),d=[,,,].fill(null).map((e,n)=>{let a=String(n+1);return{label:`Tab Title ${a}`,key:a,children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["Content of Tab Pane ",a]}),(0,r.jsxs)("p",{children:["Content of Tab Pane ",a]}),(0,r.jsxs)("p",{children:["Content of Tab Pane ",a]})]})};});var s=()=>{let{styles:e}=o();return(0,r.jsx)("div",{className:e,children:(0,r.jsx)(t.Tabs,{type:"card",items:d})});};}}]);