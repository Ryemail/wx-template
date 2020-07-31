import { authorize } from './utils/index';
App({
    onLaunch: function (options) {
        console.log(options, 'options');

        const that = this;

        wx.getSystemInfo({
            success(system) {
                that.globalData.system = system;
            },
        });
    },
    watch(key, method) {
        Object.defineProperty(this.globalData, key, {
            configurable: true,
            enumerable: true,
            set(value) {
                this['_' + key] = value;
                method(value);
            },
            get() {
                return this['_' + key];
            },
        });
    },
    globalData: {
        userInfo: null, // 用户信息

        system: null, // 设备基本信息

        isAuthor: false, // 是否授权
    },
});
