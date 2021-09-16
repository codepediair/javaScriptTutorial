function myfunc(){
    console.log("Hello World From Function");
}
// myfunc();

let x = 15
function factorial(n){
    // 4! = 4x3x2x1 = 24
    // var num = 6;
    let x = 8
    console.log(x);
    var fact = 1;
    for (let i = 2; i <= n; i++){
        fact *= i;
    }
    return fact;
}
console.log(factorial(4));
console.log(x);

function add(a, b){
    return a + b;
}

console.log(add(5,6)+9);


function message(str) {
    console.log(str);
}

txt = "this is string var"
message("this is new line");
message(txt)


function circle_area(r) {
    // πxrxr
    const pi = 3.1415; // constant
    return pi*r*r    
}

console.log(circle_area(5));
