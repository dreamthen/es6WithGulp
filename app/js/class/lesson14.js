{
    let ajax = function (callback) {
        console.log("执行");
        setTimeout(function timer() {
            callback && callback.call();
        }, 1000);
    };

    ajax(function () {
        console.log("执行完毕");
    });
}

{
    let ajax = function () {
        return new Promise(function (resolve, reject) {
            console.log("执行2");
            setTimeout(function timer() {
                resolve();
            }, 2000);
        });
    };

    ajax().then(function resolve() {
        console.log("执行2完毕");
    }, function reject() {

    });
}

{
    let ajax = function () {
        return new Promise(function (resolve, reject) {
            console.log("执行3");
            setTimeout(function timer() {
                resolve();
            }, 3000);
        });
    };
    ajax().then(function resolve() {
        return new Promise(function (resolve, reject) {
            console.log("执行4");
            setTimeout(function timer() {
                resolve();
            }, 4000);
        });
    }, function reject() {

    }).then(function resolve() {
        console.log("执行3和4完毕");
    });
}

{
    let ajax = function (num) {
        return new Promise(function (resolve, reject) {
            if (num > 5) {
                setTimeout(function timer() {
                    resolve();
                }, 5000);
            } else {
                setTimeout(function timer() {
                    reject();
                }, 4000);
            }
        });
    };

    ajax(3).then(function resolve() {
        console.log("resolve");
    }, function reject() {
        console.log("reject");
    });
}

{
    function loadImg(src) {
        return new Promise(function (resolve, reject) {
            let img = document.createElement("img");
            img.src = src;
            img.onload = function () {
                resolve(img);
            };
            img.onerror = function () {
                reject(img);
            };
        });
    }

    // loadImg("http://116.62.65.162:9024/images/keryiBarter_description_bg.png").then(function resolve(img) {
    //     document.body.appendChild(img);
    // });

    function showImg(imgs) {
        // imgs.forEach((imgItem, imgIndex) => {
        let p = document.createElement("p");
        p.appendChild(imgs);
        document.body.appendChild(p);
        // });
    }

    Promise.race([
        loadImg("http://116.62.65.162:9024/images/keryiBarter_description_bg.png"),
        loadImg("http://116.62.65.162:9024/images/keryiBarter_login_bg.png"),
        loadImg("http://116.62.65.162:9024/images/keryiBarter_register_bg.png")
    ]).then(showImg);
}