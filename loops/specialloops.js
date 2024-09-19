// array specific loops

//1> for of 

// const arr =[1,2,3,4,5]
// for (const num of arr) {
//     console.log(num)
// }

const str ="hello world"
for (const element of str) {
    // console.log(element);
}

//Maps
//maps are not iteratable so forin loop cannnot be used
const map1 = new Map()
map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);

// console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

// console.log(map1.get('a'));
// Expected output: 97

// console.log(map1.size);
// Expected output: 3

map1.delete('b');

// console.log(map1.size);

for (const mapelement of map1) {
    // console.log(mapelement);
    //returns array of [key , value pairs]
    // [ 'a', 97 ]
    // [ 'c', 3 ]
}
//order maintain rhega 
//saari entries unique key pr hongi

//destructuring of array in map
for (const [key,value] of map1) {
    // console.log(key);
    // console.log(value);
}



//2-> for in loop
const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}
// for (const element of myobject) {
//     //object pr nhi chlta
// }

//loop for objects  -> for in loop
for (const key in myObject) {
   
//    console.log(key +" : "+myObject[key])     
    }

const programming =["js","ruby","swift","c","c++"]

for (const key in programming) {
    // console.log(key +" : "+programming[key])
        
    }

for (const key in map1) {
    // console.log(key)
}



//3-> for each loop
//this requires a callback function , a callback function does not have a name
const course =["js","swift","python"]


course.forEach(function(element){
    // console.log(element)
})
course.forEach((element) => {
    // console.log(element)
});


function printme(item){
    // console.log(item);
}


//diretly function pass karna hai
// course.forEach((printme))

//parameters that are in forEach loop
course.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
})



const mycoding =[{name:"js" , price:1000 , instructor : "vhgdfy"},{name:"python" , price:2000 , instructor : "jbwhgdfy"},{
    name:"ruby",price:9000,instructor:"jkhgfd"
}]

mycoding.forEach((item,index)=>{
    // console.log(index+1 , item.name);
    
})

//for each loop do not return any values
// const values = course.forEach((item)=>{
// console.log( `${item}`)
// return item
// })

// console.log(values);



mynums=[1,2,3,4,5,6,7,8,9,10]

const newnums = [];
mynums.forEach((item)=>{
    if(item>5){
        console.log(`${item} is greater than 5 `)
        newnums.push(item)
    }
    else{
        console.log(`${item} is less than 5`)
    }
})

for (const key in newnums) {
    console.log(newnums[key]);
    
    }
