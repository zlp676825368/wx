// pages/cart/w-cart-item/w-cart-item.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    item:{
      type:Object,
      value:{}
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
    checkboxHandle(event){
      //value: Object.assign(this.properties.item, { count: 1, checked: false })
      this.triggerEvent("checkboxHandle",{id:event.currentTarget.dataset.id},{});
      //console.log(this.data);
    }, 
    subHandle(event){
      this.triggerEvent("subHandle", { id: event.currentTarget.dataset.id }, {});
    },
    addHandle(event) {
      this.triggerEvent("addHandle", { id: event.currentTarget.dataset.id }, {});
    },
    delHandle(event) {
      this.triggerEvent("delHandle", { id: event.currentTarget.dataset.id }, {});
    }
  }
})
