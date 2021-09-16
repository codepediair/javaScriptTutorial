var x = 7;var y = 3;

// Base Action________
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
//____________________

// External Action ______
console.log(x % y);
console.log(x ** y);
console.log(x++);
console.log(--y);
//_______________________

// Assignment__________
var z = 15;
console.log(z);

z += 5  // z = z + 5
console.log(z);

z -= 5  // z = z + 5
console.log(z);

z *= 5  // z = z + 5
console.log(z);

z /= 5  // z = z + 5
console.log(z);

z %= 5
z **= 5

console.log(z);

//_____________________

// string Add_______________
var str1 = "javaScript";
var str2 = "Crash Course";

console.log(str1+" "+str2);

str1 += " Crash Course"
console.log(str1);

//__________________________

console.log("5" + 5);


var a,b,c;
a = 5;
b = 6;
c = "5"

console.log(a < b);
console.log(a > b);
console.log(a <= b);
console.log(a >= b);

console.log(a == b);
console.log(a != b);

console.log(a === c);
console.log(a !== c);


console.log(a < b && a == c); // true && true = true ----- false && ... = false
console.log(a < b || a === c); // false || false = false ----- true || ... = true


