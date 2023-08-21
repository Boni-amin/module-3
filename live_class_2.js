// Git hub link: https://github.com/rupomsoft/JavaScript-OOP-Tutorial-With-Example  




/*
//Object 

let person={
    first_name: "Boni",
    last_name: "Amin",
    age: 23,
    getName : ()=>{
        return person.first_name +" "+ person.last_name;
    }
}
console.log(person.getName());

*/

// Class

class person{
    frist_name = "Boni"
    last_name = "Amin"
    age = 23
    getName=()=>{
        return this.frist_name  +" "+ this.last_name;
    }
}

let res = new person();

console.log(res.age)
console.log(res.frist_name)
console.log(res.last_name)
console.log(res.getName())




