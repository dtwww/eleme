//index.js
//获取应用实例
import {
  getSellers
} from '../../utils/apis'

Page({
  data: {
    imgUrls: [
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567574729884&di=ae1a2bff0ab7ca19f830045ac64b6091&imgtype=0&src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F01be8f554218a40000019ae963f53c.jpg',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567575198222&di=47be4b70f92615b1835e23875de3c450&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F963888d523261296078738484ff3e3f4be4efc2e30c6c-lDOP5Q_fw658',
      'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567575287368&di=a5861dd3a241ee834a5e86e32fd3eaf4&imgtype=0&src=http%3A%2F%2Fimg.yanj.cn%2Fstore%2Fgoods%2F6583%2F6583_b31125b540ef51dad4f74b63590a7f22.jpg_mid.jpg'
    ],
    indicatorDots: true,
    autoplay: true,
    circular: true,
    interval: 2000,
    duration: 500,
    text: '好吃好吃好吃好吃好吃好吃好吃好吃',
    marqueePace: 1,//滚动速度
    marqueeDistance: 0,//初始滚动距离
    size: 14,
    orientation: 'left',//滚动方向
    interval2: 20, // 时间间隔
    adUrl: '../../images/notice.png',
  },
  onLoad: function () {
    let that = this
    wx.request({
      url: 'http://127.0.0.1:5000/store',
      method: 'GET',
      header: {
        'content-type': 'json'
      },
      success: function (res) {
        that.setData({
          list: res.data.list
        })
      }
    })
  },
  onShow: function() {
    var that = this;
    var length = that.data.text.length * that.data.size;//文字长度
    var windowWidth = wx.getSystemInfoSync().windowWidth;// 屏幕宽度
    that.setData({
      length: length,
      windowWidth: windowWidth,
    });
    that.runMarquee();// 水平一行字滚动完了再按照原来的方向滚动
  },
  runMarquee: function () {
    var that = this;
    var interval2 = setInterval(function () {
      //文字一直移动到末端
      if (-that.data.marqueeDistance < that.data.length) {
        that.setData({
          marqueeDistance: that.data.marqueeDistance - that.data.marqueePace,
        });
      } else {
        clearInterval(interval2);
        that.setData({
          marqueeDistance: that.data.windowWidth
        });
        that.runMarquee();
      }
    }, that.data.interval2);
  }
})
