function addn(x){
    return function total(y){
        return x + y
    }
}

let var_a=addn(5)

console.log(var_a(2))
console.log(addn(5)(2))
/*
function addn(x)
{
    return function(y)
    {
        return x + y
    }
}



let var_a = addn(5)     //here outer function returned inner function
let var_b = addn(10)

console.log(var_a(2))   //here we called returned inner function with access of variables of outer function
console.log(var_b(4))

*/