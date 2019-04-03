let add = (a , b) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if(typeof a != 'number' || typeof b != 'number') {
                return reject(new Error('Tham so phai la number'))
            }
            resolve(a + b);
        }, 500);
    });        
};

//(4 + 5) + 6

// add(4,'5')
// .then(res => add(res, 6))
// .then(result => console.log(result), )
// .catch(err => console.log(err.toString()));

let multiply = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number") {
                return reject(new Error('not number'));
            }
            resolve(a * b);
        }, 500)
    })
}

let divide = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != "number" || typeof b != "number") {
                return reject(new Error('not number'));
            }
            if (b == 0) return reject(new Error('b is zero'));
            resolve(a / b);
        }, 500)
    })
}

let tinhDienTich = (a, b ,h) => {
    return add(a, b)
    .then(res => multiply(res, h))
    .then(result => divide(result, 2))
}

tinhDienTich(2,3,5)
.then(square => console.log('Dien tich hinh thang: ' + square))
.catch(err => console.log(err.toString()));