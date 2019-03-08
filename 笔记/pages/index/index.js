// pages/index/index.js
const bmap = require('../../pages/libs/bmap-wx.js');
const bgm = wx.getBackgroundAudioManager();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*滚动字幕 */
    announcementText:'',
    animationData:{},
    /*轮播图 */
    imgUrls: [
      {
        link: "/pages/logs/logs",
        url: '../img/lb1.jpg',
      },
      {
        link: "/pages/logs/logs",
        url: '../img/lb2.jpg',
      },
      {
        link: "/pages/logs/logs",
        url: '../img/lb3.jpg',
      },
      {
        link: "/pages/logs/logs",
        url: '../img/lb4.jpg',
      },
      {
        link: "/pages/logs/logs",
        url: '../img/lb5.jpg',
      },
    ],
    indicatorDots: true,
    autoplay: true,
    interval: 3000,
    duration: 500,


  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    //新建百度地图对象
    var Bmap = new bmap.BMapWX({
      ak: 'vIcGkztDGwqTDT36QSvwtZRx0W9BU1WQ'
    });
    
    var fail = function(data){
      console.log(data)
    };

    var success = function(data){
      var weatherData = data.currentWeather[0];
      var announcementText = data.currentWeather[0];
      announcementText = '城市：' + weatherData.currentCity + ',' + '日期：' + weatherData.date + ',' + '天气：' + weatherData.weatherDesc + ',' + '温度：' + weatherData.temperature + ',' + '风力：' + weatherData.wind;
      
      that.setData({
        announcementText: announcementText,
      });

    }

    //发起weather请求
    Bmap.weather({
      fail:fail,
      success:success
    });

    bgm.title = 'bgm'
    bgm.src = 'http://150.138.136.22/amobile.music.tc.qq.com/R400004NQSin0gO0Yk.m4a?guid=2122544015&vkey=C6DBF32FD1B0D53A66110B75F3881804BB277F325AC36D6D6D5F92C0AEB7A583BED396717A459EAAD351A8F6CCF9EAC696DAECEE755C5134&uin=0&fromtag=66'

  },

  //背景音乐
  stop: function(){   
    wx.stopBackgroundAudio()
  },
  
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    this.mapCtx = wx.createMapContext('imap', this);
    
  },
  moveToLocation: function () {
    this.mapCtx.moveToLocation()
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

    bgm.stop();

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
    wx.stopPullDownRefresh({
      success(res) {
        wx.showToast({
          title: '刷新成功',
          icon: 'success',
          duration: 1500,
          mask: true
        })
        
      }
    })
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