# VueDataBinding
Vue中数据双向绑定的简易实现

关键 vue1的每一个dom都是一个watcher 所以可以用window.target = this 来操作

然而vue2组件跟新采用了虚拟dom，所以一个个watcher实际对应的是一个个组件的render函数

所以用堆栈来保存，我比如渲染A的时候，遇到了B，此时堆栈是A,B，随后将B push进去了以后，渲染好了pop出来，然后A组件接着渲染。这就是用堆栈的好处。

详见：

https://segmentfault.com/q/1010000010095427

https://www.cnblogs.com/natsu07/p/10371448.html

