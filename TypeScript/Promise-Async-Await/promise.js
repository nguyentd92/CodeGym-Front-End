let aPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Thanh Cong");
    }, 1000);
    reject(new Error("Khong the ket noi den server"));
});

aPromise.then((msg) => console.log('Da thuc thi:' + msg),
    (errMsg) => console.log(errMsg.toString()));
