//Map function is used to manipulate every element of the array.
//This Function returns array

 let arr= [11,12,13,14,15]
 console.log(
     arr.map((element,index)=>{
         return element * 2
     })
 )


let brr=[1,121,31,5]
console.log(
    brr.map((element,index)=>
    {
        return '*'+element
    })
)

let crr=[1,2,3]
let drr=[9,9,9]
console.log(
    crr.map((element,index)=>{
        return [element,drr[index]]
    })

)

//Filter function, this function creates array based on conditions
let arr1=[1,2,3,4]
console.log(
    arr1.filter((element,index)=>{
           return element >2 
    })
)

/*reduce()
 - this function is used to find sum of all
   elements in array */
let ar2 = [1,2,3,4,5]
console.log(
    ar2.reduce((fv,nv)=>{
        return fv + nv
    })
)

//iterators in array
//normal for loop
var a1=[10,20,11]
for (let i=0;i<a1.length;i++){
    console.log("array element",+a1[i])
}

//For each loop, this loop iterates through every object element of an array and for each iterable it returns callback function
var a2=[20,30,40]
a2.forEach((element,index)=>{
    console.log(element,index)
})


//for of function 
/*
let map = new Map()
map.set=("subone", "angular")
   .set("sub_two","nodejs")
   .set("sub_three","MangoDB")
for (let [k,v] of map){
    console.log(k,v)
}

let gap = new Map()
gap.set("sub_one","Angular")
   .set("sub_two","ModeJS")
   .set("sub_three","MongoDB")
for(let [k,v] of gap)
console.log(k,v)
*/
let obj = {
    "sub_one" : "Angular",
    "sub_two" : "NodeJS",
    "sub_three" : "MongoDB"
}

for(let key in obj)
console.log(obj[key])

console.log("here we are opertin on array")

 let zrr=[10,20,30,40,50,60,10,10,10,10]
 zrr.push(90)
 console.log(zrr)
 zrr.pop()
 console.log(zrr)
 zrr.unshift(1)
 console.log(zrr)
 zrr.shift()
 zrr.shift()
 zrr.shift()
 console.log(zrr)
 
zrr.forEach((element,index)=>{
    console.log(zrr.indexOf(element))
})

zrr.sort()
console.log(zrr)

let xrr = [10,50,20,40,30]
console.log(arr.sort((num1, num2)=>{
    return num1 - num2
}))

let yrr = [10,50,20,40,30]
console.log(arr.sort((num1, num2)=>{
    return num2 - num1
}))
