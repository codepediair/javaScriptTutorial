let arr = [1,2,3,4,5,6]

for (let i in arr){
    console.log(i);
}

for (let v of arr){
    console.log(v);
}

function add(a = 2,b = 3,c = 2){
    return a + b + c
}

console.log(add(4,5));


// function sub(a, b){
//     return a - b
// }

sub = (a, b) => a - b
console.log(sub(3,1));