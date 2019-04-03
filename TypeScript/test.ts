function greeter(person: string): string{
    return "Hello, " + person;
}

function main() {
    console.log('START');
    if (true) {
        var lang = 'vi';
        let target = 'en-us';
        console.log('inside block');
        console.log(target);
    }
    console.log(lang);
}

function count() {
    let count = 50;
    if (count>0) {
        count--;
    } else {
        count = 0;
    }
    console.log(count);
}

let user: string = "Jane User";
document.write(greeter(user));