function saymyname(){
    console.log("jasmeet")
}
// saymyname --> sirf itne ko reference khte hai 
//function call 
// saymyname()


//parameters -> function banate time jo use krte hai example-->function  numadd(num1,num2)
//arguments are passed while calling a function


function loginusername(username = "sam"){
    if(!username/*or username===undefined*/){
        console.log("please enter a username");
        return 
    }
    return`${username} just logged in`
}

// console.log(loginusername());
// console.log(loginusername("jasmeet"));


// ---------------------functions with objects and arrays

 //eshopping cart (rest operator multiple values kaise pass hote hai->  ...)
 function calculatecartprice(...num1){
    return num1
 }
// console.log(calculatecartprice(200,400,800));


const user ={
    name:"jasmeet",
    age:21
}
function handleobject(anyobject){
    console.log(`username is ${anyobject.name} and age is ${anyobject.age}`);
    
}
// handleobject(user)
// handleobject({
//     name:"jasmeet",
//     age:21
// })

const myarr = [200,400,100,600]

function returnsecval(getarray){
    return getarray[1]
}
console.log(returnsecval(myarr));


