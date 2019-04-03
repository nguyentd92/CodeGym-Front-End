let add = (a ,b, cb) => {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            return cb(new Error('Tham so phai co kieu number'));
        }
        cb(undefined, a + b);
    }, 1000);
};
let multiply = (a , b, cb) => {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            return cb(new Error('Tham so phai co kieu number'));
        }
        cb(undefined, a * b);
    }, 1000);
};
let divide = (a , b, cb) => {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            return cb(new Error('Tham so phai co kieu number'));
        }
        if (b == 0) {
            return cb(new Error('Tham so phai khac 0'));
        }
        cb(undefined, a / b);
    }, 1000);
};


// add(4, '5', (e,res) => {
//     if (e) return console.log( e);
//     console.log('Ket qua: ' + res);
// })

let tinhDienTichHinhThang = (a, b, h, cb) => {
    add(a , b, (err, result) => {
        if (err) return cb(err);
        multiply(result, h, (err, result) => {
            if (err) return cb(err);
            divide(result, 2, (err, result) => {
                if (err) return cb(err);
                cb(undefined, result);
            });
        });
    });
};

tinhDienTichHinhThang(2 ,10 ,2 , (err, result) => {
    if (err) return console.log(err.toString());
    console.log('Dien tich hinh thang la: ', result);
});