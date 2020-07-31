import Toast from '../../miniprogram_npm/@vant/weapp/toast/toast';

const app = getApp();

const { isAuthor } = app.globalData;

Component({
    externalClasses: ['custom-class'],
    options: {
        multipleSlots: true,
        styleIsolation: 'apply-shared',
    },
    /**
     * 组件的属性列表
     */
    properties: {
        openType: {
            type: String,
            value: 'getUserInfo',
        },
        isSlot: {
            type: Boolean,
            value: false,
        },
    },

    /**
     * 组件的初始数据
     */
    data: {
        isAuthor: isAuthor, // 是否授权
    },
    created() {
        app.watch('isAuthor', (isAuthor) => {
            this.setData({ isAuthor });
        });
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 获取用户信息
        getuserinfo(e) {
            if (e.detail.userInfo) {
                const that = this;
                // 点击了确定

                Toast.loading({
                    message: '登录中...',
                    loadingType: 'spinner',
                    context: this,
                    onClose() {
                        app.globalData.userInfo = e.detail.userInfo;
                        app.globalData.isAuthor = true;

                        that.setData({ isAuthor: true });
                    },
                });
            } else {
                // 点击了取消
                Toast({
                    message: '您点击了取消',
                    context: this,
                });
            }
        },
    },
});
