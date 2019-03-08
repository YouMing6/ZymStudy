// pages/shop/shop.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*搜索框数据 */
    inputShowed: false,
    inputVal: "",
    msg:'',
    /*轮播图数据 */
    imgUrls: [
      {
        link:"/pages/index/index",
        url: '../img/lunbo1.jpg',
      },
      {
        link: "../logs/logs",
        url: '../img/lunbo2.jpg',
      },
      {
        link: "/pages/index/index",
        url: '../img/lunbo3.jpg',
      },
      {
        link: "/pages/logs/logs",
        url: '../img/lunbo4.jpg',
      },
      {
        link: "/pages/index/index",
        url: '../img/lunbo5.jpg',
      },
    ],

    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,
  },
  /*搜索框事件*/
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false
    });
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    });
  },
  inputTyping: function (e) {
    this.setData({
      inputVal: e.detail.value
    });
  },
  /*轮播图事件*/
  /*轮播图图片跳转 */
  bindViewTap: function(event){
    wx.navigateTo({
      url: event.currentTarget.data.imgUrls.link,
    })
  },




  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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