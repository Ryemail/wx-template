export const login = () => new Promise((resolve, reject) => {
  wx.checkSession({
    success(res) {
      //session_key 未过期，并且在本生命周期一直有效
      resolve(res);
    },
    fail() {
      // session_key 已经失效，需要重新执行登录流程
      wx.login({
        success(res) {
          resolve(res);
        },
        fail(err) {
          reject(err)
        }
      })
    }
  })
  
})


export const author = (author) => new Promise((resolve, reject) => {
  wx.getSetting({
    success(res) {
      if (res.authSetting[author] == undefined) { //从未授权
        wx.authorize({
          scope: author,
          success(authorizeResponse) {
            resolve(authorizeResponse)
          },
          fail(authorizeErr) {//拒绝授权
            reject(authorizeErr)
          }
        })
      } else { //已经存在
        if (res.authSetting[author]) { //已授权
          resolve(res)
        } else {
          wx.openSetting({
            success(openResponse) {
              if (openResponse.authSetting[author]) {
                resolve(true)
              } else {
                reject(openResponse)
              }
            }
          });
        }
      }
    }, fail(err) {
      reject(err);
    }
  })
})