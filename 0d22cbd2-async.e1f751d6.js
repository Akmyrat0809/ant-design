(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["0d22cbd2"],{"0d22cbd2":function(a,e,d){"use strict";d.d(e,"__esModule",{value:!0}),d.d(e,"texts",{enumerable:!0,get:function(){return n;}}),d("5cab0a49");let n=[{value:"\u5728\u8868\u5355\u5F00\u53D1\u8FC7\u7A0B\u4E2D\uFF0C\u5076\u5C14\u4F1A\u9047\u5230\u7EC4\u5408\u5C5E\u6027\u7684\u9700\u6C42\u3002UI \u5C55\u793A\u5B57\u6BB5\u4E0E\u540E\u7AEF\u8FD4\u56DE\u6570\u636E\u7ED3\u6784\u5B57\u6BB5\u6709\u6240\u4E0D\u540C\u3002\u6BD4\u5982\u8BF4\uFF0C\u8DDF\u540E\u7AEF\u5BF9\u63A5\u63A5\u53E3\uFF0C\u5B9A\u4E49\u7701\u5E02\u5B57\u6BB5\u7ECF\u5E38\u662F 2 \u4E2A\u5B57\u6BB5 ",paraId:0},{value:"{ province: Beijing, city: Haidian }",paraId:0},{value:"\uFF0C\u800C\u4E0D\u662F ",paraId:0},{value:"{ province:[Beijing\uFF0CHaidian] }",paraId:0},{value:"\uFF0C\u56E0\u6B64\u5219\u9700\u8981\u5728 ",paraId:0},{value:"initialValues",paraId:0},{value:" \u4EE5\u53CA ",paraId:0},{value:"onFinish",paraId:0},{value:" \u5904\u7406\u503C\uFF0C\u5982\u4E0B\uFF1A",paraId:0},{value:"import React from 'react';\nimport { Cascader, Form } from 'antd';\n\nconst data = { province: 'Beijing', city: 'Haidian' };\nconst options = [\n  { value: 'zhejiang', label: 'Zhejiang', children: [{ value: 'hangzhou', label: 'Hangzhou' }] },\n  { value: 'jiangsu', label: 'Jiangsu', children: [{ value: 'nanjing', label: 'Nanjing' }] },\n];\nconst createUser = (values) => console.log(values);\n\nconst Demo = () => (\n  <Form\n    initialValues={{ province: [data.province, data.city] }}\n    onFinish={(values) => {\n      const { province, ...rest } = values;\n      createUser({ province: province[0], city: province[1], ...rest });\n    }}\n  >\n    <Form.Item label=\"Address\" name=\"province\">\n      <Cascader options={options} placeholder=\"Please select\" />\n    </Form.Item>\n  </Form>\n);\nexport default Demo;\n",paraId:1},{value:"\u5F53\u8868\u5355\u6BD4\u8F83\u7B80\u5355\u8FD8\u597D\uFF0C\u5982\u679C\u9047\u5230 ",paraId:2,tocIndex:0},{value:"Form.List",paraId:2,tocIndex:0},{value:" \u573A\u666F\uFF0C\u5C31\u9700\u8981 ",paraId:2,tocIndex:0},{value:"map",paraId:2,tocIndex:0},{value:" \u5904\u7406\u503C\uFF0C\u5C06\u53D8\u7684\u5F88\u590D\u6742\u3002\u4E8E\u662F\u6211\u4EEC\u9700\u8981\u5C01\u88C5\u805A\u5408\u5B57\u6BB5\u7EC4\u4EF6\uFF0C\u5B9E\u73B0\u4E00\u4E2A ",paraId:2,tocIndex:0},{value:"Form.Item",paraId:2,tocIndex:0},{value:" \u53EF\u4EE5\u5199\u591A\u4E2A ",paraId:2,tocIndex:0},{value:"name",paraId:2,tocIndex:0},{value:"\u3002",paraId:2,tocIndex:0},{value:"\u8981\u5B9E\u73B0\u805A\u5408\u5B57\u6BB5\u529F\u80FD\uFF0C\u6211\u4EEC\u9700\u8981\u7528\u5230 ",paraId:3,tocIndex:1},{value:"getValueProps",paraId:3,tocIndex:1},{value:" ",paraId:3,tocIndex:1},{value:"getValueFromEvent",paraId:3,tocIndex:1},{value:" ",paraId:3,tocIndex:1},{value:"transform",paraId:3,tocIndex:1},{value:"\uFF0C\u4ECE\u800C\u5B9E\u73B0\u6570\u636E\u4ECE ",paraId:3,tocIndex:1},{value:"FormStore",paraId:3,tocIndex:1},{value:" \u4E2D\u7684\u8F6C\u5316\uFF0C\u4EE5\u53CA\u53D8\u66F4\u65F6\u91CD\u65B0\u4F20\u5165 ",paraId:3,tocIndex:1},{value:"FormStore",paraId:3,tocIndex:1},{value:" \u7ED3\u6784\u4E2D\u3002",paraId:3,tocIndex:1},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C",paraId:4,tocIndex:2},{value:"Form.Item",paraId:4,tocIndex:2},{value:" \u4F1A\u5C06 ",paraId:4,tocIndex:2},{value:"FormStore",paraId:4,tocIndex:2},{value:" \u4E2D\u7684\u5B57\u6BB5\u503C\u4F5C\u4E3A ",paraId:4,tocIndex:2},{value:"value",paraId:4,tocIndex:2},{value:" prop \u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\u3002\u800C\u901A\u8FC7 ",paraId:4,tocIndex:2},{value:"getValueProps",paraId:4,tocIndex:2},{value:" \u53EF\u4EE5\u81EA\u5B9A\u4E49\u4F20\u5165\u7ED9\u5B50\u7EC4\u4EF6\u7684 ",paraId:4,tocIndex:2},{value:"props",paraId:4,tocIndex:2},{value:" \u4ECE\u800C\u5B9E\u73B0\u8F6C\u5316\u529F\u80FD\u3002\u5728\u805A\u5408\u573A\u666F\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u904D\u5386 ",paraId:4,tocIndex:2},{value:"names",paraId:4,tocIndex:2},{value:" \u5206\u522B\u5C06 ",paraId:4,tocIndex:2},{value:"FormStore",paraId:4,tocIndex:2},{value:" \u4E2D\u7684\u503C\u7EC4\u5408\u4E3A\u4E00\u4E2A ",paraId:4,tocIndex:2},{value:"value",paraId:4,tocIndex:2},{value:" \u4F20\u9012\u7ED9\u5B50\u7EC4\u4EF6\uFF1A",paraId:4,tocIndex:2},{value:"getValueProps={() => ({ value: names.map((name) => form.getFieldValue(name)) })}\n",paraId:5,tocIndex:2},{value:"\u5F53\u5B50\u7EC4\u4EF6\u4FEE\u6539\u503C\u65F6\uFF0C\u4F7F\u7528 ",paraId:6,tocIndex:3},{value:"setFields",paraId:6,tocIndex:3},{value:" \u65B9\u6CD5\u5C06\u5B50\u7EC4\u4EF6\u8FD4\u56DE\u7684\u805A\u5408 ",paraId:6,tocIndex:3},{value:"value",paraId:6,tocIndex:3},{value:" \u5206\u522B\u8BBE\u7F6E\u7ED9\u5BF9\u5E94\u7684 ",paraId:6,tocIndex:3},{value:"name",paraId:6,tocIndex:3},{value:"\uFF0C\u4ECE\u800C\u5B9E\u73B0\u66F4\u65B0 ",paraId:6,tocIndex:3},{value:"FormStore",paraId:6,tocIndex:3},{value:" \u4E2D ",paraId:6,tocIndex:3},{value:"names",paraId:6,tocIndex:3},{value:" \u7684\u503C\uFF1A",paraId:6,tocIndex:3},{value:"getValueFromEvent={(values) => {\n    form.setFields(names.map((name, index) => ({ name, value: values[index] })));\n    return values[0];\n}}\n",paraId:7,tocIndex:3},{value:"rules",paraId:8,tocIndex:4},{value:" \u4E2D\u6821\u9A8C\u9ED8\u8BA4\u63D0\u4F9B\u7684 ",paraId:8,tocIndex:4},{value:"value",paraId:8,tocIndex:4},{value:" \u6765\u6E90\u4E8E\u5B50\u7EC4\u4EF6\u53D8\u66F4\u65F6\u4F20\u9012\u7ED9 ",paraId:8,tocIndex:4},{value:"name",paraId:8,tocIndex:4},{value:" \u5BF9\u5E94\u7684\u503C\uFF0C\u8FD8\u9700\u8981\u4ECE ",paraId:8,tocIndex:4},{value:"FormStore",paraId:8,tocIndex:4},{value:" \u83B7\u53D6 ",paraId:8,tocIndex:4},{value:"names",paraId:8,tocIndex:4},{value:" \u7684\u503C\u4F7F\u7528 ",paraId:8,tocIndex:4},{value:"transform",paraId:8,tocIndex:4},{value:" \u65B9\u6CD5\u4FEE\u6539 ",paraId:8,tocIndex:4},{value:"rules",paraId:8,tocIndex:4},{value:" \u7684 ",paraId:8,tocIndex:4},{value:"value",paraId:8,tocIndex:4},{value:"\uFF1A",paraId:8,tocIndex:4},{value:"rules={[{\n  transform: () => {\n    const values = names.map((name) => form.getFieldValue(name));\n    return values;\n  },\n}]}\n",paraId:9,tocIndex:4},{value:"\u901A\u8FC7\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u6211\u4EEC\u5B9E\u73B0\u4E86\u4E00\u4E2A\u53EF\u4EE5\u5728 ",paraId:10,tocIndex:6},{value:"Form.Item",paraId:10,tocIndex:6},{value:" \u4E2D\u64CD\u4F5C\u591A\u4E2A ",paraId:10,tocIndex:6},{value:"name",paraId:10,tocIndex:6},{value:" \u7684\u529F\u80FD\uFF0C\u4F7F\u5F97\u8868\u5355\u903B\u8F91\u66F4\u52A0\u6E05\u6670\u548C\u6613\u4E8E\u7EF4\u62A4\u3002",paraId:10,tocIndex:6},{value:"\u9664\u4E86\u6587\u4E2D\u7684 ",paraId:11,tocIndex:6},{value:"Cascader",paraId:11,tocIndex:6},{value:" \u793A\u4F8B\uFF0C\u540C\u6837\u9002\u7528\u4E8E ",paraId:11,tocIndex:6},{value:"DatePicker.RangePicker",paraId:11,tocIndex:6},{value:" \u7B49\u7EC4\u4EF6\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0C\u53EA\u8981\u662F\u9700\u8981\u805A\u5408\u591A\u4E2A\u5B57\u6BB5\u7684\u573A\u666F\uFF0C\u90FD\u53EF\u4EE5\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u3002",paraId:11,tocIndex:6},{value:"\u53E6\u5916\u6B64\u793A\u4F8B\u8FD8\u6709\u4E9B\u8FB9\u754C\u573A\u666F\u6CA1\u6709\u8003\u8651\uFF0C\u6BD4\u5982 ",paraId:12,tocIndex:6},{value:"setFields([{ name:'city' value:'nanjing' }])",paraId:12,tocIndex:6},{value:" \u4E0D\u4F1A\u66F4\u65B0 ",paraId:12,tocIndex:6},{value:"Cascader",paraId:12,tocIndex:6},{value:" \u9009\u4E2D\u7684\u503C\uFF0C\u9700\u8981\u589E\u52A0 ",paraId:12,tocIndex:6},{value:"Form.useWatch(values => resetNames.map(name => get(values, name)), form);",paraId:12,tocIndex:6},{value:" \u8FBE\u5230\u5237\u65B0\u6548\u679C\u7B49\u3002",paraId:12,tocIndex:6},{value:"\u66F4\u591A\u7684\u8FB9\u754C\u95EE\u9898\u5C31\u4EA4\u7ED9\u4F60\u53BB\u8BD5\u8BD5\u5427~",paraId:13,tocIndex:6}];}}]);