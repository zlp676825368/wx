// pages/home/w-hot/w-hot.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    recommend:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    hotHandleClick(event){
      this.triggerEvent("hotHandleClick", { id: event.currentTarget.dataset.id }, {});
    }
  }
})
