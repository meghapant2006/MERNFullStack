console.log("Hello, World!");

// 1- local variable.........
function data() {
    var a = 10;
    console.log(a);
    {
        var b = 20;
        console.log(b);
        console.log(a)
    }
}
data();

// 2- global variable.........
var a = 100;
var b = 200;
function data() {
    console.log(a);
    console.log(b);
}
data();
console.log(b);
