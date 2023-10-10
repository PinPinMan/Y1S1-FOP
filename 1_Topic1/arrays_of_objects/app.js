// class Circle{
//     constructor(radius){
//         this.radius = radius; //state
//     }
//     getArea(){  //behavior (method)
//         return Math.PI * (this.radius**2);
//     }
// }

// var circleArr = [
//     new Circle(5),
//     new Circle(10),
//     new Circle(25)
// ];

// console.log(circleArr[2].getArea());


// PassByValue  - Pass Primitive types value to functions/methods
//              - Local parameter does NOT affect global variable
// PassByReference - Pass objects to functions/methods
//                 - the parameters contains a REFERENCE to the object only
//                 - any changes to the object will affect the original object

// Class Import/Export
//      Method1
//          Import - className = require("./file.js");
//          Export - module.exports = className;
//      Method2
//          Import - className = require("./file")(10,20);
//          Export - module.exports = (args) => {return new ClassName(args)};  



// class Square{
//     constructor (length){
//         this.length = length;
//     }
//     calculateArea(){
//         return this.length ** 2;
//     }
// }

// PART(1)
// sqArray = [];
// for (var i=0;i<10;i++){
//     rand = Math.round(Math.random()*11)+10;
//     sqArray.push(new Square(rand));
// }
// // console.log(sqArray)
// console.log("Length\t\tArea");
// for (var s of sqArray){
//     console.log(`${s.length}\t\t${s.calculateArea()}`);
// }

// PART(2)
// function createSquareArray() {
//     var len;
//     var sqArray = [];
//     for(var i=0; i<10; i++) {
//         len = 10 + Math.floor(Math.random() * 11);
//         sqArray.push(new Square(len));
//     }
//     return sqArray;
// }

// function printSquareArray(arr) {
//     console.log("Length\t\tArea");
//     for (var square of arr){
//         console.log(`${square.length}\t\t${square.calculateArea()}`);
//     }
// }

// var myArray = createSquareArray();
// printSquareArray(myArray);


// 18/6/2023    2.49am💀 (solved in 1hr+)
class Contact{
    constructor(name,mobileNumber){
        this.name = name;
        this.mobileNumber = mobileNumber;
    }
    getContactDetails(){
        console.log(`Name: ${this.name}`);
        console.log(`Mobile Number: ${this.mobileNumber}`);
    }
}

class AddressBook{
    constructor() {
        this.myContact = [];
        this.myContact.push(new Contact("Homer", 98849959));
        this.myContact.push(new Contact("Marge", 84774744));
        this.myContact.push(new Contact("Lisa", 86994994));
        this.myContact.push(new Contact("Maggie", 94775883));
        this.myContact.push(new Contact("Bart", 88838848));
    }

    getNumberOfContacts(){
        return this.myContact.length;
    }
    getContactAt(index){
        return this.myContact[index][1];
    }
    searchContact(name){
        for (var contact of this.myContact){
            if (name.toUpperCase() === contact["name"].toUpperCase()){
                return (contact["mobileNumber"])
            }
        }
        return "not found!"
    }
}
var input = require("readline-sync")

var addressBook = new AddressBook();
var options = ["Show All Contacts","Search Contact","Exit"]
var display = "\nPersonal Addressbook\n\
-------------------------"
var isExit = true;
while (isExit){
    console.log(display);
    for (var option in options){
        console.log(`(${option-(-1)}) ${options[option]}`);
    }
    choice = input.question(">> ");
    switch(choice){
        case "1":
            var len = addressBook.getNumberOfContacts();
            var isExitContect = true;
            var index = 1
            while (isExitContect){
                console.log(`\n-----------------------------\nContact ${index} of 5\n-----------------------------`);
                addressBook.myContact[index-1].getContactDetails();
                console.log("-----------------------------")
                move = input.question("(Press N for next contact, P for previous contact, X to exit)\n>> ");
                
                switch(move.toUpperCase()){
                    case "N":
                        if (index === len){
                            index = 1;
                        } else{
                            index += 1;
                        }
                        break;
                    case "P":
                        if (index === 1){
                            index = len;
                        } else{
                        index -= 1;
                        }
                        break;
                    case "X":
                        isExitContect = false;
                }
            }
            break
        case "2":
            searchName = input.question("Enter the name of the contact: ");
            if (addressBook.searchContact(searchName) === "not found!"){
                console.log(`${searchName}'s mobile number is not found!`);
            } else{
                console.log(`${searchName}'s mobile number is ${addressBook.searchContact(searchName)}`);
            }
            break;
        case "3":
            console.log("Good Bye!");
            isExit = false;
    }
}