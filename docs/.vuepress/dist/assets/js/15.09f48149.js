(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{219:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"事件委托（事件流）"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件委托（事件流）"}},[t._v("#")]),t._v(" 事件委托（事件流）")]),t._v(" "),s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#事件流"}},[t._v("事件流")])]),s("li",[s("a",{attrs:{href:"#addeventlistener"}},[t._v("addEventListener")])])])]),s("p"),t._v(" "),s("h2",{attrs:{id:"事件流"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件流"}},[t._v("#")]),t._v(" 事件流")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("事件流描述的是从页面中接受事件的顺序\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1.")]),t._v("捕获阶段\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.")]),t._v("目标阶段\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3.")]),t._v("冒泡阶段\n\nstopPropagation\n  event"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("stopPropagation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  这是Event对象的一个方法，用来阻止事件进一步传播。\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("使用了stopPropagation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("之后，事件就不能进一步传播了，即使是在div上，捕获和冒泡被认为是两个步骤，\n所以在捕获阶段传播被阻止时同节点上的冒泡也不会触发。\n\nstopImmediatePropagation\n这是Event对象的一个方法，一旦调用这个方法，则该元素上未触发的监听都不会被触发，事件也不会进一步传播。\n\n")])])]),s("h2",{attrs:{id:"addeventlistener"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#addeventlistener"}},[t._v("#")]),t._v(" addEventListener")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("type"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" listener"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  第三个参数类型支持object\n\n\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);