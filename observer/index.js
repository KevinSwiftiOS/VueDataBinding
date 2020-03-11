class Observer {
  constructor(data) {
    this.data = data;
    this.walk(data);
  }
  walk (data) {
    //遍历对象中的属性
    Object.keys(data).forEach(function (key) {
      defineReactive(data, key, data[key]);
    })
  }
}



function observe (value) {
  if (!value || typeof value !== "object") {
    return;
  }
  return new Observer(value);
}

function defineReactive (data, key, val) {
  //为每一个属性确立一个Dep类 然后dep类里面有deps数组
  const dep = new Dep();
  let childOb = observe(val); //子属性也要做
  Object.defineProperty(data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
      }
      return val;
    },
    set: function (newVal) {
      if (val == newVal) {
        return;
      } else {
        val = newVal;
        dep.notify();
      }
    }
  })
}