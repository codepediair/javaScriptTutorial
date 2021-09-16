let x = [1,5,8,6,4,7,1,5,9,85,3,52,6,5,5,9,96,2]

x.sort(function(a,b){return a - b})
// x.reverse()
console.log(x);

console.log(x[0]);
console.log(x[3]);
console.log(x[5]);

let numbers = []
numbers[0] = 4;
numbers[2] = 6;
numbers[1] = 5;
numbers[5] = 9;
numbers[4] = "mahdi"
numbers[3] = true;
console.log(numbers);

console.log(x[x.length - 1]);

let avg = 0;
let sum = 0;
for (let i = 0; i < x.length; i++){
    sum += x[i]
}
avg = sum / x.length
console.log(avg);



let holder = numbers.pop();
console.log(numbers);
// console.log(holder);

numbers.push("js")
console.log(numbers);

numbers.shift()
console.log(numbers);

numbers.unshift("crash")
console.log(numbers);

numbers[2] = 7;
console.log(numbers);

numbers.splice(2,2,"Course")
console.log(numbers);

let f_names = ["mahdi","reza","sara","mahsa"]

let new_arr = x.concat(numbers,f_names)
console.log(new_arr);


new_arr.forEach(foreachfunc);

function foreachfunc(value){
    if (value > 15){
        console.log(value);
    }
}


const over18 = new_arr.filter(filter_func)

function filter_func(value){
    return value > 18
}

console.log(over18);


const even_num = over18.map(eventer)

function eventer(value){
    return value * 2
}

console.log(even_num);


let pos = even_num.indexOf(170)
console.log(pos);