//global下属性和方法会挂载到window对象下。

global.ajax = function (url) {
    const promise = new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest()
        xhr.open('get', url, true)
        xhr.send()
        xhr.onreadystatechange = function () {
            if (this.readyState !== 4) {
                return;
            }
            if (this.status === 200) {
                // 请求成功后修改promise状态为fulfilled，并且将请求结果返回。
                try {
                    resolve(JSON.parse(this.responseText));
                } catch (error) {
                    reject(new Error('json解析失败'));
                }
               
            } else {
                // 请求不成功时修改状态为rejected，并且返回请求出错信息
                reject(new Error(this.statusText));
            }
        };
       
    })

    return promise;
}

