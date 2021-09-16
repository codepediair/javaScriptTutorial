// let Car = {
//     brand:"Ford",
//     model:"mustang",
//     year: 1969,
//     age: function(){
//         return 2021 - this.year;
//     }
// }

// console.log(Car.brand);

// console.log(Car.age());

function Car (brand, model, year){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.age = age;
}

function age(){
    return 2021 - this.year
}

let c1 = new Car("ford","mustang", 1969)
let c2 = new Car("volvo","XC90", 2019)

console.log(c1.brand);
console.log(c2.brand);


console.log(c2.year);

console.log(c1.age());
console.log(c2.age());


console.log(c1);