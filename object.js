

const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullName : {
        name: "John Doe"
    }
  };
  
//  console.log(person.fullName.name)
//  console.log(person["fullName"]["name"])


if(person["firstName"] == "John"){
    console.log("This name is ok And Done")
}else{
    console.log("This name is not found")
}
