function greeter(person) {
    return "Hello, " + person;
}
function main() {
    console.log('START');
    if (true) {
        var lang = 'vi';
        var target = 'en-us';
        console.log('inside block');
        console.log(target);
    }
    console.log(lang);
}
var user = "Jane User";
document.write(greeter(user));
