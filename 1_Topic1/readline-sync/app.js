/* 
prompt()
parseInt()
parseFloat()
readLine()
readInt() 

questionInt()
*/
/* var input = require('readline-sync');

var userName = input.question('May I have your name? ');
console.log('Hi ' + userName + '!');

var gender = input.question('What is your gender? ');
console.log("Oh! so you're a " + gender + "!");

var prefered_gender = input.question('What gender are you attracted to? ');
if (gender === prefered_gender){
    console.log("GAY!!!");
} else{
    console.log("Bros staighter than the twin towers");
}
*/


var input = require('readline-sync')
var num1 = (input.question("Enter num1: "))
var num2 = (input.question("Enter num2: "))

console.log(num1/num2)