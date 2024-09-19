//filter takes call back like foreach but it returns the values

const mynums =[1,2,3,4,5,6,7,8,9,10]

const x = mynums.filter((item,index)=>{
    if(item<5)  //for explicit return (item) => item>5 ismei koi scope nhi hai diretly return hojayega par agar hum scope start karege to humei return keyword ka use krns pdega
        {
        
        // console.log(`${item} is less than 5 `)
        return [item,index]
    }
    else {
        // console.log(`${item} is greater than 5`);
    }
    
})

// console.log(x);



//excercise -> filter

const books = [
    {
        title: "The Great Gatsby",
        genre: "Fiction",
        price: 10.99,
        published: "1925",
        edition: "1st"
    },
    {
        title: "A Brief History of Time",
        genre: "Science",
        price: 15.50,
        published: "1988",
        edition: "2nd"
    },
    {
        title: "The Catcher in the Rye",
        genre: "Fiction",
        price: 8.99,
        published: "1951",
        edition: "1st"
    },
    {
        title: "The Pragmatic Programmer",
        genre: "Technology",
        price: 39.99,
        published: "1999",
        edition: "20th Anniversary Edition"
    },
    {
        title: "To Kill a Mockingbird",
        genre: "Fiction",
        price: 12.49,
        published: "1960",
        edition: "3rd"
    },
    {
        title: "1984",
        genre: "Dystopian",
        price: 9.99,
        published: "1949",
        edition: "1st"
    },
    {
        title: "Sapiens: A Brief History of Humankind",
        genre: "History",
        price: 18.99,
        published: "2011",
        edition: "1st"
    },
    {
        title: "The Lean Startup",
        genre: "Business",
        price: 22.99,
        published: "2011",
        edition: "1st"
    },
    {
        title: "Harry Potter and the Philosopher's Stone",
        genre: "Fantasy",
        price: 19.99,
        published: "1997",
        edition: "1st"
    },
    {
        title: "The Alchemist",
        genre: "Adventure",
        price: 14.99,
        published: "1988",
        edition: "2nd"
    }
];

let mybooks = books.filter((item)=> item.genre ==="Fiction");

// console.log(mybooks);


mybooks = books.filter((item)=>item.published>"2000" &&(item.genre==='Fiction'||item.genre==='History'));
// console.log(mybooks);
// console.log(mybooks[0].title)


//map -> with the help of it we can perform a similar kind of operations on all the elements present in the array 
//it returns the value 
//callback function reference pass krna hai function nhi
 const newarr=mynums.map((item)=> item+10)
//  console.log(newarr)

//map wala kaam by for each loop
const newar = []
mynums.forEach((item)=>{
    item+=10
    newar.push(item)
})
// console.log(newar)


//chaining
const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNums = myNumers
                .map((num) => num * 10 )
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

// console.log(newNums);

const mynumss = [1,2,3,4,5]

const ans = mynumss.reduce((prev , cur , curidx )=>{{
    prev+=cur;
}
return prev})
console.log(ans)
//yha previous ne apne aap zero leliya hai 

//2nd method for reduce
const initialval=0;
const sumwithinitial = mynumss.reduce((accumlator , currentvalue)=> accumlator + currentvalue , initialval)
console.log(sumwithinitial)

//, ke baad initialval accumulator mei jaayega  



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);