// components/componentTagName/component-tag-name.js.js
Component({
  // 在组件定义时的选项中启用多slot支持
  options: {
    multipleSlots: true
  },
  /**
   * 组件的属性列表
   */
  properties: {
    propA: {
      type: Object,
      value: {}
    },
    propB: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    msg: "Czz-Home-ComponentTagName"
  },

  // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
  lifetimes: {
    // 在组件实例进入页面节点树时执行
    attached() {
      console.log("进入页面节点时", this.properties.propA, 'propA', this.properties.propB, 'propB')
    },
    // 监听页面初次渲染完成
    ready() {
      console.log("监听页面初次渲染完成", this.properties.propA, 'propA', this.properties.propB, 'propB')
    },
    // 在组件实例被从页面节点树移除时执行
    detached() {
      // console.log(this.propA, 'propA', this.propB, 'propB')
    },
  },
  // 组件所在页面的生命周期函数
  pageLifetimes: {
    // 监听页面显示
    show() {
      // this.setData({
      //   msg: this.properties.propA.b
      // })
      console.log('监听页面显示', this.properties.propA, 'propA', this.properties.propB, 'propB')
    },
    // 数据渲染后 未更新到dom
    created() {
      // 取不到父组件的值
      console.log('数据渲染后 未更新到dom', this.properties.propA, 'propA', this.properties.propB, 'propB')
    },
    hide() { },
    resize() { },
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e) {
      console.log(e, '传的参数')
      // detail对象，提供给事件监听函数
      var myEventDetail = {
        msg: this.data.msg,
        a: 1
      }
      // 触发事件的选项
      var myEventOption = {}
      this.triggerEvent("myevent", myEventDetail, myEventOption)
    }
  }
})
