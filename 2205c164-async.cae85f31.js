(("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd=("undefined"!=typeof globalThis?globalThis:self).makoChunk_antd||[]).push([["2205c164"],{"2205c164":function(e,a,n){"use strict";n.d(a,"__esModule",{value:!0}),n.d(a,"texts",{enumerable:!0,get:function(){return t;}}),n("00d23d4b");let t=[{value:"Recently we encountered an ",paraId:0},{value:"issue",paraId:0},{value:", saying that when ",paraId:0},{value:"contextHolder",paraId:0},{value:" of ",paraId:0},{value:"Modal.useModal",paraId:0},{value:" is placed in different positions, ",paraId:0},{value:"modal.confirm",paraId:0},{value:" popup location will be different:",paraId:0},{value:"import React from 'react';\nimport { Button, Modal } from 'antd';\n\nexport default () => {\n  const [modal, contextHolder] = Modal.useModal();\n\n  return (\n    <div>\n      <Modal open>\n        <Button\n          onClick={() => {\n            modal.confirm({ title: 'Hello World' });\n          }}\n        >\n          Confirm\n        </Button>\n\n        {/* \u{1F6A8} BUG when put here */}\n        {contextHolder}\n      </Modal>\n\n      {/* \u2705 Work as expect when put here */}\n      {/* {contextHolder} */}\n    </div>\n  );\n};\n",paraId:1},{value:"Workable version:",paraId:2},{value:"Bug version:",paraId:3},{value:"From the figure above, we can see that when ",paraId:4},{value:"contextHolder",paraId:4},{value:" is placed inside ",paraId:4},{value:"Modal",paraId:4},{value:", the pop-up position of the hooks call is incorrect.",paraId:4},{value:"antd's Modal internal calls the ",paraId:5,tocIndex:0},{value:"rc-dialog",paraId:5,tocIndex:0},{value:" component library, which accepts a ",paraId:5,tocIndex:0},{value:"mousePosition",paraId:5,tocIndex:0},{value:" attribute to control the pop-up position(",paraId:5,tocIndex:0},{value:"Dialog/Content/index.tsx",paraId:5,tocIndex:0},{value:")\uFF1A",paraId:5,tocIndex:0},{value:"// pseudocode\nconst elementOffset = offset(dialogElement);\nconst transformOrigin = `${mousePosition.x - elementOffset.left}px ${\n  mousePosition.y - elementOffset.top\n}px`;\n",paraId:6,tocIndex:0},{value:"The ",paraId:7,tocIndex:0},{value:"offset",paraId:7,tocIndex:0},{value:" method is used to obtain the coordinate position of the form itself(",paraId:7,tocIndex:0},{value:"util.ts",paraId:7,tocIndex:0},{value:")\uFF1A",paraId:7,tocIndex:0},{value:"// pseudocode\nfunction offset(el: Element) {\n  const { left, top } = el.getBoundingClientRect();\n  return { left, top };\n}\n",paraId:8,tocIndex:0},{value:"Through breakpoint debugging, we can find that the value of ",paraId:9,tocIndex:0},{value:"mousePosition",paraId:9,tocIndex:0},{value:" is correct, but the value of ",paraId:9,tocIndex:0},{value:"rect",paraId:9,tocIndex:0},{value:" obtained in ",paraId:9,tocIndex:0},{value:"offset",paraId:9,tocIndex:0},{value:" is wrong:",paraId:9,tocIndex:0},{value:'{\n  "left": 0,\n  "top": 0,\n  "width": 0,\n  "height": 0\n}\n',paraId:10,tocIndex:0},{value:"This value obviously means that the form component has not been added to the DOM tree at the animation start node, so we need to check the logic added by Dialog.",paraId:11,tocIndex:0},{value:"rc-dialog",paraId:12,tocIndex:1},{value:" creates a node in the document through ",paraId:12,tocIndex:1},{value:"rc-portal",paraId:12,tocIndex:1},{value:", and then renders the component to this node through ",paraId:12,tocIndex:1},{value:"ReactDOM.createPortal",paraId:12,tocIndex:1},{value:". For the different positions of ",paraId:12,tocIndex:1},{value:"contextHolder",paraId:12,tocIndex:1},{value:" and different interactive, it can be speculated that there must be a problem with the timing of creating nodes in the document, so we can take a closer look at the part of adding nodes by default in ",paraId:12,tocIndex:1},{value:"rc-portal",paraId:12,tocIndex:1},{value:"(",paraId:12,tocIndex:1},{value:"useDom.tsx",paraId:12,tocIndex:1},{value:")\uFF1A",paraId:12,tocIndex:1},{value:"// pseudocode\nfunction append() {\n  // This is not real world code, just for explain\n  document.body.appendChild(document.createElement('div'));\n}\n\nuseLayoutEffect(() => {\n  if (queueCreate) {\n    queueCreate(append);\n  } else {\n    append();\n  }\n}, []);\n",paraId:13,tocIndex:1},{value:"Among them, ",paraId:14,tocIndex:1},{value:"queueCreate",paraId:14,tocIndex:1},{value:" is obtained through ",paraId:14,tocIndex:1},{value:"context",paraId:14,tocIndex:1},{value:", the purpose is to prevent the situation that the child element is created before the parent element under the nesting level:",paraId:14,tocIndex:1},{value:'<Modal title="Hello 1" open>\n  <Modal title="Hello 2" open>\n  <Modal>\n<Modal>\n',paraId:15,tocIndex:1},{value:'<!-- Child `useLayoutEffect` is run before parent. Which makes inject DOM before parent -->\n<div data-title="Hello 2"></div>\n<div data-title="Hello 1"></div>\n',paraId:16,tocIndex:1},{value:"Use ",paraId:17,tocIndex:1},{value:"queueCreate",paraId:17,tocIndex:1},{value:" to add the ",paraId:17,tocIndex:1},{value:"append",paraId:17,tocIndex:1},{value:" of the child element to the queue, and then use ",paraId:17,tocIndex:1},{value:"useLayoutEffect",paraId:17,tocIndex:1},{value:" to execute:",paraId:17,tocIndex:1},{value:"// pseudocode\nconst [queue, setQueue] = useState<VoidFunction[]>([]);\n\nfunction queueCreate(appendFn: VoidFunction) {\n  setQueue((origin) => {\n    const newQueue = [appendFn, ...origin];\n    return newQueue;\n  });\n}\n\nuseLayoutEffect(() => {\n  if (queue.length) {\n    queue.forEach((appendFn) => appendFn());\n    setQueue([]);\n  }\n}, [queue]);\n",paraId:18,tocIndex:1},{value:"Due to the above queue operation, the DOM of the portal will be triggered in the next ",paraId:19,tocIndex:2},{value:"useLayoutEffect",paraId:19,tocIndex:2},{value:" under nesting. This causes the ",paraId:19,tocIndex:2},{value:"useLayoutEffect",paraId:19,tocIndex:2},{value:" timing of the animation to start in ",paraId:19,tocIndex:2},{value:"rc-dialog",paraId:19,tocIndex:2},{value:" after the node behavior is added, resulting in the element not being in the document and unable to obtain the correct coordinate information.",paraId:19,tocIndex:2},{value:"Since Modal is already enabled, it does not need to be executed asynchronously through ",paraId:20,tocIndex:2},{value:"queue",paraId:20,tocIndex:2},{value:", so we only need to add a judgment if it is enabled, and execute ",paraId:20,tocIndex:2},{value:"append",paraId:20,tocIndex:2},{value:" directly:",paraId:20,tocIndex:2},{value:"// pseudocode\nconst appendedRef = useRef(false);\n\nconst queueCreate = !appendedRef.current\n  ? (appendFn: VoidFunction) => {\n      // same code\n    }\n  : undefined;\n\nfunction append() {\n  // This is not real world code, just for explain\n  document.body.appendChild(document.createElement('div'));\n  appendedRef.current = true;\n}\n\n// ...\n\nreturn <PortalContext value={queueCreate}>{children}</PortalContext>;\n",paraId:21,tocIndex:2},{value:"That's all.",paraId:22,tocIndex:2}];}}]);