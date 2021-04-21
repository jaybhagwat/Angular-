//Consturctor function is used to create classlike structure, 
//In constructor everything (functions and variables) should start with 'this' keyword
//We can create object to constructor using 'new' keyword
/*
function class_one()
{
    this.x="welcome to the constructor function"
}

var obj = new class_one()
console.log(obj.x)
*/
//using anonymous function in constructor
function class_two()  {
        this.x = () => {
            return "We are calling anonymous function"
        }
}

//console.log(temp)
//console.log(temp())

let obj= new class_two()
console.log(obj.x)
console.log(obj.x())