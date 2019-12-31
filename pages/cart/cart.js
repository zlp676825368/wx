// pages/cart/cart.js
import {
  getCartGoods
} from "../../service/cart.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cartGoods: [],
    count:0,
    price:0.0,
    checked:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    getCartGoods().then((res) => {
      res.data.data.forEach((item) => {
        Object.assign(item, {
          count: 1,
          checked: false
        });
      });
      this.setData({
        cartGoods: res.data.data
      });
      console.log(this.data.cartGoods);
    });
  },
  //全选事件
  checkAll(event){
    let checked = !event.currentTarget.dataset.checked;
    this.setData({
      checked: checked
    });
    const goods = this.data.cartGoods;
    if(goods.length==0) return;
    goods.forEach((item)=>{
      item.checked=checked;
    });
    this._totalPrice(goods);
  },
  //计算总价和数量
  _totalPrice(goods){
    let _count = 0;
    let _price = 0.0;
    goods.forEach((item) => {
      if (item.checked) {
        _count += item.count;
        _price += item.count * item.presentPrice;
      }
    });
    let checked=false;
    if (goods.length==0){
      checked=false;
    }else{
       checked = goods.every(item => item.checked === true);
    }
    
    this.setData({
      cartGoods: goods,
      count: _count,
      price: Math.floor(_price * 100) / 100,
      checked: checked
    });
  },
  /**
   * 计算函数，当前索引，操作类型
   */
  _actions(index, type) {
    const goods = this.data.cartGoods;
    const good = this.data.cartGoods[index]; 
    switch (type) {
      case "check":
        good.checked = !good.checked;
        break;
      case "sub":
        if (good.count == 1) {
          goods.splice(index, 1);
        } else {
          good.count -= 1;
        }
        break;
      case "add":
        good.count += 1;
        break;
      case "del":
        goods.splice(index, 1);
        break;
    }
    this._totalPrice(goods);
    
  },
  //根据组件传递过来的商品id获取商品在数组中的索引
  _getIndex(goodsId){
    let _index;
    this.data.cartGoods.forEach((item, index) => {
      if (item.goodsId === goodsId) {
        _index=index;
      }
    });
    return _index;
  },
  /**
   * 组件事件
   */
  //CheckBox点击事件
  checkboxHandle(event) {
    this._actions(this._getIndex(event.detail.id), "check");
  },
  //购物车数量相减事件
  subHandle(event) {
    this._actions(this._getIndex(event.detail.id), "sub");
  },
  //购物车数量相加事件
  addHandle(event) {
    this._actions(this._getIndex(event.detail.id), "add");
  },
  //购物车删除按钮事件
  delHandle(event) {
    this._actions(this._getIndex(event.detail.id), "del");
  },
  /**
   * 组件事件
   */

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})