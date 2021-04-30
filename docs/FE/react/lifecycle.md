# 生命周期

[[TOC]]


## 挂载阶段
```js
componentWillMount()   
在组件挂载之前调用，且全局只调用一次

componentDidMount()
在组件挂载完成后调用，且全局只调用一次。
可以在这里使用refs，获取真实dom元素
<pre>li2345678</code>
```

## 更新阶段
```js
react组件更新机制
setState引起的state更新或父组件重新render引起的props更新
更新后的state和props相对之前无论是否有变化，都将引起子组件的重新render

componentWillReceiveProps(nextProps )  (props发生变化以及父组件重新渲染时都会触发该生命周期函数)

在该钩子内可以通过参数nextProps获取变化后的props参数
通过this.props访问之前的props。该生命周期内可以进行setState

shouldComponentUpdate(nextProps,nextState)  （优化性能)  
组件挂载之后，每次调用setState后都会调用shouldComponentUpdate判断是否需要重新渲染组件。
就是通过比较nextProps，nextState及当前组件的this.props，this.state的状态用来判断是否需要重新渲染
默认返回true，需要重新render，返回false则不触发渲染

componentWillUpdate(nextProps,nextState)   (不能在该钩子中setState，否则会触发重复循环)
组件即将被更新时触发

shouldComponentUpdate返回true或者调用forceUpdate之后，componentWillUpdate会被调用

componentDidUpdate(prevProps, prevState)   (setState可能会触发重复渲染,需自行判断，否则会进入死循环)
此方法在组件更新后被调用
除了首次render之后调用componentDidMount，其它render结束之后都是调用componentDidUpdate
可以操作组件更新的DOM，prevProps和prevState这两个参数指的是组件更新前的props和state

```

## 卸载阶段
```js
componentWillUnmount()  (此方法在组件被卸载前调用)
清除组件中使用的定时器、取消Redux的订阅事件、清除componentDidMount中手动创建的DOM元素等等，以避免引起内存泄漏
```

## getDerivedStateFromProps(nextProps, prevState)
```js
这个方法在 render() 之后，componentDidUpdate() 之前调用。
该方法传入的两个参数：prevProps表示更新前的 props，prevState表示更新前的 state
返回值称为一个快照（snapshot），如果不需要 snapshot，
则必须显示的返回 null —— 因为返回值将作为 componentDidUpdate() 的第三个参数使用。
所以这个函数必须要配合 componentDidUpdate() 一起使用。

```

## componentDidCatch(err,info)
```js
任何子组件在渲染期间，生命周期方法中或者构造函数 constructor 发生错误时调用。
两个参数：err表示抛出的错误，info表示带有componentStack key的对象，其中包含有关组件引发错误的栈信息。
```