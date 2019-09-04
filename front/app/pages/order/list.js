// pages/order/list.js
Page({
  data: {
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    console.log('onLoad')
    var that = this
    getApp().getLoginInfo(loginInfo => {
      that.setData({
        loginInfo: loginInfo
      })
      if (loginInfo.is_login) {
        that.initData()
      }
    })
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
    var that = this
    getApp().getLoginInfo(loginInfo => {
      that.setData({
        loginInfo: loginInfo
      })
    })
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})