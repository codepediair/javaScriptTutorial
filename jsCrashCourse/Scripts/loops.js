var i = 0; // Start Point
while (i<10) { // loop Condition
    console.log("hello"); // Order
    i++; // steps
}

var i = 5; // Start Point
while (i<10) { // loop Condition
    console.log("hello"); // Order
    i+=2; // steps
}

for(var j = 0; j<10; j++){
    if (j == 5){
        // break;
        continue;
    }
    console.log(j);
}

var k = 15
do{
    console.log("hello");
    k++
} while(k < 10)


for (var a = 0; a < 20; a++){
    if (a%2 != 0){
        continue
    }
    console.log(a);
}


