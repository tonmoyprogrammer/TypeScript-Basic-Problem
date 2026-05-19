// ## Problem 1:

type ArrayType  = number[];
const filterEvenNumbers = (numbers:ArrayType)=>
{
    const resutl = numbers.filter((digits:number)=>digits % 2 === 0 )
    return resutl;
}
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]))


// ## Problem 2:

const reverseString = (checkValue:string)=>{
  const result = checkValue.split("").reverse().join("")
   return result;
};
console.log(reverseString("tpircsepyt"))


// ## Problem 3:

type StringOrNumber = string|number;
const checkType = (types:StringOrNumber)=>
{
    if(typeof  types === "string")
    {
        return "String";
    }
    else{
        return "Number";
    }
}
console.log(checkType("Hello"))
console.log(checkType(42))

// ## Problem 4:

function getProperty <T extends {id:number,name:string,age:number} ,Y extends keyof T>(users:T ,findUser:Y)
{
    return users[findUser];
}

const user = { id: 1, name: "John Doe", age: 21 };
console.log(getProperty(user, "name"));


// ## Problem 5:

interface Book {
    title:string,
    author:string,
    publishedYear:number
} 

const myBook:Book = { title: "TypeScript Guide", author: "Jane Doe", publishedYear: 2024 };

const toggleReadStatus = (books:Book)=>
{
    
    return{...books,isRead:true}
}
console.log(toggleReadStatus(myBook))


// ## Problem 6:

class Person {
    
    constructor(public name:string,public age:number) {
        
    }

}
class Student extends Person{
    constructor(name:string,age:number,public grade:string) {
        super(name,age)
        this.name = name;
        this.age = age;
    }
    getDetails()
    {
        return `${this.name} ${this.age} ${this.grade}`
        
    }
}
const student = new Student("Alice", 20, "A");
console.log(student.getDetails())

// ## Problem 7:

const getIntersection = (a:number[],b:number[])=>
{
    const newArr = a.filter((ele:number)=>
    {
        if(b.includes(ele))
        {
            return b;
        }
    })
    return newArr;
}
console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]))
