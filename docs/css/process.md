#   CSS的可视化格式模型

[[TOC]]

## CSS的可视化格式模型
```js
CSS中规定每一个元素都有自己的盒子模型（相当于规定了这个元素如何显示）
然后可视化格式模型则是把这些盒子按照规则摆放到页面上，也就是如何布局
换句话说，盒子模型规定了怎么在页面里摆放盒子，盒子的相互作用等等
```

```js
包含块（Containing Block）
控制框（Controlling Box）
BFC（Block Formatting Context）
IFC（Inline Formatting Context）
定位体系
浮动
...
```

```js
包含块（Containing Block）
一个元素的box的定位和尺寸，会与某一矩形框有关，这个框就称之为包含块
元素会为它的子孙元素创建包含块，但是，并不是说元素的包含块就是它的父元素，元素的包含块与它的祖先元素的样式等有关系
譬如：
根元素是最顶端的元素，它没有父节点，它的包含块就是初始包含块
static和relative的包含块由它最近的块级、单元格或者行内块祖先元素的内容框（content）创建
fixed的包含块是当前可视窗口
absolute的包含块由它最近的position 属性为absolute、relative或者fixed的祖先元素创建
如果其祖先元素是行内元素，则包含块取决于其祖先元素的direction特性
如果祖先元素不是行内元素，那么包含块的区域应该是祖先元素的内边距边界

控制框（Controlling Box）
块框:
块级元素会生成一个块框（Block Box），块框会占据一整行，用来包含子box和生成的内容
块框同时也是一个块包含框（Containing Box），里面要么只包含块框，要么只包含行内框（不能混杂），如果块框内部有块级元素也有行内元素，那么行内元素会被匿名块框包围
行内框：
一个行内元素生成一个行内框
行内元素能排在一行，允许左右有其它元素
```

## display属性的影响 
```js
display的几个属性也可以影响不同框的生成：

block，元素生成一个块框
inline，元素产生一个或多个的行内框
inline-block，元素产生一个行内级块框，行内块框的内部会被当作块块来格式化，而此元素本身会被当作行内级框来格式化（这也是为什么会产生BFC）
none，不生成框，不再格式化结构中，当然了，另一个visibility: hidden则会产生一个不可见的框
总结：如果一个框里，有一个块级元素，那么这个框里的内容都会被当作块框来进行格式化，因为只要出现了块级元素，就会将里面的内容分块几块，
每一块独占一行（出现行内可以用匿名块框解决）
如果一个框里，没有任何块级元素，那么这个框里的内容会被当成行内框来格式化，因为里面的内容是按照顺序成行的排列
```

## BFC（Block Formatting Context）
```js
FC像是一个大箱子，里面装有很多元素
箱子可以隔开里面的元素和外面的元素（所以外部并不会影响FC内部的渲染）
内部的规则可以是：如何定位，宽高计算，margin折叠等等 （不同类型的框参与的FC类型不同，譬如块级框对应BFC，行内框对应IFC）
（并不是说所有的框都会产生FC，而是符合特定条件才会产生，只有产生了对应的FC后才会应用对应渲染规则）
```
```js
BFC规则：
在块格式化上下文中
每一个元素左外边与包含块的左边相接触（对于从右到左的格式化，右外边接触右边）
即使存在浮动也是如此（所以浮动元素正常会直接贴近它的包含块的左边，与普通元素重合）
除非这个元素也创建了一个新的BFC
```

## BFC特点：
```js
总结几点
内部box在垂直方向，一个接一个的放置
box的垂直方向由margin决定，属于同一个BFC的两个box间的margin会重叠
BFC区域不会与float box重叠（可用于排版)
BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素。反之也如此
计算BFC的高度时，浮动元素也参与计算（不会浮动坍塌）
如何触发BFC？

根元素
float属性不为none
position为absolute或fixed
display为inline-block, flex, inline-flex，table，table-cell，table-caption
overflow不为visible
这里提下，display: table，它本身不产生BFC，但是它会产生匿名框（包含display: table-cell的框），而这个匿名框产生BFC
```

## IFC（Inline Formatting Context）
```js
IFC即行内框产生的格式上下文
在行内格式化上下文中
框一个接一个地水平排列，起点是包含块的顶部。
水平方向上的 margin，border 和 padding 在框之间得到保留
框在垂直方向上可以以不同的方式对齐：它们的顶部或底部对齐，或根据其中文字的基线对齐

IFC规则
浮动元素可能会处于包含块边缘和行框边缘之间
尽管在相同的行内格式化上下文中的行框通常拥有相同的宽度（包含块的宽度），它们可能会因浮动元素缩短了可用宽度，而在宽度上发生变化
同一行内格式化上下文中的行框通常高度不一样（如，一行包含了一个高的图形，而其它行只包含文本）
当一行中行内框宽度的总和小于包含它们的行框的宽，它们在水平方向上的对齐，取决于 `text-align` 特性
空的行内框应该被忽略
即不包含文本，保留空白符，margin/padding/border非0的行内元素，
以及其他常规流中的内容(比如，图片，inline blocks 和 inline tables)，
并且不是以换行结束的行框，
必须被当作零高度行框对待

总结：
行内元素总是会应用IFC渲染规则
行内元素会应用IFC规则渲染，譬如text-align可以用来居中等
块框内部，对于文本这类的匿名元素，会产生匿名行框包围，而行框内部就应用IFC渲染规则
行内框内部，对于那些行内元素，一样应用IFC渲染规则
另外，inline-block，会在元素外层产生IFC（所以这个元素是可以通过text-align水平居中的），当然，它内部则按照BFC规则渲染
```