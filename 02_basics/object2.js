// const tinderuser = new Object() -> singeltgon
const tinderuser={}

tinderuser.id="123ABC"
tinderuser.name="sammy"
tinderuser.isloggedin=false
// console.log(tinderuser);

//nesting of objects
const regularuser ={
    email:"sum@gmail.com",
    fullname : {
        userfullanme:{
        lastname:"singh",
        firstname:"jasmeet"
        }
    }
}
// console.log(regularuser.fullname?.userfullanme.firstname);

//?--> represents if fullname value is there then use it else rehndo

const obj1 = {
    1:"a",
    2:"b",
    3:"c"
}
const obj2 = {
    4:"a",
    5:"b",
    6:"c"
}

const obj3 = {obj1 , obj2}
// console.log(obj3); // dono object ek object mei sama gye hai


const obj4 = Object.assign({},obj1 , obj2)
// {}--> shows a empty parameter  and it is acting as a target and all other are sources   
//object.assign(target,source)


const objx={...obj1,...obj2};
// console.log(objx);


const users =[{
    id:1,
    email:"nekfjh@gmail.com"
},{
    id:1,
    email:"nekfjh@gmail.com"
},
{
    id:1,
    email:"nekfjh@gmail.com"
},
{
    id:1,
    email:"nekfjh@gmail.com"
}]

// users[1].email
// console.log(tinderuser)


// console.log(Object.keys(tinderuser)); //project mei kaam aayega (database)


// console.log(Object.values(tinderuser)); //project mei kaam aayega (database)


// console.log(Object.entries(tinderuser)); 


console.log(tinderuser.hasOwnProperty('isloggedin'));
