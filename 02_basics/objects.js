//singleton (with the help of a constructor) 
// Object.create();




//object literals -> not singleton
//key value pair


const mysym = Symbol("key1")

const js_user={
    name:"jasmeet",
    age:18,
    [mysym] : "mykey1",  //mysym:"mykey1"-->string hai naaki symbol
    location:"jaipur",
    "full name":"jasmeet singh" ,//cant be accessed by  dot method
    email:"jasmmet@gmail.com",
    isloggedin:false,
    lastlogindays:["monday","tuesday"]
}
// console.log(js_user.email)
// console.log(js_user."full name")  galat way hai nhi milega answer usse
// console.log(js_user["email"])
// console.log(js_user["full name"])
// console.log(js_user[mysym])
// console.log(typeof(js_user[mysym]));


js_user.email="jasmeet.cc@gmail.com" //method to change the value
// Object.freeze(js_user)  ab koi change nhi hoga user mei 
js_user.age =19 //will not be changed
// console.log(js_user);


js_user.greeting = function(){

    console.log("hello jii");
    
}
js_user.greeting2 = function(){

    console.log(`hello jii,${this.name}`);
    
}

console.log(js_user.greeting())
console.log(js_user.greeting2())