(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["863d588e"],{"863d588e":function(e,a,o){"use strict";o.d(a,"__esModule",{value:!0}),o.d(a,"texts",{enumerable:!0,get:function(){return n;}}),o("6a463c91");let n=[{value:"Before using icons, you need to install the ",paraId:0,tocIndex:0},{value:"@ant-design/icons",paraId:0,tocIndex:0},{value:" package:",paraId:0,tocIndex:0},{value:"Property",paraId:1,tocIndex:9},{value:"Description",paraId:1,tocIndex:9},{value:"Type",paraId:1,tocIndex:9},{value:"Default",paraId:1,tocIndex:9},{value:"Version",paraId:1,tocIndex:9},{value:"className",paraId:1,tocIndex:9},{value:"The className of Icon",paraId:1,tocIndex:9},{value:"string",paraId:1,tocIndex:9},{value:"-",paraId:1,tocIndex:9},{value:"rotate",paraId:1,tocIndex:9},{value:"Rotate by n degrees (not working in IE9)",paraId:1,tocIndex:9},{value:"number",paraId:1,tocIndex:9},{value:"-",paraId:1,tocIndex:9},{value:"spin",paraId:1,tocIndex:9},{value:"Rotate icon with animation",paraId:1,tocIndex:9},{value:"boolean",paraId:1,tocIndex:9},{value:"false",paraId:1,tocIndex:9},{value:"style",paraId:1,tocIndex:9},{value:"The style properties of icon, like ",paraId:1,tocIndex:9},{value:"fontSize",paraId:1,tocIndex:9},{value:" and ",paraId:1,tocIndex:9},{value:"color",paraId:1,tocIndex:9},{value:"CSSProperties",paraId:1,tocIndex:9},{value:"-",paraId:1,tocIndex:9},{value:"twoToneColor",paraId:1,tocIndex:9},{value:"Only supports the two-tone icon. Specify the primary color",paraId:1,tocIndex:9},{value:"string (hex color)",paraId:1,tocIndex:9},{value:"-",paraId:1,tocIndex:9},{value:"We still have three different themes for icons, icon component name is the icon name suffixed by the theme name.",paraId:2,tocIndex:9},{value:"import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';\n\n<StarOutlined />\n<StarFilled />\n<StarTwoTone twoToneColor=\"#eb2f96\" />\n",paraId:3,tocIndex:9},{value:"Property",paraId:4,tocIndex:10},{value:"Description",paraId:4,tocIndex:10},{value:"Type",paraId:4,tocIndex:10},{value:"Default",paraId:4,tocIndex:10},{value:"Version",paraId:4,tocIndex:10},{value:"component",paraId:4,tocIndex:10},{value:"The component used for the root node",paraId:4,tocIndex:10},{value:"ComponentType<CustomIconComponentProps>",paraId:4,tocIndex:10},{value:"-",paraId:4,tocIndex:10},{value:"rotate",paraId:4,tocIndex:10},{value:"Rotate degrees (not working in IE9)",paraId:4,tocIndex:10},{value:"number",paraId:4,tocIndex:10},{value:"-",paraId:4,tocIndex:10},{value:"spin",paraId:4,tocIndex:10},{value:"Rotate icon with animation",paraId:4,tocIndex:10},{value:"boolean",paraId:4,tocIndex:10},{value:"false",paraId:4,tocIndex:10},{value:"style",paraId:4,tocIndex:10},{value:"The style properties of icon, like ",paraId:4,tocIndex:10},{value:"fontSize",paraId:4,tocIndex:10},{value:" and ",paraId:4,tocIndex:10},{value:"color",paraId:4,tocIndex:10},{value:"CSSProperties",paraId:4,tocIndex:10},{value:"-",paraId:4,tocIndex:10},{value:"We introduced SVG icons in version ",paraId:5,tocIndex:11},{value:"3.9.0",paraId:5,tocIndex:11},{value:", replacing font icons. This has the following benefits:",paraId:5,tocIndex:11},{value:"Complete offline usage of icons, without dependency on a CDN-hosted font icon file (No more empty square during downloading and no need to deploy icon font files locally either!)",paraId:6,tocIndex:11},{value:"Much more display accuracy on lower-resolution screens",paraId:6,tocIndex:11},{value:"The ability to choose icon color",paraId:6,tocIndex:11},{value:"No need to change built-in icons with overriding styles by providing more props in component",paraId:6,tocIndex:11},{value:"More discussion of SVG icon reference at ",paraId:7,tocIndex:11},{value:"#10353",paraId:7,tocIndex:11},{value:".",paraId:7,tocIndex:11},{value:"\u26A0\uFE0F Given the extra bundle size caused by all SVG icons imported in 3.9.0, we will provide a new API to allow developers to import icons as needed, you can track ",paraId:8,tocIndex:11},{value:"#12011",paraId:8,tocIndex:11},{value:" for updates.",paraId:8,tocIndex:11},{value:"While you wait, you can use ",paraId:9,tocIndex:11},{value:"webpack plugin",paraId:9,tocIndex:11},{value:" from the community to chunk the icon file.",paraId:9,tocIndex:11},{value:"The properties ",paraId:10,tocIndex:11},{value:"theme",paraId:10,tocIndex:11},{value:", ",paraId:10,tocIndex:11},{value:"component",paraId:10,tocIndex:11},{value:" and ",paraId:10,tocIndex:11},{value:"twoToneColor",paraId:10,tocIndex:11},{value:" were added in ",paraId:10,tocIndex:11},{value:"3.9.0",paraId:10,tocIndex:11},{value:". The best practice is to pass the property ",paraId:10,tocIndex:11},{value:"theme",paraId:10,tocIndex:11},{value:" to every ",paraId:10,tocIndex:11},{value:"<Icon />",paraId:10,tocIndex:11},{value:" component.",paraId:10,tocIndex:11},{value:"import { MessageOutlined } from '@ant-design/icons';\n\n<MessageOutlined style={{ fontSize: '16px', color: '#08c' }} />;\n",paraId:11,tocIndex:11},{value:"All the icons will render to ",paraId:12,tocIndex:11},{value:"<svg>",paraId:12,tocIndex:11},{value:". You can still set ",paraId:12,tocIndex:11},{value:"style",paraId:12,tocIndex:11},{value:" and ",paraId:12,tocIndex:11},{value:"className",paraId:12,tocIndex:11},{value:" for size and color of icons.",paraId:12,tocIndex:11},{value:"<Icon type=\"message\" style={{ fontSize: '16px', color: '#08c' }} theme=\"outlined\" />\n",paraId:13,tocIndex:11},{value:"When using the two-tone icons, you can use the static methods ",paraId:14,tocIndex:12},{value:"getTwoToneColor()",paraId:14,tocIndex:12},{value:" and ",paraId:14,tocIndex:12},{value:"setTwoToneColor(colorString)",paraId:14,tocIndex:12},{value:" to specify the primary color.",paraId:14,tocIndex:12},{value:"import { getTwoToneColor, setTwoToneColor } from '@ant-design/icons';\n\nsetTwoToneColor('#eb2f96');\ngetTwoToneColor(); // #eb2f96\n",paraId:15,tocIndex:12},{value:"We added a ",paraId:16,tocIndex:13},{value:"createFromIconfontCN",paraId:16,tocIndex:13},{value:" function to help developer use their own icons deployed at ",paraId:16,tocIndex:13},{value:"iconfont.cn",paraId:16,tocIndex:13},{value:" in a convenient way.",paraId:16,tocIndex:13},{value:"This method is specified for ",paraId:17,tocIndex:13},{value:"iconfont.cn",paraId:17,tocIndex:13},{value:".",paraId:17,tocIndex:13},{value:"import React from 'react';\nimport { createFromIconfontCN } from '@ant-design/icons';\nimport ReactDOM from 'react-dom/client';\n\nconst MyIcon = createFromIconfontCN({\n  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js', // generate in iconfont.cn\n});\n\nReactDOM.createRoot(mountNode).render(<MyIcon type=\"icon-example\" />);\n",paraId:18,tocIndex:13},{value:"It creates a component that uses SVG sprites in essence.",paraId:19,tocIndex:13},{value:"The following options are available:",paraId:20,tocIndex:13},{value:"Property",paraId:21,tocIndex:13},{value:"Description",paraId:21,tocIndex:13},{value:"Type",paraId:21,tocIndex:13},{value:"Default",paraId:21,tocIndex:13},{value:"Version",paraId:21,tocIndex:13},{value:"extraCommonProps",paraId:21,tocIndex:13},{value:"Define extra properties to the component",paraId:21,tocIndex:13},{value:"{ [key: string]: any }",paraId:21,tocIndex:13},{value:"{}",paraId:21,tocIndex:13},{value:"scriptUrl",paraId:21,tocIndex:13},{value:"The URL generated by ",paraId:21,tocIndex:13},{value:"iconfont.cn",paraId:21,tocIndex:13},{value:" project. Support ",paraId:21,tocIndex:13},{value:"string[]",paraId:21,tocIndex:13},{value:" after ",paraId:21,tocIndex:13},{value:"@ant-design/icons@4.1.0",paraId:21,tocIndex:13},{value:"string | string[]",paraId:21,tocIndex:13},{value:"-",paraId:21,tocIndex:13},{value:"The property ",paraId:22,tocIndex:13},{value:"scriptUrl",paraId:22,tocIndex:13},{value:" should be set to import the SVG sprite symbols.",paraId:22,tocIndex:13},{value:"See ",paraId:23,tocIndex:13},{value:"iconfont.cn documents",paraId:23,tocIndex:13},{value:" to learn about how to generate ",paraId:23,tocIndex:13},{value:"scriptUrl",paraId:23,tocIndex:13},{value:".",paraId:23,tocIndex:13},{value:"You can import SVG icon as a react component by using ",paraId:24,tocIndex:14},{value:"webpack",paraId:24,tocIndex:14},{value:" and ",paraId:24,tocIndex:14},{value:"@svgr/webpack",paraId:24,tocIndex:14},{value:". ",paraId:24,tocIndex:14},{value:"@svgr/webpack",paraId:24,tocIndex:14},{value:"'s ",paraId:24,tocIndex:14},{value:"options",paraId:24,tocIndex:14},{value:" ",paraId:24,tocIndex:14},{value:"reference",paraId:24,tocIndex:14},{value:".",paraId:24,tocIndex:14},{value:"// webpack.config.js\nmodule.exports = {\n  // ... other config\n  test: /\\.svg(\\?v=\\d+\\.\\d+\\.\\d+)?$/,\n  use: [\n    {\n      loader: 'babel-loader',\n    },\n    {\n      loader: '@svgr/webpack',\n      options: {\n        babel: false,\n        icon: true,\n      },\n    },\n  ],\n};\n",paraId:25,tocIndex:14},{value:"You can import SVG icon as a react component by using ",paraId:26,tocIndex:14},{value:"vite",paraId:26,tocIndex:14},{value:" and ",paraId:26,tocIndex:14},{value:"vite-plugin-svgr",paraId:26,tocIndex:14},{value:". ",paraId:26,tocIndex:14},{value:"@svgr/webpack",paraId:26,tocIndex:14},{value:"'s ",paraId:26,tocIndex:14},{value:"options",paraId:26,tocIndex:14},{value:" ",paraId:26,tocIndex:14},{value:"reference",paraId:26,tocIndex:14},{value:".",paraId:26,tocIndex:14},{value:"// vite.config.js\nexport default defineConfig(() => ({\n  // ... other config\n  plugins: [svgr({ svgrOptions: { icon: true } })],\n}));\n",paraId:27,tocIndex:14},{value:"import React from 'react';\nimport Icon from '@ant-design/icons';\nimport MessageSvg from 'path/to/message.svg'; // path to your '*.svg' file.\n\n// import MessageSvg from 'path/to/message.svg?react'; // use vite path to your '*.svg?react' file.\nimport ReactDOM from 'react-dom/client';\n\n// in create-react-app:\n// import { ReactComponent as MessageSvg } from 'path/to/message.svg';\n\nReactDOM.createRoot(mountNode).render(<Icon component={MessageSvg} />);\n",paraId:28,tocIndex:14},{value:"The following properties are available for the component:",paraId:29,tocIndex:14},{value:"Property",paraId:30,tocIndex:14},{value:"Description",paraId:30,tocIndex:14},{value:"Type",paraId:30,tocIndex:14},{value:"Readonly",paraId:30,tocIndex:14},{value:"Version",paraId:30,tocIndex:14},{value:"className",paraId:30,tocIndex:14},{value:"The computed class name of the ",paraId:30,tocIndex:14},{value:"svg",paraId:30,tocIndex:14},{value:" element",paraId:30,tocIndex:14},{value:"string",paraId:30,tocIndex:14},{value:"-",paraId:30,tocIndex:14},{value:"fill",paraId:30,tocIndex:14},{value:"Define the color used to paint the ",paraId:30,tocIndex:14},{value:"svg",paraId:30,tocIndex:14},{value:" element",paraId:30,tocIndex:14},{value:"string",paraId:30,tocIndex:14},{value:"currentColor",paraId:30,tocIndex:14},{value:"height",paraId:30,tocIndex:14},{value:"The height of the ",paraId:30,tocIndex:14},{value:"svg",paraId:30,tocIndex:14},{value:" element",paraId:30,tocIndex:14},{value:"string | number",paraId:30,tocIndex:14},{value:"1em",paraId:30,tocIndex:14},{value:"style",paraId:30,tocIndex:14},{value:"The computed style of the ",paraId:30,tocIndex:14},{value:"svg",paraId:30,tocIndex:14},{value:" element",paraId:30,tocIndex:14},{value:"CSSProperties",paraId:30,tocIndex:14},{value:"-",paraId:30,tocIndex:14},{value:"width",paraId:30,tocIndex:14},{value:"The width of the ",paraId:30,tocIndex:14},{value:"svg",paraId:30,tocIndex:14},{value:" element",paraId:30,tocIndex:14},{value:"string | number",paraId:30,tocIndex:14},{value:"1em",paraId:30,tocIndex:14}];}}]);