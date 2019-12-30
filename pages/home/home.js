// pages/home/home.js
import { getHomePageData} from "../../service/home.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    slides:[],
    recommend:[],
    floor1:[],
    category:[],
    floor1Pic:{}
  },
  //分类点击事件
  itemClick(event){
    console.log(event.detail.id);
  },
  //商品推荐点击事件
  recommendItemClick(event){
    console.log(event.detail.id);
  },
  //火爆专区
  hotHandleClick(event) {
    console.log(event.detail.id);
  },
  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    getHomePageData().then((res)=>{
      this.setData({
        slides: res.data.data.slides,
        recommend: res.data.data.recommend,
        floor1: res.data.data.floor1,
        category: res.data.data.category,
        floor1Pic: res.data.data.floor1Pic
      });
      console.log(this.data);
    })
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