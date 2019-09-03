//index.js
//获取应用实例
import {
  getSellers
} from '../../utils/apis'

Page({
  data: {
    page: 0,
    hasMore: true,
    loading: false
  },
  onLoad: function () {
    this.initAddress()
  },

  initAddress() {
    var that = this
    this.invalidateData()
    getApp().getCurrentAddress(function (address) {
      if (address.addr_id) {
        address['title'] = `${address.addr} ${address.detail}`
      }
      that.setData({
        currentAddress: address
      })
      that.loadData()
    })
  },

  loadData() {
    if (this.data.loading) {
      return;
    }
    var that = this
    var {
      page,
    } = this.data

    this.setData({
      loading: true
    })
    getSellers({
      page,
      success(data) {
        var {
          shopList
        } = that.data

        var list = data.list.map(item => {
          item['distanceFormat'] = (item.distance / 1000).toFixed(2)
          return item
        })
        that.setData({
          shopList: shopList ? shopList.concat(list) : list,
          page: page + 1,
          hasMore: data.count == 10,
          loading: false
        })
      }
    })
  },
  invalidateData() {
    this.setData({
      page: 0,
      hasMore: true,
      loading: false,
      shopList: null
    })
  },
  onReachBottom(e) {
    if (this.data.hasMore && !this.data.loading) {
      this.loadData()
    }
  },
  callback(address) {
    getApp().setCurrentAddress(address)
    this.initAddress()
  },
  onShareAppMessage() {
    return {
      title: '首页',
      path: '/pages/index/index'
    }
  }
})
