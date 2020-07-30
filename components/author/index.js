// components/author/index.js

const { isAuthor } = getApp().globalData;

Component({
    externalClasses: ['custom-class'],
    options: {
        multipleSlots: true,
        styleIsolation: 'apply-shared'
    },
    /**
     * 组件的属性列表
     */
    properties: {
        openType: {
            type: String,
            value: 'getUserInfo'
        },
        slot: {
            type: Boolean,
            value: false
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        isAuthor: isAuthor // 是否授权
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 获取用户信息
        getuserinfo(e) {
            console.log(e, 'e');
        }
    }
});
