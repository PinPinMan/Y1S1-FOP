// object variable name (car)
// (type/model/color)       = Property Name or properties
// ("Fiat","500","white")   = Property Value
// output value (car.type) or (car["type"])

// var car = {
//     type: "Fiat",
//     model: "500",
//     color: "white"
// }

// var car = new Object();
// car.type = "Fiat";
// car.model = "500";
// car.color = "white";

// var objectName = {
//     functionName: function(parameter){}
// }
// var employee = {
//     salary: [3000,3800],
//     tax: function(n){
//         return this.salary[n]*0.2
//     }
// }console.log(employee.tax(0));

// Constructor - special type of method to create objects from classes
//             - Classes >construct> Objects
// Object   - an executable entity combining methods and properties to make particular data useful
//          - State     - Described by the attributes of an object
//          - Behavior  - Describes how object will act
//          - Identity  - Unique value that distinguishes an object
// Class - Blueprint for creating objects/instances in (OOP)
//       - encapsulates data for the object

// OBJECTS
// Rectangle
//      Identity    - Rectangle1
//      State       - length & width
//      behaviour   - calculateArea
// BackAccount 
//      Identity    - MyBank1
//      State       - name & savings
//      Behaviour   - calculateInterest

// new Circle(); will still generate the object but attribute is undefined
// constructor(attr1 = default)

// class Circle{
//     constructor(radius){
//         this.radius = radius; //state
//     }
//     getArea(){  //behavious (method)
//         return Math.PI * (this.radius**2);
//     }
// }

// var circle1 = new Circle(25);    //identity
// console.log(circle1);


// class BankAccount{
//     constructor(name,savings){
//         this.name = name;
//         if (Number.isInteger(savings)){
//             this.savings = (savings.toString()) + ".00";
//         } else{
//         this.savings = parseFloat(savings);
//         }
//     }
//     getBalance(){
//         return (`${this.name} has $${this.savings}`)
//     }
// }

// var person1 = new BankAccount("Oliver Twist",1000.00);
// var person2 = new BankAccount("Richie Rich",100000.00);
// console.log(person1.getBalance());
// console.log(person2.getBalance());

// class Fan{
//     constructor(speed,on){
//         this.speed = speed;
//         this.on = on;
//     }
//     showState(){
//         if (this.on){
//             var on = "on"
//             switch(this.speed){
//                 case 1: 
//                     var speed = "low";
//                     break;
//                 case 2: 
//                     var speed = "medium";
//                     break;
//                 case 3: 
//                     var speed = "fast";     
//             }
//         return (`${on} at ${speed} speed.`);
//         }
//         return "off."
//     }
// }

// var f1 = new Fan(1,false);
// console.log(`Fan 1 is ${f1.showState()}`);
// var f2 = new Fan(2,true);
// console.log(`Fan 2 is ${f2.showState()}`)