// pages/categroy/categroy.js
import { getCategory } from "../../service/categroy.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categroys:[],
    checked:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getCategory().then((res)=>{
      this.setData({
        categroys: res.data.data
      });
      console.log(this.data.categroys);
    }).catch((err)=>{
      console.log(err);
    });
  },

  //分类点击事件
  cateHandleClick(event){
    const id = event.currentTarget.dataset.id;
    const array = this.data.categroys;
    array.forEach((item) => {
        item.checked = false;
    });
    array.forEach((item)=>{
      if (item.firstCategoryId===id){
        item.checked=true;
      }
    });
    this.setData({
      categroys: array
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})