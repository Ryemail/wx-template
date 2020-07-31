const { getSetting, getUserInfo } = require('../../utils/authorize');

//获取应用实例
const app = getApp();

Page({
    data: {
        motto: 'Hello World',
        userInfo: {},
        title: '个人信息修改',
        hasUserInfo: false,
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
    },

    onLoad: function () {
        getSetting('scope.userInfo')
            .then((res) => {
                return getUserInfo();
            })
            .then((res) => {
                console.log(res, '获取到的用户信息');
                app.globalData.isAuthor = true;
                app.globalData.userInfo = res.userInfo;
            })
            .catch((err) => {
                console.log(err, 'author');
            });
    },

    jump() {
        wx.navigateTo({
            url: '/pages/logs/logs',
        });
    },
});
