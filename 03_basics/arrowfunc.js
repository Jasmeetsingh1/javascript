//this --> current context ko refer krta hai(context ->(kis bare mei baat ho rhi h))

//node enviornment console.log(this) ->{} empty parantheis hoga uska answer

//inspection(browser enviornment)
// console.log(this) ->window 

//function ke andar console.log(this) -> bahut sari values milti hai


const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) => ( num1 + num2 )



// curly braces uses karenge to return key word use karna padega aur directly paranthesis use krenge ti nhi lahgana pdega
const addTwo = (num1, num2) => ({username: "hitesh"})
//object paranthesis mei wrap honge hi honge


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

