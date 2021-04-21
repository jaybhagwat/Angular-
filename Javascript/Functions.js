/*
function one(arg){


    return two
}

function two(){
    return "Success"
}

console.log(one(10)())

*/

//Anonymous Function
var x = ()=>{
    return "this is anonymous function"
}

console.log(x())

//anonymous function returning anonymous function
var y = ()=>{
    return ()=>{
        return "Hidden function"
    }
}

console.log(y)
console.log(y())
console.log(y()())