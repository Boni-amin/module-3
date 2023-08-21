// Destructuring Array 

/* 
const DisArray = [1, 2, 3 , 4]
const [ , , third, fourth] = DisArray
// const [frist, second, third] = DisArray

console.log(third)
console.log(fourth)



const DisArray = [1, 2, 3, 4, 5, 6, 7]
// const [frist, second, ...rest] = DisArray
const [frist, , , fourth, ...rest] = DisArray


console.log(fourth)
console.log(rest)


// Destructuring Array with Defult value
const DisArray = [1]
const [frist= 0, second=2] = DisArray

console.log(second)



// Destructuring Array with swapp (only 2 value)
 
let a = 5;
let b = 10;

[a, b]=[b, a]

console.log(a)
console.log(b)


// Destructuring Array with Default value 
const DisArray = [1, 2, [3, 4], 5, 6, 7]
// const [frist, second , [third, fourth], ...rest] = DisArray
const [frist, second, ...rest] = DisArray

console.log(rest)

// Destructuring Array with Function 

function DisArray ([frist, second, third, fourth=4]){
    console.log(frist)
    console.log(second)
    console.log(third)
    console.log(fourth)
}
const myArray = [1, 2, 3]
DisArray(myArray)


// Destructuring Object 

const DisObject = {
    fristName : "Boni",
    lasttName : "Amin",
    age : 23
}
// const {fristName, lasttName, age}= DisObject;
const {fristName: fName, lasttName: lName, age}= DisObject;
console.log(fName)
console.log(lName)


// Destructuring Object Defult Value

const DisObject = {
    fristName : "Boni",
    lasttName : "Amin"
}
const {fristName: fName, lasttName: lName, age=23 }= DisObject;
console.log(fName)
console.log(age)

// Destructuring Object nested

const DisObject = {
    name: {
        fristName : "Boni",
        lasttName : "Amin"
    },
    age: 23
}

const {name:{fristName, lasttName}, age}= DisObject
console.log(fristName)
console.log(age)  



// Destructuring Object with rest 

const DisObject = {
    fristName : "Boni",
    lasttName : "Amin",
    age: 23,
    country : "Bangladesh"
}

const {fristName: fName, ...rest }= DisObject;
console.log(fName)
console.log(rest)


// Destructuring Object with function

function DisObjectFunction({fristName, lasttName, age, country}){
    console.log(fristName)
    console.log(lasttName)
    console.log(country)
    console.log(age)
}

const DisObject = {
    fristName : "Boni",
    lasttName : "Amin",
    age: 23,
    country : "Bangladesh"
}

DisObjectFunction(DisObject)

*/

// Destructuring Object with dynamicaly

const DisObject = {
    fristName : "Boni",
    lasttName : "Amin",
    age: 23,
    country : "Bangladesh"
}

const propartyName = 'country';
const {[propartyName]: CName} = DisObject;
console.log(CName)



