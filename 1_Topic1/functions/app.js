// function name(formal parameter list) // function header
// {   // start of function body
//     Statement1;
//     Statement2;
//     Statement3;
//     Statement4;
//     .....
//     StatementN;
// }   // end of function body

// return gives a value
// console.log() displays a value

/* 
Math.E
Math.PI
Math.LN - natural log
Math.log2()
Math.log10()
Math.round()
Math.ceil()
Math.floor()
Math.trunc() - only the integer value
Math.abs()
Math.pow()
Math.SQRT()
Math.sin()
Math.cos()
Math.min()
Math.max()
Math.random()
Math.sign()  - only return -1,0,1

Math.floor(Math.random () * x) will return a random integer between 0 and x-1 inclusive
Math.floor(Math.random () * 3)
Random num (0,1,2)

CALLBACK function: (Basically changing a function name)
// function step1(name for step2 #CAN BE ANYTHING){
//     f2()
// }
// function step2(){}
// step1(step2)

function step1(name){
    console.log("do first");
    name();
}
function step2(){
    console.log("do second");
}
step1(step2)

#SIMPLER
function step1(){
    console.log("do first");
    step2();
}
function step2(){
    console.log("do second");
}
step1()
*/
