(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["f01b4661"],{f01b4661:function(e,t,l){"use strict";l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return i;}});var i=l("777fffbe")._(l("fd95f3c5")).default;},fd95f3c5:function(e,t,l){"use strict";var i=l("852bbaa9")._;l.d(t,"__esModule",{value:!0}),l.d(t,"default",{enumerable:!0,get:function(){return g;}});var s=l("777fffbe"),n=l("852bbaa9"),a=l("e52de471"),d=n._(l("9959ceb9")),c=l("0d1c854e"),o=l("e11f02d3"),r=l("c40930a6"),u=s._(l("dbc1eee1"));let f=d.default.lazy(()=>Promise.all([l.ensure("vendors_1"),l.ensure("4dfe9182")]).then(l.dr(i,l.bind(l,"4dfe9182")))),h={cn:{title:"\u4E3B\u9898\u7F16\u8F91\u5668",save:"\u4FDD\u5B58",edit:"\u7F16\u8F91",export:"\u5BFC\u51FA",editModelTitle:"\u7F16\u8F91\u4E3B\u9898\u914D\u7F6E",editJsonContentTypeError:"\u4E3B\u9898 JSON \u683C\u5F0F\u9519\u8BEF",editSuccessfully:"\u7F16\u8F91\u6210\u529F",saveSuccessfully:"\u4FDD\u5B58\u6210\u529F",initialEditor:"\u6B63\u5728\u521D\u59CB\u5316\u7F16\u8F91\u5668..."},en:{title:"Theme Editor",save:"Save",edit:"Edit",export:"Export",editModelTitle:"edit Theme Config",editJsonContentTypeError:"The theme of the JSON format is incorrect",editSuccessfully:"Edited successfully",saveSuccessfully:"Saved successfully",initialEditor:"Initializing Editor..."}},m="ant-design-v5-theme-editor-theme";var g=()=>{let{message:e}=c.App.useApp(),[t,l]=(0,u.default)(h),[i,s]=d.default.useState({});return(0,d.useEffect)(()=>{let e=localStorage.getItem(m);if(e){let t=JSON.parse(e);s(t);}},[]),(0,a.jsxs)("div",{children:[(0,a.jsxs)(r.Helmet,{children:[(0,a.jsx)("title",{children:`${t.title} - Ant Design`}),(0,a.jsx)("meta",{property:"og:title",content:`${t.title} - Ant Design`})]}),(0,a.jsx)(d.Suspense,{fallback:(0,a.jsx)(c.Skeleton,{style:{margin:24}}),children:(0,a.jsx)(f,{advanced:!0,hideAdvancedSwitcher:!0,theme:{name:"Custom Theme",key:"test",config:i},style:{height:"calc(100vh - 64px)"},onThemeChange:e=>{s(e.config);},locale:"cn"===l?o.zhCN:o.enUS,actions:(0,a.jsx)(c.Button,{type:"primary",onClick:()=>{localStorage.setItem(m,JSON.stringify(i)),e.success(t.saveSuccessfully);},children:t.save})})})]});};}}]);