// pages/maps/maps.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    latitude:'',
    longitude:'',
    markers:[{
      id:0,
      iconPath: '../img/location.png',
      latitude: '36.262487',
      longitude: '117.024387', 
      width:50,
      height:50
    }]
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
    this.mapCtx = wx.createMapContext('imap', this)
   
  },
  
  getLocation: function () {
    const that =this;
    this.mapCtx.getCenterLocation({
      success: function (res) {
        var latitude = res.latitude;
        var longitude = res.longitude;
        that.setData({
          latitude:latitude,
          longitude:longitude
        })
      }
    })
    this.mapCtx.moveToLocation();
  },
 showmodel :function(){
   wx.showModal({
     title: '消息提示',
     content: '路线功能尚未开发，请等待',
     cancelColor:'#888888',
     confirmColor:'#09BB07',
     success(res){
       if(res.cancel){
         console.log("用户点击取消")
       }
       else if(res.confirm){
         console.log("用户点击确定")
       }
     }
   })
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