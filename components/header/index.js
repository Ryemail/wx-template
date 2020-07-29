// components/header/index.js

Component({

  options: {
    addGlobalClass: true,
    multipleSlots: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: ""
    },
    color: {
      type: String,
      value: "#366FF5"
    },
    type: {
      type: String,
      value: 'capsule' //back
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    height: 0,
    capsule: {},
    statusBarHeight: 0,
    style: "",
    ios: false, // 是否ios
    titleStyle: "",
    iconStyle: ''
  },
  attached() {
    const capsule = wx.getMenuButtonBoundingClientRect();

    wx.getSystemInfo({
      success: ({
        statusBarHeight,
        windowWidth,
        platform
      }) => {

        const height = statusBarHeight + capsule.height + (capsule.top - statusBarHeight) * 2,
          left = windowWidth - capsule.right + capsule.width;
          console.log(capsule,(capsule.bottom+capsule.top)-(statusBarHeight*2),height);
        this.setData({
          height,
          statusBarHeight,
          capsule,
          style: `height:${capsule.height}px;line-height:${capsule.height}px;`,
          titleStyle: `left:${left}px;right:${left}px;`,
          ios: platform === 'ios',
          iconStyle: `width:${capsule.height}px;`
        })
      }
    });

  },

  /**
   * 组件的方法列表
   */
  methods: {
    actionBack() {
      console.log('actionBack');
    }
  }
})