// pages/order/quasi.js
import {
  updateOrderAddr
} from '../../utils/apis'
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
  callbackAddress(addr_id) {
    var that = this
    var {id} = this
    var {loading} = this.data
    if (loading) {
      return
    }
    this.setData({
      loading: true
    })
    // wx.showNavigationBarLoading()
    updateOrderAddr({
      quasi_order_id: id,
      addr_id,
      success(data) {
        data['cut_money_total'] = +data.cut_money + +data.coupon_money
        that.setData({
          info: data,
          loading: false
        })
        wx.hideNavigationBarLoading()
      },
      error() {
        that.setData({
          loading: false
        })
        wx.hideNavigationBarLoading()
      }
    })
  },
  callbackContent(content) {
    this.setData({
      content
    })
  },
  onAddOrder(e) {
    // console.log(e)
    wx.switchTab({
      url: '/pages/order/list',
    })
  }
})