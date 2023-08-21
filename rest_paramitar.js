//Rest Pramitar Function

function addNumbars (a, b, ...numbars){
    let sum=0;
    for (let i of numbars){
        sum=sum+i;
    }
    console.log(sum);
}
// addNumbars(10,20, 5,10, 2, 3);


// Daynamic Function 

const name = function (x, y, value){
    return x+y;
}
console.log(name(1,2));




