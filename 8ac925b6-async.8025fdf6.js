(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["8ac925b6"],{"8ac925b6":function(a,e,d){"use strict";d.d(e,"__esModule",{value:!0}),d.d(e,"texts",{enumerable:!0,get:function(){return n;}}),d("83c983ac");let n=[{value:"Can be used to group or hide complex regions to keep the page clean.",paraId:0,tocIndex:0},{value:"Accordion",paraId:0,tocIndex:0},{value:" is a special kind of ",paraId:0,tocIndex:0},{value:"Collapse",paraId:0,tocIndex:0},{value:", which allows only one panel to be expanded at a time.",paraId:0,tocIndex:0},{value:"// works when >= 5.6.0, recommended \u2705\nconst text = `\n  A dog is a type of domesticated animal.\n  Known for its loyalty and faithfulness,\n  it can be found as a welcome guest in many households across the world.\n`;\n\nconst items: CollapseProps['items'] = [\n  {\n    key: '1',\n    label: 'This is panel header 1',\n    children: <p>{text}</p>,\n  },\n  {\n    key: '2',\n    label: 'This is panel header 2',\n    children: <p>{text}</p>,\n  },\n  {\n    key: '3',\n    label: 'This is panel header 3',\n    children: <p>{text}</p>,\n  },\n];\n\n<Collapse items={items} defaultActiveKey={['1']} />;\n\n// works when <5.6.0 , deprecated when >=5.6.0  \u{1F645}\u{1F3FB}\u200D\u2640\uFE0F\n\n<Collapse defaultActiveKey={['1']} onChange={onChange}>\n  <Panel header=\"This is panel header 1\" key=\"1\">\n    <p>{text}</p>\n  </Panel>\n  <Panel header=\"This is panel header 2\" key=\"2\">\n    <p>{text}</p>\n  </Panel>\n  <Panel header=\"This is panel header 3\" key=\"3\">\n    <p>{text}</p>\n  </Panel>\n</Collapse>;\n",paraId:1,tocIndex:0},{value:"Common props ref\uFF1A",paraId:2,tocIndex:13},{value:"Common props",paraId:3,tocIndex:13},{value:"Property",paraId:4,tocIndex:14},{value:"Description",paraId:4,tocIndex:14},{value:"Type",paraId:4,tocIndex:14},{value:"Default",paraId:4,tocIndex:14},{value:"Version",paraId:4,tocIndex:14},{value:"accordion",paraId:4,tocIndex:14},{value:"If true, Collapse renders as Accordion",paraId:4,tocIndex:14},{value:"boolean",paraId:4,tocIndex:14},{value:"false",paraId:4,tocIndex:14},{value:"activeKey",paraId:4,tocIndex:14},{value:"Key of the active panel",paraId:4,tocIndex:14},{value:"string[] | string ",paraId:4,tocIndex:14},{value:" number[] | number",paraId:4,tocIndex:14},{value:"No default value. In ",paraId:4,tocIndex:14},{value:"accordion mode",paraId:5,tocIndex:14},{value:", it's the key of the first panel",paraId:4,tocIndex:14},{value:"bordered",paraId:4,tocIndex:14},{value:"Toggles rendering of the border around the collapse block",paraId:4,tocIndex:14},{value:"boolean",paraId:4,tocIndex:14},{value:"true",paraId:4,tocIndex:14},{value:"collapsible",paraId:4,tocIndex:14},{value:"Specify whether the panels of children be collapsible or the trigger area of collapsible",paraId:4,tocIndex:14},{value:"header",paraId:4,tocIndex:14},{value:" | ",paraId:4,tocIndex:14},{value:"icon",paraId:4,tocIndex:14},{value:" | ",paraId:4,tocIndex:14},{value:"disabled",paraId:4,tocIndex:14},{value:"-",paraId:4,tocIndex:14},{value:"4.9.0",paraId:4,tocIndex:14},{value:"defaultActiveKey",paraId:4,tocIndex:14},{value:"Key of the initial active panel",paraId:4,tocIndex:14},{value:"string[] | string ",paraId:4,tocIndex:14},{value:" number[] | number",paraId:4,tocIndex:14},{value:"-",paraId:4,tocIndex:14},{value:"destroyInactivePanel",paraId:4,tocIndex:14},{value:"Destroy Inactive Panel",paraId:4,tocIndex:14},{value:"boolean",paraId:4,tocIndex:14},{value:"false",paraId:4,tocIndex:14},{value:"expandIcon",paraId:4,tocIndex:14},{value:"Allow to customize collapse icon",paraId:4,tocIndex:14},{value:"(panelProps) => ReactNode",paraId:4,tocIndex:14},{value:"-",paraId:4,tocIndex:14},{value:"expandIconPosition",paraId:4,tocIndex:14},{value:"Set expand icon position",paraId:4,tocIndex:14},{value:"start",paraId:4,tocIndex:14},{value:" | ",paraId:4,tocIndex:14},{value:"end",paraId:4,tocIndex:14},{value:"-",paraId:4,tocIndex:14},{value:"4.21.0",paraId:4,tocIndex:14},{value:"ghost",paraId:4,tocIndex:14},{value:"Make the collapse borderless and its background transparent",paraId:4,tocIndex:14},{value:"boolean",paraId:4,tocIndex:14},{value:"false",paraId:4,tocIndex:14},{value:"4.4.0",paraId:4,tocIndex:14},{value:"size",paraId:4,tocIndex:14},{value:"Set the size of collapse",paraId:4,tocIndex:14},{value:"large",paraId:4,tocIndex:14},{value:" | ",paraId:4,tocIndex:14},{value:"middle",paraId:4,tocIndex:14},{value:" | ",paraId:4,tocIndex:14},{value:"small",paraId:4,tocIndex:14},{value:"middle",paraId:4,tocIndex:14},{value:"5.2.0",paraId:4,tocIndex:14},{value:"onChange",paraId:4,tocIndex:14},{value:"Callback function executed when active panel is changed",paraId:4,tocIndex:14},{value:"function",paraId:4,tocIndex:14},{value:"-",paraId:4,tocIndex:14},{value:"items",paraId:4,tocIndex:14},{value:"collapse items content",paraId:4,tocIndex:14},{value:"ItemType",paraId:6,tocIndex:14},{value:"-",paraId:4,tocIndex:14},{value:"5.6.0",paraId:4,tocIndex:14},{value:"Property",paraId:7,tocIndex:15},{value:"Description",paraId:7,tocIndex:15},{value:"Type",paraId:7,tocIndex:15},{value:"Default",paraId:7,tocIndex:15},{value:"Version",paraId:7,tocIndex:15},{value:"classNames",paraId:7,tocIndex:15},{value:"Semantic structure className",paraId:7,tocIndex:15},{value:"Record<header | body, string>",paraId:8,tocIndex:15},{value:"-",paraId:7,tocIndex:15},{value:"5.21.0",paraId:7,tocIndex:15},{value:"collapsible",paraId:7,tocIndex:15},{value:"Specify whether the panel be collapsible or the trigger area of collapsible",paraId:7,tocIndex:15},{value:"header",paraId:7,tocIndex:15},{value:" | ",paraId:7,tocIndex:15},{value:"icon",paraId:7,tocIndex:15},{value:" | ",paraId:7,tocIndex:15},{value:"disabled",paraId:7,tocIndex:15},{value:"-",paraId:7,tocIndex:15},{value:"children",paraId:7,tocIndex:15},{value:"Body area content",paraId:7,tocIndex:15},{value:"ReactNode",paraId:7,tocIndex:15},{value:"-",paraId:7,tocIndex:15},{value:"extra",paraId:7,tocIndex:15},{value:"The extra element in the corner",paraId:7,tocIndex:15},{value:"ReactNode",paraId:7,tocIndex:15},{value:"-",paraId:7,tocIndex:15},{value:"forceRender",paraId:7,tocIndex:15},{value:"Forced render of content on panel, instead of lazy rendering after clicking on header",paraId:7,tocIndex:15},{value:"boolean",paraId:7,tocIndex:15},{value:"false",paraId:7,tocIndex:15},{value:"key",paraId:7,tocIndex:15},{value:"Unique key identifying the panel from among its siblings",paraId:7,tocIndex:15},{value:"string | number",paraId:7,tocIndex:15},{value:"-",paraId:7,tocIndex:15},{value:"label",paraId:7,tocIndex:15},{value:"Title of the panel",paraId:7,tocIndex:15},{value:"ReactNode",paraId:7,tocIndex:15},{value:"-",paraId:7,tocIndex:15},{value:"-",paraId:7,tocIndex:15},{value:"showArrow",paraId:7,tocIndex:15},{value:"If false, panel will not show arrow icon. If false, collapsible can't be set as icon",paraId:7,tocIndex:15},{value:"boolean",paraId:7,tocIndex:15},{value:"true",paraId:7,tocIndex:15},{value:"styles",paraId:7,tocIndex:15},{value:"Semantic DOM style",paraId:7,tocIndex:15},{value:"Record<header | body, CSSProperties>",paraId:9,tocIndex:15},{value:"-",paraId:7,tocIndex:15},{value:"5.21.0",paraId:7,tocIndex:15},{value:"When using version >= 5.6.0, we prefer to configuring the panel by ",paraId:10},{value:"items",paraId:10},{value:".",paraId:10},{value:"Property",paraId:11},{value:"Description",paraId:11},{value:"Type",paraId:11},{value:"Default",paraId:11},{value:"Version",paraId:11},{value:"collapsible",paraId:11},{value:"Specify whether the panel be collapsible or the trigger area of collapsible",paraId:11},{value:"header",paraId:11},{value:" | ",paraId:11},{value:"icon",paraId:11},{value:" | ",paraId:11},{value:"disabled",paraId:11},{value:"-",paraId:11},{value:"4.9.0 (icon: 4.24.0)",paraId:11},{value:"extra",paraId:11},{value:"The extra element in the corner",paraId:11},{value:"ReactNode",paraId:11},{value:"-",paraId:11},{value:"forceRender",paraId:11},{value:"Forced render of content on panel, instead of lazy rendering after clicking on header",paraId:11},{value:"boolean",paraId:11},{value:"false",paraId:11},{value:"header",paraId:11},{value:"Title of the panel",paraId:11},{value:"ReactNode",paraId:11},{value:"-",paraId:11},{value:"key",paraId:11},{value:"Unique key identifying the panel from among its siblings",paraId:11},{value:"string | number",paraId:11},{value:"-",paraId:11},{value:"showArrow",paraId:11},{value:"If false, panel will not show arrow icon. If false, collapsible can't be set as icon",paraId:11},{value:"boolean",paraId:11},{value:"true",paraId:11}];}}]);