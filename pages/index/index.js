//获取应用实例
const app = getApp() 

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    title:'注册/个人信息修改',
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  
  onLoad: function () {
      // console.log(__wxConfig,wx.env.USER_DATA_PATH)
  },
  
})