export const login = () =>
    new Promise((resolve, reject) => {
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
                        reject(err);
                    },
                });
            },
        });
    });

export const getSetting = (author) =>
    new Promise((resolve, reject) => {
        wx.getSetting({
            success(res) {
                if (res.authSetting[author]) {
                    return resolve(true);
                }
                reject(false);
            },
            fail(err) {
                reject(err);
            },
        });
    });

export const openSetting = (author) =>
    new Promise((resolve, reject) => {
        wx.openSetting({
            success(res) {
                resolve(res.authSetting[author]);
            },
            fail(err) {
                reject(err);
            },
        });
    });

export const getUserInfo = () =>
    new Promise((resolve, reject) => {
        wx.getUserInfo({
            success(res) {
                resolve(res);
            },
            fail(err) {
                reject(err);
            },
        });
    });
