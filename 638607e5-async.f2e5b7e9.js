(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["638607e5"],{"638607e5":function(e,n,i){"use strict";i.d(n,"__esModule",{value:!0}),i.e(n,{default:function(){return p;},useStyle:function(){return s;}});var t=i("777fffbe"),r=i("e52de471"),d=t._(i("9959ceb9")),o=i("0d1c854e"),l=i("e6168191"),a=t._(i("b689591c")),c=i("c40930a6");let s=(0,l.createStyles)(({token:e,css:n})=>{let{antCls:i}=e;return{anchorToc:n`
      scrollbar-width: thin;
      scrollbar-color: unset;
      ${i}-anchor {
        ${i}-anchor-link-title {
          font-size: ${e.fontSizeSM}px;
        }
      }
    `,tocWrapper:n`
      position: fixed;
      top: ${e.headerHeight+e.contentMarginTop-4}px;
      inset-inline-end: 0;
      width: 148px;
      padding: 0;
      border-radius: ${e.borderRadius}px;
      box-sizing: border-box;
      margin-inline-end: calc(8px - 100vw + 100%);
      z-index: 10;
      .toc-debug {
        color: ${e.purple6};
        &:hover {
          color: ${e.purple5};
        }
      }
      > div {
        box-sizing: border-box;
        width: 100%;
        max-height: calc(100vh - ${e.headerHeight+e.contentMarginTop+24}px) !important;
        margin: auto;
        overflow: auto;
        padding: ${e.paddingXXS}px;
        backdrop-filter: blur(8px);
      }

      @media only screen and (max-width: ${e.screenLG}px) {
        display: none;
      }
    `,articleWrapper:n`
      padding-inline: 48px 164px;
      padding-block: 0 32px;

      @media only screen and (max-width: ${e.screenLG}px) {
        & {
          padding: 0 ${2*e.paddingLG}px;
        }
      }
    `};});var p=({showDebug:e,debugDemos:n=[]})=>{let{styles:i}=s(),t=(0,l.useTheme)(),p=(0,c.useRouteMeta)(),u=(0,c.useTabMeta)(),h=d.default.useMemo(()=>((null==u?void 0:u.toc)||p.toc).reduce((e,n)=>{if(2===n.depth)e.push({...n});else if(3===n.depth){let i=e[e.length-1];i&&(i.children=i.children||[],i.children.push({...n}));}return e;},[]),[null==u?void 0:u.toc,p.toc]);return p.frontmatter.toc?(0,r.jsx)("section",{className:i.tocWrapper,children:(0,r.jsx)(o.Anchor,{affix:!1,className:i.anchorToc,targetOffset:t.anchorTop,showInkInFixed:!0,items:h.map(i=>{var t;return{href:`#${i.id}`,title:i.title,key:i.id,children:null===(t=i.children)||void 0===t?void 0:t.filter(i=>e||!n.includes(i.id)).map(e=>({key:e.id,href:`#${e.id}`,title:(0,r.jsx)("span",{className:(0,a.default)({"toc-debug":n.includes(e.id)}),children:null==e?void 0:e.title})}))};})})}):null;};}}]);