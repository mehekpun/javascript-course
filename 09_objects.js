//singleton - apne tarah ka ek hi object hai


//object.create - constructor method singleton

//object literals 

const mysym = Symbol("key1")
const jsuser = {
    name: "mehek", //key:value
    age : 19,
    location: "pune",
    [mysym]: "mykey1" //tp use symbol we use []brackets.
} //object

console.log(jsuser["name"])
console.log(jsuser.name)
console.log(jsuser[mysym])
jsuser.age = 20
console.log(jsuser.age)

//Object.freeze(jsuser)//the values won't change

jsuser.greeting = function(){
    console.log("hello js user")
}
jsuser.greetingtwo = function(){
    console.log(`hello js user, ${this.name}`)
}
console.log(jsuser.greeting())
console.log(jsuser.greeting) //function return back - function execute nhi hua hai bs reference aaya hai
console.log(jsuser.greetingtwo())