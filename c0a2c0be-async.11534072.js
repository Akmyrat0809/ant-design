(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["c0a2c0be"],{"0233bb4a":function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}}),t("65be29be");var a="import type { FC } from 'react';\nimport React from 'react';\nimport { DatePicker } from 'antd';\n\nconst { _InternalPanelDoNotUseOrYouWillBeFired: PureDatePicker } = DatePicker;\n\nconst Demo: FC = () => <PureDatePicker picker=\"month\" />;\n\nexport default Demo;\n";},"3270db40":function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}}),t("70e7a80c");var a="import type { FC } from 'react';\nimport React from 'react';\nimport { DatePicker } from 'antd';\n\nconst { _InternalRangePanelDoNotUseOrYouWillBeFired: PureRangePicker } = DatePicker;\n\nconst Demo: FC = () => <PureRangePicker picker=\"week\" />;\n\nexport default Demo;\n";},"4708d14c":function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}}),t("f04ca216");var a="import type { FC } from 'react';\nimport React from 'react';\nimport { DatePicker } from 'antd';\n\nconst { _InternalRangePanelDoNotUseOrYouWillBeFired: PureRangePicker } = DatePicker;\n\nconst Demo: FC = () => <PureRangePicker picker=\"quarter\" />;\n\nexport default Demo;\n";},"4f587f97":function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}}),t("9592a381");var a="import type { FC } from 'react';\nimport React from 'react';\nimport { DatePicker } from 'antd';\n\nconst { _InternalPanelDoNotUseOrYouWillBeFired: PureDatePicker } = DatePicker;\n\nconst Demo: FC = () => <PureDatePicker picker=\"week\" />;\n\nexport default Demo;\n";},"61ef4bb2":function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}}),t("f9fd37e4");var a="import type { FC } from 'react';\nimport React from 'react';\nimport { DatePicker } from 'antd';\n\nconst { _InternalRangePanelDoNotUseOrYouWillBeFired: PureRangePicker } = DatePicker;\n\nconst Demo: FC = () => <PureRangePicker showTime />;\n\nexport default Demo;\n";},"6f7e61a4":function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}}),t("7d9f83a6");var a="import type { FC } from 'react';\nimport React from 'react';\nimport { DatePicker } from 'antd';\n\nconst { _InternalRangePanelDoNotUseOrYouWillBeFired: PureRangePicker } = DatePicker;\n\nconst Demo: FC = () => <PureRangePicker picker=\"month\" />;\n\nexport default Demo;\n";},"7cf4eef4":function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}}),t("1438fc6b");var a="import type { FC } from 'react';\nimport React from 'react';\nimport { DatePicker } from 'antd';\n\nconst { _InternalRangePanelDoNotUseOrYouWillBeFired: PureRangePicker } = DatePicker;\n\nconst Demo: FC = () => <PureRangePicker picker=\"year\" />;\n\nexport default Demo;\n";},"8f5ca547":function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}}),t("a2ef86a9");var a="import type { FC } from 'react';\nimport React from 'react';\nimport { DatePicker } from 'antd';\n\nconst { _InternalPanelDoNotUseOrYouWillBeFired: PureDatePicker } = DatePicker;\n\nconst Demo: FC = () => <PureDatePicker />;\n\nexport default Demo;\n";},a6090f63:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}}),t("fb327b88");var a="import type { FC } from 'react';\nimport React from 'react';\nimport { DatePicker } from 'antd';\n\nconst { _InternalPanelDoNotUseOrYouWillBeFired: PureDatePicker } = DatePicker;\n\nconst Demo: FC = () => <PureDatePicker picker=\"year\" />;\n\nexport default Demo;\n";},ad557e22:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}}),t("779c1671");var a="import type { FC } from 'react';\nimport React from 'react';\nimport { DatePicker } from 'antd';\nimport { createStyles, css } from 'antd-style';\nimport classNames from 'classnames';\nimport type { Dayjs } from 'dayjs';\n\nconst { _InternalPanelDoNotUseOrYouWillBeFired: PureDatePicker } = DatePicker;\n\nconst useStyle = createStyles(({ token }) => ({\n  weekendCell: css`\n    color: #ff4d4f40;\n    .ant-picker-cell-in-view & {\n      color: #ff4d4f;\n    }\n  `,\n  detailedCell: css`\n    width: 40px;\n    height: 40px !important;\n  `,\n  detailedPicker: css`\n    .ant-picker-date-panel {\n      width: auto;\n      .ant-picker-content {\n        width: auto;\n      }\n    }\n  `,\n  extraInfo: css`\n    font-size: 12px;\n    line-height: 12px;\n    transform: scale(${10 / 12});\n    color: ${token.colorTextQuaternary};\n    .ant-picker-cell-in-view & {\n      color: ${token.colorTextSecondary};\n    }\n    .ant-picker-cell-selected & {\n      color: #fff;\n    }\n  `,\n  add: css`\n    color: #ff4d4f80;\n    .ant-picker-cell-in-view & {\n      color: #ff4d4f;\n    }\n    .ant-picker-cell-selected & {\n      color: #fff;\n    }\n  `,\n  minus: css`\n    color: #52c41a80;\n    .ant-picker-cell-in-view & {\n      color: #52c41a;\n    }\n    .ant-picker-cell-selected & {\n      color: #fff;\n    }\n  `,\n}));\n\nconst seeds = new Array(30).fill(1).map(() => Math.random());\n\nconst getSales = (date: Dayjs) => Math.floor(seeds[date.date() % 30] * 10000);\n\nconst getData = (date: Dayjs) => (Math.floor(seeds[date.date() % 30] * 10000) - 5000) / 5000;\n\nconst Demo: FC = () => {\n  const { styles } = useStyle();\n  const dateRender = (current: Dayjs) => (\n    <div\n      className={classNames(\n        'ant-picker-cell-inner',\n        [6, 0].includes(current.day()) && styles.weekendCell,\n      )}\n    >\n      {current.date()}\n    </div>\n  );\n\n  const saleDateRender = (current: Dayjs) => (\n    <div className={classNames('ant-picker-cell-inner', styles.detailedCell)}>\n      {current.date()}\n      <div className={styles.extraInfo}>{getSales(current)}</div>\n    </div>\n  );\n\n  const dataDateRender = (current: Dayjs) => {\n    const data = getData(current);\n\n    return (\n      <div className={classNames('ant-picker-cell-inner', styles.detailedCell)}>\n        {current.date()}\n        <div className={classNames(styles.extraInfo, data > 0 ? styles.add : styles.minus)}>\n          {data.toFixed(2)}%\n        </div>\n      </div>\n    );\n  };\n\n  return (\n    <div style={{ width: '100%' }}>\n      <div style={{ color: 'rgba(0,0,0,0.45)', marginBottom: 32 }}>\u529E\u516C\u573A\u666F\uFF1A\u9884\u89C8\u8282\u5047\u65E5\u4FE1\u606F</div>\n      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>\n        <PureDatePicker dateRender={dateRender} popupClassName={styles.detailedPicker} />\n      </div>\n      <div style={{ color: 'rgba(0,0,0,0.45)', marginBottom: 32 }}>\u7535\u5546\u573A\u666F\uFF1A\u9884\u89C8\u9500\u552E\u989D\u4FE1\u606F</div>\n      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>\n        <PureDatePicker dateRender={saleDateRender} popupClassName={styles.detailedPicker} />\n      </div>\n      <div style={{ color: 'rgba(0,0,0,0.45)', marginBottom: 32 }}>\u5927\u6570\u636E\u573A\u666F\uFF1A\u9884\u89C8\u6570\u636E\u6CE2\u52A8</div>\n      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>\n        <PureDatePicker dateRender={dataDateRender} popupClassName={styles.detailedPicker} />\n      </div>\n    </div>\n  );\n};\n\nexport default Demo;\n";},b8b2ead8:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}}),t("5ad8c7e0");var a="import type { FC } from 'react';\nimport React from 'react';\nimport { DatePicker } from 'antd';\n\nconst { _InternalPanelDoNotUseOrYouWillBeFired: PureDatePicker } = DatePicker;\n\nconst Demo: FC = () => <PureDatePicker showTime />;\n\nexport default Demo;\n";},c0a2c0be:function(e,n,t){"use strict";var a=t("852bbaa9")._;t.d(n,"__esModule",{value:!0}),t.d(n,"demos",{enumerable:!0,get:function(){return l;}});var r=t("852bbaa9"),d=r._(t("9959ceb9"));t("f37f120f");var o=r._(t("0d1c854e")),s=r._(t("f4e2564c")),i=r._(t("e6168191")),c=r._(t("b689591c"));let l={"components-date-picker-index-tab-design-demo-behavior-pattern":{component:d.default.memo(d.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("da9cb4ff")]).then(t.dr(a,t.bind(t,"da9cb4ff"))))),asset:null,context:void 0,renderOpts:void 0},"components-date-picker-index-tab-design-demo-pick-date":{component:d.default.memo(d.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("6306aed6")]).then(t.dr(a,t.bind(t,"6306aed6"))))),asset:{type:"BLOCK",id:"components-date-picker-index-tab-design-demo-pick-date",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("8f5ca547").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.1"}},entry:"index.tsx",title:"\u9009\u62E9\u67D0\u5929",description:"\u7528\u4E8E\u5177\u4F53\u65E5\u671F\u7684\u9009\u62E9\u3002\u7528\u6237\u4EC5\u9700\u8981\u8F93\u5165\u975E\u5E38\u5177\u4F53\u7684\u65E5\u671F\u4FE1\u606F\u65F6\u4F7F\u7528\u3002"},context:{react:d,antd:o},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("e2614321")]).then(t.dr(a,t.bind(t,"e2614321")))).default(...e)}},"components-date-picker-index-tab-design-demo-pick-week":{component:d.default.memo(d.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("e3c7bd49")]).then(t.dr(a,t.bind(t,"e3c7bd49"))))),asset:{type:"BLOCK",id:"components-date-picker-index-tab-design-demo-pick-week",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("4f587f97").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.1"}},entry:"index.tsx",title:"\u9009\u62E9\u67D0\u5468",description:"\u7528\u4E8E\u5468\u7684\u9009\u62E9\u3002\u7528\u6237\u4EC5\u9700\u8F93\u5165\u5E74\u4EFD + \u5468\u4FE1\u606F\u65F6\u4F7F\u7528\u3002"},context:{react:d,antd:o},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("e2614321")]).then(t.dr(a,t.bind(t,"e2614321")))).default(...e)}},"components-date-picker-index-tab-design-demo-pick-month":{component:d.default.memo(d.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("e27f82d3")]).then(t.dr(a,t.bind(t,"e27f82d3"))))),asset:{type:"BLOCK",id:"components-date-picker-index-tab-design-demo-pick-month",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("0233bb4a").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.1"}},entry:"index.tsx",title:"\u9009\u62E9\u67D0\u6708",description:"\u7528\u4E8E\u6708\u4EFD\u7684\u9009\u62E9\u3002\u7528\u6237\u4EC5\u9700\u8F93\u5165\u5E74\u4EFD + \u6708\u4EFD\u4FE1\u606F\u65F6\u4F7F\u7528\u3002"},context:{react:d,antd:o},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("e2614321")]).then(t.dr(a,t.bind(t,"e2614321")))).default(...e)}},"components-date-picker-index-tab-design-demo-pick-quarter":{component:d.default.memo(d.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("2f1d7bb9")]).then(t.dr(a,t.bind(t,"2f1d7bb9"))))),asset:{type:"BLOCK",id:"components-date-picker-index-tab-design-demo-pick-quarter",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("e7d28a77").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.1"}},entry:"index.tsx",title:"\u9009\u62E9\u67D0\u5B63\u5EA6",description:"\u7528\u4E8E\u5B63\u5EA6\u7684\u9009\u62E9\u3002\u7528\u6237\u4EC5\u9700\u8F93\u5165\u5E74\u4EFD + \u5B63\u5EA6\u4FE1\u606F\u65F6\u4F7F\u7528\u3002"},context:{react:d,antd:o},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("e2614321")]).then(t.dr(a,t.bind(t,"e2614321")))).default(...e)}},"components-date-picker-index-tab-design-demo-pick-year":{component:d.default.memo(d.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("775f2daf")]).then(t.dr(a,t.bind(t,"775f2daf"))))),asset:{type:"BLOCK",id:"components-date-picker-index-tab-design-demo-pick-year",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("a6090f63").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.1"}},entry:"index.tsx",title:"\u9009\u62E9\u67D0\u5E74",description:"\u7528\u4E8E\u5E74\u7684\u9009\u62E9\u3002\u7528\u6237\u4EC5\u9700\u8F93\u5165\u5E74\u4EFD\u65F6\u4F7F\u7528\u3002"},context:{react:d,antd:o},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("e2614321")]).then(t.dr(a,t.bind(t,"e2614321")))).default(...e)}},"components-date-picker-index-tab-design-demo-pick-time":{component:d.default.memo(d.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("2d7980a0")]).then(t.dr(a,t.bind(t,"2d7980a0"))))),asset:{type:"BLOCK",id:"components-date-picker-index-tab-design-demo-pick-time",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("b8b2ead8").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.1"}},entry:"index.tsx",title:"\u9009\u62E9\u67D0\u65F6\u523B",description:"\u7528\u4E8E\u5177\u4F53\u65F6\u523B\u7684\u9009\u62E9\u3002\u7528\u6237\u9700\u8F93\u5165\u5E74\u4EFD+\u6708\u4EFD+\u65E5\u671F+\u65F6\u95F4\u4FE1\u606F\u65F6\u4F7F\u7528\u3002"},context:{react:d,antd:o},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("e2614321")]).then(t.dr(a,t.bind(t,"e2614321")))).default(...e)}},"components-date-picker-index-tab-design-demo-pick-date-range":{component:d.default.memo(d.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("64979d07")]).then(t.dr(a,t.bind(t,"64979d07"))))),asset:{type:"BLOCK",id:"components-date-picker-index-tab-design-demo-pick-date-range",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("f5c9120f").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.1"}},entry:"index.tsx",title:"\u9009\u62E9\u67D0\u5929\u81F3\u67D0\u5929",description:"\u7528\u4E8E\u5177\u4F53\u65E5\u671F\u8303\u56F4\u7684\u9009\u62E9\u3002"},context:{react:d,antd:o},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("e2614321")]).then(t.dr(a,t.bind(t,"e2614321")))).default(...e)}},"components-date-picker-index-tab-design-demo-pick-week-range":{component:d.default.memo(d.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("ab1b3e8b")]).then(t.dr(a,t.bind(t,"ab1b3e8b"))))),asset:{type:"BLOCK",id:"components-date-picker-index-tab-design-demo-pick-week-range",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("3270db40").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.1"}},entry:"index.tsx",title:"\u9009\u62E9\u67D0\u5468\u81F3\u67D0\u5468",description:"\u7528\u4E8E\u5468\u8303\u56F4\u7684\u9009\u62E9\u3002"},context:{react:d,antd:o},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("e2614321")]).then(t.dr(a,t.bind(t,"e2614321")))).default(...e)}},"components-date-picker-index-tab-design-demo-pick-month-range":{component:d.default.memo(d.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("98d97cf3")]).then(t.dr(a,t.bind(t,"98d97cf3"))))),asset:{type:"BLOCK",id:"components-date-picker-index-tab-design-demo-pick-month-range",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("6f7e61a4").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.1"}},entry:"index.tsx",title:"\u9009\u62E9\u67D0\u6708\u81F3\u67D0\u6708",description:"\u7528\u4E8E\u6708\u8303\u56F4\u7684\u9009\u62E9\u3002"},context:{react:d,antd:o},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("e2614321")]).then(t.dr(a,t.bind(t,"e2614321")))).default(...e)}},"components-date-picker-index-tab-design-demo-pick-quarter-range":{component:d.default.memo(d.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("8ef71ba4")]).then(t.dr(a,t.bind(t,"8ef71ba4"))))),asset:{type:"BLOCK",id:"components-date-picker-index-tab-design-demo-pick-quarter-range",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("4708d14c").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.1"}},entry:"index.tsx",title:"\u9009\u62E9\u67D0\u5B63\u5EA6\u81F3\u67D0\u5B63\u5EA6",description:"\u7528\u4E8E\u5B63\u5EA6\u8303\u56F4\u7684\u9009\u62E9\u3002"},context:{react:d,antd:o},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("e2614321")]).then(t.dr(a,t.bind(t,"e2614321")))).default(...e)}},"components-date-picker-index-tab-design-demo-pick-year-range":{component:d.default.memo(d.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("f2d166e4")]).then(t.dr(a,t.bind(t,"f2d166e4"))))),asset:{type:"BLOCK",id:"components-date-picker-index-tab-design-demo-pick-year-range",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("7cf4eef4").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.1"}},entry:"index.tsx",title:"\u9009\u62E9\u67D0\u5E74\u81F3\u67D0\u5E74",description:"\u7528\u4E8E\u5E74\u8303\u56F4\u7684\u9009\u62E9\u3002"},context:{react:d,antd:o},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("e2614321")]).then(t.dr(a,t.bind(t,"e2614321")))).default(...e)}},"components-date-picker-index-tab-design-demo-pick-time-range":{component:d.default.memo(d.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("dc74dfb0")]).then(t.dr(a,t.bind(t,"dc74dfb0"))))),asset:{type:"BLOCK",id:"components-date-picker-index-tab-design-demo-pick-time-range",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("61ef4bb2").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.1"}},entry:"index.tsx",title:"\u9009\u62E9\u67D0\u65F6\u523B\u81F3\u67D0\u65F6\u523B",description:"\u7528\u4E8E\u5177\u4F53\u65F6\u523B\u8303\u56F4\u7684\u9009\u62E9\u3002"},context:{react:d,antd:o},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("e2614321")]).then(t.dr(a,t.bind(t,"e2614321")))).default(...e)}},"components-date-picker-index-tab-design-demo-preset-time":{component:d.default.memo(d.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("4e19fd2f")]).then(t.dr(a,t.bind(t,"4e19fd2f"))))),asset:{type:"BLOCK",id:"components-date-picker-index-tab-design-demo-preset-time",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("f2617b40").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.1"},dayjs:{type:"NPM",value:"1.11.13"}},entry:"index.tsx",title:"\u5FEB\u6377\u9009\u62E9\u65F6\u95F4\u70B9",description:"\u901A\u8FC7\u9762\u677F\u5DE6\u4FA7\u533A\u57DF\u63D0\u4F9B\u7684\u9884\u7F6E\u9879\uFF0C\u5E2E\u52A9\u7528\u6237\u5FEB\u901F\u5B8C\u6210\u65F6\u95F4\u70B9\u7684\u9009\u62E9\u3002"},context:{react:d,antd:o,dayjs:s},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("e2614321")]).then(t.dr(a,t.bind(t,"e2614321")))).default(...e)}},"components-date-picker-index-tab-design-demo-preset-range":{component:d.default.memo(d.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("af9f20f5")]).then(t.dr(a,t.bind(t,"af9f20f5"))))),asset:{type:"BLOCK",id:"components-date-picker-index-tab-design-demo-preset-range",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("c77878d4").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.1"},dayjs:{type:"NPM",value:"1.11.13"}},entry:"index.tsx",title:"\u5FEB\u6377\u9009\u62E9\u65F6\u95F4\u6BB5",description:"\u901A\u8FC7\u9762\u677F\u5DE6\u4FA7\u533A\u57DF\u63D0\u4F9B\u7684\u9884\u7F6E\u9879\uFF0C\u5E2E\u52A9\u7528\u6237\u5FEB\u901F\u5B8C\u6210\u65F6\u95F4\u6BB5\u7684\u9009\u62E9\u3002"},context:{react:d,antd:o,dayjs:s},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("e2614321")]).then(t.dr(a,t.bind(t,"e2614321")))).default(...e)}},"components-date-picker-index-tab-design-demo-date-extra-info":{component:d.default.memo(d.default.lazy(()=>Promise.all([t.ensure("common"),t.ensure("5649bc03")]).then(t.dr(a,t.bind(t,"5649bc03"))))),asset:{type:"BLOCK",id:"components-date-picker-index-tab-design-demo-date-extra-info",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t("ad557e22").default},react:{type:"NPM",value:"18.3.0-canary-c3048aab4-20240326"},antd:{type:"NPM",value:"5.21.1"},"antd-style":{type:"NPM",value:"3.6.3"},classnames:{type:"NPM",value:"2.5.1"}},entry:"index.tsx",title:"\u67E5\u770B\u65E5\u671F\u9644\u5C5E\u4FE1\u606F",description:"\u901A\u8FC7\u5B9A\u4E49\u65E5\u671F\u5355\u5143\u683C\u5185\u5BB9\u53CA\u6837\u5F0F\uFF0C\u4E3A\u7528\u6237\u5C55\u793A\u66F4\u591A\u4E1A\u52A1\u573A\u666F\u76F8\u5173\u4FE1\u606F\u4F5C\u4E3A\u9009\u62E9\u53C2\u8003\u3002"},context:{react:d,antd:o,"antd-style":i,classnames:c},renderOpts:{compile:async(...e)=>(await Promise.all([t.ensure("vendors_0"),t.ensure("vendors_1"),t.ensure("e2614321")]).then(t.dr(a,t.bind(t,"e2614321")))).default(...e)}}};},c77878d4:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}}),t("a0dec00f");var a="import React from 'react';\nimport { DatePicker } from 'antd';\nimport type { TimeRangePickerProps } from 'antd';\nimport dayjs from 'dayjs';\n\nconst { _InternalRangePanelDoNotUseOrYouWillBeFired: PureRangePicker } = DatePicker;\n\nconst rangePresets: TimeRangePickerProps['presets'] = [\n  { label: 'Last 7 Days', value: [dayjs().add(-7, 'd'), dayjs()] },\n  { label: 'Last 14 Days', value: [dayjs().add(-14, 'd'), dayjs()] },\n  { label: 'Last 30 Days', value: [dayjs().add(-30, 'd'), dayjs()] },\n  { label: 'Last 90 Days', value: [dayjs().add(-90, 'd'), dayjs()] },\n];\n\nconst App: React.FC = () => <PureRangePicker presets={rangePresets} />;\n\nexport default App;\n";},e7d28a77:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}}),t("76765306");var a="import type { FC } from 'react';\nimport React from 'react';\nimport { DatePicker } from 'antd';\n\nconst { _InternalPanelDoNotUseOrYouWillBeFired: PureDatePicker } = DatePicker;\n\nconst Demo: FC = () => <PureDatePicker picker=\"quarter\" />;\n\nexport default Demo;\n";},f2617b40:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}}),t("faa485d0");var a="import React from 'react';\nimport { DatePicker } from 'antd';\nimport dayjs from 'dayjs';\n\nconst { _InternalPanelDoNotUseOrYouWillBeFired: PureDatePicker } = DatePicker;\n\nconst App: React.FC = () => (\n  <PureDatePicker\n    presets={[\n      { label: 'Yesterday', value: dayjs().add(-1, 'd') },\n      { label: 'Last Week', value: dayjs().add(-7, 'd') },\n      { label: 'Last Month', value: dayjs().add(-1, 'month') },\n    ]}\n  />\n);\n\nexport default App;\n";},f5c9120f:function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"default",{enumerable:!0,get:function(){return a;}}),t("e23e229e");var a="import type { FC } from 'react';\nimport React from 'react';\nimport { DatePicker } from 'antd';\n\nconst { _InternalRangePanelDoNotUseOrYouWillBeFired: PureRangePicker } = DatePicker;\n\nconst Demo: FC = () => <PureRangePicker />;\n\nexport default Demo;\n";}}]);