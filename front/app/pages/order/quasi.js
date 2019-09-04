// pages/order/quasi.js
Page({
  data: {
    content: ''
  },
  onLoad: function (options) {
    // 页面初始化
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  onAddOrder(e) {
    // console.log(e)
    wx.switchTab({
      url: '/pages/order/list',
    })
  }
})