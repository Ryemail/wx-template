import { authorize } from './utils/index'
App({
    onLaunch: function(options) {
        console.log(options, 'options');

        const that = this;

        wx.getSystemInfo({
            success(system) {
                that.globalData.system = system;
            }
        });

        authorize.login().then(res=>{
            console.log(res.code);
        }).catch(err=>{ 
            console.log(err);
        })
    },
    globalData: {
        userInfo: null, // 用户信息

        system: null, // 设备基本信息

        isAuthor: false // 是否授权
    }
});
