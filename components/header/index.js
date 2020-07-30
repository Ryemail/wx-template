// components/header/index.js

const { system } = getApp().globalData;

Component({
    options: {
        addGlobalClass: true,
        multipleSlots: true
    },
    /**
     * 组件的属性列表
     */
    properties: {
        title: {
            type: String,
            value: ''
        },
        color: {
            type: String,
            value: '#366FF5'
        },
        type: {
            type: String,
            value: 'capsule' //back
        },
        back: {
            type: Boolean,
            value: true
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        height: 0,
        capsule: {},
        statusBarHeight: 0,
        style: '',
        ios: false, // 是否ios
        titleStyle: '',
        iconStyle: '',
        wrapStyle: ''
    },
    attached() {
        const { statusBarHeight, windowWidth, platform } = system;

        const capsule = wx.getMenuButtonBoundingClientRect();

        const gap = capsule.top - statusBarHeight;

        const height = capsule.height + gap * 2 + statusBarHeight,
            left = windowWidth - capsule.right + capsule.width;

        console.log(capsule, height);
        this.setData({
            height,
            statusBarHeight,
            capsule,
            style: `height:${capsule.height}px;line-height:${capsule.height}px;`,
            titleStyle: `left:${left}px;right:${left}px;`,
            ios: platform === 'ios',
            iconStyle: `width:${capsule.height}px;`,
            wrapStyle: `height:${height}px;padding-top:${capsule.top}px;background-color:${this.data.color}`
        });
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 返回上一页
        actionBack() {
            const page = getCurrentPages();

            if (page.length === 1) return;

            wx.navigateBack({
                delta: 1
            });
        },
        // 去首页
        actionHome() {
            wx.reLaunch({
                url: '/pages/index/index'
            });
        }
    }
});
