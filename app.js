//app.js
App({
  onLaunch: function (options) {
    console.log(options,'options');
    wx.getSystemInfo({
      success(res){
        console.log(res);
      }
    })
  },
  globalData: {
    userInfo: null,
    system: {
      ios: false,// 是否是ios
    },
  }
})