//获取应用实例
const app = getApp() 

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    title:'个人信息修改',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  
  onLoad: function () {
  },

  jump(){
    wx.navigateTo({
      url: '/pages/logs/logs',
    })
  }
})