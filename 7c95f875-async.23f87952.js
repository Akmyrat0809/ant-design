(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["7c95f875"],{"7c95f875":function(e,a,l){"use strict";l.d(a,"__esModule",{value:!0}),l.d(a,"default",{enumerable:!0,get:function(){return c;}});var d=l("777fffbe"),t=l("e52de471");l("88bd85c6");var s=l("0d1c854e"),o=d._(l("f4e2564c"));let{RangePicker:u}=s.DatePicker,n=e=>{e?console.log("Date: ",e):console.log("Clear");},f=(e,a)=>{e?(console.log("From: ",e[0],", to: ",e[1]),console.log("From: ",a[0],", to: ",a[1])):console.log("Clear");},r=[{label:"Last 7 Days",value:[(0,o.default)().add(-7,"d"),(0,o.default)()]},{label:"Last 14 Days",value:[(0,o.default)().add(-14,"d"),(0,o.default)()]},{label:"Last 30 Days",value:[(0,o.default)().add(-30,"d"),(0,o.default)()]},{label:"Last 90 Days",value:[(0,o.default)().add(-90,"d"),(0,o.default)()]}];var c=()=>(0,t.jsxs)(s.Space,{direction:"vertical",size:12,children:[(0,t.jsx)(s.DatePicker,{presets:[{label:"Yesterday",value:(0,o.default)().add(-1,"d")},{label:"Last Week",value:(0,o.default)().add(-7,"d")},{label:"Last Month",value:(0,o.default)().add(-1,"month")}],onChange:n}),(0,t.jsx)(u,{presets:r,onChange:f}),(0,t.jsx)(u,{presets:[{label:(0,t.jsx)("span",{"aria-label":"Current Time to End of Day",children:"Now ~ EOD"}),value:()=>[(0,o.default)(),(0,o.default)().endOf("day")]},...r],showTime:!0,format:"YYYY/MM/DD HH:mm:ss",onChange:f})]});}}]);