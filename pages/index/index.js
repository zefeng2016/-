//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    cnt:''
  },
  
  onLoad: function (options) {
   
    let tableID = 22433
    let Product = new wx.BaaS.TableObject(tableID)
    let product = Product.create()
    product.set('testString', 'onLoad')
    product.save().then((res) => { }, (err) => { })
    this.setData({
      cnt:'onLoad'
    })
    
  },
  onReady: function () {
    // 页面渲染完成
    let tableID = 22433
    let Product = new wx.BaaS.TableObject(tableID)
    let product = Product.create()
    product.set('testString', 'onReady')
    product.save().then((res) => { }, (err) => { })
    this.setData({
      cnt: 'onReady'
    })
  },
  onShow: function () {
    let tableID = 22433
    let Product = new wx.BaaS.TableObject(tableID)
    let product = Product.create()
    product.set('testString', 'onShow')
    product.save().then((res) => { }, (err) => { })
    this.setData({
      cnt: 'onShow'
    })
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
    let tableID = 22433
    let Product = new wx.BaaS.TableObject(tableID)
    let product = Product.create()
    product.set('testString', 'onHide')
    product.save().then((res) => { }, (err) => { })
  },
  onUnload: function () {
    // 页面关闭
  }
})
