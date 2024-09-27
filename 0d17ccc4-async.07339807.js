(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["0d17ccc4"],{"0d17ccc4":function(e,n,t){"use strict";t.d(n,"__esModule",{value:!0}),t.d(n,"texts",{enumerable:!0,get:function(){return a;}}),t("b4a633d9");let a=[{value:"We know that React 18 provides a ",paraId:0},{value:"useInsertionEffect",paraId:0},{value:" hooks specifically for CSS-IN-JS, which has a faster timing priority than ",paraId:0},{value:"useLayoutEffect",paraId:0},{value:", so that the order of calls will not be affected by the order of writing:",paraId:0},{value:"useLayoutEffect(() => {\n  console.log('layout effect');\n}, []);\n\nuseInsertionEffect(() => {\n  console.log('insertion effect');\n}, []);\n\n// Console:\n// - insertion effect\n// - layout effect\n",paraId:1},{value:"In early ",paraId:2},{value:"@ant-design/cssinjs",paraId:2},{value:" implementation, we did not choose ",paraId:2},{value:"useInsertionEffect",paraId:2},{value:" because we needed to be compatible with React 17 version, but simulated the effect of inserting in advance by adding styles in the render phase:",paraId:2},{value:"// pseudocode. Not used in real world\nfunction useStyleInsertion(hash: string, counter: Record<string, number>) {\n  useMemo(() => {\n    if (!counter[hash]) {\n      // Insert only when current style not inserted\n    }\n\n    counter[hash] += 1;\n  }, [hash]);\n\n  useEffect(\n    () => () => {\n      counter[hash] -= 1;\n\n      if (!counter[hash]) {\n        // Remove if set to clear on destroy\n      }\n    },\n    [hash],\n  );\n}\n",paraId:3},{value:"Above code will count the usage of styles, if the current style has not been inserted, it will insert the style in the render phase. Similarly, if the current style is configured to be unloaded when it is not in use, it will be cleared after the effect confirms the count. In addition, there is a similar logic that listens for changes in tokens, and when there are multiple tokens, it will clear all styles ",paraId:4},{value:"<style />",paraId:4},{value:" corresponding to tokens that are no longer in use to avoid memory leaks caused by too many theme switches.",paraId:4},{value:"These code can run perfectly in React 17, and also run very well in React 18's StrictMode. ",paraId:5},{value:"counter",paraId:5},{value:" always appears and disappears in pairs. But under Suspense, it may have problems.",paraId:5},{value:"The StrictMode of React 18 is different from ",paraId:6,tocIndex:0},{value:"React 17",paraId:6,tocIndex:0},{value:" in that it will be called multiple times in each phase to ensure that developers clean up the Effect:",paraId:6,tocIndex:0},{value:"\n```tsx\nconst My = () => {\n  console.log('render');\n\n  useMemo(() => {\n    console.log('memo');\n  }, []);\n\n  useEffect(() => {\n    console.log('effect');\n\n    return () => {\n      console.log('effect cleanup');\n    };\n  }, []);\n};\n\n<StrictMode>\n  <My />\n</StrictMode>;\n\n// Console:\n// - render\n// - memo\n// - render\n// - memo\n// - effect\n// - effect cleanup\n// - effect\n",paraId:7,tocIndex:0},{value:"With above sample, we can know that ",paraId:8,tocIndex:0},{value:"counter",paraId:8,tocIndex:0},{value:" in StrictMode will be accumulated, but the final value will be correct (that is, each component will only be counted once):",paraId:8,tocIndex:0},{value:"memo: 1",paraId:9,tocIndex:0},{value:"memo: 2",paraId:9,tocIndex:0},{value:"effect cleanup: 1",paraId:9,tocIndex:0},{value:"But StrictMode is just a simulation of Suspense. In the real scenario, the number of executions is not guaranteed to appear in pairs.",paraId:10,tocIndex:0},{value:"We use ",paraId:11,tocIndex:1},{value:"umi",paraId:11,tocIndex:1},{value:" for site development, which is split by page and loaded on demand by default. Display the loading state during the loading process through Suspense:",paraId:11,tocIndex:1},{value:"<BrowserRoutes>\n  <Routs>\n    <Suspense fallback={<Loading />} />\n  </Routs>\n</BrowserRoutes>\n",paraId:12,tocIndex:1},{value:"When switching pages, there is a chance that some styles will be lost when the page is switched back and forth:",paraId:13,tocIndex:1},{value:"Part of the style lost in Page 1 is the style unique to Page 1 (some tokens are customized through ConfigProvider), and the style of Page 2 is the style common to Page 1 and Page 2.",paraId:14,tocIndex:1},{value:"With the style management logic we introduced at the beginning, Page 1 will be cleared all styles ",paraId:15,tocIndex:1},{value:"<style />",paraId:15,tocIndex:1},{value:" corresponding to the token when Page 2 is rendered because it has styles corresponding to the independent token. This looks as expected, so the problem is that the style is not re-inserted when switching back to Page 1.",paraId:15,tocIndex:1},{value:"With a series of breakpoints, we found that this problem is caused by the asynchronous nature of Suspense. It will call the component multiple times during the loading process, so the timing of the component style registration will also be called multiple times. And since our counter is in the render phase, the counter will be called multiple times under Suspense, which will cause the value of the counter to be incorrect:",paraId:16,tocIndex:2},{value:"render: 0",paraId:17,tocIndex:2},{value:"useMemo: 1",paraId:17,tocIndex:2},{value:"render: 1",paraId:17,tocIndex:2},{value:"useMemo: 2",paraId:17,tocIndex:2},{value:"effect: 2",paraId:17,tocIndex:2},{value:"Not like StrictMode, effect is not executed again, so effect cleanup will not be executed",paraId:17,tocIndex:2},{value:"Counter is not synchronized, so the token manager thinks that the style is no longer in use, so it performs batch cleaning, while the component style manager thinks that other components are still in use, so when re-entering Page 1, the style will not be re-inserted.",paraId:18,tocIndex:2},{value:"Obviously, due to its characteristics, we cannot use ",paraId:19,tocIndex:3},{value:"useMemo",paraId:19,tocIndex:3},{value:" as a counter, it will not appear in pairs with ",paraId:19,tocIndex:3},{value:"useEffect",paraId:19,tocIndex:3},{value:". So we consider using ",paraId:19,tocIndex:3},{value:"useInsertionEffect",paraId:19,tocIndex:3},{value:" to insert styles:",paraId:19,tocIndex:3},{value:"// pseudocode. Not used in real world\nuseInsertionEffect(() => {\n  if (!counter[hash]) {\n    // Insert only when current style not inserted\n  }\n  counter[hash] += 1;\n\n  return () => {\n    counter[hash] -= 1;\n\n    if (!counter[hash]) {\n      // Remove if set to clear on destroy\n    }\n  };\n}, [hash]);\n",paraId:20,tocIndex:3},{value:"And for React 17 version, it is downgraded to ",paraId:21,tocIndex:3},{value:"useLayoutEffect",paraId:21,tocIndex:3},{value:":",paraId:21,tocIndex:3},{value:"const useMergedInsertionEffect = useInsertionEffect || useLayoutEffect;\n\nuseMergedInsertionEffect(() => {\n  // Same as above\n}, [hash]);\n",paraId:22,tocIndex:3},{value:"With this modification, we found that React 17's CI was failed. After checking, we found that ",paraId:23,tocIndex:3},{value:"useLayoutEffect",paraId:23,tocIndex:3},{value:" will have a timing problem:",paraId:23,tocIndex:3},{value:"// Some logic measure DOM size\nuseLayoutEffect(() => {\n  // This is not correct since style is not applied\n  const { clientHeight } = nodeRef.current;\n}, []);\n\n// Inject style\nuseLayoutEffect(() => {\n  // ...\n}, [hash]);\n",paraId:24,tocIndex:3},{value:"Measure logic in ",paraId:25,tocIndex:3},{value:"useLayoutEffect",paraId:25,tocIndex:3},{value:" is executed before injecting style, resulting in incorrect size information. It can also be predicted that this will have an impact on developers. So we have to compromise, and in React 17 version, it will be downgraded to the original ",paraId:25,tocIndex:3},{value:"useMemo",paraId:25,tocIndex:3},{value:" insertion.",paraId:25,tocIndex:3},{value:"With the above solution, ",paraId:26,tocIndex:4},{value:"useInsertionEffect",paraId:26,tocIndex:4},{value:" perfectly solve the rendering problem. But in React 17 and below versions, we still insert styles in the render phase, but we will increase the reference count in the effect phase. But this brings a new problem, let's look at a piece of code (",paraId:26,tocIndex:4},{value:"CodeSandbox",paraId:26,tocIndex:4},{value:"):",paraId:26,tocIndex:4},{value:"import React from 'react';\n\nconst A = () => {\n  React.useMemo(() => {\n    console.log('A render');\n  }, []);\n\n  React.useEffect(() => {\n    console.log('A mounted');\n    return () => {\n      console.log('A unmounted');\n    };\n  }, []);\n\n  return <div>A</div>;\n};\n\nconst B = () => {\n  React.useMemo(() => {\n    console.log('B render');\n  }, []);\n\n  React.useEffect(() => {\n    console.log('B mounted');\n    return () => {\n      console.log('B unmounted');\n    };\n  }, []);\n\n  return <div>B</div>;\n};\n\nexport default function App() {\n  const [show, setShow] = React.useState(true);\n\n  const toggle = () => {\n    setShow((prev) => !prev);\n  };\n\n  return (\n    <div>\n      <button onClick={toggle}>toggle</button>\n      <div>{show ? <A /> : <B />}</div>\n    </div>\n  );\n}\n",paraId:27,tocIndex:4},{value:"In this code (strict mode), clicking the button will switch the rendering of A and B. So what will the order of console be when switching from A to B? The answer is:",paraId:28,tocIndex:4},{value:"B render\nB render\nA unmounted\nB mounted\nB unmounted\nB mounted\n",paraId:29,tocIndex:4},{value:"We can see that the rendering of the new component is before the unmount callback of the old component. Remember the processing logic of ",paraId:30,tocIndex:4},{value:"cssinjs",paraId:30,tocIndex:4},{value:" in React 17? Let's mark it:",paraId:30,tocIndex:4},{value:"B render      // Write to cache and insert style tag\nB render      // Write to cache and insert style tag\nA unmounted   // **Reference count--** (Reference count changed from 1 to 0, so the style was unloaded)\nB mounted     // Reference count++ (Reference count changed from 0 to 1, but the style was inserted before unloaded)\nB unmounted   // Reference count--\nB mounted     // Reference count++\n",paraId:31,tocIndex:4},{value:"We finally find out that due to reference count is not updated in time, the style was unloaded, which in not as expected.",paraId:32,tocIndex:4},{value:"And the solution is simple: when the count changes from 0 to 1, style will be inserted again.",paraId:33,tocIndex:4},{value:"Suspense brings rendering performance improvements, but it also makes timing very important. It is not the best way to only 'work on' StrictMode. Different logic is used for different React versions is not good choice since it will have timing problem. ",paraId:34,tocIndex:5},{value:"render",paraId:34,tocIndex:5},{value:" will trigger from parent node to child node in turn, while ",paraId:34,tocIndex:5},{value:"useInsertionEffect",paraId:34,tocIndex:5},{value:" is the opposite. However, from the perspective of antd, the component styles are independent of each other, so this problem will not affect us.",paraId:34,tocIndex:5}];}}]);