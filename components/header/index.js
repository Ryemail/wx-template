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
      value: "T"
    },
    color: {
      type: String,
      value: "#366FF5"
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
    titleStyle: ""
  },
  attached() {
    const capsule = wx.getMenuButtonBoundingClientRect();

    wx.getSystemInfo({
      success: ({
        statusBarHeight,
        windowWidth
      }) => {

        const height = statusBarHeight + capsule.height + (capsule.top - statusBarHeight) * 2,
          left = windowWidth - capsule.right + capsule.width;

        this.setData({
          height,
          statusBarHeight,
          capsule,
          style: `height:${ capsule.height }px;line-height:${ capsule.height }px;`,
          titleStyle: `left:${left}px;right:${left}px;`
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