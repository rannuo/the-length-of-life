//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    var items = wx.getStorageSync('items') || [];
    if (Array.isArray(items) && items.length > 0 ) {
      this.setGlobalData('items', items)
    } else {
      this.setGlobalData('items', [])
    }
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  setGlobalData(key, data) {
    this.globalData[key] = data;
    wx.setStorageSync(key, data)
  },
  addItem(item) {
    this.setGlobalData('items', this.globalData.items.concat(item))
  },
  deleteItem(id) {
    const newItems = this.globalData.items.filter(item => item.id !== id);
    console.log('new Items: ', newItems)
    this.setGlobalData('items', newItems);
  },
  globalData: {
    userInfo: null,
    items: []
  }
})