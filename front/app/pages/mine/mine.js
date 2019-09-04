// pages/mine/mine.js
import { getUserInfo, makePhoneCall } from '../../utils/util'
import { logout } from '../../utils/apis'

const app = getApp()
Page({
  data: {

    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that = this
    getUserInfo(userInfo => {
      this.setData({
        userInfo
      })
    })
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
    var that = this
    app.getLoginInfo(loginInfo => {
      that.setData({
        loginInfo: loginInfo.user_info
      })
    })
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },
  onPhoneTap(e) {
    makePhoneCall(e.currentTarget.dataset.phone)
  },
  onLogout(e) {
    var that = this
    var {loginInfo: {phone}, loading} = this.data
    if(loading) {
      return
    }
    this.setData({
      loading: true
    })
    logout({
      phone,
      success(data) {
        app.setLoginInfo(data)
        that.setData({
          loginInfo: null,
          loading: false
        })
      }
    })
  },
  callback(loginInfo) {
    this.setData({
      loginInfo: loginInfo.user_info
    })
  },
  onShareAppMessage() {
    return {
      title: '我的信息',
      path: '/pages/mine/mine'
    }
  }
})