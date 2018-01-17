App({
  onLaunch: function () {
  
    require('./sdk/sdk-v1.1.4.js')
    let clientID = '84f476084b59e3ab98e4'
    wx.BaaS.init(clientID)

    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
  getUserInfo: function (cb) {
    var that = this;
    if (this.globalData.userInfo) {
      typeof cb == "function" && cb(this.globalData.userInfo)
    } else {
      //调用登录接口
      // wx.login({
      //   success: function () {
      //     wx.getUserInfo({
      //       success: function (res) {
      //         that.globalData.userInfo = res.userInfo;
      //         typeof cb == "function" && cb(that.globalData.userInfo)
      //       }
      //     })
      //   }
      // });
      wx.BaaS.login().then((res) => {

        // 用户允许授权，res 包含用户完整信息，详见下方描述
        that.globalData.userInfo = res;
        typeof cb == "function" && cb(that.globalData.userInfo)
        console.log(res)
        console.log
      }, (res) => {
        // 用户拒绝授权，res 包含基本用户信息：id、openid、unionid
        // *Tips*：如果你的业务需要用户必须授权才可进行，由于微信的限制，10 分钟内不可再次弹出授权窗口，此时可以调用 [`wx.authorize`]    (https://mp.weixin.qq.com/debug/wxadoc/dev/api/authorize.html) 要求用户提供授权


      })
    }
  },
  globalData: {
    userInfo: null
  }
})