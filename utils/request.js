class Request {
    constructor() {
        this._header = {};
        this.baseURL = '';
    }

    /**
     * GET类型的网络请求
     */
    get(url, data, header = this._header) {
        return this.requestAll(url, data, header, 'GET');
    }

    /**
     * DELETE类型的网络请求
     */
    del(url, data, header = this._header) {
        return this.requestAll(url, data, header, 'DELETE');
    }

    /**
     * PUT类型的网络请求
     */
    put(url, data, header = this._header) {
        return this.requestAll(url, data, header, 'PUT');
    }

    /**
     * POST类型的网络请求
     */
    post(url, data, header = this._header) {
        return this.requestAll(url, data, header, 'POST');
    }

    /**
     * 网络请求
     */
    requestAll(url, data, header, method) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: this.baseURL + url,
                data,
                header,
                method,
                success: (res) => {
                    if (res.statusCode === 200) {
                        return resolve(res);
                    }
                    reject(res);
                },
                fail: (res) => {
                    reject(res);
                },
                complete() {},
            });
        });
    }
}

export default new Request();
