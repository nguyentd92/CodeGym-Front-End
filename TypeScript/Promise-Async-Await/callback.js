let square = (a, b, h) => (a + b) * h /2;
console.log('Dien tich: ' + square(2,3,2));

let add = (a , b, cb) => {
    setTimeout(() => {
        let err, result;
        if (typeof a != 'number' || typeof b != 'number') {
            err = 'Tham so phai co kieu number';
            return cb(new Error('Tham so phai co kieu number'), result);
        }
        result = a + b;
        cb(undefined, result);
    }, 1000);
};

add(4, '5', (e,res) => {
    if (e) return console.log( e);
    console.log('Ket qua: ' + res);
})