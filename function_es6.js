// Simple Function 
function add (){
    var x = 5;
    var y = 5;
    var z = x+y;
    console.log(z)
}
// add ()

// Parameterized Function
function add (x, y){
    var z = x+y;
    console.log(z)
}
// add (10, 10)


// Return Function
function fun1 (){
    return "Bangladesh is my mother land. "
}

function fun2 (){
    return fun1()
}
// console.log(fun2())

// Anonymous Function --- (Thsi is Reassign able function)

var myFu = function(...x){
    return x[1]
}
// console.log(myFu("Bangladesh", "Japan"))


// Array Function --- (Thsi is Re-assign able function)

var arrayFunction = (...X)=>{
    return X
}
console.log(arrayFunction(1, 2, 3, 4))

