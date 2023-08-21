

class MyClass{

    MyFunction1(name) {
        console.log(name)
        console.log("This is Function 1")
    }
    MyFunction2(name) {
        console.log(name)
        // console.log("This is Function 2")
    }
    MyFunction3(name) {
        console.log(name)
        // console.log("This is Function 3")
    }

}

// var obj = new MyClass();

// obj.MyFunction1("This is Function 1");
// obj.MyFunction2("This is Function 2");
// obj.MyFunction3("This is Function 3");

// obj.MyFunction1();
// obj.MyFunction2();
// obj.MyFunction3();


// Calss Constructor 

class ClassConstructor {

    constructor(a,b){
        // console.log("Hellow Class Constructor")
        this.firstName = a;
        this.lastName = b;
    }

    add(){
        var result = this.firstName + this.lastName;
        console.log(result)
    }

}

// var obj2 = new ClassConstructor(20,30)
// obj2.add()


// Stactic Class

class ClassStactic {

    static hello(){
        console.log("This is Class Stastic")
        console.log("This is Class Stastic")
    }

      
}

// ClassStactic.hello();


// inheritance Class And Supar Keyword 

class ParentCalss {

    hello(){
        console.log("This is hello inheritance")
    }
    hello1(){
        console.log("This is hello inheritance 1")
    }

      
}

class ChildCalss extends ParentCalss {

    demo(){
        super.hello()
        super.hello1()
    }
      
}

var objInheritance = new ChildCalss();

// objInheritance.hello();
objInheritance.demo()
