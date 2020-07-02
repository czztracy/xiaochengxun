//index.js
//获取应用实例
const app = getApp()
import myBehavior from '../../utils/behaviors'
Page({
  behaviors: [myBehavior],
  data: {
    motto: 'Czz-home',
    dataFieldA: {
      a: 1,
      b: 2
    },
    dataFieldB: "111",
    List: [
      "vue",
      "react",
      "anguler"
    ],
    arr: [
      { id: 1, label: "MINA" },
      { id: 2, label: "ELEMENTUI" },
      { id: 3, label: "VANT" }
    ],
    numberArray: [1, 2, 3, 4, 5, 6, 7]
  },
  //事件处理函数
  bindViewTap: function() {
  },
  onLoad: function () {
    console.log()
  },
  getUserInfo: function() {
    const child = this.selectComponent('#the-id');
    console.log(child)
  },
  myEventListener(e) {
    console.log(e.detail, '子组件的数据')
  }
})
