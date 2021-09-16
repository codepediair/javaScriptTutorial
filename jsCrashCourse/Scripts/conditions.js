var x,y,z;

x = 25;
y = 16;
z = 9

////////////////////////////////////////////////
if (x > y){
    console.log("x is greater than y");
} else if (x == y) {
        console.log("x equal to y");
} else {
        console.log("y greater than x");
}

////////////////////////////////////////////////
if (x > y && z > y){
    if (x > z){
        console.log(x);
    } else {
        console.log(z);
    }
} else if (x > z){
    if (x > y){
        console.log(x);
    } else {
        console.log(y);
    }
} else {
    if (z > y){
        console.log(z);
    } else {
        console.log(y);
    }
}


///////////////////////////////////////////
if (x > y && x > z){
    console.log(x);
} else if (z > x && z > y){
    console.log(z);
} else {
    console.log(y);
}