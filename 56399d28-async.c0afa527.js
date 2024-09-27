(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["56399d28"],{"56399d28":function(a,e,r){"use strict";r.d(e,"__esModule",{value:!0}),r.d(e,"texts",{enumerable:!0,get:function(){return l;}}),r("cc529a25");let l=[{value:"A Drawer is a panel that is typically overlaid on top of a page and slides in from the side. It contains a set of information or actions. Since the user can interact with the Drawer without leaving the current page, tasks can be achieved more efficiently within the same context.",paraId:0,tocIndex:0},{value:"Use a Form to create or edit a set of information.",paraId:1,tocIndex:0},{value:"Processing subtasks. When subtasks are too heavy for a Popover and we still want to keep the subtasks in the context of the main task, Drawer comes very handy.",paraId:1,tocIndex:0},{value:"When the same Form is needed in multiple places.",paraId:1,tocIndex:0},{value:"Notes for developers",paraId:2,tocIndex:0},{value:"Since the ",paraId:3,tocIndex:0},{value:"5.17.0",paraId:3,tocIndex:0},{value:", we provided the ",paraId:3,tocIndex:0},{value:"loading",paraId:3,tocIndex:0},{value:" prop by the Spin. However, since the ",paraId:3,tocIndex:0},{value:"5.18.0",paraId:3,tocIndex:0},{value:" version, we have fixed this design error and replaced the Spin with the Skeleton, and also modified the type of ",paraId:3,tocIndex:0},{value:"loading",paraId:3,tocIndex:0},{value:" prop, which can only accept ",paraId:3,tocIndex:0},{value:"boolean",paraId:3,tocIndex:0},{value:" type.",paraId:3,tocIndex:0},{value:"Common props ref\uFF1A",paraId:4,tocIndex:17},{value:"Common props",paraId:5,tocIndex:17},{value:"v5 uses ",paraId:6},{value:"rootClassName",paraId:6},{value:" & ",paraId:6},{value:"rootStyle",paraId:6},{value:" to configure the outermost element style, instead of ",paraId:6},{value:"className",paraId:6},{value:" & ",paraId:6},{value:"style",paraId:6},{value:" from v4. This is done to align the API with Modal.",paraId:6},{value:"Props",paraId:7},{value:"Description",paraId:7},{value:"Type",paraId:7},{value:"Default",paraId:7},{value:"Version",paraId:7},{value:"autoFocus",paraId:7},{value:"Whether Drawer should get focused after open",paraId:7},{value:"boolean",paraId:7},{value:"true",paraId:7},{value:"4.17.0",paraId:7},{value:"afterOpenChange",paraId:7},{value:"Callback after the animation ends when switching drawers",paraId:7},{value:"function(open)",paraId:7},{value:"-",paraId:7},{value:"className",paraId:7},{value:"Config Drawer Panel className. Use ",paraId:7},{value:"rootClassName",paraId:7},{value:" if want to config top DOM style",paraId:7},{value:"string",paraId:7},{value:"-",paraId:7},{value:"classNames",paraId:7},{value:"Semantic structure className",paraId:7},{value:"Record<SemanticDOM, string>",paraId:8},{value:"-",paraId:7},{value:"5.10.0",paraId:7},{value:"closeIcon",paraId:7},{value:"Custom close icon. 5.7.0: close button will be hidden when setting to ",paraId:7},{value:"null",paraId:7},{value:" or ",paraId:7},{value:"false",paraId:7},{value:"ReactNode",paraId:7},{value:"<CloseOutlined />",paraId:7},{value:"destroyOnClose",paraId:7},{value:"Whether to unmount child components on closing drawer or not",paraId:7},{value:"boolean",paraId:7},{value:"false",paraId:7},{value:"extra",paraId:7},{value:"Extra actions area at corner",paraId:7},{value:"ReactNode",paraId:7},{value:"-",paraId:7},{value:"4.17.0",paraId:7},{value:"footer",paraId:7},{value:"The footer for Drawer",paraId:7},{value:"ReactNode",paraId:7},{value:"-",paraId:7},{value:"forceRender",paraId:7},{value:"Pre-render Drawer component forcibly",paraId:7},{value:"boolean",paraId:7},{value:"false",paraId:7},{value:"getContainer",paraId:7},{value:"mounted node and display window for Drawer",paraId:7},{value:"HTMLElement | () => HTMLElement | Selectors | false",paraId:7},{value:"body",paraId:7},{value:"headerStyle",paraId:7},{value:"Style of the drawer header part",paraId:7},{value:"CSSProperties",paraId:7},{value:"-",paraId:7},{value:"height",paraId:7},{value:"Placement is ",paraId:7},{value:"top",paraId:7},{value:" or ",paraId:7},{value:"bottom",paraId:7},{value:", height of the Drawer dialog",paraId:7},{value:"string | number",paraId:7},{value:"378",paraId:7},{value:"keyboard",paraId:7},{value:"Whether support press esc to close",paraId:7},{value:"boolean",paraId:7},{value:"true",paraId:7},{value:"mask",paraId:7},{value:"Whether to show mask or not",paraId:7},{value:"boolean",paraId:7},{value:"true",paraId:7},{value:"maskClosable",paraId:7},{value:"Clicking on the mask (area outside the Drawer) to close the Drawer or not",paraId:7},{value:"boolean",paraId:7},{value:"true",paraId:7},{value:"placement",paraId:7},{value:"The placement of the Drawer",paraId:7},{value:"top",paraId:7},{value:" | ",paraId:7},{value:"right",paraId:7},{value:" | ",paraId:7},{value:"bottom",paraId:7},{value:" | ",paraId:7},{value:"left",paraId:7},{value:"right",paraId:7},{value:"push",paraId:7},{value:"Nested drawers push behavior",paraId:7},{value:"boolean | { distance: string | number }",paraId:7},{value:"{ distance: 180 }",paraId:7},{value:"4.5.0+",paraId:7},{value:"rootStyle",paraId:7},{value:"Style of wrapper element which ",paraId:7},{value:"contains mask",paraId:7},{value:" compare to ",paraId:7},{value:"style",paraId:7},{value:"CSSProperties",paraId:7},{value:"-",paraId:7},{value:"style",paraId:7},{value:"Style of Drawer panel. Use ",paraId:7},{value:"bodyStyle",paraId:7},{value:" if want to config body only",paraId:7},{value:"CSSProperties",paraId:7},{value:"-",paraId:7},{value:"styles",paraId:7},{value:"Semantic structure style",paraId:7},{value:"Record<SemanticDOM, CSSProperties>",paraId:9},{value:"-",paraId:7},{value:"5.10.0",paraId:7},{value:"size",paraId:7},{value:"preset size of drawer, default ",paraId:7},{value:"378px",paraId:7},{value:" and large ",paraId:7},{value:"736px",paraId:7},{value:"'default' | 'large'",paraId:7},{value:"'default'",paraId:7},{value:"4.17.0",paraId:7},{value:"title",paraId:7},{value:"The title for Drawer",paraId:7},{value:"ReactNode",paraId:7},{value:"-",paraId:7},{value:"loading",paraId:7},{value:"Show the Skeleton",paraId:7},{value:"boolean",paraId:7},{value:"false",paraId:7},{value:"5.17.0",paraId:7},{value:"open",paraId:7},{value:"Whether the Drawer dialog is visible or not",paraId:7},{value:"boolean",paraId:7},{value:"false",paraId:7},{value:"width",paraId:7},{value:"Width of the Drawer dialog",paraId:7},{value:"string | number",paraId:7},{value:"378",paraId:7},{value:"zIndex",paraId:7},{value:"The ",paraId:7},{value:"z-index",paraId:7},{value:" of the Drawer",paraId:7},{value:"number",paraId:7},{value:"1000",paraId:7},{value:"onClose",paraId:7},{value:"Specify a callback that will be called when a user clicks mask, close button or Cancel button",paraId:7},{value:"function(e)",paraId:7},{value:"-",paraId:7},{value:"drawerRender",paraId:7},{value:"Custom drawer content render",paraId:7},{value:"(node: ReactNode) => ReactNode",paraId:7},{value:"-",paraId:7},{value:"5.18.0",paraId:7}];}}]);