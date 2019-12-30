// pages/categroy/categroy.js
import {
  getCategory,
  getgoodsByCategroyId
} from "../../service/categroy.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categroys: [],
    categroyIndex: 0,
    childCateIndex:0,
    firstCategoryId: "",
    goods: [],
    childCategroys: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    getCategory().then((res) => {
      res.data.data.forEach(item => {
        if (item.secondCategoryVO.length > 1) {
          item.secondCategoryVO.unshift({
            secondCategoryId: "0",
            firstCategoryId: "0",
            secondCategoryName: "全部",
            checked: false,
            comments: ""
          });
        }
      });
      this.setData({
        categroys: res.data.data,
        firstCategoryId: res.data.data[this.data.categroyIndex].firstCategoryId,
        childCategroys: res.data.data[this.data.categroyIndex].secondCategoryVO
      });
      console.log(this.data.categroys);

      this._getgoodsByCategroyId(1);
    }).catch((err) => {
      console.log(err);
    });
  },

  //根据分类获取商品
  _getgoodsByCategroyId(id) {
    getgoodsByCategroyId(id).then((res) => {
      this.setData({
        goods: res.data.data
      });
      console.log(this.data.goods);
    });

  },

  //子分类点击事件
  childCateHandle(event) {
    const index = event.currentTarget.dataset.index;
    this.setData({
      childCateIndex:index
    });
  },

  //主分类点击事件
  cateHandleClick(event) {
    const id = event.currentTarget.dataset.id;
    const categroyIndex = event.currentTarget.dataset.index;
    const childCate = this.data.categroys[categroyIndex].secondCategoryVO;
    this.setData({
      categroyIndex: categroyIndex,
      childCategroys: childCate,
      childCateIndex:0
    });
    //console.log(this.data.childCategroys);
  },

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